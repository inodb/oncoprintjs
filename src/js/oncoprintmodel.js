/* jshint browserify: true, asi: true */
var binarysearch = require('./binarysearch.js');
var hasElementsInInterval = require('./haselementsininterval.js');
var CachedProperty = require('./CachedProperty.js');
var clustering = require('./clustering.js');
var $ = require('jquery');
var BucketSort = require("./bucketsort.js");
var doesCellIntersectPixel = require("./utils.js").doesCellIntersectPixel;

function ifndef(x, val) {
    return (typeof x === "undefined" ? val : x);
}

var UnionOfSets = (function() {
    // a set, to be passed in as argument, is an object where the values are truthy
    function UnionOfSets() {
	this.union_count = {};
	this.sets = {};
    }
    var setOfKeys = function (obj) {
	var set = {};
	for (var k in obj) {
	    if (typeof obj[k] !== 'undefined') {
		set[k] = true;
	    }
	}
	return set;
    };
    UnionOfSets.prototype.putSet = function(id, set) {
	this.removeSet(id);
	this.sets[id] = set;
	
	var union_count = this.union_count;
	for (var k in set) {
	    if (set[k]) {
		this.union_count[k] = this.union_count[k] || 0;
		this.union_count[k] += 1;
	    }
	}
    }
    UnionOfSets.prototype.removeSet = function(id) {
	var union_count = this.union_count;
	var old_set = this.sets[id] || {};
	for (var k in old_set) {
	    if (old_set[k]) {
		union_count[k] -= 1;
		if (union_count[k] === 0) {
		    delete union_count[k];
		}
	    }
	}
	delete this.sets[id];
    }
    UnionOfSets.prototype.getUnion = function() {
	return setOfKeys(this.union_count);
    }
    return UnionOfSets;
})();

var setUnion = function(list_of_sets) {
    var union = {};
    for (var i=0; i<list_of_sets.length; i++) {
	var set = list_of_sets[i];
	for (var k in set) {
	    if (set.hasOwnProperty(k)) {
		union[k] = true;
	    }
	}
    }
    return union;
};

var objectValues = function(obj) {
    return Object.keys(obj).map(function(key) {
	return obj[key];
    });
};

var arrayUnique = function(arr) {
    var present = {};
    var unique = [];
    for (var i=0; i<arr.length; i++) {
	if (typeof present[arr[i]] === 'undefined') {
	    present[arr[i]] = true;
	    unique.push(arr[i]);
	}
    }
    return unique;
};

var copyShallowObject = function(obj) {
    var copy = {};
    for (var key in obj) {
	if (obj.hasOwnProperty(key)) {
	    copy[key] = obj[key];
	}
    }
    return copy;
};

var clamp = function(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
};

var OncoprintModel = (function () {
    var MIN_ZOOM_PIXELS = 100;
    var MIN_CELL_HEIGHT_PIXELS = 3;
    function OncoprintModel(init_cell_padding, init_cell_padding_on,
	    init_horz_zoom, init_vert_zoom, 
	    init_cell_width, init_track_group_padding) {
		
	var model = this;	
	
	// Global properties
	this.sort_config = {};
	this.rendering_suppressed_depth = 0;
	
	// Rendering Properties
	this.max_height = 500;
	this.cell_width = ifndef(init_cell_width, 6);
	this.horz_zoom = ifndef(init_horz_zoom, 1);
	this.vert_zoom = ifndef(init_vert_zoom, 1);
	this.horz_scroll = 0;
	this.vert_scroll = 0;
	this.bottom_padding = 0;
	this.track_group_padding = ifndef(init_track_group_padding, 10);
	this.cell_padding = ifndef(init_cell_padding, 3);
	this.cell_padding_on = ifndef(init_cell_padding_on, true);
	this.cell_padding_off_cell_width_threshold = 2;
	this.cell_padding_off_because_of_zoom = (this.getCellWidth() < this.cell_padding_off_cell_width_threshold);
	this.id_order = [];
	this.hidden_ids = {};
	this.track_group_legend_order = [];
	this.show_track_sublabels = false;
	
	// Track Properties
	this.track_important_ids = {}; // a set of "important" ids - only these ids will cause a used rule to become active and thus shown in the legend
	this.track_label = {};
	this.track_label_color = {};
	this.track_sublabel = {};
	this.track_html_label = {};
	this.track_link_url = {};
	this.track_description = {};
	this.cell_height = {};
	this.track_padding = {};
	this.track_data_id_key = {};
	this.track_tooltip_fn = {};
	this.track_removable = {};
	this.track_remove_callback = {};
	this.track_sort_cmp_fn = {};
	this.track_sort_direction_changeable = {};
	this.track_sort_direction = {}; // 1: ascending, -1: descending, 0: not
	this.track_sort_direction_change_callback = {};
	this.track_data = {};
	this.track_rule_set_id = {}; // track id -> rule set id
	this.track_active_rules = {}; // from track id to active rule map (map with rule ids as keys)
	this.track_info = {};
	this.$track_info_tooltip_elt = {};
	this.track_has_column_spacing = {}; // track id -> boolean
	this.track_expansion_enabled = {}; // track id -> boolean or undefined
	this.track_expand_callback = {}; // track id -> function that adds expansion tracks for its track if set
	this.track_expand_button_getter = {}; // track id -> function from boolean to string if customized
	this.track_expansion_tracks = {}; // track id -> array of track ids if applicable
	this.track_expansion_parent = {}; // track id -> track id if applicable
	this.track_custom_options = {}; // track id -> { label, onClick, weight, disabled }[] ( see index.d.ts :: CustomTrackOption )
	
	// Rule Set Properties
	this.rule_sets = {}; // map from rule set id to rule set
	this.rule_set_active_rules = {}; // map from rule set id to map from rule id to use count
	
	// Cached and Recomputed Properties
	this.visible_id_order = new CachedProperty([], function () {
	    var hidden_ids = model.hidden_ids;
	    return model.id_order.filter(function (id) {
		return !hidden_ids[id];
	    });
	});
	this.track_id_to_datum = new CachedProperty({}, function(model, track_id) {
	    var curr = model.track_id_to_datum.get();
	    if (model.getContainingTrackGroup(track_id) !== null) {
		var map = {};
		var data = model.getTrackData(track_id) || [];
		var data_id_key = model.getTrackDataIdKey(track_id) || '';
		for (var i=0; i<data.length; i++) {
		    map[data[i][data_id_key]] = data[i];
		}
		curr[track_id] = map;
	    } else {
		delete curr[track_id];
	    }
	    return curr;
	});
	this.track_present_ids = new CachedProperty(new UnionOfSets(), function(model, track_id) {
	    var union = model.track_present_ids.get();
	    if (model.getContainingTrackGroup(track_id) !== null) {
		var ids = {};
		var data = model.getTrackData(track_id) || [];
		var data_id_key = model.getTrackDataIdKey(track_id) || '';
		for (var i = 0; i < data.length; i++) {
		    ids[data[i][data_id_key]] = true;
		}
		union.putSet(track_id, ids);
	    } else {
		union.removeSet(track_id);
	    }
	    return union;
	});
	this.present_ids = new CachedProperty({}, function() {
	    return model.track_present_ids.get().getUnion();
	});
	this.track_present_ids.addBoundProperty(this.present_ids);
	
	this.id_to_index = new CachedProperty({}, function() {
	    var id_to_index = {};
	    var id_order = model.getIdOrder(true);
	    for (var i=0; i<id_order.length; i++) {
		id_to_index[id_order[i]] = i;
	    }
	    return id_to_index;
	});
	this.visible_id_to_index = new CachedProperty({}, function() {
	    var id_to_index = {};
	    var id_order = model.getIdOrder();
	    for (var i=0; i<id_order.length; i++) {
		id_to_index[id_order[i]] = i;
	    }
	    return id_to_index;
	});
	this.visible_id_order.addBoundProperty(this.visible_id_to_index);
	
	this.track_groups = [];
	this.track_group_sort_priority = [];
	this.track_group_header = [];
	
	this.track_tops = new CachedProperty({}, function () {
	    var tops = {};
	    var groups = model.getTrackGroups();
	    var y = 0;
	    for (var i = 0; i < groups.length; i++) {
		var group = groups[i];
		if (model.getTrackGroupHeader(i).length > 0 && group.length > 0) {
		    y += model.getTrackGroupHeaderSize();
		}
		for (var j = 0; j < group.length; j++) {
		    var track_id = group[j];
		    tops[track_id] = y;
		    y += model.getTrackHeight(track_id, true);
		}
		if (group.length > 0) {
		    y += model.getTrackGroupPadding(true);
		}
	    }
	    return tops;
	});
	this.cell_tops = new CachedProperty({}, function() {
	    var track_tops = model.track_tops.get();
	    var cell_tops = {};
	    for (var k in track_tops) {
		if (track_tops.hasOwnProperty(k)) {
		    cell_tops[k] = track_tops[k] + model.getTrackPadding(k, true);
		}
	    }
	    return cell_tops;
	});
	this.label_tops = new CachedProperty({}, function() {
	    return model.cell_tops.get();
	});
	
	this.track_tops.addBoundProperty(this.cell_tops);
	this.cell_tops.addBoundProperty(this.label_tops);
	
	this.track_tops_zoomed = new CachedProperty({}, function () {
	    var tops = {};
	    var groups = model.getTrackGroups();
	    var y = 0;
	    for (var i = 0; i < groups.length; i++) {
		var group = groups[i];
		for (var j = 0; j < group.length; j++) {
		    var track_id = group[j];
		    tops[track_id] = y;
		    y += model.getTrackHeight(track_id);
		}
		if (group.length > 0) {
		    y += model.getTrackGroupPadding();
		}
	    }
	    return tops;
	});
	this.cell_tops_zoomed = new CachedProperty({}, function() {
	    var track_tops = model.track_tops_zoomed.get();
	    var cell_tops = {};
	    for (var k in track_tops) {
		if (track_tops.hasOwnProperty(k)) {
		    cell_tops[k] = track_tops[k] + model.getTrackPadding(k);
		}
	    }
	    return cell_tops;
	});
	this.label_tops_zoomed = new CachedProperty({}, function() {
	    return model.cell_tops_zoomed.get();
	});
	
	this.track_tops.addBoundProperty(this.track_tops_zoomed);
	this.track_tops_zoomed.addBoundProperty(this.cell_tops_zoomed);
	this.cell_tops_zoomed.addBoundProperty(this.label_tops_zoomed);
	
	this.column_left = new CachedProperty({}, function() {
	    var cell_width = model.getCellWidth(true);
	    var cell_padding = model.getCellPadding(true);
	    var left = {};
	    var ids = model.getIdOrder();
	    for (var i = 0; i < ids.length; i++) {
		left[ids[i]] = i * (cell_width + cell_padding);
	    }
	    return left;
	});
	
	this.zoomed_column_left = new CachedProperty({}, function() {
	    var cell_width = model.getCellWidth();
	    var cell_padding = model.getCellPadding();
	    var left = {};
	    var ids = model.getIdOrder();
	    for (var i = 0; i < ids.length; i++) {
		left[ids[i]] = i * (cell_width + cell_padding);
	    }
	    return left;
	});
	this.column_left_no_padding = new CachedProperty({}, function() {
	    var cell_width = model.getCellWidth(true);
	    var left = {};
	    var ids = model.getIdOrder();
	    for (var i = 0; i < ids.length; i++) {
		left[ids[i]] = i * cell_width;
	    }
	    return left;
	});
	this.column_left.addBoundProperty(this.zoomed_column_left);
	this.column_left.addBoundProperty(this.column_left_no_padding);
	
	this.precomputed_comparator = new CachedProperty({}, function(model, track_id) {
	    var curr_precomputed_comparator = model.precomputed_comparator.get();
	    curr_precomputed_comparator[track_id] = new PrecomputedComparator(model.getTrackData(track_id),
									    model.getTrackSortComparator(track_id),
									    model.getTrackSortDirection(track_id),
									    model.getTrackDataIdKey(track_id));
	    return curr_precomputed_comparator;
	});// track_id -> PrecomputedComparator
    }

    OncoprintModel.prototype.toggleCellPadding = function () {
	this.cell_padding_on = !this.cell_padding_on;
	this.column_left.update();
	return this.cell_padding_on;
    }

    OncoprintModel.prototype.getCellPadding = function (base, dont_consider_zoom) {
	return (this.cell_padding * (base ? 1 : this.horz_zoom)) * (+this.cell_padding_on) * (dont_consider_zoom ? 1 : +(!this.cell_padding_off_because_of_zoom));
    }

    OncoprintModel.prototype.getHorzZoom = function () {
	return this.horz_zoom;
    }

    OncoprintModel.prototype.getHorzZoomToFitNumCols = function(width, num_cols) {
	var cell_width = this.getCellWidth(true);
	var zoom_if_cell_padding_on = clamp(width / (num_cols*(cell_width + this.cell_padding)),
					    0,1);
	var zoom_if_cell_padding_off = clamp(width / (num_cols*cell_width),
					    0,1);
	var zoom;
	if (!this.cell_padding_on) {
	    zoom = zoom_if_cell_padding_off;
	} else {
	    if (cell_width * zoom_if_cell_padding_on < this.cell_padding_off_cell_width_threshold) {
		if (cell_width * zoom_if_cell_padding_off >= this.cell_padding_off_cell_width_threshold) {
		    // Because of cell padding toggling there's no way to get exactly the desired number of columns.
		    // We can see this by contradiction: if we assume that cell padding is on, and try to fit exactly
		    // our number of columns, we end up turning cell padding off (outer if statement). If we assume that
		    // cell padding is off and try to fit our number of columns, we find that cell padding is on (inner if statement).
		    // Thus, it's impossible to show this exact number of columns - we either under or overshoot it. We
		    // thus should overshoot it by as little as possible, show as few columns as possible while still fitting
		    // this amount. It must be exactly at the threshold for switching.
		    // 
		    var unrounded_zoom = this.cell_padding_off_cell_width_threshold / cell_width;
		    var unrounded_num_cols = width / (unrounded_zoom * cell_width);
		    var rounded_num_cols = Math.ceil(unrounded_num_cols);
		    zoom = width / (rounded_num_cols * cell_width);
		} else {
		    zoom = zoom_if_cell_padding_off;
		}
	    } else {
		zoom = zoom_if_cell_padding_on;
	    }
	}
	return zoom;
    }
    OncoprintModel.prototype.getHorzZoomToFit = function(width, ids) {
	ids = ids || [];
	if (ids.length === 0) {
	    return 1;
	}
	var id_to_index_map = this.getVisibleIdToIndexMap();
	var indexes = ids.map(function(id) { return id_to_index_map[id]; });
	var max = Number.NEGATIVE_INFINITY;
	var min = Number.POSITIVE_INFINITY;
	for (var i=0; i<indexes.length; i++) {
	    max = Math.max(indexes[i], max);
	    min = Math.min(indexes[i], min);
	}
	var num_cols = max - min + 1;
	return this.getHorzZoomToFitNumCols(width, num_cols);
    }
    
    OncoprintModel.prototype.getMinHorzZoom = function() {
	return Math.min(MIN_ZOOM_PIXELS / (this.getIdOrder().length*this.getCellWidth(true) + (this.getIdOrder().length-1)*this.getCellPadding(true)), 1);
    }
    
    OncoprintModel.prototype.getMinVertZoom = function() {
	// Can't zoom to be smaller than max height
	// That zoom would be z*this.getOncoprintHeight(true) = max_height
	return this.max_height / this.getOncoprintHeight(true);
    }
    
    OncoprintModel.prototype.setHorzScroll = function(s) {
	this.horz_scroll = Math.max(0, s);
	return this.horz_scroll;
    }
    OncoprintModel.prototype.setVertScroll = function(s) {
	this.vert_scroll = Math.max(0, s);
	return this.vert_scroll;
    }
    OncoprintModel.prototype.setScroll = function(h, v) {
	this.setHorzScroll(h);
	this.setVertScroll(v);
    }
    OncoprintModel.prototype.getHorzScroll = function() {
	return this.horz_scroll;
    }
    OncoprintModel.prototype.getVertScroll = function() {
	return this.vert_scroll;
    }
    OncoprintModel.prototype.setZoom = function(zoom_x, zoom_y) {
	this.setHorzZoom(zoom_x);
	this.setVertZoom(zoom_y);
    }
    var setCellPaddingOffBecauseOfZoom = function(model, val) {
	model.cell_padding_off_because_of_zoom = val;
	model.column_left.update();
    };
    OncoprintModel.prototype.setHorzZoom = function (z) {
	var min_zoom = this.getMinHorzZoom();
	this.horz_zoom = clamp(z, min_zoom, 1);
	this.column_left.update();
	
	if (this.getCellWidth() < this.cell_padding_off_cell_width_threshold && !this.cell_padding_off_because_of_zoom) {
	    setCellPaddingOffBecauseOfZoom(this, true);
	} else if (this.getCellWidth() >= this.cell_padding_off_cell_width_threshold && this.cell_padding_off_because_of_zoom) {
	    setCellPaddingOffBecauseOfZoom(this, false);
	}
	return this.horz_zoom;
    }
    
    
    OncoprintModel.prototype.getVertZoom = function() {
	return this.vert_zoom;
    }
    
    OncoprintModel.prototype.setVertZoom = function (z) {
	var min_zoom = this.getMinVertZoom();
	this.vert_zoom = clamp(z, min_zoom, 1);
	this.track_tops.update();
	return this.vert_zoom;
    }

    OncoprintModel.prototype.hideTrackLegends = function(track_ids) {
	track_ids = [].concat(track_ids);
	for (var i=0; i<track_ids.length; i++) {
	    this.getRuleSet(track_ids[i]).exclude_from_legend = true;
	}
    }
    
    OncoprintModel.prototype.showTrackLegends = function(track_ids) {
	track_ids = [].concat(track_ids);
	for (var i=0; i<track_ids.length; i++) {
	    this.getRuleSet(track_ids[i]).exclude_from_legend = false;
	}
    }

    var clearTrackActiveRules = function(model, track_id) {
	var rule_set_id = model.track_rule_set_id[track_id];
	var track_active_rules = model.track_active_rules[track_id];
	var rule_set_active_rules = model.rule_set_active_rules[rule_set_id];

	var track_active_rule_ids = Object.keys(track_active_rules);
	for (var i=0; i<track_active_rule_ids.length; i++) {
	    var rule_id = track_active_rule_ids[i];
	    if (rule_set_active_rules.hasOwnProperty(rule_id)) {
		rule_set_active_rules[rule_id] -= 1;
		if (rule_set_active_rules[rule_id] <= 0) {
		    delete rule_set_active_rules[rule_id];
		}
	    }
	}
	model.track_active_rules[track_id] = {};
    };
    
    var setTrackActiveRules = function(model, track_id, active_rules) {
	clearTrackActiveRules(model, track_id);
	model.track_active_rules[track_id] = active_rules;
	var rule_set_id = model.track_rule_set_id[track_id];
	var rule_set_active_rules = model.rule_set_active_rules[rule_set_id];
	
	var track_active_rule_ids = Object.keys(active_rules);
	for (var i=0; i<track_active_rule_ids.length; i++) {
	    var rule_id = track_active_rule_ids[i];
	    rule_set_active_rules[rule_id] = rule_set_active_rules[rule_id] || 0;
	    rule_set_active_rules[rule_id] += 1;
	}
    };
    
    OncoprintModel.prototype.getIdentifiedShapeListList = function(track_id, use_base_size, sort_by_z) {
	var active_rules = {};
	var data = this.getTrackData(track_id);
	var id_key = this.getTrackDataIdKey(track_id);
	var spacing = this.getTrackHasColumnSpacing(track_id);
	var width = this.getCellWidth(use_base_size) + (!spacing ? this.getCellPadding(use_base_size, true) : 0);
	var shapes = this.getRuleSet(track_id).apply(
		data, width, this.getCellHeight(track_id, use_base_size), active_rules, id_key, this.getTrackImportantIds(track_id)
	);
	
	setTrackActiveRules(this, track_id, active_rules);
	
	
	var z_comparator = function(shapeA, shapeB) {
	    var zA = parseFloat(shapeA.z);
	    var zB = parseFloat(shapeB.z);
	    if (zA < zB) {
		return -1;
	    } else if (zA > zB) {
		return 1;
	    } else {
		return 0;
	    }
	};
	return shapes.map(function(shape_list, index) {
	    if (sort_by_z) {
		shape_list.sort(z_comparator);
	    }
	    return {
		id: data[index][id_key],
		shape_list: shape_list
	    };
	});
    }
    
    OncoprintModel.prototype.getActiveRules = function(rule_set_id) {
	var rule_set_active_rules = this.rule_set_active_rules[rule_set_id];
	if (rule_set_active_rules) {
	    return this.rule_sets[rule_set_id].getRulesWithId().filter(function(rule_with_id) {
		return !!rule_set_active_rules[rule_with_id.id];
	    });
	} else {
	    return [];
	}
    }

    function _setTrackImportantIds(model, track_id, ids) {
    	if (!ids) {
    		model.track_important_ids[track_id] = undefined;
		} else {
			model.track_important_ids[track_id] = ids.reduce(function(map, next_id) {
				map[next_id] = true;
				return map;
			}, {});
		}
	}

    OncoprintModel.prototype.setTrackImportantIds = function(track_id, ids) {
    	_setTrackImportantIds(this, track_id, ids);
	}
    OncoprintModel.prototype.getTrackImportantIds = function(track_id) {
        return this.track_important_ids[track_id];
    }
    
    OncoprintModel.prototype.getRuleSets = function() {
	// return rule sets, in track group legend order
	var self = this;
	var legend_order = this.getTrackGroupLegendOrder();
	var used_track_groups = {};
	var track_groups = this.getTrackGroups();
	var sorted_track_groups = [];
	for (var i=0; i<legend_order.length; i++) {
		// add track groups in legend order
		used_track_groups[legend_order[i]] = true;
		if (track_groups[legend_order[i]]) {
			sorted_track_groups.push(track_groups[legend_order[i]]);
		}
	}
	for (var i=0; i<track_groups.length; i++) {
		// add groups not in legend order to end
		if (!used_track_groups[i] && track_groups[i]) {
			sorted_track_groups.push(track_groups[i]);
		}
	}
	var sorted_tracks = sorted_track_groups.reduce(function(acc, next) { return acc.concat(next); }, []);
	var rule_set_ids = sorted_tracks.map(function(track_id) {
	    return self.track_rule_set_id[track_id];
	});
	var unique_rule_set_ids = arrayUnique(rule_set_ids);
	return unique_rule_set_ids.map(function(rule_set_id) {
	    return self.rule_sets[rule_set_id];
	});
    }

    OncoprintModel.prototype.getTrackHasColumnSpacing = function(track_id) {
	return !!(this.track_has_column_spacing[track_id]);
    }
    
    OncoprintModel.prototype.getCellWidth = function (base) {
	return this.cell_width * (base ? 1 : this.horz_zoom);
    }

    OncoprintModel.prototype.getCellHeight = function (track_id, base) {
	return this.cell_height[track_id] * (base ? 1 : this.vert_zoom);
    }
    
    OncoprintModel.prototype.getTrackInfo = function(track_id) {
	return this.track_info[track_id];
    }
    
    OncoprintModel.prototype.setTrackInfo = function(track_id, msg) {
	this.track_info[track_id] = msg;
    }
    
    OncoprintModel.prototype.getTrackHeight = function(track_id, base) {
	return this.getCellHeight(track_id, base) + 2*this.getTrackPadding(track_id, base);
    }

    OncoprintModel.prototype.getTrackPadding = function (track_id, base) {
	return this.track_padding[track_id] * (base ? 1 : this.vert_zoom);
    }
    OncoprintModel.prototype.getBottomPadding = function() {
	return this.bottom_padding;
    }
    OncoprintModel.prototype.getTrackSortDirection = function(track_id) {
	return this.track_sort_direction[track_id];
    }
    OncoprintModel.prototype.setTrackSortDirection = function(track_id, dir, no_callback) {
	// see above for dir options
	this.track_sort_direction[track_id] = dir;
	if (!no_callback) {
		this.track_sort_direction_change_callback[track_id](track_id, dir);
	}
	this.precomputed_comparator.update(this, track_id);
    }
    
    OncoprintModel.prototype.setCellPaddingOn = function(cell_padding_on) {
	this.cell_padding_on = cell_padding_on;
	this.column_left.update();
    }
    OncoprintModel.prototype.getIdOrder = function (all) {
	if (all) {
	    return this.id_order; // TODO: should be read-only
	} else {
	    return this.visible_id_order.get();
	}
    }
    OncoprintModel.prototype.getIdToIndexMap = function() {
	return this.id_to_index.get();
    }
    OncoprintModel.prototype.getVisibleIdToIndexMap = function() {
	return this.visible_id_to_index.get();
    }

    OncoprintModel.prototype.getHiddenIds = function () {
	var hidden_ids = this.hidden_ids;
	return this.id_order.filter(function (id) {
	    return !!hidden_ids[id];
	});
    }

    OncoprintModel.prototype.isSortAffected = function(modified_ids, group_or_track) {
    	modified_ids = [].concat(modified_ids);
    	var group_indexes;
    	var self = this;
    	if (group_or_track === "track") {
    		group_indexes = modified_ids.map(function(id) {
    			return self.getContainingTrackGroupIndex(id);
			});
		} else {
    		group_indexes = modified_ids;
		}
		return (this.sort_config.type !== "cluster" ||
			(group_indexes.indexOf(this.sort_config.track_group_index) > -1));
	}

    OncoprintModel.prototype.setIdOrder = function (ids) {
	this.id_order = ids.slice();
	Object.freeze(this.id_order);
	this.id_to_index.update();
	this.visible_id_order.update();
	this.column_left.update();
    }

    OncoprintModel.prototype.hideIds = function (to_hide, show_others) {
	if (show_others) {
	    this.hidden_ids = {};
	}
	for (var j = 0, len = to_hide.length; j < len; j++) {
	    this.hidden_ids[to_hide[j]] = true;
	}
	this.visible_id_order.update();
	this.column_left.update();
    }

    OncoprintModel.prototype.setTrackGroupOrder = function(index, track_order) {
	this.track_groups[index] = track_order;
	
	this.track_tops.update();
    }
    
    OncoprintModel.prototype.moveTrackGroup = function (from_index, to_index) {
	var new_groups = [];
	var new_headers = [];
	var group_to_move = this.track_groups[from_index];
	for (var i = 0; i < this.track_groups.length; i++) {
	    if (i !== from_index && i !== to_index) {
		new_groups.push(this.track_groups[i]);
		new_headers.push(this.track_group_header[i]);
	    }
	    if (i === to_index) {
		new_groups.push(group_to_move);
		new_headers.push(this.track_group_header[from_index]);
	    }
	}
	this.track_groups = new_groups;
	this.track_group_header = new_headers;
	this.track_tops.update();
	return this.track_groups;
    }

    OncoprintModel.prototype.addTracks = function (params_list) {
	for (var i = 0; i < params_list.length; i++) {
	    var params = params_list[i];
	    addTrack(this, params.track_id, params.target_group, params.track_group_header,
		    params.cell_height, params.track_padding, params.has_column_spacing,
		    params.data_id_key, params.tooltipFn, params.link_url, params.removable,
		    params.removeCallback, params.label, params.sublabel, params.description, params.track_info,
		    params.sortCmpFn, params.sort_direction_changeable, params.init_sort_direction, params.onSortDirectionChange,
		    params.data, params.rule_set, params.track_label_color, params.html_label,
		    params.expansion_of, params.expandCallback, params.expandButtonTextGetter, params.important_ids,
			params.custom_track_options, params.$track_info_tooltip_elt
	    );
	}
	this.track_tops.update();
    }
  
    var addTrack = function (model, track_id, target_group, track_group_header,
	    cell_height, track_padding, has_column_spacing,
	    data_id_key, tooltipFn, link_url, removable,
	    removeCallback, label, sublabel, description, track_info,
	    sortCmpFn, sort_direction_changeable, init_sort_direction, onSortDirectionChange,
	    data, rule_set, track_label_color, html_label,
	    expansion_of, expandCallback, expandButtonTextGetter,
		 important_ids, custom_track_options, $track_info_tooltip_elt
    ) {
	model.$track_info_tooltip_elt[track_id] = $track_info_tooltip_elt;
	model.track_custom_options[track_id] = ifndef(custom_track_options, []);
	model.track_label[track_id] = ifndef(label, "Label");
	model.track_sublabel[track_id] = ifndef(sublabel, "");
	model.track_label_color[track_id] = ifndef(track_label_color, "black");
	model.track_link_url[track_id] = ifndef(link_url, null);
	model.track_description[track_id] = ifndef(description, "");
	model.cell_height[track_id] = ifndef(cell_height, 23);
	model.track_padding[track_id] = ifndef(track_padding, 5);
	model.track_has_column_spacing[track_id] = ifndef(has_column_spacing, true);

	model.track_tooltip_fn[track_id] = ifndef(tooltipFn, function (d) {
	    return d + '';
	});
	model.track_removable[track_id] = ifndef(removable, false);
	model.track_remove_callback[track_id] = ifndef(removeCallback, function() {});
	
	if (typeof expandCallback !== 'undefined') {
	    model.track_expand_callback[track_id] = expandCallback;
	    model.track_expansion_enabled[track_id] = true;
	}
	if (typeof expandButtonTextGetter !== 'undefined') {
	    model.track_expand_button_getter[track_id] = expandButtonTextGetter;
	}
	
	model.track_sort_cmp_fn[track_id] = ifndef(sortCmpFn, function () {
	    return 0;
	});
	
	model.track_sort_direction_changeable[track_id] = ifndef(sort_direction_changeable, false);
	model.track_sort_direction_change_callback[track_id] = ifndef(onSortDirectionChange, function() {});
	model.track_data[track_id] = ifndef(data, []);
	model.track_data_id_key[track_id] = ifndef(data_id_key, 'id');

	model.track_info[track_id] = ifndef(track_info, "");

	if (typeof html_label !== 'undefined') {
	    model.track_html_label[track_id] = html_label;
	}

	if (typeof rule_set !== 'undefined') {
	    model.rule_sets[rule_set.rule_set_id] = rule_set;
	    model.rule_set_active_rules[rule_set.rule_set_id] = {};
	    model.track_rule_set_id[track_id] = rule_set.rule_set_id;
	}
	model.track_active_rules[track_id] = {};

	if (important_ids) {
		_setTrackImportantIds(model, track_id, important_ids);
	}

	model.track_sort_direction[track_id] = ifndef(init_sort_direction, 1);
	
	target_group = ifndef(target_group, 0);
	while (target_group >= model.track_groups.length) {
	    model.track_groups.push([]);
	    model.track_group_header.push("");
	}
	if (track_group_header) {
	    model.track_group_header[target_group] = track_group_header;
	}

	var group_array = model.track_groups[target_group];
	var target_index = (expansion_of !== undefined
	    ? group_array.indexOf(model.getLastExpansion(expansion_of)) + 1
	    : group_array.length
	);
	group_array.splice(target_index, 0, track_id);

	if (expansion_of !== undefined) {
	    if (!model.track_expansion_tracks.hasOwnProperty(expansion_of)) {
		model.track_expansion_tracks[expansion_of] = [];
	    }
	    if (model.track_expansion_tracks[expansion_of].indexOf(track_id) !== -1) {
		throw new Error('Illegal state: duplicate expansion track ID');
	    }
	    model.track_expansion_parent[track_id] = expansion_of;
	    model.track_expansion_tracks[expansion_of].push(track_id);
	}
	
	model.track_id_to_datum.update(model, track_id);
	model.track_present_ids.update(model, track_id);
	model.precomputed_comparator.update(model, track_id);
	
	model.setIdOrder(Object.keys(model.present_ids.get()));
    }

    // get a reference to the array that stores the order of tracks in
    // the same group
    var _getMajorTrackGroup = function (oncoprint_model, track_id, return_index) {
	var group;
	track_id = parseInt(track_id);
	var i;
	for (i = 0; i < oncoprint_model.track_groups.length; i++) {
	    if (oncoprint_model.track_groups[i].indexOf(track_id) > -1) {
		group = oncoprint_model.track_groups[i];
		break;
	    }
	}
	if (group) {
	    return return_index ? i : group;
	} else {
	    return null;
	}
    }
    // get an array listing the track IDs that a track can move around
    var _getEffectiveTrackGroup = function (oncoprint_model, track_id) {
	var group,
	    parent_id = oncoprint_model.track_expansion_parent[track_id];
	if (parent_id === undefined) {
	    group = (function(major_group) {
		return (major_group === null ? null
			: major_group.filter(function (sibling_id) {
			    return oncoprint_model.track_expansion_parent[sibling_id] === undefined;
			}));
	    })(_getMajorTrackGroup(oncoprint_model, track_id));
	} else {
	    group = oncoprint_model.track_expansion_tracks[parent_id];
	}
	return group ? group.slice() : null;
    }

    var isRuleSetUsed = function(model, rule_set_id) {
	var used = false;
	var tracks = model.getTracks();
	for (var i=0; i<tracks.length; i++) {
	    if (model.track_rule_set_id[tracks[i]] === rule_set_id) {
		used = true;
		break;
	    }
	}
	return used;
    }
    
    var removeRuleSet = function(model, rule_set_id) {
	delete model.rule_sets[rule_set_id];
	delete model.rule_set_active_rules[rule_set_id];
    };
   
    OncoprintModel.prototype.removeTrack = function (track_id) {
	var rule_set_id = this.track_rule_set_id[track_id];

	// subtract this tracks active rules from usage count,
	//   so that we don't show unused rules in the legend
	clearTrackActiveRules(this, track_id);

	this.track_remove_callback[track_id](track_id);
	
	delete this.track_data[track_id];
	delete this.track_rule_set_id[track_id];
	delete this.track_label[track_id];
	delete this.track_link_url[track_id];
	delete this.cell_height[track_id];
	delete this.track_padding[track_id];
	delete this.track_data_id_key[track_id];
	delete this.track_tooltip_fn[track_id];
	delete this.track_removable[track_id];
	delete this.track_remove_callback[track_id];
	delete this.track_sort_cmp_fn[track_id];
	delete this.track_sort_direction_changeable[track_id];
	delete this.track_sort_direction[track_id];
	delete this.track_info[track_id];
	delete this.track_has_column_spacing[track_id];
	delete this.track_expansion_enabled[track_id];
	delete this.track_expand_callback[track_id];
	delete this.track_expand_button_getter[track_id];
	delete this.track_expansion_tracks[track_id];

	var containing_track_group = _getMajorTrackGroup(this, track_id);
	if (containing_track_group !== null) {
	    containing_track_group.splice(
		    containing_track_group.indexOf(track_id), 1);
	}
	// remove listing of the track as an expansion of its parent track
	var expansion_group = this.track_expansion_tracks[this.track_expansion_parent[track_id]]
	if (expansion_group) {
	    expansion_group.splice(expansion_group.indexOf(track_id), 1);
	}
	delete this.track_expansion_parent[track_id];
	this.track_tops.update();
	this.track_present_ids.update(this, track_id);
	this.track_id_to_datum.update(this, track_id);
	this.setIdOrder(Object.keys(this.present_ids.get()));

	// delete rule set if its now unused
	var rule_set_used = isRuleSetUsed(this, rule_set_id);
	if (!rule_set_used) {
	    removeRuleSet(this, rule_set_id);
	}
    };

    OncoprintModel.prototype.getOverlappingCells = function(x,y) {
	// First, see if it's in a column
	var id_order = this.getIdOrder();
	var zoomed_column_left = this.getZoomedColumnLeft();
	// this gets the nearest lower index
	var nearest_id_index = binarysearch(id_order, x, function(id) { return zoomed_column_left[id];}, true);
	if (nearest_id_index === -1) {
	    return null;
	}
	
	// Next, see if it's in a track
	var tracks = this.getTracks();
	var cell_tops = this.getCellTops();
	var nearest_track_index = binarysearch(tracks, y, function (track) {
	    return cell_tops[track];
	}, true);
	if (nearest_track_index === -1) {
	    return null;
	}
	var nearest_track = tracks[nearest_track_index];
	if (y >= cell_tops[nearest_track] + this.getCellHeight(nearest_track)) {
		// we know y is past the top of the track (>= cell_tops[nearest_track]), so this checks if y is past the bottom of the track
		return null;
	}

	// At this point, we know y is inside a track
	
	// Finally, return all ids within 1 px of x to the right
	var ids = [];
	var hitzone_width = this.getCellWidth();
	if (!this.getTrackHasColumnSpacing(nearest_track)) {
		hitzone_width += this.getCellPadding();
	}
	for (var i=nearest_id_index; i<id_order.length; i++) {
		// if hitzone of cell touches the pixel [x,x+1), then include it
		if (doesCellIntersectPixel([zoomed_column_left[id_order[i]], zoomed_column_left[id_order[i]] + hitzone_width], x)) {
			ids.push(id_order[i]);
		} else if (zoomed_column_left[id_order[i]] > x+1) {
			break;
		}
	}
	if (ids.length > 0) {
		return {'ids': ids, 'track': nearest_track, 'top': cell_tops[nearest_track], 'left': zoomed_column_left[ids[0]]};
	}
	return null;
    };
    
    OncoprintModel.prototype.getTrackDatum = function(track_id, id) {
	var datum = this.track_id_to_datum.get()[track_id][id];
	if (typeof datum === 'undefined') {
	    datum = null;
	}
	return datum;
    }
    
    OncoprintModel.prototype.getTrackTops = function (desired_track_id) {
	if (typeof desired_track_id === 'undefined') {
	    return copyShallowObject(this.track_tops.get());
	} else {
	    return this.track_tops.get()[desired_track_id];
	}
    }
    
    OncoprintModel.prototype.getZoomedTrackTops = function (desired_track_id) {
	if (typeof desired_track_id === 'undefined') {
	    return copyShallowObject(this.track_tops_zoomed.get());
	} else {
	    return this.track_tops_zoomed.get()[desired_track_id];
	}
    }
    
    OncoprintModel.prototype.getCellTops = function(desired_track_id, base) {
	if (typeof desired_track_id === 'undefined') {
	    return copyShallowObject((base ? this.cell_tops : this.cell_tops_zoomed).get());
	} else {
	    return (base ? this.cell_tops : this.cell_tops_zoomed).get()[desired_track_id];
	}
    }
    OncoprintModel.prototype.getLabelTops = function(desired_track_id, base) {
	if (typeof desired_track_id === 'undefined') {
	    return copyShallowObject((base ? this.label_tops : this.label_tops_zoomed).get());
	} else {
	    return (base ? this.label_tops : this.label_tops_zoomed).get()[desired_track_id];
	}
    }
    
    OncoprintModel.prototype.getContainingTrackGroup = function (track_id) {
	return _getEffectiveTrackGroup(this, track_id);
    }

    OncoprintModel.prototype.getContainingTrackGroupIndex = function(track_id) {
    	return _getMajorTrackGroup(this, track_id, true);
	}

    OncoprintModel.prototype.setTrackGroupHeader = function(track_group_id, text) {
	this.track_group_header[track_group_id] = text;
	this.track_tops.update();
    }
    
    OncoprintModel.prototype.getTrackGroupHeader = function(track_group_id) {
	return this.track_group_header[track_group_id] || "";
    }
    
    OncoprintModel.prototype.getTrackGroupHeaderSize = function() {
	return 20;
    }
    
    OncoprintModel.prototype.getTrackGroups = function () {
	// TODO: make read-only
	return this.track_groups;
    }

    OncoprintModel.prototype.getTracks = function () {
	var ret = [];
	for (var i = 0; i < this.track_groups.length; i++) {
	    for (var j = 0; j < this.track_groups[i].length; j++) {
		ret.push(this.track_groups[i][j]);
	    }
	}
	return ret;
    }

    OncoprintModel.prototype.getIdsInLeftInterval = function(left, right) {
	var cell_width = this.getCellWidth();
	var cell_padding = this.getCellPadding();
	var id_order = this.getIdOrder();
	
	// left_id_index and right_id_index are inclusive
	var left_id_index = Math.floor(left/(cell_width + cell_padding));
	var left_remainder = left - left_id_index*(cell_width + cell_padding);
	if (left_remainder > cell_width) {
	    left_id_index += 1;
	}
	var right_id_index = Math.floor(right/(cell_width + cell_padding));
	return id_order.slice(left_id_index, right_id_index+1);
    }
    OncoprintModel.prototype.getColumnLeft = function(id) {
	if (typeof id === 'undefined') {
	    return this.column_left.get();
	} else {
	    return this.column_left.get()[id];
	}
    }
    
    OncoprintModel.prototype.getColumnLeftNoPadding = function(id) {
	if (typeof id === 'undefined') {
	    return this.column_left_no_padding.get();
	} else {
	    return this.column_left_no_padding.get()[id];
	}
    }
    
    OncoprintModel.prototype.getZoomedColumnLeft = function(id) {
	if (typeof id === 'undefined') {
	    return this.zoomed_column_left.get();
	} else {
	    return this.zoomed_column_left.get()[id];
	}
    }
    
    
    OncoprintModel.prototype.getOncoprintHeight = function(base) {
	var tracks = this.getTracks();
	var last_track = tracks[tracks.length-1];
	return (base ? this.getTrackTops(last_track) : this.getZoomedTrackTops(last_track))+this.getTrackHeight(last_track, base)
		    + this.getBottomPadding();
    }
    
    OncoprintModel.prototype.getOncoprintWidth = function(base) {
	return this.getIdOrder().length*(this.getCellWidth(base) + this.getCellPadding(base));
    }
    
    OncoprintModel.prototype.getOncoprintWidthNoColumnPadding = function(base) {
	return this.getIdOrder().length*this.getCellWidth(base);
    }
    
    OncoprintModel.prototype.getCellViewHeight = function() {
	return Math.min(this.max_height, this.getOncoprintHeight());
    }
    
    OncoprintModel.prototype.getCellViewWidth = function() {
	return this.getOncoprintWidth();
    }
    OncoprintModel.prototype.moveTrack = function (track_id, new_previous_track) {

	function moveContiguousValues(uniqArray, first_value, last_value, new_predecessor) {
	    var old_start_index = uniqArray.indexOf(first_value),
		old_end_index = uniqArray.indexOf(last_value);
	    var values = uniqArray.slice(old_start_index, old_end_index + 1);
	    uniqArray.splice(old_start_index, values.length);
	    var new_position = (new_predecessor === null ? 0 : uniqArray.indexOf(new_predecessor)+1);
	    uniqArray.splice.bind(uniqArray, new_position, 0).apply(null, values);
	}

	var track_group = _getMajorTrackGroup(this, track_id),
	    expansion_parent = this.track_expansion_parent[track_id],
	    flat_previous_track;

	if (track_group !== null) {
	    // if an expansion track moves above all other tracks it can,
	    // place it directly below its expansion parent
	    if (expansion_parent !== undefined && new_previous_track === null) {
		flat_previous_track = expansion_parent;
	    // otherwise, place the track under (the last expansion track of)
	    // its sibling
	    } else {
		flat_previous_track = this.getLastExpansion(new_previous_track);
	    }
	    moveContiguousValues(track_group, track_id, this.getLastExpansion(track_id), flat_previous_track);
	}

	// keep the order of expansion siblings up-to-date as well
	if (this.track_expansion_parent[track_id] !== undefined) {
	    moveContiguousValues(this.track_expansion_tracks[expansion_parent], track_id, track_id, new_previous_track);
	}
	
	this.track_tops.update();
    };

    OncoprintModel.prototype.getTrackLabel = function (track_id) {
	return this.track_label[track_id];
    }

    OncoprintModel.prototype.getTrackSublabel = function(track_id) {
    	return this.track_sublabel[track_id];
	}

	OncoprintModel.prototype.getShowTrackSublabels = function() {
    	return this.show_track_sublabels;
	}

    OncoprintModel.prototype.setShowTrackSublabels = function(show) {
        return this.show_track_sublabels = show;
    }
    
    OncoprintModel.prototype.getTrackLabelColor = function (track_id) {
	return this.track_label_color[track_id];
    }
    
    OncoprintModel.prototype.getOptionalHtmlTrackLabel = function (track_id) {
	return this.track_html_label[track_id];
    }
    
    OncoprintModel.prototype.getTrackLinkUrl = function (track_id) {
	return this.track_link_url[track_id];
    }
    
    OncoprintModel.prototype.getTrackDescription = function(track_id) {
	return this.track_description[track_id];
    }

    OncoprintModel.prototype.getTrackTooltipFn = function (track_id) {
	return this.track_tooltip_fn[track_id];
    }
    OncoprintModel.prototype.setTrackTooltipFn = function (track_id, tooltipFn) {
	this.track_tooltip_fn[track_id] = tooltipFn;
    }

    OncoprintModel.prototype.getTrackDataIdKey = function (track_id) {
	return this.track_data_id_key[track_id];
    }

    OncoprintModel.prototype.getTrackGroupPadding = function (base) {
	return this.track_group_padding * (base ? 1 : this.vert_zoom);
    }
    
    OncoprintModel.prototype.isTrackRemovable = function (track_id) {
	return this.track_removable[track_id];
    }
    
    OncoprintModel.prototype.isTrackSortDirectionChangeable = function (track_id) {
	return this.track_sort_direction_changeable[track_id];
    }
    
    OncoprintModel.prototype.isTrackExpandable = function (track_id) {
	// return true if the flag is defined and true
	return Boolean(this.track_expansion_enabled[track_id]);
    }
    
    OncoprintModel.prototype.expandTrack = function (track_id) {
	return this.track_expand_callback[track_id](track_id);
    }
    
    OncoprintModel.prototype.disableTrackExpansion = function (track_id) {
	this.track_expansion_enabled[track_id] = false;
    }

    OncoprintModel.prototype.enableTrackExpansion = function (track_id) {
	if (!this.track_expand_callback.hasOwnProperty(track_id)) {
	    throw new Error("Track '" + track_id +"' has no expandCallback");
	}
	this.track_expansion_enabled[track_id] = true;
    }
    
    OncoprintModel.prototype.isTrackExpanded = function (track_id) {
	return this.track_expansion_tracks.hasOwnProperty(track_id) &&
		this.track_expansion_tracks[track_id].length > 0;
    }
    
    OncoprintModel.prototype.getExpandButtonText = function (track_id) {
	var self = this;
	var getExpandButtonFunction = function (track_id) {
	    return (self.track_expand_button_getter[track_id] ||
		    function (is_expanded) {
			return is_expanded ? 'Expand more' : 'Expand';
		    });
	};
	return getExpandButtonFunction(track_id)(this.isTrackExpanded(track_id));
    }
    
    /**
     * Checks if one track is the expansion of another
     *
     * @param {number} expansion_track_id - the ID of the track to check
     * @param {number} set_track_id - the ID of the track it may be an expansion of
     */
    OncoprintModel.prototype.isExpansionOf = function (expansion_track_id, set_track_id) {
	return this.track_expansion_tracks.hasOwnProperty(set_track_id) &&
	    this.track_expansion_tracks[set_track_id].indexOf(expansion_track_id) !== -1;
    }
    
    /**
     * Finds the bottom-most track in a track's expansion group
     *
     * @param track_id - the ID of the track to start from
     * @returns the ID of its last expansion, or the unchanged param if none
     */
    OncoprintModel.prototype.getLastExpansion = function (track_id) {
	var direct_children = this.track_expansion_tracks[track_id];
	while (direct_children && direct_children.length) {
	    track_id = direct_children[direct_children.length - 1];
	    direct_children = this.track_expansion_tracks[track_id];
	}
	return track_id;
    }

    OncoprintModel.prototype.getTrackCustomOptions = function(track_id) {
	return this.track_custom_options[track_id];
	}

	OncoprintModel.prototype.setTrackCustomOptions = function(track_id, options) {
	this.track_custom_options[track_id] = options;
	}

	OncoprintModel.prototype.setTrackInfoTooltip = function(track_id, $tooltip_elt) {
        this.$track_info_tooltip_elt[track_id] = $tooltip_elt;
	}

	OncoprintModel.prototype.$getTrackInfoTooltip = function(track_id) {
    	return this.$track_info_tooltip_elt[track_id];
	}
    
    OncoprintModel.prototype.getRuleSet = function (track_id) {
	return this.rule_sets[this.track_rule_set_id[track_id]];
    }

    OncoprintModel.prototype.shareRuleSet = function(source_track_id, target_track_id) {
	setTrackActiveRules(this, target_track_id, {});
	
	var old_rule_set_id = this.track_rule_set_id[target_track_id];
	this.track_rule_set_id[target_track_id] = this.track_rule_set_id[source_track_id];
	if (!isRuleSetUsed(this, old_rule_set_id)) {
	    removeRuleSet(this, old_rule_set_id);
	}
    }
    
    OncoprintModel.prototype.setRuleSet = function(track_id, rule_set) {
	setTrackActiveRules(this, track_id, {});
	
	var curr_rule_set_id = this.track_rule_set_id[track_id];
	this.rule_sets[rule_set.rule_set_id] = rule_set;
	this.rule_set_active_rules[rule_set.rule_set_id] = {};
	this.track_rule_set_id[track_id] = rule_set.rule_set_id;
	
	var rule_set_used = isRuleSetUsed(this, curr_rule_set_id);
	if (!rule_set_used) {
	    removeRuleSet(this, curr_rule_set_id);
	}
    }

    OncoprintModel.prototype.getTrackSortComparator = function(track_id) {
	return this.track_sort_cmp_fn[track_id];
    }
    
    OncoprintModel.prototype.setTrackSortComparator = function(track_id, sortCmpFn) {
	this.track_sort_cmp_fn[track_id] = sortCmpFn;
	this.precomputed_comparator.update(this, track_id);
    }
    
    OncoprintModel.prototype.getTrackData = function (track_id) {
	return this.track_data[track_id];
    }

    OncoprintModel.prototype.clusterTrackGroup = function(track_group_index, clusterValueFn) {
    	// Prepare input
	var self = this;
		var def = new $.Deferred();
		var cluster_input = {};

	// Use data from tracks on the same level of expansion as the first one
	// in the track group as input, i.e. the outer level excluding any
	// expansions
	var track_group = this.getTrackGroups()[track_group_index];
	var track_ids = [];
	if (track_group !== undefined) {
	    track_ids = _getEffectiveTrackGroup(this, track_group[0]) || [];
	}
	for (var i = 0; i < track_ids.length; i++) {
    		var track_id = track_ids[i];
    		var data_id_key = this.getTrackDataIdKey(track_id);
    		var data = this.getTrackData(track_id);
			for (var j=0; j<data.length; j++) {
				var id = data[j][data_id_key];
				var value = clusterValueFn(data[j]);
				cluster_input[id] = cluster_input[id] || {};
				cluster_input[id][track_id] = value;
			}
	}
	if (!Object.keys(cluster_input).length) {
	    // skip clustering if there's nothing to cluster
	    return def.resolve().promise();
	}

	// unset sorting by tracks in this group
	track_group.forEach(function (track_id) {
	    self.setTrackSortDirection(track_id, 0, true);
	});

	//do hierarchical clustering in background:
        $.when(clustering.hclusterColumns(cluster_input), clustering.hclusterTracks(cluster_input)).then(
            function (columnClusterOrder, trackClusterOrder) {
		// set clustered column order
		self.setIdOrder(columnClusterOrder.map(function (c) {return c.caseId;}));
		// determine clustered row order
		var clustered_track_id_order = trackClusterOrder.map(function (entity) {
		    return parseInt(entity.entityId, 10);
		});
		// re-insert any expansions below each clustered track
		var full_track_id_order = [];
		clustered_track_id_order.forEach(function (track_id) {
		    full_track_id_order.push(track_id)
		    Array.prototype.push.apply(
			full_track_id_order,
			self.track_expansion_tracks[track_id] || []
		    );
		});
		def.resolve({
		    track_group_index: track_group_index,
		    track_id_order: full_track_id_order
		});
	    }).fail(function () {
            	def.reject();
		});
		return def.promise();
    }
    
    /**
     * Sets the data for an Oncoprint track.
     *
     * @param track_id - the ID that identifies the track
     * @param {Object[]} data - the list of data for the cells
     * @param {string} data_id_key - name of the property of the
     * data objects to use as the (column) key
     */
    OncoprintModel.prototype.setTrackData = function (track_id, data, data_id_key) {
	this.track_data[track_id] = data;
	this.track_data_id_key[track_id] = data_id_key;
	this.track_id_to_datum.update(this, track_id);
	this.track_present_ids.update(this, track_id);
	this.setIdOrder(Object.keys(this.present_ids.get()));
	this.precomputed_comparator.update(this, track_id);
    }
    
    OncoprintModel.prototype.computeTrackIdToDatum = function(track_id) {
	this.track_id_to_datum[track_id] = {};
	
	var track_data = this.track_data[track_id] || [];
	var track_id_key = this.track_data_id_key[track_id];
	for (var i=0; i<track_data.length; i++) {
	    this.track_id_to_datum[track_id][track_data[i][track_id_key]] = track_data[i];
	}
    }

    OncoprintModel.prototype.setTrackGroupLegendOrder = function(group_order) {
    	this.track_group_legend_order = group_order.slice();
	}

	OncoprintModel.prototype.getTrackGroupLegendOrder = function() {
    	return this.track_group_legend_order;
	}

    OncoprintModel.prototype.setTrackGroupSortPriority = function(priority) {
	this.track_group_sort_priority = priority;
	this.sort();
    }
    var sortAlphabetical = function(model) {
	var id_order = model.getIdOrder(true).slice();
	id_order.sort(function(a,b) {
	    return a.localeCompare(b);
	});
	model.setIdOrder(id_order);
    };
    var sortByTracks = function(model) {
	var track_group_sort_priority = model.track_group_sort_priority;
	var track_groups = model.getTrackGroups();
	var track_groups_in_sort_order;
	
	if (track_group_sort_priority.length < track_groups.length) {
	    track_groups_in_sort_order = track_groups;
	} else {
	    track_groups_in_sort_order = track_group_sort_priority.map(function(x) {
		return track_groups[x];
	    });
	}
	
	var track_sort_priority = track_groups_in_sort_order.reduce(function(acc, next) {
	    return acc.concat(next);
	}, []);
	
	var precomputed_comparator = model.precomputed_comparator.get();
	var getVector = function(id) {
		var mandatory_values = [];
		var preferred_values = [];
		for (var i=0; i<track_sort_priority.length; i++) {
			var sort_value = precomputed_comparator[track_sort_priority[i]].getSortValue(id);
			mandatory_values.push(sort_value.mandatory);
			preferred_values.push(sort_value.preferred);
		}
		return mandatory_values.concat(preferred_values);
	};

	var ids_with_vectors = model.getIdOrder(true).map(function(id) {
		return {
			id: id,
			vector: getVector(id)
		};
	});
	var order = BucketSort.bucketSort(ids_with_vectors, function(d) { return d.vector; });
	model.setIdOrder(order.map(function(d) { return d.id; }));
    };
    OncoprintModel.prototype.sort = function() {
    	var def = new $.Deferred();
	this.sort_config = this.sort_config || {};
	if (this.sort_config.type === "alphabetical") {
	    sortAlphabetical(this);
	    def.resolve();
	} else if (this.sort_config.type === "order") {
	    this.setIdOrder(this.sort_config.order);
	    def.resolve();
	} else if (this.sort_config.type === "cluster") {
		this.clusterTrackGroup(this.sort_config.track_group_index,
								this.sort_config.clusterValueFn).then(function(x) {
			def.resolve(x);
		});
	} else {
	    sortByTracks(this);
	    def.resolve();
	}
	return def.promise();
    }
    
    OncoprintModel.prototype.setSortConfig = function(params) {
	this.sort_config = params;
    }

    OncoprintModel.prototype.isTrackInClusteredGroup = function(track_id) {
    	return this.sort_config.type === "cluster" &&
			(this.sort_config.track_group_index === this.getContainingTrackGroupIndex(track_id));
	}

    return OncoprintModel;
})();

var PrecomputedComparator = (function() {
    function PrecomputedComparator(list, comparator, sort_direction, element_identifier_key) {
		if (typeof comparator === "object" && comparator.isVector) {
			initializeVector(this, list, comparator, sort_direction, element_identifier_key);
		} else {
			initializeComparator(this, list, comparator, sort_direction, element_identifier_key);
		}
    }

    function initializeComparator(precomputed_comparator, list, comparator, sort_direction, element_identifier_key) {
    	// initializeComparator initializes the PrecomputedComparator in the case that
		//	the sort order is given using a comparator
        var preferred, mandatory;
        if (typeof comparator === "function") {
            preferred = comparator;
            mandatory = comparator;
        } else {
            preferred = comparator.preferred;
            mandatory = comparator.mandatory;
        }
        var makeDirectedComparator = function(cmp) {
            return function (d1, d2) {
                if (sort_direction === 0) {
                    return 0;
                }
                var res = cmp(d1, d2);
                if (res === 2) {
                    return 1;
                } else if (res === -2) {
                    return -1;
                } else {
                    return res * sort_direction;
                }
            };
        };
        var preferredComparator = makeDirectedComparator(preferred);
        var mandatoryComparator = makeDirectedComparator(mandatory);
        var sorted_list = list.sort(preferredComparator);

        // i is a change point iff comp(elt[i], elt[i+1]) !== 0
        precomputed_comparator.preferred_change_points = [0]; // i is a preferred change pt iff its a change pt with comp = preferredComparator but not with comp = mandatoryComparator
        precomputed_comparator.mandatory_change_points = [0]; // i is a mandatory change pt iff its a change pt with comp = mandatoryComparator

        // note that by the following process, preferred_change_points and mandatory_change_points are sorted
        for (var i=1; i<sorted_list.length; i++) {
            if (mandatoryComparator(sorted_list[i-1], sorted_list[i]) !== 0) {
                precomputed_comparator.mandatory_change_points.push(i);
            } else if (preferredComparator(sorted_list[i-1], sorted_list[i]) !== 0) {
                precomputed_comparator.preferred_change_points.push(i);
            }
        }
        precomputed_comparator.id_to_index = {};
        for (var i=0; i<sorted_list.length; i++) {
            precomputed_comparator.id_to_index[sorted_list[i][element_identifier_key]] = i;
        }
	}

    function initializeVector(precomputed_comparator, list, getVector, sort_direction, element_identifier_key) {
    	// initializeVector initializes the PrecomputedComparator in the case that the sort order is specified by vectors for bucket sort
        var makeDirectedVector = function(vec) {
        	if (sort_direction === 0) {
        		return function(d) { return 0; };
			} else {
        		return function(d) {
        			return vec(d).map(function(n) {
        				if (typeof n === typeof 0) {
        					return n * sort_direction;
						} else {
        					return n;
						}
					});
				}
			}
        };
        var preferredVector = makeDirectedVector(getVector.preferred);
        var mandatoryVector = makeDirectedVector(getVector.mandatory);

        // associate each data to its vector and sort them together
		var list_with_vectors = list.map(function(d) {
			return { d: d, preferred_vector: preferredVector(d), mandatory_vector: mandatoryVector(d) };
		});
		// sort by preferred vector
		var _compareEquals = getVector.compareEquals;
        var compareEquals = _compareEquals ? function(d1, d2) { return _compareEquals(d1.d, d2.d); } : undefined;
        var sorted_list = BucketSort.bucketSort(
        	list_with_vectors,
			function(d) { return d.preferred_vector; },
			compareEquals
		);

        // i is a change point iff comp(elt[i], elt[i+1]) !== 0
        precomputed_comparator.preferred_change_points = [0]; // i (besides 0) is a preferred change pt iff its a change pt with comp = preferredComparator but not with comp = mandatoryComparator
        precomputed_comparator.mandatory_change_points = [0]; // i (besides 0) is a mandatory change pt iff its a change pt with comp = mandatoryComparator

        // note that by the following process, preferred_change_points and mandatory_change_points are sorted
		var getMandatoryVector = function(d) { return d.mandatory_vector; };
		var getPreferredVector = function(d) { return d.preferred_vector; };
        for (var i=1; i<sorted_list.length; i++) {
            if (BucketSort.compareFull(sorted_list[i-1], sorted_list[i], getMandatoryVector) !== 0) {
                precomputed_comparator.mandatory_change_points.push(i);
			} else if (BucketSort.compareFull(sorted_list[i-1], sorted_list[i], getPreferredVector, compareEquals) !== 0) {
                precomputed_comparator.preferred_change_points.push(i);
            }
        }

        precomputed_comparator.id_to_index = {};
        for (var i=0; i<sorted_list.length; i++) {
            precomputed_comparator.id_to_index[sorted_list[i].d[element_identifier_key]] = i;
        }
    }

    PrecomputedComparator.prototype.getSortValue = function(id) {
    	var index = this.id_to_index[id];
    	// find greatest lower change points - thats where this should be sorted by
		//		because everything between change points has same sort value
		var mandatory = 0;
		var preferred = 0;
		if (this.mandatory_change_points.length) {
			mandatory = this.mandatory_change_points[binarysearch(this.mandatory_change_points, index, function(ind) { return ind; }, true)];
		}
        if (this.preferred_change_points.length) {
            preferred = this.preferred_change_points[binarysearch(this.preferred_change_points, index, function(ind) { return ind; }, true)];
        }
		return {
			mandatory: mandatory,
			preferred: preferred
		};
	}

    PrecomputedComparator.prototype.compare = function(idA, idB) {
	var indA = this.id_to_index[idA];
	var indB = this.id_to_index[idB];
	if (typeof indA === 'undefined' && typeof indB === 'undefined') {
	    return 0;
	} else if (typeof indA === 'undefined') {
	    return 1;
	} else if (typeof indB === 'undefined') {
	    return -1;
	}
	
	var should_negate_result = false;
	if (indA === indB) {
	    return 0;
	} else if (indA > indB) {
	    // switch if necessary to make process WLOG
	    var tmp = indA;
	    indA = indB;
	    indB = tmp;
	    should_negate_result = true;
	}
	// See if any changepoints in [indA, indB)
	var res = 0;
	if (hasElementsInInterval(this.mandatory_change_points, function(x) { return x; }, indA, indB)) {
	    res = -1;
	} else if (hasElementsInInterval(this.preferred_change_points, function(x) { return x; }, indA, indB)) {
	    res = -0.5;
	}
	if (should_negate_result) {
	    res = res * -1;
	}
	return res;
    }
    return PrecomputedComparator;
})();
module.exports = OncoprintModel;
