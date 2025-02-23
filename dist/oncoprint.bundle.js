module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.0.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-06-09T18:02Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


var
	version = "3.0.0",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}
/* jshint ignore: end */

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.0
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-01-04
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true;
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {
	// Known :disabled false positives:
	// IE: *[disabled]:not(button, input, select, textarea, optgroup, option, menuitem, fieldset)
	// not IE: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Check form elements and option elements for explicit disabling
		return "label" in elem && elem.disabled === disabled ||
			"form" in elem && elem.disabled === disabled ||

			// Check non-disabled form elements for fieldset[disabled] ancestors
			"form" in elem && elem.disabled === false && (
				// Support: IE6-11+
				// Ancestry is covered for us
				elem.isDisabled === disabled ||

				// Otherwise, assume any non-<option> under fieldset[disabled] is disabled
				/* jshint -W018 */
				elem.isDisabled !== !disabled &&
					("label" in elem || !disabledAncestor( elem )) !== disabled
			);
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				return m ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;



var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		} );

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnotwhite = ( /\S+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			resolve.call( undefined, value );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( /*jshint -W002 */ value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.call( undefined, value );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList.then( fn );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnotwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :

					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? JSON.parse( data ) :
					data;
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() { return tween.cur(); } :
			function() { return jQuery.css( elem, prop, "" ); },
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) ),
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Support: IE <=9
		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		//
		// Support: Firefox <=42
		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
		if ( delegateCount && cur.nodeType &&
			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push( { elem: cur, handlers: matches } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			return ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function manipulationTarget( elem, content ) {
	if ( jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?

		// If we already have the right measurement, avoid augmentation
		4 :

		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var val,
		valueIsBorderBox = true,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if ( elem.getClientRects().length ) {
		val = elem.getBoundingClientRect()[ name ];
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function raf() {
	if ( timerId ) {
		window.requestAnimationFrame( raf );
		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* jshint -W083 */
			anim.done( function() {

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnotwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off or if document is hidden
	if ( jQuery.fx.off || document.hidden ) {
		opt.duration = 0;

	} else {
		opt.duration = typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.requestAnimationFrame ?
			window.requestAnimationFrame( raf ) :
			window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	if ( window.cancelAnimationFrame ) {
		window.cancelAnimationFrame( timerId );
	} else {
		window.clearInterval( timerId );
	}

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {
			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




var rclass = /[\t\r\n\f]/g;

function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnotwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + getClass( elem ) + " " ).replace( rclass, " " )
					.indexOf( className ) > -1
			) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g,
	rspaces = /[\x20\t\r\n\f]+/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?

					// Handle most common string cases
					ret.replace( rreturn, "" ) :

					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} ) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in uncached url if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rts, "" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win, rect, doc,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		// Make sure element is not hidden (display: none)
		if ( rect.width || rect.height ) {
			doc = elem.ownerDocument;
			win = getWindow( doc );
			docElem = doc.documentElement;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		}

		// Return zeros for disconnected and hidden elements (gh-2310)
		return rect;
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.parseJSON = JSON.parse;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}





var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}


return jQuery;
} ) );


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

/**
 * @class Common utilities
 * @name glMatrix
 */
var glMatrix = {};

// Configuration Constants
glMatrix.EPSILON = 0.000001;
glMatrix.ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
glMatrix.RANDOM = Math.random;
glMatrix.ENABLE_SIMD = false;

// Capability detection
glMatrix.SIMD_AVAILABLE = (glMatrix.ARRAY_TYPE === Float32Array) && ('SIMD' in this);
glMatrix.USE_SIMD = glMatrix.ENABLE_SIMD && glMatrix.SIMD_AVAILABLE;

/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */
glMatrix.setMatrixArrayType = function(type) {
    glMatrix.ARRAY_TYPE = type;
}

var degree = Math.PI / 180;

/**
* Convert Degree To Radian
*
* @param {Number} Angle in Degrees
*/
glMatrix.toRadian = function(a){
     return a * degree;
}

/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less 
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 * 
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */
glMatrix.equals = function(a, b) {
	return Math.abs(a - b) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a), Math.abs(b));
}

module.exports = glMatrix;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var makeSVGElement = __webpack_require__(26);
var shapeToSVG = __webpack_require__(27);
var extractRGBA = __webpack_require__(3);

var extractColor = function(str) {
    if (str.indexOf("rgb(") > -1 || str.indexOf("url(") > -1) {
	return {
	    'rgb': str,
	    'opacity': 1
	};
    }
    var rgba_arr = extractRGBA(str);
    return {
	'rgb': 'rgb('+Math.round(rgba_arr[0]*255)+','+Math.round(rgba_arr[1]*255)+','+Math.round(rgba_arr[2]*255)+')',
	'opacity': rgba_arr[3]
    };
};

function makeIdCounter() {
    var id = 0;
    return function () {
	id += 1;
	return id;
    };
}

var gradientId = makeIdCounter();

module.exports = {
    text: function(content,x,y,size,family,weight,alignment_baseline) {
	size = size || 12;
	var alignment_baseline_y_offset = size;
	if (alignment_baseline === "middle") {
	    alignment_baseline_y_offset = size/2;
	} else if (alignment_baseline === "bottom") {
	    alignment_baseline_y_offset = 0;
	}
	var elt = makeSVGElement('text', {
	    'x':(x || 0),
	    'y':(y || 0) + alignment_baseline_y_offset,
	    'font-size':size,
	    'font-family':(family || 'serif'),
	    'font-weight':(weight || 'normal'),
	    'text-anchor':'start',
	});
	elt.textContent = content + '';
	return elt;
    },
    group: function(x,y) {
	x = x || 0;
	y = y || 0;
	return makeSVGElement('g', {
	    'transform':'translate('+x+','+y+')'
	});
    },
    svg: function(width, height) {
	return makeSVGElement('svg', {
	    'width':(width || 0), 
	    'height':(height || 0),
	});
    },
    wrapText: function(in_dom_text_svg_elt, width) {
	var text = in_dom_text_svg_elt.textContent;
	in_dom_text_svg_elt.textContent = "";
	
	var words = text.split(" ");
	var dy = 0;
	var tspan = makeSVGElement('tspan', {'x':'0', 'dy':dy});
	in_dom_text_svg_elt.appendChild(tspan);
	
	var curr_tspan_words = [];
	for (var i=0; i<words.length; i++) {
	    curr_tspan_words.push(words[i]);
	    tspan.textContent = curr_tspan_words.join(" ");
	    if (tspan.getComputedTextLength() > width) {
		tspan.textContent = curr_tspan_words.slice(0, curr_tspan_words.length-1).join(" ");
		dy = in_dom_text_svg_elt.getBBox().height;
		curr_tspan_words = [words[i]];
		tspan = makeSVGElement('tspan', {'x':'0', 'dy':dy});
		in_dom_text_svg_elt.appendChild(tspan);
		tspan.textContent = words[i];
	    }
	}
    },
    fromShape: function(oncoprint_shape_computed_params, offset_x, offset_y) {
	return shapeToSVG(oncoprint_shape_computed_params, offset_x, offset_y);
    },
    polygon: function(points, fill) {
    	fill = extractColor(fill);
	return makeSVGElement('polygon', {'points': points, 'fill':fill.rgb, 'fill-opacity':fill.opacity});
    },
    rect: function(x,y,width,height,fill) {
    	fill = extractColor(fill);
	return makeSVGElement('rect', {'x':x, 'y':y, 'width':width, 'height':height, 'fill':fill.rgb, 'fill-opacity':fill.opacity});
    },
    bgrect: function(width, height, fill) {
    	fill = extractColor(fill);
	return makeSVGElement('rect', {'width':width, 'height':height, 'fill':fill.rgb, 'fill-opacity':fill.opacity});
    },
    path: function(points, stroke, fill, linearGradient) {
	points = points.map(function(pt) { return pt.join(","); });
	points[0] = 'M'+points[0];
	for (var i=1; i<points.length; i++) {
	    points[i] = 'L'+points[i];
	}
	if (!linearGradient) {
	stroke = extractColor(stroke);
	fill = extractColor(fill);
	}
	return makeSVGElement('path', {
	    'd': points.join(" "),
	    'stroke': linearGradient ? 'url(#'+linearGradient.getAttribute('id')+')' : stroke.rgb,
	    'stroke-opacity': linearGradient ? 0 : stroke.opacity,
	    'fill': linearGradient ? 'url(#'+linearGradient.getAttribute('id')+')' : fill.rgb,
	    'fill-opacity': linearGradient ? 1 : fill.opacity
	});
    },
    stop: function (offset, color) {
        var extracted = extractColor(color);
		return makeSVGElement('stop', {
			'offset': offset + '%',
			'stop-color': extracted.rgb,
			'stop-opacity': extracted.opacity
	});
	},
	linearGradient: function () {
        return makeSVGElement('linearGradient', {'id': 'linearGradient'+gradientId()});
    },
    defs: function() {
	return makeSVGElement('defs');
    },
    gradient: function(colorFn) {
	var gradient = makeSVGElement('linearGradient', {
	    'id': 'gradient'+gradientId(),
	    'x1':0,
	    'y1':0,
	    'x2':1,
	    'y2':0
	});
	for (var i=0; i<=100; i++) {
	    gradient.appendChild(
	    	this.stop(i, colorFn(i/100))
		);
	}
	return gradient;
    }
};




/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (str) {
    var ret = [0, 0, 0, 1];
    if (str[0] === "#") {
	// hex, convert to rgba
	var r = parseInt(str[1] + str[2], 16);
	var g = parseInt(str[3] + str[4], 16);
	var b = parseInt(str[5] + str[6], 16);
	str = 'rgba('+r+','+g+','+b+',1)';
    }
    var match = str.match(/^[\s]*rgba\([\s]*([0-9.]+)[\s]*,[\s]*([0-9.]+)[\s]*,[\s]*([0-9.]+)[\s]*,[\s]*([0-9.]+)[\s]*\)[\s]*$/);
    if (match && match.length === 5) {
	ret = [parseFloat(match[1]) / 255,
	    parseFloat(match[2]) / 255,
	    parseFloat(match[3]) / 255,
	    parseFloat(match[4])];
    }
    return ret;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(array, target_key, keyFn, return_closest_lower_if_not_found) {
	if (!array.length) {
		return -1; // return -1 for an empty array
	}
    var upper_excl = array.length;
    var lower_incl = 0;
    var middle;
    while (lower_incl < upper_excl) {
	middle = Math.floor((upper_excl + lower_incl) / 2);
	var middle_key = keyFn(array[middle]);
	if (middle_key === target_key) {
	    return middle;
	} else if (target_key > middle_key) {
	    lower_incl = middle + 1;
	} else if (target_key < middle_key) {
	    upper_excl = middle;
	} else {
	    // make sure we don't infinite loop in case anything's wrong
	    //	so that those three cases don't cover everything
	    return -1;
	}
    }
    if (return_closest_lower_if_not_found) {
	return Math.max(0, lower_incl-1);
    } else {
	return -1;
    }
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var CachedProperty = (function() {
    function CachedProperty(init_val, updateFn) {
	this.value = init_val;
	this.updateFn = updateFn;
	this.bound_properties = [];
    }
    CachedProperty.prototype.update = function() {
	this.value = this.updateFn.apply(null, arguments);
	for (var i=0; i<this.bound_properties.length; i++) {
	    this.bound_properties[i].update();
	}
    }
    CachedProperty.prototype.get = function() {
	return this.value;
    }
    CachedProperty.prototype.updateAndGet = function() {
	this.update();
	return this.get();
    }
    CachedProperty.prototype.addBoundProperty = function(cached_property) {
	this.bound_properties.push(cached_property);
    };
    return CachedProperty;
})();

module.exports = CachedProperty;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function cloneShallow(obj) {
    var ret = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            ret[key] = obj[key];
        }
    }
    return ret;
}

function doesCellIntersectPixel(cellHitzone, pixelX) {
    // cellHitzone: [lower, upper]
    // checks intersection with the half-open interval [pixelX, pixelX+1)

    var lower = cellHitzone[0], upper = cellHitzone[1];
    if (upper < pixelX) {
        return false;
    } else if (lower < pixelX + 1) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    cloneShallow: cloneShallow,
    doesCellIntersectPixel: doesCellIntersectPixel
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.3.2
 */

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */
// END HEADER

exports.glMatrix = __webpack_require__(1);
exports.mat2 = __webpack_require__(21);
exports.mat2d = __webpack_require__(22);
exports.mat3 = __webpack_require__(8);
exports.mat4 = __webpack_require__(23);
exports.quat = __webpack_require__(24);
exports.vec2 = __webpack_require__(25);
exports.vec3 = __webpack_require__(9);
exports.vec4 = __webpack_require__(10);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

var glMatrix = __webpack_require__(1);

/**
 * @class 3x3 Matrix
 * @name mat3
 */
var mat3 = {};

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
mat3.create = function() {
    var out = new glMatrix.ARRAY_TYPE(9);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
};

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
mat3.fromMat4 = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[4];
    out[4] = a[5];
    out[5] = a[6];
    out[6] = a[8];
    out[7] = a[9];
    out[8] = a[10];
    return out;
};

/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */
mat3.clone = function(a) {
    var out = new glMatrix.ARRAY_TYPE(9);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
};

/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
};

/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */
mat3.fromValues = function(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    var out = new glMatrix.ARRAY_TYPE(9);
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m10;
    out[4] = m11;
    out[5] = m12;
    out[6] = m20;
    out[7] = m21;
    out[8] = m22;
    return out;
};

/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */
mat3.set = function(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m10;
    out[4] = m11;
    out[5] = m12;
    out[6] = m20;
    out[7] = m21;
    out[8] = m22;
    return out;
};

/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
mat3.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
};

/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.transpose = function(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a12 = a[5];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a01;
        out[5] = a[7];
        out[6] = a02;
        out[7] = a12;
    } else {
        out[0] = a[0];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a[1];
        out[4] = a[4];
        out[5] = a[7];
        out[6] = a[2];
        out[7] = a[5];
        out[8] = a[8];
    }
    
    return out;
};

/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.invert = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],

        b01 = a22 * a11 - a12 * a21,
        b11 = -a22 * a10 + a12 * a20,
        b21 = a21 * a10 - a11 * a20,

        // Calculate the determinant
        det = a00 * b01 + a01 * b11 + a02 * b21;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = b01 * det;
    out[1] = (-a22 * a01 + a02 * a21) * det;
    out[2] = (a12 * a01 - a02 * a11) * det;
    out[3] = b11 * det;
    out[4] = (a22 * a00 - a02 * a20) * det;
    out[5] = (-a12 * a00 + a02 * a10) * det;
    out[6] = b21 * det;
    out[7] = (-a21 * a00 + a01 * a20) * det;
    out[8] = (a11 * a00 - a01 * a10) * det;
    return out;
};

/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.adjoint = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8];

    out[0] = (a11 * a22 - a12 * a21);
    out[1] = (a02 * a21 - a01 * a22);
    out[2] = (a01 * a12 - a02 * a11);
    out[3] = (a12 * a20 - a10 * a22);
    out[4] = (a00 * a22 - a02 * a20);
    out[5] = (a02 * a10 - a00 * a12);
    out[6] = (a10 * a21 - a11 * a20);
    out[7] = (a01 * a20 - a00 * a21);
    out[8] = (a00 * a11 - a01 * a10);
    return out;
};

/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */
mat3.determinant = function (a) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8];

    return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
};

/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
mat3.multiply = function (out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],

        b00 = b[0], b01 = b[1], b02 = b[2],
        b10 = b[3], b11 = b[4], b12 = b[5],
        b20 = b[6], b21 = b[7], b22 = b[8];

    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
    out[2] = b00 * a02 + b01 * a12 + b02 * a22;

    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
    out[5] = b10 * a02 + b11 * a12 + b12 * a22;

    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return out;
};

/**
 * Alias for {@link mat3.multiply}
 * @function
 */
mat3.mul = mat3.multiply;

/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */
mat3.translate = function(out, a, v) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],
        x = v[0], y = v[1];

    out[0] = a00;
    out[1] = a01;
    out[2] = a02;

    out[3] = a10;
    out[4] = a11;
    out[5] = a12;

    out[6] = x * a00 + y * a10 + a20;
    out[7] = x * a01 + y * a11 + a21;
    out[8] = x * a02 + y * a12 + a22;
    return out;
};

/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
mat3.rotate = function (out, a, rad) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],

        s = Math.sin(rad),
        c = Math.cos(rad);

    out[0] = c * a00 + s * a10;
    out[1] = c * a01 + s * a11;
    out[2] = c * a02 + s * a12;

    out[3] = c * a10 - s * a00;
    out[4] = c * a11 - s * a01;
    out[5] = c * a12 - s * a02;

    out[6] = a20;
    out[7] = a21;
    out[8] = a22;
    return out;
};

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
mat3.scale = function(out, a, v) {
    var x = v[0], y = v[1];

    out[0] = x * a[0];
    out[1] = x * a[1];
    out[2] = x * a[2];

    out[3] = y * a[3];
    out[4] = y * a[4];
    out[5] = y * a[5];

    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
};

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */
mat3.fromTranslation = function(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = v[0];
    out[7] = v[1];
    out[8] = 1;
    return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
mat3.fromRotation = function(out, rad) {
    var s = Math.sin(rad), c = Math.cos(rad);

    out[0] = c;
    out[1] = s;
    out[2] = 0;

    out[3] = -s;
    out[4] = c;
    out[5] = 0;

    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */
mat3.fromScaling = function(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;

    out[3] = 0;
    out[4] = v[1];
    out[5] = 0;

    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}

/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/
mat3.fromMat2d = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = 0;

    out[3] = a[2];
    out[4] = a[3];
    out[5] = 0;

    out[6] = a[4];
    out[7] = a[5];
    out[8] = 1;
    return out;
};

/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/
mat3.fromQuat = function (out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - yy - zz;
    out[3] = yx - wz;
    out[6] = zx + wy;

    out[1] = yx + wz;
    out[4] = 1 - xx - zz;
    out[7] = zy - wx;

    out[2] = zx - wy;
    out[5] = zy + wx;
    out[8] = 1 - xx - yy;

    return out;
};

/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/
mat3.normalFromMat4 = function (out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        // Calculate the determinant
        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

    return out;
};

/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat3.str = function (a) {
    return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
                    a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + 
                    a[6] + ', ' + a[7] + ', ' + a[8] + ')';
};

/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat3.frob = function (a) {
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2)))
};

/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
mat3.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    return out;
};

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
mat3.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    return out;
};

/**
 * Alias for {@link mat3.subtract}
 * @function
 */
mat3.sub = mat3.subtract;

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */
mat3.multiplyScalar = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    return out;
};

/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */
mat3.multiplyScalarAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    out[3] = a[3] + (b[3] * scale);
    out[4] = a[4] + (b[4] * scale);
    out[5] = a[5] + (b[5] * scale);
    out[6] = a[6] + (b[6] * scale);
    out[7] = a[7] + (b[7] * scale);
    out[8] = a[8] + (b[8] * scale);
    return out;
};

/*
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
mat3.exactEquals = function (a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && 
           a[3] === b[3] && a[4] === b[4] && a[5] === b[5] &&
           a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
};

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
mat3.equals = function (a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = a[6], b7 = b[7], b8 = b[8];
    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
            Math.abs(a4 - b4) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
            Math.abs(a5 - b5) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
            Math.abs(a6 - b6) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
            Math.abs(a7 - b7) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
            Math.abs(a8 - b8) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a8), Math.abs(b8)));
};


module.exports = mat3;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

var glMatrix = __webpack_require__(1);

/**
 * @class 3 Dimensional Vector
 * @name vec3
 */
var vec3 = {};

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
vec3.create = function() {
    var out = new glMatrix.ARRAY_TYPE(3);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    return out;
};

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
vec3.clone = function(a) {
    var out = new glMatrix.ARRAY_TYPE(3);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
};

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
vec3.fromValues = function(x, y, z) {
    var out = new glMatrix.ARRAY_TYPE(3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
};

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
vec3.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
};

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
vec3.set = function(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
};

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
};

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
};

/**
 * Alias for {@link vec3.subtract}
 * @function
 */
vec3.sub = vec3.subtract;

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.multiply = function(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
};

/**
 * Alias for {@link vec3.multiply}
 * @function
 */
vec3.mul = vec3.multiply;

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.divide = function(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
};

/**
 * Alias for {@link vec3.divide}
 * @function
 */
vec3.div = vec3.divide;

/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */
vec3.ceil = function (out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    return out;
};

/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */
vec3.floor = function (out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    return out;
};

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.min = function(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    return out;
};

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.max = function(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    return out;
};

/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */
vec3.round = function (out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    return out;
};

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
vec3.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
};

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
vec3.scaleAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    return out;
};

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
vec3.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2];
    return Math.sqrt(x*x + y*y + z*z);
};

/**
 * Alias for {@link vec3.distance}
 * @function
 */
vec3.dist = vec3.distance;

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
vec3.squaredDistance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2];
    return x*x + y*y + z*z;
};

/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */
vec3.sqrDist = vec3.squaredDistance;

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
vec3.length = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    return Math.sqrt(x*x + y*y + z*z);
};

/**
 * Alias for {@link vec3.length}
 * @function
 */
vec3.len = vec3.length;

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
vec3.squaredLength = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    return x*x + y*y + z*z;
};

/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */
vec3.sqrLen = vec3.squaredLength;

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
vec3.negate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
};

/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */
vec3.inverse = function(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
};

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
vec3.normalize = function(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    var len = x*x + y*y + z*z;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
    }
    return out;
};

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
vec3.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
};

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.cross = function(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2],
        bx = b[0], by = b[1], bz = b[2];

    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
};

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
vec3.lerp = function (out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
};

/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
vec3.hermite = function (out, a, b, c, d, t) {
  var factorTimes2 = t * t,
      factor1 = factorTimes2 * (2 * t - 3) + 1,
      factor2 = factorTimes2 * (t - 2) + t,
      factor3 = factorTimes2 * (t - 1),
      factor4 = factorTimes2 * (3 - 2 * t);
  
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  
  return out;
};

/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
vec3.bezier = function (out, a, b, c, d, t) {
  var inverseFactor = 1 - t,
      inverseFactorTimesTwo = inverseFactor * inverseFactor,
      factorTimes2 = t * t,
      factor1 = inverseFactorTimesTwo * inverseFactor,
      factor2 = 3 * t * inverseFactorTimesTwo,
      factor3 = 3 * factorTimes2 * inverseFactor,
      factor4 = factorTimes2 * t;
  
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  
  return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
vec3.random = function (out, scale) {
    scale = scale || 1.0;

    var r = glMatrix.RANDOM() * 2.0 * Math.PI;
    var z = (glMatrix.RANDOM() * 2.0) - 1.0;
    var zScale = Math.sqrt(1.0-z*z) * scale;

    out[0] = Math.cos(r) * zScale;
    out[1] = Math.sin(r) * zScale;
    out[2] = z * scale;
    return out;
};

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
vec3.transformMat4 = function(out, a, m) {
    var x = a[0], y = a[1], z = a[2],
        w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1.0;
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
    return out;
};

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
vec3.transformMat3 = function(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
};

/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
vec3.transformQuat = function(out, a, q) {
    // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations

    var x = a[0], y = a[1], z = a[2],
        qx = q[0], qy = q[1], qz = q[2], qw = q[3],

        // calculate quat * vec
        ix = qw * x + qy * z - qz * y,
        iy = qw * y + qz * x - qx * z,
        iz = qw * z + qx * y - qy * x,
        iw = -qx * x - qy * y - qz * z;

    // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return out;
};

/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
vec3.rotateX = function(out, a, b, c){
   var p = [], r=[];
	  //Translate point to the origin
	  p[0] = a[0] - b[0];
	  p[1] = a[1] - b[1];
  	p[2] = a[2] - b[2];

	  //perform rotation
	  r[0] = p[0];
	  r[1] = p[1]*Math.cos(c) - p[2]*Math.sin(c);
	  r[2] = p[1]*Math.sin(c) + p[2]*Math.cos(c);

	  //translate to correct position
	  out[0] = r[0] + b[0];
	  out[1] = r[1] + b[1];
	  out[2] = r[2] + b[2];

  	return out;
};

/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
vec3.rotateY = function(out, a, b, c){
  	var p = [], r=[];
  	//Translate point to the origin
  	p[0] = a[0] - b[0];
  	p[1] = a[1] - b[1];
  	p[2] = a[2] - b[2];
  
  	//perform rotation
  	r[0] = p[2]*Math.sin(c) + p[0]*Math.cos(c);
  	r[1] = p[1];
  	r[2] = p[2]*Math.cos(c) - p[0]*Math.sin(c);
  
  	//translate to correct position
  	out[0] = r[0] + b[0];
  	out[1] = r[1] + b[1];
  	out[2] = r[2] + b[2];
  
  	return out;
};

/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
vec3.rotateZ = function(out, a, b, c){
  	var p = [], r=[];
  	//Translate point to the origin
  	p[0] = a[0] - b[0];
  	p[1] = a[1] - b[1];
  	p[2] = a[2] - b[2];
  
  	//perform rotation
  	r[0] = p[0]*Math.cos(c) - p[1]*Math.sin(c);
  	r[1] = p[0]*Math.sin(c) + p[1]*Math.cos(c);
  	r[2] = p[2];
  
  	//translate to correct position
  	out[0] = r[0] + b[0];
  	out[1] = r[1] + b[1];
  	out[2] = r[2] + b[2];
  
  	return out;
};

/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
vec3.forEach = (function() {
    var vec = vec3.create();

    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if(!stride) {
            stride = 3;
        }

        if(!offset) {
            offset = 0;
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length);
        } else {
            l = a.length;
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2];
            fn(vec, vec, arg);
            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2];
        }
        
        return a;
    };
})();

/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */
vec3.angle = function(a, b) {
   
    var tempA = vec3.fromValues(a[0], a[1], a[2]);
    var tempB = vec3.fromValues(b[0], b[1], b[2]);
 
    vec3.normalize(tempA, tempA);
    vec3.normalize(tempB, tempB);
 
    var cosine = vec3.dot(tempA, tempB);

    if(cosine > 1.0){
        return 0;
    } else {
        return Math.acos(cosine);
    }     
};

/**
 * Returns a string representation of a vector
 *
 * @param {vec3} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
vec3.str = function (a) {
    return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
};

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
vec3.exactEquals = function (a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
};

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
vec3.equals = function (a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2];
    var b0 = b[0], b1 = b[1], b2 = b[2];
    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)));
};

module.exports = vec3;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

var glMatrix = __webpack_require__(1);

/**
 * @class 4 Dimensional Vector
 * @name vec4
 */
var vec4 = {};

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
vec4.create = function() {
    var out = new glMatrix.ARRAY_TYPE(4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    return out;
};

/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */
vec4.clone = function(a) {
    var out = new glMatrix.ARRAY_TYPE(4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */
vec4.fromValues = function(x, y, z, w) {
    var out = new glMatrix.ARRAY_TYPE(4);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
};

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
vec4.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
vec4.set = function(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
};

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
};

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    return out;
};

/**
 * Alias for {@link vec4.subtract}
 * @function
 */
vec4.sub = vec4.subtract;

/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.multiply = function(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    out[3] = a[3] * b[3];
    return out;
};

/**
 * Alias for {@link vec4.multiply}
 * @function
 */
vec4.mul = vec4.multiply;

/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.divide = function(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    out[3] = a[3] / b[3];
    return out;
};

/**
 * Alias for {@link vec4.divide}
 * @function
 */
vec4.div = vec4.divide;

/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to ceil
 * @returns {vec4} out
 */
vec4.ceil = function (out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    out[3] = Math.ceil(a[3]);
    return out;
};

/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to floor
 * @returns {vec4} out
 */
vec4.floor = function (out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    out[3] = Math.floor(a[3]);
    return out;
};

/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.min = function(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    out[3] = Math.min(a[3], b[3]);
    return out;
};

/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.max = function(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    out[3] = Math.max(a[3], b[3]);
    return out;
};

/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to round
 * @returns {vec4} out
 */
vec4.round = function (out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    out[3] = Math.round(a[3]);
    return out;
};

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
vec4.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
};

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */
vec4.scaleAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    out[3] = a[3] + (b[3] * scale);
    return out;
};

/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */
vec4.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2],
        w = b[3] - a[3];
    return Math.sqrt(x*x + y*y + z*z + w*w);
};

/**
 * Alias for {@link vec4.distance}
 * @function
 */
vec4.dist = vec4.distance;

/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
vec4.squaredDistance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2],
        w = b[3] - a[3];
    return x*x + y*y + z*z + w*w;
};

/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */
vec4.sqrDist = vec4.squaredDistance;

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
vec4.length = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    return Math.sqrt(x*x + y*y + z*z + w*w);
};

/**
 * Alias for {@link vec4.length}
 * @function
 */
vec4.len = vec4.length;

/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
vec4.squaredLength = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    return x*x + y*y + z*z + w*w;
};

/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */
vec4.sqrLen = vec4.squaredLength;

/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */
vec4.negate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = -a[3];
    return out;
};

/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */
vec4.inverse = function(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
};

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
vec4.normalize = function(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    var len = x*x + y*y + z*z + w*w;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        out[0] = x * len;
        out[1] = y * len;
        out[2] = z * len;
        out[3] = w * len;
    }
    return out;
};

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
vec4.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
};

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */
vec4.lerp = function (out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    out[3] = aw + t * (b[3] - aw);
    return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */
vec4.random = function (out, scale) {
    scale = scale || 1.0;

    //TODO: This is a pretty awful way of doing this. Find something better.
    out[0] = glMatrix.RANDOM();
    out[1] = glMatrix.RANDOM();
    out[2] = glMatrix.RANDOM();
    out[3] = glMatrix.RANDOM();
    vec4.normalize(out, out);
    vec4.scale(out, out, scale);
    return out;
};

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
vec4.transformMat4 = function(out, a, m) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return out;
};

/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */
vec4.transformQuat = function(out, a, q) {
    var x = a[0], y = a[1], z = a[2],
        qx = q[0], qy = q[1], qz = q[2], qw = q[3],

        // calculate quat * vec
        ix = qw * x + qy * z - qz * y,
        iy = qw * y + qz * x - qx * z,
        iz = qw * z + qx * y - qy * x,
        iw = -qx * x - qy * y - qz * z;

    // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    out[3] = a[3];
    return out;
};

/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
vec4.forEach = (function() {
    var vec = vec4.create();

    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if(!stride) {
            stride = 4;
        }

        if(!offset) {
            offset = 0;
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length);
        } else {
            l = a.length;
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2]; vec[3] = a[i+3];
            fn(vec, vec, arg);
            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2]; a[i+3] = vec[3];
        }
        
        return a;
    };
})();

/**
 * Returns a string representation of a vector
 *
 * @param {vec4} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
vec4.str = function (a) {
    return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
};

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
vec4.exactEquals = function (a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
};

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
vec4.equals = function (a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
};

module.exports = vec4;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var Shape = (function() {
    var default_parameter_values = {
	    'width': '100%', 
	    'height': '100%', 
	    'x': '0%', 
	    'y': '0%', 
	    'z': 0,
	    'x1': '0%', 
	    'x2': '0%', 
	    'x3': '0%', 
	    'y1': '0%', 
	    'y2': '0%', 
	    'y3': '0%',
	    'stroke': 'rgba(0,0,0,0)', 
	    'fill': 'rgba(23,23,23,1)', 
	    'stroke-width': '0',
	    'stroke-opacity': '0'
    };
    var parameter_name_to_dimension_index = {
	'stroke-width':0,
	'width': 0,
	'x':0,
	'x1':0,
	'x2':0,
	'x3':0,
	'height':1,
	'y':1,
	'y1':1,
	'y2':1,
	'y3':1
    };
    var hash_parameter_order = Object.keys(default_parameter_values).concat("type");
    
    function Shape(params) {
	this.params = params;
	this.params_with_type = {};
	this.completeWithDefaults();
	this.markParameterTypes();
    }
    
    var getCachedShape = (function() {
	var cache = {}; // shape cache to save memory
    
	return function(computed_params) {
	    var hash = Shape.hashComputedShape(computed_params);
	    cache[hash] = cache[hash] || Object.freeze(computed_params);
	    return cache[hash];
	};
    })();
    
    Shape.prototype.completeWithDefaults = function() {
	var required_parameters = this.getRequiredParameters();
	for (var i=0; i<required_parameters.length; i++) {
	    var param = required_parameters[i];
	    this.params[param] = (typeof this.params[param] === 'undefined' ? default_parameter_values[param] : this.params[param]);
	}
    }
    Shape.prototype.markParameterTypes = function() {
	var parameters = Object.keys(this.params);
	for (var i=0; i<parameters.length; i++) {
	    var param_name = parameters[i];
	    var param_val = this.params[param_name];
	    if (typeof param_val === 'function') {
		this.params_with_type[param_name] = {'type':'function', 'value':param_val};
	    } else {
		this.params_with_type[param_name] = {'type':'value', 'value': param_val};
	    }
	}
    }
    Shape.prototype.getComputedParams = function(d, base_width, base_height) {
	var computed_params = {};
	var param_names = Object.keys(this.params_with_type);
	var dimensions = [base_width, base_height];
	for (var i=0; i<param_names.length; i++) {
	    var param_name = param_names[i];
	    var param_val_map = this.params_with_type[param_name];
	    var param_val = param_val_map.value;
	    if (param_name !== 'type') {
		if (param_val_map.type === 'function') {
		    param_val = param_val(d);
		}
		if (param_val[param_val.length-1] === '%') {
		    // check a couple of commonly-used special cases to avoid slower parseFloat 
		    if (param_val === '100%') {
			param_val = 1;
		    } else {
			param_val = parseFloat(param_val) / 100;
		    }
		    param_val *= dimensions[parameter_name_to_dimension_index[param_name]];
		}
	    }
	    computed_params[param_name] = param_val;
	}
	return getCachedShape(computed_params);
    };
    Shape.hashComputedShape = function (computed_params, z_index) {
	return hash_parameter_order.reduce(function (hash, param_name) {
	    return hash + "," + computed_params[param_name];
	}, "") + "," + z_index;
    };
    return Shape;
})();



var Rectangle = (function() {
    function Rectangle(params) {
	Shape.call(this, params);
    }
    Rectangle.prototype = Object.create(Shape.prototype);
    Rectangle.prototype.getRequiredParameters = function() {
	return ['width', 'height', 'x', 'y', 'z', 'stroke', 'fill', 'stroke-width']; 
    }
    return Rectangle;
})();

var Triangle = (function() {
    function Triangle(params) {
	Shape.call(this, params);
    }
    Triangle.prototype = Object.create(Shape.prototype);
    Triangle.prototype.getRequiredParameters = function() {
	return ['x1', 'x2', 'x3', 'y1', 'y2', 'y3', 'z', 'stroke', 'fill', 'stroke-width']; 
    }
    return Triangle;
})();

var Ellipse = (function() {
    function Ellipse(params) {
	Shape.call(this, params);
    }
    Ellipse.prototype = Object.create(Shape.prototype);
    Ellipse.prototype.getRequiredParameters = function() {
	return ['width', 'height', 'x', 'y', 'z', 'stroke', 'fill', 'stroke-width']; 
    }
    return Ellipse;
})();

var Line = (function() {
    function Line(params) {
	Shape.call(this, params);
    }
    Line.prototype = Object.create(Shape.prototype);
    Line.prototype.getRequiredParameters = function() {
	return ['x1', 'x2', 'y1', 'y2', 'z', 'stroke', 'stroke-width']; 
    }
    return Line;
})();

module.exports = {
    'Rectangle':Rectangle,
    'Triangle':Triangle,
    'Ellipse':Ellipse,
    'Line':Line,
    'Shape':Shape
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(13);

var OncoprintModel = __webpack_require__(14);
var OncoprintWebGLCellView = __webpack_require__(20);
var OncoprintLabelView = __webpack_require__(29);
var OncoprintRuleSet = __webpack_require__(30);
var OncoprintTrackOptionsView = __webpack_require__(32);
var OncoprintLegendView = __webpack_require__(34);//TODO: rename
var OncoprintToolTip = __webpack_require__(35);
var OncoprintTrackInfoView = __webpack_require__(36);
var OncoprintMinimapView = __webpack_require__(37);

var svgfactory = __webpack_require__(2);

var $ = __webpack_require__(0);

var clamp = function(val, lower, upper) {
    return Math.min(Math.max(val, lower), upper);
};

var Oncoprint = (function () {
    // this is the controller
    var nextTrackId = (function () {
	var ctr = 0;
	return function () {
	    ctr += 1;
	    return ctr;
	}
    })();
    function Oncoprint(ctr_selector, width) {
	var self = this;

	this.destroyed = false;
	this.webgl_unavailable = (document.createElement('canvas').getContext('experimental-webgl') === null);
	if (this.webgl_unavailable) {
		$(ctr_selector).append("<p class='oncoprintjs__webgl_unavailable_message'>WebGL context cannot be retrieved, so oncoprint cannot be used. Please visit <a href='http://webglreport.com'>WebGL Report</a> to explore your browsers WebGL capabilities.</p>");
		return;
	}

	this.ctr_selector = ctr_selector;
	
	var $ctr = $('<span></span>').css({'position':'relative', 'display':'inline-block'}).appendTo(ctr_selector);
	var $oncoprint_ctr = $('<div></div>')
			    .css({'position':'absolute', 'display':'inline-block'})
			    .appendTo($ctr);
		    
	var $tooltip_ctr = $('<span></span>').css({'position':'absolute'}).appendTo(ctr_selector);
	var $legend_ctr = $('<div></div>').css({'position':'absolute', 'display':'inline-block', 'top':0, 'left':0, 'min-height':1})
			    .appendTo($ctr);
	
	var $label_canvas = $('<canvas></canvas>')
			    .css({'display':'inline-block', 
				'position':'absolute', 
				'left':'0px', 
				'top':'0px'})
			    .addClass("noselect")
			    .attr({'width':'150', 'height':'250'});
		    
	var $track_options_div = $('<div></div>')
				.css({'position':'absolute', 
					'left':'150px', 
					'top':'0px'})
				.addClass("noselect")
				.attr({'width':'50', 'height':'250'});
			
	var $legend_div = $('<div></div>')
			    .css({'position':'absolute', 
				    'top':'250px',
				    'min-height':1})
			    .addClass("noselect oncoprint-legend-div");
	
	var $cell_div = $('<div>')
			.css({'width':width,
			    'display':'inline-block', 
			    'position':'absolute', 
			    'left':'200px', 
			    'top':'0px'})
			.addClass("noselect");
		
	var $cell_canvas = $('<canvas></canvas>')
			    .attr({'width':'0px', 'height':'0px'})
			    .css({'position':'absolute', 'top':'0px', 'left':'0px'})
			    .addClass("noselect");
		    
	var $dummy_scroll_div = $('<div>')
				.css({'position':'absolute',
				    'overflow-x':'scroll',
				    'overflow-y':'scroll',
				    'top':'0', 
				    'left':'0px', 
				    'height':'1px',
				}).addClass('oncoprintjs__scroll_div');
	
	var $dummy_scroll_div_contents = $('<div>').appendTo($dummy_scroll_div);
				
	var $cell_overlay_canvas = $('<canvas></canvas>')
				    .attr({'width':'0px', 'height':'0px'})
				    .css({'position':'absolute', 
					    'top':'0px', 
					    'left':'0px'})
				    .addClass("noselect")
				    .addClass('oncoprintjs__cell_overlay_div');
			    
	var $track_info_div = $('<div>')
				.css({'position':'absolute'});
			
	var $minimap_div = $('<div>').css({'position':'absolute', 'outline':'solid 1px black', 'display': 'none'}).addClass("noselect");
	
	var $minimap_canvas = $('<canvas></canvas>')
				    .attr('width', 300)
				    .attr('height', 300)
				    .css({'position':'absolute', 'top':'0px', 'left':'0px', 'z-index':0})
				    .addClass("noselect");
	var $minimap_overlay_canvas = $('<canvas></canvas>')
				    .attr('width', 300)
				    .attr('height', 300)
				    .css({'position': 'absolute', 'top':'0px', 'left':'0px', 'z-index':1})
				    .addClass("noselect");
	
	$label_canvas.appendTo($oncoprint_ctr);
	$cell_div.appendTo($oncoprint_ctr);
	$track_options_div.appendTo($oncoprint_ctr);
	$track_info_div.appendTo($oncoprint_ctr);
	
	$legend_div.appendTo($legend_ctr);

	$minimap_div.appendTo($ctr);
	
	$cell_canvas.appendTo($cell_div);
	$cell_overlay_canvas.appendTo($cell_div);
	$dummy_scroll_div.appendTo($cell_div);
	$dummy_scroll_div.on("mousemove mousedown mouseup", function(evt) {
	    $cell_overlay_canvas.trigger(evt);
	});
	$minimap_canvas.appendTo($minimap_div);
	$minimap_overlay_canvas.appendTo($minimap_div);
	
	this.$ctr = $ctr;
	this.$oncoprint_ctr = $oncoprint_ctr;
	this.$cell_div = $cell_div;
	this.$legend_div = $legend_div;
	this.$track_options_div = $track_options_div;
	this.$track_info_div = $track_info_div;
	this.$dummy_scroll_div = $dummy_scroll_div;
	this.$minimap_div = $minimap_div;
	
	
	
	this.$cell_canvas = $cell_canvas;
	this.$cell_overlay_canvas = $cell_overlay_canvas;
	
	this.model = new OncoprintModel();
	
	this.cell_view = new OncoprintWebGLCellView($cell_div, $cell_canvas, $cell_overlay_canvas, $dummy_scroll_div_contents, this.model, new OncoprintToolTip($tooltip_ctr), function(left, right) {
	    var enclosed_ids = self.model.getIdsInLeftInterval(left, right);
	    self.setHorzZoom(self.model.getHorzZoomToFit(self.cell_view.visible_area_width, enclosed_ids));
	    self.$dummy_scroll_div.scrollLeft(self.model.getZoomedColumnLeft(enclosed_ids[0]));
	    self.id_clipboard = enclosed_ids;
	},
		(function () {
		    var highlight_timeout = null;
		    var highlight_track = null;
		    return function (track_id) {
			if (track_id === null) {
			    highlight_track = null;
			    self.highlightTrack(null);
			    clearTimeout(highlight_timeout);
			} else {
			    if (highlight_track !== track_id) {
				self.highlightTrack(null);
				clearTimeout(highlight_timeout);
				highlight_track = track_id;
				highlight_timeout = setTimeout(function() {
				    self.highlightTrack(highlight_track);
				}, 250);
			    }
			}
		    };
		})());
	
	this.minimap_view = new OncoprintMinimapView($minimap_div, $minimap_canvas, $minimap_overlay_canvas, this.model, this.cell_view, 150, 150, function(x,y) {
	    self.setScroll(x,y);
	},
	function(vp) {
	    self.setViewport(vp.col,vp.scroll_y_proportion,vp.num_cols, vp.zoom_y);
	},
	function(val) {
	    var prev_viewport = self.cell_view.getViewportOncoprintSpace(self.model);
	    var prev_center_onc_space = (prev_viewport.left + prev_viewport.right) / 2;
	    var center_column = Math.floor(prev_center_onc_space / (self.model.getCellWidth(true) + self.model.getCellPadding(true)));
	    self.setHorzZoom(val);
	    var viewport = self.cell_view.getViewportOncoprintSpace(self.model);
	    var center_column_x_zoomed = center_column * (self.model.getCellWidth() + self.model.getCellPadding());
	    var half_viewport_width_zoomed = self.model.getHorzZoom() * (viewport.right - viewport.left) / 2;
	    
	    self.setHorzScroll(center_column_x_zoomed - half_viewport_width_zoomed);
	},
	function(val) {
	    var prev_viewport = self.cell_view.getViewportOncoprintSpace(self.model);
	    var center_onc_space = (prev_viewport.top + prev_viewport.bottom) / 2;
	    self.setVertZoom(val);
	    var viewport = self.cell_view.getViewportOncoprintSpace(self.model);
	    var half_viewport_height_zoomed = self.model.getVertZoom() * (viewport.bottom - viewport.top) / 2;
	    
	    self.setVertScroll(center_onc_space * self.model.getVertZoom() - half_viewport_height_zoomed);
	},
	function() {
	    updateHorzZoomToFit(self);
	    var left = self.model.getZoomedColumnLeft();
	    self.setHorzScroll(Math.min.apply(null, self.keep_horz_zoomed_to_fit_ids.map(function(id) { return left[id]; })));
	},
	function() {
	    self.setMinimapVisible(false);
	});
	/*this.minimap_view = {};
	var methods = ['moveTrack','addTracks','removeTrack','setHorzZoom','setVertZoom','setScroll','setZoom','setHorzScroll','setVertScroll','setTrackData','sort','shareRuleSet','setRuleSet','setIdOrder','suppressRendering','releaseRendering','hideIds'];
	for (var i=0; i<methods.length; i++) {
	    this.minimap_view[methods[i]] = function(){};
	}*/
	
	this.track_options_view = new OncoprintTrackOptionsView($track_options_div,
								function (track_id) {
								    // move up
								    var tracks = self.model.getContainingTrackGroup(track_id);
								    var index = tracks.indexOf(track_id);
								    if (index > 0) {
									var new_previous_track = null;
									if (index >= 2) {
									    new_previous_track = tracks[index-2];
									}
									self.moveTrack(track_id, new_previous_track);
								    }
								},
								function (track_id) {
								    // move down
								    var tracks = self.model.getContainingTrackGroup(track_id);
								    var index = tracks.indexOf(track_id);
								    if (index < tracks.length - 1) {
									self.moveTrack(track_id, tracks[index+1]);
								    }
								},
								function (track_id) { self.removeTrack(track_id); },
								function (track_id, dir) { self.setTrackSortDirection(track_id, dir); },
								function (track_id) { self.removeExpansionTracksFor(track_id); });
	this.track_info_view = new OncoprintTrackInfoView($track_info_div, new OncoprintToolTip($tooltip_ctr));
								
	//this.track_info_view = new OncoprintTrackInfoView($track_info_div);

	this.label_view = new OncoprintLabelView($label_canvas, this.model, new OncoprintToolTip($tooltip_ctr, {noselect: true}));
	this.label_view.setDragCallback(function(target_track, new_previous_track) {
	    self.moveTrack(target_track, new_previous_track);
	});
	
	this.legend_view = new OncoprintLegendView($legend_div, 10, 20);
	
	this.keep_sorted = false;
	
	this.keep_horz_zoomed_to_fit = false;
	this.keep_horz_zoomed_to_fit_ids = [];
	
	// We need to handle scrolling this way because for some reason huge 
	//  canvas elements have terrible resolution.
	var cell_view = this.cell_view;
	var model = this.model;
	
	this.target_dummy_scroll_left = 0;
	this.target_dummy_scroll_top = 0;
	
	(function setUpOncoprintScroll(oncoprint) {
	    $dummy_scroll_div.scroll(function (e) {
		var dummy_scroll_left = $dummy_scroll_div.scrollLeft();
		var dummy_scroll_top = $dummy_scroll_div.scrollTop();
		if (dummy_scroll_left !== self.target_dummy_scroll_left || dummy_scroll_top !== self.target_dummy_scroll_top) {
		    // In setDummyScrollDivScroll, where we intend to set the scroll programmatically without
		    //	triggering the handler, we set target_dummy_scroll_left and target_dummy_scroll_top,
		    //	so if they're not set (we get inside this block), then it's a user-triggered scroll.
		    //	
		    // Set oncoprint scroll to match
		    self.target_dummy_scroll_left = dummy_scroll_left;
		    self.target_dummy_scroll_top = dummy_scroll_top;
		    var maximum_dummy_scroll_div_scroll = maxDummyScrollDivScroll(oncoprint);
		    var maximum_div_scroll_left = maximum_dummy_scroll_div_scroll.left;
		    var maximum_div_scroll_top = maximum_dummy_scroll_div_scroll.top;
		    var scroll_left_prop = maximum_div_scroll_left > 0 ? dummy_scroll_left / maximum_div_scroll_left : 0;
		    var scroll_top_prop = maximum_div_scroll_top > 0 ? dummy_scroll_top / maximum_div_scroll_top : 0;
		    scroll_left_prop = clamp(scroll_left_prop, 0, 1);
		    scroll_top_prop = clamp(scroll_top_prop, 0, 1);
		    var maximum_scroll_left = maxOncoprintScrollLeft(self);
		    var maximum_scroll_top = maxOncoprintScrollTop(self);
		    var scroll_left = Math.round(maximum_scroll_left * scroll_left_prop);
		    var scroll_top = Math.round(maximum_scroll_top * scroll_top_prop);
		    self.keep_horz_zoomed_to_fit = false;

		    doSetScroll(self, scroll_left, scroll_top);
		}
	    });
	})(self);
	
	this.horz_zoom_callbacks = [];
	this.minimap_close_callbacks = [];

	this.onWindowResize = function() {
        resizeAndOrganize(self);
    };
	
	$(window).on("resize", this.onWindowResize);
	
	
	this.id_clipboard = [];
	this.clipboard_change_callbacks = [];

	this.pending_resize_and_organize = false;
    }

    var _SetLegendTop = function (oncoprint) {
	if (oncoprint.model.rendering_suppressed_depth > 0) {
	    return;
	}
	oncoprint.$legend_div.css({'top': oncoprint.model.getCellViewHeight() + 30});
    };
    var setLegendTopAfterTimeout = function (oncoprint) {
	if (oncoprint.model.rendering_suppressed_depth > 0) {
	    return;
	}
	setTimeout(function () {
	    setHeight(oncoprint);
	    _SetLegendTop(oncoprint);
	}, 0);
    };

    var setHeight = function(oncoprint) {
	oncoprint.$ctr.css({'min-height': oncoprint.model.getCellViewHeight() + Math.max(oncoprint.$legend_div.outerHeight(), (oncoprint.$minimap_div.is(":visible") ? oncoprint.$minimap_div.outerHeight() : 0)) + 30});
    };
    
    var resizeAndOrganize = function (oncoprint, onComplete) {
	if (oncoprint.model.rendering_suppressed_depth > 0) {
	    return;
	}
	var ctr_width = $(oncoprint.ctr_selector).width();
	if (ctr_width === 0) {
		// dont make any adjustments while oncoprint is offscreen, DOM size calculations would be messed up
		oncoprint.pending_resize_and_organize = true;
		return;
	}
	oncoprint.$track_options_div.css({'left': oncoprint.label_view.getWidth()});
	oncoprint.$track_info_div.css({'left': oncoprint.label_view.getWidth() + oncoprint.track_options_view.getWidth()});
	var cell_div_left = oncoprint.label_view.getWidth() + oncoprint.track_options_view.getWidth() + oncoprint.track_info_view.getWidth();
	oncoprint.$cell_div.css('left', cell_div_left);
	oncoprint.cell_view.setWidth(ctr_width - cell_div_left - 20, oncoprint.model);

	_SetLegendTop(oncoprint);
	oncoprint.legend_view.setWidth(ctr_width - oncoprint.$minimap_div.outerWidth() - 20, oncoprint.model);

	setHeight(oncoprint);
	oncoprint.$ctr.css({'min-width': ctr_width});

	setTimeout(function () {
	    if (oncoprint.keep_horz_zoomed_to_fit) {
		updateHorzZoomToFit(oncoprint);
	    }
        onComplete && onComplete();
	}, 0);
    };

    var resizeAndOrganizeAfterTimeout = function (oncoprint, onComplete) {
	if (oncoprint.model.rendering_suppressed_depth > 0) {
	    return;
	}
	setTimeout(function () {
	    resizeAndOrganize(oncoprint, onComplete);
	}, 0);
    };
    
    var maxOncoprintScrollLeft = function(oncoprint) {
	return Math.max(0, oncoprint.model.getOncoprintWidth() - oncoprint.cell_view.getWidth());
    };
    
    var maxOncoprintScrollTop = function(oncoprint) {
	return Math.max(0, oncoprint.model.getOncoprintHeight() - oncoprint.model.getCellViewHeight());
    };
    
    var maxDummyScrollDivScroll = function(oncoprint) {
	var dummy_scroll_div_client_size = oncoprint.cell_view.getDummyScrollDivClientSize();
	var maximum_div_scroll_left = Math.max(0, (oncoprint.$dummy_scroll_div[0].scrollWidth - dummy_scroll_div_client_size.width));
	var maximum_div_scroll_top = Math.max(0, (oncoprint.$dummy_scroll_div[0].scrollHeight - dummy_scroll_div_client_size.height));
	return {'left': maximum_div_scroll_left, 'top': maximum_div_scroll_top};
    };
    
    Oncoprint.prototype.setMinimapVisible = function (visible) {
    	if(this.webgl_unavailable || this.destroyed) {
    		return;
		}
	if (visible) {
	    this.$minimap_div.css({'display': 'block', 'top': this.model.getCellViewHeight() + 30, 'left': $(this.ctr_selector).width() - this.$minimap_div.outerWidth() - 10});
	} else {
	    this.$minimap_div.css('display', 'none');
	    executeMinimapCloseCallbacks(this);
	}
	resizeAndOrganizeAfterTimeout(this);
    }
    
    Oncoprint.prototype.scrollTo = function(left) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	this.$dummy_scroll_div.scrollLeft(left);
    }
    Oncoprint.prototype.onHorzZoom = function(callback) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	this.horz_zoom_callbacks.push(callback);
    }
    Oncoprint.prototype.onMinimapClose = function(callback) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	this.minimap_close_callbacks.push(callback);
    }
    Oncoprint.prototype.moveTrack = function(target_track, new_previous_track) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	this.model.moveTrack(target_track, new_previous_track);
	this.cell_view.moveTrack(this.model);
	this.label_view.moveTrack(this.model);
	this.track_options_view.moveTrack(this.model);
	this.track_info_view.moveTrack(this.model);
	this.minimap_view.moveTrack(this.model, this.cell_view);
	
	if (this.keep_sorted && this.model.isSortAffected([target_track, new_previous_track], "track")) {
	    this.sort();
	}
	
	resizeAndOrganizeAfterTimeout(this);
    }
    Oncoprint.prototype.setTrackGroupOrder = function(index, track_order, dont_sort) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	this.model.setTrackGroupOrder(index, track_order);
	this.cell_view.setTrackGroupOrder(this.model);
	this.label_view.setTrackGroupOrder(this.model);
	this.track_options_view.setTrackGroupOrder(this.model);
	this.track_info_view.setTrackGroupOrder(this.model);
	
	if (!dont_sort && this.keep_sorted && this.model.isSortAffected(index, "group")) {
	    this.sort();
	}
	
	resizeAndOrganizeAfterTimeout(this);
    }
	Oncoprint.prototype.setTrackGroupLegendOrder = function(group_order) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
    	this.model.setTrackGroupLegendOrder(group_order);
    	this.legend_view.setTrackGroupLegendOrder(this.model);

    	resizeAndOrganizeAfterTimeout(this);
	}
    
    Oncoprint.prototype.keepSorted = function(keep_sorted) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	this.keep_sorted = (typeof keep_sorted === 'undefined' ? true : keep_sorted);
	if (this.keep_sorted) {
	    this.sort();
	}
    }
    
    Oncoprint.prototype.addTracks = function (params_list) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	// Update model
	var track_ids = [];
	params_list = params_list.map(function (o) {
	    o.track_id = nextTrackId();
	    o.rule_set = OncoprintRuleSet(o.rule_set_params);
	    track_ids.push(o.track_id);
	    return o;
	});
	
	this.model.addTracks(params_list);
	// Update views
	this.cell_view.addTracks(this.model, track_ids);
	this.label_view.addTracks(this.model, track_ids);
	this.track_options_view.addTracks(this.model);
	this.track_info_view.addTracks(this.model);
	this.legend_view.addTracks(this.model);
	this.minimap_view.addTracks(this.model, this.cell_view);
	
	if (this.keep_sorted && this.model.isSortAffected(track_ids, "track")) {
	    this.sort();
	}
	resizeAndOrganizeAfterTimeout(this);
	return track_ids;
    }

    Oncoprint.prototype.removeTrack = function (track_id) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	// Update model
	this.model.removeTrack(track_id);
	// Update views
	this.cell_view.removeTrack(this.model, track_id);
	this.label_view.removeTrack(this.model, track_id);
	this.track_options_view.removeTrack(this.model, track_id);
	this.track_info_view.removeTrack(this.model);
	this.legend_view.removeTrack(this.model);
	this.minimap_view.removeTrack(this.model, this.cell_view);
	
	if (this.keep_sorted && this.model.isSortAffected(track_id, "track")) {
	    this.sort();
	}
	resizeAndOrganizeAfterTimeout(this);
    }
    
    Oncoprint.prototype.removeTracks = function(track_ids) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	this.keepSorted(false);
	this.suppressRendering();
	for (var i=0; i<track_ids.length; i++) {
	    this.removeTrack(track_ids[i]);
	}
	this.keepSorted(true);
	this.releaseRendering();
    }
    
    Oncoprint.prototype.getTracks = function() {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	return this.model.getTracks().slice();
    }
    
    Oncoprint.prototype.removeAllTracks = function() {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	var track_ids = this.model.getTracks();
	this.removeTracks(track_ids);
    }

    Oncoprint.prototype.removeExpansionTracksFor = function (track_id) {
	// remove all expansion tracks for this track
	this.removeTracks(this.model.track_expansion_tracks[track_id].slice());
    }

    Oncoprint.prototype.disableTrackExpansion = function (track_id) {
	this.model.disableTrackExpansion(track_id);
    }

    Oncoprint.prototype.enableTrackExpansion = function (track_id) {
	this.model.enableTrackExpansion(track_id);
    }

    Oncoprint.prototype.removeAllExpansionTracksInGroup = function (index) {
	var tracks_in_group = this.model.getTrackGroups()[index],
	    expanded_tracks = [],
	    i;
	for (i = 0; i < tracks_in_group.length ; i++) {
	    if (this.model.isTrackExpanded(tracks_in_group[i])) {
		expanded_tracks.push(tracks_in_group[i]);
	    }
	}
	this.suppressRendering();
	for (i = 0; i < expanded_tracks.length; i++) {
	    // assume that the expanded tracks are not themselves removed here
	    this.removeExpansionTracksFor(expanded_tracks[i]);
	}
	this.releaseRendering();
    }

    Oncoprint.prototype.setHorzZoomToFit = function(ids) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	this.keep_horz_zoomed_to_fit = true;
	this.updateHorzZoomToFitIds(ids);
	updateHorzZoomToFit(this);
    }
    Oncoprint.prototype.updateHorzZoomToFitIds = function(ids) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	this.keep_horz_zoomed_to_fit_ids = ids.slice();
	if (this.keep_horz_zoomed_to_fit) {
	    updateHorzZoomToFit(this);
	}
    }
    var updateHorzZoomToFit = function(oncoprint) {
	oncoprint.setHorzZoom(getHorzZoomToFit(oncoprint, oncoprint.keep_horz_zoomed_to_fit_ids), true);
    };
    var getHorzZoomToFit = function(oncoprint, ids) {
	ids = ids || [];
	return oncoprint.model.getHorzZoomToFit(oncoprint.cell_view.visible_area_width, ids);
    }
    var executeHorzZoomCallbacks = function(oncoprint) {
	for (var i=0; i<oncoprint.horz_zoom_callbacks.length; i++) {
	    oncoprint.horz_zoom_callbacks[i](oncoprint.model.getHorzZoom());
	}
    };
    
    var executeMinimapCloseCallbacks = function(oncoprint) {
	for (var i=0; i<oncoprint.minimap_close_callbacks.length; i++) {
	    oncoprint.minimap_close_callbacks[i]();
	}
    };
    
    Oncoprint.prototype.getHorzZoom = function () {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	return this.model.getHorzZoom();
    }
    

    Oncoprint.prototype.setHorzZoom = function (z, still_keep_horz_zoomed_to_fit) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	this.keep_horz_zoomed_to_fit = this.keep_horz_zoomed_to_fit && still_keep_horz_zoomed_to_fit
	// Update model
	this.model.setHorzZoom(z);
	// Update views
	this.cell_view.setHorzZoom(this.model);
	this.minimap_view.setHorzZoom(this.model, this.cell_view);

	executeHorzZoomCallbacks(this);
	return this.model.getHorzZoom();
    }
    
    Oncoprint.prototype.getVertZoom = function () {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	return this.model.getVertZoom();
    }

    Oncoprint.prototype.setVertZoom = function (z) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	// Update model
	this.model.setVertZoom(z);
	// Update views
	this.cell_view.setVertZoom(this.model, z);
	this.label_view.setVertZoom(this.model, z);
	this.track_info_view.setVertZoom(this.model);
	this.track_options_view.setVertZoom(this.model);
	this.minimap_view.setVertZoom(this.model, this.cell_view);
	
	resizeAndOrganizeAfterTimeout(this);
	return this.model.getVertZoom();
    }
    
    var doSetScroll = function(oncoprint, scroll_left, scroll_top) {
	// Update model
	scroll_left = Math.min(scroll_left, maxOncoprintScrollLeft(oncoprint));
	scroll_top = Math.min(scroll_top, maxOncoprintScrollTop(oncoprint));
	oncoprint.model.setScroll(scroll_left, scroll_top);
	// Update views
	
	oncoprint.cell_view.setScroll(oncoprint.model);
	oncoprint.label_view.setScroll(oncoprint.model);
	oncoprint.track_info_view.setScroll(oncoprint.model);
	oncoprint.track_options_view.setScroll(oncoprint.model);
	oncoprint.minimap_view.setScroll(oncoprint.model, oncoprint.cell_view);
    };
 
    var setDummyScrollDivScroll = function(oncoprint) {
	var scroll_left = oncoprint.model.getHorzScroll();
	var scroll_top = oncoprint.model.getVertScroll();
	
	var maximum_scroll_left = maxOncoprintScrollLeft(oncoprint);
	var maximum_scroll_top = maxOncoprintScrollTop(oncoprint);
	var onc_scroll_left_prop = maximum_scroll_left > 0 ? scroll_left/maximum_scroll_left : 0;
	var onc_scroll_top_prop = maximum_scroll_top > 0 ? scroll_top/maximum_scroll_top : 0;
	onc_scroll_left_prop = clamp(onc_scroll_left_prop, 0, 1);
	onc_scroll_top_prop = clamp(onc_scroll_top_prop, 0, 1);
	
	var maximum_dummy_scroll_div_scroll = maxDummyScrollDivScroll(oncoprint);
	var maximum_div_scroll_left = maximum_dummy_scroll_div_scroll.left;
	var maximum_div_scroll_top = maximum_dummy_scroll_div_scroll.top;
	
	oncoprint.target_dummy_scroll_left = Math.round(onc_scroll_left_prop * maximum_div_scroll_left);
	oncoprint.target_dummy_scroll_top = Math.round(onc_scroll_top_prop * maximum_div_scroll_top);
	oncoprint.$dummy_scroll_div.scrollLeft(oncoprint.target_dummy_scroll_left);
	oncoprint.$dummy_scroll_div.scrollTop(oncoprint.target_dummy_scroll_top);
    };
    
    Oncoprint.prototype.setScroll = function(scroll_left, scroll_top) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	doSetScroll(this, scroll_left, scroll_top);
	setDummyScrollDivScroll(this);
    }
    
    Oncoprint.prototype.setZoom = function(zoom_x, zoom_y) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	// Update model
	this.model.setZoom(zoom_x, zoom_y);
	// Update views
	this.cell_view.setZoom(this.model);
	this.label_view.setZoom(this.model);
	this.track_info_view.setZoom(this.model);
	this.track_options_view.setZoom(this.model);
	this.minimap_view.setZoom(this.model, this.cell_view);
    }
    
    Oncoprint.prototype.setHorzScroll = function(s) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	// Update model
	this.model.setHorzScroll(Math.min(s, maxOncoprintScrollLeft(this)));
	// Update views
	this.cell_view.setHorzScroll(this.model);
	this.label_view.setHorzScroll(this.model);
	this.track_info_view.setHorzScroll(this.model);
	this.track_options_view.setHorzScroll(this.model);
	this.minimap_view.setHorzScroll(this.model, this.cell_view);
	// Update dummy scroll div
	setDummyScrollDivScroll(this);
	
	return this.model.getHorzScroll();
    }
    Oncoprint.prototype.setVertScroll = function(s) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	// Update model
	this.model.setVertScroll(Math.min(s, maxOncoprintScrollTop(this)));
	// Update views
	this.cell_view.setVertScroll(this.model);
	this.label_view.setVertScroll(this.model);
	this.track_info_view.setVertScroll(this.model);
	this.track_options_view.setVertScroll(this.model);
	this.minimap_view.setVertScroll(this.model, this.cell_view);
	// Update dummy scroll div
	setDummyScrollDivScroll(this);
	
	return this.model.getVertScroll();
    }
    Oncoprint.prototype.setViewport = function(col, scroll_y_proportion, num_cols, zoom_y) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	// Zoom
	var zoom_x = this.model.getHorzZoomToFitNumCols(this.cell_view.getWidth(), num_cols);
	this.setZoom(zoom_x, zoom_y);
	// Scroll
	var scroll_left = Math.min(col * (this.model.getCellWidth() + this.model.getCellPadding()), maxOncoprintScrollLeft(this));
	var scroll_top = Math.min(scroll_y_proportion*this.model.getOncoprintHeight(), maxOncoprintScrollTop(this));
	this.setScroll(scroll_left, scroll_top);
	
	executeHorzZoomCallbacks(this);
    }

    Oncoprint.prototype.getTrackData = function (track_id) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	return this.model.getTrackData(track_id);
    }
    
    Oncoprint.prototype.getTrackDataIdKey = function(track_id) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	return this.model.getTrackDataIdKey(track_id);
    }
    
    /**
     * Sets the data for an Oncoprint track.
     *
     * @param track_id - the ID that identifies the track
     * @param {Object[]} data - the list of data for the cells
     * @param {string} data_id_key - name of the property of the
     * data objects to use as the (column) key
     */
    Oncoprint.prototype.setTrackData = function (track_id, data, data_id_key) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	this.model.setTrackData(track_id, data, data_id_key);
	this.cell_view.setTrackData(this.model, track_id);
	this.legend_view.setTrackData(this.model);
	this.minimap_view.setTrackData(this.model, this.cell_view);
	
	if (this.keep_sorted && this.model.isSortAffected(track_id, "track")) {
	    this.sort();
	}
	resizeAndOrganizeAfterTimeout(this);
    }

    Oncoprint.prototype.setTrackImportantIds = function(track_id, ids) {
    	if(this.webgl_unavailable || this.destroyed) {
    		return;
		}
		this.model.setTrackImportantIds(track_id, ids);
    	this.cell_view.setTrackImportantIds(this.model, track_id);
    	this.legend_view.setTrackImportantIds(this.model);
    	resizeAndOrganizeAfterTimeout(this);
	}
    
    Oncoprint.prototype.setTrackGroupSortPriority = function(priority) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	this.model.setTrackGroupSortPriority(priority);
	this.cell_view.setTrackGroupSortPriority(this.model);
	
	if (this.keep_sorted) {
	    this.sort();
	}
	resizeAndOrganizeAfterTimeout(this);
    }

    Oncoprint.prototype.setTrackSortDirection = function(track_id, dir) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	if (this.model.isTrackSortDirectionChangeable(track_id)) {
	    this.model.setTrackSortDirection(track_id, dir);
	    
	    if (this.keep_sorted && this.model.isSortAffected(track_id, "track")) {
		this.sort();
	    }
	}
	return this.model.getTrackSortDirection(track_id);
    }
    
    Oncoprint.prototype.setTrackSortComparator = function(track_id, sortCmpFn) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	this.model.setTrackSortComparator(track_id, sortCmpFn);
	if (this.keep_sorted && this.model.isSortAffected(track_id, "track")) {
	    this.sort();
	}
    }
    
    Oncoprint.prototype.getTrackSortDirection = function(track_id) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	return this.model.getTrackSortDirection(track_id);
    }
    
    Oncoprint.prototype.setTrackInfo = function(track_id, msg) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	this.model.setTrackInfo(track_id, msg);
	this.track_info_view.setTrackInfo(this.model);
    }
    
    Oncoprint.prototype.setTrackTooltipFn = function(track_id, tooltipFn) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	this.model.setTrackTooltipFn(track_id, tooltipFn);
    }

    Oncoprint.prototype.setShowTrackSublabels = function(show) {
    	this.model.setShowTrackSublabels(show);
    	this.label_view.setShowTrackSublabels(this.model);

        resizeAndOrganizeAfterTimeout(this);
	}
    
    Oncoprint.prototype.sort = function() {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
    	var self = this;
	this.model.sort().then(function(x) {;
		self.cell_view.sort(self.model);
		self.minimap_view.sort(self.model, self.cell_view);

		if (x) {
			self.setTrackGroupOrder(
				x.track_group_index,
				x.track_id_order,
				true
			);
		}
	});
    }
    
    Oncoprint.prototype.shareRuleSet = function(source_track_id, target_track_id) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	this.model.shareRuleSet(source_track_id, target_track_id);
	this.cell_view.shareRuleSet(this.model, target_track_id);
	this.legend_view.shareRuleSet(this.model);
	this.minimap_view.shareRuleSet(this.model, this.cell_view);
    }
    
    Oncoprint.prototype.setRuleSet = function(track_id, rule_set_params) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	this.model.setRuleSet(track_id, OncoprintRuleSet(rule_set_params));
	this.cell_view.setRuleSet(this.model, track_id);
	this.legend_view.setRuleSet(this.model);
	this.minimap_view.setRuleSet(this.model, this.cell_view);
	resizeAndOrganizeAfterTimeout(this);
    }
    
    Oncoprint.prototype.setSortConfig = function(params) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	this.model.setSortConfig(params);
	this.cell_view.setSortConfig(this.model);
	this.track_options_view.setSortConfig(this.model);
	
	if (this.keep_sorted) {
	    this.sort();
	}
    }
    Oncoprint.prototype.setIdOrder = function(ids) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	// Update model
	this.model.setIdOrder(ids);
	// Update views
	this.cell_view.setIdOrder(this.model, ids);
	this.minimap_view.setIdOrder(this.model, this.cell_view);
	
	if (this.keep_sorted) {
	    this.sort();
	}
    }
    
    Oncoprint.prototype.disableInteraction = function() {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	//this.label_view.disableInteraction();
	//this.cell_view.disableInteraction();
	this.track_options_view.disableInteraction();
	//this.track_info_view.disableInteraction();
	//this.legend_view.disableInteraction();
    }
    Oncoprint.prototype.enableInteraction = function() {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	//this.label_view.enableInteraction();
	//this.cell_view.enableInteraction();
	this.track_options_view.enableInteraction();
	//this.track_info_view.enableInteraction();
	//this.legend_view.enableInteraction();
    }
    Oncoprint.prototype.suppressRendering = function() {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	this.model.rendering_suppressed_depth += 1;
	this.label_view.suppressRendering();
	this.cell_view.suppressRendering();
	this.track_options_view.suppressRendering();
	this.track_info_view.suppressRendering();
	this.legend_view.suppressRendering();
	this.minimap_view.suppressRendering();
    }
    
    Oncoprint.prototype.releaseRendering = function(onComplete) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	this.model.rendering_suppressed_depth -= 1;
	this.model.rendering_suppressed_depth = Math.max(0, this.model.rendering_suppressed_depth);
	if (this.model.rendering_suppressed_depth === 0) {
	    this.label_view.releaseRendering(this.model);
	    this.cell_view.releaseRendering(this.model);
	    this.track_options_view.releaseRendering(this.model);
	    this.track_info_view.releaseRendering(this.model);
	    this.legend_view.releaseRendering(this.model);
	    this.minimap_view.releaseRendering(this.model, this.cell_view);
	    resizeAndOrganizeAfterTimeout(this, onComplete);
	}
    }

    Oncoprint.prototype.triggerPendingResizeAndOrganize = function(onComplete) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
    	if (this.pending_resize_and_organize) {
    		this.pending_resize_and_organize = false;
    		resizeAndOrganizeAfterTimeout(this, onComplete);
		}
	}
    
    Oncoprint.prototype.hideIds = function(to_hide, show_others) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	this.model.hideIds(to_hide, show_others);
	this.cell_view.hideIds(this.model);
	this.minimap_view.hideIds(this.model, this.cell_view);
    }
    
    Oncoprint.prototype.hideTrackLegends = function(track_ids) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	track_ids = [].concat(track_ids);
	this.model.hideTrackLegends(track_ids);
	this.legend_view.hideTrackLegends(this.model);
	setLegendTopAfterTimeout(this);
    }
    
    Oncoprint.prototype.showTrackLegends = function(track_ids) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	track_ids = [].concat(track_ids);
	this.model.showTrackLegends(track_ids);
	this.legend_view.showTrackLegends(this.model);
	setLegendTopAfterTimeout(this);
    }
    
    Oncoprint.prototype.setCellPaddingOn = function(cell_padding_on) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	this.model.setCellPaddingOn(cell_padding_on);
	this.cell_view.setCellPaddingOn(this.model);
    }

    Oncoprint.prototype.setTrackCustomOptions = function(track_id, options) {
	this.model.setTrackCustomOptions(track_id, options);
	this.track_options_view.setTrackCustomOptions(this.model);
	}

	Oncoprint.prototype.setTrackInfoTooltip = function(track_id, $tooltip_elt) {
    	this.model.setTrackInfoTooltip(track_id, $tooltip_elt);
	}
    
    Oncoprint.prototype.toSVG = function(with_background) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	// Returns svg DOM element
	var root = svgfactory.svg(10, 10);
	this.$ctr.append(root);
	var everything_group = svgfactory.group(0,0);
	root.appendChild(everything_group);
	
	var bgrect = svgfactory.bgrect(10,10,'#ffffff');
	
	if (with_background) {
	    everything_group.appendChild(bgrect);
	}
	
	var label_view_group = this.label_view.toSVGGroup(this.model, true, 0, 0);
	everything_group.appendChild(label_view_group);
	var track_info_group_x = label_view_group.getBBox().width + 30;
	var track_info_group = this.track_info_view.toSVGGroup(this.model, track_info_group_x, 0);
	everything_group.appendChild(track_info_group);
	var cell_view_group_x = track_info_group_x + track_info_group.getBBox().width + 10;
	everything_group.appendChild(this.cell_view.toSVGGroup(this.model, cell_view_group_x, 0));
	everything_group.appendChild(this.legend_view.toSVGGroup(this.model, 0, label_view_group.getBBox().y + label_view_group.getBBox().height+20));
	
	var everything_box = everything_group.getBBox();
	var everything_width = everything_box.x + everything_box.width;
	var everything_height = everything_box.y + everything_box.height;
	root.setAttribute('width', everything_width);
	root.setAttribute('height', everything_height);
	
	if (with_background) {
	    bgrect.setAttribute('width', everything_width);
	    bgrect.setAttribute('height', everything_height);
	}
	root.parentNode.removeChild(root);
	
	return root;
    }
    
    Oncoprint.prototype.toCanvas = function(callback, resolution) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	// Returns data url, requires IE >= 11
	
	var MAX_CANVAS_SIDE = 8192;
	var svg = this.toSVG(true);
	svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
	var width = parseInt(svg.getAttribute('width'), 10);
	var height = parseInt(svg.getAttribute('height'), 10);
	var canvas = document.createElement('canvas');
	
	resolution = resolution || 1;
	var truncated = width*resolution > MAX_CANVAS_SIDE || height*resolution > MAX_CANVAS_SIDE;
	canvas.setAttribute('width', Math.min(MAX_CANVAS_SIDE, width*resolution));
	canvas.setAttribute('height', Math.min(MAX_CANVAS_SIDE, height*resolution));
	
	var container = document.createElement("div");
	container.appendChild(svg);
	var svg_data_str = container.innerHTML;
	var svg_data_uri = "data:image/svg+xml;base64,"+window.btoa(svg_data_str);
	
	var ctx = canvas.getContext('2d');
	ctx.setTransform(resolution,0,0,resolution,0,0);
	var img = new Image();
	
	img.onload = function() {
	    ctx.drawImage(img, 0, 0);
	    callback(canvas, truncated);
	};
	img.onerror = function() {
	    console.log("IMAGE LOAD ERROR");
	};
	
	img.src = svg_data_uri;
	return img;
    }

    Oncoprint.prototype.toDataUrl = function(callback) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
        this.toCanvas(function(canvas) {
            callback(canvas.toDataURL());
        }); 
    }
    
    Oncoprint.prototype.highlightTrack = function(track_id) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	this.label_view.highlightTrack(track_id, this.model);
    }
    
    Oncoprint.prototype.getIdOrder = function(all) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	return this.model.getIdOrder(all);
    }
    
    Oncoprint.prototype.setIdClipboardContents = function(array) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	this.id_clipboard = array.slice();
	for (var i=0; i<this.clipboard_change_callbacks.length; i++) {
	    this.clipboard_change_callbacks[i](array);
	}
    }
    Oncoprint.prototype.getIdClipboardContents = function() {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	return this.id_clipboard.slice();
    }
    Oncoprint.prototype.onClipboardChange = function(callback) {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
	this.clipboard_change_callbacks.push(callback);
    }

    Oncoprint.prototype.destroy = function() {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
    	this.cell_view.destroy();
    	this.track_options_view.destroy();
    	this.track_info_view.destroy();
        $(window).off("resize", this.onWindowResize);
        this.destroyed = true;
	}

	Oncoprint.prototype.clearMouseOverEffects = function() {
        if(this.webgl_unavailable || this.destroyed) {
            return;
        }
        this.cell_view.clearOverlay();
        this.label_view.highlightTrack(null, this.model);
	}

    
    return Oncoprint;
})();
module.exports = Oncoprint;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/*
 * Copyright (c) 2016 Memorial Sloan-Kettering Cancer Center.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS
 * FOR A PARTICULAR PURPOSE. The software and documentation provided hereunder
 * is on an "as is" basis, and Memorial Sloan-Kettering Cancer Center has no
 * obligations to provide maintenance, support, updates, enhancements or
 * modifications. In no event shall Memorial Sloan-Kettering Cancer Center be
 * liable to any party for direct, indirect, special, incidental or
 * consequential damages, including lost profits, arising out of the use of this
 * software and its documentation, even if Memorial Sloan-Kettering Cancer
 * Center has been advised of the possibility of such damage.
 */

/*
 * This file is part of cBioPortal.
 *
 * cBioPortal is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

module.exports = (function setPolyfills() {
    Math.log2 = Math.log2 || function(x) { return Math.log(x) / Math.LN2; };
})();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* jshint browserify: true, asi: true */
var binarysearch = __webpack_require__(4);
var hasElementsInInterval = __webpack_require__(15);
var CachedProperty = __webpack_require__(5);
var clustering = __webpack_require__(16);
var $ = __webpack_require__(0);
var BucketSort = __webpack_require__(19);
var doesCellIntersectPixel = __webpack_require__(6).doesCellIntersectPixel;

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


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/*
 * Copyright (c) 2016 Memorial Sloan-Kettering Cancer Center.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS
 * FOR A PARTICULAR PURPOSE. The software and documentation provided hereunder
 * is on an "as is" basis, and Memorial Sloan-Kettering Cancer Center has no
 * obligations to provide maintenance, support, updates, enhancements or
 * modifications. In no event shall Memorial Sloan-Kettering Cancer Center be
 * liable to any party for direct, indirect, special, incidental or
 * consequential damages, including lost profits, arising out of the use of this
 * software and its documentation, even if Memorial Sloan-Kettering Cancer
 * Center has been advised of the possibility of such damage.
 */

/*
 * This file is part of cBioPortal.
 *
 * cBioPortal is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


module.exports = function(sorted_list, valueFn, lower_inc_val, upper_exc_val) {
    // in: sorted_list, a list sorted in increasing order of valueFn
    //     valueFn, a function that takes an element of sorted_list and returns a number
    //     lower_inc and upper_ex: define a half-open interval [lower_inc, upper_exc)
    // out: boolean, true iff there are any elements whose image under valueFn is in [lower_inc, upper_exc)
    
    var test_lower_inc = 0;
    var test_upper_exc = sorted_list.length;
    var middle, middle_val;
    var ret = false;
    while (true) {
	if (test_lower_inc >= test_upper_exc) {
	    break;
	}
	middle = Math.floor((test_lower_inc + test_upper_exc) / 2)
	middle_val = valueFn(sorted_list[middle]);
	if (middle_val >= upper_exc_val) {
	    test_upper_exc = middle;
	} else if (middle_val < lower_inc_val) {
	    test_lower_inc = middle + 1;
	} else {
	    // otherwise, the middle value is inside the interval, 
	    // so there's at least one value inside the interval
	    ret = true;
	    break;
	}
    }
    return ret;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var ClusteringWorker = __webpack_require__(17);

/**
 * Executes the clustering of casesAndEntitites in the requested
 * dimension (CASES or ENTITIES).
 *
 * @param casesAndEntitites: Object with sample(or patient)Id and map
 * of geneticEntity/value pairs. Example:
 *
 * var a =
 *  {
     *    "TCGA-AO-AA98-01":
     *    {
     *    	"TP53": 0.045,
     *    	"BRA1": -0.89
     *    }
     *   },
 *   ...
 *
 * @return a deferred which gets resolved with the clustering result
 *   when the clustering is done.
 */
var _hcluster = function(casesAndEntitites, dimension) {
    var worker = new ClusteringWorker();
    var message = new Object();
    var def = new $.Deferred();
    message.casesAndEntitites = casesAndEntitites;
    message.dimension = dimension;
    worker.postMessage(message);
    worker.onmessage = function(m) {
        def.resolve(m.data);
    }
    return def.promise();
}

/**
 * Use: cbio.stat.hclusterCases(a);

 * @return a deferred which gets resolved with the clustering result
 *   when the clustering is done.
 */
var hclusterColumns = function(casesAndEntitites) {
    return _hcluster(casesAndEntitites, "CASES");
}

/**
 * Use: hclusterGeneticEntities(a);
 *
 * @return a deferred which gets resolved with the clustering result
 *   when the clustering is done.
 */
var hclusterTracks = function(casesAndEntitites) {
    return _hcluster(casesAndEntitites, "ENTITIES");
}

module.exports = {
    hclusterColumns: hclusterColumns,
    hclusterTracks: hclusterTracks
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return __webpack_require__(18)("/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, {\n/******/ \t\t\t\tconfigurable: false,\n/******/ \t\t\t\tenumerable: true,\n/******/ \t\t\t\tget: getter\n/******/ \t\t\t});\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = 2);\n/******/ })\n/************************************************************************/\n/******/ ([\n/* 0 */\n/***/ (function(module, exports) {\n\nmodule.exports = {\n  euclidean: function(v1, v2) {\n      var total = 0;\n      for (var i = 0; i < v1.length; i++) {\n         total += Math.pow(v2[i] - v1[i], 2);      \n      }\n      return Math.sqrt(total);\n   },\n   manhattan: function(v1, v2) {\n     var total = 0;\n     for (var i = 0; i < v1.length ; i++) {\n        total += Math.abs(v2[i] - v1[i]);      \n     }\n     return total;\n   },\n   max: function(v1, v2) {\n     var max = 0;\n     for (var i = 0; i < v1.length; i++) {\n        max = Math.max(max , Math.abs(v2[i] - v1[i]));      \n     }\n     return max;\n   }\n};\n\n/***/ }),\n/* 1 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar distances = __webpack_require__(0);\n\nfunction KMeans(centroids) {\n   this.centroids = centroids || [];\n}\n\nKMeans.prototype.randomCentroids = function(points, k) {\n   var centroids = points.slice(0); // copy\n   centroids.sort(function() {\n      return (Math.round(Math.random()) - 0.5);\n   });\n   return centroids.slice(0, k);\n}\n\nKMeans.prototype.classify = function(point, distance) {\n   var min = Infinity,\n       index = 0;\n\n   distance = distance || \"euclidean\";\n   if (typeof distance == \"string\") {\n      distance = distances[distance];\n   }\n\n   for (var i = 0; i < this.centroids.length; i++) {\n      var dist = distance(point, this.centroids[i]);\n      if (dist < min) {\n         min = dist;\n         index = i;\n      }\n   }\n\n   return index;\n}\n\nKMeans.prototype.cluster = function(points, k, distance, snapshotPeriod, snapshotCb) {\n   k = k || Math.max(2, Math.ceil(Math.sqrt(points.length / 2)));\n\n   distance = distance || \"euclidean\";\n   if (typeof distance == \"string\") {\n      distance = distances[distance];\n   }\n\n   this.centroids = this.randomCentroids(points, k);\n\n   var assignment = new Array(points.length);\n   var clusters = new Array(k);\n\n   var iterations = 0;\n   var movement = true;\n   while (movement) {\n      // update point-to-centroid assignments\n      for (var i = 0; i < points.length; i++) {\n         assignment[i] = this.classify(points[i], distance);\n      }\n\n      // update location of each centroid\n      movement = false;\n      for (var j = 0; j < k; j++) {\n         var assigned = [];\n         for (var i = 0; i < assignment.length; i++) {\n            if (assignment[i] == j) {\n               assigned.push(points[i]);\n            }\n         }\n\n         if (!assigned.length) {\n            continue;\n         }\n\n         var centroid = this.centroids[j];\n         var newCentroid = new Array(centroid.length);\n\n         for (var g = 0; g < centroid.length; g++) {\n            var sum = 0;\n            for (var i = 0; i < assigned.length; i++) {\n               sum += assigned[i][g];\n            }\n            newCentroid[g] = sum / assigned.length;\n\n            if (newCentroid[g] != centroid[g]) {\n               movement = true;\n            }\n         }\n\n         this.centroids[j] = newCentroid;\n         clusters[j] = assigned;\n      }\n\n      if (snapshotCb && (iterations++ % snapshotPeriod == 0)) {\n         snapshotCb(clusters);\n      }\n   }\n\n   return clusters;\n}\n\nKMeans.prototype.toJSON = function() {\n   return JSON.stringify(this.centroids);\n}\n\nKMeans.prototype.fromJSON = function(json) {\n   this.centroids = JSON.parse(json);\n   return this;\n}\n\nmodule.exports = KMeans;\n\nmodule.exports.kmeans = function(vectors, k) {\n   return (new KMeans()).cluster(vectors, k);\n}\n\n/***/ }),\n/* 2 */\n/***/ (function(module, exports, __webpack_require__) {\n\n/*\n * Copyright (c) 2016 The Hyve B.V.\n * This code is licensed under the GNU Affero General Public License,\n * version 3, or (at your option) any later version.\n */\n\n/*\n * This file is part of cBioPortal.\n *\n * cBioPortal is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program.  If not, see <http://www.gnu.org/licenses/>.\n */\n\nvar clusterfck = __webpack_require__(3);\nvar jStat = __webpack_require__(5);\n\n/**\n * \"Routing\" logic for this worker, based on given message.\n *\n * @param m : message object with m.dimension (CASES or ENTITIES) and m.casesAndEntitites\n *      which is the input for the clustering method.\n */\nonmessage = function(m) {\n    console.log('Clustering worker received message');\n    var result = null;\n    if (m.data.dimension === \"CASES\") {\n        result = hclusterCases(m.data.casesAndEntitites);\n    } else if (m.data.dimension === \"ENTITIES\") {\n        result = hclusterGeneticEntities(m.data.casesAndEntitites);\n    } else {\n        throw new Error(\"Illegal argument given to clustering-worker.js for m.data.dimension: \" + m.data.dimension);\n    }\n    console.log('Posting clustering result back to main script');\n    postMessage(result);\n}\n\n/**\n * Returns false if any value is a valid number != 0.0,\n * and true otherwise.\n */\nvar isAllNaNs = function(values) {\n    for (var i = 0; i < values.length; i++) {\n        var val = values[i];\n        if (!isNaN(val) && val != null && val != 0.0 ) {\n            return false;\n        }\n    }\n    return true;\n}\n\n/**\n * Distance measure using 1-spearman's correlation. This function does expect that item1 and item2\n * are an item than contains a item.preProcessedValueList attribute which is the ranked version\n * of item.orderedValueList.\n *\n */\nvar preRankedSpearmanDist = function(item1, item2) {\n    //rules for NaN values:\n    if (item1.isAllNaNs && item2.isAllNaNs) {\n        //return distance 0\n        return 0;\n    }\n    else if (item1.isAllNaNs || item2.isAllNaNs) {\n        //return large distance:\n        return 3;\n    }\n    //take the arrays from the preProcessedValueList:\n    var ranks1 = item1.preProcessedValueList;\n    var ranks2 = item2.preProcessedValueList;\n    //calculate spearman's rank correlation coefficient, using pearson's distance\n    //for correlation of the ranks:\n    var r = jStat.corrcoeff(ranks1, ranks2);\n    if (isNaN(r)) {\n        //assuming the ranks1 and ranks2 lists do not contain NaN entries (and this code DOES assume all missing values have been imputed by a valid number),\n        //this specific scenario should not occur, unless all values are the same (and given the same rank). In this case, there is no variation, and\n        //correlation returns NaN. In theory this could happen on small number of entities being clustered. We give this a large distance:\n        console.log(\"NaN in correlation calculation\");\n        r = -2;\n    }\n    return 1 - r;\n}\n\n/**\n * Prepares the data for using spearman method in the distance function.\n * It will pre-calculate ranks and store this in inputItems[x].preProcessedValueList.\n * This pre-calculation significantly improves the performance of the clustering step itself.\n */\nvar _prepareForDistanceFunction = function(inputItems) {\n    //pre-calculate ranks, and\n    // split up into allNaN and notAllNaN\n    var allNaN = [];\n    var notAllNaN = [];\n    for (var i = 0; i < inputItems.length; i++) {\n        var inputItem = inputItems[i];\n        //check if all NaNs:\n        inputItem.isAllNaNs = isAllNaNs(inputItem.orderedValueList);\n        if (inputItem.isAllNaNs) {\n            allNaN.push(inputItem);\n            continue;\n        } else {\n            notAllNaN.push(inputItem);\n        }\n        //rank using fractional ranking:\n        var ranks = jStat.rank(inputItem.orderedValueList);\n        //store for later use:\n        inputItem.preProcessedValueList = ranks;\n    }\n    return {\n        notAllNaN: notAllNaN,\n        allNaN: allNaN\n    };\n}\n\n/**\n * @param casesAndEntitites: Object with sample(or patient)Id and map\n * of geneticEntity/value pairs. Example:\n *\n * var a =\n *  {\n *    \"TCGA-AO-AA98-01\":\n *    {\n *    \t\"TP53\": 0.045,\n *    \t\"BRA1\": -0.89\n *    }\n *   },\n *   ...\n *\n *   @return the reordered list of sample(or patient) ids, after clustering.\n */\nvar hclusterCases = function(casesAndEntitites) {\n    var refEntityList = null;\n    var inputItems = [];\n    //add orderedValueList to all items, so the values are\n    //compared in same order:\n    for (var caseId in casesAndEntitites) {\n        if (casesAndEntitites.hasOwnProperty(caseId)) {\n            var caseObj = casesAndEntitites[caseId];\n            var inputItem = new Object();\n            inputItem.caseId = caseId;\n            inputItem.orderedValueList = [];\n            if (refEntityList == null) {\n                refEntityList = getRefList(caseObj);\n            }\n            for (var j = 0; j < refEntityList.length; j++) {\n                var entityId = refEntityList[j];\n                var value = caseObj[entityId];\n                inputItem.orderedValueList.push(value);\n            }\n            inputItems.push(inputItem);\n        }\n    }\n    if (refEntityList.length == 1) {\n        //this is a special case, where the \"clustering\" becomes a simple sorting in 1 dimension:\n        //so, just sort and return inputItems:\n        inputItems.sort(function (i1, i2) {\n            var val1 = i1.orderedValueList[0];\n            var val2 = i2.orderedValueList[0];\n            //ensure NaNs are moved out (NaN or null which are seen here as equivalents to NA (not available)) to the end of the list:\n            val1 = (val1 == null || isNaN(val1) ? Number.MAX_VALUE : val1);\n            val2 = (val2 == null || isNaN(val2) ? Number.MAX_VALUE : val2);\n            if (val1 > val2) {\n                return 1;\n            }\n            else if (val1 < val2) {\n                return -1;\n            }\n            return 0;\n        });\n        return inputItems;\n    }\n    //else, normal clustering:\n    inputItems = _prepareForDistanceFunction(inputItems);\n    var clusters = clusterfck.hcluster(inputItems.notAllNaN, preRankedSpearmanDist);\n    return clusters.clusters(1)[0].concat(inputItems.allNaN); // add all nan elements to the end post-sorting\n}\n\nvar getRefList = function(caseItem) {\n    var result = [];\n    for (var entityId in caseItem) {\n        if (caseItem.hasOwnProperty(entityId)) {\n            result.push(entityId);\n        }\n    }\n    return result;\n}\n\n/**\n * @param casesAndEntitites: same as used in hclusterCases above.\n *\n * @return the reordered list of entity ids, after clustering.\n */\nvar hclusterGeneticEntities = function(casesAndEntitites) {\n    var refEntityList = null;\n    var inputItems = [];\n    var refCaseIdList = [];\n    //add orderedValueList to all items, so the values are\n    //compared in same order:\n    for (var caseId in casesAndEntitites) {\n        if (casesAndEntitites.hasOwnProperty(caseId)) {\n            var caseObj = casesAndEntitites[caseId];\n            if (refEntityList == null) {\n                refEntityList = getRefList(caseObj);\n            }\n            //refCaseIdList:\n            refCaseIdList.push(caseId);\n        }\n    }\n    //iterate over genes, and get sample values:\n    for (var i = 0; i < refEntityList.length; i++) {\n        var entityId = refEntityList[i];\n        var inputItem = new Object();\n        inputItem.entityId = entityId;\n        inputItem.orderedValueList = [];\n        for (var j = 0; j < refCaseIdList.length; j++) {\n            var caseId = refCaseIdList[j];\n            var caseObj = casesAndEntitites[caseId];\n            var value = caseObj[entityId];\n            inputItem.orderedValueList.push(value);\n        }\n        inputItems.push(inputItem);\n    }\n    inputItems = _prepareForDistanceFunction(inputItems);\n    var clusters = clusterfck.hcluster(inputItems.notAllNaN, preRankedSpearmanDist);\n    return clusters.clusters(1)[0].concat(inputItems.allNaN); // add all nan elements to the end post-sorting\n}\n\n\n/***/ }),\n/* 3 */\n/***/ (function(module, exports, __webpack_require__) {\n\nmodule.exports = {\n   hcluster: __webpack_require__(4),\n   Kmeans: __webpack_require__(1),\n   kmeans: __webpack_require__(1).kmeans\n};\n\n/***/ }),\n/* 4 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar distances = __webpack_require__(0);\n\nvar HierarchicalClustering = function(distance, linkage, threshold) {\n   this.distance = distance;\n   this.linkage = linkage;\n   this.threshold = threshold == undefined ? Infinity : threshold;\n}\n\nHierarchicalClustering.prototype = {\n   tree: function(items, snapshotPeriod, snapshotCb) {\n      this.tree = [];\n      this.dists = [];  // distances between each pair of clusters\n      this.mins = []; // closest cluster for each cluster\n      this.index = []; // keep a hash of all clusters by key\n\n      for (var i = 0; i < items.length; i++) {\n         var cluster = {\n            value: items[i],\n            key: i,\n            index: i,\n            size: 1\n         };\n         this.tree[i] = cluster;\n         this.index[i] = cluster;\n         this.dists[i] = [];\n         this.mins[i] = 0;\n      }\n\n      for (var i = 0; i < this.tree.length; i++) {\n         for (var j = 0; j <= i; j++) {\n            var dist = (i == j) ? Infinity :\n               this.distance(this.tree[i].value, this.tree[j].value);\n            this.dists[i][j] = dist;\n            this.dists[j][i] = dist;\n\n            if (dist < this.dists[i][this.mins[i]]) {\n               this.mins[i] = j;\n            }\n         }\n      }\n\n      var merged = this.mergeClosest();\n      var i = 0;\n      while (merged) {\n        if (snapshotCb && (i++ % snapshotPeriod) == 0) {\n           snapshotCb(this.tree);\n        }\n        merged = this.mergeClosest();\n      }\n\n      this.tree.forEach(function(cluster) {\n        // clean up metadata used for clustering\n        delete cluster.key;\n        delete cluster.index;\n      });\n\n      return this.tree;\n   },\n\n   mergeClosest: function() {\n      // find two closest clusters from cached mins\n      var minKey = 0, min = Infinity;\n      for (var i = 0; i < this.tree.length; i++) {\n         var key = this.tree[i].key,\n             dist = this.dists[key][this.mins[key]];\n         if (dist < min) {\n            minKey = key;\n            min = dist;\n         }\n      }\n      if (min >= this.threshold) {\n         return false;\n      }\n\n      var c1 = this.index[minKey],\n          c2 = this.index[this.mins[minKey]];\n\n      // merge two closest clusters\n      var merged = {\n         dist: min,\n         left: c1,\n         right: c2,\n         key: c1.key,\n         size: c1.size + c2.size\n      };\n\n      this.tree[c1.index] = merged;\n      this.tree.splice(c2.index, 1);\n      this.index[c1.key] = merged;\n\n      // update distances with new merged cluster\n      for (var i = 0; i < this.tree.length; i++) {\n         var ci = this.tree[i];\n         var dist;\n         if (c1.key == ci.key) {\n            dist = Infinity;\n         }\n         else if (this.linkage == \"single\") {\n            dist = this.dists[c1.key][ci.key];\n            if (this.dists[c1.key][ci.key] > this.dists[c2.key][ci.key]) {\n               dist = this.dists[c2.key][ci.key];\n            }\n         }\n         else if (this.linkage == \"complete\") {\n            dist = this.dists[c1.key][ci.key];\n            if (this.dists[c1.key][ci.key] < this.dists[c2.key][ci.key]) {\n               dist = this.dists[c2.key][ci.key];\n            }\n         }\n         else if (this.linkage == \"average\") {\n            dist = (this.dists[c1.key][ci.key] * c1.size\n                   + this.dists[c2.key][ci.key] * c2.size) / (c1.size + c2.size);\n         }\n         else {\n            dist = this.distance(ci.value, c1.value);\n         }\n\n         this.dists[c1.key][ci.key] = this.dists[ci.key][c1.key] = dist;\n      }\n\n\n      // update cached mins\n      for (var i = 0; i < this.tree.length; i++) {\n         var key1 = this.tree[i].key;\n         if (this.mins[key1] == c1.key || this.mins[key1] == c2.key) {\n            var min = key1;\n            for (var j = 0; j < this.tree.length; j++) {\n               var key2 = this.tree[j].key;\n               if (this.dists[key1][key2] < this.dists[key1][min]) {\n                  min = key2;\n               }\n            }\n            this.mins[key1] = min;\n         }\n         this.tree[i].index = i;\n      }\n\n      // clean up metadata used for clustering\n      delete c1.key; delete c2.key;\n      delete c1.index; delete c2.index;\n\n      return true;\n   },\n   clusters: function(num){\n     //  Return all nodes if num is invalid\n     if(num > this.tree.size || num < 1) num = this.tree.size\n\n     var result = [],\n         subtrees = [this.tree];\n\n    //  Get a list of root nodes for num different clusters\n     while(num > 1){\n       var furthest = _findNextFurthest(subtrees);\n       subtrees.splice(subtrees.indexOf(furthest), 1);\n       subtrees.push(furthest.left, furthest.right);\n       num--;\n     }\n\n     //  Transform the subtrees node list into a list of the subtrees leaf values\n     subtrees.forEach(function(tree) {\n       result.push(_getValues(tree));\n     })\n\n     //  Split the next furthest distance root node\n     function _findNextFurthest(subtrees) {\n       var max = -1,\n           furthest;\n       subtrees.forEach(function(tree){\n         if(tree.dist > max) {\n           max = tree.dist;\n           furthest = tree;\n         }\n       });\n       return furthest;\n     }\n\n     //  Traverse the tree and yield a list of the leaf node values\n     function _getValues(tree) {\n       if(tree.size === 1) return [tree.value];\n       return _getValues(tree.left).concat(_getValues(tree.right));\n     }\n\n     return result;\n   }\n}\n\nvar hcluster = function(items, distance, linkage, threshold, snapshot, snapshotCallback) {\n   distance = distance || \"euclidean\";\n   linkage = linkage || \"average\";\n\n   if (typeof distance == \"string\") {\n     distance = distances[distance];\n   }\n  var hc = new HierarchicalClustering(distance, linkage, threshold),\n      tree = hc.tree(items, snapshot, snapshotCallback);\n\n   return {\n     tree: (threshold === undefined ? tree[0] : tree),\n     clusters: hc.clusters\n   };\n}\n\nmodule.exports = hcluster;\n\n\n/***/ }),\n/* 5 */\n/***/ (function(module, exports, __webpack_require__) {\n\n(function (window, factory) {\n    if (true) {\n        module.exports = factory();\n    } else if (typeof define === 'function' && define.amd) {\n        define(factory);\n    } else {\n        window.jStat = factory();\n    }\n})(this, function () {\nvar jStat = (function(Math, undefined) {\n\n// For quick reference.\nvar concat = Array.prototype.concat;\nvar slice = Array.prototype.slice;\nvar toString = Object.prototype.toString;\n\n// Calculate correction for IEEE error\n// TODO: This calculation can be improved.\nfunction calcRdx(n, m) {\n  var val = n > m ? n : m;\n  return Math.pow(10,\n                  17 - ~~(Math.log(((val > 0) ? val : -val)) * Math.LOG10E));\n}\n\n\nvar isArray = Array.isArray || function isArray(arg) {\n  return toString.call(arg) === '[object Array]';\n};\n\n\nfunction isFunction(arg) {\n  return toString.call(arg) === '[object Function]';\n}\n\n\nfunction isNumber(arg) {\n  return typeof arg === 'number' && arg === arg;\n}\n\n\n// Converts the jStat matrix to vector.\nfunction toVector(arr) {\n  return concat.apply([], arr);\n}\n\n\n// The one and only jStat constructor.\nfunction jStat() {\n  return new jStat._init(arguments);\n}\n\n\n// TODO: Remove after all references in src files have been removed.\njStat.fn = jStat.prototype;\n\n\n// By separating the initializer from the constructor it's easier to handle\n// always returning a new instance whether \"new\" was used or not.\njStat._init = function _init(args) {\n  var i;\n\n  // If first argument is an array, must be vector or matrix.\n  if (isArray(args[0])) {\n    // Check if matrix.\n    if (isArray(args[0][0])) {\n      // See if a mapping function was also passed.\n      if (isFunction(args[1]))\n        args[0] = jStat.map(args[0], args[1]);\n      // Iterate over each is faster than this.push.apply(this, args[0].\n      for (var i = 0; i < args[0].length; i++)\n        this[i] = args[0][i];\n      this.length = args[0].length;\n\n    // Otherwise must be a vector.\n    } else {\n      this[0] = isFunction(args[1]) ? jStat.map(args[0], args[1]) : args[0];\n      this.length = 1;\n    }\n\n  // If first argument is number, assume creation of sequence.\n  } else if (isNumber(args[0])) {\n    this[0] = jStat.seq.apply(null, args);\n    this.length = 1;\n\n  // Handle case when jStat object is passed to jStat.\n  } else if (args[0] instanceof jStat) {\n    // Duplicate the object and pass it back.\n    return jStat(args[0].toArray());\n\n  // Unexpected argument value, return empty jStat object.\n  // TODO: This is strange behavior. Shouldn't this throw or some such to let\n  // the user know they had bad arguments?\n  } else {\n    this[0] = [];\n    this.length = 1;\n  }\n\n  return this;\n};\njStat._init.prototype = jStat.prototype;\njStat._init.constructor = jStat;\n\n\n// Utility functions.\n// TODO: for internal use only?\njStat.utils = {\n  calcRdx: calcRdx,\n  isArray: isArray,\n  isFunction: isFunction,\n  isNumber: isNumber,\n  toVector: toVector\n};\n\n\n// Easily extend the jStat object.\n// TODO: is this seriously necessary?\njStat.extend = function extend(obj) {\n  var i, j;\n\n  if (arguments.length === 1) {\n    for (j in obj)\n      jStat[j] = obj[j];\n    return this;\n  }\n\n  for (var i = 1; i < arguments.length; i++) {\n    for (j in arguments[i])\n      obj[j] = arguments[i][j];\n  }\n\n  return obj;\n};\n\n\n// Returns the number of rows in the matrix.\njStat.rows = function rows(arr) {\n  return arr.length || 1;\n};\n\n\n// Returns the number of columns in the matrix.\njStat.cols = function cols(arr) {\n  return arr[0].length || 1;\n};\n\n\n// Returns the dimensions of the object { rows: i, cols: j }\njStat.dimensions = function dimensions(arr) {\n  return {\n    rows: jStat.rows(arr),\n    cols: jStat.cols(arr)\n  };\n};\n\n\n// Returns a specified row as a vector or return a sub matrix by pick some rows\njStat.row = function row(arr, index) {\n  if (isArray(index)) {\n    return index.map(function(i) {\n      return jStat.row(arr, i);\n    })\n  }\n  return arr[index];\n};\n\n\n// return row as array\n// rowa([[1,2],[3,4]],0) -> [1,2]\njStat.rowa = function rowa(arr, i) {\n  return jStat.row(arr, i);\n};\n\n\n// Returns the specified column as a vector or return a sub matrix by pick some\n// columns\njStat.col = function col(arr, index) {\n  if (isArray(index)) {\n    var submat = jStat.arange(arr.length).map(function(i) {\n      return new Array(index.length);\n    });\n    index.forEach(function(ind, i){\n      jStat.arange(arr.length).forEach(function(j) {\n        submat[j][i] = arr[j][ind];\n      });\n    });\n    return submat;\n  }\n  var column = new Array(arr.length);\n  for (var i = 0; i < arr.length; i++)\n    column[i] = [arr[i][index]];\n  return column;\n};\n\n\n// return column as array\n// cola([[1,2],[3,4]],0) -> [1,3]\njStat.cola = function cola(arr, i) {\n  return jStat.col(arr, i).map(function(a){ return a[0] });\n};\n\n\n// Returns the diagonal of the matrix\njStat.diag = function diag(arr) {\n  var nrow = jStat.rows(arr);\n  var res = new Array(nrow);\n  for (var row = 0; row < nrow; row++)\n    res[row] = [arr[row][row]];\n  return res;\n};\n\n\n// Returns the anti-diagonal of the matrix\njStat.antidiag = function antidiag(arr) {\n  var nrow = jStat.rows(arr) - 1;\n  var res = new Array(nrow);\n  for (var i = 0; nrow >= 0; nrow--, i++)\n    res[i] = [arr[i][nrow]];\n  return res;\n};\n\n// Transpose a matrix or array.\njStat.transpose = function transpose(arr) {\n  var obj = [];\n  var objArr, rows, cols, j, i;\n\n  // Make sure arr is in matrix format.\n  if (!isArray(arr[0]))\n    arr = [arr];\n\n  rows = arr.length;\n  cols = arr[0].length;\n\n  for (var i = 0; i < cols; i++) {\n    objArr = new Array(rows);\n    for (j = 0; j < rows; j++)\n      objArr[j] = arr[j][i];\n    obj.push(objArr);\n  }\n\n  // If obj is vector, return only single array.\n  return obj.length === 1 ? obj[0] : obj;\n};\n\n\n// Map a function to an array or array of arrays.\n// \"toAlter\" is an internal variable.\njStat.map = function map(arr, func, toAlter) {\n  var row, nrow, ncol, res, col;\n\n  if (!isArray(arr[0]))\n    arr = [arr];\n\n  nrow = arr.length;\n  ncol = arr[0].length;\n  res = toAlter ? arr : new Array(nrow);\n\n  for (row = 0; row < nrow; row++) {\n    // if the row doesn't exist, create it\n    if (!res[row])\n      res[row] = new Array(ncol);\n    for (col = 0; col < ncol; col++)\n      res[row][col] = func(arr[row][col], row, col);\n  }\n\n  return res.length === 1 ? res[0] : res;\n};\n\n\n// Cumulatively combine the elements of an array or array of arrays using a function.\njStat.cumreduce = function cumreduce(arr, func, toAlter) {\n  var row, nrow, ncol, res, col;\n\n  if (!isArray(arr[0]))\n    arr = [arr];\n\n  nrow = arr.length;\n  ncol = arr[0].length;\n  res = toAlter ? arr : new Array(nrow);\n\n  for (row = 0; row < nrow; row++) {\n    // if the row doesn't exist, create it\n    if (!res[row])\n      res[row] = new Array(ncol);\n    if (ncol > 0)\n      res[row][0] = arr[row][0];\n    for (col = 1; col < ncol; col++)\n      res[row][col] = func(res[row][col-1], arr[row][col]);\n  }\n  return res.length === 1 ? res[0] : res;\n};\n\n\n// Destructively alter an array.\njStat.alter = function alter(arr, func) {\n  return jStat.map(arr, func, true);\n};\n\n\n// Generate a rows x cols matrix according to the supplied function.\njStat.create = function  create(rows, cols, func) {\n  var res = new Array(rows);\n  var i, j;\n\n  if (isFunction(cols)) {\n    func = cols;\n    cols = rows;\n  }\n\n  for (var i = 0; i < rows; i++) {\n    res[i] = new Array(cols);\n    for (j = 0; j < cols; j++)\n      res[i][j] = func(i, j);\n  }\n\n  return res;\n};\n\n\nfunction retZero() { return 0; }\n\n\n// Generate a rows x cols matrix of zeros.\njStat.zeros = function zeros(rows, cols) {\n  if (!isNumber(cols))\n    cols = rows;\n  return jStat.create(rows, cols, retZero);\n};\n\n\nfunction retOne() { return 1; }\n\n\n// Generate a rows x cols matrix of ones.\njStat.ones = function ones(rows, cols) {\n  if (!isNumber(cols))\n    cols = rows;\n  return jStat.create(rows, cols, retOne);\n};\n\n\n// Generate a rows x cols matrix of uniformly random numbers.\njStat.rand = function rand(rows, cols) {\n  if (!isNumber(cols))\n    cols = rows;\n  return jStat.create(rows, cols, Math.random);\n};\n\n\nfunction retIdent(i, j) { return i === j ? 1 : 0; }\n\n\n// Generate an identity matrix of size row x cols.\njStat.identity = function identity(rows, cols) {\n  if (!isNumber(cols))\n    cols = rows;\n  return jStat.create(rows, cols, retIdent);\n};\n\n\n// Tests whether a matrix is symmetric\njStat.symmetric = function symmetric(arr) {\n  var issymmetric = true;\n  var size = arr.length;\n  var row, col;\n\n  if (arr.length !== arr[0].length)\n    return false;\n\n  for (row = 0; row < size; row++) {\n    for (col = 0; col < size; col++)\n      if (arr[col][row] !== arr[row][col])\n        return false;\n  }\n\n  return true;\n};\n\n\n// Set all values to zero.\njStat.clear = function clear(arr) {\n  return jStat.alter(arr, retZero);\n};\n\n\n// Generate sequence.\njStat.seq = function seq(min, max, length, func) {\n  if (!isFunction(func))\n    func = false;\n\n  var arr = [];\n  var hival = calcRdx(min, max);\n  var step = (max * hival - min * hival) / ((length - 1) * hival);\n  var current = min;\n  var cnt;\n\n  // Current is assigned using a technique to compensate for IEEE error.\n  // TODO: Needs better implementation.\n  for (cnt = 0;\n       current <= max && cnt < length;\n       cnt++, current = (min * hival + step * hival * cnt) / hival) {\n    arr.push((func ? func(current, cnt) : current));\n  }\n\n  return arr;\n};\n\n\n// arange(5) -> [0,1,2,3,4]\n// arange(1,5) -> [1,2,3,4]\n// arange(5,1,-1) -> [5,4,3,2]\njStat.arange = function arange(start, end, step) {\n  var rl = [];\n  step = step || 1;\n  if (end === undefined) {\n    end = start;\n    start = 0;\n  }\n  if (start === end || step === 0) {\n    return [];\n  }\n  if (start < end && step < 0) {\n    return [];\n  }\n  if (start > end && step > 0) {\n    return [];\n  }\n  if (step > 0) {\n    for (i = start; i < end; i += step) {\n      rl.push(i);\n    }\n  } else {\n    for (i = start; i > end; i += step) {\n      rl.push(i);\n    }\n  }\n  return rl;\n};\n\n\n// A=[[1,2,3],[4,5,6],[7,8,9]]\n// slice(A,{row:{end:2},col:{start:1}}) -> [[2,3],[5,6]]\n// slice(A,1,{start:1}) -> [5,6]\n// as numpy code A[:2,1:]\njStat.slice = (function(){\n  function _slice(list, start, end, step) {\n    // note it's not equal to range.map mode it's a bug\n    var i;\n    var rl = [];\n    var length = list.length;\n    if (start === undefined && end === undefined && step === undefined) {\n      return jStat.copy(list);\n    }\n\n    start = start || 0;\n    end = end || list.length;\n    start = start >= 0 ? start : length + start;\n    end = end >= 0 ? end : length + end;\n    step = step || 1;\n    if (start === end || step === 0) {\n      return [];\n    }\n    if (start < end && step < 0) {\n      return [];\n    }\n    if (start > end && step > 0) {\n      return [];\n    }\n    if (step > 0) {\n      for (i = start; i < end; i += step) {\n        rl.push(list[i]);\n      }\n    } else {\n      for (i = start; i > end;i += step) {\n        rl.push(list[i]);\n      }\n    }\n    return rl;\n  }\n\n  function slice(list, rcSlice) {\n    rcSlice = rcSlice || {};\n    if (isNumber(rcSlice.row)) {\n      if (isNumber(rcSlice.col))\n        return list[rcSlice.row][rcSlice.col];\n      var row = jStat.rowa(list, rcSlice.row);\n      var colSlice = rcSlice.col || {};\n      return _slice(row, colSlice.start, colSlice.end, colSlice.step);\n    }\n\n    if (isNumber(rcSlice.col)) {\n      var col = jStat.cola(list, rcSlice.col);\n      var rowSlice = rcSlice.row || {};\n      return _slice(col, rowSlice.start, rowSlice.end, rowSlice.step);\n    }\n\n    var rowSlice = rcSlice.row || {};\n    var colSlice = rcSlice.col || {};\n    var rows = _slice(list, rowSlice.start, rowSlice.end, rowSlice.step);\n    return rows.map(function(row) {\n      return _slice(row, colSlice.start, colSlice.end, colSlice.step);\n    });\n  }\n\n  return slice;\n}());\n\n\n// A=[[1,2,3],[4,5,6],[7,8,9]]\n// sliceAssign(A,{row:{start:1},col:{start:1}},[[0,0],[0,0]])\n// A=[[1,2,3],[4,0,0],[7,0,0]]\njStat.sliceAssign = function sliceAssign(A, rcSlice, B) {\n  if (isNumber(rcSlice.row)) {\n    if (isNumber(rcSlice.col))\n      return A[rcSlice.row][rcSlice.col] = B;\n    rcSlice.col = rcSlice.col || {};\n    rcSlice.col.start = rcSlice.col.start || 0;\n    rcSlice.col.end = rcSlice.col.end || A[0].length;\n    rcSlice.col.step = rcSlice.col.step || 1;\n    var nl = jStat.arange(rcSlice.col.start,\n                          Math.min(A.length, rcSlice.col.end),\n                          rcSlice.col.step);\n    var m = rcSlice.row;\n    nl.forEach(function(n, i) {\n      A[m][n] = B[i];\n    });\n    return A;\n  }\n\n  if (isNumber(rcSlice.col)) {\n    rcSlice.row = rcSlice.row || {};\n    rcSlice.row.start = rcSlice.row.start || 0;\n    rcSlice.row.end = rcSlice.row.end || A.length;\n    rcSlice.row.step = rcSlice.row.step || 1;\n    var ml = jStat.arange(rcSlice.row.start,\n                          Math.min(A[0].length, rcSlice.row.end),\n                          rcSlice.row.step);\n    var n = rcSlice.col;\n    ml.forEach(function(m, j) {\n      A[m][n] = B[j];\n    });\n    return A;\n  }\n\n  if (B[0].length === undefined) {\n    B = [B];\n  }\n  rcSlice.row.start = rcSlice.row.start || 0;\n  rcSlice.row.end = rcSlice.row.end || A.length;\n  rcSlice.row.step = rcSlice.row.step || 1;\n  rcSlice.col.start = rcSlice.col.start || 0;\n  rcSlice.col.end = rcSlice.col.end || A[0].length;\n  rcSlice.col.step = rcSlice.col.step || 1;\n  var ml = jStat.arange(rcSlice.row.start,\n                        Math.min(A.length, rcSlice.row.end),\n                        rcSlice.row.step);\n  var nl = jStat.arange(rcSlice.col.start,\n                        Math.min(A[0].length, rcSlice.col.end),\n                        rcSlice.col.step);\n  ml.forEach(function(m, i) {\n    nl.forEach(function(n, j) {\n      A[m][n] = B[i][j];\n    });\n  });\n  return A;\n};\n\n\n// [1,2,3] ->\n// [[1,0,0],[0,2,0],[0,0,3]]\njStat.diagonal = function diagonal(diagArray) {\n  var mat = jStat.zeros(diagArray.length, diagArray.length);\n  diagArray.forEach(function(t, i) {\n    mat[i][i] = t;\n  });\n  return mat;\n};\n\n\n// return copy of A\njStat.copy = function copy(A) {\n  return A.map(function(row) {\n    if (isNumber(row))\n      return row;\n    return row.map(function(t) {\n      return t;\n    });\n  });\n};\n\n\n// TODO: Go over this entire implementation. Seems a tragic waste of resources\n// doing all this work. Instead, and while ugly, use new Function() to generate\n// a custom function for each static method.\n\n// Quick reference.\nvar jProto = jStat.prototype;\n\n// Default length.\njProto.length = 0;\n\n// For internal use only.\n// TODO: Check if they're actually used, and if they are then rename them\n// to _*\njProto.push = Array.prototype.push;\njProto.sort = Array.prototype.sort;\njProto.splice = Array.prototype.splice;\njProto.slice = Array.prototype.slice;\n\n\n// Return a clean array.\njProto.toArray = function toArray() {\n  return this.length > 1 ? slice.call(this) : slice.call(this)[0];\n};\n\n\n// Map a function to a matrix or vector.\njProto.map = function map(func, toAlter) {\n  return jStat(jStat.map(this, func, toAlter));\n};\n\n\n// Cumulatively combine the elements of a matrix or vector using a function.\njProto.cumreduce = function cumreduce(func, toAlter) {\n  return jStat(jStat.cumreduce(this, func, toAlter));\n};\n\n\n// Destructively alter an array.\njProto.alter = function alter(func) {\n  jStat.alter(this, func);\n  return this;\n};\n\n\n// Extend prototype with methods that have no argument.\n(function(funcs) {\n  for (var i = 0; i < funcs.length; i++) (function(passfunc) {\n    jProto[passfunc] = function(func) {\n      var self = this,\n      results;\n      // Check for callback.\n      if (func) {\n        setTimeout(function() {\n          func.call(self, jProto[passfunc].call(self));\n        });\n        return this;\n      }\n      results = jStat[passfunc](this);\n      return isArray(results) ? jStat(results) : results;\n    };\n  })(funcs[i]);\n})('transpose clear symmetric rows cols dimensions diag antidiag'.split(' '));\n\n\n// Extend prototype with methods that have one argument.\n(function(funcs) {\n  for (var i = 0; i < funcs.length; i++) (function(passfunc) {\n    jProto[passfunc] = function(index, func) {\n      var self = this;\n      // check for callback\n      if (func) {\n        setTimeout(function() {\n          func.call(self, jProto[passfunc].call(self, index));\n        });\n        return this;\n      }\n      return jStat(jStat[passfunc](this, index));\n    };\n  })(funcs[i]);\n})('row col'.split(' '));\n\n\n// Extend prototype with simple shortcut methods.\n(function(funcs) {\n  for (var i = 0; i < funcs.length; i++) (function(passfunc) {\n    jProto[passfunc] = new Function(\n        'return jStat(jStat.' + passfunc + '.apply(null, arguments));');\n  })(funcs[i]);\n})('create zeros ones rand identity'.split(' '));\n\n\n// Exposing jStat.\nreturn jStat;\n\n}(Math));\n(function(jStat, Math) {\n\nvar isFunction = jStat.utils.isFunction;\n\n// Ascending functions for sort\nfunction ascNum(a, b) { return a - b; }\n\nfunction clip(arg, min, max) {\n  return Math.max(min, Math.min(arg, max));\n}\n\n\n// sum of an array\njStat.sum = function sum(arr) {\n  var sum = 0;\n  var i = arr.length;\n  while (--i >= 0)\n    sum += arr[i];\n  return sum;\n};\n\n\n// sum squared\njStat.sumsqrd = function sumsqrd(arr) {\n  var sum = 0;\n  var i = arr.length;\n  while (--i >= 0)\n    sum += arr[i] * arr[i];\n  return sum;\n};\n\n\n// sum of squared errors of prediction (SSE)\njStat.sumsqerr = function sumsqerr(arr) {\n  var mean = jStat.mean(arr);\n  var sum = 0;\n  var i = arr.length;\n  var tmp;\n  while (--i >= 0) {\n    tmp = arr[i] - mean;\n    sum += tmp * tmp;\n  }\n  return sum;\n};\n\n// sum of an array in each row\njStat.sumrow = function sumrow(arr) {\n  var sum = 0;\n  var i = arr.length;\n  while (--i >= 0)\n    sum += arr[i];\n  return sum;\n};\n\n// product of an array\njStat.product = function product(arr) {\n  var prod = 1;\n  var i = arr.length;\n  while (--i >= 0)\n    prod *= arr[i];\n  return prod;\n};\n\n\n// minimum value of an array\njStat.min = function min(arr) {\n  var low = arr[0];\n  var i = 0;\n  while (++i < arr.length)\n    if (arr[i] < low)\n      low = arr[i];\n  return low;\n};\n\n\n// maximum value of an array\njStat.max = function max(arr) {\n  var high = arr[0];\n  var i = 0;\n  while (++i < arr.length)\n    if (arr[i] > high)\n      high = arr[i];\n  return high;\n};\n\n\n// unique values of an array\njStat.unique = function unique(arr) {\n  var hash = {}, _arr = [];\n  for(var i = 0; i < arr.length; i++) {\n    if (!hash[arr[i]]) {\n      hash[arr[i]] = true;\n      _arr.push(arr[i]);\n    }\n  }\n  return _arr;\n};\n\n\n// mean value of an array\njStat.mean = function mean(arr) {\n  return jStat.sum(arr) / arr.length;\n};\n\n\n// mean squared error (MSE)\njStat.meansqerr = function meansqerr(arr) {\n  return jStat.sumsqerr(arr) / arr.length;\n};\n\n\n// geometric mean of an array\njStat.geomean = function geomean(arr) {\n  return Math.pow(jStat.product(arr), 1 / arr.length);\n};\n\n\n// median of an array\njStat.median = function median(arr) {\n  var arrlen = arr.length;\n  var _arr = arr.slice().sort(ascNum);\n  // check if array is even or odd, then return the appropriate\n  return !(arrlen & 1)\n    ? (_arr[(arrlen / 2) - 1 ] + _arr[(arrlen / 2)]) / 2\n    : _arr[(arrlen / 2) | 0 ];\n};\n\n\n// cumulative sum of an array\njStat.cumsum = function cumsum(arr) {\n  return jStat.cumreduce(arr, function (a, b) { return a + b; });\n};\n\n\n// cumulative product of an array\njStat.cumprod = function cumprod(arr) {\n  return jStat.cumreduce(arr, function (a, b) { return a * b; });\n};\n\n\n// successive differences of a sequence\njStat.diff = function diff(arr) {\n  var diffs = [];\n  var arrLen = arr.length;\n  var i;\n  for (var i = 1; i < arrLen; i++)\n    diffs.push(arr[i] - arr[i - 1]);\n  return diffs;\n};\n\n\n// ranks of an array\njStat.rank = function (arr) {\n  var arrlen = arr.length;\n  var sorted = arr.slice().sort(ascNum);\n  var ranks = new Array(arrlen);\n  for (var i = 0; i < arrlen; i++) {\n    var first = sorted.indexOf(arr[i]);\n    var last = sorted.lastIndexOf(arr[i]);\n    if (first === last) {\n      var val = first;\n    } else {\n      var val = (first + last) / 2;\n    }\n    ranks[i] = val + 1;\n  }\n  return ranks;\n};\n\n\n// mode of an array\n// if there are multiple modes of an array, return all of them\n// is this the appropriate way of handling it?\njStat.mode = function mode(arr) {\n  var arrLen = arr.length;\n  var _arr = arr.slice().sort(ascNum);\n  var count = 1;\n  var maxCount = 0;\n  var numMaxCount = 0;\n  var mode_arr = [];\n  var i;\n\n  for (var i = 0; i < arrLen; i++) {\n    if (_arr[i] === _arr[i + 1]) {\n      count++;\n    } else {\n      if (count > maxCount) {\n        mode_arr = [_arr[i]];\n        maxCount = count;\n        numMaxCount = 0;\n      }\n      // are there multiple max counts\n      else if (count === maxCount) {\n        mode_arr.push(_arr[i]);\n        numMaxCount++;\n      }\n      // resetting count for new value in array\n      count = 1;\n    }\n  }\n\n  return numMaxCount === 0 ? mode_arr[0] : mode_arr;\n};\n\n\n// range of an array\njStat.range = function range(arr) {\n  return jStat.max(arr) - jStat.min(arr);\n};\n\n// variance of an array\n// flag = true indicates sample instead of population\njStat.variance = function variance(arr, flag) {\n  return jStat.sumsqerr(arr) / (arr.length - (flag ? 1 : 0));\n};\n\n// pooled variance of an array of arrays\njStat.pooledvariance = function pooledvariance(arr) {\n  var sumsqerr = arr.reduce(function (a, samples) {return a + jStat.sumsqerr(samples);}, 0);\n  var count = arr.reduce(function (a, samples) {return a + samples.length;}, 0);\n  return sumsqerr / (count - arr.length);\n};\n\n// deviation of an array\njStat.deviation = function (arr) {\n  var mean = jStat.mean(arr);\n  var arrlen = arr.length;\n  var dev = new Array(arrlen);\n  for (var i = 0; i < arrlen; i++) {\n    dev[i] = arr[i] - mean;\n  }\n  return dev;\n};\n\n// standard deviation of an array\n// flag = true indicates sample instead of population\njStat.stdev = function stdev(arr, flag) {\n  return Math.sqrt(jStat.variance(arr, flag));\n};\n\n// pooled standard deviation of an array of arrays\njStat.pooledstdev = function pooledstdev(arr) {\n  return Math.sqrt(jStat.pooledvariance(arr));\n};\n\n// mean deviation (mean absolute deviation) of an array\njStat.meandev = function meandev(arr) {\n  var mean = jStat.mean(arr);\n  var a = [];\n  for (var i = arr.length - 1; i >= 0; i--) {\n    a.push(Math.abs(arr[i] - mean));\n  }\n  return jStat.mean(a);\n};\n\n\n// median deviation (median absolute deviation) of an array\njStat.meddev = function meddev(arr) {\n  var median = jStat.median(arr);\n  var a = [];\n  for (var i = arr.length - 1; i >= 0; i--) {\n    a.push(Math.abs(arr[i] - median));\n  }\n  return jStat.median(a);\n};\n\n\n// coefficient of variation\njStat.coeffvar = function coeffvar(arr) {\n  return jStat.stdev(arr) / jStat.mean(arr);\n};\n\n\n// quartiles of an array\njStat.quartiles = function quartiles(arr) {\n  var arrlen = arr.length;\n  var _arr = arr.slice().sort(ascNum);\n  return [\n    _arr[ Math.round((arrlen) / 4) - 1 ],\n    _arr[ Math.round((arrlen) / 2) - 1 ],\n    _arr[ Math.round((arrlen) * 3 / 4) - 1 ]\n  ];\n};\n\n\n// Arbitary quantiles of an array. Direct port of the scipy.stats\n// implementation by Pierre GF Gerard-Marchant.\njStat.quantiles = function quantiles(arr, quantilesArray, alphap, betap) {\n  var sortedArray = arr.slice().sort(ascNum);\n  var quantileVals = [quantilesArray.length];\n  var n = arr.length;\n  var i, p, m, aleph, k, gamma;\n\n  if (typeof alphap === 'undefined')\n    alphap = 3 / 8;\n  if (typeof betap === 'undefined')\n    betap = 3 / 8;\n\n  for (var i = 0; i < quantilesArray.length; i++) {\n    p = quantilesArray[i];\n    m = alphap + p * (1 - alphap - betap);\n    aleph = n * p + m;\n    k = Math.floor(clip(aleph, 1, n - 1));\n    gamma = clip(aleph - k, 0, 1);\n    quantileVals[i] = (1 - gamma) * sortedArray[k - 1] + gamma * sortedArray[k];\n  }\n\n  return quantileVals;\n};\n\n// Returns the k-th percentile of values in a range, where k is in the\n// range 0..1, exclusive.\njStat.percentile = function percentile(arr, k) {\n  var _arr = arr.slice().sort(ascNum);\n  var realIndex = k * (_arr.length - 1);\n  var index = parseInt(realIndex);\n  var frac = realIndex - index;\n\n  if (index + 1 < _arr.length) {\n    return _arr[index] * (1 - frac) + _arr[index + 1] * frac;\n  } else {\n    return _arr[index];\n  }\n}\n\n\n// The percentile rank of score in a given array. Returns the percentage\n// of all values in the input array that are less than (kind='strict') or\n// less or equal than (kind='weak') score. Default is weak.\njStat.percentileOfScore = function percentileOfScore(arr, score, kind) {\n  var counter = 0;\n  var len = arr.length;\n  var strict = false;\n  var value, i;\n\n  if (kind === 'strict')\n    strict = true;\n\n  for (var i = 0; i < len; i++) {\n    value = arr[i];\n    if ((strict && value < score) ||\n        (!strict && value <= score)) {\n      counter++;\n    }\n  }\n\n  return counter / len;\n};\n\n\n// Histogram (bin count) data\njStat.histogram = function histogram(arr, bins) {\n  var first = jStat.min(arr);\n  var binCnt = bins || 4;\n  var binWidth = (jStat.max(arr) - first) / binCnt;\n  var len = arr.length;\n  var bins = [];\n  var i;\n\n  for (var i = 0; i < binCnt; i++)\n    bins[i] = 0;\n  for (var i = 0; i < len; i++)\n    bins[Math.min(Math.floor(((arr[i] - first) / binWidth)), binCnt - 1)] += 1;\n\n  return bins;\n};\n\n\n// covariance of two arrays\njStat.covariance = function covariance(arr1, arr2) {\n  var u = jStat.mean(arr1);\n  var v = jStat.mean(arr2);\n  var arr1Len = arr1.length;\n  var sq_dev = new Array(arr1Len);\n  var i;\n\n  for (var i = 0; i < arr1Len; i++)\n    sq_dev[i] = (arr1[i] - u) * (arr2[i] - v);\n\n  return jStat.sum(sq_dev) / (arr1Len - 1);\n};\n\n\n// (pearson's) population correlation coefficient, rho\njStat.corrcoeff = function corrcoeff(arr1, arr2) {\n  return jStat.covariance(arr1, arr2) /\n      jStat.stdev(arr1, 1) /\n      jStat.stdev(arr2, 1);\n};\n\n  // (spearman's) rank correlation coefficient, sp\njStat.spearmancoeff =  function (arr1, arr2) {\n  arr1 = jStat.rank(arr1);\n  arr2 = jStat.rank(arr2);\n  //return pearson's correlation of the ranks:\n  return jStat.corrcoeff(arr1, arr2);\n}\n\n\n// statistical standardized moments (general form of skew/kurt)\njStat.stanMoment = function stanMoment(arr, n) {\n  var mu = jStat.mean(arr);\n  var sigma = jStat.stdev(arr);\n  var len = arr.length;\n  var skewSum = 0;\n\n  for (var i = 0; i < len; i++)\n    skewSum += Math.pow((arr[i] - mu) / sigma, n);\n\n  return skewSum / arr.length;\n};\n\n// (pearson's) moment coefficient of skewness\njStat.skewness = function skewness(arr) {\n  return jStat.stanMoment(arr, 3);\n};\n\n// (pearson's) (excess) kurtosis\njStat.kurtosis = function kurtosis(arr) {\n  return jStat.stanMoment(arr, 4) - 3;\n};\n\n\nvar jProto = jStat.prototype;\n\n\n// Extend jProto with method for calculating cumulative sums and products.\n// This differs from the similar extension below as cumsum and cumprod should\n// not be run again in the case fullbool === true.\n// If a matrix is passed, automatically assume operation should be done on the\n// columns.\n(function(funcs) {\n  for (var i = 0; i < funcs.length; i++) (function(passfunc) {\n    // If a matrix is passed, automatically assume operation should be done on\n    // the columns.\n    jProto[passfunc] = function(fullbool, func) {\n      var arr = [];\n      var i = 0;\n      var tmpthis = this;\n      // Assignment reassignation depending on how parameters were passed in.\n      if (isFunction(fullbool)) {\n        func = fullbool;\n        fullbool = false;\n      }\n      // Check if a callback was passed with the function.\n      if (func) {\n        setTimeout(function() {\n          func.call(tmpthis, jProto[passfunc].call(tmpthis, fullbool));\n        });\n        return this;\n      }\n      // Check if matrix and run calculations.\n      if (this.length > 1) {\n        tmpthis = fullbool === true ? this : this.transpose();\n        for (; i < tmpthis.length; i++)\n          arr[i] = jStat[passfunc](tmpthis[i]);\n        return arr;\n      }\n      // Pass fullbool if only vector, not a matrix. for variance and stdev.\n      return jStat[passfunc](this[0], fullbool);\n    };\n  })(funcs[i]);\n})(('cumsum cumprod').split(' '));\n\n\n// Extend jProto with methods which don't require arguments and work on columns.\n(function(funcs) {\n  for (var i = 0; i < funcs.length; i++) (function(passfunc) {\n    // If a matrix is passed, automatically assume operation should be done on\n    // the columns.\n    jProto[passfunc] = function(fullbool, func) {\n      var arr = [];\n      var i = 0;\n      var tmpthis = this;\n      // Assignment reassignation depending on how parameters were passed in.\n      if (isFunction(fullbool)) {\n        func = fullbool;\n        fullbool = false;\n      }\n      // Check if a callback was passed with the function.\n      if (func) {\n        setTimeout(function() {\n          func.call(tmpthis, jProto[passfunc].call(tmpthis, fullbool));\n        });\n        return this;\n      }\n      // Check if matrix and run calculations.\n      if (this.length > 1) {\n        if (passfunc !== 'sumrow')\n          tmpthis = fullbool === true ? this : this.transpose();\n        for (; i < tmpthis.length; i++)\n          arr[i] = jStat[passfunc](tmpthis[i]);\n        return fullbool === true\n            ? jStat[passfunc](jStat.utils.toVector(arr))\n            : arr;\n      }\n      // Pass fullbool if only vector, not a matrix. for variance and stdev.\n      return jStat[passfunc](this[0], fullbool);\n    };\n  })(funcs[i]);\n})(('sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr ' +\n    'geomean median diff rank mode range variance deviation stdev meandev ' +\n    'meddev coeffvar quartiles histogram skewness kurtosis').split(' '));\n\n\n// Extend jProto with functions that take arguments. Operations on matrices are\n// done on columns.\n(function(funcs) {\n  for (var i = 0; i < funcs.length; i++) (function(passfunc) {\n    jProto[passfunc] = function() {\n      var arr = [];\n      var i = 0;\n      var tmpthis = this;\n      var args = Array.prototype.slice.call(arguments);\n\n      // If the last argument is a function, we assume it's a callback; we\n      // strip the callback out and call the function again.\n      if (isFunction(args[args.length - 1])) {\n        var callbackFunction = args[args.length - 1];\n        var argsToPass = args.slice(0, args.length - 1);\n\n        setTimeout(function() {\n          callbackFunction.call(tmpthis,\n                                jProto[passfunc].apply(tmpthis, argsToPass));\n        });\n        return this;\n\n      // Otherwise we curry the function args and call normally.\n      } else {\n        var callbackFunction = undefined;\n        var curriedFunction = function curriedFunction(vector) {\n          return jStat[passfunc].apply(tmpthis, [vector].concat(args));\n        }\n      }\n\n      // If this is a matrix, run column-by-column.\n      if (this.length > 1) {\n        tmpthis = tmpthis.transpose();\n        for (; i < tmpthis.length; i++)\n          arr[i] = curriedFunction(tmpthis[i]);\n        return arr;\n      }\n\n      // Otherwise run on the vector.\n      return curriedFunction(this[0]);\n    };\n  })(funcs[i]);\n})('quantiles percentileOfScore'.split(' '));\n\n}(jStat, Math));\n// Special functions //\n(function(jStat, Math) {\n\n// Log-gamma function\njStat.gammaln = function gammaln(x) {\n  var j = 0;\n  var cof = [\n    76.18009172947146, -86.50532032941677, 24.01409824083091,\n    -1.231739572450155, 0.1208650973866179e-2, -0.5395239384953e-5\n  ];\n  var ser = 1.000000000190015;\n  var xx, y, tmp;\n  tmp = (y = xx = x) + 5.5;\n  tmp -= (xx + 0.5) * Math.log(tmp);\n  for (; j < 6; j++)\n    ser += cof[j] / ++y;\n  return Math.log(2.5066282746310005 * ser / xx) - tmp;\n};\n\n\n// gamma of x\njStat.gammafn = function gammafn(x) {\n  var p = [-1.716185138865495, 24.76565080557592, -379.80425647094563,\n           629.3311553128184, 866.9662027904133, -31451.272968848367,\n           -36144.413418691176, 66456.14382024054\n  ];\n  var q = [-30.8402300119739, 315.35062697960416, -1015.1563674902192,\n           -3107.771671572311, 22538.118420980151, 4755.8462775278811,\n           -134659.9598649693, -115132.2596755535];\n  var fact = false;\n  var n = 0;\n  var xden = 0;\n  var xnum = 0;\n  var y = x;\n  var i, z, yi, res, sum, ysq;\n  if (y <= 0) {\n    res = y % 1 + 3.6e-16;\n    if (res) {\n      fact = (!(y & 1) ? 1 : -1) * Math.PI / Math.sin(Math.PI * res);\n      y = 1 - y;\n    } else {\n      return Infinity;\n    }\n  }\n  yi = y;\n  if (y < 1) {\n    z = y++;\n  } else {\n    z = (y -= n = (y | 0) - 1) - 1;\n  }\n  for (var i = 0; i < 8; ++i) {\n    xnum = (xnum + p[i]) * z;\n    xden = xden * z + q[i];\n  }\n  res = xnum / xden + 1;\n  if (yi < y) {\n    res /= yi;\n  } else if (yi > y) {\n    for (var i = 0; i < n; ++i) {\n      res *= y;\n      y++;\n    }\n  }\n  if (fact) {\n    res = fact / res;\n  }\n  return res;\n};\n\n\n// lower incomplete gamma function, which is usually typeset with a\n// lower-case greek gamma as the function symbol\njStat.gammap = function gammap(a, x) {\n  return jStat.lowRegGamma(a, x) * jStat.gammafn(a);\n};\n\n\n// The lower regularized incomplete gamma function, usually written P(a,x)\njStat.lowRegGamma = function lowRegGamma(a, x) {\n  var aln = jStat.gammaln(a);\n  var ap = a;\n  var sum = 1 / a;\n  var del = sum;\n  var b = x + 1 - a;\n  var c = 1 / 1.0e-30;\n  var d = 1 / b;\n  var h = d;\n  var i = 1;\n  // calculate maximum number of itterations required for a\n  var ITMAX = -~(Math.log((a >= 1) ? a : 1 / a) * 8.5 + a * 0.4 + 17);\n  var an, endval;\n\n  if (x < 0 || a <= 0) {\n    return NaN;\n  } else if (x < a + 1) {\n    for (; i <= ITMAX; i++) {\n      sum += del *= x / ++ap;\n    }\n    return (sum * Math.exp(-x + a * Math.log(x) - (aln)));\n  }\n\n  for (; i <= ITMAX; i++) {\n    an = -i * (i - a);\n    b += 2;\n    d = an * d + b;\n    c = b + an / c;\n    d = 1 / d;\n    h *= d * c;\n  }\n\n  return (1 - h * Math.exp(-x + a * Math.log(x) - (aln)));\n};\n\n// natural log factorial of n\njStat.factorialln = function factorialln(n) {\n  return n < 0 ? NaN : jStat.gammaln(n + 1);\n};\n\n// factorial of n\njStat.factorial = function factorial(n) {\n  return n < 0 ? NaN : jStat.gammafn(n + 1);\n};\n\n// combinations of n, m\njStat.combination = function combination(n, m) {\n  // make sure n or m don't exceed the upper limit of usable values\n  return (n > 170 || m > 170)\n      ? Math.exp(jStat.combinationln(n, m))\n      : (jStat.factorial(n) / jStat.factorial(m)) / jStat.factorial(n - m);\n};\n\n\njStat.combinationln = function combinationln(n, m){\n  return jStat.factorialln(n) - jStat.factorialln(m) - jStat.factorialln(n - m);\n};\n\n\n// permutations of n, m\njStat.permutation = function permutation(n, m) {\n  return jStat.factorial(n) / jStat.factorial(n - m);\n};\n\n\n// beta function\njStat.betafn = function betafn(x, y) {\n  // ensure arguments are positive\n  if (x <= 0 || y <= 0)\n    return undefined;\n  // make sure x + y doesn't exceed the upper limit of usable values\n  return (x + y > 170)\n      ? Math.exp(jStat.betaln(x, y))\n      : jStat.gammafn(x) * jStat.gammafn(y) / jStat.gammafn(x + y);\n};\n\n\n// natural logarithm of beta function\njStat.betaln = function betaln(x, y) {\n  return jStat.gammaln(x) + jStat.gammaln(y) - jStat.gammaln(x + y);\n};\n\n\n// Evaluates the continued fraction for incomplete beta function by modified\n// Lentz's method.\njStat.betacf = function betacf(x, a, b) {\n  var fpmin = 1e-30;\n  var m = 1;\n  var qab = a + b;\n  var qap = a + 1;\n  var qam = a - 1;\n  var c = 1;\n  var d = 1 - qab * x / qap;\n  var m2, aa, del, h;\n\n  // These q's will be used in factors that occur in the coefficients\n  if (Math.abs(d) < fpmin)\n    d = fpmin;\n  d = 1 / d;\n  h = d;\n\n  for (; m <= 100; m++) {\n    m2 = 2 * m;\n    aa = m * (b - m) * x / ((qam + m2) * (a + m2));\n    // One step (the even one) of the recurrence\n    d = 1 + aa * d;\n    if (Math.abs(d) < fpmin)\n      d = fpmin;\n    c = 1 + aa / c;\n    if (Math.abs(c) < fpmin)\n      c = fpmin;\n    d = 1 / d;\n    h *= d * c;\n    aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2));\n    // Next step of the recurrence (the odd one)\n    d = 1 + aa * d;\n    if (Math.abs(d) < fpmin)\n      d = fpmin;\n    c = 1 + aa / c;\n    if (Math.abs(c) < fpmin)\n      c = fpmin;\n    d = 1 / d;\n    del = d * c;\n    h *= del;\n    if (Math.abs(del - 1.0) < 3e-7)\n      break;\n  }\n\n  return h;\n};\n\n\n// Returns the inverse of the lower regularized inomplete gamma function\njStat.gammapinv = function gammapinv(p, a) {\n  var j = 0;\n  var a1 = a - 1;\n  var EPS = 1e-8;\n  var gln = jStat.gammaln(a);\n  var x, err, t, u, pp, lna1, afac;\n\n  if (p >= 1)\n    return Math.max(100, a + 100 * Math.sqrt(a));\n  if (p <= 0)\n    return 0;\n  if (a > 1) {\n    lna1 = Math.log(a1);\n    afac = Math.exp(a1 * (lna1 - 1) - gln);\n    pp = (p < 0.5) ? p : 1 - p;\n    t = Math.sqrt(-2 * Math.log(pp));\n    x = (2.30753 + t * 0.27061) / (1 + t * (0.99229 + t * 0.04481)) - t;\n    if (p < 0.5)\n      x = -x;\n    x = Math.max(1e-3,\n                 a * Math.pow(1 - 1 / (9 * a) - x / (3 * Math.sqrt(a)), 3));\n  } else {\n    t = 1 - a * (0.253 + a * 0.12);\n    if (p < t)\n      x = Math.pow(p / t, 1 / a);\n    else\n      x = 1 - Math.log(1 - (p - t) / (1 - t));\n  }\n\n  for(; j < 12; j++) {\n    if (x <= 0)\n      return 0;\n    err = jStat.lowRegGamma(a, x) - p;\n    if (a > 1)\n      t = afac * Math.exp(-(x - a1) + a1 * (Math.log(x) - lna1));\n    else\n      t = Math.exp(-x + a1 * Math.log(x) - gln);\n    u = err / t;\n    x -= (t = u / (1 - 0.5 * Math.min(1, u * ((a - 1) / x - 1))));\n    if (x <= 0)\n      x = 0.5 * (x + t);\n    if (Math.abs(t) < EPS * x)\n      break;\n  }\n\n  return x;\n};\n\n\n// Returns the error function erf(x)\njStat.erf = function erf(x) {\n  var cof = [-1.3026537197817094, 6.4196979235649026e-1, 1.9476473204185836e-2,\n             -9.561514786808631e-3, -9.46595344482036e-4, 3.66839497852761e-4,\n             4.2523324806907e-5, -2.0278578112534e-5, -1.624290004647e-6,\n             1.303655835580e-6, 1.5626441722e-8, -8.5238095915e-8,\n             6.529054439e-9, 5.059343495e-9, -9.91364156e-10,\n             -2.27365122e-10, 9.6467911e-11, 2.394038e-12,\n             -6.886027e-12, 8.94487e-13, 3.13092e-13,\n             -1.12708e-13, 3.81e-16, 7.106e-15,\n             -1.523e-15, -9.4e-17, 1.21e-16,\n             -2.8e-17];\n  var j = cof.length - 1;\n  var isneg = false;\n  var d = 0;\n  var dd = 0;\n  var t, ty, tmp, res;\n\n  if (x < 0) {\n    x = -x;\n    isneg = true;\n  }\n\n  t = 2 / (2 + x);\n  ty = 4 * t - 2;\n\n  for(; j > 0; j--) {\n    tmp = d;\n    d = ty * d - dd + cof[j];\n    dd = tmp;\n  }\n\n  res = t * Math.exp(-x * x + 0.5 * (cof[0] + ty * d) - dd);\n  return isneg ? res - 1 : 1 - res;\n};\n\n\n// Returns the complmentary error function erfc(x)\njStat.erfc = function erfc(x) {\n  return 1 - jStat.erf(x);\n};\n\n\n// Returns the inverse of the complementary error function\njStat.erfcinv = function erfcinv(p) {\n  var j = 0;\n  var x, err, t, pp;\n  if (p >= 2)\n    return -100;\n  if (p <= 0)\n    return 100;\n  pp = (p < 1) ? p : 2 - p;\n  t = Math.sqrt(-2 * Math.log(pp / 2));\n  x = -0.70711 * ((2.30753 + t * 0.27061) /\n                  (1 + t * (0.99229 + t * 0.04481)) - t);\n  for (; j < 2; j++) {\n    err = jStat.erfc(x) - pp;\n    x += err / (1.12837916709551257 * Math.exp(-x * x) - x * err);\n  }\n  return (p < 1) ? x : -x;\n};\n\n\n// Returns the inverse of the incomplete beta function\njStat.ibetainv = function ibetainv(p, a, b) {\n  var EPS = 1e-8;\n  var a1 = a - 1;\n  var b1 = b - 1;\n  var j = 0;\n  var lna, lnb, pp, t, u, err, x, al, h, w, afac;\n  if (p <= 0)\n    return 0;\n  if (p >= 1)\n    return 1;\n  if (a >= 1 && b >= 1) {\n    pp = (p < 0.5) ? p : 1 - p;\n    t = Math.sqrt(-2 * Math.log(pp));\n    x = (2.30753 + t * 0.27061) / (1 + t* (0.99229 + t * 0.04481)) - t;\n    if (p < 0.5)\n      x = -x;\n    al = (x * x - 3) / 6;\n    h = 2 / (1 / (2 * a - 1)  + 1 / (2 * b - 1));\n    w = (x * Math.sqrt(al + h) / h) - (1 / (2 * b - 1) - 1 / (2 * a - 1)) *\n        (al + 5 / 6 - 2 / (3 * h));\n    x = a / (a + b * Math.exp(2 * w));\n  } else {\n    lna = Math.log(a / (a + b));\n    lnb = Math.log(b / (a + b));\n    t = Math.exp(a * lna) / a;\n    u = Math.exp(b * lnb) / b;\n    w = t + u;\n    if (p < t / w)\n      x = Math.pow(a * w * p, 1 / a);\n    else\n      x = 1 - Math.pow(b * w * (1 - p), 1 / b);\n  }\n  afac = -jStat.gammaln(a) - jStat.gammaln(b) + jStat.gammaln(a + b);\n  for(; j < 10; j++) {\n    if (x === 0 || x === 1)\n      return x;\n    err = jStat.ibeta(x, a, b) - p;\n    t = Math.exp(a1 * Math.log(x) + b1 * Math.log(1 - x) + afac);\n    u = err / t;\n    x -= (t = u / (1 - 0.5 * Math.min(1, u * (a1 / x - b1 / (1 - x)))));\n    if (x <= 0)\n      x = 0.5 * (x + t);\n    if (x >= 1)\n      x = 0.5 * (x + t + 1);\n    if (Math.abs(t) < EPS * x && j > 0)\n      break;\n  }\n  return x;\n};\n\n\n// Returns the incomplete beta function I_x(a,b)\njStat.ibeta = function ibeta(x, a, b) {\n  // Factors in front of the continued fraction.\n  var bt = (x === 0 || x === 1) ?  0 :\n    Math.exp(jStat.gammaln(a + b) - jStat.gammaln(a) -\n             jStat.gammaln(b) + a * Math.log(x) + b *\n             Math.log(1 - x));\n  if (x < 0 || x > 1)\n    return false;\n  if (x < (a + 1) / (a + b + 2))\n    // Use continued fraction directly.\n    return bt * jStat.betacf(x, a, b) / a;\n  // else use continued fraction after making the symmetry transformation.\n  return 1 - bt * jStat.betacf(1 - x, b, a) / b;\n};\n\n\n// Returns a normal deviate (mu=0, sigma=1).\n// If n and m are specified it returns a object of normal deviates.\njStat.randn = function randn(n, m) {\n  var u, v, x, y, q, mat;\n  if (!m)\n    m = n;\n  if (n)\n    return jStat.create(n, m, function() { return jStat.randn(); });\n  do {\n    u = Math.random();\n    v = 1.7156 * (Math.random() - 0.5);\n    x = u - 0.449871;\n    y = Math.abs(v) + 0.386595;\n    q = x * x + y * (0.19600 * y - 0.25472 * x);\n  } while (q > 0.27597 && (q > 0.27846 || v * v > -4 * Math.log(u) * u * u));\n  return v / u;\n};\n\n\n// Returns a gamma deviate by the method of Marsaglia and Tsang.\njStat.randg = function randg(shape, n, m) {\n  var oalph = shape;\n  var a1, a2, u, v, x, mat;\n  if (!m)\n    m = n;\n  if (!shape)\n    shape = 1;\n  if (n) {\n    mat = jStat.zeros(n,m);\n    mat.alter(function() { return jStat.randg(shape); });\n    return mat;\n  }\n  if (shape < 1)\n    shape += 1;\n  a1 = shape - 1 / 3;\n  a2 = 1 / Math.sqrt(9 * a1);\n  do {\n    do {\n      x = jStat.randn();\n      v = 1 + a2 * x;\n    } while(v <= 0);\n    v = v * v * v;\n    u = Math.random();\n  } while(u > 1 - 0.331 * Math.pow(x, 4) &&\n          Math.log(u) > 0.5 * x*x + a1 * (1 - v + Math.log(v)));\n  // alpha > 1\n  if (shape == oalph)\n    return a1 * v;\n  // alpha < 1\n  do {\n    u = Math.random();\n  } while(u === 0);\n  return Math.pow(u, 1 / oalph) * a1 * v;\n};\n\n\n// making use of static methods on the instance\n(function(funcs) {\n  for (var i = 0; i < funcs.length; i++) (function(passfunc) {\n    jStat.fn[passfunc] = function() {\n      return jStat(\n          jStat.map(this, function(value) { return jStat[passfunc](value); }));\n    }\n  })(funcs[i]);\n})('gammaln gammafn factorial factorialln'.split(' '));\n\n\n(function(funcs) {\n  for (var i = 0; i < funcs.length; i++) (function(passfunc) {\n    jStat.fn[passfunc] = function() {\n      return jStat(jStat[passfunc].apply(null, arguments));\n    };\n  })(funcs[i]);\n})('randn'.split(' '));\n\n}(jStat, Math));\n(function(jStat, Math) {\n\n// generate all distribution instance methods\n(function(list) {\n  for (var i = 0; i < list.length; i++) (function(func) {\n    // distribution instance method\n    jStat[func] = function(a, b, c) {\n      if (!(this instanceof arguments.callee))\n        return new arguments.callee(a, b, c);\n      this._a = a;\n      this._b = b;\n      this._c = c;\n      return this;\n    };\n    // distribution method to be used on a jStat instance\n    jStat.fn[func] = function(a, b, c) {\n      var newthis = jStat[func](a, b, c);\n      newthis.data = this;\n      return newthis;\n    };\n    // sample instance method\n    jStat[func].prototype.sample = function(arr) {\n      var a = this._a;\n      var b = this._b;\n      var c = this._c;\n      if (arr)\n        return jStat.alter(arr, function() {\n          return jStat[func].sample(a, b, c);\n        });\n      else\n        return jStat[func].sample(a, b, c);\n    };\n    // generate the pdf, cdf and inv instance methods\n    (function(vals) {\n      for (var i = 0; i < vals.length; i++) (function(fnfunc) {\n        jStat[func].prototype[fnfunc] = function(x) {\n          var a = this._a;\n          var b = this._b;\n          var c = this._c;\n          if (!x && x !== 0)\n            x = this.data;\n          if (typeof x !== 'number') {\n            return jStat.fn.map.call(x, function(x) {\n              return jStat[func][fnfunc](x, a, b, c);\n            });\n          }\n          return jStat[func][fnfunc](x, a, b, c);\n        };\n      })(vals[i]);\n    })('pdf cdf inv'.split(' '));\n    // generate the mean, median, mode and variance instance methods\n    (function(vals) {\n      for (var i = 0; i < vals.length; i++) (function(fnfunc) {\n        jStat[func].prototype[fnfunc] = function() {\n          return jStat[func][fnfunc](this._a, this._b, this._c);\n        };\n      })(vals[i]);\n    })('mean median mode variance'.split(' '));\n  })(list[i]);\n})((\n  'beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy ' +\n  'laplace lognormal noncentralt normal pareto studentt weibull uniform ' +\n  'binomial negbin hypgeom poisson triangular tukey arcsine'\n).split(' '));\n\n\n\n// extend beta function with static methods\njStat.extend(jStat.beta, {\n  pdf: function pdf(x, alpha, beta) {\n    // PDF is zero outside the support\n    if (x > 1 || x < 0)\n      return 0;\n    // PDF is one for the uniform case\n    if (alpha == 1 && beta == 1)\n      return 1;\n\n    if (alpha < 512 && beta < 512) {\n      return (Math.pow(x, alpha - 1) * Math.pow(1 - x, beta - 1)) /\n          jStat.betafn(alpha, beta);\n    } else {\n      return Math.exp((alpha - 1) * Math.log(x) +\n                      (beta - 1) * Math.log(1 - x) -\n                      jStat.betaln(alpha, beta));\n    }\n  },\n\n  cdf: function cdf(x, alpha, beta) {\n    return (x > 1 || x < 0) ? (x > 1) * 1 : jStat.ibeta(x, alpha, beta);\n  },\n\n  inv: function inv(x, alpha, beta) {\n    return jStat.ibetainv(x, alpha, beta);\n  },\n\n  mean: function mean(alpha, beta) {\n    return alpha / (alpha + beta);\n  },\n\n  median: function median(alpha, beta) {\n    return jStat.ibetainv(0.5, alpha, beta);\n  },\n\n  mode: function mode(alpha, beta) {\n    return (alpha - 1 ) / ( alpha + beta - 2);\n  },\n\n  // return a random sample\n  sample: function sample(alpha, beta) {\n    var u = jStat.randg(alpha);\n    return u / (u + jStat.randg(beta));\n  },\n\n  variance: function variance(alpha, beta) {\n    return (alpha * beta) / (Math.pow(alpha + beta, 2) * (alpha + beta + 1));\n  }\n});\n\n// extend F function with static methods\njStat.extend(jStat.centralF, {\n  // This implementation of the pdf function avoids float overflow\n  // See the way that R calculates this value:\n  // https://svn.r-project.org/R/trunk/src/nmath/df.c\n  pdf: function pdf(x, df1, df2) {\n    var p, q, f;\n\n    if (x < 0)\n      return 0;\n\n    if (df1 <= 2) {\n      if (x === 0 && df1 < 2) {\n        return Infinity;\n      }\n      if (x === 0 && df1 === 2) {\n        return 1;\n      }\n      return (1 / jStat.betafn(df1 / 2, df2 / 2)) *\n              Math.pow(df1 / df2, df1 / 2) *\n              Math.pow(x, (df1/2) - 1) *\n              Math.pow((1 + (df1 / df2) * x), -(df1 + df2) / 2);\n    }\n\n    p = (df1 * x) / (df2 + x * df1);\n    q = df2 / (df2 + x * df1);\n    f = df1 * q / 2.0;\n    return f * jStat.binomial.pdf((df1 - 2) / 2, (df1 + df2 - 2) / 2, p);\n  },\n\n  cdf: function cdf(x, df1, df2) {\n    if (x < 0)\n      return 0;\n    return jStat.ibeta((df1 * x) / (df1 * x + df2), df1 / 2, df2 / 2);\n  },\n\n  inv: function inv(x, df1, df2) {\n    return df2 / (df1 * (1 / jStat.ibetainv(x, df1 / 2, df2 / 2) - 1));\n  },\n\n  mean: function mean(df1, df2) {\n    return (df2 > 2) ? df2 / (df2 - 2) : undefined;\n  },\n\n  mode: function mode(df1, df2) {\n    return (df1 > 2) ? (df2 * (df1 - 2)) / (df1 * (df2 + 2)) : undefined;\n  },\n\n  // return a random sample\n  sample: function sample(df1, df2) {\n    var x1 = jStat.randg(df1 / 2) * 2;\n    var x2 = jStat.randg(df2 / 2) * 2;\n    return (x1 / df1) / (x2 / df2);\n  },\n\n  variance: function variance(df1, df2) {\n    if (df2 <= 4)\n      return undefined;\n    return 2 * df2 * df2 * (df1 + df2 - 2) /\n        (df1 * (df2 - 2) * (df2 - 2) * (df2 - 4));\n  }\n});\n\n\n// extend cauchy function with static methods\njStat.extend(jStat.cauchy, {\n  pdf: function pdf(x, local, scale) {\n    if (scale < 0) { return 0; }\n\n    return (scale / (Math.pow(x - local, 2) + Math.pow(scale, 2))) / Math.PI;\n  },\n\n  cdf: function cdf(x, local, scale) {\n    return Math.atan((x - local) / scale) / Math.PI + 0.5;\n  },\n\n  inv: function(p, local, scale) {\n    return local + scale * Math.tan(Math.PI * (p - 0.5));\n  },\n\n  median: function median(local, scale) {\n    return local;\n  },\n\n  mode: function mode(local, scale) {\n    return local;\n  },\n\n  sample: function sample(local, scale) {\n    return jStat.randn() *\n        Math.sqrt(1 / (2 * jStat.randg(0.5))) * scale + local;\n  }\n});\n\n\n\n// extend chisquare function with static methods\njStat.extend(jStat.chisquare, {\n  pdf: function pdf(x, dof) {\n    if (x < 0)\n      return 0;\n    return (x === 0 && dof === 2) ? 0.5 :\n        Math.exp((dof / 2 - 1) * Math.log(x) - x / 2 - (dof / 2) *\n                 Math.log(2) - jStat.gammaln(dof / 2));\n  },\n\n  cdf: function cdf(x, dof) {\n    if (x < 0)\n      return 0;\n    return jStat.lowRegGamma(dof / 2, x / 2);\n  },\n\n  inv: function(p, dof) {\n    return 2 * jStat.gammapinv(p, 0.5 * dof);\n  },\n\n  mean : function(dof) {\n    return dof;\n  },\n\n  // TODO: this is an approximation (is there a better way?)\n  median: function median(dof) {\n    return dof * Math.pow(1 - (2 / (9 * dof)), 3);\n  },\n\n  mode: function mode(dof) {\n    return (dof - 2 > 0) ? dof - 2 : 0;\n  },\n\n  sample: function sample(dof) {\n    return jStat.randg(dof / 2) * 2;\n  },\n\n  variance: function variance(dof) {\n    return 2 * dof;\n  }\n});\n\n\n\n// extend exponential function with static methods\njStat.extend(jStat.exponential, {\n  pdf: function pdf(x, rate) {\n    return x < 0 ? 0 : rate * Math.exp(-rate * x);\n  },\n\n  cdf: function cdf(x, rate) {\n    return x < 0 ? 0 : 1 - Math.exp(-rate * x);\n  },\n\n  inv: function(p, rate) {\n    return -Math.log(1 - p) / rate;\n  },\n\n  mean : function(rate) {\n    return 1 / rate;\n  },\n\n  median: function (rate) {\n    return (1 / rate) * Math.log(2);\n  },\n\n  mode: function mode(rate) {\n    return 0;\n  },\n\n  sample: function sample(rate) {\n    return -1 / rate * Math.log(Math.random());\n  },\n\n  variance : function(rate) {\n    return Math.pow(rate, -2);\n  }\n});\n\n\n\n// extend gamma function with static methods\njStat.extend(jStat.gamma, {\n  pdf: function pdf(x, shape, scale) {\n    if (x < 0)\n      return 0;\n    return (x === 0 && shape === 1) ? 1 / scale :\n            Math.exp((shape - 1) * Math.log(x) - x / scale -\n                    jStat.gammaln(shape) - shape * Math.log(scale));\n  },\n\n  cdf: function cdf(x, shape, scale) {\n    if (x < 0)\n      return 0;\n    return jStat.lowRegGamma(shape, x / scale);\n  },\n\n  inv: function(p, shape, scale) {\n    return jStat.gammapinv(p, shape) * scale;\n  },\n\n  mean : function(shape, scale) {\n    return shape * scale;\n  },\n\n  mode: function mode(shape, scale) {\n    if(shape > 1) return (shape - 1) * scale;\n    return undefined;\n  },\n\n  sample: function sample(shape, scale) {\n    return jStat.randg(shape) * scale;\n  },\n\n  variance: function variance(shape, scale) {\n    return shape * scale * scale;\n  }\n});\n\n// extend inverse gamma function with static methods\njStat.extend(jStat.invgamma, {\n  pdf: function pdf(x, shape, scale) {\n    if (x <= 0)\n      return 0;\n    return Math.exp(-(shape + 1) * Math.log(x) - scale / x -\n                    jStat.gammaln(shape) + shape * Math.log(scale));\n  },\n\n  cdf: function cdf(x, shape, scale) {\n    if (x <= 0)\n      return 0;\n    return 1 - jStat.lowRegGamma(shape, scale / x);\n  },\n\n  inv: function(p, shape, scale) {\n    return scale / jStat.gammapinv(1 - p, shape);\n  },\n\n  mean : function(shape, scale) {\n    return (shape > 1) ? scale / (shape - 1) : undefined;\n  },\n\n  mode: function mode(shape, scale) {\n    return scale / (shape + 1);\n  },\n\n  sample: function sample(shape, scale) {\n    return scale / jStat.randg(shape);\n  },\n\n  variance: function variance(shape, scale) {\n    if (shape <= 2)\n      return undefined;\n    return scale * scale / ((shape - 1) * (shape - 1) * (shape - 2));\n  }\n});\n\n\n// extend kumaraswamy function with static methods\njStat.extend(jStat.kumaraswamy, {\n  pdf: function pdf(x, alpha, beta) {\n    if (x === 0 && alpha === 1)\n      return beta;\n    else if (x === 1 && beta === 1)\n      return alpha;\n    return Math.exp(Math.log(alpha) + Math.log(beta) + (alpha - 1) *\n                    Math.log(x) + (beta - 1) *\n                    Math.log(1 - Math.pow(x, alpha)));\n  },\n\n  cdf: function cdf(x, alpha, beta) {\n    if (x < 0)\n      return 0;\n    else if (x > 1)\n      return 1;\n    return (1 - Math.pow(1 - Math.pow(x, alpha), beta));\n  },\n\n  inv: function inv(p, alpha, beta) {\n    return Math.pow(1 - Math.pow(1 - p, 1 / beta), 1 / alpha);\n  },\n\n  mean : function(alpha, beta) {\n    return (beta * jStat.gammafn(1 + 1 / alpha) *\n            jStat.gammafn(beta)) / (jStat.gammafn(1 + 1 / alpha + beta));\n  },\n\n  median: function median(alpha, beta) {\n    return Math.pow(1 - Math.pow(2, -1 / beta), 1 / alpha);\n  },\n\n  mode: function mode(alpha, beta) {\n    if (!(alpha >= 1 && beta >= 1 && (alpha !== 1 && beta !== 1)))\n      return undefined;\n    return Math.pow((alpha - 1) / (alpha * beta - 1), 1 / alpha);\n  },\n\n  variance: function variance(alpha, beta) {\n    throw new Error('variance not yet implemented');\n    // TODO: complete this\n  }\n});\n\n\n\n// extend lognormal function with static methods\njStat.extend(jStat.lognormal, {\n  pdf: function pdf(x, mu, sigma) {\n    if (x <= 0)\n      return 0;\n    return Math.exp(-Math.log(x) - 0.5 * Math.log(2 * Math.PI) -\n                    Math.log(sigma) - Math.pow(Math.log(x) - mu, 2) /\n                    (2 * sigma * sigma));\n  },\n\n  cdf: function cdf(x, mu, sigma) {\n    if (x < 0)\n      return 0;\n    return 0.5 +\n        (0.5 * jStat.erf((Math.log(x) - mu) / Math.sqrt(2 * sigma * sigma)));\n  },\n\n  inv: function(p, mu, sigma) {\n    return Math.exp(-1.41421356237309505 * sigma * jStat.erfcinv(2 * p) + mu);\n  },\n\n  mean: function mean(mu, sigma) {\n    return Math.exp(mu + sigma * sigma / 2);\n  },\n\n  median: function median(mu, sigma) {\n    return Math.exp(mu);\n  },\n\n  mode: function mode(mu, sigma) {\n    return Math.exp(mu - sigma * sigma);\n  },\n\n  sample: function sample(mu, sigma) {\n    return Math.exp(jStat.randn() * sigma + mu);\n  },\n\n  variance: function variance(mu, sigma) {\n    return (Math.exp(sigma * sigma) - 1) * Math.exp(2 * mu + sigma * sigma);\n  }\n});\n\n\n\n// extend noncentralt function with static methods\njStat.extend(jStat.noncentralt, {\n  pdf: function pdf(x, dof, ncp) {\n    var tol = 1e-14;\n    if (Math.abs(ncp) < tol)  // ncp approx 0; use student-t\n      return jStat.studentt.pdf(x, dof)\n\n    if (Math.abs(x) < tol) {  // different formula for x == 0\n      return Math.exp(jStat.gammaln((dof + 1) / 2) - ncp * ncp / 2 -\n                      0.5 * Math.log(Math.PI * dof) - jStat.gammaln(dof / 2));\n    }\n\n    // formula for x != 0\n    return dof / x *\n        (jStat.noncentralt.cdf(x * Math.sqrt(1 + 2 / dof), dof+2, ncp) -\n         jStat.noncentralt.cdf(x, dof, ncp));\n  },\n\n  cdf: function cdf(x, dof, ncp) {\n    var tol = 1e-14;\n    var min_iterations = 200;\n\n    if (Math.abs(ncp) < tol)  // ncp approx 0; use student-t\n      return jStat.studentt.cdf(x, dof);\n\n    // turn negative x into positive and flip result afterwards\n    var flip = false;\n    if (x < 0) {\n      flip = true;\n      ncp = -ncp;\n    }\n\n    var prob = jStat.normal.cdf(-ncp, 0, 1);\n    var value = tol + 1;\n    // use value at last two steps to determine convergence\n    var lastvalue = value;\n    var y = x * x / (x * x + dof);\n    var j = 0;\n    var p = Math.exp(-ncp * ncp / 2);\n    var q = Math.exp(-ncp * ncp / 2 - 0.5 * Math.log(2) -\n                     jStat.gammaln(3 / 2)) * ncp;\n    while (j < min_iterations || lastvalue > tol || value > tol) {\n      lastvalue = value;\n      if (j > 0) {\n        p *= (ncp * ncp) / (2 * j);\n        q *= (ncp * ncp) / (2 * (j + 1 / 2));\n      }\n      value = p * jStat.beta.cdf(y, j + 0.5, dof / 2) +\n          q * jStat.beta.cdf(y, j+1, dof/2);\n      prob += 0.5 * value;\n      j++;\n    }\n\n    return flip ? (1 - prob) : prob;\n  }\n});\n\n\n// extend normal function with static methods\njStat.extend(jStat.normal, {\n  pdf: function pdf(x, mean, std) {\n    return Math.exp(-0.5 * Math.log(2 * Math.PI) -\n                    Math.log(std) - Math.pow(x - mean, 2) / (2 * std * std));\n  },\n\n  cdf: function cdf(x, mean, std) {\n    return 0.5 * (1 + jStat.erf((x - mean) / Math.sqrt(2 * std * std)));\n  },\n\n  inv: function(p, mean, std) {\n    return -1.41421356237309505 * std * jStat.erfcinv(2 * p) + mean;\n  },\n\n  mean : function(mean, std) {\n    return mean;\n  },\n\n  median: function median(mean, std) {\n    return mean;\n  },\n\n  mode: function (mean, std) {\n    return mean;\n  },\n\n  sample: function sample(mean, std) {\n    return jStat.randn() * std + mean;\n  },\n\n  variance : function(mean, std) {\n    return std * std;\n  }\n});\n\n\n\n// extend pareto function with static methods\njStat.extend(jStat.pareto, {\n  pdf: function pdf(x, scale, shape) {\n    if (x < scale)\n      return 0;\n    return (shape * Math.pow(scale, shape)) / Math.pow(x, shape + 1);\n  },\n\n  cdf: function cdf(x, scale, shape) {\n    if (x < scale)\n      return 0;\n    return 1 - Math.pow(scale / x, shape);\n  },\n\n  inv: function inv(p, scale, shape) {\n    return scale / Math.pow(1 - p, 1 / shape);\n  },\n\n  mean: function mean(scale, shape) {\n    if (shape <= 1)\n      return undefined;\n    return (shape * Math.pow(scale, shape)) / (shape - 1);\n  },\n\n  median: function median(scale, shape) {\n    return scale * (shape * Math.SQRT2);\n  },\n\n  mode: function mode(scale, shape) {\n    return scale;\n  },\n\n  variance : function(scale, shape) {\n    if (shape <= 2)\n      return undefined;\n    return (scale*scale * shape) / (Math.pow(shape - 1, 2) * (shape - 2));\n  }\n});\n\n\n\n// extend studentt function with static methods\njStat.extend(jStat.studentt, {\n  pdf: function pdf(x, dof) {\n    dof = dof > 1e100 ? 1e100 : dof;\n    return (1/(Math.sqrt(dof) * jStat.betafn(0.5, dof/2))) *\n        Math.pow(1 + ((x * x) / dof), -((dof + 1) / 2));\n  },\n\n  cdf: function cdf(x, dof) {\n    var dof2 = dof / 2;\n    return jStat.ibeta((x + Math.sqrt(x * x + dof)) /\n                       (2 * Math.sqrt(x * x + dof)), dof2, dof2);\n  },\n\n  inv: function(p, dof) {\n    var x = jStat.ibetainv(2 * Math.min(p, 1 - p), 0.5 * dof, 0.5);\n    x = Math.sqrt(dof * (1 - x) / x);\n    return (p > 0.5) ? x : -x;\n  },\n\n  mean: function mean(dof) {\n    return (dof > 1) ? 0 : undefined;\n  },\n\n  median: function median(dof) {\n    return 0;\n  },\n\n  mode: function mode(dof) {\n    return 0;\n  },\n\n  sample: function sample(dof) {\n    return jStat.randn() * Math.sqrt(dof / (2 * jStat.randg(dof / 2)));\n  },\n\n  variance: function variance(dof) {\n    return (dof  > 2) ? dof / (dof - 2) : (dof > 1) ? Infinity : undefined;\n  }\n});\n\n\n\n// extend weibull function with static methods\njStat.extend(jStat.weibull, {\n  pdf: function pdf(x, scale, shape) {\n    if (x < 0 || scale < 0 || shape < 0)\n      return 0;\n    return (shape / scale) * Math.pow((x / scale), (shape - 1)) *\n        Math.exp(-(Math.pow((x / scale), shape)));\n  },\n\n  cdf: function cdf(x, scale, shape) {\n    return x < 0 ? 0 : 1 - Math.exp(-Math.pow((x / scale), shape));\n  },\n\n  inv: function(p, scale, shape) {\n    return scale * Math.pow(-Math.log(1 - p), 1 / shape);\n  },\n\n  mean : function(scale, shape) {\n    return scale * jStat.gammafn(1 + 1 / shape);\n  },\n\n  median: function median(scale, shape) {\n    return scale * Math.pow(Math.log(2), 1 / shape);\n  },\n\n  mode: function mode(scale, shape) {\n    if (shape <= 1)\n      return 0;\n    return scale * Math.pow((shape - 1) / shape, 1 / shape);\n  },\n\n  sample: function sample(scale, shape) {\n    return scale * Math.pow(-Math.log(Math.random()), 1 / shape);\n  },\n\n  variance: function variance(scale, shape) {\n    return scale * scale * jStat.gammafn(1 + 2 / shape) -\n        Math.pow(jStat.weibull.mean(scale, shape), 2);\n  }\n});\n\n\n\n// extend uniform function with static methods\njStat.extend(jStat.uniform, {\n  pdf: function pdf(x, a, b) {\n    return (x < a || x > b) ? 0 : 1 / (b - a);\n  },\n\n  cdf: function cdf(x, a, b) {\n    if (x < a)\n      return 0;\n    else if (x < b)\n      return (x - a) / (b - a);\n    return 1;\n  },\n\n  inv: function(p, a, b) {\n    return a + (p * (b - a));\n  },\n\n  mean: function mean(a, b) {\n    return 0.5 * (a + b);\n  },\n\n  median: function median(a, b) {\n    return jStat.mean(a, b);\n  },\n\n  mode: function mode(a, b) {\n    throw new Error('mode is not yet implemented');\n  },\n\n  sample: function sample(a, b) {\n    return (a / 2 + b / 2) + (b / 2 - a / 2) * (2 * Math.random() - 1);\n  },\n\n  variance: function variance(a, b) {\n    return Math.pow(b - a, 2) / 12;\n  }\n});\n\n\n\n// extend uniform function with static methods\njStat.extend(jStat.binomial, {\n  pdf: function pdf(k, n, p) {\n    return (p === 0 || p === 1) ?\n      ((n * p) === k ? 1 : 0) :\n      jStat.combination(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);\n  },\n\n  cdf: function cdf(x, n, p) {\n    var binomarr = [],\n    k = 0;\n    if (x < 0) {\n      return 0;\n    }\n    if (x < n) {\n      for (; k <= x; k++) {\n        binomarr[ k ] = jStat.binomial.pdf(k, n, p);\n      }\n      return jStat.sum(binomarr);\n    }\n    return 1;\n  }\n});\n\n\n\n// extend uniform function with static methods\njStat.extend(jStat.negbin, {\n  pdf: function pdf(k, r, p) {\n    if (k !== k >>> 0)\n      return false;\n    if (k < 0)\n      return 0;\n    return jStat.combination(k + r - 1, r - 1) *\n        Math.pow(1 - p, k) * Math.pow(p, r);\n  },\n\n  cdf: function cdf(x, r, p) {\n    var sum = 0,\n    k = 0;\n    if (x < 0) return 0;\n    for (; k <= x; k++) {\n      sum += jStat.negbin.pdf(k, r, p);\n    }\n    return sum;\n  }\n});\n\n\n\n// extend uniform function with static methods\njStat.extend(jStat.hypgeom, {\n  pdf: function pdf(k, N, m, n) {\n    // Hypergeometric PDF.\n\n    // A simplification of the CDF algorithm below.\n\n    // k = number of successes drawn\n    // N = population size\n    // m = number of successes in population\n    // n = number of items drawn from population\n\n    if(k !== k | 0) {\n      return false;\n    } else if(k < 0 || k < m - (N - n)) {\n      // It's impossible to have this few successes drawn.\n      return 0;\n    } else if(k > n || k > m) {\n      // It's impossible to have this many successes drawn.\n      return 0;\n    } else if (m * 2 > N) {\n      // More than half the population is successes.\n\n      if(n * 2 > N) {\n        // More than half the population is sampled.\n\n        return jStat.hypgeom.pdf(N - m - n + k, N, N - m, N - n)\n      } else {\n        // Half or less of the population is sampled.\n\n        return jStat.hypgeom.pdf(n - k, N, N - m, n);\n      }\n\n    } else if(n * 2 > N) {\n      // Half or less is successes.\n\n      return jStat.hypgeom.pdf(m - k, N, m, N - n);\n\n    } else if(m < n) {\n      // We want to have the number of things sampled to be less than the\n      // successes available. So swap the definitions of successful and sampled.\n      return jStat.hypgeom.pdf(k, N, n, m);\n    } else {\n      // If we get here, half or less of the population was sampled, half or\n      // less of it was successes, and we had fewer sampled things than\n      // successes. Now we can do this complicated iterative algorithm in an\n      // efficient way.\n\n      // The basic premise of the algorithm is that we partially normalize our\n      // intermediate product to keep it in a numerically good region, and then\n      // finish the normalization at the end.\n\n      // This variable holds the scaled probability of the current number of\n      // successes.\n      var scaledPDF = 1;\n\n      // This keeps track of how much we have normalized.\n      var samplesDone = 0;\n\n      for(var i = 0; i < k; i++) {\n        // For every possible number of successes up to that observed...\n\n        while(scaledPDF > 1 && samplesDone < n) {\n          // Intermediate result is growing too big. Apply some of the\n          // normalization to shrink everything.\n\n          scaledPDF *= 1 - (m / (N - samplesDone));\n\n          // Say we've normalized by this sample already.\n          samplesDone++;\n        }\n\n        // Work out the partially-normalized hypergeometric PDF for the next\n        // number of successes\n        scaledPDF *= (n - i) * (m - i) / ((i + 1) * (N - m - n + i + 1));\n      }\n\n      for(; samplesDone < n; samplesDone++) {\n        // Apply all the rest of the normalization\n        scaledPDF *= 1 - (m / (N - samplesDone));\n      }\n\n      // Bound answer sanely before returning.\n      return Math.min(1, Math.max(0, scaledPDF));\n    }\n  },\n\n  cdf: function cdf(x, N, m, n) {\n    // Hypergeometric CDF.\n\n    // This algorithm is due to Prof. Thomas S. Ferguson, <tom@math.ucla.edu>,\n    // and comes from his hypergeometric test calculator at\n    // <http://www.math.ucla.edu/~tom/distributions/Hypergeometric.html>.\n\n    // x = number of successes drawn\n    // N = population size\n    // m = number of successes in population\n    // n = number of items drawn from population\n\n    if(x < 0 || x < m - (N - n)) {\n      // It's impossible to have this few successes drawn or fewer.\n      return 0;\n    } else if(x >= n || x >= m) {\n      // We will always have this many successes or fewer.\n      return 1;\n    } else if (m * 2 > N) {\n      // More than half the population is successes.\n\n      if(n * 2 > N) {\n        // More than half the population is sampled.\n\n        return jStat.hypgeom.cdf(N - m - n + x, N, N - m, N - n)\n      } else {\n        // Half or less of the population is sampled.\n\n        return 1 - jStat.hypgeom.cdf(n - x - 1, N, N - m, n);\n      }\n\n    } else if(n * 2 > N) {\n      // Half or less is successes.\n\n      return 1 - jStat.hypgeom.cdf(m - x - 1, N, m, N - n);\n\n    } else if(m < n) {\n      // We want to have the number of things sampled to be less than the\n      // successes available. So swap the definitions of successful and sampled.\n      return jStat.hypgeom.cdf(x, N, n, m);\n    } else {\n      // If we get here, half or less of the population was sampled, half or\n      // less of it was successes, and we had fewer sampled things than\n      // successes. Now we can do this complicated iterative algorithm in an\n      // efficient way.\n\n      // The basic premise of the algorithm is that we partially normalize our\n      // intermediate sum to keep it in a numerically good region, and then\n      // finish the normalization at the end.\n\n      // Holds the intermediate, scaled total CDF.\n      var scaledCDF = 1;\n\n      // This variable holds the scaled probability of the current number of\n      // successes.\n      var scaledPDF = 1;\n\n      // This keeps track of how much we have normalized.\n      var samplesDone = 0;\n\n      for(var i = 0; i < x; i++) {\n        // For every possible number of successes up to that observed...\n\n        while(scaledCDF > 1 && samplesDone < n) {\n          // Intermediate result is growing too big. Apply some of the\n          // normalization to shrink everything.\n\n          var factor = 1 - (m / (N - samplesDone));\n\n          scaledPDF *= factor;\n          scaledCDF *= factor;\n\n          // Say we've normalized by this sample already.\n          samplesDone++;\n        }\n\n        // Work out the partially-normalized hypergeometric PDF for the next\n        // number of successes\n        scaledPDF *= (n - i) * (m - i) / ((i + 1) * (N - m - n + i + 1));\n\n        // Add to the CDF answer.\n        scaledCDF += scaledPDF;\n      }\n\n      for(; samplesDone < n; samplesDone++) {\n        // Apply all the rest of the normalization\n        scaledCDF *= 1 - (m / (N - samplesDone));\n      }\n\n      // Bound answer sanely before returning.\n      return Math.min(1, Math.max(0, scaledCDF));\n    }\n  }\n});\n\n\n\n// extend uniform function with static methods\njStat.extend(jStat.poisson, {\n  pdf: function pdf(k, l) {\n    if (l < 0 || (k % 1) !== 0 || k < 0) {\n      return 0;\n    }\n\n    return Math.pow(l, k) * Math.exp(-l) / jStat.factorial(k);\n  },\n\n  cdf: function cdf(x, l) {\n    var sumarr = [],\n    k = 0;\n    if (x < 0) return 0;\n    for (; k <= x; k++) {\n      sumarr.push(jStat.poisson.pdf(k, l));\n    }\n    return jStat.sum(sumarr);\n  },\n\n  mean : function(l) {\n    return l;\n  },\n\n  variance : function(l) {\n    return l;\n  },\n\n  sample: function sample(l) {\n    var p = 1, k = 0, L = Math.exp(-l);\n    do {\n      k++;\n      p *= Math.random();\n    } while (p > L);\n    return k - 1;\n  }\n});\n\n// extend triangular function with static methods\njStat.extend(jStat.triangular, {\n  pdf: function pdf(x, a, b, c) {\n    if (b <= a || c < a || c > b) {\n      return NaN;\n    } else {\n      if (x < a || x > b) {\n        return 0;\n      } else if (x < c) {\n          return (2 * (x - a)) / ((b - a) * (c - a));\n      } else if (x === c) {\n          return (2 / (b - a));\n      } else { // x > c\n          return (2 * (b - x)) / ((b - a) * (b - c));\n      }\n    }\n  },\n\n  cdf: function cdf(x, a, b, c) {\n    if (b <= a || c < a || c > b)\n      return NaN;\n    if (x <= a)\n      return 0;\n    else if (x >= b)\n      return 1;\n    if (x <= c)\n      return Math.pow(x - a, 2) / ((b - a) * (c - a));\n    else // x > c\n      return 1 - Math.pow(b - x, 2) / ((b - a) * (b - c));\n  },\n\n  inv: function inv(p, a, b, c) {\n    if (b <= a || c < a || c > b) {\n      return NaN;\n    } else {\n      if (p <= ((c - a) / (b - a))) {\n        return a + (b - a) * Math.sqrt(p * ((c - a) / (b - a)));\n      } else { // p > ((c - a) / (b - a))\n        return a + (b - a) * (1 - Math.sqrt((1 - p) * (1 - ((c - a) / (b - a)))));\n      }\n    }\n  },\n\n  mean: function mean(a, b, c) {\n    return (a + b + c) / 3;\n  },\n\n  median: function median(a, b, c) {\n    if (c <= (a + b) / 2) {\n      return b - Math.sqrt((b - a) * (b - c)) / Math.sqrt(2);\n    } else if (c > (a + b) / 2) {\n      return a + Math.sqrt((b - a) * (c - a)) / Math.sqrt(2);\n    }\n  },\n\n  mode: function mode(a, b, c) {\n    return c;\n  },\n\n  sample: function sample(a, b, c) {\n    var u = Math.random();\n    if (u < ((c - a) / (b - a)))\n      return a + Math.sqrt(u * (b - a) * (c - a))\n    return b - Math.sqrt((1 - u) * (b - a) * (b - c));\n  },\n\n  variance: function variance(a, b, c) {\n    return (a * a + b * b + c * c - a * b - a * c - b * c) / 18;\n  }\n});\n\n\n// extend arcsine function with static methods\njStat.extend(jStat.arcsine, {\n  pdf: function pdf(x, a, b) {\n    if (b <= a) return NaN;\n\n    return (x <= a || x >= b) ? 0 :\n      (2 / Math.PI) *\n        Math.pow(Math.pow(b - a, 2) -\n                  Math.pow(2 * x - a - b, 2), -0.5);\n  },\n\n  cdf: function cdf(x, a, b) {\n    if (x < a)\n      return 0;\n    else if (x < b)\n      return (2 / Math.PI) * Math.asin(Math.sqrt((x - a)/(b - a)));\n    return 1;\n  },\n\n  inv: function(p, a, b) {\n    return a + (0.5 - 0.5 * Math.cos(Math.PI * p)) * (b - a);\n  },\n\n  mean: function mean(a, b) {\n    if (b <= a) return NaN;\n    return (a + b) / 2;\n  },\n\n  median: function median(a, b) {\n    if (b <= a) return NaN;\n    return (a + b) / 2;\n  },\n\n  mode: function mode(a, b) {\n    throw new Error('mode is not yet implemented');\n  },\n\n  sample: function sample(a, b) {\n    return ((a + b) / 2) + ((b - a) / 2) *\n      Math.sin(2 * Math.PI * jStat.uniform.sample(0, 1));\n  },\n\n  variance: function variance(a, b) {\n    if (b <= a) return NaN;\n    return Math.pow(b - a, 2) / 8;\n  }\n});\n\n\nfunction laplaceSign(x) { return x / Math.abs(x); }\n\njStat.extend(jStat.laplace, {\n  pdf: function pdf(x, mu, b) {\n    return (b <= 0) ? 0 : (Math.exp(-Math.abs(x - mu) / b)) / (2 * b);\n  },\n\n  cdf: function cdf(x, mu, b) {\n    if (b <= 0) { return 0; }\n\n    if(x < mu) {\n      return 0.5 * Math.exp((x - mu) / b);\n    } else {\n      return 1 - 0.5 * Math.exp(- (x - mu) / b);\n    }\n  },\n\n  mean: function(mu, b) {\n    return mu;\n  },\n\n  median: function(mu, b) {\n    return mu;\n  },\n\n  mode: function(mu, b) {\n    return mu;\n  },\n\n  variance: function(mu, b) {\n    return 2 * b * b;\n  },\n\n  sample: function sample(mu, b) {\n    var u = Math.random() - 0.5;\n\n    return mu - (b * laplaceSign(u) * Math.log(1 - (2 * Math.abs(u))));\n  }\n});\n\nfunction tukeyWprob(w, rr, cc) {\n  var nleg = 12;\n  var ihalf = 6;\n\n  var C1 = -30;\n  var C2 = -50;\n  var C3 = 60;\n  var bb   = 8;\n  var wlar = 3;\n  var wincr1 = 2;\n  var wincr2 = 3;\n  var xleg = [\n    0.981560634246719250690549090149,\n    0.904117256370474856678465866119,\n    0.769902674194304687036893833213,\n    0.587317954286617447296702418941,\n    0.367831498998180193752691536644,\n    0.125233408511468915472441369464\n  ];\n  var aleg = [\n    0.047175336386511827194615961485,\n    0.106939325995318430960254718194,\n    0.160078328543346226334652529543,\n    0.203167426723065921749064455810,\n    0.233492536538354808760849898925,\n    0.249147045813402785000562436043\n  ];\n\n  var qsqz = w * 0.5;\n\n  // if w >= 16 then the integral lower bound (occurs for c=20)\n  // is 0.99999999999995 so return a value of 1.\n\n  if (qsqz >= bb)\n    return 1.0;\n\n  // find (f(w/2) - 1) ^ cc\n  // (first term in integral of hartley's form).\n\n  var pr_w = 2 * jStat.normal.cdf(qsqz, 0, 1, 1, 0) - 1; // erf(qsqz / M_SQRT2)\n  // if pr_w ^ cc < 2e-22 then set pr_w = 0\n  if (pr_w >= Math.exp(C2 / cc))\n    pr_w = Math.pow(pr_w, cc);\n  else\n    pr_w = 0.0;\n\n  // if w is large then the second component of the\n  // integral is small, so fewer intervals are needed.\n\n  var wincr;\n  if (w > wlar)\n    wincr = wincr1;\n  else\n    wincr = wincr2;\n\n  // find the integral of second term of hartley's form\n  // for the integral of the range for equal-length\n  // intervals using legendre quadrature.  limits of\n  // integration are from (w/2, 8).  two or three\n  // equal-length intervals are used.\n\n  // blb and bub are lower and upper limits of integration.\n\n  var blb = qsqz;\n  var binc = (bb - qsqz) / wincr;\n  var bub = blb + binc;\n  var einsum = 0.0;\n\n  // integrate over each interval\n\n  var cc1 = cc - 1.0;\n  for (var wi = 1; wi <= wincr; wi++) {\n    var elsum = 0.0;\n    var a = 0.5 * (bub + blb);\n\n    // legendre quadrature with order = nleg\n\n    var b = 0.5 * (bub - blb);\n\n    for (var jj = 1; jj <= nleg; jj++) {\n      var j, xx;\n      if (ihalf < jj) {\n        j = (nleg - jj) + 1;\n        xx = xleg[j-1];\n      } else {\n        j = jj;\n        xx = -xleg[j-1];\n      }\n      var c = b * xx;\n      var ac = a + c;\n\n      // if exp(-qexpo/2) < 9e-14,\n      // then doesn't contribute to integral\n\n      var qexpo = ac * ac;\n      if (qexpo > C3)\n        break;\n\n      var pplus = 2 * jStat.normal.cdf(ac, 0, 1, 1, 0);\n      var pminus= 2 * jStat.normal.cdf(ac, w, 1, 1, 0);\n\n      // if rinsum ^ (cc-1) < 9e-14,\n      // then doesn't contribute to integral\n\n      var rinsum = (pplus * 0.5) - (pminus * 0.5);\n      if (rinsum >= Math.exp(C1 / cc1)) {\n        rinsum = (aleg[j-1] * Math.exp(-(0.5 * qexpo))) * Math.pow(rinsum, cc1);\n        elsum += rinsum;\n      }\n    }\n    elsum *= (((2.0 * b) * cc) / Math.sqrt(2 * Math.PI));\n    einsum += elsum;\n    blb = bub;\n    bub += binc;\n  }\n\n  // if pr_w ^ rr < 9e-14, then return 0\n  pr_w += einsum;\n  if (pr_w <= Math.exp(C1 / rr))\n    return 0;\n\n  pr_w = Math.pow(pr_w, rr);\n  if (pr_w >= 1) // 1 was iMax was eps\n    return 1;\n  return pr_w;\n}\n\nfunction tukeyQinv(p, c, v) {\n  var p0 = 0.322232421088;\n  var q0 = 0.993484626060e-01;\n  var p1 = -1.0;\n  var q1 = 0.588581570495;\n  var p2 = -0.342242088547;\n  var q2 = 0.531103462366;\n  var p3 = -0.204231210125;\n  var q3 = 0.103537752850;\n  var p4 = -0.453642210148e-04;\n  var q4 = 0.38560700634e-02;\n  var c1 = 0.8832;\n  var c2 = 0.2368;\n  var c3 = 1.214;\n  var c4 = 1.208;\n  var c5 = 1.4142;\n  var vmax = 120.0;\n\n  var ps = 0.5 - 0.5 * p;\n  var yi = Math.sqrt(Math.log(1.0 / (ps * ps)));\n  var t = yi + (((( yi * p4 + p3) * yi + p2) * yi + p1) * yi + p0)\n     / (((( yi * q4 + q3) * yi + q2) * yi + q1) * yi + q0);\n  if (v < vmax) t += (t * t * t + t) / v / 4.0;\n  var q = c1 - c2 * t;\n  if (v < vmax) q += -c3 / v + c4 * t / v;\n  return t * (q * Math.log(c - 1.0) + c5);\n}\n\njStat.extend(jStat.tukey, {\n  cdf: function cdf(q, nmeans, df) {\n    // Identical implementation as the R ptukey() function as of commit 68947\n    var rr = 1;\n    var cc = nmeans;\n\n    var nlegq = 16;\n    var ihalfq = 8;\n\n    var eps1 = -30.0;\n    var eps2 = 1.0e-14;\n    var dhaf  = 100.0;\n    var dquar = 800.0;\n    var deigh = 5000.0;\n    var dlarg = 25000.0;\n    var ulen1 = 1.0;\n    var ulen2 = 0.5;\n    var ulen3 = 0.25;\n    var ulen4 = 0.125;\n    var xlegq = [\n      0.989400934991649932596154173450,\n      0.944575023073232576077988415535,\n      0.865631202387831743880467897712,\n      0.755404408355003033895101194847,\n      0.617876244402643748446671764049,\n      0.458016777657227386342419442984,\n      0.281603550779258913230460501460,\n      0.950125098376374401853193354250e-1\n    ];\n    var alegq = [\n      0.271524594117540948517805724560e-1,\n      0.622535239386478928628438369944e-1,\n      0.951585116824927848099251076022e-1,\n      0.124628971255533872052476282192,\n      0.149595988816576732081501730547,\n      0.169156519395002538189312079030,\n      0.182603415044923588866763667969,\n      0.189450610455068496285396723208\n    ];\n\n    if (q <= 0)\n      return 0;\n\n    // df must be > 1\n    // there must be at least two values\n\n    if (df < 2 || rr < 1 || cc < 2) return NaN;\n\n    if (!Number.isFinite(q))\n      return 1;\n\n    if (df > dlarg)\n      return tukeyWprob(q, rr, cc);\n\n    // calculate leading constant\n\n    var f2 = df * 0.5;\n    var f2lf = ((f2 * Math.log(df)) - (df * Math.log(2))) - jStat.gammaln(f2);\n    var f21 = f2 - 1.0;\n\n    // integral is divided into unit, half-unit, quarter-unit, or\n    // eighth-unit length intervals depending on the value of the\n    // degrees of freedom.\n\n    var ff4 = df * 0.25;\n    var ulen;\n    if      (df <= dhaf)  ulen = ulen1;\n    else if (df <= dquar) ulen = ulen2;\n    else if (df <= deigh) ulen = ulen3;\n    else                  ulen = ulen4;\n\n    f2lf += Math.log(ulen);\n\n    // integrate over each subinterval\n\n    var ans = 0.0;\n\n    for (var i = 1; i <= 50; i++) {\n      var otsum = 0.0;\n\n      // legendre quadrature with order = nlegq\n      // nodes (stored in xlegq) are symmetric around zero.\n\n      var twa1 = (2 * i - 1) * ulen;\n\n      for (var jj = 1; jj <= nlegq; jj++) {\n        var j, t1;\n        if (ihalfq < jj) {\n          j = jj - ihalfq - 1;\n          t1 = (f2lf + (f21 * Math.log(twa1 + (xlegq[j] * ulen))))\n              - (((xlegq[j] * ulen) + twa1) * ff4);\n        } else {\n          j = jj - 1;\n          t1 = (f2lf + (f21 * Math.log(twa1 - (xlegq[j] * ulen))))\n              + (((xlegq[j] * ulen) - twa1) * ff4);\n        }\n\n        // if exp(t1) < 9e-14, then doesn't contribute to integral\n        var qsqz;\n        if (t1 >= eps1) {\n          if (ihalfq < jj) {\n            qsqz = q * Math.sqrt(((xlegq[j] * ulen) + twa1) * 0.5);\n          } else {\n            qsqz = q * Math.sqrt(((-(xlegq[j] * ulen)) + twa1) * 0.5);\n          }\n\n          // call wprob to find integral of range portion\n\n          var wprb = tukeyWprob(qsqz, rr, cc);\n          var rotsum = (wprb * alegq[j]) * Math.exp(t1);\n          otsum += rotsum;\n        }\n        // end legendre integral for interval i\n        // L200:\n      }\n\n      // if integral for interval i < 1e-14, then stop.\n      // However, in order to avoid small area under left tail,\n      // at least  1 / ulen  intervals are calculated.\n      if (i * ulen >= 1.0 && otsum <= eps2)\n        break;\n\n      // end of interval i\n      // L330:\n\n      ans += otsum;\n    }\n\n    if (otsum > eps2) { // not converged\n      throw new Error('tukey.cdf failed to converge');\n    }\n    if (ans > 1)\n      ans = 1;\n    return ans;\n  },\n\n  inv: function(p, nmeans, df) {\n    // Identical implementation as the R qtukey() function as of commit 68947\n    var rr = 1;\n    var cc = nmeans;\n\n    var eps = 0.0001;\n    var maxiter = 50;\n\n    // df must be > 1 ; there must be at least two values\n    if (df < 2 || rr < 1 || cc < 2) return NaN;\n\n    if (p < 0 || p > 1) return NaN;\n    if (p === 0) return 0;\n    if (p === 1) return Infinity;\n\n    // Initial value\n\n    var x0 = tukeyQinv(p, cc, df);\n\n    // Find prob(value < x0)\n\n    var valx0 = jStat.tukey.cdf(x0, nmeans, df) - p;\n\n    // Find the second iterate and prob(value < x1).\n    // If the first iterate has probability value\n    // exceeding p then second iterate is 1 less than\n    // first iterate; otherwise it is 1 greater.\n\n    var x1;\n    if (valx0 > 0.0)\n      x1 = Math.max(0.0, x0 - 1.0);\n    else\n      x1 = x0 + 1.0;\n    var valx1 = jStat.tukey.cdf(x1, nmeans, df) - p;\n\n    // Find new iterate\n\n    var ans;\n    for(var iter = 1; iter < maxiter; iter++) {\n      ans = x1 - ((valx1 * (x1 - x0)) / (valx1 - valx0));\n      valx0 = valx1;\n\n      // New iterate must be >= 0\n\n      x0 = x1;\n      if (ans < 0.0) {\n        ans = 0.0;\n        valx1 = -p;\n      }\n      // Find prob(value < new iterate)\n\n      valx1 = jStat.tukey.cdf(ans, nmeans, df) - p;\n      x1 = ans;\n\n      // If the difference between two successive\n      // iterates is less than eps, stop\n\n      var xabs = Math.abs(x1 - x0);\n      if (xabs < eps)\n        return ans;\n    }\n\n    throw new Error('tukey.inv failed to converge');\n  }\n});\n\n}(jStat, Math));\n/* Provides functions for the solution of linear system of equations, integration, extrapolation,\n * interpolation, eigenvalue problems, differential equations and PCA analysis. */\n\n(function(jStat, Math) {\n\nvar push = Array.prototype.push;\nvar isArray = jStat.utils.isArray;\n\nfunction isUsable(arg) {\n  return isArray(arg) || arg instanceof jStat;\n}\n\njStat.extend({\n\n  // add a vector/matrix to a vector/matrix or scalar\n  add: function add(arr, arg) {\n    // check if arg is a vector or scalar\n    if (isUsable(arg)) {\n      if (!isUsable(arg[0])) arg = [ arg ];\n      return jStat.map(arr, function(value, row, col) {\n        return value + arg[row][col];\n      });\n    }\n    return jStat.map(arr, function(value) { return value + arg; });\n  },\n\n  // subtract a vector or scalar from the vector\n  subtract: function subtract(arr, arg) {\n    // check if arg is a vector or scalar\n    if (isUsable(arg)) {\n      if (!isUsable(arg[0])) arg = [ arg ];\n      return jStat.map(arr, function(value, row, col) {\n        return value - arg[row][col] || 0;\n      });\n    }\n    return jStat.map(arr, function(value) { return value - arg; });\n  },\n\n  // matrix division\n  divide: function divide(arr, arg) {\n    if (isUsable(arg)) {\n      if (!isUsable(arg[0])) arg = [ arg ];\n      return jStat.multiply(arr, jStat.inv(arg));\n    }\n    return jStat.map(arr, function(value) { return value / arg; });\n  },\n\n  // matrix multiplication\n  multiply: function multiply(arr, arg) {\n    var row, col, nrescols, sum, nrow, ncol, res, rescols;\n    // eg: arr = 2 arg = 3 -> 6 for res[0][0] statement closure\n    if (arr.length === undefined && arg.length === undefined) {\n      return arr * arg;\n    }\n    nrow = arr.length,\n    ncol = arr[0].length,\n    res = jStat.zeros(nrow, nrescols = (isUsable(arg)) ? arg[0].length : ncol),\n    rescols = 0;\n    if (isUsable(arg)) {\n      for (; rescols < nrescols; rescols++) {\n        for (row = 0; row < nrow; row++) {\n          sum = 0;\n          for (col = 0; col < ncol; col++)\n          sum += arr[row][col] * arg[col][rescols];\n          res[row][rescols] = sum;\n        }\n      }\n      return (nrow === 1 && rescols === 1) ? res[0][0] : res;\n    }\n    return jStat.map(arr, function(value) { return value * arg; });\n  },\n\n  // outer([1,2,3],[4,5,6])\n  // ===\n  // [[1],[2],[3]] times [[4,5,6]]\n  // ->\n  // [[4,5,6],[8,10,12],[12,15,18]]\n  outer:function outer(A, B) {\n    return jStat.multiply(A.map(function(t){ return [t] }), [B]);\n  },\n\n\n  // Returns the dot product of two matricies\n  dot: function dot(arr, arg) {\n    if (!isUsable(arr[0])) arr = [ arr ];\n    if (!isUsable(arg[0])) arg = [ arg ];\n    // convert column to row vector\n    var left = (arr[0].length === 1 && arr.length !== 1) ? jStat.transpose(arr) : arr,\n    right = (arg[0].length === 1 && arg.length !== 1) ? jStat.transpose(arg) : arg,\n    res = [],\n    row = 0,\n    nrow = left.length,\n    ncol = left[0].length,\n    sum, col;\n    for (; row < nrow; row++) {\n      res[row] = [];\n      sum = 0;\n      for (col = 0; col < ncol; col++)\n      sum += left[row][col] * right[row][col];\n      res[row] = sum;\n    }\n    return (res.length === 1) ? res[0] : res;\n  },\n\n  // raise every element by a scalar\n  pow: function pow(arr, arg) {\n    return jStat.map(arr, function(value) { return Math.pow(value, arg); });\n  },\n\n  // exponentiate every element\n  exp: function exp(arr) {\n    return jStat.map(arr, function(value) { return Math.exp(value); });\n  },\n\n  // generate the natural log of every element\n  log: function exp(arr) {\n    return jStat.map(arr, function(value) { return Math.log(value); });\n  },\n\n  // generate the absolute values of the vector\n  abs: function abs(arr) {\n    return jStat.map(arr, function(value) { return Math.abs(value); });\n  },\n\n  // computes the p-norm of the vector\n  // In the case that a matrix is passed, uses the first row as the vector\n  norm: function norm(arr, p) {\n    var nnorm = 0,\n    i = 0;\n    // check the p-value of the norm, and set for most common case\n    if (isNaN(p)) p = 2;\n    // check if multi-dimensional array, and make vector correction\n    if (isUsable(arr[0])) arr = arr[0];\n    // vector norm\n    for (; i < arr.length; i++) {\n      nnorm += Math.pow(Math.abs(arr[i]), p);\n    }\n    return Math.pow(nnorm, 1 / p);\n  },\n\n  // computes the angle between two vectors in rads\n  // In case a matrix is passed, this uses the first row as the vector\n  angle: function angle(arr, arg) {\n    return Math.acos(jStat.dot(arr, arg) / (jStat.norm(arr) * jStat.norm(arg)));\n  },\n\n  // augment one matrix by another\n  // Note: this function returns a matrix, not a jStat object\n  aug: function aug(a, b) {\n    var newarr = [];\n    for (var i = 0; i < a.length; i++) {\n      newarr.push(a[i].slice());\n    }\n    for (var i = 0; i < newarr.length; i++) {\n      push.apply(newarr[i], b[i]);\n    }\n    return newarr;\n  },\n\n  // The inv() function calculates the inverse of a matrix\n  // Create the inverse by augmenting the matrix by the identity matrix of the\n  // appropriate size, and then use G-J elimination on the augmented matrix.\n  inv: function inv(a) {\n    var rows = a.length;\n    var cols = a[0].length;\n    var b = jStat.identity(rows, cols);\n    var c = jStat.gauss_jordan(a, b);\n    var result = [];\n    var i = 0;\n    var j;\n\n    //We need to copy the inverse portion to a new matrix to rid G-J artifacts\n    for (; i < rows; i++) {\n      result[i] = [];\n      for (j = cols; j < c[0].length; j++)\n        result[i][j - cols] = c[i][j];\n    }\n    return result;\n  },\n\n  // calculate the determinant of a matrix\n  det: function det(a) {\n    var alen = a.length,\n    alend = alen * 2,\n    vals = new Array(alend),\n    rowshift = alen - 1,\n    colshift = alend - 1,\n    mrow = rowshift - alen + 1,\n    mcol = colshift,\n    i = 0,\n    result = 0,\n    j;\n    // check for special 2x2 case\n    if (alen === 2) {\n      return a[0][0] * a[1][1] - a[0][1] * a[1][0];\n    }\n    for (; i < alend; i++) {\n      vals[i] = 1;\n    }\n    for (var i = 0; i < alen; i++) {\n      for (j = 0; j < alen; j++) {\n        vals[(mrow < 0) ? mrow + alen : mrow ] *= a[i][j];\n        vals[(mcol < alen) ? mcol + alen : mcol ] *= a[i][j];\n        mrow++;\n        mcol--;\n      }\n      mrow = --rowshift - alen + 1;\n      mcol = --colshift;\n    }\n    for (var i = 0; i < alen; i++) {\n      result += vals[i];\n    }\n    for (; i < alend; i++) {\n      result -= vals[i];\n    }\n    return result;\n  },\n\n  gauss_elimination: function gauss_elimination(a, b) {\n    var i = 0,\n    j = 0,\n    n = a.length,\n    m = a[0].length,\n    factor = 1,\n    sum = 0,\n    x = [],\n    maug, pivot, temp, k;\n    a = jStat.aug(a, b);\n    maug = a[0].length;\n    for(var i = 0; i < n; i++) {\n      pivot = a[i][i];\n      j = i;\n      for (k = i + 1; k < m; k++) {\n        if (pivot < Math.abs(a[k][i])) {\n          pivot = a[k][i];\n          j = k;\n        }\n      }\n      if (j != i) {\n        for(k = 0; k < maug; k++) {\n          temp = a[i][k];\n          a[i][k] = a[j][k];\n          a[j][k] = temp;\n        }\n      }\n      for (j = i + 1; j < n; j++) {\n        factor = a[j][i] / a[i][i];\n        for(k = i; k < maug; k++) {\n          a[j][k] = a[j][k] - factor * a[i][k];\n        }\n      }\n    }\n    for (var i = n - 1; i >= 0; i--) {\n      sum = 0;\n      for (j = i + 1; j<= n - 1; j++) {\n        sum = sum + x[j] * a[i][j];\n      }\n      x[i] =(a[i][maug - 1] - sum) / a[i][i];\n    }\n    return x;\n  },\n\n  gauss_jordan: function gauss_jordan(a, b) {\n    var m = jStat.aug(a, b),\n    h = m.length,\n    w = m[0].length;\n    var c = 0;\n    // find max pivot\n    for (var y = 0; y < h; y++) {\n      var maxrow = y;\n      for (var y2 = y+1; y2 < h; y2++) {\n        if (Math.abs(m[y2][y]) > Math.abs(m[maxrow][y]))\n          maxrow = y2;\n      }\n      var tmp = m[y];\n      m[y] = m[maxrow];\n      m[maxrow] = tmp\n      for (var y2 = y+1; y2 < h; y2++) {\n        c = m[y2][y] / m[y][y];\n        for (var x = y; x < w; x++) {\n          m[y2][x] -= m[y][x] * c;\n        }\n      }\n    }\n    // backsubstitute\n    for (var y = h-1; y >= 0; y--) {\n      c = m[y][y];\n      for (var y2 = 0; y2 < y; y2++) {\n        for (var x = w-1; x > y-1; x--) {\n          m[y2][x] -= m[y][x] * m[y2][y] / c;\n        }\n      }\n      m[y][y] /= c;\n      for (var x = h; x < w; x++) {\n        m[y][x] /= c;\n      }\n    }\n    return m;\n  },\n\n  // solve equation\n  // Ax=b\n  // A is upper triangular matrix\n  // A=[[1,2,3],[0,4,5],[0,6,7]]\n  // b=[1,2,3]\n  // triaUpSolve(A,b) // -> [2.666,0.1666,1.666]\n  // if you use matrix style\n  // A=[[1,2,3],[0,4,5],[0,6,7]]\n  // b=[[1],[2],[3]]\n  // will return [[2.666],[0.1666],[1.666]]\n  triaUpSolve: function triaUpSolve(A, b) {\n    var size = A[0].length;\n    var x = jStat.zeros(1, size)[0];\n    var parts;\n    var matrix_mode = false;\n\n    if (b[0].length != undefined) {\n      b = b.map(function(i){ return i[0] });\n      matrix_mode = true;\n    }\n\n    jStat.arange(size - 1, -1, -1).forEach(function(i) {\n      parts = jStat.arange(i + 1, size).map(function(j) {\n        return x[j] * A[i][j];\n      });\n      x[i] = (b[i] - jStat.sum(parts)) / A[i][i];\n    });\n\n    if (matrix_mode)\n      return x.map(function(i){ return [i] });\n    return x;\n  },\n\n  triaLowSolve: function triaLowSolve(A, b) {\n    // like to triaUpSolve but A is lower triangular matrix\n    var size = A[0].length;\n    var x = jStat.zeros(1, size)[0];\n    var parts;\n\n    var matrix_mode=false;\n    if (b[0].length != undefined) {\n      b = b.map(function(i){ return i[0] });\n      matrix_mode = true;\n    }\n\n    jStat.arange(size).forEach(function(i) {\n      parts = jStat.arange(i).map(function(j) {\n        return A[i][j] * x[j];\n      });\n      x[i] = (b[i] - jStat.sum(parts)) / A[i][i];\n    })\n\n    if (matrix_mode)\n      return x.map(function(i){ return [i] });\n    return x;\n  },\n\n\n  // A -> [L,U]\n  // A=LU\n  // L is lower triangular matrix\n  // U is upper triangular matrix\n  lu: function lu(A) {\n    var size = A.length;\n    //var L=jStat.diagonal(jStat.ones(1,size)[0]);\n    var L = jStat.identity(size);\n    var R = jStat.zeros(A.length, A[0].length);\n    var parts;\n    jStat.arange(size).forEach(function(t) {\n      R[0][t] = A[0][t];\n    });\n    jStat.arange(1, size).forEach(function(l) {\n      jStat.arange(l).forEach(function(i) {\n        parts = jStat.arange(i).map(function(jj) {\n          return L[l][jj] * R[jj][i];\n        });\n        L[l][i] = (A[l][i] - jStat.sum(parts)) / R[i][i];\n      });\n      jStat.arange(l, size).forEach(function(j) {\n        parts = jStat.arange(l).map(function(jj) {\n          return L[l][jj] * R[jj][j];\n        });\n        R[l][j] = A[i][j] - jStat.sum(parts);\n      });\n    });\n    return [L, R];\n  },\n\n  // A -> T\n  // A=TT'\n  // T is lower triangular matrix\n  cholesky: function cholesky(A) {\n    var size = A.length;\n    var T = jStat.zeros(A.length, A[0].length);\n    var parts;\n    jStat.arange(size).forEach(function(i) {\n      parts = jStat.arange(i).map(function(t) {\n        return Math.pow(T[i][t],2);\n      });\n      T[i][i] = Math.sqrt(A[i][i] - jStat.sum(parts));\n      jStat.arange(i + 1, size).forEach(function(j) {\n        parts = jStat.arange(i).map(function(t) {\n          return T[i][t] * T[j][t];\n        });\n        T[j][i] = (A[i][j] - jStat.sum(parts)) / T[i][i];\n      });\n    });\n    return T;\n  },\n\n\n  gauss_jacobi: function gauss_jacobi(a, b, x, r) {\n    var i = 0;\n    var j = 0;\n    var n = a.length;\n    var l = [];\n    var u = [];\n    var d = [];\n    var xv, c, h, xk;\n    for (; i < n; i++) {\n      l[i] = [];\n      u[i] = [];\n      d[i] = [];\n      for (j = 0; j < n; j++) {\n        if (i > j) {\n          l[i][j] = a[i][j];\n          u[i][j] = d[i][j] = 0;\n        } else if (i < j) {\n          u[i][j] = a[i][j];\n          l[i][j] = d[i][j] = 0;\n        } else {\n          d[i][j] = a[i][j];\n          l[i][j] = u[i][j] = 0;\n        }\n      }\n    }\n    h = jStat.multiply(jStat.multiply(jStat.inv(d), jStat.add(l, u)), -1);\n    c = jStat.multiply(jStat.inv(d), b);\n    xv = x;\n    xk = jStat.add(jStat.multiply(h, x), c);\n    i = 2;\n    while (Math.abs(jStat.norm(jStat.subtract(xk,xv))) > r) {\n      xv = xk;\n      xk = jStat.add(jStat.multiply(h, xv), c);\n      i++;\n    }\n    return xk;\n  },\n\n  gauss_seidel: function gauss_seidel(a, b, x, r) {\n    var i = 0;\n    var n = a.length;\n    var l = [];\n    var u = [];\n    var d = [];\n    var j, xv, c, h, xk;\n    for (; i < n; i++) {\n      l[i] = [];\n      u[i] = [];\n      d[i] = [];\n      for (j = 0; j < n; j++) {\n        if (i > j) {\n          l[i][j] = a[i][j];\n          u[i][j] = d[i][j] = 0;\n        } else if (i < j) {\n          u[i][j] = a[i][j];\n          l[i][j] = d[i][j] = 0;\n        } else {\n          d[i][j] = a[i][j];\n          l[i][j] = u[i][j] = 0;\n        }\n      }\n    }\n    h = jStat.multiply(jStat.multiply(jStat.inv(jStat.add(d, l)), u), -1);\n    c = jStat.multiply(jStat.inv(jStat.add(d, l)), b);\n    xv = x;\n    xk = jStat.add(jStat.multiply(h, x), c);\n    i = 2;\n    while (Math.abs(jStat.norm(jStat.subtract(xk, xv))) > r) {\n      xv = xk;\n      xk = jStat.add(jStat.multiply(h, xv), c);\n      i = i + 1;\n    }\n    return xk;\n  },\n\n  SOR: function SOR(a, b, x, r, w) {\n    var i = 0;\n    var n = a.length;\n    var l = [];\n    var u = [];\n    var d = [];\n    var j, xv, c, h, xk;\n    for (; i < n; i++) {\n      l[i] = [];\n      u[i] = [];\n      d[i] = [];\n      for (j = 0; j < n; j++) {\n        if (i > j) {\n          l[i][j] = a[i][j];\n          u[i][j] = d[i][j] = 0;\n        } else if (i < j) {\n          u[i][j] = a[i][j];\n          l[i][j] = d[i][j] = 0;\n        } else {\n          d[i][j] = a[i][j];\n          l[i][j] = u[i][j] = 0;\n        }\n      }\n    }\n    h = jStat.multiply(jStat.inv(jStat.add(d, jStat.multiply(l, w))),\n                       jStat.subtract(jStat.multiply(d, 1 - w),\n                                      jStat.multiply(u, w)));\n    c = jStat.multiply(jStat.multiply(jStat.inv(jStat.add(d,\n        jStat.multiply(l, w))), b), w);\n    xv = x;\n    xk = jStat.add(jStat.multiply(h, x), c);\n    i = 2;\n    while (Math.abs(jStat.norm(jStat.subtract(xk, xv))) > r) {\n      xv = xk;\n      xk = jStat.add(jStat.multiply(h, xv), c);\n      i++;\n    }\n    return xk;\n  },\n\n  householder: function householder(a) {\n    var m = a.length;\n    var n = a[0].length;\n    var i = 0;\n    var w = [];\n    var p = [];\n    var alpha, r, k, j, factor;\n    for (; i < m - 1; i++) {\n      alpha = 0;\n      for (j = i + 1; j < n; j++)\n      alpha += (a[j][i] * a[j][i]);\n      factor = (a[i + 1][i] > 0) ? -1 : 1;\n      alpha = factor * Math.sqrt(alpha);\n      r = Math.sqrt((((alpha * alpha) - a[i + 1][i] * alpha) / 2));\n      w = jStat.zeros(m, 1);\n      w[i + 1][0] = (a[i + 1][i] - alpha) / (2 * r);\n      for (k = i + 2; k < m; k++) w[k][0] = a[k][i] / (2 * r);\n      p = jStat.subtract(jStat.identity(m, n),\n          jStat.multiply(jStat.multiply(w, jStat.transpose(w)), 2));\n      a = jStat.multiply(p, jStat.multiply(a, p));\n    }\n    return a;\n  },\n\n  // A -> [Q,R]\n  // Q is orthogonal matrix\n  // R is upper triangular\n  QR: (function() {\n    // x -> Q\n    // find a orthogonal matrix Q st.\n    // Qx=y\n    // y is [||x||,0,0,...]\n\n    // quick ref\n    var sum   = jStat.sum;\n    var range = jStat.arange;\n\n    function get_Q1(x) {\n      var size = x.length;\n      var norm_x = jStat.norm(x, 2);\n      var e1 = jStat.zeros(1, size)[0];\n      e1[0] = 1;\n      var u = jStat.add(jStat.multiply(jStat.multiply(e1, norm_x), -1), x);\n      var norm_u = jStat.norm(u, 2);\n      var v = jStat.divide(u, norm_u);\n      var Q = jStat.subtract(jStat.identity(size),\n                             jStat.multiply(jStat.outer(v, v), 2));\n      return Q;\n    }\n\n    function qr(A) {\n      var size = A[0].length;\n      var QList = [];\n      jStat.arange(size).forEach(function(i) {\n        var x = jStat.slice(A, { row: { start: i }, col: i });\n        var Q = get_Q1(x);\n        var Qn = jStat.identity(A.length);\n        Qn = jStat.sliceAssign(Qn, { row: { start: i }, col: { start: i }}, Q);\n        A = jStat.multiply(Qn, A);\n        QList.push(Qn);\n      });\n      var Q = QList.reduce(function(x, y){ return jStat.multiply(x,y) });\n      var R = A;\n      return [Q, R];\n    }\n\n    function qr2(x) {\n      // quick impletation\n      // https://www.stat.wisc.edu/~larget/math496/qr.html\n\n      var n = x.length;\n      var p = x[0].length;\n\n      x = jStat.copy(x);\n      r = jStat.zeros(p, p);\n\n      var i,j,k;\n      for(j = 0; j < p; j++){\n        r[j][j] = Math.sqrt(sum(range(n).map(function(i){\n          return x[i][j] * x[i][j];\n        })));\n        for(i = 0; i < n; i++){\n          x[i][j] = x[i][j] / r[j][j];\n        }\n        for(k = j+1; k < p; k++){\n          r[j][k] = sum(range(n).map(function(i){\n            return x[i][j] * x[i][k];\n          }));\n          for(i = 0; i < n; i++){\n            x[i][k] = x[i][k] - x[i][j]*r[j][k];\n          }\n        }\n      }\n      return [x, r];\n    }\n\n    return qr2;\n  }()),\n\n  lstsq: (function(A, b) {\n    // solve least squard problem for Ax=b as QR decomposition way if b is\n    // [[b1],[b2],[b3]] form will return [[x1],[x2],[x3]] array form solution\n    // else b is [b1,b2,b3] form will return [x1,x2,x3] array form solution\n    function R_I(A) {\n      A = jStat.copy(A);\n      var size = A.length;\n      var I = jStat.identity(size);\n      jStat.arange(size - 1, -1, -1).forEach(function(i) {\n        jStat.sliceAssign(\n            I, { row: i }, jStat.divide(jStat.slice(I, { row: i }), A[i][i]));\n        jStat.sliceAssign(\n            A, { row: i }, jStat.divide(jStat.slice(A, { row: i }), A[i][i]));\n        jStat.arange(i).forEach(function(j) {\n          var c = jStat.multiply(A[j][i], -1);\n          var Aj = jStat.slice(A, { row: j });\n          var cAi = jStat.multiply(jStat.slice(A, { row: i }), c);\n          jStat.sliceAssign(A, { row: j }, jStat.add(Aj, cAi));\n          var Ij = jStat.slice(I, { row: j });\n          var cIi = jStat.multiply(jStat.slice(I, { row: i }), c);\n          jStat.sliceAssign(I, { row: j }, jStat.add(Ij, cIi));\n        })\n      });\n      return I;\n    }\n\n    function qr_solve(A, b){\n      var array_mode = false;\n      if (b[0].length === undefined) {\n        // [c1,c2,c3] mode\n        b = b.map(function(x){ return [x] });\n        array_mode = true;\n      }\n      var QR = jStat.QR(A);\n      var Q = QR[0];\n      var R = QR[1];\n      var attrs = A[0].length;\n      var Q1 = jStat.slice(Q,{col:{end:attrs}});\n      var R1 = jStat.slice(R,{row:{end:attrs}});\n      var RI = R_I(R1);\n\t  var Q2 = jStat.transpose(Q1);\n\n\t  if(Q2[0].length === undefined){\n\t\t  Q2 = [Q2]; // The confusing jStat.multifly implementation threat nature process again.\n\t  }\n\n      var x = jStat.multiply(jStat.multiply(RI, Q2), b);\n\n\t  if(x.length === undefined){\n\t\t  x = [[x]]; // The confusing jStat.multifly implementation threat nature process again.\n\t  }\n\n\n      if (array_mode)\n        return x.map(function(i){ return i[0] });\n      return x;\n    }\n\n    return qr_solve;\n  }()),\n\n  jacobi: function jacobi(a) {\n    var condition = 1;\n    var count = 0;\n    var n = a.length;\n    var e = jStat.identity(n, n);\n    var ev = [];\n    var b, i, j, p, q, maxim, theta, s;\n    // condition === 1 only if tolerance is not reached\n    while (condition === 1) {\n      count++;\n      maxim = a[0][1];\n      p = 0;\n      q = 1;\n      for (var i = 0; i < n; i++) {\n        for (j = 0; j < n; j++) {\n          if (i != j) {\n            if (maxim < Math.abs(a[i][j])) {\n              maxim = Math.abs(a[i][j]);\n              p = i;\n              q = j;\n            }\n          }\n        }\n      }\n      if (a[p][p] === a[q][q])\n        theta = (a[p][q] > 0) ? Math.PI / 4 : -Math.PI / 4;\n      else\n        theta = Math.atan(2 * a[p][q] / (a[p][p] - a[q][q])) / 2;\n      s = jStat.identity(n, n);\n      s[p][p] = Math.cos(theta);\n      s[p][q] = -Math.sin(theta);\n      s[q][p] = Math.sin(theta);\n      s[q][q] = Math.cos(theta);\n      // eigen vector matrix\n      e = jStat.multiply(e, s);\n      b = jStat.multiply(jStat.multiply(jStat.inv(s), a), s);\n      a = b;\n      condition = 0;\n      for (var i = 1; i < n; i++) {\n        for (j = 1; j < n; j++) {\n          if (i != j && Math.abs(a[i][j]) > 0.001) {\n            condition = 1;\n          }\n        }\n      }\n    }\n    for (var i = 0; i < n; i++) ev.push(a[i][i]);\n    //returns both the eigenvalue and eigenmatrix\n    return [e, ev];\n  },\n\n  rungekutta: function rungekutta(f, h, p, t_j, u_j, order) {\n    var k1, k2, u_j1, k3, k4;\n    if (order === 2) {\n      while (t_j <= p) {\n        k1 = h * f(t_j, u_j);\n        k2 = h * f(t_j + h, u_j + k1);\n        u_j1 = u_j + (k1 + k2) / 2;\n        u_j = u_j1;\n        t_j = t_j + h;\n      }\n    }\n    if (order === 4) {\n      while (t_j <= p) {\n        k1 = h * f(t_j, u_j);\n        k2 = h * f(t_j + h / 2, u_j + k1 / 2);\n        k3 = h * f(t_j + h / 2, u_j + k2 / 2);\n        k4 = h * f(t_j +h, u_j + k3);\n        u_j1 = u_j + (k1 + 2 * k2 + 2 * k3 + k4) / 6;\n        u_j = u_j1;\n        t_j = t_j + h;\n      }\n    }\n    return u_j;\n  },\n\n  romberg: function romberg(f, a, b, order) {\n    var i = 0;\n    var h = (b - a) / 2;\n    var x = [];\n    var h1 = [];\n    var g = [];\n    var m, a1, j, k, I, d;\n    while (i < order / 2) {\n      I = f(a);\n      for (j = a, k = 0; j <= b; j = j + h, k++) x[k] = j;\n      m = x.length;\n      for (j = 1; j < m - 1; j++) {\n        I += (((j % 2) !== 0) ? 4 : 2) * f(x[j]);\n      }\n      I = (h / 3) * (I + f(b));\n      g[i] = I;\n      h /= 2;\n      i++;\n    }\n    a1 = g.length;\n    m = 1;\n    while (a1 !== 1) {\n      for (j = 0; j < a1 - 1; j++)\n      h1[j] = ((Math.pow(4, m)) * g[j + 1] - g[j]) / (Math.pow(4, m) - 1);\n      a1 = h1.length;\n      g = h1;\n      h1 = [];\n      m++;\n    }\n    return g;\n  },\n\n  richardson: function richardson(X, f, x, h) {\n    function pos(X, x) {\n      var i = 0;\n      var n = X.length;\n      var p;\n      for (; i < n; i++)\n        if (X[i] === x) p = i;\n      return p;\n    }\n    var n = X.length,\n    h_min = Math.abs(x - X[pos(X, x) + 1]),\n    i = 0,\n    g = [],\n    h1 = [],\n    y1, y2, m, a, j;\n    while (h >= h_min) {\n      y1 = pos(X, x + h);\n      y2 = pos(X, x);\n      g[i] = (f[y1] - 2 * f[y2] + f[2 * y2 - y1]) / (h * h);\n      h /= 2;\n      i++;\n    }\n    a = g.length;\n    m = 1;\n    while (a != 1) {\n      for (j = 0; j < a - 1; j++)\n      h1[j] = ((Math.pow(4, m)) * g[j + 1] - g[j]) / (Math.pow(4, m) - 1);\n      a = h1.length;\n      g = h1;\n      h1 = [];\n      m++;\n    }\n    return g;\n  },\n\n  simpson: function simpson(f, a, b, n) {\n    var h = (b - a) / n;\n    var I = f(a);\n    var x = [];\n    var j = a;\n    var k = 0;\n    var i = 1;\n    var m;\n    for (; j <= b; j = j + h, k++)\n      x[k] = j;\n    m = x.length;\n    for (; i < m - 1; i++) {\n      I += ((i % 2 !== 0) ? 4 : 2) * f(x[i]);\n    }\n    return (h / 3) * (I + f(b));\n  },\n\n  hermite: function hermite(X, F, dF, value) {\n    var n = X.length;\n    var p = 0;\n    var i = 0;\n    var l = [];\n    var dl = [];\n    var A = [];\n    var B = [];\n    var j;\n    for (; i < n; i++) {\n      l[i] = 1;\n      for (j = 0; j < n; j++) {\n        if (i != j) l[i] *= (value - X[j]) / (X[i] - X[j]);\n      }\n      dl[i] = 0;\n      for (j = 0; j < n; j++) {\n        if (i != j) dl[i] += 1 / (X [i] - X[j]);\n      }\n      A[i] = (1 - 2 * (value - X[i]) * dl[i]) * (l[i] * l[i]);\n      B[i] = (value - X[i]) * (l[i] * l[i]);\n      p += (A[i] * F[i] + B[i] * dF[i]);\n    }\n    return p;\n  },\n\n  lagrange: function lagrange(X, F, value) {\n    var p = 0;\n    var i = 0;\n    var j, l;\n    var n = X.length;\n    for (; i < n; i++) {\n      l = F[i];\n      for (j = 0; j < n; j++) {\n        // calculating the lagrange polynomial L_i\n        if (i != j) l *= (value - X[j]) / (X[i] - X[j]);\n      }\n      // adding the lagrange polynomials found above\n      p += l;\n    }\n    return p;\n  },\n\n  cubic_spline: function cubic_spline(X, F, value) {\n    var n = X.length;\n    var i = 0, j;\n    var A = [];\n    var B = [];\n    var alpha = [];\n    var c = [];\n    var h = [];\n    var b = [];\n    var d = [];\n    for (; i < n - 1; i++)\n      h[i] = X[i + 1] - X[i];\n    alpha[0] = 0;\n    for (var i = 1; i < n - 1; i++) {\n      alpha[i] = (3 / h[i]) * (F[i + 1] - F[i]) -\n          (3 / h[i-1]) * (F[i] - F[i-1]);\n    }\n    for (var i = 1; i < n - 1; i++) {\n      A[i] = [];\n      B[i] = [];\n      A[i][i-1] = h[i-1];\n      A[i][i] = 2 * (h[i - 1] + h[i]);\n      A[i][i+1] = h[i];\n      B[i][0] = alpha[i];\n    }\n    c = jStat.multiply(jStat.inv(A), B);\n    for (j = 0; j < n - 1; j++) {\n      b[j] = (F[j + 1] - F[j]) / h[j] - h[j] * (c[j + 1][0] + 2 * c[j][0]) / 3;\n      d[j] = (c[j + 1][0] - c[j][0]) / (3 * h[j]);\n    }\n    for (j = 0; j < n; j++) {\n      if (X[j] > value) break;\n    }\n    j -= 1;\n    return F[j] + (value - X[j]) * b[j] + jStat.sq(value-X[j]) *\n        c[j] + (value - X[j]) * jStat.sq(value - X[j]) * d[j];\n  },\n\n  gauss_quadrature: function gauss_quadrature() {\n    throw new Error('gauss_quadrature not yet implemented');\n  },\n\n  PCA: function PCA(X) {\n    var m = X.length;\n    var n = X[0].length;\n    var flag = false;\n    var i = 0;\n    var j, temp1;\n    var u = [];\n    var D = [];\n    var result = [];\n    var temp2 = [];\n    var Y = [];\n    var Bt = [];\n    var B = [];\n    var C = [];\n    var V = [];\n    var Vt = [];\n    for (var i = 0; i < m; i++) {\n      u[i] = jStat.sum(X[i]) / n;\n    }\n    for (var i = 0; i < n; i++) {\n      B[i] = [];\n      for(j = 0; j < m; j++) {\n        B[i][j] = X[j][i] - u[j];\n      }\n    }\n    B = jStat.transpose(B);\n    for (var i = 0; i < m; i++) {\n      C[i] = [];\n      for (j = 0; j < m; j++) {\n        C[i][j] = (jStat.dot([B[i]], [B[j]])) / (n - 1);\n      }\n    }\n    result = jStat.jacobi(C);\n    V = result[0];\n    D = result[1];\n    Vt = jStat.transpose(V);\n    for (var i = 0; i < D.length; i++) {\n      for (j = i; j < D.length; j++) {\n        if(D[i] < D[j])  {\n          temp1 = D[i];\n          D[i] = D[j];\n          D[j] = temp1;\n          temp2 = Vt[i];\n          Vt[i] = Vt[j];\n          Vt[j] = temp2;\n        }\n      }\n    }\n    Bt = jStat.transpose(B);\n    for (var i = 0; i < m; i++) {\n      Y[i] = [];\n      for (j = 0; j < Bt.length; j++) {\n        Y[i][j] = jStat.dot([Vt[i]], [Bt[j]]);\n      }\n    }\n    return [X, D, Vt, Y];\n  }\n});\n\n// extend jStat.fn with methods that require one argument\n(function(funcs) {\n  for (var i = 0; i < funcs.length; i++) (function(passfunc) {\n    jStat.fn[passfunc] = function(arg, func) {\n      var tmpthis = this;\n      // check for callback\n      if (func) {\n        setTimeout(function() {\n          func.call(tmpthis, jStat.fn[passfunc].call(tmpthis, arg));\n        }, 15);\n        return this;\n      }\n      if (typeof jStat[passfunc](this, arg) === 'number')\n        return jStat[passfunc](this, arg);\n      else\n        return jStat(jStat[passfunc](this, arg));\n    };\n  }(funcs[i]));\n}('add divide multiply subtract dot pow exp log abs norm angle'.split(' ')));\n\n}(jStat, Math));\n(function(jStat, Math) {\n\nvar slice = [].slice;\nvar isNumber = jStat.utils.isNumber;\nvar isArray = jStat.utils.isArray;\n\n// flag==true denotes use of sample standard deviation\n// Z Statistics\njStat.extend({\n  // 2 different parameter lists:\n  // (value, mean, sd)\n  // (value, array, flag)\n  zscore: function zscore() {\n    var args = slice.call(arguments);\n    if (isNumber(args[1])) {\n      return (args[0] - args[1]) / args[2];\n    }\n    return (args[0] - jStat.mean(args[1])) / jStat.stdev(args[1], args[2]);\n  },\n\n  // 3 different paramter lists:\n  // (value, mean, sd, sides)\n  // (zscore, sides)\n  // (value, array, sides, flag)\n  ztest: function ztest() {\n    var args = slice.call(arguments);\n    var z;\n    if (isArray(args[1])) {\n      // (value, array, sides, flag)\n      z = jStat.zscore(args[0],args[1],args[3]);\n      return (args[2] === 1) ?\n        (jStat.normal.cdf(-Math.abs(z), 0, 1)) :\n        (jStat.normal.cdf(-Math.abs(z), 0, 1)*2);\n    } else {\n      if (args.length > 2) {\n        // (value, mean, sd, sides)\n        z = jStat.zscore(args[0],args[1],args[2]);\n        return (args[3] === 1) ?\n          (jStat.normal.cdf(-Math.abs(z),0,1)) :\n          (jStat.normal.cdf(-Math.abs(z),0,1)* 2);\n      } else {\n        // (zscore, sides)\n        z = args[0];\n        return (args[1] === 1) ?\n          (jStat.normal.cdf(-Math.abs(z),0,1)) :\n          (jStat.normal.cdf(-Math.abs(z),0,1)*2);\n      }\n    }\n  }\n});\n\njStat.extend(jStat.fn, {\n  zscore: function zscore(value, flag) {\n    return (value - this.mean()) / this.stdev(flag);\n  },\n\n  ztest: function ztest(value, sides, flag) {\n    var zscore = Math.abs(this.zscore(value, flag));\n    return (sides === 1) ?\n      (jStat.normal.cdf(-zscore, 0, 1)) :\n      (jStat.normal.cdf(-zscore, 0, 1) * 2);\n  }\n});\n\n// T Statistics\njStat.extend({\n  // 2 parameter lists\n  // (value, mean, sd, n)\n  // (value, array)\n  tscore: function tscore() {\n    var args = slice.call(arguments);\n    return (args.length === 4) ?\n      ((args[0] - args[1]) / (args[2] / Math.sqrt(args[3]))) :\n      ((args[0] - jStat.mean(args[1])) /\n       (jStat.stdev(args[1], true) / Math.sqrt(args[1].length)));\n  },\n\n  // 3 different paramter lists:\n  // (value, mean, sd, n, sides)\n  // (tscore, n, sides)\n  // (value, array, sides)\n  ttest: function ttest() {\n    var args = slice.call(arguments);\n    var tscore;\n    if (args.length === 5) {\n      tscore = Math.abs(jStat.tscore(args[0], args[1], args[2], args[3]));\n      return (args[4] === 1) ?\n        (jStat.studentt.cdf(-tscore, args[3]-1)) :\n        (jStat.studentt.cdf(-tscore, args[3]-1)*2);\n    }\n    if (isNumber(args[1])) {\n      tscore = Math.abs(args[0])\n      return (args[2] == 1) ?\n        (jStat.studentt.cdf(-tscore, args[1]-1)) :\n        (jStat.studentt.cdf(-tscore, args[1]-1) * 2);\n    }\n    tscore = Math.abs(jStat.tscore(args[0], args[1]))\n    return (args[2] == 1) ?\n      (jStat.studentt.cdf(-tscore, args[1].length-1)) :\n      (jStat.studentt.cdf(-tscore, args[1].length-1) * 2);\n  }\n});\n\njStat.extend(jStat.fn, {\n  tscore: function tscore(value) {\n    return (value - this.mean()) / (this.stdev(true) / Math.sqrt(this.cols()));\n  },\n\n  ttest: function ttest(value, sides) {\n    return (sides === 1) ?\n      (1 - jStat.studentt.cdf(Math.abs(this.tscore(value)), this.cols()-1)) :\n      (jStat.studentt.cdf(-Math.abs(this.tscore(value)), this.cols()-1)*2);\n  }\n});\n\n// F Statistics\njStat.extend({\n  // Paramter list is as follows:\n  // (array1, array2, array3, ...)\n  // or it is an array of arrays\n  // array of arrays conversion\n  anovafscore: function anovafscore() {\n    var args = slice.call(arguments),\n    expVar, sample, sampMean, sampSampMean, tmpargs, unexpVar, i, j;\n    if (args.length === 1) {\n      tmpargs = new Array(args[0].length);\n      for (var i = 0; i < args[0].length; i++) {\n        tmpargs[i] = args[0][i];\n      }\n      args = tmpargs;\n    }\n    // 2 sample case\n    if (args.length === 2) {\n      return jStat.variance(args[0]) / jStat.variance(args[1]);\n    }\n    // Builds sample array\n    sample = new Array();\n    for (var i = 0; i < args.length; i++) {\n      sample = sample.concat(args[i]);\n    }\n    sampMean = jStat.mean(sample);\n    // Computes the explained variance\n    expVar = 0;\n    for (var i = 0; i < args.length; i++) {\n      expVar = expVar + args[i].length * Math.pow(jStat.mean(args[i]) - sampMean, 2);\n    }\n    expVar /= (args.length - 1);\n    // Computes unexplained variance\n    unexpVar = 0;\n    for (var i = 0; i < args.length; i++) {\n      sampSampMean = jStat.mean(args[i]);\n      for (j = 0; j < args[i].length; j++) {\n        unexpVar += Math.pow(args[i][j] - sampSampMean, 2);\n      }\n    }\n    unexpVar /= (sample.length - args.length);\n    return expVar / unexpVar;\n  },\n\n  // 2 different paramter setups\n  // (array1, array2, array3, ...)\n  // (anovafscore, df1, df2)\n  anovaftest: function anovaftest() {\n    var args = slice.call(arguments),\n    df1, df2, n, i;\n    if (isNumber(args[0])) {\n      return 1 - jStat.centralF.cdf(args[0], args[1], args[2]);\n    }\n    anovafscore = jStat.anovafscore(args);\n    df1 = args.length - 1;\n    n = 0;\n    for (var i = 0; i < args.length; i++) {\n      n = n + args[i].length;\n    }\n    df2 = n - df1 - 1;\n    return 1 - jStat.centralF.cdf(anovafscore, df1, df2);\n  },\n\n  ftest: function ftest(fscore, df1, df2) {\n    return 1 - jStat.centralF.cdf(fscore, df1, df2);\n  }\n});\n\njStat.extend(jStat.fn, {\n  anovafscore: function anovafscore() {\n    return jStat.anovafscore(this.toArray());\n  },\n\n  anovaftes: function anovaftes() {\n    var n = 0;\n    var i;\n    for (var i = 0; i < this.length; i++) {\n      n = n + this[i].length;\n    }\n    return jStat.ftest(this.anovafscore(), this.length - 1, n - this.length);\n  }\n});\n\n// Tukey's range test\njStat.extend({\n  // 2 parameter lists\n  // (mean1, mean2, n1, n2, sd)\n  // (array1, array2, sd)\n  qscore: function qscore() {\n    var args = slice.call(arguments);\n    var mean1, mean2, n1, n2, sd;\n    if (isNumber(args[0])) {\n        mean1 = args[0];\n        mean2 = args[1];\n        n1 = args[2];\n        n2 = args[3];\n        sd = args[4];\n    } else {\n        mean1 = jStat.mean(args[0]);\n        mean2 = jStat.mean(args[1]);\n        n1 = args[0].length;\n        n2 = args[1].length;\n        sd = args[2];\n    }\n    return Math.abs(mean1 - mean2) / (sd * Math.sqrt((1 / n1 + 1 / n2) / 2));\n  },\n\n  // 3 different parameter lists:\n  // (qscore, n, k)\n  // (mean1, mean2, n1, n2, sd, n, k)\n  // (array1, array2, sd, n, k)\n  qtest: function qtest() {\n    var args = slice.call(arguments);\n\n    var qscore;\n    if (args.length === 3) {\n      qscore = args[0];\n      args = args.slice(1);\n    } else if (args.length === 7) {\n      qscore = jStat.qscore(args[0], args[1], args[2], args[3], args[4]);\n      args = args.slice(5);\n    } else {\n      qscore = jStat.qscore(args[0], args[1], args[2]);\n      args = args.slice(3);\n    }\n\n    var n = args[0];\n    var k = args[1];\n\n    return 1 - jStat.tukey.cdf(qscore, k, n - k);\n  },\n\n  tukeyhsd: function tukeyhsd(arrays) {\n    var sd = jStat.pooledstdev(arrays);\n    var means = arrays.map(function (arr) {return jStat.mean(arr);});\n    var n = arrays.reduce(function (n, arr) {return n + arr.length;}, 0);\n\n    var results = [];\n    for (var i = 0; i < arrays.length; ++i) {\n        for (var j = i + 1; j < arrays.length; ++j) {\n            var p = jStat.qtest(means[i], means[j], arrays[i].length, arrays[j].length, sd, n, arrays.length);\n            results.push([[i, j], p]);\n        }\n    }\n\n    return results;\n  }\n});\n\n// Error Bounds\njStat.extend({\n  // 2 different parameter setups\n  // (value, alpha, sd, n)\n  // (value, alpha, array)\n  normalci: function normalci() {\n    var args = slice.call(arguments),\n    ans = new Array(2),\n    change;\n    if (args.length === 4) {\n      change = Math.abs(jStat.normal.inv(args[1] / 2, 0, 1) *\n                        args[2] / Math.sqrt(args[3]));\n    } else {\n      change = Math.abs(jStat.normal.inv(args[1] / 2, 0, 1) *\n                        jStat.stdev(args[2]) / Math.sqrt(args[2].length));\n    }\n    ans[0] = args[0] - change;\n    ans[1] = args[0] + change;\n    return ans;\n  },\n\n  // 2 different parameter setups\n  // (value, alpha, sd, n)\n  // (value, alpha, array)\n  tci: function tci() {\n    var args = slice.call(arguments),\n    ans = new Array(2),\n    change;\n    if (args.length === 4) {\n      change = Math.abs(jStat.studentt.inv(args[1] / 2, args[3] - 1) *\n                        args[2] / Math.sqrt(args[3]));\n    } else {\n      change = Math.abs(jStat.studentt.inv(args[1] / 2, args[2].length - 1) *\n                        jStat.stdev(args[2], true) / Math.sqrt(args[2].length));\n    }\n    ans[0] = args[0] - change;\n    ans[1] = args[0] + change;\n    return ans;\n  },\n\n  significant: function significant(pvalue, alpha) {\n    return pvalue < alpha;\n  }\n});\n\njStat.extend(jStat.fn, {\n  normalci: function normalci(value, alpha) {\n    return jStat.normalci(value, alpha, this.toArray());\n  },\n\n  tci: function tci(value, alpha) {\n    return jStat.tci(value, alpha, this.toArray());\n  }\n});\n\n// internal method for calculating the z-score for a difference of proportions test\nfunction differenceOfProportions(p1, n1, p2, n2) {\n  if (p1 > 1 || p2 > 1 || p1 <= 0 || p2 <= 0) {\n    throw new Error(\"Proportions should be greater than 0 and less than 1\")\n  }\n  var pooled = (p1 * n1 + p2 * n2) / (n1 + n2);\n  var se = Math.sqrt(pooled * (1 - pooled) * ((1/n1) + (1/n2)));\n  return (p1 - p2) / se;\n}\n\n// Difference of Proportions\njStat.extend(jStat.fn, {\n  oneSidedDifferenceOfProportions: function oneSidedDifferenceOfProportions(p1, n1, p2, n2) {\n    var z = differenceOfProportions(p1, n1, p2, n2);\n    return jStat.ztest(z, 1);\n  },\n\n  twoSidedDifferenceOfProportions: function twoSidedDifferenceOfProportions(p1, n1, p2, n2) {\n    var z = differenceOfProportions(p1, n1, p2, n2);\n    return jStat.ztest(z, 2);\n  }\n});\n\n}(jStat, Math));\njStat.models = (function(){\n\n  function sub_regress(endog, exog) {\n    return ols(endog, exog);\n  }\n\n  function sub_regress(exog) {\n    var var_count = exog[0].length;\n    var modelList = jStat.arange(var_count).map(function(endog_index) {\n      var exog_index =\n          jStat.arange(var_count).filter(function(i){return i!==endog_index});\n      return ols(jStat.col(exog, endog_index).map(function(x){ return x[0] }),\n                 jStat.col(exog, exog_index))\n    });\n    return modelList;\n  }\n\n  // do OLS model regress\n  // exog have include const columns ,it will not generate it .In fact, exog is\n  // \"design matrix\" look at\n  //https://en.wikipedia.org/wiki/Design_matrix\n  function ols(endog, exog) {\n    var nobs = endog.length;\n    var df_model = exog[0].length - 1;\n    var df_resid = nobs-df_model - 1;\n    var coef = jStat.lstsq(exog, endog);\n    var predict =\n        jStat.multiply(exog, coef.map(function(x) { return [x] }))\n            .map(function(p) { return p[0] });\n    var resid = jStat.subtract(endog, predict);\n    var ybar = jStat.mean(endog);\n    // constant cause problem\n    // var SST = jStat.sum(endog.map(function(y) {\n    //   return Math.pow(y-ybar,2);\n    // }));\n    var SSE = jStat.sum(predict.map(function(f) {\n      return Math.pow(f - ybar, 2);\n    }));\n    var SSR = jStat.sum(endog.map(function(y, i) {\n      return Math.pow(y - predict[i], 2);\n    }));\n    var SST = SSE + SSR;\n    var R2 = (SSE / SST);\n    return {\n        exog:exog,\n        endog:endog,\n        nobs:nobs,\n        df_model:df_model,\n        df_resid:df_resid,\n        coef:coef,\n        predict:predict,\n        resid:resid,\n        ybar:ybar,\n        SST:SST,\n        SSE:SSE,\n        SSR:SSR,\n        R2:R2\n    };\n  }\n\n  // H0: b_I=0\n  // H1: b_I!=0\n  function t_test(model) {\n    var subModelList = sub_regress(model.exog);\n    //var sigmaHat=jStat.stdev(model.resid);\n    var sigmaHat = Math.sqrt(model.SSR / (model.df_resid));\n    var seBetaHat = subModelList.map(function(mod) {\n      var SST = mod.SST;\n      var R2 = mod.R2;\n      return sigmaHat / Math.sqrt(SST * (1 - R2));\n    });\n    var tStatistic = model.coef.map(function(coef, i) {\n      return (coef - 0) / seBetaHat[i];\n    });\n    var pValue = tStatistic.map(function(t) {\n      var leftppf = jStat.studentt.cdf(t, model.df_resid);\n      return (leftppf > 0.5 ? 1 - leftppf : leftppf) * 2;\n    });\n    var c = jStat.studentt.inv(0.975, model.df_resid);\n    var interval95 = model.coef.map(function(coef, i) {\n      var d = c * seBetaHat[i];\n      return [coef - d, coef + d];\n    })\n    return {\n        se: seBetaHat,\n        t: tStatistic,\n        p: pValue,\n        sigmaHat: sigmaHat,\n        interval95: interval95\n    };\n  }\n\n  function F_test(model) {\n    var F_statistic =\n        (model.R2 / model.df_model) / ((1 - model.R2) / model.df_resid);\n    var fcdf = function(x, n1, n2) {\n      return jStat.beta.cdf(x / (n2 / n1 + x), n1 / 2, n2 / 2)\n    }\n    var pvalue = 1 - fcdf(F_statistic, model.df_model, model.df_resid);\n    return { F_statistic: F_statistic, pvalue: pvalue };\n  }\n\n  function ols_wrap(endog, exog) {\n    var model = ols(endog,exog);\n    var ttest = t_test(model);\n    var ftest = F_test(model);\n    // Provide the Wherry / Ezekiel / McNemar / Cohen Adjusted R^2\n    // Which matches the 'adjusted R^2' provided by R's lm package\n    var adjust_R2 =\n        1 - (1 - model.R2) * ((model.nobs - 1) / (model.df_resid));\n    model.t = ttest;\n    model.f = ftest;\n    model.adjust_R2 = adjust_R2;\n    return model;\n  }\n\n  return { ols: ols_wrap };\n})();\n  // Make it compatible with previous version.\n  jStat.jStat = jStat;\n\n  return jStat;\n});\n\n\n/***/ })\n/******/ ]);", null);
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://stackoverflow.com/questions/10343913/how-to-create-a-web-worker-from-a-string

var URL = window.URL || window.webkitURL;

module.exports = function (content, url) {
  try {
    try {
      var blob;

      try {
        // BlobBuilder = Deprecated, but widely implemented
        var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;

        blob = new BlobBuilder();

        blob.append(content);

        blob = blob.getBlob();
      } catch (e) {
        // The proposed API
        blob = new Blob([content]);
      }

      return new Worker(URL.createObjectURL(blob));
    } catch (e) {
      return new Worker('data:application/javascript,' + encodeURIComponent(content));
    }
  } catch (e) {
    if (!url) {
      throw Error('Inline worker is not supported');
    }

    return new Worker(url);
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

var string_type = typeof "";

function bucketSort(array, getVector, compareEquals) {
    // array: an array of data
    // getVector: a function that takes an element of array and returns an int vector. defaults to identity
    // compareEquals: an optional standard sort comparator - if specified it is run on the
    //               results of the final buckets before returning
    getVector = getVector || function(d) { return d; };

  var current_sorted_array = array;
  var current_bucket_ranges = [{lower_index_incl: 0, upper_index_excl: array.length}];

  var new_sorted_array, new_bucket_ranges, bucket_range, sorted_result;

  // find max length vector, to use as template for vector component types, and whose length will be the sort depth
  var max_length_vector = [];
  var proposed_vector;
  for (var i=0; i<array.length; i++) {
      proposed_vector = getVector(array[i]);
      if (proposed_vector.length > max_length_vector.length) {
          max_length_vector = proposed_vector;
      }
  }
  var vector_length = max_length_vector.length;
  for (var vector_index=0; vector_index<vector_length; vector_index++) {
    new_sorted_array = [];
    new_bucket_ranges = [];
    // sort each bucket range, and collect sorted array and new bucket ranges
    for (var j=0; j<current_bucket_ranges.length; j++) {
      bucket_range = current_bucket_ranges[j];
      sorted_result = bucketSortHelper(
          current_sorted_array,
          getVector,
          bucket_range.lower_index_incl,
          bucket_range.upper_index_excl,
          vector_index,
          (typeof max_length_vector[vector_index] === string_type)
      );
      extendArray(new_sorted_array, sorted_result.sorted_array);
      extendArray(new_bucket_ranges, sorted_result.bucket_ranges);
    }
    current_sorted_array = new_sorted_array;
    current_bucket_ranges = new_bucket_ranges;
  }
  // if compareEquals specified, sort remaining buckets with it
    if (compareEquals) {
      new_sorted_array = [];
      var bucket_elts;
      for (var j=0; j<current_bucket_ranges.length; j++) {
          bucket_range = current_bucket_ranges[j];
          bucket_elts = current_sorted_array.slice(bucket_range.lower_index_incl, bucket_range.upper_index_excl);
          bucket_elts.sort(compareEquals);
          extendArray(new_sorted_array, bucket_elts);
      }
      current_sorted_array = new_sorted_array;
    }
  return current_sorted_array;
};

function stringSort(array, getString) {
    // array: an array of data
    // getString: a function that takes an element of `array` and returns a string. defaults to identity

    // returns strings sorted in "natural order" (i.e. numbers sorted correctly - P2 comes before P10)
    getString = getString || function(d) { return d; };
    // compute string vectors we'll sort with
    var data = array.map(function(d) {
        return {
            d: d,
            vector: stringToVector(getString(d))
        };
    });
    // sort
    var sorted = bucketSort(data, function(d) { return d.vector; });
    // return original passed-in data
    return sorted.map(function(datum) { return datum.d; });
}

function stringToVector(string) {
    var vector = [];
    var len = string.length;
    var numberStartIncl = -1;
    var charCode;
    for (var i=0; i<len; i++) {
        charCode = string.charCodeAt(i);
        if (charCode >=48 && charCode <= 57) {
            // if character is numeric digit 0-9
            if (numberStartIncl === -1) {
                // if we're not in a number yet, start number
                numberStartIncl = i;
            }
            // otherwise, nothing to do
        } else {
            // character is not numeric
            if (numberStartIncl > -1) {
                // if we're in a number, then we need to add the number to the vector
                vector.push(parseInt(string.substring(numberStartIncl, i), 10));
                // and record no longer in a number
                numberStartIncl = -1;
            }
            // add character code to vector
            vector.push(charCode);
        }
    }
    if (numberStartIncl > -1) {
        // if we're in a number at the end of the string, add it to vector
        vector.push(parseInt(string.substring(numberStartIncl), 10));
        // no need to reset numberStartIncl because the algorithm is done
    }
    return vector;
}

function compareFull(d1, d2, getVector, compareEquals) {
    // utility function - comparator that describes sort order given by bucketSort
    var ret = compare(getVector(d1), getVector(d2));
    if (ret === 0 && compareEquals) {
        ret = compareEquals(d1, d2);
    }
    return ret;
}

function compareVectorElements(elt1, elt2) {
    if (typeof elt1 === string_type) {
        return compare(stringToVector(elt1), stringToVector(elt2));
    } else {
        return signOfDifference(elt1, elt2);
    }
}

function compare(vector1, vector2) {
    // utility function - comparator that describes vector sort order given by bucketSort

    var ret = 0;
    // go left to right, return result of first difference
    // if one vector is shorter, that one comes first
    var cmp;
    for (var i=0; i<vector1.length; i++) {
        if (i >= vector2.length) {
            // if we've gotten here, that means no change up til i, and vector2 is shorter
            ret = 1;
            break;
        }
        cmp = compareVectorElements(vector1[i], vector2[i]);
        if (cmp !== 0) {
            ret = cmp;
            break;
        }
    }
    if (ret === 0) {
        if (vector1.length < vector2.length) {
            // we iterated through vector1, so if we get here and no difference, then if
            // vector1 is shorter, then it comes first
            ret = -1;
        }
        // theres no way to get here and no difference if vector2 is shorter
    }
    return ret;
}

function signOfDifference(k1, k2) {
    return k1 < k2 ? -1 : (k1 > k2 ? 1 : 0);
}

function extendArray(target, source) {
    for (var i=0; i<source.length; i++) {
        target.push(source[i]);
    }
}

function bucketSortHelper(array, getVector, sort_range_lower_index_incl, sort_range_upper_index_excl, vector_index, isStringElt) {
    // returns { sorted_array: d[], bucket_ranges:{lower_index_incl, upper_index_excl}[]}} },
    //      where sorted_array only contains elements from the specified range of
    //      array[sort_range_lower_index_incl:sort_range_upper_index_excl]

    // stop if empty sort range, or end of vector
    if (!array.length || sort_range_lower_index_incl >= sort_range_upper_index_excl) {
        return {
            sorted_array: [],
            bucket_ranges: []
        }
    }

    // bucket sort the specified range
    // gather elements into buckets
    var buckets = {};
    var vector, key;
    var sortFirst = [];
    for (var i=sort_range_lower_index_incl; i<sort_range_upper_index_excl; i++) {
      vector = getVector(array[i]);
      if (vector.length > vector_index) {
          key = vector[vector_index];
          buckets[key] = buckets[key] || [];
          buckets[key].push(array[i]);
      } else {
          // if the vector has no entry at this index, sort earlier, in line w string sorting convention of shorter strings first
          sortFirst.push(array[i]);
      }
    }
    // reduce in sorted order
    var keys = Object.keys(buckets);
    if (!isStringElt) {
        // sort numbers
        for (var i=0; i<keys.length; i++) {
            keys[i] = parseFloat(keys[i]);
        }
        keys.sort(signOfDifference);
    } else {
        // sort strings
        keys = stringSort(keys);
    }

    var sorted_array = [];
    var bucket_ranges = [];
    var lower_index_incl, upper_index_excl;
    // add sortFirst
    if (sortFirst.length) {
        lower_index_incl = sort_range_lower_index_incl + sorted_array.length;
        bucket_ranges.push({
            lower_index_incl: lower_index_incl,
            upper_index_excl: lower_index_incl + sortFirst.length
        });
        extendArray(sorted_array, sortFirst);
    }
    for (var i=0; i<keys.length; i++) {
      var bucket = buckets[keys[i]];
      lower_index_incl = sort_range_lower_index_incl + sorted_array.length;
      upper_index_excl = lower_index_incl + bucket.length;
      bucket_ranges.push({lower_index_incl: lower_index_incl, upper_index_excl: upper_index_excl});
      extendArray(sorted_array, bucket);
    }

    return { sorted_array: sorted_array, bucket_ranges: bucket_ranges };
}

module.exports = {
  bucketSort: bucketSort,
    stringSort: stringSort,
    compare: compare,
    compareFull: compareFull,
  __bucketSortHelper: bucketSortHelper,
    __stringToVector:stringToVector
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var gl_matrix = __webpack_require__(7);
var svgfactory = __webpack_require__(2);
var shapeToVertexes = __webpack_require__(28);
var CachedProperty = __webpack_require__(5);
var Shape = __webpack_require__(11);
var $ = __webpack_require__(0);

var sgndiff = function(a,b) {
    if (a < b) {
	return -1;
    } else if (a > b) {
	return 1;
    } else {
	return 0;
    }
};

var arrayFindIndex = function(arr, callback, start_index) {
    start_index = start_index || 0;
    for (var i=start_index; i<arr.length; i++) {
	if (callback(arr[i])) {
	    return i;
	}
    }
    return -1;
};

var getNewCanvas = function(view) {
    var old_canvas = view.$canvas[0];
    var new_canvas = old_canvas.cloneNode();
    var parent_node = old_canvas.parentNode;
    parent_node.removeChild(old_canvas);
    parent_node.insertBefore(new_canvas, view.$overlay_canvas[0]);
    view.$canvas = $(new_canvas);
    view.ctx = null;
};
var getWebGLCanvasContext = function (view) {
    try {
	var canvas = view.$canvas[0];
	var ctx = view.ctx || canvas.getContext("experimental-webgl", {alpha: false, antialias: view.antialias});
	ctx.clearColor(1.0, 1.0, 1.0, 1.0);
	ctx.clear(ctx.COLOR_BUFFER_BIT | ctx.DEPTH_BUFFER_BIT);
	ctx.viewportWidth = canvas.width;
	ctx.viewportHeight = canvas.height;
	ctx.viewport(0, 0, ctx.viewportWidth, ctx.viewportHeight);
	ctx.enable(ctx.DEPTH_TEST);
	ctx.enable(ctx.BLEND);
	ctx.blendEquation(ctx.FUNC_ADD);
	ctx.blendFunc(ctx.SRC_ALPHA, ctx.ONE_MINUS_SRC_ALPHA);
	ctx.depthMask(false);
	
	return ctx;
    } catch (e) {
	return null;
    }
};

var createShaderProgram = function (view, vertex_shader, fragment_shader) {
    var program = view.ctx.createProgram();
    view.ctx.attachShader(program, vertex_shader);
    view.ctx.attachShader(program, fragment_shader);

    view.ctx.linkProgram(program);

    var success = view.ctx.getProgramParameter(program, view.ctx.LINK_STATUS);
    if (!success) {
	var msg = view.ctx.getProgramInfoLog(program);
	view.ctx.deleteProgram(program);
	throw "Unable to link shader program: " + msg;
    }

    return program;
};
var createShader = function (view, source, type) {
    var shader = view.ctx.createShader(view.ctx[type]);
    view.ctx.shaderSource(shader, source);
    view.ctx.compileShader(shader);

    var success = view.ctx.getShaderParameter(shader, view.ctx.COMPILE_STATUS);
    if (!success) {
	var msg = view.ctx.getShaderInfoLog(shader);
	view.ctx.deleteShader(shader);
	throw "Unable to compile shader: " + msg;
    }

    return shader;
};

var OncoprintWebGLCellView = (function () {
    function OncoprintWebGLCellView($container, $canvas, $overlay_canvas, $dummy_scroll_div_contents, model, tooltip, highlight_area_callback, cell_over_callback) {
	this.$container = $container;
	this.$canvas = $canvas;
	this.$overlay_canvas = $overlay_canvas;
	
	this.supersampling_ratio = 2;
	
	this.antialias = true;
	this.antialias_on_cell_width_thresh = 5;
	
	this.position_bit_pack_base = 128;
	
	getWebGLContextAndSetUpMatrices(this);
	setUpShaders(this);
	getOverlayContextAndClear(this);
	this.visible_area_width = $canvas[0].width;
	
	var self = this;
	
	this.tooltip = tooltip;
	this.tooltip.center = true;
	
	this.scroll_x = 0;
	this.scroll_y = 0;
	this.$dummy_scroll_div_contents = $dummy_scroll_div_contents;
	this.dummy_scroll_div_client_size = new CachedProperty({'width':$dummy_scroll_div_contents.parent()[0].clientWidth, 'height':$dummy_scroll_div_contents.parent()[0].clientHeight}, function() {
	    return {'width':$dummy_scroll_div_contents.parent()[0].clientWidth, 'height':$dummy_scroll_div_contents.parent()[0].clientHeight};
	});

	this.identified_shape_list_list = {};

	this.vertex_data = {}; // track_id -> {vertex_array: list of index in vertex bank, vertex_bank: flat list of concatenated position and color}
	this.vertex_column_array = {}; // track_id -> number list (float list, item size 1)
	
	this.vertex_position_buffer = {}; // track_id -> gl.createBuffer()
	this.vertex_color_buffer = {}; // track_id -> gl.createBuffer()
	this.vertex_column_buffer = {}; // track_id -> gl.createBuffer()
	this.color_texture = {}; // track_id -> gl.createTexture()
	
	this.id_to_first_vertex_index = {}; // track_id -> id -> vertex index of first vertex corresponding to this id

	this.rendering_suppressed = false;
	
	this.highlight_area_callback = (typeof highlight_area_callback === 'undefined' ? function() {} : highlight_area_callback); // function(left, right) { ... }
	
	(function initializeOverlayEvents(self) {
	    var dragging = false;
	    var drag_diff_minimum = 10;
	    var drag_start_x;
	    var drag_end_x;
	    
	    var dragIsValid = function(drag_start_x, drag_end_x) {
		return Math.abs(drag_start_x - drag_end_x) >= drag_diff_minimum;
	    };
	    var executeDrag = function() {
		if (!dragging) {
		    return;
		}
		dragging = false;
		
		if (!dragIsValid(drag_start_x, drag_end_x)) {
		    return;
		}
		var left = Math.min(drag_start_x, drag_end_x);
		var right = Math.max(drag_start_x, drag_end_x);
		self.highlight_area_callback(left+self.scroll_x, right+self.scroll_x);
	    };
	    
	    var mouseInOverlayCanvas = function(mouse_x, mouse_y) {
		var offset = self.$overlay_canvas.offset();
		var width = self.$overlay_canvas.width();
		var height = self.$overlay_canvas.height();
		return (mouse_x >= offset.left && mouse_x < width + offset.left && mouse_y >= offset.top && mouse_y < height + offset.top);
	    };
	    self.mouseMoveHandler = function(evt) {
            if (!mouseInOverlayCanvas(evt.pageX, evt.pageY)) {
                clearOverlay(self);
                tooltip.hide();
                cell_over_callback(null);
            }
        };
	    $(document).on("mousemove", self.mouseMoveHandler);
	    self.$overlay_canvas.on("mousemove", function(evt) {
		if (self.rendering_suppressed) {
		    return;
		}
		clearOverlay(self);
		var offset = self.$overlay_canvas.offset();
		var mouseX = evt.pageX - offset.left;
		var mouseY = evt.pageY - offset.top;
		if (!dragging) {
		    var overlapping_cells = model.getOverlappingCells(mouseX + self.scroll_x, mouseY + self.scroll_y);
		    var overlapping_data = (overlapping_cells === null ? null : overlapping_cells.ids.map(function(id) {
		    	return model.getTrackDatum(overlapping_cells.track, id);
			}));
		    var cell_width = model.getCellWidth();
		    var cell_padding = model.getCellPadding();
		    if (overlapping_data !== null) {
			cell_over_callback(overlapping_cells.track);
			var left = model.getZoomedColumnLeft(overlapping_cells.ids[0]) - self.scroll_x;
			overlayStrokeRect(self, left, model.getCellTops(overlapping_cells.track) - self.scroll_y, model.getCellWidth() + (model.getTrackHasColumnSpacing(overlapping_cells.track) ? 0 : cell_padding), model.getCellHeight(overlapping_cells.track), "rgba(0,0,0,1)");
			var tracks = model.getTracks();
			for (var i=0; i<tracks.length; i++) {
			    if (model.getTrackDatum(tracks[i], overlapping_cells.ids[0]) !== null) {
				overlayStrokeRect(self, left, model.getCellTops(tracks[i]) - self.scroll_y, model.getCellWidth() + (model.getTrackHasColumnSpacing(tracks[i]) ? 0 : cell_padding), model.getCellHeight(tracks[i]), "rgba(0,0,0,0.5)");
			    }
			}
			tooltip.show(250, model.getZoomedColumnLeft(overlapping_cells.ids[0]) + model.getCellWidth() / 2 + offset.left - self.scroll_x, model.getCellTops(overlapping_cells.track) + offset.top - self.scroll_y, model.getTrackTooltipFn(overlapping_cells.track)(overlapping_data));
		    } else {
			tooltip.hideIfNotAlreadyGoingTo(150);
			overlapping_cells = null;
		    }
		} else {
		    overlapping_cells = null;
		    drag_end_x = mouseX;
		    var left = Math.min(mouseX, drag_start_x);
		    var right = Math.max(mouseX, drag_start_x);
		    var drag_rect_fill = dragIsValid(drag_start_x, drag_end_x) ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.2)';
		    overlayFillRect(self, left, 0, right-left, model.getCellViewHeight(), drag_rect_fill);
		}
		if (overlapping_cells === null) {
		    cell_over_callback(null);
		}
	    });
	    
	    self.$overlay_canvas.on("mousedown", function(evt) {
		if (!mouseInOverlayCanvas(evt.pageX, evt.pageY)) {
		    return;
		}
		dragging = true;
		drag_start_x = evt.pageX - self.$overlay_canvas.offset().left;
		drag_end_x = drag_start_x;
		
		tooltip.hide();
	    });
	    self.$overlay_canvas.on("mouseup", function(evt) {
		if (!mouseInOverlayCanvas(evt.pageX, evt.pageY)) {
		    return;
		}
		executeDrag();
	    });
	    self.$overlay_canvas.on("mouseleave", function(evt) {
		executeDrag();
	    });
	    
	})(this);
	
	$dummy_scroll_div_contents.parent().scroll(function() {
	    clearOverlay(self);
	});
    }
    
    var overlayStrokeRect = function(view, x, y, width, height, color) {
	var ctx = view.overlay_ctx;
	ctx.strokeStyle = color;
	ctx.strokeWidth = 10;
	ctx.strokeRect(view.supersampling_ratio*x, view.supersampling_ratio*y, view.supersampling_ratio*width, view.supersampling_ratio*height);
    };
    
    var overlayFillRect = function(view, x, y, width, height, color) {
	var ctx = view.overlay_ctx;
	ctx.fillStyle = color;
	ctx.fillRect(view.supersampling_ratio*x, view.supersampling_ratio*y, view.supersampling_ratio*width, view.supersampling_ratio*height);
    };
    
    var clearOverlay = function(view) {
	view.overlay_ctx.fillStyle = "rgba(0,0,0,0)";
	view.overlay_ctx.clearRect(0,0,view.$overlay_canvas[0].width, view.$overlay_canvas[0].height);
    };
    
    var getOverlayContextAndClear = function(view) {
	view.overlay_ctx = view.$overlay_canvas[0].getContext('2d');
	clearOverlay(view);
    };
    
    var getWebGLContextAndSetUpMatrices = function(view) {
	view.ctx = getWebGLCanvasContext(view);
	(function initializeMatrices(self) {
	    var mvMatrix = gl_matrix.mat4.create();
	    gl_matrix.mat4.lookAt(mvMatrix, [0, 0, 1], [0, 0, 0], [0, 1, 0]);
	    self.mvMatrix = mvMatrix;

	    var pMatrix = gl_matrix.mat4.create();
	    gl_matrix.mat4.ortho(pMatrix, 0, self.ctx.viewportWidth, self.ctx.viewportHeight, 0, -5, 1000); // y axis inverted so that y increases down like SVG
	    self.pMatrix = pMatrix;
	})(view);
    };
    var setUpShaders = function(self) {
	var vertex_shader_source = ['precision highp float;',
		'attribute float aPosVertex;',
		'attribute float aColVertex;',
		'attribute float aVertexOncoprintColumn;',
		'uniform float columnWidth;',
		'uniform float scrollX;',
		'uniform float zoomX;',
		'uniform float scrollY;',
		'uniform float zoomY;',
		'uniform mat4 uMVMatrix;',
		'uniform mat4 uPMatrix;',
		'uniform float offsetY;',
		'uniform float supersamplingRatio;',
		'uniform float positionBitPackBase;', 
		'uniform float texSize;',
		'varying float texCoord;',
		
		'vec3 unpackVec3(float packedVec3, float base) {',
		'	float pos0 = floor(packedVec3 / (base*base));',
		'	float pos0Contr = pos0*base*base;',
		'	float pos1 = floor((packedVec3 - pos0Contr)/base);',
		'	float pos1Contr = pos1*base;',
		'	float pos2 = packedVec3 - pos0Contr - pos1Contr;',
		'	return vec3(pos0, pos1, pos2);',
		'}',
		
		'void main(void) {',
		'	gl_Position = vec4(unpackVec3(aPosVertex, positionBitPackBase), 1.0);',
		'	gl_Position[0] += aVertexOncoprintColumn*columnWidth;',
		'	gl_Position *= vec4(zoomX, zoomY, 1.0, 1.0);',
		'	gl_Position[1] += offsetY;', // offset is given zoomed
		'	gl_Position -= vec4(scrollX, scrollY, 0.0, 0.0);',
		'	gl_Position[0] *= supersamplingRatio;',
		'	gl_Position[1] *= supersamplingRatio;',
		'	gl_Position = uPMatrix * uMVMatrix * gl_Position;',
		
		'	texCoord = (aColVertex + 0.5) / texSize;',
		'}'].join('\n');
	    var fragment_shader_source = ['precision mediump float;',
		'varying float texCoord;',
		'uniform sampler2D uSampler;',
		'void main(void) {',
		'   gl_FragColor = texture2D(uSampler, vec2(texCoord, 0.5));',
		'}'].join('\n');
	    var vertex_shader = createShader(self, vertex_shader_source, 'VERTEX_SHADER');
	    var fragment_shader = createShader(self, fragment_shader_source, 'FRAGMENT_SHADER');

	    var shader_program = createShaderProgram(self, vertex_shader, fragment_shader);
	    shader_program.vertexPositionAttribute = self.ctx.getAttribLocation(shader_program, 'aPosVertex');
	    self.ctx.enableVertexAttribArray(shader_program.vertexPositionAttribute);
	    shader_program.vertexColorAttribute = self.ctx.getAttribLocation(shader_program, 'aColVertex');
	    self.ctx.enableVertexAttribArray(shader_program.vertexColorAttribute);
	    shader_program.vertexOncoprintColumnAttribute = self.ctx.getAttribLocation(shader_program, 'aVertexOncoprintColumn');
	    self.ctx.enableVertexAttribArray(shader_program.vertexOncoprintColumnAttribute);

	    shader_program.samplerUniform = self.ctx.getUniformLocation(shader_program, 'uSampler');
	    shader_program.pMatrixUniform = self.ctx.getUniformLocation(shader_program, 'uPMatrix');
	    shader_program.mvMatrixUniform = self.ctx.getUniformLocation(shader_program, 'uMVMatrix');
	    shader_program.columnWidthUniform = self.ctx.getUniformLocation(shader_program, 'columnWidth');
	    shader_program.scrollXUniform = self.ctx.getUniformLocation(shader_program, 'scrollX');
	    shader_program.scrollYUniform = self.ctx.getUniformLocation(shader_program, 'scrollY');
	    shader_program.zoomXUniform = self.ctx.getUniformLocation(shader_program, 'zoomX');
	    shader_program.zoomYUniform = self.ctx.getUniformLocation(shader_program, 'zoomY');
	    shader_program.offsetYUniform = self.ctx.getUniformLocation(shader_program, 'offsetY');
	    shader_program.supersamplingRatioUniform = self.ctx.getUniformLocation(shader_program, 'supersamplingRatio');
	    shader_program.positionBitPackBaseUniform = self.ctx.getUniformLocation(shader_program, 'positionBitPackBase');
	    shader_program.texSizeUniform = self.ctx.getUniformLocation(shader_program, 'texSize');

	    self.shader_program = shader_program;
    };

    var resizeAndClear = function(view, model) {
	var height = model.getCellViewHeight();
	var total_width = view.getTotalWidth(model);
	var visible_area_width = view.visible_area_width;
	var scrollbar_slack = 20;
	view.$dummy_scroll_div_contents.css({'min-width':total_width, 'min-height':model.getOncoprintHeight()});
	view.$dummy_scroll_div_contents.parent().css({'height': height + scrollbar_slack, 'width': visible_area_width + scrollbar_slack}); // add space for scrollbars
	view.dummy_scroll_div_client_size.update();
	view.$canvas[0].height = view.supersampling_ratio*height;
	view.$canvas[0].style.height = height + 'px';
	view.$overlay_canvas[0].height = view.supersampling_ratio*height;
	view.$overlay_canvas[0].style.height = height + 'px';
	view.$canvas[0].width = view.supersampling_ratio*visible_area_width;
	view.$canvas[0].style.width = visible_area_width + 'px';
	view.$overlay_canvas[0].width = view.supersampling_ratio*visible_area_width;
	view.$overlay_canvas[0].style.width = visible_area_width + 'px';
	view.$container.css('height', height);
	view.$container.css('width', visible_area_width);
	getWebGLContextAndSetUpMatrices(view);
	setUpShaders(view);
	getOverlayContextAndClear(view);
    };
    var renderAllTracks = function (view, model, dont_resize) {
	if (view.rendering_suppressed) {
	    return;
	}
	
	var scroll_x = view.scroll_x;
	var scroll_y = view.scroll_y;
	var zoom_x = model.getHorzZoom();
	var zoom_y = model.getVertZoom();
	
	var viewport = view.getViewportOncoprintSpace(model);
	var window_left = viewport.left;
	var window_right = viewport.right;
	var window_top = viewport.top;
	var window_bottom = viewport.bottom;
	var id_to_left = model.getColumnLeft();
	var id_order = model.getIdOrder();
	var horz_first_id_in_window_index = arrayFindIndex(id_order, function(id) { return id_to_left[id] >= window_left; });
	var horz_first_id_after_window_index = arrayFindIndex(id_order, function(id) { return id_to_left[id] > window_right; }, horz_first_id_in_window_index+1);
	var horz_first_id_in_window = (horz_first_id_in_window_index < 1 ? id_order[0] : id_order[horz_first_id_in_window_index - 1]);
	var horz_first_id_after_window = (horz_first_id_after_window_index === -1 ? null : id_order[horz_first_id_after_window_index]);
	
	if (!dont_resize) {
	    resizeAndClear(view, model);
	}
	view.ctx.clearColor(1.0,1.0,1.0,1.0);
	view.ctx.clear(view.ctx.COLOR_BUFFER_BIT | view.ctx.DEPTH_BUFFER_BIT);
	
	var tracks = model.getTracks();
	for (var i = 0; i < tracks.length; i++) {
	    var track_id = tracks[i];
	    var cell_top = model.getCellTops(track_id);
	    var cell_height = model.getCellHeight(track_id);
	    if ((cell_top / zoom_y) >= window_bottom || ((cell_top + cell_height)/zoom_y) < window_top) {
		// vertical clipping
		continue;
	    }
	    var buffers = getTrackBuffers(view, track_id);
	    if (buffers.position.numItems === 0) {
		continue;
	    }
	    var first_index = view.id_to_first_vertex_index[track_id][horz_first_id_in_window];
	    var first_index_out = horz_first_id_after_window === null ? buffers.position.numItems : view.id_to_first_vertex_index[track_id][horz_first_id_after_window];
	    
	    view.ctx.useProgram(view.shader_program);
	    view.ctx.bindBuffer(view.ctx.ARRAY_BUFFER, buffers.position);
	    view.ctx.vertexAttribPointer(view.shader_program.vertexPositionAttribute, buffers.position.itemSize, view.ctx.FLOAT, false, 0, 0);
	    view.ctx.bindBuffer(view.ctx.ARRAY_BUFFER, buffers.color);
	    view.ctx.vertexAttribPointer(view.shader_program.vertexColorAttribute, buffers.color.itemSize, view.ctx.FLOAT, false, 0, 0);
	    
	    view.ctx.bindBuffer(view.ctx.ARRAY_BUFFER, buffers.column);
	    view.ctx.vertexAttribPointer(view.shader_program.vertexOncoprintColumnAttribute, buffers.column.itemSize, view.ctx.FLOAT, false, 0, 0);

	    view.ctx.activeTexture(view.ctx.TEXTURE0);
	    view.ctx.bindTexture(view.ctx.TEXTURE_2D, buffers.color_tex.texture);
	    view.ctx.uniform1i(view.shader_program.samplerUniform, 0);
	    view.ctx.uniform1f(view.shader_program.texSizeUniform, buffers.color_tex.size);
	    
	    view.ctx.uniformMatrix4fv(view.shader_program.pMatrixUniform, false, view.pMatrix);
	    view.ctx.uniformMatrix4fv(view.shader_program.mvMatrixUniform, false, view.mvMatrix);
	    view.ctx.uniform1f(view.shader_program.columnWidthUniform, model.getCellWidth(true) + model.getCellPadding(true));
	    view.ctx.uniform1f(view.shader_program.scrollXUniform, scroll_x);
	    view.ctx.uniform1f(view.shader_program.scrollYUniform, scroll_y);
	    view.ctx.uniform1f(view.shader_program.zoomXUniform, zoom_x);
	    view.ctx.uniform1f(view.shader_program.zoomYUniform, zoom_y);
	    view.ctx.uniform1f(view.shader_program.offsetYUniform, cell_top);
	    view.ctx.uniform1f(view.shader_program.supersamplingRatioUniform, view.supersampling_ratio);
	    view.ctx.uniform1f(view.shader_program.positionBitPackBaseUniform, view.position_bit_pack_base);
	    
	    view.ctx.drawArrays(view.ctx.TRIANGLES, first_index, first_index_out - first_index);
	}
    };
    
    var clearTrackPositionAndColorBuffers = function(view, model, track_id) {
	var tracks_to_clear;
	if (typeof track_id === 'undefined') {
	    tracks_to_clear = model.getTracks();
	} else {
	    tracks_to_clear = [track_id];
	}
	for (var i=0; i<tracks_to_clear.length; i++) {
	    if (view.vertex_position_buffer[tracks_to_clear[i]]) {
		view.ctx.deleteBuffer(view.vertex_position_buffer[tracks_to_clear[i]]);
		delete view.vertex_position_buffer[tracks_to_clear[i]];
	    }
	    if (view.vertex_color_buffer[tracks_to_clear[i]]) {
		view.ctx.deleteBuffer(view.vertex_color_buffer[tracks_to_clear[i]]);
		delete view.vertex_color_buffer[tracks_to_clear[i]];
	    }
	    if (view.color_texture[tracks_to_clear[i]]) {
		view.ctx.deleteTexture(view.color_texture[tracks_to_clear[i]].texture);
		delete view.color_texture[tracks_to_clear[i]];
	    }
	}
    };
    
     var clearTrackColumnBuffers = function(view, model, track_id) {
	var tracks_to_clear;
	if (typeof track_id === 'undefined') {
	    tracks_to_clear = model.getTracks();
	} else {
	    tracks_to_clear = [track_id];
	}
	for (var i=0; i<tracks_to_clear.length; i++) {
	    if (view.vertex_column_buffer[tracks_to_clear[i]]) {
		view.ctx.deleteBuffer(view.vertex_column_buffer[tracks_to_clear[i]]);
		delete view.vertex_column_buffer[tracks_to_clear[i]];
	    }
	}
    };
    
    
    var getTrackBuffers = function(view, track_id) {
	if (typeof view.vertex_position_buffer[track_id] === 'undefined') {
	    var pos_buffer = view.ctx.createBuffer();
	    var pos_array = view.vertex_data[track_id].pos_array;
	    
	    view.ctx.bindBuffer(view.ctx.ARRAY_BUFFER, pos_buffer);
	    view.ctx.bufferData(view.ctx.ARRAY_BUFFER, new Float32Array(pos_array), view.ctx.STATIC_DRAW);
	    pos_buffer.itemSize = 1;
	    pos_buffer.numItems = pos_array.length / pos_buffer.itemSize;

	    view.vertex_position_buffer[track_id] = pos_buffer;
	}
	
	if (typeof view.vertex_color_buffer[track_id] === 'undefined') {
	    var col_buffer = view.ctx.createBuffer();
	    var col_array = view.vertex_data[track_id].col_array;
	    
	    view.ctx.bindBuffer(view.ctx.ARRAY_BUFFER, col_buffer);
	    view.ctx.bufferData(view.ctx.ARRAY_BUFFER, new Float32Array(col_array), view.ctx.STATIC_DRAW);
	    col_buffer.itemSize = 1;
	    col_buffer.numItems = col_array.length / col_buffer.itemSize;

	    view.vertex_color_buffer[track_id] = col_buffer;
	}
	
	if (typeof view.color_texture[track_id] === "undefined") {
	    var tex = view.ctx.createTexture();
	    view.ctx.bindTexture(view.ctx.TEXTURE_2D, tex);
	    
	    var color_bank = view.vertex_data[track_id].col_bank;
	    var width = Math.pow(2,Math.ceil(Math.log2(color_bank.length / 4)));
	    while (color_bank.length < 4*width) {
		color_bank.push(0);
	    }
	    var height = 1;
	    view.ctx.texImage2D(view.ctx.TEXTURE_2D, 0, view.ctx.RGBA, width, height, 0, view.ctx.RGBA, view.ctx.UNSIGNED_BYTE, new Uint8Array(color_bank));
	    view.ctx.texParameteri(view.ctx.TEXTURE_2D, view.ctx.TEXTURE_MIN_FILTER, view.ctx.NEAREST);
	    view.ctx.texParameteri(view.ctx.TEXTURE_2D, view.ctx.TEXTURE_MAG_FILTER, view.ctx.NEAREST);
	    view.color_texture[track_id] = {'texture': tex, 'size':width};
	}
	
	if (typeof view.vertex_column_buffer[track_id] === 'undefined') {
	    var vertex_column_buffer = view.ctx.createBuffer();
	    var vertex_column_array = view.vertex_column_array[track_id];
	    view.ctx.bindBuffer(view.ctx.ARRAY_BUFFER, vertex_column_buffer);
	    view.ctx.bufferData(view.ctx.ARRAY_BUFFER, new Float32Array(vertex_column_array), view.ctx.STATIC_DRAW);
	    vertex_column_buffer.itemSize = 1;
	    vertex_column_buffer.numItems = vertex_column_array.length / vertex_column_buffer.itemSize;
	    
	    view.vertex_column_buffer[track_id] = vertex_column_buffer;
	}
	return {'position':view.vertex_position_buffer[track_id],
		'color': view.vertex_color_buffer[track_id],
		'color_tex': view.color_texture[track_id],
		'column': view.vertex_column_buffer[track_id]};
    };
    
    var computeVertexColumns = function(view, model, track_id) {
	if (view.rendering_suppressed) {
	    return;
	}
	var num_items = view.vertex_data[track_id].pos_array.length;
	var id_to_first_vertex_index = view.id_to_first_vertex_index[track_id];
	var id_to_index = model.getVisibleIdToIndexMap();
	var id_and_first_vertex = Object.keys(id_to_first_vertex_index).map(function(id) { return [id, id_to_first_vertex_index[id]]; })
				.sort(function(a,b) { return sgndiff(a[1], b[1]); });
	var vertex_column_array = [];
	for (var i=0; i<id_and_first_vertex.length; i++) {
	    var num_to_add = (i === id_and_first_vertex.length - 1 ? num_items : id_and_first_vertex[i+1][1]) - id_and_first_vertex[i][1];
	    var column = id_to_index[id_and_first_vertex[i][0]];
	    for (var j=0; j<num_to_add; j++) {
		vertex_column_array.push(column);
	    }
	}
	view.vertex_column_array[track_id] = vertex_column_array;
	clearTrackColumnBuffers(view, model, track_id);
    };
    
    var computeVertexPositionsAndVertexColors = function (view, model, track_id) {
	if (view.rendering_suppressed) {
	    return;
	}
	var identified_shape_list_list = view.identified_shape_list_list[track_id];
	var id_to_index = model.getIdToIndexMap();
	identified_shape_list_list.sort(function(a, b) {
	    return sgndiff(id_to_index[a.id], id_to_index[b.id]);
	});
	// Compute vertex array
	var vertex_pos_array = [];
	var vertex_col_array = [];
	var id_to_first_vertex_index = {};
	
	var color_bank = [];
	var color_bank_index = {};
	
	var hashVector = function(vert) {
	    return vert.join(",");
	};
	
	var position_bit_pack_base = view.position_bit_pack_base;
	var packPos = function(pos) {
	    // values must be in [0,255] (integer)
	    return position_bit_pack_base*position_bit_pack_base*pos[0] + position_bit_pack_base*pos[1] + pos[2];
	};
	
	var vertexifiedShapes = {};
	
	
	for (var i = 0; i < identified_shape_list_list.length; i++) {
	    var shape_list = identified_shape_list_list[i].shape_list;
	    var id = identified_shape_list_list[i].id;

	    id_to_first_vertex_index[id] = vertex_pos_array.length;
	    
	    for (var j = 0; j < shape_list.length; j++) {
		var shape = shape_list[j];
		var hash = Shape.Shape.hashComputedShape(shape, j);
		if (!vertexifiedShapes.hasOwnProperty(hash)) {
		    vertexifiedShapes[hash] = {position:[], color:[]};
		    var position = vertexifiedShapes[hash].position;
		    var color = vertexifiedShapes[hash].color;
		    shapeToVertexes(shape, j, function(pos, col) {
			pos = pos.map(Math.round);
			col = col.map(function(x) { return Math.round(x*255);});
			
			position.push(packPos(pos));
			
			var col_hash = hashVector(col);
			var col_index = color_bank_index[col_hash];
			if (typeof col_index === "undefined") {
			    col_index = color_bank.length;
			    color_bank.push(col);
			    color_bank_index[col_hash] = col_index;
			}
			color.push(col_index);
		    });
		}
		vertex_pos_array.push.apply(vertex_pos_array, vertexifiedShapes[hash].position);
		vertex_col_array.push.apply(vertex_col_array, vertexifiedShapes[hash].color);
	    }
	}
	color_bank = color_bank.reduce(function(arr, next) { return arr.concat(next); }, []);
	// minimum color bank to avoid webGL texture errors
	if (color_bank.length === 0) {
	    color_bank.push(0,0,0,0);
	}
	view.vertex_data[track_id] = {
	    pos_array: vertex_pos_array,
	    col_array: vertex_col_array,
	    col_bank: color_bank
	};
	view.id_to_first_vertex_index[track_id] = id_to_first_vertex_index;
	
	clearTrackPositionAndColorBuffers(view, model, track_id);
    };
    
    var getShapes = function(view, model, track_id) {
	if (view.rendering_suppressed) {
	    return;
	}
	view.identified_shape_list_list[track_id] = model.getIdentifiedShapeListList(track_id, true, true);
    };
    
    var refreshCanvas = function(view, model) {
	clearTrackPositionAndColorBuffers(view, model); // whenever you get a new context, you have to get new buffers
	clearTrackColumnBuffers(view, model);
	getNewCanvas(view);
	getWebGLContextAndSetUpMatrices(view, model);
	setUpShaders(view);
    };

    OncoprintWebGLCellView.prototype.clearOverlay = function() {
    	clearOverlay(this);
	};
    
    OncoprintWebGLCellView.prototype.getViewportOncoprintSpace = function(model) {
	var scroll_x = this.scroll_x;
	var scroll_y = this.scroll_y;
	var zoom_x = model.getHorzZoom();
	var zoom_y = model.getVertZoom();
	
	var window_left = Math.round(scroll_x / zoom_x);
	var window_right = Math.round((scroll_x + this.visible_area_width) / zoom_x);
	var window_top = Math.round(scroll_y / zoom_y);
	var window_bottom = Math.round((scroll_y + model.getCellViewHeight()) / zoom_y);
	
	return {
	    'top': window_top,
	    'bottom': window_bottom,
	    'left': window_left,
	    'right': window_right
	};
    }
    OncoprintWebGLCellView.prototype.isUsable = function () {
	return this.ctx !== null;
    }
    OncoprintWebGLCellView.prototype.removeTrack = function (model, track_id) {
	delete this.identified_shape_list_list[track_id];
	delete this.vertex_data[track_id];
	delete this.vertex_column_array[track_id];
	delete this.id_to_first_vertex_index[track_id];
	
	clearTrackPositionAndColorBuffers(this, model, track_id);
	clearTrackColumnBuffers(this, model, track_id);
	
	if (!this.rendering_suppressed) {
	    renderAllTracks(this, model);
	};
    }
    OncoprintWebGLCellView.prototype.moveTrack = function (model) {
	if (!this.rendering_suppressed) {
	    renderAllTracks(this, model);
	};
    }
    OncoprintWebGLCellView.prototype.setTrackGroupOrder = function(model) {
	renderAllTracks(this, model);
    }
    
    OncoprintWebGLCellView.prototype.addTracks = function (model, track_ids) {
	if (this.rendering_suppressed) {
	    return;
	};
	for (var i=0; i<track_ids.length; i++) {
	    getShapes(this, model, track_ids[i]);
	    computeVertexPositionsAndVertexColors(this, model, track_ids[i]);
	    computeVertexColumns(this, model, track_ids[i]);
	}
	renderAllTracks(this, model);
    }
    OncoprintWebGLCellView.prototype.setIdOrder = function(model, ids) {
	if (this.rendering_suppressed) {
	    return;
	};
	var track_ids = model.getTracks();
	for (var i=0; i<track_ids.length; i++) {
	    computeVertexColumns(this, model, track_ids[i]);
	}
	renderAllTracks(this, model);
    }
    OncoprintWebGLCellView.prototype.setTrackGroupSortPriority = function(model) {
	if (this.rendering_suppressed) {
	    return;
	};
	renderAllTracks(this, model);
    }
    OncoprintWebGLCellView.prototype.sort = function(model) {
	if (this.rendering_suppressed) {
	    return;
	};
	var track_ids = model.getTracks();
	for (var i=0; i<track_ids.length; i++) {
	    computeVertexPositionsAndVertexColors(this, model, track_ids[i]); // need to recompute because the vertexes are in sorted order for clipping
	    computeVertexColumns(this, model, track_ids[i]);
	}
	renderAllTracks(this, model);
    }
    OncoprintWebGLCellView.prototype.suppressRendering = function() {
	this.rendering_suppressed = true;
    }
    OncoprintWebGLCellView.prototype.releaseRendering = function(model) {
	this.rendering_suppressed = false;
	updateAntialiasSetting(this, model);
	var track_ids = model.getTracks();
	for (var i=0; i<track_ids.length; i++) {
	    getShapes(this, model, track_ids[i]);
	    computeVertexPositionsAndVertexColors(this, model, track_ids[i]);
	    computeVertexColumns(this, model, track_ids[i]);
	}
	renderAllTracks(this, model);
    }
    OncoprintWebGLCellView.prototype.hideIds = function(model) {
	if (this.rendering_suppressed) {
	    return;
	};
	var track_ids = model.getTracks();
	for (var i=0; i<track_ids.length; i++) {
	    computeVertexColumns(this, model, track_ids[i]);
	}
	renderAllTracks(this, model);
    }
    OncoprintWebGLCellView.prototype.setTrackImportantIds = function(model, track_id) {
        if (this.rendering_suppressed) {
            return;
        };
        getShapes(this, model, track_id);
        computeVertexPositionsAndVertexColors(this, model, track_id);
        computeVertexColumns(this, model, track_id);
        renderAllTracks(this, model);
    }
    OncoprintWebGLCellView.prototype.setTrackData = function(model, track_id) {
	if (this.rendering_suppressed) {
	    return;
	};
	getShapes(this, model, track_id);
	computeVertexPositionsAndVertexColors(this, model, track_id);
	computeVertexColumns(this, model, track_id);
	renderAllTracks(this, model);
    }
     OncoprintWebGLCellView.prototype.setRuleSet = function(model, target_track_id) {
	 if (this.rendering_suppressed) {
	    return;
	};
	getShapes(this, model, target_track_id);
	computeVertexPositionsAndVertexColors(this, model, target_track_id);
	renderAllTracks(this, model);
    }
    OncoprintWebGLCellView.prototype.shareRuleSet = function(model, target_track_id) {
	if (this.rendering_suppressed) {
	    return;
	};
	getShapes(this, model, target_track_id);
	computeVertexPositionsAndVertexColors(this, model, target_track_id);
	renderAllTracks(this, model);
    }
    OncoprintWebGLCellView.prototype.setSortConfig = function(model) {
	if (this.rendering_suppressed) {
	    return;
	};
	this.sort(model);
    }
    
    OncoprintWebGLCellView.prototype.setHorzScroll = function(model) {
	this.setScroll(model);
    }
    
    OncoprintWebGLCellView.prototype.setVertScroll = function(model) {
	this.setScroll(model);
    }
    
    OncoprintWebGLCellView.prototype.setScroll = function(model) {
	this.scroll_x = model.getHorzScroll();
	this.scroll_y = model.getVertScroll();
	if (!this.rendering_suppressed) {
	    renderAllTracks(this, model, true);
	};
    }
    
    var updateAntialiasSetting = function(view, model) {
	var cell_width = model.getCellWidth();
	if (cell_width < view.antialias_on_cell_width_thresh) {
	    if (!view.antialias) {
		view.antialias = true;
		refreshCanvas(view, model);
	    }
	} else {
	    if (view.antialias) {
		view.antialias = false;
		refreshCanvas(view, model);
	    }
	}
    };
    
    OncoprintWebGLCellView.prototype.setZoom = function(model) {
	if (!this.rendering_suppressed) {
        updateAntialiasSetting(this, model);
	    renderAllTracks(this, model);
	};
    }
    
    OncoprintWebGLCellView.prototype.setHorzZoom = function(model) {
	if (!this.rendering_suppressed) {
        updateAntialiasSetting(this, model);
	    renderAllTracks(this, model);
	};
    }
    
    OncoprintWebGLCellView.prototype.setVertZoom = function(model) {
	if (this.rendering_suppressed) {
	    return;
	};
	renderAllTracks(this, model);
    }
    
    OncoprintWebGLCellView.prototype.setViewport = function(model) {
	this.scroll_x = model.getHorzScroll();
	this.scroll_y = model.getVertScroll();
	if (!this.rendering_suppressed) {
        updateAntialiasSetting(this, model);
	    renderAllTracks(this, model);
	};
    }
    
    OncoprintWebGLCellView.prototype.getTotalWidth = function(model, base) {
	return (model.getCellWidth(base) + model.getCellPadding(base))*model.getIdOrder().length;
    }
    
    OncoprintWebGLCellView.prototype.getWidth = function() {
	return this.visible_area_width;
    }
    
    OncoprintWebGLCellView.prototype.setWidth = function(w, model) {
	this.visible_area_width = w;
	if (this.rendering_suppressed) {
	    return;
	};
	renderAllTracks(this, model); // in the process it will call resizeAndClear
    }
    
    OncoprintWebGLCellView.prototype.setCellPaddingOn = function(model) {
	if (this.rendering_suppressed) {
	    return;
	};
	var track_ids = model.getTracks();
	for (var i=0; i<track_ids.length; i++) {
	    if (!model.getTrackHasColumnSpacing(track_ids[i])) {
		// We need to recompute shapes for tracks that don't have column spacing,
		// because for those we're redefining the base width for shape generation.
		getShapes(this, model, track_ids[i]);
		computeVertexPositionsAndVertexColors(this, model, track_ids[i]);
	    }
	    computeVertexColumns(this, model, track_ids[i]);
	}
	renderAllTracks(this, model);
    }
    
    OncoprintWebGLCellView.prototype.getDummyScrollDivClientSize = function() {
	return this.dummy_scroll_div_client_size.get();
    }
    
    OncoprintWebGLCellView.prototype.toSVGGroup = function(model, offset_x, offset_y) {
	var root = svgfactory.group((offset_x || 0), (offset_y || 0));
	var cell_tops = model.getCellTops();
	var tracks = model.getTracks();
	var zoomedColumnLeft = model.getZoomedColumnLeft();
	for (var i=0; i<tracks.length; i++) {
	    var track_id = tracks[i];
	    var offset_y = cell_tops[track_id];
	    var identified_shape_list_list = model.getIdentifiedShapeListList(track_id, false, true);
	    for (var j=0; j<identified_shape_list_list.length; j++) {
		var id_sl = identified_shape_list_list[j];
		var id = id_sl.id;
		var sl = id_sl.shape_list;
		var offset_x = zoomedColumnLeft[id];
		if (typeof offset_x === 'undefined') {
		    // hidden id
		    continue;
		}
		for (var h=0; h<sl.length; h++) {
		    root.appendChild(svgfactory.fromShape(sl[h], offset_x, offset_y));
		}
	    }
	}
	return root;
    }

    OncoprintWebGLCellView.prototype.destroy = function() {
    	this.$overlay_canvas.off(); // clear all handlers so that it can be garbage collected
		$(document).off("mousemove", self.mouseMoveHandler);
	}

    return OncoprintWebGLCellView;
})();

module.exports = OncoprintWebGLCellView;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

var glMatrix = __webpack_require__(1);

/**
 * @class 2x2 Matrix
 * @name mat2
 */
var mat2 = {};

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */
mat2.create = function() {
    var out = new glMatrix.ARRAY_TYPE(4);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */
mat2.clone = function(a) {
    var out = new glMatrix.ARRAY_TYPE(4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */
mat2.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */
mat2.fromValues = function(m00, m01, m10, m11) {
    var out = new glMatrix.ARRAY_TYPE(4);
    out[0] = m00;
    out[1] = m01;
    out[2] = m10;
    out[3] = m11;
    return out;
};

/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */
mat2.set = function(out, m00, m01, m10, m11) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m10;
    out[3] = m11;
    return out;
};


/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.transpose = function(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a1 = a[1];
        out[1] = a[2];
        out[2] = a1;
    } else {
        out[0] = a[0];
        out[1] = a[2];
        out[2] = a[1];
        out[3] = a[3];
    }
    
    return out;
};

/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.invert = function(out, a) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],

        // Calculate the determinant
        det = a0 * a3 - a2 * a1;

    if (!det) {
        return null;
    }
    det = 1.0 / det;
    
    out[0] =  a3 * det;
    out[1] = -a1 * det;
    out[2] = -a2 * det;
    out[3] =  a0 * det;

    return out;
};

/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.adjoint = function(out, a) {
    // Caching this value is nessecary if out == a
    var a0 = a[0];
    out[0] =  a[3];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] =  a0;

    return out;
};

/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */
mat2.determinant = function (a) {
    return a[0] * a[3] - a[2] * a[1];
};

/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
mat2.multiply = function (out, a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    return out;
};

/**
 * Alias for {@link mat2.multiply}
 * @function
 */
mat2.mul = mat2.multiply;

/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
mat2.rotate = function (out, a, rad) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        s = Math.sin(rad),
        c = Math.cos(rad);
    out[0] = a0 *  c + a2 * s;
    out[1] = a1 *  c + a3 * s;
    out[2] = a0 * -s + a2 * c;
    out[3] = a1 * -s + a3 * c;
    return out;
};

/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/
mat2.scale = function(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        v0 = v[0], v1 = v[1];
    out[0] = a0 * v0;
    out[1] = a1 * v0;
    out[2] = a2 * v1;
    out[3] = a3 * v1;
    return out;
};

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
mat2.fromRotation = function(out, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad);
    out[0] = c;
    out[1] = s;
    out[2] = -s;
    out[3] = c;
    return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2} out
 */
mat2.fromScaling = function(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = v[1];
    return out;
}

/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat2.str = function (a) {
    return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
};

/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat2.frob = function (a) {
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2)))
};

/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix 
 * @param {mat2} D the diagonal matrix 
 * @param {mat2} U the upper triangular matrix 
 * @param {mat2} a the input matrix to factorize
 */

mat2.LDU = function (L, D, U, a) { 
    L[2] = a[2]/a[0]; 
    U[0] = a[0]; 
    U[1] = a[1]; 
    U[3] = a[3] - L[2] * U[1]; 
    return [L, D, U];       
}; 

/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
mat2.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
};

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
mat2.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    return out;
};

/**
 * Alias for {@link mat2.subtract}
 * @function
 */
mat2.sub = mat2.subtract;

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
mat2.exactEquals = function (a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
};

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
mat2.equals = function (a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
};

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */
mat2.multiplyScalar = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
};

/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */
mat2.multiplyScalarAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    out[3] = a[3] + (b[3] * scale);
    return out;
};

module.exports = mat2;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

var glMatrix = __webpack_require__(1);

/**
 * @class 2x3 Matrix
 * @name mat2d
 * 
 * @description 
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, c, tx,
 *  b, d, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, c, tx,
 *  b, d, ty,
 *  0, 0, 1]
 * </pre>
 * The last row is ignored so the array is shorter and operations are faster.
 */
var mat2d = {};

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */
mat2d.create = function() {
    var out = new glMatrix.ARRAY_TYPE(6);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    return out;
};

/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */
mat2d.clone = function(a) {
    var out = new glMatrix.ARRAY_TYPE(6);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
};

/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
mat2d.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
};

/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */
mat2d.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    return out;
};

/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */
mat2d.fromValues = function(a, b, c, d, tx, ty) {
    var out = new glMatrix.ARRAY_TYPE(6);
    out[0] = a;
    out[1] = b;
    out[2] = c;
    out[3] = d;
    out[4] = tx;
    out[5] = ty;
    return out;
};

/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */
mat2d.set = function(out, a, b, c, d, tx, ty) {
    out[0] = a;
    out[1] = b;
    out[2] = c;
    out[3] = d;
    out[4] = tx;
    out[5] = ty;
    return out;
};

/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
mat2d.invert = function(out, a) {
    var aa = a[0], ab = a[1], ac = a[2], ad = a[3],
        atx = a[4], aty = a[5];

    var det = aa * ad - ab * ac;
    if(!det){
        return null;
    }
    det = 1.0 / det;

    out[0] = ad * det;
    out[1] = -ab * det;
    out[2] = -ac * det;
    out[3] = aa * det;
    out[4] = (ac * aty - ad * atx) * det;
    out[5] = (ab * atx - aa * aty) * det;
    return out;
};

/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */
mat2d.determinant = function (a) {
    return a[0] * a[3] - a[1] * a[2];
};

/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
mat2d.multiply = function (out, a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    out[4] = a0 * b4 + a2 * b5 + a4;
    out[5] = a1 * b4 + a3 * b5 + a5;
    return out;
};

/**
 * Alias for {@link mat2d.multiply}
 * @function
 */
mat2d.mul = mat2d.multiply;

/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
mat2d.rotate = function (out, a, rad) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        s = Math.sin(rad),
        c = Math.cos(rad);
    out[0] = a0 *  c + a2 * s;
    out[1] = a1 *  c + a3 * s;
    out[2] = a0 * -s + a2 * c;
    out[3] = a1 * -s + a3 * c;
    out[4] = a4;
    out[5] = a5;
    return out;
};

/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/
mat2d.scale = function(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        v0 = v[0], v1 = v[1];
    out[0] = a0 * v0;
    out[1] = a1 * v0;
    out[2] = a2 * v1;
    out[3] = a3 * v1;
    out[4] = a4;
    out[5] = a5;
    return out;
};

/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/
mat2d.translate = function(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        v0 = v[0], v1 = v[1];
    out[0] = a0;
    out[1] = a1;
    out[2] = a2;
    out[3] = a3;
    out[4] = a0 * v0 + a2 * v1 + a4;
    out[5] = a1 * v0 + a3 * v1 + a5;
    return out;
};

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
mat2d.fromRotation = function(out, rad) {
    var s = Math.sin(rad), c = Math.cos(rad);
    out[0] = c;
    out[1] = s;
    out[2] = -s;
    out[3] = c;
    out[4] = 0;
    out[5] = 0;
    return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2d} out
 */
mat2d.fromScaling = function(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = v[1];
    out[4] = 0;
    out[5] = 0;
    return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat2d} out
 */
mat2d.fromTranslation = function(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = v[0];
    out[5] = v[1];
    return out;
}

/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat2d.str = function (a) {
    return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
                    a[3] + ', ' + a[4] + ', ' + a[5] + ')';
};

/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat2d.frob = function (a) { 
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1))
}; 

/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
mat2d.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    return out;
};

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
mat2d.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    return out;
};

/**
 * Alias for {@link mat2d.subtract}
 * @function
 */
mat2d.sub = mat2d.subtract;

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */
mat2d.multiplyScalar = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    return out;
};

/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */
mat2d.multiplyScalarAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    out[3] = a[3] + (b[3] * scale);
    out[4] = a[4] + (b[4] * scale);
    out[5] = a[5] + (b[5] * scale);
    return out;
};

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
mat2d.exactEquals = function (a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
};

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
mat2d.equals = function (a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
            Math.abs(a4 - b4) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
            Math.abs(a5 - b5) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a5), Math.abs(b5)));
};

module.exports = mat2d;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

var glMatrix = __webpack_require__(1);

/**
 * @class 4x4 Matrix
 * @name mat4
 */
var mat4 = {
  scalar: {},
  SIMD: {},
};

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
mat4.create = function() {
    var out = new glMatrix.ARRAY_TYPE(16);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
mat4.clone = function(a) {
    var out = new glMatrix.ARRAY_TYPE(16);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */
mat4.fromValues = function(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    var out = new glMatrix.ARRAY_TYPE(16);
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
};

/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */
mat4.set = function(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
};


/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
mat4.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};

/**
 * Transpose the values of a mat4 not using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.scalar.transpose = function(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a03 = a[3],
            a12 = a[6], a13 = a[7],
            a23 = a[11];

        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }

    return out;
};

/**
 * Transpose the values of a mat4 using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.SIMD.transpose = function(out, a) {
    var a0, a1, a2, a3,
        tmp01, tmp23,
        out0, out1, out2, out3;

    a0 = SIMD.Float32x4.load(a, 0);
    a1 = SIMD.Float32x4.load(a, 4);
    a2 = SIMD.Float32x4.load(a, 8);
    a3 = SIMD.Float32x4.load(a, 12);

    tmp01 = SIMD.Float32x4.shuffle(a0, a1, 0, 1, 4, 5);
    tmp23 = SIMD.Float32x4.shuffle(a2, a3, 0, 1, 4, 5);
    out0  = SIMD.Float32x4.shuffle(tmp01, tmp23, 0, 2, 4, 6);
    out1  = SIMD.Float32x4.shuffle(tmp01, tmp23, 1, 3, 5, 7);
    SIMD.Float32x4.store(out, 0,  out0);
    SIMD.Float32x4.store(out, 4,  out1);

    tmp01 = SIMD.Float32x4.shuffle(a0, a1, 2, 3, 6, 7);
    tmp23 = SIMD.Float32x4.shuffle(a2, a3, 2, 3, 6, 7);
    out2  = SIMD.Float32x4.shuffle(tmp01, tmp23, 0, 2, 4, 6);
    out3  = SIMD.Float32x4.shuffle(tmp01, tmp23, 1, 3, 5, 7);
    SIMD.Float32x4.store(out, 8,  out2);
    SIMD.Float32x4.store(out, 12, out3);

    return out;
};

/**
 * Transpse a mat4 using SIMD if available and enabled
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.transpose = glMatrix.USE_SIMD ? mat4.SIMD.transpose : mat4.scalar.transpose;

/**
 * Inverts a mat4 not using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.scalar.invert = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        // Calculate the determinant
        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) {
        return null;
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

    return out;
};

/**
 * Inverts a mat4 using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.SIMD.invert = function(out, a) {
  var row0, row1, row2, row3,
      tmp1,
      minor0, minor1, minor2, minor3,
      det,
      a0 = SIMD.Float32x4.load(a, 0),
      a1 = SIMD.Float32x4.load(a, 4),
      a2 = SIMD.Float32x4.load(a, 8),
      a3 = SIMD.Float32x4.load(a, 12);

  // Compute matrix adjugate
  tmp1 = SIMD.Float32x4.shuffle(a0, a1, 0, 1, 4, 5);
  row1 = SIMD.Float32x4.shuffle(a2, a3, 0, 1, 4, 5);
  row0 = SIMD.Float32x4.shuffle(tmp1, row1, 0, 2, 4, 6);
  row1 = SIMD.Float32x4.shuffle(row1, tmp1, 1, 3, 5, 7);
  tmp1 = SIMD.Float32x4.shuffle(a0, a1, 2, 3, 6, 7);
  row3 = SIMD.Float32x4.shuffle(a2, a3, 2, 3, 6, 7);
  row2 = SIMD.Float32x4.shuffle(tmp1, row3, 0, 2, 4, 6);
  row3 = SIMD.Float32x4.shuffle(row3, tmp1, 1, 3, 5, 7);

  tmp1   = SIMD.Float32x4.mul(row2, row3);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
  minor0 = SIMD.Float32x4.mul(row1, tmp1);
  minor1 = SIMD.Float32x4.mul(row0, tmp1);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
  minor0 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row1, tmp1), minor0);
  minor1 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor1);
  minor1 = SIMD.Float32x4.swizzle(minor1, 2, 3, 0, 1);

  tmp1   = SIMD.Float32x4.mul(row1, row2);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
  minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor0);
  minor3 = SIMD.Float32x4.mul(row0, tmp1);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
  minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row3, tmp1));
  minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor3);
  minor3 = SIMD.Float32x4.swizzle(minor3, 2, 3, 0, 1);

  tmp1   = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(row1, 2, 3, 0, 1), row3);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
  row2   = SIMD.Float32x4.swizzle(row2, 2, 3, 0, 1);
  minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor0);
  minor2 = SIMD.Float32x4.mul(row0, tmp1);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
  minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row2, tmp1));
  minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor2);
  minor2 = SIMD.Float32x4.swizzle(minor2, 2, 3, 0, 1);

  tmp1   = SIMD.Float32x4.mul(row0, row1);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
  minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor2);
  minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row2, tmp1), minor3);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
  minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row3, tmp1), minor2);
  minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row2, tmp1));

  tmp1   = SIMD.Float32x4.mul(row0, row3);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
  minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row2, tmp1));
  minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor2);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
  minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor1);
  minor2 = SIMD.Float32x4.sub(minor2, SIMD.Float32x4.mul(row1, tmp1));

  tmp1   = SIMD.Float32x4.mul(row0, row2);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
  minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor1);
  minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row1, tmp1));
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
  minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row3, tmp1));
  minor3 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor3);

  // Compute matrix determinant
  det   = SIMD.Float32x4.mul(row0, minor0);
  det   = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(det, 2, 3, 0, 1), det);
  det   = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(det, 1, 0, 3, 2), det);
  tmp1  = SIMD.Float32x4.reciprocalApproximation(det);
  det   = SIMD.Float32x4.sub(
               SIMD.Float32x4.add(tmp1, tmp1),
               SIMD.Float32x4.mul(det, SIMD.Float32x4.mul(tmp1, tmp1)));
  det   = SIMD.Float32x4.swizzle(det, 0, 0, 0, 0);
  if (!det) {
      return null;
  }

  // Compute matrix inverse
  SIMD.Float32x4.store(out, 0,  SIMD.Float32x4.mul(det, minor0));
  SIMD.Float32x4.store(out, 4,  SIMD.Float32x4.mul(det, minor1));
  SIMD.Float32x4.store(out, 8,  SIMD.Float32x4.mul(det, minor2));
  SIMD.Float32x4.store(out, 12, SIMD.Float32x4.mul(det, minor3));
  return out;
}

/**
 * Inverts a mat4 using SIMD if available and enabled
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.invert = glMatrix.USE_SIMD ? mat4.SIMD.invert : mat4.scalar.invert;

/**
 * Calculates the adjugate of a mat4 not using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.scalar.adjoint = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    out[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
    out[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
    out[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
    out[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
    out[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
    out[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
    out[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
    out[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
    out[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
    out[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
    out[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
    out[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
    out[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
    return out;
};

/**
 * Calculates the adjugate of a mat4 using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.SIMD.adjoint = function(out, a) {
  var a0, a1, a2, a3;
  var row0, row1, row2, row3;
  var tmp1;
  var minor0, minor1, minor2, minor3;

  var a0 = SIMD.Float32x4.load(a, 0);
  var a1 = SIMD.Float32x4.load(a, 4);
  var a2 = SIMD.Float32x4.load(a, 8);
  var a3 = SIMD.Float32x4.load(a, 12);

  // Transpose the source matrix.  Sort of.  Not a true transpose operation
  tmp1 = SIMD.Float32x4.shuffle(a0, a1, 0, 1, 4, 5);
  row1 = SIMD.Float32x4.shuffle(a2, a3, 0, 1, 4, 5);
  row0 = SIMD.Float32x4.shuffle(tmp1, row1, 0, 2, 4, 6);
  row1 = SIMD.Float32x4.shuffle(row1, tmp1, 1, 3, 5, 7);

  tmp1 = SIMD.Float32x4.shuffle(a0, a1, 2, 3, 6, 7);
  row3 = SIMD.Float32x4.shuffle(a2, a3, 2, 3, 6, 7);
  row2 = SIMD.Float32x4.shuffle(tmp1, row3, 0, 2, 4, 6);
  row3 = SIMD.Float32x4.shuffle(row3, tmp1, 1, 3, 5, 7);

  tmp1   = SIMD.Float32x4.mul(row2, row3);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
  minor0 = SIMD.Float32x4.mul(row1, tmp1);
  minor1 = SIMD.Float32x4.mul(row0, tmp1);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
  minor0 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row1, tmp1), minor0);
  minor1 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor1);
  minor1 = SIMD.Float32x4.swizzle(minor1, 2, 3, 0, 1);

  tmp1   = SIMD.Float32x4.mul(row1, row2);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
  minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor0);
  minor3 = SIMD.Float32x4.mul(row0, tmp1);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
  minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row3, tmp1));
  minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor3);
  minor3 = SIMD.Float32x4.swizzle(minor3, 2, 3, 0, 1);

  tmp1   = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(row1, 2, 3, 0, 1), row3);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
  row2   = SIMD.Float32x4.swizzle(row2, 2, 3, 0, 1);
  minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor0);
  minor2 = SIMD.Float32x4.mul(row0, tmp1);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
  minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row2, tmp1));
  minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor2);
  minor2 = SIMD.Float32x4.swizzle(minor2, 2, 3, 0, 1);

  tmp1   = SIMD.Float32x4.mul(row0, row1);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
  minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor2);
  minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row2, tmp1), minor3);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
  minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row3, tmp1), minor2);
  minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row2, tmp1));

  tmp1   = SIMD.Float32x4.mul(row0, row3);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
  minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row2, tmp1));
  minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor2);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
  minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor1);
  minor2 = SIMD.Float32x4.sub(minor2, SIMD.Float32x4.mul(row1, tmp1));

  tmp1   = SIMD.Float32x4.mul(row0, row2);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
  minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor1);
  minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row1, tmp1));
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
  minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row3, tmp1));
  minor3 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor3);

  SIMD.Float32x4.store(out, 0,  minor0);
  SIMD.Float32x4.store(out, 4,  minor1);
  SIMD.Float32x4.store(out, 8,  minor2);
  SIMD.Float32x4.store(out, 12, minor3);
  return out;
};

/**
 * Calculates the adjugate of a mat4 using SIMD if available and enabled
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
 mat4.adjoint = glMatrix.USE_SIMD ? mat4.SIMD.adjoint : mat4.scalar.adjoint;

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
mat4.determinant = function (a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32;

    // Calculate the determinant
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
};

/**
 * Multiplies two mat4's explicitly using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand, must be a Float32Array
 * @param {mat4} b the second operand, must be a Float32Array
 * @returns {mat4} out
 */
mat4.SIMD.multiply = function (out, a, b) {
    var a0 = SIMD.Float32x4.load(a, 0);
    var a1 = SIMD.Float32x4.load(a, 4);
    var a2 = SIMD.Float32x4.load(a, 8);
    var a3 = SIMD.Float32x4.load(a, 12);

    var b0 = SIMD.Float32x4.load(b, 0);
    var out0 = SIMD.Float32x4.add(
                   SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 0, 0, 0, 0), a0),
                   SIMD.Float32x4.add(
                       SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 1, 1, 1, 1), a1),
                       SIMD.Float32x4.add(
                           SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 2, 2, 2, 2), a2),
                           SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 3, 3, 3, 3), a3))));
    SIMD.Float32x4.store(out, 0, out0);

    var b1 = SIMD.Float32x4.load(b, 4);
    var out1 = SIMD.Float32x4.add(
                   SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 0, 0, 0, 0), a0),
                   SIMD.Float32x4.add(
                       SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 1, 1, 1, 1), a1),
                       SIMD.Float32x4.add(
                           SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 2, 2, 2, 2), a2),
                           SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 3, 3, 3, 3), a3))));
    SIMD.Float32x4.store(out, 4, out1);

    var b2 = SIMD.Float32x4.load(b, 8);
    var out2 = SIMD.Float32x4.add(
                   SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 0, 0, 0, 0), a0),
                   SIMD.Float32x4.add(
                       SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 1, 1, 1, 1), a1),
                       SIMD.Float32x4.add(
                               SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 2, 2, 2, 2), a2),
                               SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 3, 3, 3, 3), a3))));
    SIMD.Float32x4.store(out, 8, out2);

    var b3 = SIMD.Float32x4.load(b, 12);
    var out3 = SIMD.Float32x4.add(
                   SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 0, 0, 0, 0), a0),
                   SIMD.Float32x4.add(
                        SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 1, 1, 1, 1), a1),
                        SIMD.Float32x4.add(
                            SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 2, 2, 2, 2), a2),
                            SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 3, 3, 3, 3), a3))));
    SIMD.Float32x4.store(out, 12, out3);

    return out;
};

/**
 * Multiplies two mat4's explicitly not using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
mat4.scalar.multiply = function (out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    // Cache only the current line of the second matrix
    var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
    out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
    out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
    out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
    return out;
};

/**
 * Multiplies two mat4's using SIMD if available and enabled
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
mat4.multiply = glMatrix.USE_SIMD ? mat4.SIMD.multiply : mat4.scalar.multiply;

/**
 * Alias for {@link mat4.multiply}
 * @function
 */
mat4.mul = mat4.multiply;

/**
 * Translate a mat4 by the given vector not using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
mat4.scalar.translate = function (out, a, v) {
    var x = v[0], y = v[1], z = v[2],
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23;

    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
        a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
        a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

        out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
        out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
        out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }

    return out;
};

/**
 * Translates a mat4 by the given vector using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
mat4.SIMD.translate = function (out, a, v) {
    var a0 = SIMD.Float32x4.load(a, 0),
        a1 = SIMD.Float32x4.load(a, 4),
        a2 = SIMD.Float32x4.load(a, 8),
        a3 = SIMD.Float32x4.load(a, 12),
        vec = SIMD.Float32x4(v[0], v[1], v[2] , 0);

    if (a !== out) {
        out[0] = a[0]; out[1] = a[1]; out[2] = a[2]; out[3] = a[3];
        out[4] = a[4]; out[5] = a[5]; out[6] = a[6]; out[7] = a[7];
        out[8] = a[8]; out[9] = a[9]; out[10] = a[10]; out[11] = a[11];
    }

    a0 = SIMD.Float32x4.mul(a0, SIMD.Float32x4.swizzle(vec, 0, 0, 0, 0));
    a1 = SIMD.Float32x4.mul(a1, SIMD.Float32x4.swizzle(vec, 1, 1, 1, 1));
    a2 = SIMD.Float32x4.mul(a2, SIMD.Float32x4.swizzle(vec, 2, 2, 2, 2));

    var t0 = SIMD.Float32x4.add(a0, SIMD.Float32x4.add(a1, SIMD.Float32x4.add(a2, a3)));
    SIMD.Float32x4.store(out, 12, t0);

    return out;
};

/**
 * Translates a mat4 by the given vector using SIMD if available and enabled
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
mat4.translate = glMatrix.USE_SIMD ? mat4.SIMD.translate : mat4.scalar.translate;

/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
mat4.scalar.scale = function(out, a, v) {
    var x = v[0], y = v[1], z = v[2];

    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/**
 * Scales the mat4 by the dimensions in the given vec3 using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
mat4.SIMD.scale = function(out, a, v) {
    var a0, a1, a2;
    var vec = SIMD.Float32x4(v[0], v[1], v[2], 0);

    a0 = SIMD.Float32x4.load(a, 0);
    SIMD.Float32x4.store(
        out, 0, SIMD.Float32x4.mul(a0, SIMD.Float32x4.swizzle(vec, 0, 0, 0, 0)));

    a1 = SIMD.Float32x4.load(a, 4);
    SIMD.Float32x4.store(
        out, 4, SIMD.Float32x4.mul(a1, SIMD.Float32x4.swizzle(vec, 1, 1, 1, 1)));

    a2 = SIMD.Float32x4.load(a, 8);
    SIMD.Float32x4.store(
        out, 8, SIMD.Float32x4.mul(a2, SIMD.Float32x4.swizzle(vec, 2, 2, 2, 2)));

    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/**
 * Scales the mat4 by the dimensions in the given vec3 using SIMD if available and enabled
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 */
mat4.scale = glMatrix.USE_SIMD ? mat4.SIMD.scale : mat4.scalar.scale;

/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
mat4.rotate = function (out, a, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2],
        len = Math.sqrt(x * x + y * y + z * z),
        s, c, t,
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23,
        b00, b01, b02,
        b10, b11, b12,
        b20, b21, b22;

    if (Math.abs(len) < glMatrix.EPSILON) { return null; }

    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;

    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;

    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

    // Construct the elements of the rotation matrix
    b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
    b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
    b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

    // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
};

/**
 * Rotates a matrix by the given angle around the X axis not using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.scalar.rotateX = function (out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[0]  = a[0];
        out[1]  = a[1];
        out[2]  = a[2];
        out[3]  = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
};

/**
 * Rotates a matrix by the given angle around the X axis using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.SIMD.rotateX = function (out, a, rad) {
    var s = SIMD.Float32x4.splat(Math.sin(rad)),
        c = SIMD.Float32x4.splat(Math.cos(rad));

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
      out[0]  = a[0];
      out[1]  = a[1];
      out[2]  = a[2];
      out[3]  = a[3];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    var a_1 = SIMD.Float32x4.load(a, 4);
    var a_2 = SIMD.Float32x4.load(a, 8);
    SIMD.Float32x4.store(out, 4,
                         SIMD.Float32x4.add(SIMD.Float32x4.mul(a_1, c), SIMD.Float32x4.mul(a_2, s)));
    SIMD.Float32x4.store(out, 8,
                         SIMD.Float32x4.sub(SIMD.Float32x4.mul(a_2, c), SIMD.Float32x4.mul(a_1, s)));
    return out;
};

/**
 * Rotates a matrix by the given angle around the X axis using SIMD if availabe and enabled
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.rotateX = glMatrix.USE_SIMD ? mat4.SIMD.rotateX : mat4.scalar.rotateX;

/**
 * Rotates a matrix by the given angle around the Y axis not using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.scalar.rotateY = function (out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[4]  = a[4];
        out[5]  = a[5];
        out[6]  = a[6];
        out[7]  = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
};

/**
 * Rotates a matrix by the given angle around the Y axis using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.SIMD.rotateY = function (out, a, rad) {
    var s = SIMD.Float32x4.splat(Math.sin(rad)),
        c = SIMD.Float32x4.splat(Math.cos(rad));

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[4]  = a[4];
        out[5]  = a[5];
        out[6]  = a[6];
        out[7]  = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    var a_0 = SIMD.Float32x4.load(a, 0);
    var a_2 = SIMD.Float32x4.load(a, 8);
    SIMD.Float32x4.store(out, 0,
                         SIMD.Float32x4.sub(SIMD.Float32x4.mul(a_0, c), SIMD.Float32x4.mul(a_2, s)));
    SIMD.Float32x4.store(out, 8,
                         SIMD.Float32x4.add(SIMD.Float32x4.mul(a_0, s), SIMD.Float32x4.mul(a_2, c)));
    return out;
};

/**
 * Rotates a matrix by the given angle around the Y axis if SIMD available and enabled
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
 mat4.rotateY = glMatrix.USE_SIMD ? mat4.SIMD.rotateY : mat4.scalar.rotateY;

/**
 * Rotates a matrix by the given angle around the Z axis not using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.scalar.rotateZ = function (out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[8]  = a[8];
        out[9]  = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
};

/**
 * Rotates a matrix by the given angle around the Z axis using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.SIMD.rotateZ = function (out, a, rad) {
    var s = SIMD.Float32x4.splat(Math.sin(rad)),
        c = SIMD.Float32x4.splat(Math.cos(rad));

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[8]  = a[8];
        out[9]  = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    var a_0 = SIMD.Float32x4.load(a, 0);
    var a_1 = SIMD.Float32x4.load(a, 4);
    SIMD.Float32x4.store(out, 0,
                         SIMD.Float32x4.add(SIMD.Float32x4.mul(a_0, c), SIMD.Float32x4.mul(a_1, s)));
    SIMD.Float32x4.store(out, 4,
                         SIMD.Float32x4.sub(SIMD.Float32x4.mul(a_1, c), SIMD.Float32x4.mul(a_0, s)));
    return out;
};

/**
 * Rotates a matrix by the given angle around the Z axis if SIMD available and enabled
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
 mat4.rotateZ = glMatrix.USE_SIMD ? mat4.SIMD.rotateZ : mat4.scalar.rotateZ;

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
mat4.fromTranslation = function(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */
mat4.fromScaling = function(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = v[1];
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = v[2];
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}

/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
mat4.fromRotation = function(out, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2],
        len = Math.sqrt(x * x + y * y + z * z),
        s, c, t;

    if (Math.abs(len) < glMatrix.EPSILON) { return null; }

    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;

    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;

    // Perform rotation-specific matrix multiplication
    out[0] = x * x * t + c;
    out[1] = y * x * t + z * s;
    out[2] = z * x * t - y * s;
    out[3] = 0;
    out[4] = x * y * t - z * s;
    out[5] = y * y * t + c;
    out[6] = z * y * t + x * s;
    out[7] = 0;
    out[8] = x * z * t + y * s;
    out[9] = y * z * t - x * s;
    out[10] = z * z * t + c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}

/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.fromXRotation = function(out, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad);

    // Perform axis-specific matrix multiplication
    out[0]  = 1;
    out[1]  = 0;
    out[2]  = 0;
    out[3]  = 0;
    out[4] = 0;
    out[5] = c;
    out[6] = s;
    out[7] = 0;
    out[8] = 0;
    out[9] = -s;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}

/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.fromYRotation = function(out, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad);

    // Perform axis-specific matrix multiplication
    out[0]  = c;
    out[1]  = 0;
    out[2]  = -s;
    out[3]  = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = s;
    out[9] = 0;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}

/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.fromZRotation = function(out, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad);

    // Perform axis-specific matrix multiplication
    out[0]  = c;
    out[1]  = s;
    out[2]  = 0;
    out[3]  = 0;
    out[4] = -s;
    out[5] = c;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     var quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
mat4.fromRotationTranslation = function (out, q, v) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        xy = x * y2,
        xz = x * z2,
        yy = y * y2,
        yz = y * z2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = 0;
    out[4] = xy - wz;
    out[5] = 1 - (xx + zz);
    out[6] = yz + wx;
    out[7] = 0;
    out[8] = xz + wy;
    out[9] = yz - wx;
    out[10] = 1 - (xx + yy);
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;

    return out;
};

/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
mat4.getTranslation = function (out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];

  return out;
};

/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */
mat4.getRotation = function (out, mat) {
  // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
  var trace = mat[0] + mat[5] + mat[10];
  var S = 0;

  if (trace > 0) { 
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (mat[6] - mat[9]) / S;
    out[1] = (mat[8] - mat[2]) / S; 
    out[2] = (mat[1] - mat[4]) / S; 
  } else if ((mat[0] > mat[5])&(mat[0] > mat[10])) { 
    S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
    out[3] = (mat[6] - mat[9]) / S;
    out[0] = 0.25 * S;
    out[1] = (mat[1] + mat[4]) / S; 
    out[2] = (mat[8] + mat[2]) / S; 
  } else if (mat[5] > mat[10]) { 
    S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
    out[3] = (mat[8] - mat[2]) / S;
    out[0] = (mat[1] + mat[4]) / S; 
    out[1] = 0.25 * S;
    out[2] = (mat[6] + mat[9]) / S; 
  } else { 
    S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
    out[3] = (mat[1] - mat[4]) / S;
    out[0] = (mat[8] + mat[2]) / S;
    out[1] = (mat[6] + mat[9]) / S;
    out[2] = 0.25 * S;
  }

  return out;
};

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     var quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */
mat4.fromRotationTranslationScale = function (out, q, v, s) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        xy = x * y2,
        xz = x * z2,
        yy = y * y2,
        yz = y * z2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2,
        sx = s[0],
        sy = s[1],
        sz = s[2];

    out[0] = (1 - (yy + zz)) * sx;
    out[1] = (xy + wz) * sx;
    out[2] = (xz - wy) * sx;
    out[3] = 0;
    out[4] = (xy - wz) * sy;
    out[5] = (1 - (xx + zz)) * sy;
    out[6] = (yz + wx) * sy;
    out[7] = 0;
    out[8] = (xz + wy) * sz;
    out[9] = (yz - wx) * sz;
    out[10] = (1 - (xx + yy)) * sz;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;

    return out;
};

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     var quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */
mat4.fromRotationTranslationScaleOrigin = function (out, q, v, s, o) {
  // Quaternion math
  var x = q[0], y = q[1], z = q[2], w = q[3],
      x2 = x + x,
      y2 = y + y,
      z2 = z + z,

      xx = x * x2,
      xy = x * y2,
      xz = x * z2,
      yy = y * y2,
      yz = y * z2,
      zz = z * z2,
      wx = w * x2,
      wy = w * y2,
      wz = w * z2,

      sx = s[0],
      sy = s[1],
      sz = s[2],

      ox = o[0],
      oy = o[1],
      oz = o[2];

  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0] + ox - (out[0] * ox + out[4] * oy + out[8] * oz);
  out[13] = v[1] + oy - (out[1] * ox + out[5] * oy + out[9] * oz);
  out[14] = v[2] + oz - (out[2] * ox + out[6] * oy + out[10] * oz);
  out[15] = 1;

  return out;
};

/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */
mat4.fromQuat = function (out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;

    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;

    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;

    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;

    return out;
};

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
mat4.frustum = function (out, left, right, bottom, top, near, far) {
    var rl = 1 / (right - left),
        tb = 1 / (top - bottom),
        nf = 1 / (near - far);
    out[0] = (near * 2) * rl;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = (near * 2) * tb;
    out[6] = 0;
    out[7] = 0;
    out[8] = (right + left) * rl;
    out[9] = (top + bottom) * tb;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (far * near * 2) * nf;
    out[15] = 0;
    return out;
};

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
mat4.perspective = function (out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2),
        nf = 1 / (near - far);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (2 * far * near) * nf;
    out[15] = 0;
    return out;
};

/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
mat4.perspectiveFromFieldOfView = function (out, fov, near, far) {
    var upTan = Math.tan(fov.upDegrees * Math.PI/180.0),
        downTan = Math.tan(fov.downDegrees * Math.PI/180.0),
        leftTan = Math.tan(fov.leftDegrees * Math.PI/180.0),
        rightTan = Math.tan(fov.rightDegrees * Math.PI/180.0),
        xScale = 2.0 / (leftTan + rightTan),
        yScale = 2.0 / (upTan + downTan);

    out[0] = xScale;
    out[1] = 0.0;
    out[2] = 0.0;
    out[3] = 0.0;
    out[4] = 0.0;
    out[5] = yScale;
    out[6] = 0.0;
    out[7] = 0.0;
    out[8] = -((leftTan - rightTan) * xScale * 0.5);
    out[9] = ((upTan - downTan) * yScale * 0.5);
    out[10] = far / (near - far);
    out[11] = -1.0;
    out[12] = 0.0;
    out[13] = 0.0;
    out[14] = (far * near) / (near - far);
    out[15] = 0.0;
    return out;
}

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
mat4.ortho = function (out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right),
        bt = 1 / (bottom - top),
        nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
};

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
mat4.lookAt = function (out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
        eyex = eye[0],
        eyey = eye[1],
        eyez = eye[2],
        upx = up[0],
        upy = up[1],
        upz = up[2],
        centerx = center[0],
        centery = center[1],
        centerz = center[2];

    if (Math.abs(eyex - centerx) < glMatrix.EPSILON &&
        Math.abs(eyey - centery) < glMatrix.EPSILON &&
        Math.abs(eyez - centerz) < glMatrix.EPSILON) {
        return mat4.identity(out);
    }

    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;

    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;

    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }

    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;

    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }

    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;

    return out;
};

/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat4.str = function (a) {
    return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
                    a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' +
                    a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' +
                    a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
};

/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat4.frob = function (a) {
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2) ))
};

/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
mat4.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    out[9] = a[9] + b[9];
    out[10] = a[10] + b[10];
    out[11] = a[11] + b[11];
    out[12] = a[12] + b[12];
    out[13] = a[13] + b[13];
    out[14] = a[14] + b[14];
    out[15] = a[15] + b[15];
    return out;
};

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
mat4.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    out[9] = a[9] - b[9];
    out[10] = a[10] - b[10];
    out[11] = a[11] - b[11];
    out[12] = a[12] - b[12];
    out[13] = a[13] - b[13];
    out[14] = a[14] - b[14];
    out[15] = a[15] - b[15];
    return out;
};

/**
 * Alias for {@link mat4.subtract}
 * @function
 */
mat4.sub = mat4.subtract;

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */
mat4.multiplyScalar = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    out[9] = a[9] * b;
    out[10] = a[10] * b;
    out[11] = a[11] * b;
    out[12] = a[12] * b;
    out[13] = a[13] * b;
    out[14] = a[14] * b;
    out[15] = a[15] * b;
    return out;
};

/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */
mat4.multiplyScalarAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    out[3] = a[3] + (b[3] * scale);
    out[4] = a[4] + (b[4] * scale);
    out[5] = a[5] + (b[5] * scale);
    out[6] = a[6] + (b[6] * scale);
    out[7] = a[7] + (b[7] * scale);
    out[8] = a[8] + (b[8] * scale);
    out[9] = a[9] + (b[9] * scale);
    out[10] = a[10] + (b[10] * scale);
    out[11] = a[11] + (b[11] * scale);
    out[12] = a[12] + (b[12] * scale);
    out[13] = a[13] + (b[13] * scale);
    out[14] = a[14] + (b[14] * scale);
    out[15] = a[15] + (b[15] * scale);
    return out;
};

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
mat4.exactEquals = function (a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && 
           a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && 
           a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] &&
           a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
};

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
mat4.equals = function (a, b) {
    var a0  = a[0],  a1  = a[1],  a2  = a[2],  a3  = a[3],
        a4  = a[4],  a5  = a[5],  a6  = a[6],  a7  = a[7], 
        a8  = a[8],  a9  = a[9],  a10 = a[10], a11 = a[11], 
        a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];

    var b0  = b[0],  b1  = b[1],  b2  = b[2],  b3  = b[3],
        b4  = b[4],  b5  = b[5],  b6  = b[6],  b7  = b[7], 
        b8  = b[8],  b9  = b[9],  b10 = b[10], b11 = b[11], 
        b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];

    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
            Math.abs(a4 - b4) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
            Math.abs(a5 - b5) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
            Math.abs(a6 - b6) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
            Math.abs(a7 - b7) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
            Math.abs(a8 - b8) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a8), Math.abs(b8)) &&
            Math.abs(a9 - b9) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a9), Math.abs(b9)) &&
            Math.abs(a10 - b10) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a10), Math.abs(b10)) &&
            Math.abs(a11 - b11) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a11), Math.abs(b11)) &&
            Math.abs(a12 - b12) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a12), Math.abs(b12)) &&
            Math.abs(a13 - b13) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a13), Math.abs(b13)) &&
            Math.abs(a14 - b14) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a14), Math.abs(b14)) &&
            Math.abs(a15 - b15) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a15), Math.abs(b15)));
};



module.exports = mat4;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

var glMatrix = __webpack_require__(1);
var mat3 = __webpack_require__(8);
var vec3 = __webpack_require__(9);
var vec4 = __webpack_require__(10);

/**
 * @class Quaternion
 * @name quat
 */
var quat = {};

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
quat.create = function() {
    var out = new glMatrix.ARRAY_TYPE(4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */
quat.rotationTo = (function() {
    var tmpvec3 = vec3.create();
    var xUnitVec3 = vec3.fromValues(1,0,0);
    var yUnitVec3 = vec3.fromValues(0,1,0);

    return function(out, a, b) {
        var dot = vec3.dot(a, b);
        if (dot < -0.999999) {
            vec3.cross(tmpvec3, xUnitVec3, a);
            if (vec3.length(tmpvec3) < 0.000001)
                vec3.cross(tmpvec3, yUnitVec3, a);
            vec3.normalize(tmpvec3, tmpvec3);
            quat.setAxisAngle(out, tmpvec3, Math.PI);
            return out;
        } else if (dot > 0.999999) {
            out[0] = 0;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            return out;
        } else {
            vec3.cross(tmpvec3, a, b);
            out[0] = tmpvec3[0];
            out[1] = tmpvec3[1];
            out[2] = tmpvec3[2];
            out[3] = 1 + dot;
            return quat.normalize(out, out);
        }
    };
})();

/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */
quat.setAxes = (function() {
    var matr = mat3.create();

    return function(out, view, right, up) {
        matr[0] = right[0];
        matr[3] = right[1];
        matr[6] = right[2];

        matr[1] = up[0];
        matr[4] = up[1];
        matr[7] = up[2];

        matr[2] = -view[0];
        matr[5] = -view[1];
        matr[8] = -view[2];

        return quat.normalize(out, quat.fromMat3(out, matr));
    };
})();

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */
quat.clone = vec4.clone;

/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */
quat.fromValues = vec4.fromValues;

/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */
quat.copy = vec4.copy;

/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
quat.set = vec4.set;

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
quat.identity = function(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
quat.setAxisAngle = function(out, axis, rad) {
    rad = rad * 0.5;
    var s = Math.sin(rad);
    out[0] = s * axis[0];
    out[1] = s * axis[1];
    out[2] = s * axis[2];
    out[3] = Math.cos(rad);
    return out;
};

/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {quat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */
quat.getAxisAngle = function(out_axis, q) {
    var rad = Math.acos(q[3]) * 2.0;
    var s = Math.sin(rad / 2.0);
    if (s != 0.0) {
        out_axis[0] = q[0] / s;
        out_axis[1] = q[1] / s;
        out_axis[2] = q[2] / s;
    } else {
        // If s is zero, return any axis (no rotation - axis does not matter)
        out_axis[0] = 1;
        out_axis[1] = 0;
        out_axis[2] = 0;
    }
    return rad;
};

/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
quat.add = vec4.add;

/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
quat.multiply = function(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bx = b[0], by = b[1], bz = b[2], bw = b[3];

    out[0] = ax * bw + aw * bx + ay * bz - az * by;
    out[1] = ay * bw + aw * by + az * bx - ax * bz;
    out[2] = az * bw + aw * bz + ax * by - ay * bx;
    out[3] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
};

/**
 * Alias for {@link quat.multiply}
 * @function
 */
quat.mul = quat.multiply;

/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
quat.scale = vec4.scale;

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
quat.rotateX = function (out, a, rad) {
    rad *= 0.5; 

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bx = Math.sin(rad), bw = Math.cos(rad);

    out[0] = ax * bw + aw * bx;
    out[1] = ay * bw + az * bx;
    out[2] = az * bw - ay * bx;
    out[3] = aw * bw - ax * bx;
    return out;
};

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
quat.rotateY = function (out, a, rad) {
    rad *= 0.5; 

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        by = Math.sin(rad), bw = Math.cos(rad);

    out[0] = ax * bw - az * by;
    out[1] = ay * bw + aw * by;
    out[2] = az * bw + ax * by;
    out[3] = aw * bw - ay * by;
    return out;
};

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
quat.rotateZ = function (out, a, rad) {
    rad *= 0.5; 

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bz = Math.sin(rad), bw = Math.cos(rad);

    out[0] = ax * bw + ay * bz;
    out[1] = ay * bw - ax * bz;
    out[2] = az * bw + aw * bz;
    out[3] = aw * bw - az * bz;
    return out;
};

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */
quat.calculateW = function (out, a) {
    var x = a[0], y = a[1], z = a[2];

    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
    return out;
};

/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
quat.dot = vec4.dot;

/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */
quat.lerp = vec4.lerp;

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */
quat.slerp = function (out, a, b, t) {
    // benchmarks:
    //    http://jsperf.com/quaternion-slerp-implementations

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bx = b[0], by = b[1], bz = b[2], bw = b[3];

    var        omega, cosom, sinom, scale0, scale1;

    // calc cosine
    cosom = ax * bx + ay * by + az * bz + aw * bw;
    // adjust signs (if necessary)
    if ( cosom < 0.0 ) {
        cosom = -cosom;
        bx = - bx;
        by = - by;
        bz = - bz;
        bw = - bw;
    }
    // calculate coefficients
    if ( (1.0 - cosom) > 0.000001 ) {
        // standard case (slerp)
        omega  = Math.acos(cosom);
        sinom  = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
    } else {        
        // "from" and "to" quaternions are very close 
        //  ... so we can do a linear interpolation
        scale0 = 1.0 - t;
        scale1 = t;
    }
    // calculate final values
    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;
    
    return out;
};

/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount
 * @returns {quat} out
 */
quat.sqlerp = (function () {
  var temp1 = quat.create();
  var temp2 = quat.create();
  
  return function (out, a, b, c, d, t) {
    quat.slerp(temp1, a, d, t);
    quat.slerp(temp2, b, c, t);
    quat.slerp(out, temp1, temp2, 2 * t * (1 - t));
    
    return out;
  };
}());

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
quat.invert = function(out, a) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        dot = a0*a0 + a1*a1 + a2*a2 + a3*a3,
        invDot = dot ? 1.0/dot : 0;
    
    // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

    out[0] = -a0*invDot;
    out[1] = -a1*invDot;
    out[2] = -a2*invDot;
    out[3] = a3*invDot;
    return out;
};

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
quat.conjugate = function (out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    return out;
};

/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 * @function
 */
quat.length = vec4.length;

/**
 * Alias for {@link quat.length}
 * @function
 */
quat.len = quat.length;

/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
quat.squaredLength = vec4.squaredLength;

/**
 * Alias for {@link quat.squaredLength}
 * @function
 */
quat.sqrLen = quat.squaredLength;

/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
quat.normalize = vec4.normalize;

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
quat.fromMat3 = function(out, m) {
    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
    // article "Quaternion Calculus and Fast Animation".
    var fTrace = m[0] + m[4] + m[8];
    var fRoot;

    if ( fTrace > 0.0 ) {
        // |w| > 1/2, may as well choose w > 1/2
        fRoot = Math.sqrt(fTrace + 1.0);  // 2w
        out[3] = 0.5 * fRoot;
        fRoot = 0.5/fRoot;  // 1/(4w)
        out[0] = (m[5]-m[7])*fRoot;
        out[1] = (m[6]-m[2])*fRoot;
        out[2] = (m[1]-m[3])*fRoot;
    } else {
        // |w| <= 1/2
        var i = 0;
        if ( m[4] > m[0] )
          i = 1;
        if ( m[8] > m[i*3+i] )
          i = 2;
        var j = (i+1)%3;
        var k = (i+2)%3;
        
        fRoot = Math.sqrt(m[i*3+i]-m[j*3+j]-m[k*3+k] + 1.0);
        out[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        out[3] = (m[j*3+k] - m[k*3+j]) * fRoot;
        out[j] = (m[j*3+i] + m[i*3+j]) * fRoot;
        out[k] = (m[k*3+i] + m[i*3+k]) * fRoot;
    }
    
    return out;
};

/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
quat.str = function (a) {
    return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
};

/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat} a The first quaternion.
 * @param {quat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
quat.exactEquals = vec4.exactEquals;

/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {quat} a The first vector.
 * @param {quat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
quat.equals = vec4.equals;

module.exports = quat;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

var glMatrix = __webpack_require__(1);

/**
 * @class 2 Dimensional Vector
 * @name vec2
 */
var vec2 = {};

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
vec2.create = function() {
    var out = new glMatrix.ARRAY_TYPE(2);
    out[0] = 0;
    out[1] = 0;
    return out;
};

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
vec2.clone = function(a) {
    var out = new glMatrix.ARRAY_TYPE(2);
    out[0] = a[0];
    out[1] = a[1];
    return out;
};

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
vec2.fromValues = function(x, y) {
    var out = new glMatrix.ARRAY_TYPE(2);
    out[0] = x;
    out[1] = y;
    return out;
};

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
vec2.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    return out;
};

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
vec2.set = function(out, x, y) {
    out[0] = x;
    out[1] = y;
    return out;
};

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    return out;
};

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    return out;
};

/**
 * Alias for {@link vec2.subtract}
 * @function
 */
vec2.sub = vec2.subtract;

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.multiply = function(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    return out;
};

/**
 * Alias for {@link vec2.multiply}
 * @function
 */
vec2.mul = vec2.multiply;

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.divide = function(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    return out;
};

/**
 * Alias for {@link vec2.divide}
 * @function
 */
vec2.div = vec2.divide;

/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */
vec2.ceil = function (out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    return out;
};

/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */
vec2.floor = function (out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    return out;
};

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.min = function(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    return out;
};

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.max = function(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    return out;
};

/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */
vec2.round = function (out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    return out;
};

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
vec2.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    return out;
};

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
vec2.scaleAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    return out;
};

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
vec2.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1];
    return Math.sqrt(x*x + y*y);
};

/**
 * Alias for {@link vec2.distance}
 * @function
 */
vec2.dist = vec2.distance;

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
vec2.squaredDistance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1];
    return x*x + y*y;
};

/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */
vec2.sqrDist = vec2.squaredDistance;

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
vec2.length = function (a) {
    var x = a[0],
        y = a[1];
    return Math.sqrt(x*x + y*y);
};

/**
 * Alias for {@link vec2.length}
 * @function
 */
vec2.len = vec2.length;

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
vec2.squaredLength = function (a) {
    var x = a[0],
        y = a[1];
    return x*x + y*y;
};

/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */
vec2.sqrLen = vec2.squaredLength;

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
vec2.negate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    return out;
};

/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */
vec2.inverse = function(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
};

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
vec2.normalize = function(out, a) {
    var x = a[0],
        y = a[1];
    var len = x*x + y*y;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
    }
    return out;
};

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
vec2.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1];
};

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
vec2.cross = function(out, a, b) {
    var z = a[0] * b[1] - a[1] * b[0];
    out[0] = out[1] = 0;
    out[2] = z;
    return out;
};

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */
vec2.lerp = function (out, a, b, t) {
    var ax = a[0],
        ay = a[1];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
vec2.random = function (out, scale) {
    scale = scale || 1.0;
    var r = glMatrix.RANDOM() * 2.0 * Math.PI;
    out[0] = Math.cos(r) * scale;
    out[1] = Math.sin(r) * scale;
    return out;
};

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat2 = function(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[2] * y;
    out[1] = m[1] * x + m[3] * y;
    return out;
};

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat2d = function(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
};

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat3 = function(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[3] * y + m[6];
    out[1] = m[1] * x + m[4] * y + m[7];
    return out;
};

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat4 = function(out, a, m) {
    var x = a[0], 
        y = a[1];
    out[0] = m[0] * x + m[4] * y + m[12];
    out[1] = m[1] * x + m[5] * y + m[13];
    return out;
};

/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
vec2.forEach = (function() {
    var vec = vec2.create();

    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if(!stride) {
            stride = 2;
        }

        if(!offset) {
            offset = 0;
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length);
        } else {
            l = a.length;
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i]; vec[1] = a[i+1];
            fn(vec, vec, arg);
            a[i] = vec[0]; a[i+1] = vec[1];
        }
        
        return a;
    };
})();

/**
 * Returns a string representation of a vector
 *
 * @param {vec2} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
vec2.str = function (a) {
    return 'vec2(' + a[0] + ', ' + a[1] + ')';
};

/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
vec2.exactEquals = function (a, b) {
    return a[0] === b[0] && a[1] === b[1];
};

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
vec2.equals = function (a, b) {
    var a0 = a[0], a1 = a[1];
    var b0 = b[0], b1 = b[1];
    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)));
};

module.exports = vec2;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function (tag, attrs) {
    var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs) {
	if (attrs.hasOwnProperty(k)) {
	    el.setAttribute(k, attrs[k]);
	}
    }
    return el;
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var makeSVGElement = function (tag, attrs) {
    var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs) {
	if (attrs.hasOwnProperty(k)) {
	    el.setAttribute(k, attrs[k]);
	}
    }
    return el;
};

var extractRGBA = __webpack_require__(3);

var extractColor = function(str) {
    if (str.indexOf("rgb(") > -1) {
	return {
	    'rgb': str,
	    'opacity': 1
	};
    }
    var rgba_arr = extractRGBA(str);
    return {
	'rgb': 'rgb('+rgba_arr[0]*255+','+rgba_arr[1]*255+','+rgba_arr[2]*255+')',
	'opacity': rgba_arr[3]
    };
};

var rectangleToSVG = function (params, offset_x, offset_y) {
    var stroke_color = extractColor(params.stroke);
    var fill_color = extractColor(params.fill);
    return makeSVGElement('rect', {
	width: params.width,
	height: params.height,
	x: parseFloat(params.x) + offset_x,
	y: parseFloat(params.y) + offset_y,
	stroke: stroke_color.rgb,
	'stroke-opacity': stroke_color.opacity,
	'stroke-width': params['stroke-width'],
	fill: fill_color.rgb,
	'fill-opacity': fill_color.opacity
    });
};

var triangleToSVG = function (params, offset_x, offset_y) {
    var stroke_color = extractColor(params.stroke);
    var fill_color = extractColor(params.fill);
    return makeSVGElement('polygon', {
	points: [[parseFloat(params.x1) + offset_x, parseFloat(params.y1) + offset_y], [parseFloat(params.x2) + offset_x, parseFloat(params.y2) + offset_y], [parseFloat(params.x3) + offset_x, parseFloat(params.y3) + offset_y]].map(function (a) {
	    return a[0] + ',' + a[1];
	}).join(' '),
	stroke: stroke_color.rgb,
	'stroke-opacity': stroke_color.opacity,
	'stroke-width': params['stroke-width'],
	fill: fill_color.rgb,
	'fill-opacity': fill_color.opacity
    });
};

var ellipseToSVG = function (params, offset_x, offset_y) {
    var stroke_color = extractColor(params.stroke);
    var fill_color = extractColor(params.fill);
    return makeSVGElement('ellipse', {
	rx: parseFloat(params.width) / 2,
	height: parseFloat(params.height) / 2,
	cx: parseFloat(params.x) + offset_x,
	cy: parseFloat(params.y) + offset_y,
	stroke: stroke_color.rgb,
	'stroke-opacity': stroke_color.opacity,
	'stroke-width': params['stroke-width'],
	fill: fill_color.rgb,
	'fill-opacity': fill_color.opacity
    });
};

var lineToSVG = function (params, offset_x, offset_y) {
    var stroke_color = extractColor(params.stroke);
    return makeSVGElement('line', {
	x1: parseFloat(params.x1) + offset_x,
	y1: parseFloat(params.y1) + offset_y,
	x2: parseFloat(params.x2) + offset_x,
	y2: parseFloat(params.y2) + offset_y,
	stroke: stroke_color.rgb,
	'stroke-opacity': stroke_color.opacity,
	'stroke-width': params['stroke-width'],
    });
};

module.exports = function(oncoprint_shape_computed_params, offset_x, offset_y) {
    var type = oncoprint_shape_computed_params.type;
    if (type === 'rectangle') {
	return rectangleToSVG(oncoprint_shape_computed_params, offset_x, offset_y);
    } else if (type === 'triangle') {
	return triangleToSVG(oncoprint_shape_computed_params, offset_x, offset_y);
    } else if (type === 'ellipse') {
	return ellipseToSVG(oncoprint_shape_computed_params, offset_x, offset_y);
    } else if (type === 'line') {
	return lineToSVG(oncoprint_shape_computed_params, offset_x, offset_y);
    }
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

var halfsqrt2 = Math.sqrt(2) / 2;

var extractRGBA = function (str) {
    var ret = [0, 0, 0, 1];
    if (str[0] === "#") {
	// hex, convert to rgba
	var r = parseInt(str[1] + str[2], 16);
	var g = parseInt(str[3] + str[4], 16);
	var b = parseInt(str[5] + str[6], 16);
	str = 'rgba('+r+','+g+','+b+',1)';
    }
    var match = str.match(/^[\s]*rgba\([\s]*([0-9]+)[\s]*,[\s]*([0-9]+)[\s]*,[\s]*([0-9]+)[\s]*,[\s]*([0-9.]+)[\s]*\)[\s]*$/);
    if (match && match.length === 5) {
	ret = [parseFloat(match[1]) / 255,
	    parseFloat(match[2]) / 255,
	    parseFloat(match[3]) / 255,
	    parseFloat(match[4])];
    }
    return ret;
};
    
var rectangleToVertexes = function(params, z_index, addVertex) {
    var x = parseFloat(params.x), y = parseFloat(params.y), height = parseFloat(params.height), width = parseFloat(params.width);

    // Fill
    var fill_rgba = extractRGBA(params.fill);
    addVertex([x,y,z_index], fill_rgba);
    addVertex([x+width, y, z_index], fill_rgba);
    addVertex([x+width, y+height, z_index], fill_rgba);
    
    addVertex([x,y,z_index], fill_rgba);
    addVertex([x+width, y+height, z_index], fill_rgba);
    addVertex([x,y+height,z_index],fill_rgba);

    // Stroke
    var stroke_width = parseFloat(params['stroke-width']);
    if (stroke_width > 0) {
	// left side
	var stroke_rgba = extractRGBA(params.stroke);
	addVertex([x, y, z_index], stroke_rgba);
	addVertex([x + stroke_width, y, z_index], stroke_rgba);
	addVertex([x + stroke_width, y + height, z_index], stroke_rgba);

	addVertex([x, y, z_index], stroke_rgba);
	addVertex([x + stroke_width, y + height, z_index], stroke_rgba);
	addVertex([x, y + height, z_index], stroke_rgba);

	// right side
	addVertex([x + width, y, z_index], stroke_rgba);
	addVertex([x + width - stroke_width, y, z_index], stroke_rgba);
	addVertex([x + width - stroke_width, y + height, z_index], stroke_rgba);

	addVertex([x + width, y, z_index], stroke_rgba);
	addVertex([x + width - stroke_width, y + height, z_index], stroke_rgba);
	addVertex([x + width, y + height, z_index], stroke_rgba);

	// top side
	addVertex([x, y, z_index], stroke_rgba);
	addVertex([x + width, y, z_index], stroke_rgba);
	addVertex([x + width, y + stroke_width, z_index], stroke_rgba);

	addVertex([x, y, z_index], stroke_rgba);
	addVertex([x + width, y + stroke_width, z_index], stroke_rgba);
	addVertex([x, y + stroke_width, z_index], stroke_rgba);

	// bottom side
	addVertex([x, y + height, z_index], stroke_rgba);
	addVertex([x + width, y + height, z_index], stroke_rgba);
	addVertex([x + width, y + height - stroke_width, z_index], stroke_rgba);

	addVertex([x, y + height, z_index], stroke_rgba);
	addVertex([x + width, y + height - stroke_width, z_index], stroke_rgba);
	addVertex([x, y + height - stroke_width, z_index], stroke_rgba);
    }
};
var triangleToVertexes = function(params, z_index, addVertex) {
    var fill_rgba = extractRGBA(params.fill);
    addVertex([parseFloat(params.x1), parseFloat(params.y1), z_index], fill_rgba);
    addVertex([parseFloat(params.x2), parseFloat(params.y2), z_index], fill_rgba);
    addVertex([parseFloat(params.x3), parseFloat(params.y3), z_index], fill_rgba);
};
var ellipseToVertexes = function(params, z_index, addVertex) {
    var center = {x: parseFloat(params.x) + parseFloat(params.width) / 2, y: parseFloat(params.y) + parseFloat(params.height) / 2};
    var horzrad = parseFloat(params.width) / 2;
    var vertrad = parseFloat(params.height) / 2;

    var fill_rgba = extractRGBA(params.fill);
    addVertex([center.x, center.y, z_index], fill_rgba);
    addVertex([center.x + horzrad, center.y, z_index], fill_rgba);
    addVertex([center.x + halfsqrt2 * horzrad, center.y + halfsqrt2 * vertrad, z_index], fill_rgba);

    addVertex([center.x, center.y, z_index], fill_rgba);
    addVertex([center.x + halfsqrt2 * horzrad, center.y + halfsqrt2 * vertrad, z_index], fill_rgba);
    addVertex([center.x, center.y + vertrad, z_index], fill_rgba);

    addVertex([center.x, center.y, z_index], fill_rgba);
    addVertex([center.x, center.y + vertrad, z_index], fill_rgba);
    addVertex([center.x - halfsqrt2 * horzrad, center.y + halfsqrt2 * vertrad, z_index], fill_rgba);

    addVertex([center.x, center.y, z_index], fill_rgba);
    addVertex([center.x - halfsqrt2 * horzrad, center.y + halfsqrt2 * vertrad, z_index], fill_rgba);
    addVertex([center.x - horzrad, center.y, z_index], fill_rgba);

    addVertex([center.x, center.y, z_index], fill_rgba);
    addVertex([center.x - horzrad, center.y, z_index], fill_rgba);
    addVertex([center.x - halfsqrt2 * horzrad, center.y - halfsqrt2 * vertrad, z_index], fill_rgba);

    addVertex([center.x, center.y, z_index], fill_rgba);
    addVertex([center.x - halfsqrt2 * horzrad, center.y - halfsqrt2 * vertrad, z_index], fill_rgba);
    addVertex([center.x, center.y - vertrad, z_index], fill_rgba);

    addVertex([center.x, center.y, z_index], fill_rgba);
    addVertex([center.x, center.y - vertrad, z_index], fill_rgba);
    addVertex([center.x + halfsqrt2 * horzrad, center.y - halfsqrt2 * vertrad, z_index], fill_rgba);

    addVertex([center.x, center.y, z_index], fill_rgba);
    addVertex([center.x + halfsqrt2 * horzrad, center.y - halfsqrt2 * vertrad, z_index], fill_rgba);
    addVertex([center.x + horzrad, center.y, z_index], fill_rgba);
};
var lineToVertexes = function(params, z_index, addVertex) {
    // For simplicity of dealing with webGL we'll implement lines as thin triangle pairs
    var x1 = parseFloat(params.x1);
    var x2 = parseFloat(params.x2);
    var y1 = parseFloat(params.y1);
    var y2 = parseFloat(params.y2);

    if (x1 !== x2) {
	// WLOG make x1,y1 the one on the left
	if (Math.min(x1, x2) === x2) {
	    var tmpx1 = x1;
	    var tmpy1 = y1;
	    x1 = x2;
	    y1 = y2;
	    x2 = tmpx1;
	    y2 = tmpy1;
	}
    }

    var perpendicular_vector = [y2 - y1, x1 - x2];
    var perpendicular_vector_length = Math.sqrt(perpendicular_vector[0] * perpendicular_vector[0] + perpendicular_vector[1] * perpendicular_vector[1]);
    var unit_perp_vector = [perpendicular_vector[0] / perpendicular_vector_length, perpendicular_vector[1] / perpendicular_vector_length];

    var half_stroke_width = parseFloat(params['stroke-width']) / 2;
    var direction1 = [unit_perp_vector[0] * half_stroke_width, unit_perp_vector[1] * half_stroke_width];
    var direction2 = [direction1[0] * -1, direction1[1] * -1];
    var A = [x1 + direction1[0], y1 + direction1[1]];
    var B = [x1 + direction2[0], y1 + direction2[1]];
    var C = [x2 + direction1[0], y2 + direction1[1]];
    var D = [x2 + direction2[0], y2 + direction2[1]];

    var stroke_rgba = extractRGBA(params.stroke);
    addVertex([A[0], A[1], z_index], stroke_rgba);
    addVertex([B[0], B[1], z_index], stroke_rgba);
    addVertex([C[0], C[1], z_index], stroke_rgba);

    addVertex([C[0], C[1], z_index], stroke_rgba);
    addVertex([D[0], D[1], z_index], stroke_rgba);
    addVertex([B[0], B[1], z_index], stroke_rgba);
};
module.exports = function(oncoprint_shape_computed_params, z_index, addVertex) {
    // target_position_array is an array with 3-d float vertexes
    // target_color_array is an array with rgba values in [0,1]
    // We pass them in to save on concatenation costs
    
    var type = oncoprint_shape_computed_params.type;
    if (type === "rectangle") {
	return rectangleToVertexes(oncoprint_shape_computed_params, z_index, addVertex);
    } else if (type === "triangle") {
	return triangleToVertexes(oncoprint_shape_computed_params, z_index, addVertex);
    } else if (type === "ellipse") {
	return ellipseToVertexes(oncoprint_shape_computed_params, z_index, addVertex);
    } else if (type === "line") {
	return lineToVertexes(oncoprint_shape_computed_params, z_index, addVertex);
    }
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var svgfactory = __webpack_require__(2);
var $ = __webpack_require__(0);

var OncoprintLabelView = (function () {
    function OncoprintLabelView($canvas, model, tooltip) {
	var view = this;
	
	this.supersampling_ratio = 2;
	
	this.$canvas = $canvas;
	this.base_font_size = 14;
	this.model = model;
	this.tooltip = tooltip;
	this.tooltip.center = false;
	// stuff from model
	this.cell_tops = {};
	this.cell_tops_view_space = {};
	this.cell_heights = {};
	this.cell_heights_view_space = {};
	this.label_middles_view_space = {};
	this.labels = {};
	this.sublabels = {};
	this.show_sublabels = model.getShowTrackSublabels();
	this.label_colors = {};
	this.html_labels = {};
	this.track_link_urls = {};
	this.track_descriptions = {};
	this.tracks = [];
	this.minimum_track_height = Number.POSITIVE_INFINITY;
	this.maximum_label_width = Number.NEGATIVE_INFINITY;

	this.rendering_suppressed = false;
	
	this.highlighted_track = null;
	
	setUpContext(this);
	
	(function setUpDragging(view) {
	    view.drag_callback = function(target_track, new_previous_track) {};
	    view.dragged_label_track_id = null;
	    view.drag_mouse_y = null;

	    view.$canvas.on("mousedown", function(evt) {
		view.tooltip.hide();
		var track_id = isMouseOnLabel(view, evt.offsetY);
		if (track_id !== null && (model.getContainingTrackGroup(track_id).length > 1) && !model.isTrackInClusteredGroup(track_id)) {
		    startDragging(view, track_id, evt.offsetY);
		}
	    });
	    
	    view.$canvas.on("mousemove", function(evt) {
		if (view.dragged_label_track_id !== null) {
		    var track_group = model.getContainingTrackGroup(view.dragged_label_track_id);
		    var bottommost_track = model.getLastExpansion(track_group[track_group.length - 1]);
		    var max_drag_y = view.track_tops[bottommost_track] + model.getTrackHeight(bottommost_track) - view.scroll_y;
		    var min_drag_y = view.track_tops[track_group[0]] - 5 - view.scroll_y;
		    view.drag_mouse_y = Math.min(evt.pageY - view.$canvas.offset().top, max_drag_y);
		    view.drag_mouse_y = Math.max(view.drag_mouse_y, min_drag_y);
		    renderAllLabels(view);
		} else {
		    var hovered_track = isMouseOnLabel(view, evt.pageY - view.$canvas.offset().top);
		    if (hovered_track !== null) {
			var $tooltip_div = $('<div>');
			var offset = view.$canvas.offset();   
			if (isNecessaryToShortenLabel(view, view.labels[hovered_track])
				|| view.track_link_urls[hovered_track]) {
			    $tooltip_div.append(formatTooltipHeader(
				    view.labels[hovered_track],
				    view.html_labels[hovered_track],
				    view.track_link_urls[hovered_track]));
			}
			var track_description = view.track_descriptions[hovered_track];
			if (track_description.length > 0) {
			    $tooltip_div.append($('<div>').text(track_description));
			}
			if (model.isTrackInClusteredGroup(hovered_track)) {
                view.$canvas.css('cursor', 'not-allowed');
                $tooltip_div.append("<b>dragging disabled for clustered tracks</b>");
			} else if (model.getContainingTrackGroup(hovered_track).length > 1) {
			    view.$canvas.css('cursor', 'move');
			    $tooltip_div.append("<b>hold to drag</b>");
			}
			if ($tooltip_div.contents().length > 0) {
				view.tooltip.fadeIn(200, renderedLabelWidth(view, view.labels[hovered_track]) + offset.left, view.cell_tops[hovered_track] + offset.top - view.scroll_y, $tooltip_div);
			}
		    } else {
			view.$canvas.css('cursor', 'auto');
			view.tooltip.hide();
		    }
		}
	    });
	    
	    view.$canvas.on("mouseup mouseleave", function(evt) {
		if (view.dragged_label_track_id !== null) {
		    var track_group = model.getContainingTrackGroup(view.dragged_label_track_id);
		    var previous_track_id = getLabelAboveMouseSpace(view, track_group, evt.offsetY, view.dragged_label_track_id);
		    stopDragging(view, previous_track_id);
		}
		view.tooltip.hideIfNotAlreadyGoingTo(150);
	    });
	})(this);
	
    }
    var renderedLabelWidth = function(view, label) {
	return view.ctx.measureText(shortenLabelIfNecessary(view, label)).width/view.supersampling_ratio;
    };
    var updateFromModel = function(view, model) {
	if (view.rendering_suppressed) {
	    return;
	}
	view.show_sublabels = model.getShowTrackSublabels();
	view.scroll_y = model.getVertScroll();
	view.track_tops = model.getZoomedTrackTops();
	view.cell_tops = model.getCellTops();
	view.cell_tops_view_space = {};
	view.cell_heights = {};
	view.tracks = model.getTracks();
	view.track_descriptions = {};
	
	view.ctx.font = 'bold '+view.getFontSize()+'px Arial';
	view.minimum_track_height = Number.POSITIVE_INFINITY;
	view.maximum_label_width = 0;
	for (var i=0; i<view.tracks.length; i++) {
	    view.minimum_track_height = Math.min(view.minimum_track_height, model.getTrackHeight(view.tracks[i]));
	    var shortened_label = shortenLabelIfNecessary(view, view.labels[view.tracks[i]]);
	    var shortened_sublabel = shortenLabelIfNecessary(view, view.sublabels[view.tracks[i]]);
	    var measured_width = view.ctx.measureText(shortened_label).width + (view.show_sublabels ? view.ctx.measureText(shortened_sublabel).width : 0);
	    view.maximum_label_width = Math.max(view.maximum_label_width, measured_width);
	    
	    view.cell_tops_view_space[view.tracks[i]] = view.cell_tops[view.tracks[i]]*view.supersampling_ratio - view.scroll_y*view.supersampling_ratio;
	    view.track_descriptions[view.tracks[i]] = model.getTrackDescription(view.tracks[i]);
	    view.cell_heights[view.tracks[i]] = model.getCellHeight(view.tracks[i]);
	    view.cell_heights_view_space[view.tracks[i]] = view.cell_heights[view.tracks[i]]*view.supersampling_ratio;
	    view.label_middles_view_space[view.tracks[i]] = view.cell_tops_view_space[view.tracks[i]] + view.cell_heights_view_space[view.tracks[i]]/2;
	}
    }
    var setUpContext = function(view) {
	view.ctx = view.$canvas[0].getContext('2d');
	view.ctx.textAlign="start";
	view.ctx.textBaseline="middle";
    }
    var resizeAndClear = function(view, model) {
	if (view.rendering_suppressed) {
	    return;
	}
	var visible_height = model.getCellViewHeight();
	var visible_width = view.getWidth();
	view.$canvas[0].height = view.supersampling_ratio*visible_height;
	view.$canvas[0].width = view.supersampling_ratio*visible_width;
	view.$canvas[0].style.height = visible_height + 'px';
	view.$canvas[0].style.width = visible_width + 'px';
	setUpContext(view);
    }
    var isNecessaryToShortenLabel = function(view, label) {
	return label.length > getMaximumLabelLength(view);
    };
    var shortenLabelIfNecessary = function(view, label) {
	if (isNecessaryToShortenLabel(view, label)) {
	    return label.substring(0, getMaximumLabelLength(view)-3) + '...';
	} else {
	    return label;
	}
    };
    var formatTooltipHeader = function (label, html_label, link_url) {
	var header_contents;
	if (link_url) {
	    header_contents = (
		    $('<a target="_blank" rel="noopener noreferrer">')
		    .attr('href', link_url));
	} else {
	    header_contents = $('<span>');
	}
	header_contents.append(html_label || document.createTextNode(label));
	return $('<b style="display: block;">').append(header_contents);
    };
    var renderAllLabels = function(view) {
	if (view.rendering_suppressed) {
	    return;
	}
	view.ctx.clearRect(0,0,view.$canvas[0].width,view.$canvas[0].height);
	
	if (view.highlighted_track !== null) {
	    if (view.cell_tops_view_space.hasOwnProperty(view.highlighted_track)) {
		view.ctx.fillStyle = 'rgba(255,255,0,0.4)';
		view.ctx.fillRect(0, view.cell_tops_view_space[view.highlighted_track], view.getWidth()*view.supersampling_ratio, view.cell_heights_view_space[view.highlighted_track]);
	    }
	}
	var font_size = view.getFontSize();
	view.ctx.font = 'bold '+font_size +'px Arial';
	view.ctx.fillStyle = 'black';
	var tracks = view.tracks;
        var sublabelX = {};
	for (var i=0; i<tracks.length; i++) {
	    if (view.label_colors && view.label_colors[tracks[i]]) {
		//override color, if set:
		view.ctx.fillStyle = view.label_colors[tracks[i]];
	    }
	    var label = shortenLabelIfNecessary(view, view.labels[tracks[i]]);
	    view.ctx.fillText(label, 0, view.label_middles_view_space[tracks[i]]);
	    sublabelX[tracks[i]] = view.ctx.measureText(label).width;
	}
	if (view.show_sublabels) {
		// render sublabels - not bold, gray
		view.ctx.font = font_size+'px Arial';
		view.ctx.fillStyle='rgb(166,166,166)';
		for (var i=0; i<tracks.length; i++) {
			if (view.sublabels[tracks[i]]) {
				view.ctx.fillText(shortenLabelIfNecessary(view, view.sublabels[tracks[i]]), sublabelX[tracks[i]], view.label_middles_view_space[tracks[i]]);
			}
		}
	}
	if (view.dragged_label_track_id !== null) {
        view.ctx.font = 'bold '+font_size +'px Arial';
	    view.ctx.fillStyle = 'rgba(255,0,0,0.95)';
	    view.ctx.fillText(shortenLabelIfNecessary(view, view.labels[view.dragged_label_track_id]), 0, view.supersampling_ratio*view.drag_mouse_y);
	    view.ctx.fillStyle = 'rgba(0,0,0,0.15)';
	    var group = view.model.getContainingTrackGroup(view.dragged_label_track_id);
	    var label_above_mouse = view.model.getLastExpansion(getLabelAboveMouseSpace(view, group, view.drag_mouse_y, null));
	    var label_below_mouse = getLabelBelowMouseSpace(view, group, view.drag_mouse_y, null);
	    var rect_y, rect_height;
	    if (label_above_mouse === view.dragged_label_track_id || label_below_mouse === view.dragged_label_track_id) {
		return;
	    }
	    if (label_above_mouse !== null && label_below_mouse !== null) {
		rect_y = view.cell_tops_view_space[label_above_mouse] + view.cell_heights_view_space[label_above_mouse];
		rect_height = view.cell_tops_view_space[label_below_mouse] - rect_y;
	    } else if (label_above_mouse === null) {
		rect_y = view.cell_tops_view_space[group[0]] - view.ctx.measureText("m").width;
		rect_height = view.ctx.measureText("m").width;
	    } else if (label_below_mouse === null) {
		rect_y = view.cell_tops_view_space[label_above_mouse] + view.cell_heights_view_space[label_above_mouse];
		rect_height = view.ctx.measureText("m").width;
	    }
	    
	    var min_rect_height = 4;
	    rect_height = Math.max(rect_height, min_rect_height);
	    view.ctx.fillRect(0, rect_y, view.getWidth()*view.supersampling_ratio, rect_height);
	}
    }
    
    var isMouseOnLabel = function(view, mouse_y) {
	var candidate_track = getLabelAboveMouseSpace(view, view.tracks, mouse_y, null);
	if (candidate_track === null) {
	    return null;
	}
	if (mouse_y <= view.cell_tops[candidate_track] - view.scroll_y + view.cell_heights[candidate_track]) {
	    return candidate_track;
	} else {
	    return null;
	}
    }
    var getLabelAboveMouseSpace = function(view, track_ids, y, track_to_exclude) {
	if (y < view.cell_tops[track_ids[0]] - view.scroll_y) {
	    return null;
	} else {
	    var candidate_track = null;
	    for (var i=0; i<track_ids.length; i++) {
		if (track_to_exclude !== null && track_to_exclude === track_ids[i]) {
		    continue;
		}
		if (view.cell_tops[track_ids[i]] - view.scroll_y > y) {
		    break;
		} else {
		    candidate_track = track_ids[i];
		}
	    }
	    return candidate_track;
	}
    }
    var getLabelBelowMouseSpace = function(view, track_ids, y, track_to_exclude) {
	if (y > view.cell_tops[track_ids[track_ids.length-1]] - view.scroll_y) {
	    return null;
	} else {
	    var candidate_track = null;
	    for (var i=track_ids.length-1; i>=0; i--) {
		if (track_to_exclude !== null && track_to_exclude === track_ids[i]) {
		    continue;
		}
		if (view.cell_tops[track_ids[i]] - view.scroll_y < y) {
		    break;
		} else {
		    candidate_track = track_ids[i];
		}
	    }
	    return candidate_track;
	}
    }
    
    var startDragging = function(view, track_id, mouse_y) {
	view.dragged_label_track_id = track_id;
	view.drag_mouse_y = mouse_y;
	renderAllLabels(view);
    }
    var stopDragging = function(view, new_previous_track_id) {
	view.drag_callback(view.dragged_label_track_id, new_previous_track_id);
	view.dragged_label_track_id = null;
	renderAllLabels(view);
    }

    var getMaximumLabelLength = function(view) {
		return 18;
	};
    
    OncoprintLabelView.prototype.getWidth = function() {
	//return this.maximum_label_width + 20;
	return Math.max(this.maximum_label_width/this.supersampling_ratio + 10, 70);
    }
    OncoprintLabelView.prototype.getFontSize = function(no_supersampling_adjustment) {
	return (no_supersampling_adjustment ? 1 : this.supersampling_ratio) * Math.max(Math.min(this.base_font_size, this.minimum_track_height), 7);
    }
    OncoprintLabelView.prototype.setDragCallback = function(callback) {
	this.drag_callback = callback;
    }
    OncoprintLabelView.prototype.removeTrack = function (model, track_id) {
	updateFromModel(this, model);
	resizeAndClear(this, model);
	renderAllLabels(this, model);
    }
    OncoprintLabelView.prototype.moveTrack = function (model) {
	updateFromModel(this, model);
	resizeAndClear(this, model);
	renderAllLabels(this, model);
    }
    OncoprintLabelView.prototype.setTrackGroupOrder = function (model) {
	updateFromModel(this, model);
	resizeAndClear(this, model);
	renderAllLabels(this, model);
    }
    OncoprintLabelView.prototype.addTracks = function (model, track_ids) {
	for (var i=0; i<track_ids.length; i++) {
	    this.labels[track_ids[i]] = model.getTrackLabel(track_ids[i]);
        this.sublabels[track_ids[i]] = model.getTrackSublabel(track_ids[i]);
	    this.label_colors[track_ids[i]] = model.getTrackLabelColor(track_ids[i]);
	    this.html_labels[track_ids[i]] = model.getOptionalHtmlTrackLabel(track_ids[i]);
	    this.track_link_urls[track_ids[i]] = model.getTrackLinkUrl(track_ids[i]);
	}
	updateFromModel(this, model);
	resizeAndClear(this, model);
	renderAllLabels(this, model);
    }

    OncoprintLabelView.prototype.setShowTrackSublabels = function(model) {
        updateFromModel(this, model);
        resizeAndClear(this, model);
        renderAllLabels(this, model);
	}
    
    OncoprintLabelView.prototype.setScroll = function(model) {
	this.setVertScroll(model);
    }
    
    OncoprintLabelView.prototype.setHorzScroll = function(model) {
    }
    
    OncoprintLabelView.prototype.setViewport = function(model) {
	this.setVertScroll(model);
    }
    
    OncoprintLabelView.prototype.setVertScroll = function(model) {
	updateFromModel(this, model);
	resizeAndClear(this, model);
	renderAllLabels(this, model);
    }
    
    OncoprintLabelView.prototype.setVertZoom = function(model) {
	updateFromModel(this, model);
	resizeAndClear(this, model);
	renderAllLabels(this, model);
    }
    
    OncoprintLabelView.prototype.setZoom = function(model) {
	this.setVertZoom(model);
    }
    
    OncoprintLabelView.prototype.highlightTrack = function(track_id, model) {
	// track_id is a track id, or null to clear highlight
	this.highlighted_track = track_id;
	renderAllLabels(this, model);
    }
    
    OncoprintLabelView.prototype.suppressRendering = function() {
	this.rendering_suppressed = true;
    }
    
    OncoprintLabelView.prototype.releaseRendering = function(model) {
	this.rendering_suppressed = false;
	updateFromModel(this, model);
	resizeAndClear(this, model);
	renderAllLabels(this);
    }
    
    OncoprintLabelView.prototype.toSVGGroup = function(model, full_labels, offset_x, offset_y) {
	var root = svgfactory.group((offset_x || 0), (offset_y || 0));
	var cell_tops = model.getCellTops();
	var tracks = model.getTracks();
	for (var i=0; i<tracks.length; i++) {
	    var track_id = tracks[i];
	    var y = cell_tops[track_id] + model.getCellHeight(track_id)/2;
	    var label = model.getTrackLabel(track_id);
	    var text_elt = svgfactory.text((full_labels ? label : shortenLabelIfNecessary(this, label)), 0, y, this.getFontSize(true), 'Arial', 'bold', "bottom"); 
	    text_elt.setAttribute("dy", "0.35em");
	    root.appendChild(text_elt);
	}
	return root;
    }

    return OncoprintLabelView;
})();

module.exports = OncoprintLabelView;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/* Rule:
 * 
 * condition: function from datum to boolean
 * shapes - a list of Shapes
 * legend_label
 * exclude_from_legend
 * 
 * Shape:
 * type
 * x
 * y
 * ... shape-specific attrs ...
 * 
 * Attrs by shape:
 * 
 * rectangle: x, y, width, height, stroke, stroke-width, fill
 * triangle: x1, y1, x2, y2, x3, y3, stroke, stroke-width, fill
 * ellipse: x, y, width, height, stroke, stroke-width, fill
 * line: x1, y1, x2, y2, stroke, stroke-width
 */

var Shape = __webpack_require__(11);
var extractRGBA = __webpack_require__(3);
var heatmapColors = __webpack_require__(31);
var binarysearch = __webpack_require__(4);
var cloneShallow = __webpack_require__(6).cloneShallow;

function ifndef(x, val) {
    return (typeof x === "undefined" ? val : x);
}

function makeIdCounter() {
    var id = 0;
    return function () {
	id += 1;
	return id;
    };
}

function intRange(length) {
    var ret = [];
    for (var i=0; i<length; i++) {
	ret.push(i);
    }
    return ret;
}

function makeUniqueColorGetter(init_used_colors) {
    init_used_colors = init_used_colors || [];
    var colors = ["#3366cc", "#dc3912", "#ff9900", "#109618",
	"#990099", "#0099c6", "#dd4477", "#66aa00",
	"#b82e2e", "#316395", "#994499", "#22aa99",
	"#aaaa11", "#6633cc", "#e67300", "#8b0707",
	"#651067", "#329262", "#5574a6", "#3b3eac",
	"#b77322", "#16d620", "#b91383", "#f4359e",
	"#9c5935", "#a9c413", "#2a778d", "#668d1c",
	"#bea413", "#0c5922", "#743411"]; // Source: D3
    var index = 0;
    var used_colors = {};
    for (var i=0; i<init_used_colors.length; i++) {
	used_colors[init_used_colors[i]] = true;
    }
    return function(color) {
    	if (color) {
    		// calling with an argument adds it to the used colors record
    		used_colors[color] = true;
		} else {
    		// calling without an argument returns a new unused color
			var next_color = colors[index % colors.length];
			while (used_colors[next_color]) {
				var darker_next_color = darkenHexColor(next_color);
				if (darker_next_color === next_color) {
				break;
				}
				next_color = darker_next_color;
			}
			used_colors[next_color] = true;
			index += 1;

			return next_color;
		}
    };
};

function shallowExtend(target, source) {
    var ret = {};
    for (var key in target) {
	if (target.hasOwnProperty(key)) {
	    ret[key] = target[key];
	}
    }
    for (var key in source) {
	if (source.hasOwnProperty(key)) {
	    ret[key] = source[key];
	}
    }
    return ret;
}

function objectValues(obj) {
    return Object.keys(obj).map(function(key) { return obj[key]; });
}

var makeNAShapes = function(z) {
    return [
	{
	    'type': 'rectangle',
	    'fill': 'rgba(255,255,255,1)',
	    'z':z
	}, {
	    'type': 'line',
	    'stroke': 'rgba(190,190,190,1)',
	    'stroke-width': '1',
	    'x1': '0%',
	    'x2': '100%',
	    'y1':'50%',
	    'y2':'50%',
	    'z':z
	}
    ];
};
var NA_STRING = "na";
var NA_LABEL = "No data";

var colorToHex = function(str) {
    var r;
    var g;
    var b;
    var rgba_match = str.match(/^[\s]*rgba\([\s]*([0-9]+)[\s]*,[\s]*([0-9]+)[\s]*,[\s]*([0-9]+)[\s]*,[\s]*([0-9.]+)[\s]*\)[\s]*$/);
    if (rgba_match && rgba_match.length === 5) {
	r = parseInt(rgba_match[1]).toString(16);
	g = parseInt(rgba_match[2]).toString(16);
	b = parseInt(rgba_match[3]).toString(16);
	if (r.length === 1) {
	    r = '0' + r;
	}
	if (g.length === 1) {
	    g = '0' + g;
	}
	if (b.length === 1) {
	    b = '0' + b;
	}
	return '#' + r + g + b;
    }

    var rgb_match = str.match(/^[\s]*rgb\([\s]*([0-9]+)[\s]*,[\s]*([0-9]+)[\s]*,[\s]*([0-9]+)[\s]*\)[\s]*$/);
    if (rgb_match && rgb_match.length === 4) {
	r = parseInt(rgb_match[1]).toString(16);
	g = parseInt(rgb_match[2]).toString(16);
	b = parseInt(rgb_match[3]).toString(16);
	if (r.length === 1) {
	    r = '0' + r;
	}
	if (g.length === 1) {
	    g = '0' + g;
	}
	if (b.length === 1) {
	    b = '0' + b;
	}
	return '#' + r + g + b;
    }

    return str;
};

var darkenHexColor = function(str) {
    var r = str[1] + str[2];
    var g = str[3] + str[4];
    var b = str[5] + str[6];
    var darkenHexChannel = function(c) {
	c = parseInt(c, 16);
	c *= 0.95;
	c = Math.round(c);
	c = c.toString(16);
	if (c.length === 1) {
	    c = '0' + c;
	}
	return c;
    };
    r = darkenHexChannel(r);
    g = darkenHexChannel(g);
    b = darkenHexChannel(b);
    return '#' + r + g + b;
};

var RuleSet = (function () {
    var getRuleSetId = makeIdCounter();
    var getRuleId = makeIdCounter();

    function RuleSet(params) {
	/* params:
	 * - legend_label
	 * - exclude_from_legend
	 */
	this.rule_set_id = getRuleSetId();
	this.legend_label = params.legend_label;
	this.legend_base_color = params.legend_base_color;
	this.exclude_from_legend = params.exclude_from_legend;
	this.active_rule_ids = {};
	this.rules_with_id = [];

    }

    RuleSet.prototype.getLegendLabel = function () {
	return this.legend_label;
    }

    RuleSet.prototype.getRuleSetId = function () {
	return this.rule_set_id;
    }

    RuleSet.prototype.addRules = function (list_of_params) {
	var self = this;
	return list_of_params.map(function (params) {
	    return self.addRule(params);
	});
    }

    RuleSet.prototype.addRule = function (params, rule_id) {
    	if (typeof rule_id === "undefined") {
			rule_id = getRuleId();
		}
	this.rules_with_id.push({id: rule_id, rule: new Rule(params)});
	return rule_id;
    }

    RuleSet.prototype.removeRule = function (rule_id) {
	var index = -1;
	for (var i = 0; i < this.rules_with_id.length; i++) {
	    if (this.rules_with_id[i].id === rule_id) {
		index = i;
		break;
	    }
	}
	if (index > -1) {
	    this.rules_with_id.splice(index, 1);
	}
	delete this.active_rule_ids[rule_id];
    }

    RuleSet.prototype.getRuleWithId = function (rule_id) {
	var ret = null;
	for (var i = 0; i < this.rules_with_id.length; i++) {
	    if (this.rules_with_id[i].id === rule_id) {
		ret = this.rules_with_id[i];
		break;
	    }
	}
	return ret;
    }

    RuleSet.prototype.isExcludedFromLegend = function () {
	return this.exclude_from_legend;
    }

    RuleSet.prototype.getRecentlyUsedRules = function () {
	var self = this;
	return Object.keys(this.active_rule_ids).map(
		function (rule_id) {
		    return self.getRule(rule_id);
		});
    }

    RuleSet.prototype.applyRulesToDatum = function (rules_with_id, datum, cell_width, cell_height) {
	var shapes = [];
	var rules_len = rules_with_id.length;
	for (var j = 0; j < rules_len; j++) {
	    shapes = shapes.concat(rules_with_id[j].rule.apply(datum, cell_width, cell_height));
	}
	return shapes;
    }
    RuleSet.prototype.apply = function (data, cell_width, cell_height, out_active_rules, data_id_key, important_ids) {
	// Returns a list of lists of concrete shapes, in the same order as data
	// optional parameter important_ids determines which ids count towards active rules (optional parameter data_id_key
	//		is used for this too)
	var ret = [];
	for (var i = 0; i < data.length; i++) {
		var datum = data[i];
		var should_mark_active = !important_ids || !!important_ids[datum[data_id_key]];
	    var rules = this.getRulesWithId(datum);
	    if (typeof out_active_rules !== 'undefined' && should_mark_active) {
		for (var j = 0; j < rules.length; j++) {
		    out_active_rules[rules[j].id] = true;
		}
	    }
	    ret.push(this.applyRulesToDatum(rules, data[i], cell_width, cell_height));
	}
	return ret;
    }

    return RuleSet;
})();

var LookupRuleSet = (function () {
    function LookupRuleSet(params) {
	RuleSet.call(this, params);
	this.lookup_map_by_key_and_value = {};
	this.lookup_map_by_key = {};
	this.universal_rules = [];

	this.rule_id_to_conditions = {};
    }
    LookupRuleSet.prototype = Object.create(RuleSet.prototype);

    LookupRuleSet.prototype.getRulesWithId = function (datum) {
	if (typeof datum === 'undefined') {
	    return this.rules_with_id;
	}
	var ret = [];
	ret = ret.concat(this.universal_rules);
	for (var key in datum) {
	    if (typeof datum[key] !== 'undefined') {
		var key_rule = this.lookup_map_by_key[key];
		if (typeof key_rule !== 'undefined') {
		    ret.push(key_rule);
		}
		var key_and_value_rule = (this.lookup_map_by_key_and_value[key] && this.lookup_map_by_key_and_value[key][datum[key]]) || undefined;
		if (typeof key_and_value_rule !== 'undefined') {
		    ret.push(key_and_value_rule);
		}
	    }
	}
	return ret;
    }

    var indexRuleForLookup = function (rule_set, condition_key, condition_value, rule_with_id) {
	if (condition_key === null) {
	    rule_set.universal_rules.push(rule_with_id);
	} else {
	    if (condition_value === null) {
		rule_set.lookup_map_by_key[condition_key] = rule_with_id;
	    } else {
		rule_set.lookup_map_by_key_and_value[condition_key] = rule_set.lookup_map_by_key_and_value[condition_key] || {};
		rule_set.lookup_map_by_key_and_value[condition_key][condition_value] = rule_with_id;
	    }
	}
	rule_set.rule_id_to_conditions[rule_with_id.id] = rule_set.rule_id_to_conditions[rule_with_id.id] || [];
	rule_set.rule_id_to_conditions[rule_with_id.id].push({key: condition_key, value: condition_value});
    };

    LookupRuleSet.prototype.addRule = function (condition_key, condition_value, params) {
	var rule_id = RuleSet.prototype.addRule.call(this, params);

	indexRuleForLookup(this, condition_key, condition_value, this.getRuleWithId(rule_id));

	return rule_id;
    }

    LookupRuleSet.prototype.linkExistingRule = function (condition_key, condition_value, existing_rule_id) {
	indexRuleForLookup(this, condition_key, condition_value, this.getRuleWithId(existing_rule_id));
    }

    LookupRuleSet.prototype.removeRule = function (rule_id) {
	RuleSet.prototype.removeRule.call(this, rule_id);

	while (this.rule_id_to_conditions[rule_id].length > 0) {
	    var condition = this.rule_id_to_conditions[rule_id].pop();
	    if (condition.key === null) {
		var index = -1;
		for (var i = 0; i < this.universal_rules.length; i++) {
		    if (this.universal_rules[i].id === rule_id) {
			index = i;
			break;
		    }
		}
		if (index > -1) {
		    this.universal_rules.splice(index, 1);
		}
	    } else {
		if (condition.value === null) {
		    delete this.lookup_map_by_key[condition.key];
		} else {
		    delete this.lookup_map_by_key_and_value[condition.key][condition.value];
		}
	    }
	}
	delete this.rule_id_to_conditions[rule_id];
    }
    return LookupRuleSet;
})();

var ConditionRuleSet = (function () {
    function ConditionRuleSet(params, omitNArule) {
	RuleSet.call(this, params);
	this.rule_id_to_condition = {};

        if (!omitNArule) {
                this.addRule(function (d) {
                return d[NA_STRING] === true;
                },
                {
                shapes: makeNAShapes(params.na_z || 1000),
                legend_label: params.na_legend_label || NA_LABEL,
                exclude_from_legend: false,
                legend_config: {'type': 'rule', 'target': {'na': true}},
                legend_order: Number.POSITIVE_INFINITY
                });
        }
    }
    ConditionRuleSet.prototype = Object.create(RuleSet.prototype);

    ConditionRuleSet.prototype.getRulesWithId = function (datum) {
	if (typeof datum === 'undefined') {
	    return this.rules_with_id;
	}
	var ret = [];
	for (var i = 0; i < this.rules_with_id.length; i++) {
	    if (this.rule_id_to_condition[this.rules_with_id[i].id](datum)) {
		ret.push(this.rules_with_id[i]);
	    }
	}
	return ret;
    }

    ConditionRuleSet.prototype.addRule = function (condition, params, rule_id) {
	rule_id = RuleSet.prototype.addRule.call(this, params, rule_id);
	this.rule_id_to_condition[rule_id] = condition;
	return rule_id;
    }

    ConditionRuleSet.prototype.removeRule = function (rule_id) {
	RuleSet.prototype.removeRule.call(this, rule_id);
	delete this.rule_id_to_condition[rule_id];
    }

    return ConditionRuleSet;
})();

var CategoricalRuleSet = (function () {
    function CategoricalRuleSet(params, omitNArule) {
	/* params
	 * - category_key
	 * - categoryToColor
	 */
	LookupRuleSet.call(this, params);

        if (!omitNArule) {
                this.addRule(NA_STRING, true, {
                shapes: makeNAShapes(params.na_z || 1000),
                legend_label: params.na_legend_label || NA_LABEL,
                exclude_from_legend: false,
                legend_config: {'type': 'rule', 'target': {'na': true}},
                        legend_order: Number.POSITIVE_INFINITY
                });
        }

	this.category_key = params.category_key;
	this.category_to_color = cloneShallow(ifndef(params.category_to_color, {}));
	this.getUnusedColor = makeUniqueColorGetter(objectValues(this.category_to_color).map(colorToHex));
	for (var category in this.category_to_color) {
	    if (this.category_to_color.hasOwnProperty(category)) {
		var color = this.category_to_color[category];
		addCategoryRule(this, category, color);
		this.getUnusedColor(color);
	    }
	}
    }
    CategoricalRuleSet.prototype = Object.create(LookupRuleSet.prototype);

    var addCategoryRule = function (ruleset, category, color) {
	var legend_rule_target = {};
	legend_rule_target[ruleset.category_key] = category;
	var rule_params = {
	    shapes: [{
		    type: 'rectangle',
		    fill: color,
		}],
	    legend_label: category,
	    exclude_from_legend: false,
	    legend_config: {'type': 'rule', 'target': legend_rule_target}
	};
	ruleset.addRule(ruleset.category_key, category, rule_params);
    };

    CategoricalRuleSet.prototype.apply = function (data, cell_width, cell_height, out_active_rules, data_id_key, important_ids) {
	// First ensure there is a color for all categories
	for (var i = 0, data_len = data.length; i < data_len; i++) {
	    if (data[i][NA_STRING]) {
		continue;
	    }
	    var category = data[i][this.category_key];
	    if (!this.category_to_color.hasOwnProperty(category)) {
		var color = this.getUnusedColor();

		this.category_to_color[category] = color;
		addCategoryRule(this, category, color);
	    }
	}
	// Then propagate the call up
	return LookupRuleSet.prototype.apply.call(this, data, cell_width, cell_height, out_active_rules, data_id_key, important_ids);
    };

    return CategoricalRuleSet;
})();

var LinearInterpRuleSet = (function () {
    function LinearInterpRuleSet(params) {
	/* params
	 * - log_scale
	 * - value_key
	 * - value_range
	 */
	ConditionRuleSet.call(this, params);
	this.value_key = params.value_key;
	this.value_range = params.value_range;
	this.log_scale = params.log_scale; // boolean
    this.type = params.type;
	this.rangeTypes = {
		'ALL': 'ALL',                   // all values positive, negative and zero
		'NON_NEGATIVE': 'NON_NEGATIVE', // value range all positive values inclusive zero (0)
		'NON_POSITIVE': 'NON_POSITIVE'  // value range all negative values inclusive zero (0)
	};

	this.makeInterpFn = function () {
	    var range = this.getEffectiveValueRange();
	    var rangeType = this.getValueRangeType();
	    var plotType = this.type;
	    var rangeTypes = this.rangeTypes;
	    if (this.log_scale) {
		var shift_to_make_pos = Math.abs(range[0]) + 1;
		var log_range = Math.log(range[1] + shift_to_make_pos) - Math.log(range[0] + shift_to_make_pos);
		var log_range_lower = Math.log(range[0] + shift_to_make_pos);
		return function (val) {
		    val = parseFloat(val);
		    return (Math.log(val + shift_to_make_pos) - log_range_lower) / log_range;
		};
	    } else {
		return function (val) {
                var range_spread = range[1] - range[0],
					range_lower = range[0],
					range_higher = range[1];
                if (plotType === 'bar') {
                    if (rangeType === rangeTypes.NON_POSITIVE) {
                        // when data only contains non positive values
                        return (val - range_higher) / range_spread;
                    } else if (rangeType === rangeTypes.NON_NEGATIVE) {
                        // when data only contains non negative values
                        return (val - range_lower) / range_spread;
                    } else if (rangeType === rangeTypes.ALL) {
                        range_spread = Math.abs(range[0]) > range[1] ? Math.abs(range[0]) : range[1];
                        return val / range_spread;
                    }
                } else {
                    return (val - range_lower) / range_spread;
                }
		};
	    }
	};
    }
    LinearInterpRuleSet.prototype = Object.create(ConditionRuleSet.prototype);

    LinearInterpRuleSet.prototype.getEffectiveValueRange = function () {
	var ret = (this.value_range && this.value_range.slice()) || [undefined, undefined];
	if (typeof ret[0] === "undefined") {
	    ret[0] = this.inferred_value_range[0];
	}
	if (typeof ret[1] === "undefined") {
	    ret[1] = this.inferred_value_range[1];
	}
	if (ret[0] === ret[1]) {
	    // Make sure non-empty interval
	    ret[0] -= ret[0] / 2;
	    ret[1] += ret[1] / 2;
	}
	return ret;
    };
    LinearInterpRuleSet.prototype.getValueRangeType = function () {
    	var range = this.getEffectiveValueRange();
        if (range[0] < 0 && range[1] <=0) {
        	return this.rangeTypes.NON_POSITIVE;
        } else if (range[0] >= 0 && range[1] > 0) {
            return this.rangeTypes.NON_NEGATIVE;
        } else {
            return this.rangeTypes.ALL;
        }
    };

    LinearInterpRuleSet.prototype.apply = function (data, cell_width, cell_height, out_active_rules, data_id_key, important_ids) {
	// First find value range
	var value_min = Number.POSITIVE_INFINITY;
	var value_max = Number.NEGATIVE_INFINITY;
	for (var i = 0, datalen = data.length; i < datalen; i++) {
	    var d = data[i];
	    if (isNaN(d[this.value_key])) {
		continue;
	    }
	    value_min = Math.min(value_min, d[this.value_key]);
	    value_max = Math.max(value_max, d[this.value_key]);
	}
	if (value_min === Number.POSITIVE_INFINITY) {
	    value_min = 0;
	}
	if (value_max === Number.NEGATIVE_INFINITY) {
	    value_max = 0;
	}
	this.inferred_value_range = [value_min, value_max];
	this.updateLinearRules();

	// Then propagate the call up
	return ConditionRuleSet.prototype.apply.call(this, data, cell_width, cell_height, out_active_rules, data_id_key, important_ids);
    };

    LinearInterpRuleSet.prototype.updateLinearRules = function () {
	throw "Not implemented in abstract class";
    };

    return LinearInterpRuleSet;
})();

var GradientRuleSet = (function () {
    function GradientRuleSet(params) {
	/* params
	 * - colors || colormap_name
         * - value_stop_points
	 * - null_color
	 */
	LinearInterpRuleSet.call(this, params);

	this.colors = [];
	if (params.colors) {
	    this.colors = params.colors || [];
	} else if (params.colormap_name) {
	    this.colors = heatmapColors[params.colormap_name] || [];
	}
	if (this.colors.length === 0) {
	    this.colors.push([0,0,0,1],[255,0,0,1]);
	}

	this.value_stop_points = params.value_stop_points;
	this.null_color = params.null_color || "rgba(211,211,211,1)";
    }
    GradientRuleSet.prototype = Object.create(LinearInterpRuleSet.prototype);

    // interpScaleColors,
    // were adapted from politiken-journalism's scale-color-perceptual repo on Github
    var linInterpColors = function(t, begin_color, end_color) {
	// 0 <= t <= 1
	// begin_color and end_color are 4-element arrays in ([0,255])x([0,255])x([0,255])x([0,1])
	return [
	    Math.round(begin_color[0]*(1-t) + end_color[0]*t),
	    Math.round(begin_color[1]*(1-t) + end_color[1]*t),
	    Math.round(begin_color[2]*(1-t) + end_color[2]*t),
	    begin_color[3]*(1-t) + end_color[3]*t
	];
    };

    GradientRuleSet.prototype.makeColorFn = function(colors, interpFn) {
	var value_stop_points = this.value_stop_points;
	var stop_points;
	if (value_stop_points) {
	    stop_points = value_stop_points.map(interpFn);
	} else {
	    stop_points = intRange(colors.length).map(function(x) { return x/(colors.length -1); });
	}
	return function(t) {
	    // 0 <= t <= 1
	    var begin_interval_index = binarysearch(stop_points, t, function(x) { return x; }, true);
	    if (begin_interval_index === -1) {
		return "rgba(0,0,0,1)";
	    }
	    var end_interval_index = Math.min(colors.length - 1, begin_interval_index + 1);
	    var spread = stop_points[end_interval_index] - stop_points[begin_interval_index];
	    if (spread === 0) {
		return "rgba(" + colors[end_interval_index].join(",") + ")";
	    } else {
		var interval_t = (t - stop_points[begin_interval_index]) / spread;
		var begin_color = colors[begin_interval_index];
		var end_color = colors[end_interval_index];
		return "rgba(" + linInterpColors(interval_t, begin_color, end_color).join(",") + ")";
	    }

	};
    }

    GradientRuleSet.prototype.updateLinearRules = function () {
    	var rule_id;
	if (typeof this.gradient_rule !== "undefined") {
		rule_id = this.gradient_rule;
	    this.removeRule(this.gradient_rule);
	}
	var interpFn = this.makeInterpFn();
	var colorFn = this.makeColorFn(this.colors, interpFn);
	var value_key = this.value_key;
	var null_color = this.null_color;

	this.gradient_rule = this.addRule(function (d) {
	    return d[NA_STRING] !== true;
	},
		{shapes: [{
			    type: 'rectangle',
			    fill: function(d) {
				if (d[value_key]) {
				    var t = interpFn(d[value_key]);
				    return colorFn(t);
				} else {
				    return null_color;
				}
			    }
			}],
		    exclude_from_legend: false,
		    legend_config: {'type': 'gradient', 'range': this.getEffectiveValueRange(), 'colorFn':colorFn}
		},
		rule_id);
    };

    return GradientRuleSet;
})();

var BarRuleSet = (function () {
    function BarRuleSet(params) {
	LinearInterpRuleSet.call(this, params);
		this.fill = params.fill || 'rgba(0,128,0,1)'; // green
		this.negative_fill = params.negative_fill || 'rgba(255,0,0,1)'; //red
    }
    BarRuleSet.prototype = Object.create(LinearInterpRuleSet.prototype);

    BarRuleSet.prototype.updateLinearRules = function () {
        var rule_id;
	if (typeof this.bar_rule !== "undefined") {
		rule_id = this.bar_rule;
	    this.removeRule(this.bar_rule);
	}
	var interpFn = this.makeInterpFn();
	var value_key = this.value_key;
        var positive_color = this.fill;
        var negative_color = this.negative_fill;
        var yPosFn = this.getYPosPercentagesFn();
        var cellHeightFn = this.getCellHeightPercentagesFn();
	this.bar_rule = this.addRule(function (d) {
	    return d[NA_STRING] !== true;
	},
		{shapes: [{
			    type: 'rectangle',
			    y: function (d) {
				var t = interpFn(d[value_key]);
                    return yPosFn(t);
			    },
			    height: function (d) {
				var t = interpFn(d[value_key]);
                    return cellHeightFn(t);
			    },
                fill: function (d) {
					return d[value_key] < 0 ? negative_color : positive_color;
                }
			}],
		    exclude_from_legend: false,
                legend_config: {
            		'type': 'number',
				    'range': this.getEffectiveValueRange(),
					'range_type': this.getValueRangeType(),
                    'positive_color': positive_color,
                    'negative_color': negative_color,
				    'interpFn': interpFn}
		},
		rule_id);
    };
    BarRuleSet.prototype.getYPosPercentagesFn = function () {
        var ret;
        switch (this.getValueRangeType()) {
            case this.rangeTypes.NON_POSITIVE:
                ret = (function(t) { return "0%"; });
                break;
            case this.rangeTypes.NON_NEGATIVE:
                ret = (function(t) { return (1 - t) * 100 + "%"; });
                break;
            case this.rangeTypes.ALL:
                ret = (function(t) { return Math.min(1-t, 1)*50 + "%"; });
                break;
        }
        return ret;
	};

    BarRuleSet.prototype.getCellHeightPercentagesFn = function () {
    	var ret;
    	switch (this.getValueRangeType()) {
			case this.rangeTypes.NON_POSITIVE:
				ret = (function(t) { return -t * 100 + "%"; });
				break;
			case this.rangeTypes.NON_NEGATIVE:
				ret = (function(t) { return t * 100 + "%"; });
				break;
			case this.rangeTypes.ALL:
				ret = (function(t) { return Math.abs(t) * 50 + "%"; });
				break;
		}
		return ret;
    };

    return BarRuleSet;
})();

var StackedBarRuleSet = (function() {
    function StackedBarRuleSet(params) {
	/* params
	 * - categories
	 * - value_key
	 * - fills
	 */
	ConditionRuleSet.call(this, params);
	var value_key = params.value_key;
	var fills = params.fills || [];
	var categories = params.categories || [];
	var getUnusedColor = makeUniqueColorGetter(fills);

	// Initialize with default values
	while (fills.length < categories.length) {
	    fills.push(getUnusedColor());
	}

	var self = this;
	for (var i=0; i < categories.length; i++) {
	    (function(I) {
		var legend_target = {};
		legend_target[value_key] = {};
		for (var j=0; j<categories.length; j++) {
		    legend_target[value_key][categories[j]] = 0;
		}
		legend_target[value_key][categories[I]] = 1;
		self.addRule(function(d) {
		    return d[NA_STRING] !== true;
		},
		{shapes: [{
		    type: 'rectangle',
		    fill: fills[I],
		    width: '100%',
		    height: function(d) {
			var total = 0;
			for (var j=0; j<categories.length; j++) {
			    total += parseFloat(d[value_key][categories[j]]);
			}
			return parseFloat(d[value_key][categories[I]])*100/total + '%';
		    },
		    y: function(d) {
			var total = 0;
			var prev_vals_sum = 0;
			for (var j=0; j<categories.length; j++) {
			    var new_val = parseFloat(d[value_key][categories[j]]);
			    if (j < I) {
				prev_vals_sum += new_val;
			    }
			    total += new_val;
			}
			return prev_vals_sum*100/total + '%';
		    }
		}],
	    exclude_from_legend: false,
	    legend_config: {'type': 'rule', 'target': legend_target},
	    legend_label: categories[I]});
	    })(i);
	}
    }
    StackedBarRuleSet.prototype = Object.create(ConditionRuleSet.prototype);
    return StackedBarRuleSet;
})();
var GeneticAlterationRuleSet = (function () {
    function GeneticAlterationRuleSet(params) {
	/* params:
	 * - rule_params
	 */
	LookupRuleSet.call(this, params);
	(function addRules(self) {
	    var rule_params = params.rule_params;
	    for (var key in rule_params) {
		if (rule_params.hasOwnProperty(key)) {
		    var key_rule_params = rule_params[key];
		    if (key === '*') {
			self.addRule(null, null, shallowExtend(rule_params['*'], {'legend_config': {'type': 'rule', 'target': {}}}));
		    } else {
			for (var value in key_rule_params) {
			    if (key_rule_params.hasOwnProperty(value)) {
				var equiv_values = value.split(",");
				var legend_rule_target = {};
				legend_rule_target[equiv_values[0]] = value;
				var rule_id = self.addRule(
				    key,
				    (equiv_values[0] === '*' ? null : equiv_values[0]),
				    shallowExtend(key_rule_params[value],
					{
						'legend_config': {'type': 'rule', 'target': legend_rule_target},
						'legend_base_color': typeof self.legend_base_color === "undefined" ? "" : self.legend_base_color
					})
				);
				for (var i = 1; i < equiv_values.length; i++) {
				    self.linkExistingRule(key, (equiv_values[i] === '*' ? null : equiv_values[i]), rule_id);
				}
			    }
			}
		    }
		}
	    }
	})(this);
	this.addRule(NA_STRING, true, {
	    shapes: makeNAShapes(params.na_z || 1),
	    legend_label: params.na_legend_label || NA_LABEL,
	    exclude_from_legend: false,
	    legend_config: {'type': 'rule', 'target': {'na': true}},
	    legend_order: Number.POSITIVE_INFINITY
	});
    }
    GeneticAlterationRuleSet.prototype = Object.create(LookupRuleSet.prototype);

    return GeneticAlterationRuleSet;
})();

var Rule = (function () {
    function Rule(params) {
	this.shapes = params.shapes.map(function (shape) {
	    if (shape.type === 'rectangle') {
		return new Shape.Rectangle(shape);
	    } else if (shape.type === 'triangle') {
		return new Shape.Triangle(shape);
	    } else if (shape.type === 'ellipse') {
		return new Shape.Ellipse(shape);
	    } else if (shape.type === 'line') {
		return new Shape.Line(shape);
	    }
	});
	this.legend_label = typeof params.legend_label === "undefined" ? "" : params.legend_label;
        this.legend_base_color = params.legend_base_color;
	this.exclude_from_legend = params.exclude_from_legend;
	this.legend_config = params.legend_config;// {'type':'rule', 'target': {'mut_type':'MISSENSE'}} or {'type':'number', 'color':'rgba(1,2,3,1), 'range':[lower, upper]} or {'type':'gradient', 'color_range':['rgba(...)' or '#...', 'rgba(...)' or '#...'], 'number_range':[lower, upper]}
	this.legend_order = params.legend_order;
    }
    Rule.prototype.getLegendConfig = function () {
	return this.legend_config;
    }
    Rule.prototype.apply = function (d, cell_width, cell_height) {
	// Gets concrete shapes (i.e. computed
	// real values from percentages)
	var concrete_shapes = [];
	for (var i = 0, shapes_len = this.shapes.length; i < shapes_len; i++) {
	    concrete_shapes.push(this.shapes[i].getComputedParams(d, cell_width, cell_height));
	}
	return concrete_shapes;
    }

    Rule.prototype.isExcludedFromLegend = function () {
	return this.exclude_from_legend;
    }

    return Rule;
})();

var GradientCategoricalRuleSet = (function() {

        function GradientCategoricalRuleSet(params) {
	        RuleSet.call(this, params);
	        this.prototype = Object.create(RuleSet.prototype);
                // For the GradientCategoricalRuleSet a datum must always have a 
                // value and may have a category attribute. A datum is 'NA'
                // when not meeting the requirements for the GradientRuleSet.
                // To achieve correct evaluation, the CategoricalRuleSet is 
                // asked not to contribute an `NA` rule (via `true` flag).
                this.gradientRuleSet = new GradientRuleSet(params);
                this.categoricalRuleSet = new CategoricalRuleSet(params, true);
        }

        // inherit methods from RuleSet
        GradientCategoricalRuleSet.prototype = Object.create(RuleSet.prototype);

        // RuleSet API
	GradientCategoricalRuleSet.prototype.apply = function(data, cell_width, cell_height, out_active_rules, data_id_key, important_ids) {

		var shapes = [];
		// check the type of datum (categorical or continuous) and delegate
                // fetching of shapes to the appropriate RuleSet class
		for (var i = 0; i < data.length; i++) {
			var datum = data[i];
			if ( this.isCategorical(datum) ) {
				shapes.push( this.categoricalRuleSet.apply([datum], cell_width, cell_height, out_active_rules, data_id_key, important_ids)[0] );
			} else {
				shapes.push( this.gradientRuleSet.apply([datum], cell_width, cell_height, out_active_rules, data_id_key, important_ids)[0] );
			}
		}
		return shapes;
	}

	// RuleSet API
	GradientCategoricalRuleSet.prototype.getRulesWithId = function(datum) {
		var categoricalRules = this.categoricalRuleSet.getRulesWithId(datum);
		var gradientRules = this.gradientRuleSet.getRulesWithId(datum);
		var rules = categoricalRules.concat(gradientRules);
		return rules;
	}

	// helper function
	GradientCategoricalRuleSet.prototype.isCategorical = function(datum) {
                // A categorical value is recognized by presence of a category attribute.
                // Note: a categorical datum still requires a continuous value (used for clustering).
		return datum[this.categoricalRuleSet.category_key] !== undefined;
	}

        return GradientCategoricalRuleSet;
})();

module.exports = function (params) {
    if (params.type === 'categorical') {
	return new CategoricalRuleSet(params);
    } else if (params.type === 'gradient') {
	return new GradientRuleSet(params);
    } else if (params.type === 'gradient+categorical') {
	return new GradientCategoricalRuleSet(params);
    } else if (params.type === 'bar') {
	return new BarRuleSet(params);
    } else if (params.type === 'stacked_bar') {
	return new StackedBarRuleSet(params);
    } else if (params.type === 'gene') {
	return new GeneticAlterationRuleSet(params);
    }
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

// Colours for the oncoprint heatmap feature
// viridis comes from matplotlib's default colour set, created by Stéfan van der Walt and Nathaniel Smith

module.exports = {
  viridis: [
    [68.086020,1.242870,84.000825,1.000000],
  	[68.470050,2.449275,85.533885,1.000000],
  	[68.835720,3.729375,87.051645,1.000000],
  	[69.182775,5.085210,88.553595,1.000000],
  	[69.511470,6.518565,90.038715,1.000000],
  	[69.821295,8.031735,91.507515,1.000000],
  	[70.112760,9.626760,92.958465,1.000000],
  	[70.385610,11.262585,94.391820,1.000000],
  	[70.639590,12.837720,95.807325,1.000000],
  	[70.874955,14.362620,97.203705,1.000000],
  	[71.091705,15.846975,98.580960,1.000000],
  	[71.289330,17.298180,99.938835,1.000000],
  	[71.468085,18.721335,101.276565,1.000000],
  	[71.627970,20.121285,102.593895,1.000000],
  	[71.768730,21.501600,103.890570,1.000000],
  	[71.890620,22.864830,105.165825,1.000000],
  	[71.993385,24.213525,106.419405,1.000000],
  	[72.077280,25.549980,107.650800,1.000000],
  	[72.142050,26.875215,108.860010,1.000000],
  	[72.188205,28.191015,110.046270,1.000000],
  	[72.215235,29.498400,111.209325,1.000000],
  	[72.223395,30.798135,112.348920,1.000000],
  	[72.212685,32.091240,113.464800,1.000000],
  	[72.183360,33.378225,114.556455,1.000000],
  	[72.135420,34.659600,115.623885,1.000000],
  	[72.068865,35.936130,116.666835,1.000000],
  	[71.983950,37.207560,117.685050,1.000000],
  	[71.881185,38.474655,118.678275,1.000000],
  	[71.760060,39.737670,119.646255,1.000000],
  	[71.621340,40.996605,120.589245,1.000000],
  	[71.465025,42.251715,121.506990,1.000000],
  	[71.291370,43.502745,122.399235,1.000000],
  	[71.100630,44.749950,123.266235,1.000000],
  	[70.893060,45.993585,124.107735,1.000000],
  	[70.669170,47.233140,124.923990,1.000000],
  	[70.429470,48.468870,125.715255,1.000000],
  	[70.173705,49.700775,126.481275,1.000000],
  	[69.902640,50.928855,127.222305,1.000000],
  	[69.616530,52.152600,127.938855,1.000000],
  	[69.316140,53.372265,128.630670,1.000000],
  	[69.001725,54.587595,129.298260,1.000000],
  	[68.673540,55.798590,129.942135,1.000000],
  	[68.331840,57.004995,130.562040,1.000000],
  	[67.977900,58.206810,131.158995,1.000000],
  	[67.611975,59.403780,131.732745,1.000000],
  	[67.234065,60.595905,132.284310,1.000000],
  	[66.845190,61.782930,132.813435,1.000000],
  	[66.445605,62.965110,133.321140,1.000000],
  	[66.036075,64.141935,133.807680,1.000000],
  	[65.617110,65.313150,134.273565,1.000000],
  	[65.189475,66.479265,134.719560,1.000000],
  	[64.753425,67.639770,135.145665,1.000000],
  	[64.309470,68.794665,135.552645,1.000000],
  	[63.858375,69.943950,135.941265,1.000000],
  	[63.400395,71.087625,136.311780,1.000000],
  	[62.936805,72.225435,136.664955,1.000000],
  	[62.467860,73.357125,137.001300,1.000000],
  	[61.993815,74.483460,137.321580,1.000000],
  	[61.515435,75.603675,137.625795,1.000000],
  	[61.033230,76.718025,137.915220,1.000000],
  	[60.547455,77.826510,138.189855,1.000000],
  	[60.059130,78.929385,138.450720,1.000000],
  	[59.568765,80.026140,138.698070,1.000000],
  	[59.076870,81.117030,138.932670,1.000000],
  	[58.583445,82.202055,139.155030,1.000000],
  	[58.089510,83.281470,139.365660,1.000000],
  	[57.595065,84.355275,139.565070,1.000000],
  	[57.100875,85.423470,139.753515,1.000000],
  	[56.607195,86.486055,139.931760,1.000000],
  	[56.114535,87.543285,140.100315,1.000000],
  	[55.623150,88.595160,140.259690,1.000000],
  	[55.133550,89.641425,140.409885,1.000000],
  	[54.645990,90.682845,140.551920,1.000000],
  	[54.160725,91.719165,140.686050,1.000000],
  	[53.678265,92.750385,140.812530,1.000000],
  	[53.198865,93.776760,140.932125,1.000000],
  	[52.722780,94.798290,141.044835,1.000000],
  	[52.250265,95.815230,141.150915,1.000000],
  	[51.781065,96.827580,141.250875,1.000000],
  	[51.315945,97.835850,141.344970,1.000000],
  	[50.854650,98.839785,141.433710,1.000000],
  	[50.397180,99.839640,141.517095,1.000000],
  	[49.944300,100.835415,141.595380,1.000000],
  	[49.495500,101.827365,141.669075,1.000000],
  	[49.051035,102.815745,141.738180,1.000000],
  	[48.610905,103.800555,141.802695,1.000000],
  	[48.175365,104.782050,141.863130,1.000000],
  	[47.743905,105.760230,141.919485,1.000000],
  	[47.316780,106.735350,141.972015,1.000000],
  	[46.893990,107.707665,142.020720,1.000000],
  	[46.475280,108.676920,142.065600,1.000000],
  	[46.060395,109.643625,142.106910,1.000000],
  	[45.649845,110.607780,142.144650,1.000000],
  	[45.242865,111.569385,142.179075,1.000000],
  	[44.839455,112.528950,142.209675,1.000000],
  	[44.439870,113.486220,142.236960,1.000000],
  	[44.043345,114.441705,142.260675,1.000000],
  	[43.649880,115.395150,142.281075,1.000000],
  	[43.259730,116.346810,142.297650,1.000000],
  	[42.872130,117.296940,142.310910,1.000000],
  	[42.487335,118.245540,142.320345,1.000000],
  	[42.104835,119.192865,142.325955,1.000000],
  	[41.724375,120.138915,142.327740,1.000000],
  	[41.346210,121.083690,142.325700,1.000000],
  	[40.969575,122.027700,142.319325,1.000000],
  	[40.594470,122.970435,142.308615,1.000000],
  	[40.220895,123.912660,142.293315,1.000000],
  	[39.848850,124.854120,142.273680,1.000000],
  	[39.477825,125.794815,142.249200,1.000000],
  	[39.107820,126.735000,142.219620,1.000000],
  	[38.739090,127.674675,142.184685,1.000000],
  	[38.371380,128.614095,142.144650,1.000000],
  	[38.004945,129.553005,142.098750,1.000000],
  	[37.639785,130.491915,142.047495,1.000000],
  	[37.275900,131.430315,141.989865,1.000000],
  	[36.913545,132.368715,141.925860,1.000000],
  	[36.552465,133.307115,141.855225,1.000000],
  	[36.193425,134.245515,141.777705,1.000000],
  	[35.836680,135.183660,141.693045,1.000000],
  	[35.482485,136.122060,141.600990,1.000000],
  	[35.131350,137.060460,141.501030,1.000000],
  	[34.784040,137.999115,141.393165,1.000000],
  	[34.441830,138.937515,141.277395,1.000000],
  	[34.104465,139.876425,141.152955,1.000000],
  	[33.773220,140.815080,141.019590,1.000000],
  	[33.448860,141.754245,140.877045,1.000000],
  	[33.132915,142.693410,140.725320,1.000000],
  	[32.825895,143.632575,140.563395,1.000000],
  	[32.529840,144.571995,140.391780,1.000000],
  	[32.245515,145.511415,140.209455,1.000000],
  	[31.975470,146.451090,140.016930,1.000000],
  	[31.720725,147.390510,139.813185,1.000000],
  	[31.483065,148.330185,139.598475,1.000000],
  	[31.264530,149.269605,139.372035,1.000000],
  	[31.066905,150.209025,139.133865,1.000000],
  	[30.892740,151.148445,138.883455,1.000000],
  	[30.744075,152.087610,138.620805,1.000000],
  	[30.623460,153.026520,138.345150,1.000000],
  	[30.533190,153.965175,138.057000,1.000000],
  	[30.475560,154.903320,137.755590,1.000000],
  	[30.452865,155.840955,137.440410,1.000000],
  	[30.468165,156.778335,137.111460,1.000000],
  	[30.523245,157.714950,136.768485,1.000000],
  	[30.620655,158.651055,136.411230,1.000000],
  	[30.762690,159.586140,136.039440,1.000000],
  	[30.951900,160.520460,135.653115,1.000000],
  	[31.189560,161.454015,135.251490,1.000000],
  	[31.478220,162.386295,134.834565,1.000000],
  	[31.818900,163.317555,134.402340,1.000000],
  	[32.213130,164.247285,133.954305,1.000000],
  	[32.662185,165.175995,133.490205,1.000000],
  	[33.167085,166.102920,133.010040,1.000000],
  	[33.728340,167.028570,132.513555,1.000000],
  	[34.346460,167.952180,132.000495,1.000000],
  	[35.021445,168.874260,131.470605,1.000000],
  	[35.753550,169.794045,130.923885,1.000000],
  	[36.542265,170.712045,130.359825,1.000000],
  	[37.387080,171.627750,129.778680,1.000000],
  	[38.287740,172.540905,129.180195,1.000000],
  	[39.242970,173.451765,128.563860,1.000000],
  	[40.252005,174.360075,127.929930,1.000000],
  	[41.314080,175.265580,127.277895,1.000000],
  	[42.427665,176.168280,126.608010,1.000000],
  	[43.591740,177.067920,125.919765,1.000000],
  	[44.805285,177.964500,125.213415,1.000000],
  	[46.066515,178.857510,124.488195,1.000000],
  	[47.374665,179.747205,123.744615,1.000000],
  	[48.727950,180.633330,122.982420,1.000000],
  	[50.125605,181.515885,122.201355,1.000000],
  	[51.565845,182.394360,121.401420,1.000000],
  	[53.047650,183.268755,120.582615,1.000000],
  	[54.570000,184.139070,119.744940,1.000000],
  	[56.131620,185.004795,118.887630,1.000000],
  	[57.731235,185.866440,118.011195,1.000000],
  	[59.367825,186.722985,117.115635,1.000000],
  	[61.040370,187.574940,116.200440,1.000000],
  	[62.747850,188.422050,115.266120,1.000000],
  	[64.489245,189.263805,114.312420,1.000000],
  	[66.263535,190.100460,113.339085,1.000000],
  	[68.069955,190.931505,112.346115,1.000000],
  	[69.907995,191.756940,111.333255,1.000000],
  	[71.776635,192.576765,110.300760,1.000000],
  	[73.674855,193.390470,109.248630,1.000000],
  	[75.602145,194.198055,108.176865,1.000000],
  	[77.557740,194.999520,107.085465,1.000000],
  	[79.540875,195.794610,105.974430,1.000000],
  	[81.551295,196.583070,104.843760,1.000000],
  	[83.587980,197.364900,103.693200,1.000000],
  	[85.650675,198.139590,102.522495,1.000000],
  	[87.738870,198.907395,101.332155,1.000000],
  	[89.851800,199.667805,100.122180,1.000000],
  	[91.988955,200.420820,98.892570,1.000000],
  	[94.149570,201.166440,97.643070,1.000000],
  	[96.333645,201.904155,96.374445,1.000000],
  	[98.540415,202.634220,95.085930,1.000000],
  	[100.769370,203.356125,93.778035,1.000000],
  	[103.020255,204.070125,92.450760,1.000000],
  	[105.292815,204.775455,91.103595,1.000000],
  	[107.586540,205.472370,89.737050,1.000000],
  	[109.900665,206.160615,88.351380,1.000000],
  	[112.234935,206.840190,86.946585,1.000000],
  	[114.588840,207.510840,85.522920,1.000000],
  	[116.961870,208.172565,84.080385,1.000000],
  	[119.353515,208.824855,82.619490,1.000000],
  	[121.763520,209.468220,81.139725,1.000000],
  	[124.191630,210.101895,79.641855,1.000000],
  	[126.636825,210.725880,78.126135,1.000000],
  	[129.099105,211.340430,76.592310,1.000000],
  	[131.577960,211.945290,75.041145,1.000000],
  	[134.072880,212.540205,73.472385,1.000000],
  	[136.583355,213.125175,71.886540,1.000000],
  	[139.108620,213.699945,70.284630,1.000000],
  	[141.648420,214.264770,68.666655,1.000000],
  	[144.201990,214.819650,67.033635,1.000000],
  	[146.768565,215.364330,65.385825,1.000000],
  	[149.347890,215.898555,63.723735,1.000000],
  	[151.938945,216.422835,62.048895,1.000000],
  	[154.541475,216.936915,60.361560,1.000000],
  	[157.154715,217.440795,58.663260,1.000000],
  	[159.777645,217.934475,56.955015,1.000000],
  	[162.410010,218.418210,55.238100,1.000000],
  	[165.050535,218.892000,53.514555,1.000000],
  	[167.698710,219.355845,51.785910,1.000000],
  	[170.353770,219.809745,50.054715,1.000000],
  	[173.014695,220.254210,48.323265,1.000000],
  	[175.680720,220.689240,46.594875,1.000000],
  	[178.350825,221.114835,44.872605,1.000000],
  	[181.023990,221.531505,43.160535,1.000000],
  	[183.699705,221.939250,41.463765,1.000000],
  	[186.376695,222.338580,39.787395,1.000000],
  	[189.053940,222.729495,38.138055,1.000000],
  	[191.730420,223.112505,36.523140,1.000000],
  	[194.405115,223.488120,34.951320,1.000000],
  	[197.077260,223.856340,33.432795,1.000000],
  	[199.745325,224.217675,31.978275,1.000000],
  	[202.408800,224.572890,30.601275,1.000000],
  	[205.066410,224.921730,29.316075,1.000000],
  	[207.716880,225.265215,28.138485,1.000000],
  	[210.359700,225.603600,27.085335,1.000000],
  	[212.993850,225.937395,26.174730,1.000000],
  	[215.618055,226.267110,25.424010,1.000000],
  	[218.231550,226.593255,24.850260,1.000000],
  	[220.833315,226.916340,24.468015,1.000000],
  	[223.422840,227.236875,24.288750,1.000000],
  	[225.999105,227.555370,24.320370,1.000000],
  	[228.561600,227.872080,24.565425,1.000000],
  	[231.109305,228.188025,25.021875,1.000000],
  	[233.641710,228.503205,25.682835,1.000000],
  	[236.157030,228.819150,26.538105,1.000000],
  	[238.655520,229.135350,27.573405,1.000000],
  	[241.137180,229.452825,28.773690,1.000000],
  	[243.601500,229.771575,30.122640,1.000000],
  	[246.047970,230.092365,31.604955,1.000000],
  	[248.476335,230.415450,33.204825,1.000000],
  	[250.886340,230.741085,34.908735,1.000000],
  	[253.278240,231.070035,36.703680,1.000000],
  ],
  inferno: [
    [0.372810,0.118830,3.535830,1.000000],
    [0.578085,0.323850,4.735350,1.000000],
    [0.841245,0.573495,6.180945,1.000000],
    [1.159485,0.864960,7.881795,1.000000],
    [1.531530,1.196460,9.832290,1.000000],
    [1.957380,1.564680,11.943180,1.000000],
    [2.438055,1.966815,14.061465,1.000000],
    [2.974065,2.401335,16.182300,1.000000],
    [3.568725,2.862375,18.324810,1.000000],
    [4.223055,3.349680,20.471910,1.000000],
    [4.940115,3.858915,22.635585,1.000000],
    [5.723985,4.385745,24.818385,1.000000],
    [6.577215,4.929405,27.012150,1.000000],
    [7.505160,5.483265,29.228355,1.000000],
    [8.513175,6.044010,31.466235,1.000000],
    [9.605340,6.609855,33.719160,1.000000],
    [10.774515,7.175445,35.990955,1.000000],
    [11.963325,7.732620,38.291820,1.000000],
    [13.169220,8.280870,40.609770,1.000000],
    [14.394495,8.815095,42.945570,1.000000],
    [15.641700,9.330450,45.298710,1.000000],
    [16.914405,9.818520,47.675310,1.000000],
    [18.214395,10.274970,50.070270,1.000000],
    [19.542435,10.685775,52.478745,1.000000],
    [20.900310,11.048640,54.898695,1.000000],
    [22.289805,11.361780,57.327315,1.000000],
    [23.712450,11.623665,59.761290,1.000000],
    [25.169010,11.832510,62.195520,1.000000],
    [26.660505,11.987040,64.624650,1.000000],
    [28.186680,12.086745,67.042560,1.000000],
    [29.747280,12.131370,69.441855,1.000000],
    [31.341540,12.121680,71.814120,1.000000],
    [32.967675,12.059715,74.150940,1.000000],
    [34.623390,11.948280,76.442880,1.000000],
    [36.306390,11.791710,78.681015,1.000000],
    [38.013615,11.594340,80.856675,1.000000],
    [39.741750,11.362545,82.961190,1.000000],
    [41.485695,11.106270,84.985635,1.000000],
    [43.241625,10.834695,86.922870,1.000000],
    [45.005715,10.557510,88.768305,1.000000],
    [46.774395,10.283895,90.517605,1.000000],
    [48.543585,10.023795,92.168985,1.000000],
    [50.310735,9.792000,93.721425,1.000000],
    [52.073295,9.596160,95.175690,1.000000],
    [53.829225,9.442650,96.533565,1.000000],
    [55.576995,9.336825,97.798110,1.000000],
    [57.314565,9.283275,98.972895,1.000000],
    [59.042190,9.283275,100.062000,1.000000],
    [60.759615,9.338355,101.070015,1.000000],
    [62.466585,9.449025,102.001785,1.000000],
    [64.163100,9.614775,102.861390,1.000000],
    [65.849670,9.835605,103.653675,1.000000],
    [67.526550,10.109985,104.382975,1.000000],
    [69.193485,10.435110,105.053880,1.000000],
    [70.851750,10.800015,105.669960,1.000000],
    [72.501855,11.202915,106.235040,1.000000],
    [74.144565,11.639220,106.752435,1.000000],
    [75.780390,12.104850,107.225205,1.000000],
    [77.409840,12.595980,107.656410,1.000000],
    [79.033425,13.108785,108.048855,1.000000],
    [80.651910,13.639950,108.404580,1.000000],
    [82.265550,14.186670,108.726135,1.000000],
    [83.874855,14.745885,109.015305,1.000000],
    [85.480335,15.315300,109.273620,1.000000],
    [87.082500,15.892875,109.503375,1.000000],
    [88.681605,16.477080,109.705335,1.000000],
    [90.278160,17.065875,109.881030,1.000000],
    [91.872420,17.657985,110.031735,1.000000],
    [93.464895,18.252645,110.158470,1.000000],
    [95.055840,18.848325,110.262000,1.000000],
    [96.645255,19.444515,110.343345,1.000000],
    [98.233140,20.040705,110.403525,1.000000],
    [99.820515,20.636385,110.442795,1.000000],
    [101.406870,21.230535,110.461665,1.000000],
    [102.992970,21.822900,110.460645,1.000000],
    [104.578815,22.413480,110.439990,1.000000],
    [106.164405,23.001765,110.400465,1.000000],
    [107.749995,23.587755,110.342070,1.000000],
    [109.335840,24.171450,110.265060,1.000000],
    [110.921685,24.752595,110.169945,1.000000],
    [112.507785,25.331190,110.056470,1.000000],
    [114.094140,25.907235,109.925400,1.000000],
    [115.681005,26.481240,109.776990,1.000000],
    [117.268125,27.052695,109.610730,1.000000],
    [118.855500,27.622110,109.426875,1.000000],
    [120.443640,28.189485,109.225170,1.000000],
    [122.032290,28.754820,109.006125,1.000000],
    [123.621195,29.318370,108.769740,1.000000],
    [125.210610,29.880645,108.515760,1.000000],
    [126.800535,30.441645,108.244440,1.000000],
    [128.390715,31.001625,107.955780,1.000000],
    [129.981150,31.561095,107.649780,1.000000],
    [131.571585,32.119800,107.326185,1.000000],
    [133.162530,32.678250,106.984995,1.000000],
    [134.753220,33.236955,106.626210,1.000000],
    [136.344165,33.796170,106.250085,1.000000],
    [137.934600,34.355895,105.856365,1.000000],
    [139.525035,34.916895,105.445305,1.000000],
    [141.114960,35.479170,105.016395,1.000000],
    [142.704120,36.043230,104.569890,1.000000],
    [144.292770,36.609585,104.105790,1.000000],
    [145.880655,37.178235,103.624095,1.000000],
    [147.467520,37.749945,103.124805,1.000000],
    [149.052855,38.324970,102.608175,1.000000],
    [150.637170,38.903565,102.073950,1.000000],
    [152.219700,39.486240,101.521875,1.000000],
    [153.800445,40.073505,100.952205,1.000000],
    [155.379150,40.665870,100.365195,1.000000],
    [156.955815,41.263335,99.760845,1.000000],
    [158.529675,41.866920,99.139155,1.000000],
    [160.100985,42.476625,98.500380,1.000000],
    [161.669490,43.092960,97.844520,1.000000],
    [163.234425,43.716690,97.171575,1.000000],
    [164.796300,44.348070,96.481545,1.000000],
    [166.354095,44.987355,95.774430,1.000000],
    [167.908065,45.635310,95.050740,1.000000],
    [169.457700,46.292445,94.310730,1.000000],
    [171.002745,46.959015,93.554145,1.000000],
    [172.542690,47.635785,92.781495,1.000000],
    [174.077280,48.322755,91.993035,1.000000],
    [175.606515,49.020945,91.188765,1.000000],
    [177.129885,49.730355,90.368940,1.000000],
    [178.646880,50.452005,89.533815,1.000000],
    [180.157500,51.185640,88.683135,1.000000],
    [181.660980,51.932280,87.817665,1.000000],
    [183.157320,52.692180,86.937405,1.000000],
    [184.646265,53.465850,86.043120,1.000000],
    [186.126795,54.253545,85.134555,1.000000],
    [187.599165,55.056030,84.212475,1.000000],
    [189.062865,55.873560,83.276880,1.000000],
    [190.517385,56.706390,82.328280,1.000000],
    [191.962470,57.555030,81.366675,1.000000],
    [193.397610,58.419735,80.392830,1.000000],
    [194.822550,59.301270,79.406745,1.000000],
    [196.236780,60.199635,78.408675,1.000000],
    [197.640045,61.115085,77.399130,1.000000],
    [199.031835,62.048385,76.378365,1.000000],
    [200.411895,62.999280,75.346635,1.000000],
    [201.779715,63.968280,74.304450,1.000000],
    [203.134785,64.955640,73.252320,1.000000],
    [204.477105,65.961870,72.190245,1.000000],
    [205.805910,66.986460,71.118990,1.000000],
    [207.120945,68.030430,70.038555,1.000000],
    [208.421955,69.093270,68.949450,1.000000],
    [209.708430,70.175235,67.851675,1.000000],
    [210.979860,71.276835,66.746250,1.000000],
    [212.236245,72.397815,65.632665,1.000000],
    [213.477075,73.538175,64.511940,1.000000],
    [214.702095,74.697915,63.383820,1.000000],
    [215.910795,75.877545,62.248815,1.000000],
    [217.102920,77.076300,61.107180,1.000000],
    [218.277960,78.294690,59.958915,1.000000],
    [219.435915,79.532460,58.804530,1.000000],
    [220.576530,80.789610,57.644025,1.000000],
    [221.699295,82.065885,56.477910,1.000000],
    [222.803955,83.361030,55.305930,1.000000],
    [223.890255,84.675300,54.128340,1.000000],
    [224.957940,86.008185,52.945140,1.000000],
    [226.007010,87.359430,51.756840,1.000000],
    [227.036955,88.729035,50.562930,1.000000],
    [228.047775,90.116745,49.363920,1.000000],
    [229.038960,91.522305,48.159300,1.000000],
    [230.010765,92.945460,46.949580,1.000000],
    [230.962425,94.385700,45.734250,1.000000],
    [231.894450,95.843280,44.513565,1.000000],
    [232.806330,97.317180,43.287525,1.000000],
    [233.697810,98.807655,42.055620,1.000000],
    [234.569145,100.314195,40.817850,1.000000],
    [235.419825,101.836545,39.574215,1.000000],
    [236.249850,103.374195,38.324460,1.000000],
    [237.059220,104.927145,37.068585,1.000000],
    [237.847935,106.494885,35.806335,1.000000],
    [238.615485,108.076905,34.537200,1.000000],
    [239.362125,109.673205,33.261690,1.000000],
    [240.087855,111.283275,31.979295,1.000000],
    [240.792675,112.906860,30.690270,1.000000],
    [241.476075,114.543705,29.394360,1.000000],
    [242.138310,116.193300,28.091820,1.000000],
    [242.779125,117.855390,26.782905,1.000000],
    [243.399030,119.529720,25.467870,1.000000],
    [243.997260,121.215780,24.147225,1.000000],
    [244.574070,122.913570,22.822245,1.000000],
    [245.129715,124.622580,21.493695,1.000000],
    [245.663685,126.342810,20.163615,1.000000],
    [246.176235,128.073495,18.834045,1.000000],
    [246.667110,129.814890,17.508045,1.000000],
    [247.136565,131.566230,16.189440,1.000000],
    [247.584345,133.327515,14.883585,1.000000],
    [248.010450,135.098490,13.597620,1.000000],
    [248.414880,136.878900,12.339960,1.000000],
    [248.797635,138.668490,11.122590,1.000000],
    [249.158460,140.466750,9.957750,1.000000],
    [249.497610,142.273935,8.907405,1.000000],
    [249.814830,144.089535,8.009295,1.000000],
    [250.110120,145.913295,7.269540,1.000000],
    [250.383225,147.744960,6.693750,1.000000],
    [250.634655,149.584530,6.288555,1.000000],
    [250.863645,151.431495,6.061350,1.000000],
    [251.070705,153.286110,6.019530,1.000000],
    [251.255325,155.147610,6.171510,1.000000],
    [251.417760,157.016250,6.525960,1.000000],
    [251.558010,158.891775,7.092570,1.000000],
    [251.675820,160.773675,7.881540,1.000000],
    [251.770935,162.661950,8.903580,1.000000],
    [251.843610,164.556600,10.170930,1.000000],
    [251.893845,166.457115,11.623155,1.000000],
    [251.921130,168.363750,13.196250,1.000000],
    [251.925975,170.275740,14.873895,1.000000],
    [251.907870,172.193085,16.640535,1.000000],
    [251.867070,174.115785,18.484695,1.000000],
    [251.803320,176.043330,20.397450,1.000000],
    [251.716620,177.975720,22.371405,1.000000],
    [251.606970,179.912700,24.401970,1.000000],
    [251.474625,181.854015,26.485065,1.000000],
    [251.319330,183.799410,28.618395,1.000000],
    [251.140575,185.748885,30.800175,1.000000],
    [250.939125,187.702185,33.029385,1.000000],
    [250.714980,189.658290,35.305515,1.000000],
    [250.468140,191.617710,37.629075,1.000000],
    [250.199115,193.579425,40.000065,1.000000],
    [249.908160,195.543435,42.420015,1.000000],
    [249.595530,197.508975,44.889435,1.000000],
    [249.261735,199.475790,47.410365,1.000000],
    [248.907540,201.443370,49.984590,1.000000],
    [248.532690,203.411460,52.614660,1.000000],
    [248.137440,205.379295,55.303635,1.000000],
    [247.724340,207.346110,58.052790,1.000000],
    [247.294665,209.310375,60.864930,1.000000],
    [246.850455,211.271325,63.742860,1.000000],
    [246.391965,213.228705,66.691170,1.000000],
    [245.920470,215.181240,69.714705,1.000000],
    [245.441835,217.126380,72.814230,1.000000],
    [244.959630,219.062595,75.992550,1.000000],
    [244.473600,220.989120,79.259100,1.000000],
    [243.992670,222.902895,82.613370,1.000000],
    [243.524235,224.800095,86.056125,1.000000],
    [243.069825,226.680210,89.599095,1.000000],
    [242.644230,228.537630,93.234885,1.000000],
    [242.254590,230.369295,96.969105,1.000000],
    [241.914165,232.170615,100.798695,1.000000],
    [241.636470,233.936745,104.719575,1.000000],
    [241.436295,235.662840,108.725115,1.000000],
    [241.329960,237.344055,112.803585,1.000000],
    [241.332765,238.975545,116.940960,1.000000],
    [241.460265,240.553740,121.117350,1.000000],
    [241.723935,242.076090,125.313630,1.000000],
    [242.133975,243.541065,129.504300,1.000000],
    [242.693700,244.949685,133.671765,1.000000],
    [243.404895,246.303480,137.792055,1.000000],
    [244.263480,247.605765,141.850125,1.000000],
    [245.262060,248.860620,145.840875,1.000000],
    [246.393495,250.072890,149.737530,1.000000],
    [247.646310,251.246910,153.549270,1.000000],
    [249.010305,252.387015,157.273800,1.000000],
    [250.475535,253.497795,160.909335,1.000000],
    [252.032310,254.582820,164.455620,1.000000],
  ]
}


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var menuDotsIcon = __webpack_require__(33);

var TOGGLE_BTN_CLASS = "oncoprintjs__track_options__toggle_btn_img";
var TOGGLE_BTN_OPEN_CLASS = "oncoprintjs__track_options__open";
var DROPDOWN_CLASS = "oncoprintjs__track_options__dropdown";
var SEPARATOR_CLASS = "oncoprintjs__track_options__separator";
var NTH_CLASS_PREFIX = "nth-";

var OncoprintTrackOptionsView = (function () {
    function OncoprintTrackOptionsView($div, moveUpCallback, moveDownCallback, removeCallback, sortChangeCallback, unexpandCallback) {
	var position = $div.css('position');
	if (position !== 'absolute' && position !== 'relative') {
	    console.log("WARNING: div passed to OncoprintTrackOptionsView must be absolute or relative positioned - layout problems will occur");
	}

	this.moveUpCallback = moveUpCallback;
	this.moveDownCallback = moveDownCallback;
	this.removeCallback = removeCallback; // function(track_id) { ... }
	this.sortChangeCallback = sortChangeCallback; // function(track_id, dir) { ... }
	this.unexpandCallback = unexpandCallback; // function(track_id)

	this.$div = $div;
	this.$ctr = $('<div></div>').css({'position': 'absolute', 'overflow-y':'hidden', 'overflow-x':'hidden'}).appendTo(this.$div);
	this.$buttons_ctr = $('<div></div>').css({'position':'absolute'}).appendTo(this.$ctr);
	this.$dropdown_ctr = $('<div></div>').css({'position': 'absolute'}).appendTo(this.$div);

	this.img_size;

	this.rendering_suppressed = false;

	this.track_options_$elts = {};

	this.menu_shown = {};

	var self = this;
	this.clickHandler = function() {
        $(self).trigger('oncoprint-track-options-view.click-out');
    };
	$(document).on("click", this.clickHandler);

	this.interaction_disabled = false;
    }
    
    var renderAllOptions = function(view, model) {
	if (view.rendering_suppressed) {
	    return;
	}
	$(view).off('oncoprint-track-options-view.click-out');
	$(view).on('oncoprint-track-options-view.click-out', function() {
	     for (var track_id in view.track_options_$elts) {
		if (view.track_options_$elts.hasOwnProperty(track_id)) {
		    hideTrackMenu(view, track_id);
		}
	    }
	});
	
	view.$buttons_ctr.empty();
	view.$dropdown_ctr.empty();
	scroll(view, model.getVertScroll());

	var tracks = model.getTracks();
	var minimum_track_height = Number.POSITIVE_INFINITY;
	for (var i = 0; i < tracks.length; i++) {
	    minimum_track_height = Math.min(minimum_track_height, model.getTrackHeight(tracks[i]));
	}
	view.img_size = Math.floor(minimum_track_height * 0.75);

	for (var i = 0; i < tracks.length; i++) {
	    renderTrackOptions(view, model, tracks[i], i);
	}
    };

    var scroll = function (view, scroll_y) {
	if (view.rendering_suppressed) {
	    return;
	}
	view.$buttons_ctr.css({'top': -scroll_y});
	view.$dropdown_ctr.css({'top': -scroll_y});
    };

    var resize = function (view, model) {
	if (view.rendering_suppressed) {
	    return;
	}
	view.$div.css({'width': view.getWidth(), 'height': model.getCellViewHeight()});
	view.$ctr.css({'width': view.getWidth(), 'height': model.getCellViewHeight()});
    };

    var hideTrackMenu = function (view, track_id) {
	view.menu_shown[track_id] = false;
	var $elts = view.track_options_$elts[track_id];
	$elts.$dropdown.css({'z-index': 1});
	$elts.$dropdown.css({'border': '1px solid rgba(125,125,125,0)'});
	$elts.$img.css({'border': '1px solid rgba(125,125,125,0)'});
	$elts.$dropdown.fadeOut(100);
    };

    var showTrackMenu = function (view, track_id) {
	view.menu_shown[track_id] = true;
	var $elts = view.track_options_$elts[track_id];
	$elts.$dropdown.css({'z-index': 10});
	$elts.$dropdown.css({'border': '1px solid rgba(125,125,125,1)'});
	$elts.$img.css({'border': '1px solid rgba(125,125,125,1)'});
	$elts.$dropdown.fadeIn(100);
    };

    var hideMenusExcept = function (view, track_id) {
	track_id = track_id.toString();
	for (var other_track_id in view.track_options_$elts) {
	    if (view.track_options_$elts.hasOwnProperty(other_track_id)) {
		if (other_track_id === track_id) {
		    continue;
		}
		hideTrackMenu(view, other_track_id);
	    }
	}
    };

    var $makeDropdownOption = function (text, weight, disabled, callback) {
	var li = $('<li>').text(text).css({'font-weight': weight, 'font-size': 12, 'border-bottom': '1px solid rgba(0,0,0,0.3)'})
		if (!disabled) {
            if (callback) {
            	li.addClass("clickable");
                li.css({'cursor': 'pointer'});
				li.click(callback)
					.hover(function () {
						$(this).css({'background-color': 'rgb(200,200,200)'});
					}, function () {
						$(this).css({'background-color': 'rgba(255,255,255,0)'});
					});
			} else {
            	li.click(function(evt) { evt.stopPropagation(); });
			}
		} else {
			li.addClass("disabled");
			li.css({'color': 'rgb(200, 200, 200)', 'cursor': 'default'});
		}
	return li;
    };
    var $makeDropdownSeparator = function () {
	return $('<li>').css({'border-top': '1px solid black'}).addClass(SEPARATOR_CLASS);
    };

    var renderSortArrow = function($sortarrow, model, track_id) {
	var sortarrow_char = '';
	if (model.isTrackSortDirectionChangeable(track_id)){
	    sortarrow_char = {
		    '1': '<i class="fa fa-signal" aria-hidden="true" title="Sorted ascending"></i>',
		    '-1': '<i class="fa fa-signal" style="transform: scaleX(-1);" aria-hidden="true" title="Sorted descending"></i>',
		    '0': ''}[model.getTrackSortDirection(track_id)];
	}
	$sortarrow.html(sortarrow_char);
    }

    var renderTrackOptions = function (view, model, track_id, index) {
	var $div, $img, $sortarrow, $dropdown;
	var top = model.getZoomedTrackTops(track_id);
	$div = $('<div>').appendTo(view.$buttons_ctr).css({'position': 'absolute', 'left': '0px', 'top': top + 'px', 'white-space': 'nowrap'});
	$img = $('<img/>').appendTo($div)
		.attr({
			'src': menuDotsIcon,
			'width': view.img_size,
			'height': view.img_size
		})
		.css({
			'float': 'left',
			'cursor': 'pointer',
			'border': '1px solid rgba(125,125,125,0)'
		}).addClass(TOGGLE_BTN_CLASS).addClass(NTH_CLASS_PREFIX+(index+1));
	$sortarrow = $('<span>').appendTo($div).css({'position': 'absolute', 'top': Math.floor(view.img_size / 4) + 'px'});
	$dropdown = $('<ul>').appendTo(view.$dropdown_ctr)
		.css({
			'position':'absolute',
			'width': 120,
			'display': 'none',
			'list-style-type': 'none',
			'padding-left': '6',
			'padding-right': '6',
			'float': 'right',
			'background-color': 'rgb(255,255,255)',
			'left':'0px', 'top': top + view.img_size + 'px'
		}).addClass(DROPDOWN_CLASS).addClass(NTH_CLASS_PREFIX+(index+1));
	view.track_options_$elts[track_id] = {'$div': $div, '$img': $img, '$dropdown': $dropdown};

	renderSortArrow($sortarrow, model, track_id);

	$img.hover(function (evt) {
	    if (!view.menu_shown[track_id]) {
		$(this).css({'border': '1px solid rgba(125,125,125,0.3)'});
	    }
	}, function (evt) {
	    if (!view.menu_shown[track_id]) {
		$(this).css({'border': '1px solid rgba(125,125,125,0)'});
	    }
	});
	$img.click(function (evt) {
	    evt.stopPropagation();
	    if ($dropdown.is(":visible")) {
		$img.addClass(TOGGLE_BTN_OPEN_CLASS);
		hideTrackMenu(view, track_id);
	    } else {
		$img.removeClass(TOGGLE_BTN_OPEN_CLASS);
		showTrackMenu(view, track_id);
	    }
	    hideMenusExcept(view, track_id);
	});

	var movable = !model.isTrackInClusteredGroup(track_id);
	var sortable = movable; // for now movable and sortable are the same

	$dropdown.append($makeDropdownOption('Move up', 'normal', !movable, function (evt) {
	    evt.stopPropagation();
	    view.moveUpCallback(track_id);
	}));
	$dropdown.append($makeDropdownOption('Move down', 'normal', !movable, function (evt) {
	    evt.stopPropagation();
	    view.moveDownCallback(track_id);
	}));
	if (model.isTrackRemovable(track_id)) {
	    $dropdown.append($makeDropdownOption('Remove track', 'normal', false, function (evt) {
		evt.stopPropagation();
		view.removeCallback(track_id);
	    }));
	}
	if (model.isTrackSortDirectionChangeable(track_id)) {
	    $dropdown.append($makeDropdownSeparator());
	    var $sort_inc_li;
	    var $sort_dec_li;
	    var $dont_sort_li;
	    $sort_inc_li = $makeDropdownOption('Sort a-Z', (model.getTrackSortDirection(track_id) === 1 ? 'bold' : 'normal'), !sortable, function (evt) {
		evt.stopPropagation();
		$sort_inc_li.css('font-weight', 'bold');
		$sort_dec_li.css('font-weight', 'normal');
		$dont_sort_li.css('font-weight', 'normal');
		view.sortChangeCallback(track_id, 1);
		renderSortArrow($sortarrow, model, track_id);
	    });
	    $sort_dec_li = $makeDropdownOption('Sort Z-a', (model.getTrackSortDirection(track_id) === -1 ? 'bold' : 'normal'), !sortable, function (evt) {
		evt.stopPropagation();
		$sort_inc_li.css('font-weight', 'normal');
		$sort_dec_li.css('font-weight', 'bold');
		$dont_sort_li.css('font-weight', 'normal');
		view.sortChangeCallback(track_id, -1);
		renderSortArrow($sortarrow, model, track_id);
	    });
	    $dont_sort_li = $makeDropdownOption('Don\'t sort track', (model.getTrackSortDirection(track_id) === 0 ? 'bold' : 'normal'), !sortable, function (evt) {
		evt.stopPropagation();
		$sort_inc_li.css('font-weight', 'normal');
		$sort_dec_li.css('font-weight', 'normal');
		$dont_sort_li.css('font-weight', 'bold');
		view.sortChangeCallback(track_id, 0);
		renderSortArrow($sortarrow, model, track_id);
	    });
	    $dropdown.append($sort_inc_li);
	    $dropdown.append($sort_dec_li);
	    $dropdown.append($dont_sort_li);
	}
	if (model.isTrackExpandable(track_id)) {
	    $dropdown.append($makeDropdownOption(
		    model.getExpandButtonText(track_id),
		    'normal',
		    false,
		    function (evt) {
			evt.stopPropagation();
			// close the menu to discourage clicking again, as it
			// may take a moment to finish expanding
			renderAllOptions(view, model);
			model.expandTrack(track_id);
		    }));
	}
	if (model.isTrackExpanded(track_id)) {
	    $dropdown.append($makeDropdownOption(
		    'Remove expansion',
		    'normal',
		    false,
		    function (evt) {
			evt.stopPropagation();
			view.unexpandCallback(track_id);
		    }));
	}
	// Add custom options
	var custom_options = model.getTrackCustomOptions(track_id);
	if (custom_options && custom_options.length > 0) {
		for (var i=0; i<custom_options.length; i++) {
			(function() {
				// wrapped in function to prevent scope issues
				var option = custom_options[i];
				if (option.separator) {
					$dropdown.append($makeDropdownSeparator());
				} else {
					$dropdown.append($makeDropdownOption(option.label || "", option.weight || "normal", !!option.disabled, option.onClick && function (evt) {
						evt.stopPropagation();
						option.onClick(track_id);
					}));
				}
			})()
		}
	}
    };

    OncoprintTrackOptionsView.prototype.enableInteraction = function () {
	this.interaction_disabled = false;
    }
    OncoprintTrackOptionsView.prototype.disableInteraction = function () {
	this.interaction_disabled = true;
    }
    OncoprintTrackOptionsView.prototype.suppressRendering = function () {
	this.rendering_suppressed = true;
    }
    OncoprintTrackOptionsView.prototype.releaseRendering = function (model) {
	this.rendering_suppressed = false;
	renderAllOptions(this, model);
	resize(this, model);
	scroll(this, model.getVertScroll());
    }
    OncoprintTrackOptionsView.prototype.setScroll = function(model) {
	this.setVertScroll(model);
    }
    OncoprintTrackOptionsView.prototype.setHorzScroll = function (model) {
    }
    OncoprintTrackOptionsView.prototype.setVertScroll = function (model) {
	scroll(this, model.getVertScroll());
    }
    OncoprintTrackOptionsView.prototype.setZoom = function(model) {
	this.setVertZoom(model);
    }
    OncoprintTrackOptionsView.prototype.setVertZoom = function (model) {
	renderAllOptions(this, model);
	resize(this, model);
    }
    OncoprintTrackOptionsView.prototype.setViewport = function(model) {
	renderAllOptions(this, model);
	resize(this, model);
	scroll(this, model.getVertScroll());
    }
    OncoprintTrackOptionsView.prototype.getWidth = function () {
	return 18 + this.img_size;
    }
    OncoprintTrackOptionsView.prototype.addTracks = function (model) {
	renderAllOptions(this, model);
	resize(this, model);
    }
    OncoprintTrackOptionsView.prototype.moveTrack = function (model) {
	renderAllOptions(this, model);
	resize(this, model);
    }
    OncoprintTrackOptionsView.prototype.setTrackGroupOrder = function(model) {
	renderAllOptions(this, model);
    }
    OncoprintTrackOptionsView.prototype.setSortConfig = function(model) {
	renderAllOptions(this, model);
	}
    OncoprintTrackOptionsView.prototype.removeTrack = function(model, track_id) {
	delete this.track_options_$elts[track_id];
	renderAllOptions(this, model);
	resize(this, model);
    }
    OncoprintTrackOptionsView.prototype.destroy = function() {
    	$(document).off("click", this.clickHandler);
	};
    OncoprintTrackOptionsView.prototype.setTrackCustomOptions = function(model) {
    	renderAllOptions(this, model);
	};
    return OncoprintTrackOptionsView;
})();

module.exports = OncoprintTrackOptionsView;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNHB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9Ii0wLjAzMSAwIDQgMTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTAuMDMxIDAgNCAxNiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Y2lyY2xlIGZpbGw9IiNCMkIzQjMiIGN4PSIxLjk2OSIgY3k9IjQiIHI9IjEuNSIvPg0KPGNpcmNsZSBmaWxsPSIjQjJCM0IzIiBjeD0iMS45NjkiIGN5PSI4IiByPSIxLjUiLz4NCjxjaXJjbGUgZmlsbD0iI0IyQjNCMyIgY3g9IjEuOTY5IiBjeT0iMTIiIHI9IjEuNSIvPg0KPC9zdmc+DQo="

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var svgfactory = __webpack_require__(2);
var $ = __webpack_require__(0);

var nodeIsVisible = function(node) {
    var ret = true;
    while (node && node.tagName.toLowerCase() !== "html") {
	if ($(node).css('display') === 'none') {
	    ret = false;
	    break;
	}
	node = node.parentNode;
    }
    return ret;
};

var OncoprintLegendView = (function() {
    function OncoprintLegendView($div, base_width, base_height) {
	this.$div = $div;
	this.$svg = $(svgfactory.svg(200,200)).appendTo(this.$div);
	this.base_width = base_width;
	this.base_height = base_height;
	this.rendering_suppressed = false;
	
	this.width = $div.width();
	
	this.rule_set_label_config = {
	    weight: 'bold',
	    size: 12,
	    font: 'Arial'
	};
	this.rule_label_config = {
	    weight: 'normal',
	    size: 12,
	    font: 'Arial'
	};
	
	this.padding_after_rule_set_label = 10;
	this.padding_between_rules = 20;
	this.padding_between_rule_set_rows = 10;
    }
    
    var renderLegend = function(view, model, target_svg, show_all) {
	if (view.rendering_suppressed) {
	    return;
	}
	if (typeof target_svg === 'undefined') {
	    target_svg = view.$svg[0];
	}
	if (!nodeIsVisible(target_svg)) {
	    return;
	}
	$(target_svg).empty();
	var defs = svgfactory.defs();
	target_svg.appendChild(defs);
	
	var everything_group = svgfactory.group(0,0);
	target_svg.appendChild(everything_group);
	
	var rule_sets = model.getRuleSets();
	var y = 0;
	var rule_start_x = 200;
	for (var i=0; i<rule_sets.length; i++) {
	    if (rule_sets[i].exclude_from_legend && !show_all) {
		continue;
	    }
        var rules = model.getActiveRules(rule_sets[i].rule_set_id);
	    if (rules.length === 0) {
	    	// dont render this ruleset into legend if no active rules
	    	continue;
		}
	    var rule_set_group = svgfactory.group(0,y);
	    everything_group.appendChild(rule_set_group);
	    (function addLabel() {
		if ((typeof rule_sets[i].legend_label !== 'undefined') && rule_sets[i].legend_label.length > 0) {
		    var label = svgfactory.text(rule_sets[i].legend_label, 0, 0, 12, 'Arial', 'bold');
		    rule_set_group.appendChild(label);
		    svgfactory.wrapText(label, rule_start_x);
		}
	    })();
	    
	    var x = rule_start_x + view.padding_after_rule_set_label;
	    var in_group_y_offset = 0;

	    var labelSort = function(ruleA, ruleB) {
            var labelA = ruleA.rule.legend_label;
            var labelB = ruleB.rule.legend_label;
            if (labelA && labelB) {
                return labelA.localeCompare(labelB);
            } else if (!labelA && !labelB) {
                return 0;
            } else if (!labelA) {
                return -1;
            } else if (!labelB) {
                return 1;
            }
		};

	    rules.sort(function(ruleA, ruleB) {
	    	// sort, by legend_order, then alphabetically
			var orderA = ruleA.rule.legend_order;
			var orderB = ruleB.rule.legend_order;

			if (typeof orderA === "undefined" && typeof orderB === "undefined") {
			    // if neither have defined order, then sort alphabetically
                return labelSort(ruleA, ruleB);
			} else if (typeof orderA !== "undefined" && typeof orderB !== "undefined") {
				// if both have defined order, sort by order
				if (orderA < orderB) {
					return -1;
				} else if (orderA > orderB) {
					return 1;
				} else {
					// if order is same, sort alphabetically
					return labelSort(ruleA, ruleB);
				}
			} else if (typeof orderA === "undefined") {
				if (orderB === Number.POSITIVE_INFINITY) {
					return -1; // A comes before B regardless, if B is forced to end
				} else {
					//otherwise, A comes after B if B has defined order and A doesnt
					return 1;
				}
			} else if (typeof orderB === "undefined") {
				if (orderA === Number.POSITIVE_INFINITY) {
					return 1; // A comes after B regardless, if A is forced to end
				} else {
				    // otherwise, A comes before B if A has defined order and B doesnt
                    return -1;
				}
			}
		});
	    for (var j=0; j<rules.length; j++) {
		var rule = rules[j].rule;
		if (rule.exclude_from_legend) {
		    continue;
		}
		var group = ruleToSVGGroup(rule, view, model, target_svg, defs);
		group.setAttribute('transform', 'translate('+x+','+in_group_y_offset+')');
		rule_set_group.appendChild(group);
		if (x + group.getBBox().width > view.width) {
		    x = rule_start_x + view.padding_after_rule_set_label;
		    in_group_y_offset = rule_set_group.getBBox().height + view.padding_between_rule_set_rows;
		    group.setAttribute('transform', 'translate('+x+','+in_group_y_offset+')');
		}
		x += group.getBBox().width;
		x += view.padding_between_rules;
	    }
	    y += rule_set_group.getBBox().height;
	    y += 3*view.padding_between_rule_set_rows;
	}
	var everything_box = everything_group.getBBox();
	view.$svg[0].setAttribute('width', everything_box.width);
	// add 10px to height to give room for rectangle stroke, which doesn't factor in accurately into the bounding box
	//  so that bounding boxes are too small to show the entire stroke (see https://github.com/cBioPortal/cbioportal/issues/3994)
	view.$svg[0].setAttribute('height', everything_box.height + 10);
    };
    
    var ruleToSVGGroup = function(rule, view, model, target_svg, target_defs) {
	var root = svgfactory.group(0,0);
	var config = rule.getLegendConfig();
	if (config.type === 'rule') {
	    var concrete_shapes = rule.apply(config.target, model.getCellWidth(true), view.base_height);
            if (rule.legend_base_color) {
                // generate backgrounds
                var baseRect = svgfactory.rect(0, 0, model.getCellWidth(true), view.base_height, rule.legend_base_color);
                root.appendChild(baseRect);
            }
            // generate shapes
	    for (var i=0; i<concrete_shapes.length; i++) {
		root.appendChild(svgfactory.fromShape(concrete_shapes[i], 0, 0));
	    }
	    if (typeof rule.legend_label !== 'undefined') {
		var font_size = 12;
		var text_node = svgfactory.text(rule.legend_label, model.getCellWidth(true) + 5, view.base_height/2, font_size, 'Arial', 'normal');
		target_svg.appendChild(text_node);
		var height = text_node.getBBox().height;
		text_node.setAttribute('y', parseFloat(text_node.getAttribute('y')) - height/2);
		target_svg.removeChild(text_node);
		root.appendChild(text_node);
	    }
	} else if (config.type === 'number') {
	    var num_decimal_digits = 2;
	    var display_range = config.range.map(function(x) {
		var num_digit_multiplier = Math.pow(10, num_decimal_digits);
		return Math.round(x * num_digit_multiplier) / num_digit_multiplier;
	    });
	    root.appendChild(svgfactory.text(display_range[0], 0, 0, 12, 'Arial', 'normal'));
	    root.appendChild(svgfactory.text(display_range[1], 50, 0, 12, 'Arial', 'normal'));
	    var mesh = 100;
	    var points = [];
        var fill = null;
        var linear_gradient = null;
        if (config.range_type === 'NON_POSITIVE') {
            fill = config.negative_color;
        } else if (config.range_type === 'NON_NEGATIVE') {
            fill = config.positive_color;
        } else if (config.range_type === 'ALL') {
            linear_gradient = svgfactory.linearGradient();
        	var offset = Math.abs(display_range[0]) / (Math.abs(display_range[0]) + display_range[1]) * 100;
            linear_gradient.appendChild(svgfactory.stop(offset, config.negative_color));
            linear_gradient.appendChild(svgfactory.stop(offset, config.positive_color));
            target_defs.appendChild(linear_gradient);
        }
	    points.push([5, 20]);
	    for (var i=0; i<mesh; i++) {
		var t = i/mesh;
		var h = config.interpFn((1-t)*config.range[0] + t*config.range[1]);
		var height = 20*h;
		points.push([5 + 40*i/mesh, 20-height]);
	    }
	    points.push([45, 20]);
        root.appendChild(svgfactory.path(points, fill, fill, linear_gradient));
	} else if (config.type === 'gradient') {
	    var num_decimal_digits = 2;
	    var display_range = config.range.map(function(x) {
		var num_digit_multiplier = Math.pow(10, num_decimal_digits);
		return Math.round(x * num_digit_multiplier) / num_digit_multiplier;
	    });
	    var gradient = svgfactory.gradient(config.colorFn);
	    var gradient_id = gradient.getAttribute("id");
	    target_defs.appendChild(gradient);
	    root.appendChild(svgfactory.text(display_range[0], 0, 0, 12, 'Arial', 'normal'));
	    root.appendChild(svgfactory.text(display_range[1], 120, 0, 12, 'Arial', 'normal'));
	    root.appendChild(svgfactory.rect(30,0,60,20,"url(#"+gradient_id+")"));
	}
	return root;
    };
    
    OncoprintLegendView.prototype.setWidth = function(w, model) {
	this.width = w;
	renderLegend(this, model);
    }
    OncoprintLegendView.prototype.removeTrack = function(model) {
	renderLegend(this, model);
    }
    
    OncoprintLegendView.prototype.addTracks = function(model) {
	renderLegend(this, model);
    }
    
    OncoprintLegendView.prototype.setTrackData = function(model) {
	renderLegend(this, model);
    }

    OncoprintLegendView.prototype.setTrackImportantIds = function(model) {
    	renderLegend(this, model);
	}

    OncoprintLegendView.prototype.shareRuleSet = function(model) {
	renderLegend(this, model);
    }
    
    OncoprintLegendView.prototype.setRuleSet = function(model) {
	renderLegend(this, model);
    }

    OncoprintLegendView.prototype.setTrackGroupLegendOrder = function(model) {
    	renderLegend(this, model);
	}

    OncoprintLegendView.prototype.hideTrackLegends = function(model) {
	renderLegend(this, model);
    }
    
    OncoprintLegendView.prototype.showTrackLegends = function(model) {
	renderLegend(this, model);
    }
    
    OncoprintLegendView.prototype.suppressRendering = function() {
	this.rendering_suppressed = true;
    }
    
    OncoprintLegendView.prototype.releaseRendering = function(model) {
	this.rendering_suppressed = false;
	renderLegend(this, model);
    }
    
    OncoprintLegendView.prototype.toSVGGroup = function(model, offset_x, offset_y) {
	var root = svgfactory.group((offset_x || 0), (offset_y || 0));
	this.$svg.append(root);
	renderLegend(this, model, root, true);
	root.parentNode.removeChild(root);
	return root;
    }
    
    return OncoprintLegendView;
})();

module.exports = OncoprintLegendView;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);

var TOOLTIP_CLASS = "oncoprintjs__tooltip";

var OncoprintToolTip = (function() {
    function OncoprintToolTip($container, params) {
	params = params || {};
	this.$container = $container;
	this.$div = $('<div></div>').addClass(TOOLTIP_CLASS).appendTo($container).css({'background-color':'rgba(255,255,255,1)', 'position':'absolute', 'display':'none', 'border':'1px solid black', 'max-width':300, 'min-width':150});
	if (params.noselect) {
	    this.$div.addClass("noselect");
	}
	this.hide_timeout_id = undefined;
	this.show_timeout_id = undefined;
	this.center = false;
	
	this.shown = false;
	
	var self = this;
	this.$div.on("mousemove", function(evt) {
	    evt.stopPropagation();
	    cancelScheduledHide(self);
	});
	this.$div.on("mouseleave", function(evt) {
	    evt.stopPropagation();
	    self.hide();
	});
    }
    OncoprintToolTip.prototype.show = function(wait, page_x, page_y, $contents, fade) {
	cancelScheduledHide(this);
	
	if (typeof wait !== 'undefined' && !this.shown) {
	    var self = this;
	    cancelScheduledShow(this);
	    this.show_timeout_id = setTimeout(function() {
		doShow(self, page_x, page_y, $contents, fade);
	    }, wait);
	} else {
	    doShow(this, page_x, page_y, $contents, fade);
	}
    }
    var doShow = function(tt, page_x, page_y, $contents, fade) {
	cancelScheduledShow(tt);
	tt.show_timeout_id = undefined;
	tt.$div.empty();
	tt.$div.css({'top':0, 'left':0, 'z-index':9999}); // put up top left so that it doesnt cause any page expansion, before the position calculation which depends on page size
	tt.$div.append($contents);
	if (!fade) {
	    tt.$div.show();
	} else {
	    tt.$div.stop().fadeIn('fast');
	}
	var container_offset = tt.$container.offset();
	var x = page_x - container_offset.left - (tt.center ? tt.$div.width()/2 : 0);
	var y = page_y - container_offset.top - tt.$div.height();
	// clamp to visible area
	var min_padding = 20;
	y = Math.max(y, min_padding-(container_offset.top)); // make sure not too high
	y = Math.min(y, $(window).height() - tt.$div.height() - min_padding - container_offset.top); // make sure not too low
	x = Math.max(x, min_padding-(container_offset.left)); // make sure not too left
	x = Math.min(x, $(window).width() - tt.$div.width() - min_padding - container_offset.left); // make sure not too right

	tt.$div.css({'top':y, 'left':x, 'z-index':9999});
	tt.shown = true;
    };
    var doHide = function(tt, fade) {
	cancelScheduledHide(tt);
	tt.hide_timeout_id = undefined;
	if (!fade) {
	    tt.$div.hide();
	} else {
	    tt.$div.fadeOut();
	}
	tt.shown = false;
    };
    var cancelScheduledShow = function(tt) {
	clearTimeout(tt.show_timeout_id);
	tt.show_timeout_id = undefined;
    };
    var cancelScheduledHide = function(tt) {
	clearTimeout(tt.hide_timeout_id);
	tt.hide_timeout_id = undefined;
    };
    OncoprintToolTip.prototype.showIfNotAlreadyGoingTo = function(wait, page_x, page_y, $contents) {
	if (typeof this.show_timeout_id === 'undefined') {
	    this.show(wait, page_x, page_y, $contents);
	}
    }
    OncoprintToolTip.prototype.hideIfNotAlreadyGoingTo = function(wait) {
	if (typeof this.hide_timeout_id === 'undefined') {
	    this.hide(wait);
	}
    };
    OncoprintToolTip.prototype.hide = function(wait) {
	cancelScheduledShow(this);
	
	if (!this.shown) {
	    return;
	}
	
	if (typeof wait !== 'undefined') {
	    var self = this;
	    cancelScheduledHide(this);
	    this.hide_timeout_id = setTimeout(function() {
		doHide(self);
	    }, wait);
	} else {
	    doHide(this);
	}
    }
    OncoprintToolTip.prototype.fadeIn = function(wait, page_x, page_y, $contents) {
	this.show(wait, page_x, page_y, $contents, true);
    }
    return OncoprintToolTip;
})();

module.exports = OncoprintToolTip;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var svgfactory = __webpack_require__(2);
var $ = __webpack_require__(0);

var OncoprintTrackInfoView = (function () {
    function OncoprintTrackInfoView($div, tooltip) {
	this.$div = $div;
	this.tooltip = tooltip;
	this.tooltip.center = false;
	this.$ctr = $('<div></div>').css({'position': 'absolute', 'overflow-y':'hidden', 'overflow-x':'hidden'}).appendTo(this.$div);
	this.$text_ctr = $('<div></div>').css({'position':'absolute'}).appendTo(this.$ctr);
	this.base_font_size = 12;
	this.font_family = 'Arial';
	this.font_weight = 'bold';
	this.width = 0;

	this.$label_elts = [];

	this.rendering_suppressed = false;
    }

    var destroyLabelElts = function(view) {
        for (var i=0; i<view.$label_elts.length; i++) {
        	view.$label_elts[i].off("mousemove mouseleave");
		}
        view.$label_elts = [];
	}

    var renderAllInfo = function (view, model) {
	if (view.rendering_suppressed) {
	    return;
	}
	view.$text_ctr.empty();
	destroyLabelElts(view);

	var tracks = model.getTracks();
	view.minimum_track_height = Number.POSITIVE_INFINITY;
	for (var i = 0; i < tracks.length; i++) {
	    view.minimum_track_height = Math.min(view.minimum_track_height, model.getTrackHeight(tracks[i]));
	}

	view.width = 32;

	var label_tops = model.getLabelTops();
	scroll(view, model.getVertScroll());
	var font_size = view.getFontSize();
	for (var j = 0; j < tracks.length; j++) {
		(function() {
			var i = j;
			var $new_label = $('<span>').css({'position': 'absolute',
			'font-family': view.font_family,
			'font-weight': view.font_weight,
			'font-size': font_size})
				.addClass('noselect');
			$new_label.text(model.getTrackInfo(tracks[i]));
			$new_label.appendTo(view.$text_ctr);
			view.$label_elts.push($new_label);
			setTimeout(function() {
				$new_label.on("mousemove", function() {
					var $tooltip_elt = model.$getTrackInfoTooltip(tracks[i]);
					if ($tooltip_elt) {
						var offset = $new_label.offset();
						view.tooltip.fadeIn(200, offset.left, offset.top, $tooltip_elt);
					}
				}).on("mouseleave", function() {
					view.tooltip.hideIfNotAlreadyGoingTo(150);
				});
			}, 0); // delay to give time for render before adding events
			var top = label_tops[tracks[i]] + (model.getCellHeight(tracks[i]) - $new_label.outerHeight()) / 2;
			$new_label.css({'top': top + 'px'});
			view.width = Math.max(view.width, $new_label[0].clientWidth);
		})();
	}
    };
    var scroll = function (view, scroll_y) {
	if (view.rendering_suppressed) {
	    return;
	}
	view.$text_ctr.css({'top': -scroll_y});
    };

    var resize = function (view, model) {
	if (view.rendering_suppressed) {
	    return;
	}
	view.$div.css({'width': view.getWidth(), 'height': model.getCellViewHeight()});
	view.$ctr.css({'width': view.getWidth(), 'height': model.getCellViewHeight()});
    };

    OncoprintTrackInfoView.prototype.getFontSize = function () {
	return Math.max(Math.min(this.base_font_size, this.minimum_track_height), 7);
    }
    OncoprintTrackInfoView.prototype.getWidth = function () {
	return this.width + 10;
    }
    OncoprintTrackInfoView.prototype.addTracks = function (model) {
	renderAllInfo(this, model);
	resize(this, model);
    }
    OncoprintTrackInfoView.prototype.moveTrack = function (model) {
	renderAllInfo(this, model);
	resize(this, model);
    }
    OncoprintTrackInfoView.prototype.setTrackGroupOrder = function(model) {
	renderAllInfo(this, model);
	resize(this, model);
    }
    OncoprintTrackInfoView.prototype.removeTrack = function (model) {
	renderAllInfo(this, model);
	resize(this, model);
    }
    OncoprintTrackInfoView.prototype.setTrackInfo = function (model) {
	renderAllInfo(this, model);
	resize(this, model);
    }
    OncoprintTrackInfoView.prototype.setScroll = function(model) {
	this.setVertScroll(model);
    }
    OncoprintTrackInfoView.prototype.setHorzScroll = function (model) {
    }
    OncoprintTrackInfoView.prototype.setVertScroll = function (model) {
	scroll(this, model.getVertScroll());
    }
    OncoprintTrackInfoView.prototype.setZoom = function(model) {
	this.setVertZoom(model);
    }
    
    OncoprintTrackInfoView.prototype.setViewport = function(model) {
	renderAllInfo(this, model);
	resize(this, model);
	scroll(this, model.getVertScroll());
    }
    OncoprintTrackInfoView.prototype.setVertZoom = function (model) {
	renderAllInfo(this, model);
	resize(this, model);
    }
    OncoprintTrackInfoView.prototype.suppressRendering = function () {
	this.rendering_suppressed = true;
    }
    OncoprintTrackInfoView.prototype.releaseRendering = function (model) {
	this.rendering_suppressed = false;
	renderAllInfo(this, model);
	resize(this, model);
	scroll(this, model.getVertScroll());
    }
    OncoprintTrackInfoView.prototype.destroy = function() {
    	destroyLabelElts(this);
	}
    OncoprintTrackInfoView.prototype.toSVGGroup = function (model, offset_x, offset_y) {
	var root = svgfactory.group((offset_x || 0), (offset_y || 0));
	var cell_tops = model.getCellTops();
	var tracks = model.getTracks();
	for (var i = 0; i < tracks.length; i++) {
	    var track_id = tracks[i];
	    var y = cell_tops[track_id] + model.getCellHeight(track_id) / 2;
	    var info = model.getTrackInfo(track_id);
	    var text_elt = svgfactory.text(info, 0, y, this.font_size, this.font_family, this.font_weight, "bottom");
	    text_elt.setAttribute("dy", "0.35em");
	    root.appendChild(text_elt);
	}
	return root;
    }
    return OncoprintTrackInfoView;
})();

module.exports = OncoprintTrackInfoView;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var gl_matrix = __webpack_require__(7);
var OncoprintZoomSlider = __webpack_require__(38);
var $ = __webpack_require__(0);
var zoomToFitIcon = __webpack_require__(39);

var arrayFindIndex = function (arr, callback, start_index) {
    start_index = start_index || 0;
    for (var i = start_index; i < arr.length; i++) {
	if (callback(arr[i])) {
	    return i;
	}
    }
    return -1;
};

var getNewCanvas = function(view) {
    var old_canvas = view.$canvas[0];
    old_canvas.removeEventListener("webglcontextlost", view.handleContextLost);
    var new_canvas = old_canvas.cloneNode();
    new_canvas.addEventListener("webglcontextlost", view.handleContextLost);
    var parent_node = old_canvas.parentNode;
    parent_node.removeChild(old_canvas);
    parent_node.insertBefore(new_canvas, view.$overlay_canvas[0]);
    view.$canvas = $(new_canvas);
    view.ctx = null;
};

var getWebGLCanvasContext = function (view) {
    try {
	var canvas = view.$canvas[0];
	var ctx = view.ctx || canvas.getContext("experimental-webgl", {alpha: false, antialias: true});
	ctx.clearColor(1.0, 1.0, 1.0, 1.0);
	ctx.clear(ctx.COLOR_BUFFER_BIT | ctx.DEPTH_BUFFER_BIT);
	ctx.viewportWidth = canvas.width;
	ctx.viewportHeight = canvas.height;
	ctx.viewport(0, 0, ctx.viewportWidth, ctx.viewportHeight);
	ctx.enable(ctx.DEPTH_TEST);
	ctx.enable(ctx.BLEND);
	ctx.blendEquation(ctx.FUNC_ADD);
	ctx.blendFunc(ctx.SRC_ALPHA, ctx.ONE_MINUS_SRC_ALPHA);
	ctx.depthMask(false);

	return ctx;
    } catch (e) {
	return null;
    }
};

var ensureWebGLContext = function(view) {
    for (var i=0; i<5; i++) {
        if (!view.ctx || view.ctx.isContextLost()) {
        	// have to get a new canvas when context is lost by browser
        	getNewCanvas(view);
            view.ctx = getWebGLCanvasContext(view);
            setUpShaders(view);
        } else {
            break;
        }
    }
    if (!view.ctx || view.ctx.isContextLost()) {
        throw new Error("Unable to get WebGL context for Oncoprint Minimap");
    }
};

var createShaderProgram = function (view, vertex_shader, fragment_shader) {
    var program = view.ctx.createProgram();
    view.ctx.attachShader(program, vertex_shader);
    view.ctx.attachShader(program, fragment_shader);

    view.ctx.linkProgram(program);

    var success = view.ctx.getProgramParameter(program, view.ctx.LINK_STATUS);
    if (!success) {
	var msg = view.ctx.getProgramInfoLog(program);
	view.ctx.deleteProgram(program);
	throw "Unable to link shader program: " + msg;
    }

    return program;
};
var createShader = function (view, source, type) {
    var shader = view.ctx.createShader(view.ctx[type]);
    view.ctx.shaderSource(shader, source);
    view.ctx.compileShader(shader);

    var success = view.ctx.getShaderParameter(shader, view.ctx.COMPILE_STATUS);
    if (!success) {
	var msg = view.ctx.getShaderInfoLog(shader);
	view.ctx.deleteShader(shader);
	throw "Unable to compile shader: " + msg;
    }

    return shader;
};
var getWebGLContextAndSetUpMatrices = function (view) {
    view.ctx = getWebGLCanvasContext(view);
    (function initializeMatrices(self) {
	var mvMatrix = gl_matrix.mat4.create();
	gl_matrix.mat4.lookAt(mvMatrix, [0, 0, 1], [0, 0, 0], [0, 1, 0]);
	self.mvMatrix = mvMatrix;

	var pMatrix = gl_matrix.mat4.create();
	gl_matrix.mat4.ortho(pMatrix, 0, self.ctx.viewportWidth, self.ctx.viewportHeight, 0, -5, 1000); // y axis inverted so that y increases down like SVG
	self.pMatrix = pMatrix;
    })(view);
};

var setUpShaders = function(self, vertex_bank_size) {
    var vertex_shader_source = ['precision highp float;',
	'attribute float aPosVertex;',
	'attribute float aColVertex;',
	'attribute float aVertexOncoprintColumn;',
	'uniform float columnWidth;',
	'uniform float zoomX;',
	'uniform float zoomY;',
	'uniform mat4 uMVMatrix;',
	'uniform mat4 uPMatrix;',
	'uniform float offsetY;',
	'uniform float positionBitPackBase;',
	'uniform float texSize;',
	'varying float texCoord;',
	'vec3 unpackVec3(float packedVec3, float base) {',
	'	float pos0 = floor(packedVec3 / (base*base));',
	'	float pos0Contr = pos0*base*base;',
	'	float pos1 = floor((packedVec3 - pos0Contr)/base);',
	'	float pos1Contr = pos1*base;',
	'	float pos2 = packedVec3 - pos0Contr - pos1Contr;',
	'	return vec3(pos0, pos1, pos2);',
	'}',
	'void main(void) {',
	'	gl_Position = vec4(unpackVec3(aPosVertex, positionBitPackBase), 1.0);',
	'	gl_Position[0] += aVertexOncoprintColumn*columnWidth;',
	'	gl_Position[1] += offsetY;',
	'	gl_Position *= vec4(zoomX, zoomY, 1.0, 1.0);',
	'	gl_Position = uPMatrix * uMVMatrix * gl_Position;',
	'	texCoord = (aColVertex + 0.5) / texSize;',
	'}'].join('\n');
	 var fragment_shader_source = ['precision mediump float;',
		'varying float texCoord;',
		'uniform sampler2D uSampler;',
		'void main(void) {',
		'   gl_FragColor = texture2D(uSampler, vec2(texCoord, 0.5));',
		'}'].join('\n');
	var vertex_shader = createShader(self, vertex_shader_source, 'VERTEX_SHADER');
	    var fragment_shader = createShader(self, fragment_shader_source, 'FRAGMENT_SHADER');

	    var shader_program = createShaderProgram(self, vertex_shader, fragment_shader);
	    shader_program.vertexPositionAttribute = self.ctx.getAttribLocation(shader_program, 'aPosVertex');
	    self.ctx.enableVertexAttribArray(shader_program.vertexPositionAttribute);
	    shader_program.vertexColorAttribute = self.ctx.getAttribLocation(shader_program, 'aColVertex');
	    self.ctx.enableVertexAttribArray(shader_program.vertexColorAttribute);
	    shader_program.vertexOncoprintColumnAttribute = self.ctx.getAttribLocation(shader_program, 'aVertexOncoprintColumn');
	    self.ctx.enableVertexAttribArray(shader_program.vertexOncoprintColumnAttribute);

	    shader_program.samplerUniform = self.ctx.getUniformLocation(shader_program, 'uSampler');
	    shader_program.pMatrixUniform = self.ctx.getUniformLocation(shader_program, 'uPMatrix');
	    shader_program.mvMatrixUniform = self.ctx.getUniformLocation(shader_program, 'uMVMatrix');
	    shader_program.columnWidthUniform = self.ctx.getUniformLocation(shader_program, 'columnWidth');
	    shader_program.zoomXUniform = self.ctx.getUniformLocation(shader_program, 'zoomX');
	    shader_program.zoomYUniform = self.ctx.getUniformLocation(shader_program, 'zoomY');
	    shader_program.offsetYUniform = self.ctx.getUniformLocation(shader_program, 'offsetY');
	    shader_program.positionBitPackBaseUniform = self.ctx.getUniformLocation(shader_program, 'positionBitPackBase');
	    shader_program.texSizeUniform = self.ctx.getUniformLocation(shader_program, 'texSize');

	    self.shader_program = shader_program;
};

var clamp = function(x, lower, upper) {
    return Math.max(lower, Math.min(upper, x));
};

var OncoprintMinimapView = (function () {

    function OncoprintMinimapView($div, $canvas, $overlay_canvas, model, cell_view, width, height, drag_callback, viewport_callback, horz_zoom_callback, vert_zoom_callback, zoom_to_fit_callback, close_callback) {
	this.$div = $div;
	this.$canvas = $canvas;
	this.$overlay_canvas = $overlay_canvas;

	var self = this;
	var padding = 4;
	var vertical_zoom_area_width = 20;
	var horizontal_zoom_area_height = 20;
	var window_bar_height = 20;

	this.handleContextLost = (function() {
		// catch when context lost and refresh it
		// eg if cell view uses a ton of contexts, then browser clears oldest context,
		//	then the minimap would be empty until we refresh the context and rerender
		drawOncoprintAndOverlayRect(this, model, cell_view);
	}).bind(this);

	this.$canvas[0].addEventListener("webglcontextlost", this.handleContextLost);

	this.layout_numbers = {
	    window_width: padding + width + padding + vertical_zoom_area_width,
	    window_height: window_bar_height + padding + height + padding + horizontal_zoom_area_height,
	    vertical_zoom_area_width: vertical_zoom_area_width,
	    horizontal_zoom_area_height: horizontal_zoom_area_height,
	    padding: padding,
	    window_bar_height: window_bar_height,
	    canvas_left: padding,
	    canvas_top: window_bar_height + padding,
	};
	this.$div.css({'min-width': this.layout_numbers.window_width,
			'min-height': this.layout_numbers.window_height,
			'outline':'solid 1px black', 'background-color':'#ffffff'});
		    
	this.$window_bar = $('<div>').css({'position':'absolute', 
					    'min-width': this.layout_numbers.window_width,
					    'min-height': this.layout_numbers.window_bar_height,
					    'background-color':'#cccccc'})
						.appendTo(this.$div);
					
	this.$close_btn = $('<div>').css({'position':'absolute',
					    'top': 3,
					    'left': 3,
					    'min-width': this.layout_numbers.window_bar_height - 6,
					    'min-height': this.layout_numbers.window_bar_height - 6,
					    'cursor': 'pointer'})
						.appendTo(this.$div);
	$('<span>').addClass("icon fa fa-times-circle").css('font-size', (this.layout_numbers.window_bar_height - 6) + "px").appendTo(this.$close_btn);
	
	this.$close_btn.click(close_callback || function(){});
	
	this.$canvas[0].width = width;
	this.$canvas[0].height = height;
	this.$canvas.css({'top': this.layout_numbers.canvas_top, 'left':this.layout_numbers.canvas_left});
	this.$overlay_canvas[0].width = width;
	this.$overlay_canvas[0].height = width;
	this.$overlay_canvas.css({'top': this.layout_numbers.canvas_top, 'left':this.layout_numbers.canvas_left, 'outline':'solid 1px #444444'});
	
	this.horizontal_zoom = new OncoprintZoomSlider(this.$div, {'btn_size': this.layout_numbers.horizontal_zoom_area_height - padding,
								    'horizontal': true,
								    'width': width,
								    'init_val': model.getHorzZoom(),
								    'left': padding,
								    'top': this.layout_numbers.canvas_top + height + padding,
								    'onChange': function(val) { horz_zoom_callback(val); }});
	this.vertical_zoom = new OncoprintZoomSlider(this.$div, {'btn_size': this.layout_numbers.vertical_zoom_area_width - padding,
								    'vertical': true,
								    'height': height,
								    'init_val': model.getVertZoom(),
								    'left': this.layout_numbers.canvas_left + width + padding,
								    'top': this.layout_numbers.window_bar_height + padding,
								    'onChange': function(val) { vert_zoom_callback(val); }});							
	
	(function setUpZoomToFitButton() {
	    var btn_height = self.layout_numbers.horizontal_zoom_area_height - padding;
	    var btn_width = self.layout_numbers.vertical_zoom_area_width - padding;
	    var $btn = $('<div>').css({'position': 'absolute',
		'min-height': btn_height,
		'min-width': btn_width,
		'outline': 'solid 1px black',
		'left': self.layout_numbers.canvas_left + width + padding,
		'top': self.layout_numbers.canvas_top + height + padding,
		'background-size': (btn_width - 4) + 'px '+ (btn_height - 4) + 'px',
		'background-position': '2px 2px',
                'background-image': 'url('+zoomToFitIcon+')',
		'background-repeat': 'no-repeat',
		'cursor': 'pointer'}).addClass('oncoprint-zoomtofit-btn')
		    .appendTo($div);
	    $btn.hover(function () {
		$(this).css({'background-color': '#cccccc'});
	    }, function () {
		$(this).css({'background-color': '#ffffff'});
	    });
	    
	    zoom_to_fit_callback = zoom_to_fit_callback || function() {};
	    $btn.click(zoom_to_fit_callback);
	})();
	getWebGLContextAndSetUpMatrices(this);
	setUpShaders(this);
	this.overlay_ctx = $overlay_canvas[0].getContext("2d");

	this.img = new Image();
	this.current_rect = {'top': 0, 'left': 0, 'width': 0, 'height': 0, 'col':0, 'num_cols':0};

	var self = this;
	this.img.onload = function () {
	    self.ctx.drawImage(img, 0, 0);
	};

	// Set up dragging
	var resize_hit_zone = 5;
	var mouseInRectDragZone = function (x, y) {
	    return ((x >= self.current_rect.left + resize_hit_zone) &&
		    (x <= self.current_rect.left + self.current_rect.width - resize_hit_zone) &&
		    (y >= self.current_rect.top + resize_hit_zone) &&
		    (y <= self.current_rect.top + self.current_rect.height - resize_hit_zone));
	};
	var mouseInsideRectHitZone = function(x,y) {
	    return (x >= self.current_rect.left - resize_hit_zone) && 
		    (x <= self.current_rect.left + self.current_rect.width + resize_hit_zone) &&
		    (y >= self.current_rect.top - resize_hit_zone) && 
		    (y <= self.current_rect.top + self.current_rect.height + resize_hit_zone);
	};
	var mouseInRightHorzResizeZone = function (x,y) {
	    return !mouseInTopLeftResizeZone(x,y) && !mouseInTopRightResizeZone(x,y) &&
		    !mouseInBottomLeftResizeZone(x,y) && !mouseInBottomRightResizeZone(x,y) &&
		    mouseInsideRectHitZone(x,y) &&
		    (Math.abs(x - (self.current_rect.left + self.current_rect.width)) < resize_hit_zone);
	};
	var mouseInLeftHorzResizeZone = function (x,y) {
	    return !mouseInTopLeftResizeZone(x,y) && !mouseInTopRightResizeZone(x,y) &&
		    !mouseInBottomLeftResizeZone(x,y) && !mouseInBottomRightResizeZone(x,y) &&
		    mouseInsideRectHitZone(x,y) &&
		    (Math.abs(x - self.current_rect.left) < resize_hit_zone);
	};
	var mouseInTopVertResizeZone = function (x,y) {
	    return !mouseInTopLeftResizeZone(x,y) && !mouseInTopRightResizeZone(x,y) &&
		    !mouseInBottomLeftResizeZone(x,y) && !mouseInBottomRightResizeZone(x,y) &&
		    mouseInsideRectHitZone(x,y) &&
		    (Math.abs(y - self.current_rect.top) < resize_hit_zone);
	};
	var mouseInBottomVertResizeZone = function (x, y) {
	    return !mouseInTopLeftResizeZone(x, y) && !mouseInTopRightResizeZone(x, y) &&
		    !mouseInBottomLeftResizeZone(x, y) && !mouseInBottomRightResizeZone(x, y) &&
		    mouseInsideRectHitZone(x,y) &&
		    (Math.abs(y - (self.current_rect.top + self.current_rect.height)) < resize_hit_zone);
	};
	var mouseInTopLeftResizeZone = function(x,y) {
	    return (Math.abs(y - self.current_rect.top) < resize_hit_zone) &&
		    (Math.abs(x - self.current_rect.left) < resize_hit_zone);
	};
	var mouseInBottomLeftResizeZone = function(x,y) {
	    return (Math.abs(y - (self.current_rect.top + self.current_rect.height)) < resize_hit_zone) &&
		    (Math.abs(x - self.current_rect.left) < resize_hit_zone);
	};
	var mouseInTopRightResizeZone = function(x,y) {
	    return (Math.abs(y - self.current_rect.top) < resize_hit_zone) &&
		    (Math.abs(x - (self.current_rect.left + self.current_rect.width)) < resize_hit_zone);
	};
	var mouseInBottomRightResizeZone = function(x,y) {
	    return (Math.abs(y - (self.current_rect.top + self.current_rect.height)) < resize_hit_zone) &&
		    (Math.abs(x - (self.current_rect.left + self.current_rect.width)) < resize_hit_zone);
	};
	
	this.resize_hover = false;
	var updateRectResizeHoverLocation = function(x,y) {
	    if (typeof x === "undefined") {
		self.resize_hover = false;
	    } else {
		if (mouseInRightHorzResizeZone(x, y)) {
		    self.resize_hover = "r";
		} else if (mouseInLeftHorzResizeZone(x, y)) {
		    self.resize_hover = "l";
		} else if (mouseInTopVertResizeZone(x, y)) {
		    self.resize_hover = "t";
		} else if (mouseInBottomVertResizeZone(x, y)) {
		    self.resize_hover = "b";
		} else if (mouseInTopLeftResizeZone(x, y)) {
		    self.resize_hover = "tl";
		} else if (mouseInBottomRightResizeZone(x, y)) {
		    self.resize_hover = "br";
		} else if (mouseInBottomLeftResizeZone(x, y)) {
		    self.resize_hover = "bl";
		} else if (mouseInTopRightResizeZone(x, y)) {
		    self.resize_hover = "tr";
		} else {
		    self.resize_hover = false;
		}
	    }
	};
	var updateCSSCursor = function(x, y) {
	    var cursor_val;
	    if (typeof x === "undefined") {
		cursor_val = 'auto';
	    } else {
		if (mouseInRectDragZone(x, y)) {
		    cursor_val = 'move';
		} else if (mouseInRightHorzResizeZone(x, y) || mouseInLeftHorzResizeZone(x, y)) {
		    cursor_val = 'ew-resize';
		} else if (mouseInTopVertResizeZone(x, y) || mouseInBottomVertResizeZone(x, y)) {
		    cursor_val = 'ns-resize';
		} else if (mouseInTopLeftResizeZone(x, y) || mouseInBottomRightResizeZone(x, y)) {
		    cursor_val = 'nwse-resize';
		} else if (mouseInBottomLeftResizeZone(x, y) || mouseInTopRightResizeZone(x, y)) {
		    cursor_val = 'nesw-resize';
		} else {
		    cursor_val = 'auto';
		}
	    }
	    $div.css('cursor', cursor_val);
	};
	var getCanvasMouse = function(view, div_mouse_x, div_mouse_y) {
	    var canv_top = parseInt(view.$canvas[0].style.top, 10);
	    var canv_left = parseInt(view.$canvas[0].style.left, 10);
	    var canv_width = parseInt(view.$canvas[0].width, 10);
	    var canv_height = parseInt(view.$canvas[0].height, 10);
	    
	    var mouse_x = div_mouse_x - canv_left;
	    var mouse_y = div_mouse_y - canv_top;
	    
	    var outside = mouse_x < 0 || mouse_x >= canv_width || mouse_y < 0 || mouse_y >= canv_height;
	    
	    return {'mouse_x': mouse_x,
		    'mouse_y': mouse_y,
		    'outside': outside};
	};
	var dragging = false;
	var drag_type = false;
	var drag_start_col = -1;
	var drag_start_vert_scroll = -1;
	var drag_start_x = -1;
	var drag_start_y = -1;
	var drag_start_vert_zoom = -1;
	var y_ratio = -1;
	$(document).on("mousedown", function (evt) {
	    var offset = self.$div.offset();
	    var overlay_mouse_x = evt.pageX - offset.left;
	    var overlay_mouse_y = evt.pageY - offset.top;
	    var mouse = getCanvasMouse(self, overlay_mouse_x, overlay_mouse_y);
	    
	    if (!mouse.outside) {
		var mouse_x = mouse.mouse_x;
		var mouse_y = mouse.mouse_y;
		dragging = false;
		drag_type = false;


		y_ratio = model.getOncoprintHeight() / parseInt(self.$canvas[0].height, 10);
		if (mouseInRectDragZone(mouse_x, mouse_y)) {
		    drag_type = "move";
		} else if (mouseInRightHorzResizeZone(mouse_x, mouse_y)) {
		    drag_type = "resize_r";
		} else if (mouseInLeftHorzResizeZone(mouse_x, mouse_y)) {
		    drag_type = "resize_l";
		} else if (mouseInTopVertResizeZone(mouse_x, mouse_y)) {
		    drag_type = "resize_t";
		} else if (mouseInBottomVertResizeZone(mouse_x, mouse_y)) {
		    drag_type = "resize_b";
		} else if (mouseInTopRightResizeZone(mouse_x, mouse_y)) {
		    drag_type = "resize_tr";
		} else if (mouseInBottomRightResizeZone(mouse_x, mouse_y)) {
		    drag_type = "resize_br";
		} else if (mouseInTopLeftResizeZone(mouse_x, mouse_y)) {
		    drag_type = "resize_tl";
		} else if (mouseInBottomLeftResizeZone(mouse_x, mouse_y)) {
		    drag_type = "resize_bl";
		}
		if (drag_type !== false) {
		    dragging = true;
		    drag_start_x = mouse_x;
		    drag_start_y = mouse_y;
		    drag_start_col = Math.floor(model.getHorzScroll() / (model.getCellWidth() + model.getCellPadding()));
		    drag_start_vert_scroll = model.getVertScroll();
		    drag_start_vert_zoom = model.getVertZoom();
		    drag_start_rect = self.current_rect;
		}
	    }
	});
	$(document).on("mousemove", function (evt) {
	    var offset = self.$div.offset();
	    var overlay_mouse_x = evt.pageX - offset.left;
	    var overlay_mouse_y = evt.pageY - offset.top;
	    var mouse = getCanvasMouse(self, overlay_mouse_x, overlay_mouse_y);
	    var mouse_x = mouse.mouse_x;
	    var mouse_y = mouse.mouse_y;
	    var zoom = getZoom(self, model);
	    var cell_width = model.getCellWidth(true)*zoom.x;
	    if (dragging) {
		evt.preventDefault();
		var delta_col = Math.floor(mouse_x / cell_width) - Math.floor(drag_start_x / cell_width);
		var delta_y = mouse_y - drag_start_y;
		if (drag_type === "move") {
		    var delta_y_scroll = delta_y * y_ratio;
		    drag_callback((drag_start_col + delta_col)*(model.getCellWidth() + model.getCellPadding()), drag_start_vert_scroll + delta_y_scroll);
		} else {
		    var render_rect;
		    var zoom = getZoom(self, model);
		    var max_num_cols = model.getIdOrder().length;
		    var min_num_cols = Math.ceil(cell_view.getWidth() / (model.getCellWidth(true) + model.getCellPadding(true, true)));
		    var max_height = model.getOncoprintHeight(true) * zoom.y;
		    var min_height = model.getCellViewHeight() * zoom.y;
		    var drag_start_right_col = drag_start_rect.col + drag_start_rect.num_cols;
		    var drag_start_bottom = drag_start_rect.top + drag_start_rect.height;
		    if (drag_type === "resize_r") {
			// Width must be valid
			delta_col = clamp(delta_col, 
					min_num_cols - drag_start_rect.num_cols,
					max_num_cols - drag_start_rect.num_cols);
			// Right must be valid
			delta_col = Math.min(delta_col, max_num_cols - drag_start_right_col);
			render_rect = {
			    'top': drag_start_rect.top,
			    'col': drag_start_rect.col,
			    'num_cols': drag_start_rect.num_cols + delta_col,
			    'height': drag_start_rect.height
			};
		    } else if (drag_type === "resize_l") {
			// Width must be valid
			delta_col = clamp(delta_col,
					drag_start_rect.num_cols - max_num_cols,
					drag_start_rect.num_cols - min_num_cols);
			// Left must be valid
			delta_col = Math.max(delta_col, -drag_start_rect.col);
			render_rect = {
			    'top': drag_start_rect.top,
			    'col': drag_start_rect.col + delta_col,
			    'num_cols': drag_start_rect.num_cols - delta_col,
			    'height': drag_start_rect.height
			};
		    } else if (drag_type === "resize_t") {
			// Height must be valid
			delta_y = clamp(delta_y,
					drag_start_rect.height - max_height,
					drag_start_rect.height - min_height);
			// Top must be valid
			delta_y = Math.max(delta_y, -drag_start_rect.top);
			render_rect = {
			    'top': drag_start_rect.top + delta_y,
			    'col': drag_start_rect.col,
			    'num_cols': drag_start_rect.num_cols,
			    'height': drag_start_rect.height - delta_y
			};
		    } else if (drag_type === "resize_b") {
			// Height must be valid
			delta_y = clamp(delta_y,
					min_height - drag_start_rect.height,
					max_height - drag_start_rect.height);
			// Bottom must be valid
			delta_y = Math.min(delta_y, max_height - drag_start_bottom);
			render_rect = {
			    'top': drag_start_rect.top,
			    'col': drag_start_rect.col,
			    'num_cols': drag_start_rect.num_cols,
			    'height': drag_start_rect.height + delta_y
			};
		    } else if (drag_type === "resize_tr") {
			// Width must be valid
			delta_col = clamp(delta_col, 
					min_num_cols - drag_start_rect.num_cols,
					max_num_cols - drag_start_rect.num_cols);
			// Right must be valid
			delta_col = Math.min(delta_col, max_num_cols - drag_start_right_col);
			// Height must be valid
			delta_y = clamp(delta_y,
					drag_start_rect.height - max_height,
					drag_start_rect.height - min_height);
			// Top must be valid
			delta_y = Math.max(delta_y, -drag_start_rect.top);
			render_rect = {
			    'top': drag_start_rect.top + delta_y,
			    'col': drag_start_rect.col,
			    'num_cols': drag_start_rect.num_cols + delta_col,
			    'height': drag_start_rect.height - delta_y
			};
		    } else if (drag_type === "resize_tl") {
			// Width must be valid
			delta_col = clamp(delta_col,
					drag_start_rect.num_cols - max_num_cols,
					drag_start_rect.num_cols - min_num_cols);
			// Left must be valid
			delta_col = Math.max(delta_col, -drag_start_rect.col);
			// Height must be valid
			delta_y = clamp(delta_y,
					drag_start_rect.height - max_height,
					drag_start_rect.height - min_height);
			// Top must be valid
			delta_y = Math.max(delta_y, -drag_start_rect.top);
			render_rect = {
			    'top': drag_start_rect.top + delta_y,
			    'col': drag_start_rect.col + delta_col,
			    'num_cols': drag_start_rect.num_cols - delta_col,
			    'height': drag_start_rect.height - delta_y
			};
		    } else if (drag_type === "resize_br") {
			// Height must be valid
			delta_y = clamp(delta_y,
					min_height - drag_start_rect.height,
					max_height - drag_start_rect.height);
			// Bottom must be valid
			delta_y = Math.min(delta_y, max_height - drag_start_bottom);
			// Width must be valid
			delta_col = clamp(delta_col, 
					min_num_cols - drag_start_rect.num_cols,
					max_num_cols - drag_start_rect.num_cols);
			// Right must be valid
			delta_col = Math.min(delta_col, max_num_cols - drag_start_right_col);
			render_rect = {
			    'top': drag_start_rect.top,
			    'col': drag_start_rect.col,
			    'num_cols': drag_start_rect.num_cols + delta_col,
			    'height': drag_start_rect.height + delta_y
			};
		    } else if (drag_type === "resize_bl") {
			// Height must be valid
			delta_y = clamp(delta_y,
					min_height - drag_start_rect.height,
					max_height - drag_start_rect.height);
			// Bottom must be valid
			delta_y = Math.min(delta_y, max_height - drag_start_bottom);		
			// Width must be valid
			delta_col = clamp(delta_col,
					drag_start_rect.num_cols - max_num_cols,
					drag_start_rect.num_cols - min_num_cols);
			// Left must be valid
			delta_col = Math.max(delta_col, -drag_start_rect.col);
			render_rect = {
			    'top': drag_start_rect.top,
			    'col': drag_start_rect.col + delta_col,
			    'num_cols': drag_start_rect.num_cols - delta_col,
			    'height': drag_start_rect.height + delta_y
			};
		    }
		    var cell_width = model.getCellWidth(true)*zoom.x;
		    // Compute render left and width
		    render_rect.left = render_rect.col * cell_width;
		    render_rect.width = render_rect.num_cols * cell_width;
		    drawOverlayRect(self, null, null, render_rect);
		}
	    } else {
		if (mouse.outside) {
		    updateCSSCursor();
		    updateRectResizeHoverLocation();
		} else {
		    updateCSSCursor(mouse_x, mouse_y);
		    updateRectResizeHoverLocation(mouse_x, mouse_y);
		}
		drawOverlayRect(self, model, cell_view);
	    }
	});
	var endDrag = function() {
	    if (dragging) {
		if (["resize_t", "resize_b", "resize_l", "resize_r",
		    "resize_tl", "resize_tr", "resize_bl", "resize_br"].indexOf(drag_type) > -1) {
		    viewport_callback({
			'col': self.current_rect.col,
			'scroll_y_proportion': (self.current_rect.top / parseInt(self.$canvas[0].height, 10)),
			'num_cols': self.current_rect.num_cols,
			'zoom_y': (drag_start_rect.height / self.current_rect.height) * drag_start_vert_zoom
		    });
		}
		dragging = false;
		drag_type = false;
	    }
	};
	$(document).on("mouseup", function (evt) {
	    var offset = self.$div.offset();
	    var overlay_mouse_x = evt.pageX - offset.left;
	    var overlay_mouse_y = evt.pageY - offset.top;
	    endDrag();
	    var mouse = getCanvasMouse(self, overlay_mouse_x, overlay_mouse_y);
	    if (!mouse.outside) {
		var mouse_x = mouse.mouse_x;
		var mouse_y = mouse.mouse_y;
		updateCSSCursor(mouse_x, mouse_y);
		updateRectResizeHoverLocation(mouse_x, mouse_y);
	    } else {
		updateCSSCursor();
		updateRectResizeHoverLocation();
	    }
	    drawOverlayRect(self, model, cell_view);
	});
	
	(function setUpWindowDrag() {
	    var start_mouse_x;
	    var start_mouse_y;
	    var start_left;
	    var start_top;
	    var handleDrag = function(evt) {
		evt.preventDefault();
		var delta_mouse_x = evt.pageX - start_mouse_x;
		var delta_mouse_y = evt.pageY - start_mouse_y;
		self.setWindowPosition(start_left + delta_mouse_x, start_top + delta_mouse_y);
	    };
	    self.$window_bar.hover(function() {
		$(this).css({'cursor':'move'});
	    }, function() {
		$(this).css({'cursor':'auto'});
	    });
	    
	    self.$window_bar.on("mousedown", function (evt) {
		start_mouse_x = evt.pageX;
		start_mouse_y = evt.pageY;
		start_left = parseInt(self.$div.css('left'), 10);
		start_top = parseInt(self.$div.css('top'), 10);
		$(document).on("mousemove", handleDrag);
	    });
	    $(document).on("mouseup click", function () {
		$(document).off("mousemove", handleDrag);
	    });
	})();
	
    }

    var getTrackBuffers = function (view, cell_view, track_id) {
	var pos_buffer = view.ctx.createBuffer();
	var pos_array = cell_view.vertex_data[track_id].pos_array;

	view.ctx.bindBuffer(view.ctx.ARRAY_BUFFER, pos_buffer);
	view.ctx.bufferData(view.ctx.ARRAY_BUFFER, new Float32Array(pos_array), view.ctx.STATIC_DRAW);
	pos_buffer.itemSize = 1;
	pos_buffer.numItems = pos_array.length / pos_buffer.itemSize;
	
	var col_buffer = view.ctx.createBuffer();
	var col_array = cell_view.vertex_data[track_id].col_array;

	view.ctx.bindBuffer(view.ctx.ARRAY_BUFFER, col_buffer);
	view.ctx.bufferData(view.ctx.ARRAY_BUFFER, new Float32Array(col_array), view.ctx.STATIC_DRAW);
	col_buffer.itemSize = 1;
	col_buffer.numItems = col_array.length / col_buffer.itemSize;

	var tex = view.ctx.createTexture();
	view.ctx.bindTexture(view.ctx.TEXTURE_2D, tex);

	var color_bank = cell_view.vertex_data[track_id].col_bank;
	var width = Math.pow(2, Math.ceil(Math.log2(color_bank.length / 4)));
	while (color_bank.length < 4 * width) {
	    color_bank.push(0);
	}
	var height = 1;
	view.ctx.texImage2D(view.ctx.TEXTURE_2D, 0, view.ctx.RGBA, width, height, 0, view.ctx.RGBA, view.ctx.UNSIGNED_BYTE, new Uint8Array(color_bank));
	view.ctx.texParameteri(view.ctx.TEXTURE_2D, view.ctx.TEXTURE_MIN_FILTER, view.ctx.NEAREST);
	view.ctx.texParameteri(view.ctx.TEXTURE_2D, view.ctx.TEXTURE_MAG_FILTER, view.ctx.NEAREST);
	
	var color_texture = {'texture': tex, 'size': width};

	var vertex_column_buffer = view.ctx.createBuffer();
	var vertex_column_array = cell_view.vertex_column_array[track_id];
	view.ctx.bindBuffer(view.ctx.ARRAY_BUFFER, vertex_column_buffer);
	view.ctx.bufferData(view.ctx.ARRAY_BUFFER, new Float32Array(vertex_column_array), view.ctx.STATIC_DRAW);
	vertex_column_buffer.itemSize = 1;
	vertex_column_buffer.numItems = vertex_column_array.length / vertex_column_buffer.itemSize;

	return {'position': pos_buffer,
		'color': col_buffer,
		'color_tex': color_texture,
		'column': vertex_column_buffer};
    };

    var drawOncoprint = function (view, model, cell_view) {
	if (view.rendering_suppressed) {
	    return;
	}

	ensureWebGLContext(view);

	var zoom = getZoom(view, model);

	view.ctx.clearColor(1.0, 1.0, 1.0, 1.0);
	view.ctx.clear(view.ctx.COLOR_BUFFER_BIT | view.ctx.DEPTH_BUFFER_BIT);

	var tracks = model.getTracks();
	for (var i = 0; i < tracks.length; i++) {
	    var track_id = tracks[i];
	    var cell_top = model.getCellTops(track_id, true);
	    var buffers = getTrackBuffers(view, cell_view, track_id);
	    if (buffers.position.numItems === 0) {
		continue;
	    }
	    
	    view.ctx.useProgram(view.shader_program);
	    view.ctx.bindBuffer(view.ctx.ARRAY_BUFFER, buffers.position);
	    view.ctx.vertexAttribPointer(view.shader_program.vertexPositionAttribute, buffers.position.itemSize, view.ctx.FLOAT, false, 0, 0);
	    view.ctx.bindBuffer(view.ctx.ARRAY_BUFFER, buffers.color);
	    view.ctx.vertexAttribPointer(view.shader_program.vertexColorAttribute, buffers.color.itemSize, view.ctx.FLOAT, false, 0, 0);
	    
	    view.ctx.bindBuffer(view.ctx.ARRAY_BUFFER, buffers.column);
	    view.ctx.vertexAttribPointer(view.shader_program.vertexOncoprintColumnAttribute, buffers.column.itemSize, view.ctx.FLOAT, false, 0, 0);

	    view.ctx.activeTexture(view.ctx.TEXTURE0);
	    view.ctx.bindTexture(view.ctx.TEXTURE_2D, buffers.color_tex.texture);
	    view.ctx.uniform1i(view.shader_program.samplerUniform, 0);
	    view.ctx.uniform1f(view.shader_program.texSizeUniform, buffers.color_tex.size);
	    
	    view.ctx.uniformMatrix4fv(view.shader_program.pMatrixUniform, false, view.pMatrix);
	    view.ctx.uniformMatrix4fv(view.shader_program.mvMatrixUniform, false, view.mvMatrix);
	    view.ctx.uniform1f(view.shader_program.columnWidthUniform, model.getCellWidth(true));
	    view.ctx.uniform1f(view.shader_program.zoomXUniform, zoom.x);
	    view.ctx.uniform1f(view.shader_program.zoomYUniform, zoom.y);
	    view.ctx.uniform1f(view.shader_program.offsetYUniform, cell_top);
	    view.ctx.uniform1f(view.shader_program.positionBitPackBaseUniform, cell_view.position_bit_pack_base);

	    view.ctx.drawArrays(view.ctx.TRIANGLES, 0, buffers.position.numItems);
	}
    };
    var getZoom = function (view, model) {
	var zoom_x = parseInt(view.$canvas[0].width, 10) / model.getOncoprintWidthNoColumnPadding(true);
	var zoom_y = parseInt(view.$canvas[0].height, 10) / model.getOncoprintHeight(true);
	zoom_x = Math.max(0, Math.min(1, zoom_x));
	zoom_y = Math.max(0, Math.min(1, zoom_y));
	return {
	    x: zoom_x,
	    y: zoom_y
	};
    };
    
    var drawOverlayRect = function (view, model, cell_view, opt_rect) {
	if (view.rendering_suppressed) {
	    return;
	}

	var left, width, top, height, col, num_cols;
	if (opt_rect) {
	    left = opt_rect.left;
	    width = opt_rect.width;
	    top = opt_rect.top;
	    height = opt_rect.height;
	    col = opt_rect.col;
	    num_cols = opt_rect.num_cols;
	} else {
	    var cell_width = model.getCellWidth(true);
	    var cell_padding = model.getCellPadding(true);
	    var viewport = cell_view.getViewportOncoprintSpace(model);

	    var zoom = getZoom(view, model);
	    col = Math.floor(viewport.left / (cell_width + cell_padding));
	    num_cols = Math.min(model.getIdOrder().length - col,
				Math.floor(viewport.right / (cell_width + cell_padding)) - Math.floor(viewport.left / (cell_width + cell_padding)));
	    left = col * cell_width * zoom.x;
	    width = num_cols * cell_width * zoom.x;
	    top = viewport.top * zoom.y;
	    height = (viewport.bottom - viewport.top) * zoom.y;
	}

	var ctx = view.overlay_ctx;
	var canv = view.$overlay_canvas[0];
	var canv_width = parseInt(canv.width, 10);
	var canv_height = parseInt(canv.height, 10);
	
	// Clear
	ctx.fillStyle = "rgba(0,0,0,0)";
	ctx.clearRect(0, 0, canv_width, canv_height);
	// Draw rectangle
	ctx.fillStyle = "rgba(255,255,255,0.4)";
	ctx.fillRect(left, top, width, height);
	// Draw border line by line
	var unhover_color = "rgba(0,0,0,0.75)";
	var hover_color = "rgba(255,0,0,1)";
	var unhover_width = 1;
	var hover_width = 2;
	var top_is_hovered = view.resize_hover === "t" || view.resize_hover === "tr" || view.resize_hover === "tl";
	var right_is_hovered = view.resize_hover === "r" || view.resize_hover === "tr" || view.resize_hover === "br";
	var bottom_is_hovered = view.resize_hover === "b" || view.resize_hover === "br" || view.resize_hover === "bl";
	var left_is_hovered = view.resize_hover === "l" || view.resize_hover === "tl" || view.resize_hover === "bl";
	// Draw top border
	ctx.beginPath();
	ctx.moveTo(left, top);
	ctx.strokeStyle = top_is_hovered ? hover_color : unhover_color;
	ctx.lineWidth = top_is_hovered ? hover_width : unhover_width;
	ctx.lineTo(left+width, top);
	ctx.stroke();
	// Draw right border
	ctx.beginPath();
	ctx.moveTo(left+width, top);
	ctx.strokeStyle = right_is_hovered ? hover_color : unhover_color;
	ctx.lineWidth = right_is_hovered ? hover_width : unhover_width;
	ctx.lineTo(left+width, top+height);
	ctx.stroke();
	// Draw bottom border
	ctx.beginPath();
	ctx.moveTo(left+width, top+height);
	ctx.strokeStyle = bottom_is_hovered ? hover_color : unhover_color;
	ctx.lineWidth = bottom_is_hovered ? hover_width : unhover_width;
	ctx.lineTo(left, top+height);
	ctx.stroke();
	// Draw left border
	ctx.beginPath();
	ctx.moveTo(left, top+height);
	ctx.strokeStyle = left_is_hovered ? hover_color : unhover_color;
	ctx.lineWidth = left_is_hovered ? hover_width : unhover_width;
	ctx.lineTo(left, top);
	ctx.stroke();
	
	view.current_rect = {
	    'top':top,
	    'left':left,
	    'width':width,
	    'height':height,
	    'col': col,
	    'num_cols': num_cols
	};
    };
    var drawOncoprintAndOverlayRect = function (view, model, cell_view) {
	if (view.rendering_suppressed) {
	    return;
	}
	drawOncoprint(view, model, cell_view);
	drawOverlayRect(view, model, cell_view);
    };

    OncoprintMinimapView.prototype.moveTrack = function (model, cell_view) {
	drawOncoprintAndOverlayRect(this, model, cell_view);
    }
    OncoprintMinimapView.prototype.addTracks = function (model, cell_view) {
	drawOncoprintAndOverlayRect(this, model, cell_view);
    }
    OncoprintMinimapView.prototype.removeTrack = function (model, cell_view) {
	drawOncoprintAndOverlayRect(this, model, cell_view);
    }
    OncoprintMinimapView.prototype.setHorzZoom = function (model, cell_view) {
	drawOverlayRect(this, model, cell_view);
	this.horizontal_zoom.setSliderValue(model.getHorzZoom());
    }
    OncoprintMinimapView.prototype.setVertZoom = function (model, cell_view) {
	drawOverlayRect(this, model, cell_view);
	this.vertical_zoom.setSliderValue(model.getVertZoom());
    }
    OncoprintMinimapView.prototype.setZoom = function(model, cell_view) {
	drawOverlayRect(this, model, cell_view);
	this.horizontal_zoom.setSliderValue(model.getHorzZoom());
	this.vertical_zoom.setSliderValue(model.getVertZoom());
    }
    OncoprintMinimapView.prototype.setScroll = function (model, cell_view) {
	drawOverlayRect(this, model, cell_view);
    }
    OncoprintMinimapView.prototype.setHorzScroll = function (model, cell_view) {
	drawOverlayRect(this, model, cell_view);
    }
    OncoprintMinimapView.prototype.setVertScroll = function (model, cell_view) {
	drawOverlayRect(this, model, cell_view);
    }
    OncoprintMinimapView.prototype.setViewport = function (model, cell_view) {
	drawOverlayRect(this, model, cell_view);
	this.horizontal_zoom.setSliderValue(model.getHorzZoom());
	this.vertical_zoom.setSliderValue(model.getVertZoom());
    }
    OncoprintMinimapView.prototype.sort = function (model, cell_view) {
	drawOncoprintAndOverlayRect(this, model, cell_view);
    }
    OncoprintMinimapView.prototype.setTrackData = function (model, cell_view) {
	drawOncoprintAndOverlayRect(this, model, cell_view);
    }
    OncoprintMinimapView.prototype.shareRuleSet = function (model, cell_view) {
	drawOncoprintAndOverlayRect(this, model, cell_view);
    }
    OncoprintMinimapView.prototype.setRuleSet = function (model, cell_view) {
	drawOncoprintAndOverlayRect(this, model, cell_view);
    }
    OncoprintMinimapView.prototype.setIdOrder = function (model, cell_view) {
	drawOncoprintAndOverlayRect(this, model, cell_view);
    }
    OncoprintMinimapView.prototype.suppressRendering = function () {
	this.rendering_suppressed = true;
    }
    OncoprintMinimapView.prototype.releaseRendering = function (model, cell_view) {
	this.rendering_suppressed = false;
	drawOncoprintAndOverlayRect(this, model, cell_view);
    }
    OncoprintMinimapView.prototype.hideIds = function (model, cell_view) {
	drawOncoprintAndOverlayRect(this, model, cell_view);
    }

    OncoprintMinimapView.prototype.setWindowPosition = function(x, y) {
	this.$div.css({'top': y, 'left': x});
    }
    
    OncoprintMinimapView.prototype.setWidth = function (w, model, cell_view) {
	this.$canvas[0].width = w;
	this.$overlay_canvas[0].width = w;
	getWebGLContextAndSetUpMatrices(this);
	setUpShaders(this);
	this.overlay_ctx = this.$overlay_canvas[0].getContext("2d");

	drawOncoprintAndOverlayRect(this, model, cell_view);
    }
    return OncoprintMinimapView;
})();

module.exports = OncoprintMinimapView;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);

var OncoprintZoomSlider = (function() {
    var VERTICAL = "v";
    var HORIZONTAL = "h";
    
    var clamp = function(x) {
	return Math.max(Math.min(x, 1), 0);
    };
    
    var initialize = function(component, params) {
	var $ctr = component.$div;
	var icon_size = Math.round(params.btn_size * 0.7);
	var icon_padding = Math.round((params.btn_size - icon_size)/2);
	var $slider_bar = $('<div>').css({'position':'absolute',
					'background-color':'#ffffff',
					'outline': 'solid 1px black'}).appendTo($ctr);
	var $slider = $('<div>').css({'position':'absolute',
				    'background-color':'#ffffff',
				    'border': 'solid 1px black',
				    'border-radius': '3px',
				    'cursor': 'pointer'}).appendTo($ctr);
				
	var $plus_btn = $('<div>').css({'position':'absolute',
					    'min-height': params.btn_size,
					    'min-width': params.btn_size,
					    'background-color':'#ffffff',
					    'border': 'solid 1px black',
					    'border-radius': '3px',
					    'cursor': 'pointer'})
						.appendTo($ctr);
	$('<span>').addClass("icon fa fa-plus").css({'position':'absolute', 
							'top':icon_padding,
							'left':icon_padding,
							'min-width':icon_size,
							'min-height':icon_size})
						.appendTo($plus_btn);
	var $minus_btn = $('<div>').css({'position':'absolute',
					    'min-height': params.btn_size,
					    'min-width': params.btn_size,
					    'background-color':'#ffffff',
					    'border': 'solid 1px black',
					    'border-radius': '3px',
					    'cursor': 'pointer'})
						.appendTo($ctr);
	$('<span>').addClass("icon fa fa-minus").css({'position':'absolute', 
							'top':icon_padding,
							'left':icon_padding,
							'min-width':icon_size,
							'min-height':icon_size})
						.appendTo($minus_btn);
	if (params.vertical) {
	    $slider_bar.css({'min-height': params.height - 2 * params.btn_size,
		'min-width': Math.round(params.btn_size / 5)});
	    $slider.css({'min-height': Math.round(params.btn_size / 2),
		'min-width': params.btn_size});

	    $plus_btn.css({'top': 0, 'left': 0});
	    $minus_btn.css({'top': params.height - params.btn_size, 'left': 0});
	    $slider_bar.css({'top': params.btn_size, 'left': 0.4 * params.btn_size});
	    $slider.css({'left': 0});
	    component.orientation = VERTICAL;
	} else {
	    $slider_bar.css({'min-height': Math.round(params.btn_size / 5),
		'min-width': params.width - 2 * params.btn_size});
	    $slider.css({'min-height': params.btn_size,
		'min-width': Math.round(params.btn_size / 2)});
	    
	    $plus_btn.css({'top': 0, 'left': params.width - params.btn_size});
	    $minus_btn.css({'top': 0, 'left': 0});
	    $slider_bar.css({'top': 0.4*params.btn_size, 'left': params.btn_size});
	    $slider.css({'top': 0});
	    component.orientation = HORIZONTAL;
	}
	
	$plus_btn.click(function() {
	    component.value /= 0.7;
	    params.onChange(component.value);
	});				
	$minus_btn.click(function() {
	    component.value *= 0.7;
	    params.onChange(component.value);
	});
	
	[$slider, $plus_btn, $minus_btn].map(function($btn) { $btn.hover(function() {
	    $(this).css({'background-color':'#cccccc'});
	}, function() {
	    $(this).css({'background-color': '#ffffff'});
	}); });
    
    
    
	component.$slider = $slider;
	component.$plus_btn = $plus_btn;
	component.$minus_btn = $minus_btn;
	
	(function setUpSliderDrag() {
	    var start_mouse;
	    var start_val;
	    var dragging;
	    var handleSliderDrag = function (evt) {
		evt.stopPropagation();
		evt.preventDefault();
		var delta_mouse;
		if (component.orientation === VERTICAL) {
		    delta_mouse = start_mouse - evt.pageY; // vertical zoom, positive is up, but CSS positive is down, so we need to invert
		} else {
		    delta_mouse = evt.pageX - start_mouse;
		}
		var delta_val = delta_mouse / component.slider_bar_size;
		component.setSliderValue(start_val + delta_val);
	    };
	    var stopSliderDrag = function () {
		if (dragging && start_val !== component.value) {
		    component.onChange(component.value);
		}
		dragging = false;
	    };
	    component.$slider.on("mousedown", function (evt) {
		if (component.orientation === VERTICAL) {
		    start_mouse = evt.pageY;
		} else {
		    start_mouse = evt.pageX;
		}
		start_val = component.value;
		dragging = true;
		$(document).on("mousemove", handleSliderDrag);
	    });
	    $(document).on("mouseup click", function () {
		$(document).off("mousemove", handleSliderDrag);
		stopSliderDrag();
	    });
	})()
    };
    
    var setSliderPos = function(component, proportion) {
	var $slider = component.$slider;
	var bounds = getSliderBounds(component);
	if (component.orientation === VERTICAL) {
	    $slider.css('top', bounds.bottom*(1-proportion) + bounds.top*proportion);
	} else if (component.orientation === HORIZONTAL) {
	    $slider.css('left', bounds.left*(1-proportion) + bounds.right*proportion);
	}
    };
    
    var getSliderBounds = function(component) {
	if (component.orientation === VERTICAL) {
	    return {bottom: parseInt(component.$minus_btn.css('top'), 10) - parseInt(component.$slider.css('min-height'), 10),
		    top: parseInt(component.$plus_btn.css('top'), 10) + parseInt(component.$plus_btn.css('min-height'), 10)};
	} else { 
	    return {left: parseInt(component.$minus_btn.css('left'), 10) + parseInt(component.$minus_btn.css('min-width'), 10),
		    right: parseInt(component.$plus_btn.css('left'), 10) - parseInt(component.$slider.css('min-width'), 10)};
	}
    };
    
    var updateSliderPos = function(component) {
	setSliderPos(component, component.value);
    };
    
    function OncoprintZoomSlider($container, params) {
	this.$div = $('<div>').css({'position':'absolute',
				    'top': params.top || 0,
				    'left': params.left || 0}).appendTo($container);
	params = params || {};
	params.btn_size = params.btn_size || 13;
	this.onChange = params.onChange || function() {};
	initialize(this, params);
	this.value = params.init_val || 0.5;
	this.slider_bar_size = (this.orientation === VERTICAL ? params.height : params.width) - 2*params.btn_size;
	updateSliderPos(this);
    }
    
    OncoprintZoomSlider.prototype.setSliderValue = function(proportion, trigger_callback) {
	this.value = clamp(proportion);
	updateSliderPos(this);
    }
    
    
    return OncoprintZoomSlider;
    })();
    
module.exports = OncoprintZoomSlider;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxsaW5lIGZpbGw9Im5vbmUiIHgxPSI2Ljc5MiIgeTE9IjUuNjY3IiB4Mj0iNi43OTIiIHkyPSIxMi4xMjUiLz4NCjxwb2x5Z29uIGZpbGw9IiMwMDAwMDAiIHBvaW50cz0iMCw1IDAsMCA1LDAgIi8+DQo8cG9seWdvbiBmaWxsPSIjMDAwMDAwIiBwb2ludHM9IjE0Ljk5OSwwIDIwLDAgMjAsNSAiLz4NCjxwb2x5Z29uIGZpbGw9IiMwMDAwMDAiIHBvaW50cz0iMjAsMTUgMjAsMjAgMTUsMjAgIi8+DQo8cG9seWdvbiBmaWxsPSIjMDAwMDAwIiBwb2ludHM9IjUsMjAgMCwyMCAwLDE1ICIvPg0KPHJlY3QgeD0iMy43NSIgeT0iNC43MDgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHdpZHRoPSIxMi41IiBoZWlnaHQ9IjEwLjU4MyIvPg0KPC9zdmc+DQo="

/***/ })
/******/ ]);