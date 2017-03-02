/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.1.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-09-22T22:30Z
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
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

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
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.1.1",

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

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
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

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
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

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

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
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
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
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
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
			return elem.disabled === true && ("form" in elem || "label" in elem);
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

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
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

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
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
			return false;
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
			return false;
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
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

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
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
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
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
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
	} catch ( value ) {

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




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

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

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
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
					( key.match( rnothtmlwhite ) || [] );
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

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
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
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
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

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
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
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
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
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
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
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
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
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
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
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
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

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

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
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

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
	for ( ; i < 4; i += 2 - includeWidth ) {
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

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

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

			for ( ; index < length; index++ ) {
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
				for ( ; index < length; index++ ) {
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

	for ( ; index < length; index++ ) {
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
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
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
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
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

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

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

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
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
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

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




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


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
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
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
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
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
				classNames = value.match( rnothtmlwhite ) || [];

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
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

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

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
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
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

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

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
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

			if ( val == null ) {
				return null;
			}

			if ( jQuery.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
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
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

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
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

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

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
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
		selector = stripAndCollapse( url.slice( off ) );
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
} );


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Bootstrap v3.1.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap requires jQuery");+function (a) {
  "use strict";
  function b() {
    var a = document.createElement("bootstrap"),
        b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var c in b) {
      if (void 0 !== a.style[c]) return { end: b[c] };
    }return !1;
  }a.fn.emulateTransitionEnd = function (b) {
    var c = !1,
        d = this;a(this).one(a.support.transition.end, function () {
      c = !0;
    });var e = function e() {
      c || a(d).trigger(a.support.transition.end);
    };return setTimeout(e, b), this;
  }, a(function () {
    a.support.transition = b();
  });
}(jQuery), +function (a) {
  "use strict";
  var b = '[data-dismiss="alert"]',
      c = function c(_c) {
    a(_c).on("click", b, this.close);
  };c.prototype.close = function (b) {
    function c() {
      f.trigger("closed.bs.alert").remove();
    }var d = a(this),
        e = d.attr("data-target");e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));var f = a(e);b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c());
  };var d = a.fn.alert;a.fn.alert = function (b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.alert");e || d.data("bs.alert", e = new c(this)), "string" == typeof b && e[b].call(d);
    });
  }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function () {
    return a.fn.alert = d, this;
  }, a(document).on("click.bs.alert.data-api", b, c.prototype.close);
}(jQuery), +function (a) {
  "use strict";
  var b = function b(c, d) {
    this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.isLoading = !1;
  };b.DEFAULTS = { loadingText: "loading..." }, b.prototype.setState = function (b) {
    var c = "disabled",
        d = this.$element,
        e = d.is("input") ? "val" : "html",
        f = d.data();b += "Text", f.resetText || d.data("resetText", d[e]()), d[e](f[b] || this.options[b]), setTimeout(a.proxy(function () {
      "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c));
    }, this), 0);
  }, b.prototype.toggle = function () {
    var a = !0,
        b = this.$element.closest('[data-toggle="buttons"]');if (b.length) {
      var c = this.$element.find("input");"radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change");
    }a && this.$element.toggleClass("active");
  };var c = a.fn.button;a.fn.button = function (c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.button"),
          f = "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && c;e || d.data("bs.button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c);
    });
  }, a.fn.button.Constructor = b, a.fn.button.noConflict = function () {
    return a.fn.button = c, this;
  }, a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function (b) {
    var c = a(b.target);c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle"), b.preventDefault();
  });
}(jQuery), +function (a) {
  "use strict";
  var b = function b(_b, c) {
    this.$element = a(_b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this));
  };b.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0 }, b.prototype.cycle = function (b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
  }, b.prototype.getActiveIndex = function () {
    return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active);
  }, b.prototype.to = function (b) {
    var c = this,
        d = this.getActiveIndex();return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
      c.to(b);
    }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]));
  }, b.prototype.pause = function (b) {
    return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
  }, b.prototype.next = function () {
    return this.sliding ? void 0 : this.slide("next");
  }, b.prototype.prev = function () {
    return this.sliding ? void 0 : this.slide("prev");
  }, b.prototype.slide = function (b, c) {
    var d = this.$element.find(".item.active"),
        e = c || d[b](),
        f = this.interval,
        g = "next" == b ? "left" : "right",
        h = "next" == b ? "first" : "last",
        i = this;if (!e.length) {
      if (!this.options.wrap) return;e = this.$element.find(".item")[h]();
    }if (e.hasClass("active")) return this.sliding = !1;var j = a.Event("slide.bs.carousel", { relatedTarget: e[0], direction: g });return this.$element.trigger(j), j.isDefaultPrevented() ? void 0 : (this.sliding = !0, f && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function () {
      var b = a(i.$indicators.children()[i.getActiveIndex()]);b && b.addClass("active");
    })), a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end, function () {
      e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function () {
        i.$element.trigger("slid.bs.carousel");
      }, 0);
    }).emulateTransitionEnd(1e3 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), f && this.cycle(), this);
  };var c = a.fn.carousel;a.fn.carousel = function (c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, b.DEFAULTS, d.data(), "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && c),
          g = "string" == typeof c ? c : f.slide;e || d.data("bs.carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle();
    });
  }, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function () {
    return a.fn.carousel = c, this;
  }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (b) {
    var c,
        d = a(this),
        e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")),
        f = a.extend({}, e.data(), d.data()),
        g = d.attr("data-slide-to");g && (f.interval = !1), e.carousel(f), (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g), b.preventDefault();
  }), a(window).on("load", function () {
    a('[data-ride="carousel"]').each(function () {
      var b = a(this);b.carousel(b.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";
  var b = function b(c, d) {
    this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle();
  };b.DEFAULTS = { toggle: !0 }, b.prototype.dimension = function () {
    var a = this.$element.hasClass("width");return a ? "width" : "height";
  }, b.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var b = a.Event("show.bs.collapse");if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.$parent && this.$parent.find("> .panel > .in");if (c && c.length) {
          var d = c.data("bs.collapse");if (d && d.transitioning) return;c.collapse("hide"), d || c.data("bs.collapse", null);
        }var e = this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;var f = function f() {
          this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
        };if (!a.support.transition) return f.call(this);var g = a.camelCase(["scroll", e].join("-"));this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g]);
      }
    }
  }, b.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b = a.Event("hide.bs.collapse");if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;var d = function d() {
          this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse");
        };return a.support.transition ? void this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this);
      }
    }
  }, b.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  };var c = a.fn.collapse;a.fn.collapse = function (c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.collapse"),
          f = a.extend({}, b.DEFAULTS, d.data(), "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && c);!e && f.toggle && "show" == c && (c = !c), e || d.data("bs.collapse", e = new b(this, f)), "string" == typeof c && e[c]();
    });
  }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function () {
    return a.fn.collapse = c, this;
  }, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function (b) {
    var c,
        d = a(this),
        e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
        f = a(e),
        g = f.data("bs.collapse"),
        h = g ? "toggle" : d.data(),
        i = d.attr("data-parent"),
        j = i && a(i);g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), f.collapse(h);
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    a(d).remove(), a(e).each(function () {
      var d = c(a(this)),
          e = { relatedTarget: this };d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown", e)), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", e));
    });
  }function c(b) {
    var c = b.attr("data-target");c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));var d = c && a(c);return d && d.length ? d : b.parent();
  }var d = ".dropdown-backdrop",
      e = "[data-toggle=dropdown]",
      f = function f(b) {
    a(b).on("click.bs.dropdown", this.toggle);
  };f.prototype.toggle = function (d) {
    var e = a(this);if (!e.is(".disabled, :disabled")) {
      var f = c(e),
          g = f.hasClass("open");if (b(), !g) {
        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);var h = { relatedTarget: this };if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;f.toggleClass("open").trigger("shown.bs.dropdown", h), e.focus();
      }return !1;
    }
  }, f.prototype.keydown = function (b) {
    if (/(38|40|27)/.test(b.keyCode)) {
      var d = a(this);if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
        var f = c(d),
            g = f.hasClass("open");if (!g || g && 27 == b.keyCode) return 27 == b.which && f.find(e).focus(), d.click();var h = " li:not(.divider):visible a",
            i = f.find("[role=menu]" + h + ", [role=listbox]" + h);if (i.length) {
          var j = i.index(i.filter(":focus"));38 == b.keyCode && j > 0 && j--, 40 == b.keyCode && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).focus();
        }
      }
    }
  };var g = a.fn.dropdown;a.fn.dropdown = function (b) {
    return this.each(function () {
      var c = a(this),
          d = c.data("bs.dropdown");d || c.data("bs.dropdown", d = new f(this)), "string" == typeof b && d[b].call(c);
    });
  }, a.fn.dropdown.Constructor = f, a.fn.dropdown.noConflict = function () {
    return a.fn.dropdown = g, this;
  }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
    a.stopPropagation();
  }).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu], [role=listbox]", f.prototype.keydown);
}(jQuery), +function (a) {
  "use strict";
  var b = function b(_b2, c) {
    this.options = c, this.$element = a(_b2), this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
      this.$element.trigger("loaded.bs.modal");
    }, this));
  };b.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, b.prototype.toggle = function (a) {
    return this[this.isShown ? "hide" : "show"](a);
  }, b.prototype.show = function (b) {
    var c = this,
        d = a.Event("show.bs.modal", { relatedTarget: b });this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function () {
      var d = a.support.transition && c.$element.hasClass("fade");c.$element.parent().length || c.$element.appendTo(document.body), c.$element.show().scrollTop(0), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();var e = a.Event("shown.bs.modal", { relatedTarget: b });d ? c.$element.find(".modal-dialog").one(a.support.transition.end, function () {
        c.$element.focus().trigger(e);
      }).emulateTransitionEnd(300) : c.$element.focus().trigger(e);
    }));
  }, b.prototype.hide = function (b) {
    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal());
  }, b.prototype.enforceFocus = function () {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
      this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus();
    }, this));
  }, b.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function (a) {
      27 == a.which && this.hide();
    }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal");
  }, b.prototype.hideModal = function () {
    var a = this;this.$element.hide(), this.backdrop(function () {
      a.removeBackdrop(), a.$element.trigger("hidden.bs.modal");
    });
  }, b.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  }, b.prototype.backdrop = function (b) {
    var c = this.$element.hasClass("fade") ? "fade" : "";if (this.isShown && this.options.backdrop) {
      var d = a.support.transition && c;if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
        a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this));
      }, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b();
    } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b();
  };var c = a.fn.modal;a.fn.modal = function (c, d) {
    return this.each(function () {
      var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, b.DEFAULTS, e.data(), "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && c);f || e.data("bs.modal", f = new b(this, g)), "string" == typeof c ? f[c](d) : g.show && f.show(d);
    });
  }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function () {
    return a.fn.modal = c, this;
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (b) {
    var c = a(this),
        d = c.attr("href"),
        e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
        f = e.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(d) && d }, e.data(), c.data());c.is("a") && b.preventDefault(), e.modal(f, this).one("hide", function () {
      c.is(":visible") && c.focus();
    });
  }), a(document).on("show.bs.modal", ".modal", function () {
    a(document.body).addClass("modal-open");
  }).on("hidden.bs.modal", ".modal", function () {
    a(document.body).removeClass("modal-open");
  });
}(jQuery), +function (a) {
  "use strict";
  var b = function b(a, _b3) {
    this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, _b3);
  };b.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1 }, b.prototype.init = function (b, c, d) {
    this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
      var g = e[f];if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter" : "focusin",
            i = "hover" == g ? "mouseleave" : "focusout";this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
      }
    }this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
  }, b.prototype.getDefaults = function () {
    return b.DEFAULTS;
  }, b.prototype.getOptions = function (b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b;
  }, b.prototype.getDelegateOptions = function () {
    var b = {},
        c = this.getDefaults();return this._options && a.each(this._options, function (a, d) {
      c[a] != d && (b[a] = d);
    }), b;
  }, b.prototype.enter = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);return clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
      "in" == c.hoverState && c.show();
    }, c.options.delay.show)) : c.show();
  }, b.prototype.leave = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
      "out" == c.hoverState && c.hide();
    }, c.options.delay.hide)) : c.hide();
  }, b.prototype.show = function () {
    var b = a.Event("show.bs." + this.type);if (this.hasContent() && this.enabled) {
      if (this.$element.trigger(b), b.isDefaultPrevented()) return;var c = this,
          d = this.tip();this.setContent(), this.options.animation && d.addClass("fade");var e = "function" == typeof this.options.placement ? this.options.placement.call(this, d[0], this.$element[0]) : this.options.placement,
          f = /\s?auto?\s?/i,
          g = f.test(e);g && (e = e.replace(f, "") || "top"), d.detach().css({ top: 0, left: 0, display: "block" }).addClass(e), this.options.container ? d.appendTo(this.options.container) : d.insertAfter(this.$element);var h = this.getPosition(),
          i = d[0].offsetWidth,
          j = d[0].offsetHeight;if (g) {
        var k = this.$element.parent(),
            l = e,
            m = document.documentElement.scrollTop || document.body.scrollTop,
            n = "body" == this.options.container ? window.innerWidth : k.outerWidth(),
            o = "body" == this.options.container ? window.innerHeight : k.outerHeight(),
            p = "body" == this.options.container ? 0 : k.offset().left;e = "bottom" == e && h.top + h.height + j - m > o ? "top" : "top" == e && h.top - m - j < 0 ? "bottom" : "right" == e && h.right + i > n ? "left" : "left" == e && h.left - i < p ? "right" : e, d.removeClass(l).addClass(e);
      }var q = this.getCalculatedOffset(e, h, i, j);this.applyPlacement(q, e), this.hoverState = null;var r = function r() {
        c.$element.trigger("shown.bs." + c.type);
      };a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, r).emulateTransitionEnd(150) : r();
    }
  }, b.prototype.applyPlacement = function (b, c) {
    var d,
        e = this.tip(),
        f = e[0].offsetWidth,
        g = e[0].offsetHeight,
        h = parseInt(e.css("margin-top"), 10),
        i = parseInt(e.css("margin-left"), 10);isNaN(h) && (h = 0), isNaN(i) && (i = 0), b.top = b.top + h, b.left = b.left + i, a.offset.setOffset(e[0], a.extend({ using: function using(a) {
        e.css({ top: Math.round(a.top), left: Math.round(a.left) });
      } }, b), 0), e.addClass("in");var j = e[0].offsetWidth,
        k = e[0].offsetHeight;if ("top" == c && k != g && (d = !0, b.top = b.top + g - k), /bottom|top/.test(c)) {
      var l = 0;b.left < 0 && (l = -2 * b.left, b.left = 0, e.offset(b), j = e[0].offsetWidth, k = e[0].offsetHeight), this.replaceArrow(l - f + j, j, "left");
    } else this.replaceArrow(k - g, k, "top");d && e.offset(b);
  }, b.prototype.replaceArrow = function (a, b, c) {
    this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "");
  }, b.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle();a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
  }, b.prototype.hide = function () {
    function b() {
      "in" != c.hoverState && d.detach(), c.$element.trigger("hidden.bs." + c.type);
    }var c = this,
        d = this.tip(),
        e = a.Event("hide.bs." + this.type);return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), this.hoverState = null, this);
  }, b.prototype.fixTitle = function () {
    var a = this.$element;(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
  }, b.prototype.hasContent = function () {
    return this.getTitle();
  }, b.prototype.getPosition = function () {
    var b = this.$element[0];return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : { width: b.offsetWidth, height: b.offsetHeight }, this.$element.offset());
  }, b.prototype.getCalculatedOffset = function (a, b, c, d) {
    return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
  }, b.prototype.getTitle = function () {
    var a,
        b = this.$element,
        c = this.options;return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
  }, b.prototype.tip = function () {
    return this.$tip = this.$tip || a(this.options.template);
  }, b.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  }, b.prototype.validate = function () {
    this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null);
  }, b.prototype.enable = function () {
    this.enabled = !0;
  }, b.prototype.disable = function () {
    this.enabled = !1;
  }, b.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  }, b.prototype.toggle = function (b) {
    var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
  }, b.prototype.destroy = function () {
    clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type);
  };var c = a.fn.tooltip;a.fn.tooltip = function (c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && c;(e || "destroy" != c) && (e || d.data("bs.tooltip", e = new b(this, f)), "string" == typeof c && e[c]());
    });
  }, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function () {
    return a.fn.tooltip = c, this;
  };
}(jQuery), +function (a) {
  "use strict";
  var b = function b(a, _b4) {
    this.init("popover", a, _b4);
  };if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, b.prototype.getDefaults = function () {
    return b.DEFAULTS;
  }, b.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle(),
        c = this.getContent();a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
  }, b.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  }, b.prototype.getContent = function () {
    var a = this.$element,
        b = this.options;return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
  }, b.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  }, b.prototype.tip = function () {
    return this.$tip || (this.$tip = a(this.options.template)), this.$tip;
  };var c = a.fn.popover;a.fn.popover = function (c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && c;(e || "destroy" != c) && (e || d.data("bs.popover", e = new b(this, f)), "string" == typeof c && e[c]());
    });
  }, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function () {
    return a.fn.popover = c, this;
  };
}(jQuery), +function (a) {
  "use strict";
  function b(c, d) {
    var e,
        f = a.proxy(this.process, this);this.$element = a(a(c).is("body") ? window : c), this.$body = a("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), this.process();
  }b.DEFAULTS = { offset: 10 }, b.prototype.refresh = function () {
    var b = this.$element[0] == window ? "offset" : "position";this.offsets = a([]), this.targets = a([]);{
      var c = this;this.$body.find(this.selector).map(function () {
        var d = a(this),
            e = d.data("target") || d.attr("href"),
            f = /^#./.test(e) && a(e);return f && f.length && f.is(":visible") && [[f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]] || null;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).each(function () {
        c.offsets.push(this[0]), c.targets.push(this[1]);
      });
    }
  }, b.prototype.process = function () {
    var a,
        b = this.$scrollElement.scrollTop() + this.options.offset,
        c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
        d = c - this.$scrollElement.height(),
        e = this.offsets,
        f = this.targets,
        g = this.activeTarget;if (b >= d) return g != (a = f.last()[0]) && this.activate(a);if (g && b <= e[0]) return g != (a = f[0]) && this.activate(a);for (a = e.length; a--;) {
      g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a]);
    }
  }, b.prototype.activate = function (b) {
    this.activeTarget = b, a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
        d = a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
  };var c = a.fn.scrollspy;a.fn.scrollspy = function (c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && c;e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
    });
  }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
    return a.fn.scrollspy = c, this;
  }, a(window).on("load", function () {
    a('[data-spy="scroll"]').each(function () {
      var b = a(this);b.scrollspy(b.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";
  var b = function b(_b5) {
    this.element = a(_b5);
  };b.prototype.show = function () {
    var b = this.element,
        c = b.closest("ul:not(.dropdown-menu)"),
        d = b.data("target");if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
      var e = c.find(".active:last a")[0],
          f = a.Event("show.bs.tab", { relatedTarget: e });if (b.trigger(f), !f.isDefaultPrevented()) {
        var g = a(d);this.activate(b.parent("li"), c), this.activate(g, g.parent(), function () {
          b.trigger({ type: "shown.bs.tab", relatedTarget: e });
        });
      }
    }
  }, b.prototype.activate = function (b, c, d) {
    function e() {
      f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d();
    }var f = c.find("> .active"),
        g = d && a.support.transition && f.hasClass("fade");g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), f.removeClass("in");
  };var c = a.fn.tab;a.fn.tab = function (c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tab");e || d.data("bs.tab", e = new b(this)), "string" == typeof c && e[c]();
    });
  }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function () {
    return a.fn.tab = c, this;
  }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (b) {
    b.preventDefault(), a(this).tab("show");
  });
}(jQuery), +function (a) {
  "use strict";
  var b = function b(c, d) {
    this.options = a.extend({}, b.DEFAULTS, d), this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(c), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition();
  };b.RESET = "affix affix-top affix-bottom", b.DEFAULTS = { offset: 0 }, b.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a = this.$window.scrollTop(),
        c = this.$element.offset();return this.pinnedOffset = c.top - a;
  }, b.prototype.checkPositionWithEventLoop = function () {
    setTimeout(a.proxy(this.checkPosition, this), 1);
  }, b.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var c = a(document).height(),
          d = this.$window.scrollTop(),
          e = this.$element.offset(),
          f = this.options.offset,
          g = f.top,
          h = f.bottom;"top" == this.affixed && (e.top += d), "object" != (typeof f === "undefined" ? "undefined" : _typeof(f)) && (h = g = f), "function" == typeof g && (g = f.top(this.$element)), "function" == typeof h && (h = f.bottom(this.$element));var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= c - h ? "bottom" : null != g && g >= d ? "top" : !1;if (this.affixed !== i) {
        this.unpin && this.$element.css("top", "");var j = "affix" + (i ? "-" + i : ""),
            k = a.Event(j + ".bs.affix");this.$element.trigger(k), k.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix", "affixed"))), "bottom" == i && this.$element.offset({ top: c - h - this.$element.height() }));
      }
    }
  };var c = a.fn.affix;a.fn.affix = function (c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && c;e || d.data("bs.affix", e = new b(this, f)), "string" == typeof c && e[c]();
    });
  }, a.fn.affix.Constructor = b, a.fn.affix.noConflict = function () {
    return a.fn.affix = c, this;
  }, a(window).on("load", function () {
    a('[data-spy="affix"]').each(function () {
      var b = a(this),
          c = b.data();c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c);
    });
  });
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 Highstock JS v1.3.9 (2014-01-15)

 (c) 2009-2014 Torstein Honsi

 License: www.highcharts.com/license
*/
(function () {
  function u(a, b) {
    var c;a || (a = {});for (c in b) {
      a[c] = b[c];
    }return a;
  }function w() {
    var a,
        b = arguments,
        c,
        d = {},
        e = function e(a, b) {
      var c, d;(typeof a === "undefined" ? "undefined" : _typeof(a)) !== "object" && (a = {});for (d in b) {
        b.hasOwnProperty(d) && (c = b[d], a[d] = c && (typeof c === "undefined" ? "undefined" : _typeof(c)) === "object" && Object.prototype.toString.call(c) !== "[object Array]" && typeof c.nodeType !== "number" ? e(a[d] || {}, c) : b[d]);
      }return a;
    };b[0] === !0 && (d = b[1], b = Array.prototype.slice.call(b, 2));c = b.length;for (a = 0; a < c; a++) {
      d = e(d, b[a]);
    }return d;
  }function gb() {
    for (var a = 0, b = arguments, c = b.length, d = {}; a < c; a++) {
      d[b[a++]] = b[a];
    }return d;
  }function E(a, b) {
    return parseInt(a, b || 10);
  }function ma(a) {
    return typeof a === "string";
  }function aa(a) {
    return (typeof a === "undefined" ? "undefined" : _typeof(a)) === "object";
  }function Pa(a) {
    return Object.prototype.toString.call(a) === "[object Array]";
  }function ua(a) {
    return typeof a === "number";
  }function Ea(a) {
    return T.log(a) / T.LN10;
  }function na(a) {
    return T.pow(10, a);
  }function oa(a, b) {
    for (var c = a.length; c--;) {
      if (a[c] === b) {
        a.splice(c, 1);break;
      }
    }
  }function t(a) {
    return a !== r && a !== null;
  }function H(a, b, c) {
    var d, e;if (ma(b)) t(c) ? a.setAttribute(b, c) : a && a.getAttribute && (e = a.getAttribute(b));else if (t(b) && aa(b)) for (d in b) {
      a.setAttribute(d, b[d]);
    }return e;
  }function ja(a) {
    return Pa(a) ? a : [a];
  }function o() {
    var a = arguments,
        b,
        c,
        d = a.length;for (b = 0; b < d; b++) {
      if (c = a[b], typeof c !== "undefined" && c !== null) return c;
    }
  }function z(a, b) {
    if (Fa && b && b.opacity !== r) b.filter = "alpha(opacity=" + b.opacity * 100 + ")";u(a.style, b);
  }function Z(a, b, c, d, e) {
    a = F.createElement(a);b && u(a, b);e && z(a, { padding: 0, border: ba, margin: 0 });c && z(a, c);d && d.appendChild(a);return a;
  }function ea(a, b) {
    var c = function c() {};c.prototype = new a();u(c.prototype, b);return c;
  }function Ga(a, b, c, d) {
    var e = L.lang,
        a = +a || 0,
        f = b === -1 ? (a.toString().split(".")[1] || "").length : isNaN(b = O(b)) ? 2 : b,
        b = c === void 0 ? e.decimalPoint : c,
        d = d === void 0 ? e.thousandsSep : d,
        e = a < 0 ? "-" : "",
        c = String(E(a = O(a).toFixed(f))),
        g = c.length > 3 ? c.length % 3 : 0;return e + (g ? c.substr(0, g) + d : "") + c.substr(g).replace(/(\d{3})(?=\d)/g, "$1" + d) + (f ? b + O(a - c).toFixed(f).slice(2) : "");
  }function Qa(a, b) {
    return Array((b || 2) + 1 - String(a).length).join(0) + a;
  }function U(a, b, c) {
    var d = a[b];
    a[b] = function () {
      var a = Array.prototype.slice.call(arguments);a.unshift(d);return c.apply(this, a);
    };
  }function Ha(a, b) {
    for (var c = "{", d = !1, e, f, g, h, i, j = []; (c = a.indexOf(c)) !== -1;) {
      e = a.slice(0, c);if (d) {
        f = e.split(":");g = f.shift().split(".");i = g.length;e = b;for (h = 0; h < i; h++) {
          e = e[g[h]];
        }if (f.length) f = f.join(":"), g = /\.([0-9])/, h = L.lang, i = void 0, /f$/.test(f) ? (i = (i = f.match(g)) ? i[1] : -1, e = Ga(e, i, h.decimalPoint, f.indexOf(",") > -1 ? h.thousandsSep : "")) : e = ra(f, e);
      }j.push(e);a = a.slice(c + 1);c = (d = !d) ? "}" : "{";
    }j.push(a);return j.join("");
  }
  function tb(a) {
    return T.pow(10, Q(T.log(a) / T.LN10));
  }function ub(a, b, c, d) {
    var e,
        c = o(c, 1);e = a / c;b || (b = [1, 2, 2.5, 5, 10], d && d.allowDecimals === !1 && (c === 1 ? b = [1, 2, 5, 10] : c <= 0.1 && (b = [1 / c])));for (d = 0; d < b.length; d++) {
      if (a = b[d], e <= (b[d] + (b[d + 1] || b[d])) / 2) break;
    }a *= c;return a;
  }function Kb() {
    this.symbol = this.color = 0;
  }function vb(a, b) {
    var c = a.length,
        d,
        e;for (e = 0; e < c; e++) {
      a[e].ss_i = e;
    }a.sort(function (a, c) {
      d = b(a, c);return d === 0 ? a.ss_i - c.ss_i : d;
    });for (e = 0; e < c; e++) {
      delete a[e].ss_i;
    }
  }function Ra(a) {
    for (var b = a.length, c = a[0]; b--;) {
      a[b] < c && (c = a[b]);
    }return c;
  }function va(a) {
    for (var b = a.length, c = a[0]; b--;) {
      a[b] > c && (c = a[b]);
    }return c;
  }function Ia(a, b) {
    for (var c in a) {
      a[c] && a[c] !== b && a[c].destroy && a[c].destroy(), delete a[c];
    }
  }function Sa(a) {
    hb || (hb = Z(Ta));a && hb.appendChild(a);hb.innerHTML = "";
  }function pa(a, b) {
    var c = "Highcharts error #" + a + ": www.highcharts.com/errors/" + a;if (b) throw c;else V.console && console.log(c);
  }function ga(a) {
    return parseFloat(a.toPrecision(14));
  }function Xa(a, b) {
    wa = o(a, b.animation);
  }function Lb() {
    var a = L.global.useUTC,
        b = a ? "getUTC" : "get",
        c = a ? "setUTC" : "set";Ja = (a && L.global.timezoneOffset || 0) * 6E4;ib = a ? Date.UTC : function (a, b, c, g, h, i) {
      return new Date(a, b, o(c, 1), o(g, 0), o(h, 0), o(i, 0)).getTime();
    };wb = b + "Minutes";xb = b + "Hours";yb = b + "Day";Ua = b + "Date";jb = b + "Month";kb = b + "FullYear";Mb = c + "Minutes";Nb = c + "Hours";zb = c + "Date";Ob = c + "Month";Pb = c + "FullYear";
  }function xa() {}function Ya(a, b, c, d) {
    this.axis = a;this.pos = b;this.type = c || "";this.isNew = !0;!c && !d && this.addLabel();
  }function Qb(a, b, c, d, e, f) {
    var g = a.chart.inverted;this.axis = a;this.isNegative = c;this.options = b;this.x = d;this.total = null;this.points = {};this.stack = e;this.percent = f === "percent";this.alignOptions = { align: b.align || (g ? c ? "left" : "right" : "center"), verticalAlign: b.verticalAlign || (g ? "middle" : c ? "bottom" : "top"), y: o(b.y, g ? 4 : c ? 14 : -6), x: o(b.x, g ? c ? -6 : 6 : 0) };this.textAlign = b.textAlign || (g ? c ? "right" : "left" : "center");
  }function W() {
    this.init.apply(this, arguments);
  }function Ab() {
    this.init.apply(this, arguments);
  }function ya() {
    this.init.apply(this, arguments);
  }function Bb(a) {
    var b = a.options,
        c = b.navigator,
        d = c.enabled,
        b = b.scrollbar,
        e = b.enabled,
        f = d ? c.height : 0,
        g = e ? b.height : 0;this.handles = [];this.scrollbarButtons = [];this.elementsToDestroy = [];this.chart = a;this.setBaseSeries();this.height = f;this.scrollbarHeight = g;this.scrollbarEnabled = e;this.navigatorEnabled = d;this.navigatorOptions = c;this.scrollbarOptions = b;this.outlineHeight = f + g;this.init();
  }function Cb(a) {
    this.init(a);
  }var r,
      F = document,
      V = window,
      T = Math,
      v = T.round,
      Q = T.floor,
      Va = T.ceil,
      s = T.max,
      y = T.min,
      O = T.abs,
      ca = T.cos,
      ha = T.sin,
      Ka = T.PI,
      La = Ka * 2 / 360,
      za = navigator.userAgent,
      Rb = V.opera,
      Fa = /msie/i.test(za) && !Rb,
      lb = F.documentMode === 8,
      mb = /AppleWebKit/.test(za),
      bb = /Firefox/.test(za),
      cb = /(Mobile|Android|Windows Phone)/.test(za),
      Ma = "http://www.w3.org/2000/svg",
      da = !!F.createElementNS && !!F.createElementNS(Ma, "svg").createSVGRect,
      Yb = bb && parseInt(za.split("Firefox/")[1], 10) < 4,
      ka = !da && !Fa && !!F.createElement("canvas").getContext,
      Za,
      db = F.documentElement.ontouchstart !== r,
      Sb = {},
      Db = 0,
      hb,
      L,
      ra,
      wa,
      Eb,
      B,
      la = function la() {},
      Wa = [],
      Ta = "div",
      ba = "none",
      Zb = /^[0-9]+$/,
      Tb = "rgba(192,192,192," + (da ? 1.0E-4 : 0.002) + ")",
      Ub = "stroke-width",
      ib,
      Ja,
      wb,
      xb,
      yb,
      Ua,
      jb,
      kb,
      Mb,
      Nb,
      zb,
      Ob,
      Pb,
      D = {};V.Highcharts = V.Highcharts ? pa(16, !0) : {};ra = function ra(a, b, c) {
    if (!t(b) || isNaN(b)) return "Invalid date";var a = o(a, "%Y-%m-%d %H:%M:%S"),
        d = new Date(b - Ja),
        e,
        f = d[xb](),
        g = d[yb](),
        h = d[Ua](),
        i = d[jb](),
        j = d[kb](),
        k = L.lang,
        l = k.weekdays,
        d = u({ a: l[g].substr(0, 3), A: l[g], d: Qa(h), e: h, b: k.shortMonths[i], B: k.months[i], m: Qa(i + 1), y: j.toString().substr(2, 2), Y: j, H: Qa(f), I: Qa(f % 12 || 12), l: f % 12 || 12, M: Qa(d[wb]()), p: f < 12 ? "AM" : "PM", P: f < 12 ? "am" : "pm", S: Qa(d.getSeconds()),
      L: Qa(v(b % 1E3), 3) }, Highcharts.dateFormats);for (e in d) {
      for (; a.indexOf("%" + e) !== -1;) {
        a = a.replace("%" + e, typeof d[e] === "function" ? d[e](b) : d[e]);
      }
    }return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a;
  };Kb.prototype = { wrapColor: function wrapColor(a) {
      if (this.color >= a) this.color = 0;
    }, wrapSymbol: function wrapSymbol(a) {
      if (this.symbol >= a) this.symbol = 0;
    } };B = gb("millisecond", 1, "second", 1E3, "minute", 6E4, "hour", 36E5, "day", 864E5, "week", 6048E5, "month", 26784E5, "year", 31556952E3);Eb = { init: function init(a, b, c) {
      var b = b || "",
          d = a.shift,
          e = b.indexOf("C") > -1,
          f = e ? 7 : 3,
          g,
          b = b.split(" "),
          c = [].concat(c),
          h,
          i,
          j = function j(a) {
        for (g = a.length; g--;) {
          a[g] === "M" && a.splice(g + 1, 0, a[g + 1], a[g + 2], a[g + 1], a[g + 2]);
        }
      };e && (j(b), j(c));a.isArea && (h = b.splice(b.length - 6, 6), i = c.splice(c.length - 6, 6));if (d <= c.length / f && b.length === c.length) for (; d--;) {
        c = [].concat(c).splice(0, f).concat(c);
      }a.shift = 0;if (b.length) for (a = c.length; b.length < a;) {
        d = [].concat(b).splice(b.length - f, f), e && (d[f - 6] = d[f - 2], d[f - 5] = d[f - 1]), b = b.concat(d);
      }h && (b = b.concat(h), c = c.concat(i));return [b, c];
    }, step: function step(a, b, c, d) {
      var e = [],
          f = a.length;if (c === 1) e = d;else if (f === b.length && c < 1) for (; f--;) {
        d = parseFloat(a[f]), e[f] = isNaN(d) ? a[f] : c * parseFloat(b[f] - d) + d;
      } else e = b;return e;
    } };(function (a) {
    V.HighchartsAdapter = V.HighchartsAdapter || a && { init: function init(b) {
        var c = a.fx,
            d = c.step,
            e,
            f = a.Tween,
            g = f && f.propHooks;e = a.cssHooks.opacity;a.extend(a.easing, { easeOutQuad: function easeOutQuad(a, b, c, d, e) {
            return -d * (b /= e) * (b - 2) + c;
          } });a.each(["cur", "_default", "width", "height", "opacity"], function (a, b) {
          var e = d,
              k;b === "cur" ? e = c.prototype : b === "_default" && f && (e = g[b], b = "set");
          (k = e[b]) && (e[b] = function (c) {
            var d,
                c = a ? c : this;if (c.prop !== "align") return d = c.elem, d.attr ? d.attr(c.prop, b === "cur" ? r : c.now) : k.apply(this, arguments);
          });
        });U(e, "get", function (a, b, c) {
          return b.attr ? b.opacity || 0 : a.call(this, b, c);
        });e = function e(a) {
          var c = a.elem,
              d;if (!a.started) d = b.init(c, c.d, c.toD), a.start = d[0], a.end = d[1], a.started = !0;c.attr("d", b.step(a.start, a.end, a.pos, c.toD));
        };f ? g.d = { set: e } : d.d = e;this.each = Array.prototype.forEach ? function (a, b) {
          return Array.prototype.forEach.call(a, b);
        } : function (a, b) {
          for (var c = 0, d = a.length; c < d; c++) {
            if (b.call(a[c], a[c], c, a) === !1) return c;
          }
        };a.fn.highcharts = function () {
          var a = "Chart",
              b = arguments,
              c,
              d;ma(b[0]) && (a = b[0], b = Array.prototype.slice.call(b, 1));c = b[0];if (c !== r) c.chart = c.chart || {}, c.chart.renderTo = this[0], new Highcharts[a](c, b[1]), d = this;c === r && (d = Wa[H(this[0], "data-highcharts-chart")]);return d;
        };
      }, getScript: a.getScript, inArray: a.inArray, adapterRun: function adapterRun(b, c) {
        return a(b)[c]();
      }, grep: a.grep, map: function map(a, c) {
        for (var d = [], e = 0, f = a.length; e < f; e++) {
          d[e] = c.call(a[e], a[e], e, a);
        }return d;
      }, offset: function offset(b) {
        return a(b).offset();
      }, addEvent: function addEvent(b, c, d) {
        a(b).bind(c, d);
      }, removeEvent: function removeEvent(b, c, d) {
        var e = F.removeEventListener ? "removeEventListener" : "detachEvent";F[e] && b && !b[e] && (b[e] = function () {});a(b).unbind(c, d);
      }, fireEvent: function fireEvent(b, c, d, e) {
        var f = a.Event(c),
            g = "detached" + c,
            h;!Fa && d && (delete d.layerX, delete d.layerY);u(f, d);b[c] && (b[g] = b[c], b[c] = null);a.each(["preventDefault", "stopPropagation"], function (a, b) {
          var c = f[b];f[b] = function () {
            try {
              c.call(f);
            } catch (a) {
              b === "preventDefault" && (h = !0);
            }
          };
        });a(b).trigger(f);b[g] && (b[c] = b[g], b[g] = null);e && !f.isDefaultPrevented() && !h && e(f);
      }, washMouseEvent: function washMouseEvent(a) {
        var c = a.originalEvent || a;if (c.pageX === r) c.pageX = a.pageX, c.pageY = a.pageY;return c;
      }, animate: function animate(b, c, d) {
        var e = a(b);if (!b.style) b.style = {};if (c.d) b.toD = c.d, c.d = 1;e.stop();c.opacity !== r && b.attr && (c.opacity += "px");e.animate(c, d);
      }, stop: function stop(b) {
        a(b).stop();
      } };
  })(__webpack_provided_window_dot_jQuery);var R = V.HighchartsAdapter,
      K = R || {};R && R.init.call(R, Eb);var nb = K.adapterRun,
      $b = K.getScript,
      Aa = K.inArray,
      q = K.each,
      Fb = K.grep,
      ac = K.offset,
      Na = K.map,
      A = K.addEvent,
      X = K.removeEvent,
      N = K.fireEvent,
      bc = K.washMouseEvent,
      ob = K.animate,
      eb = K.stop,
      K = { enabled: !0, x: 0, y: 15, style: { color: "#666", cursor: "default", fontSize: "11px" } };L = { colors: "#2f7ed8,#0d233a,#8bbc21,#910000,#1aadce,#492970,#f28f43,#77a1e5,#c42525,#a6c96a".split(","), symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: { loading: "Loading...", months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","), shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
      weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), decimalPoint: ".", numericSymbols: "k,M,G,T,P,E".split(","), resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: "," }, global: { useUTC: !0, canvasToolsURL: "http://code.highcharts.com/stock/1.3.9/modules/canvas-tools.js", VMLRadialGradientURL: "http://code.highcharts.com/stock/1.3.9/gfx/vml-radial-gradient.png" }, chart: { borderColor: "#4572A7", borderRadius: 5, defaultSeriesType: "line", ignoreHiddenSeries: !0, spacing: [10, 10, 15, 10], style: { fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif', fontSize: "12px" }, backgroundColor: "#FFFFFF", plotBorderColor: "#C0C0C0", resetZoomButton: { theme: { zIndex: 20 }, position: { align: "right", x: -10, y: 10 } } }, title: { text: "Chart title", align: "center", margin: 15, style: { color: "#274b6d", fontSize: "16px" } }, subtitle: { text: "", align: "center", style: { color: "#4d759e" } }, plotOptions: { line: { allowPointSelect: !1, showCheckbox: !1, animation: { duration: 1E3 }, events: {}, lineWidth: 2,
        marker: { enabled: !0, lineWidth: 0, radius: 4, lineColor: "#FFFFFF", states: { hover: { enabled: !0 }, select: { fillColor: "#FFFFFF", lineColor: "#000000", lineWidth: 2 } } }, point: { events: {} }, dataLabels: w(K, { align: "center", enabled: !1, formatter: function formatter() {
            return this.y === null ? "" : Ga(this.y, -1);
          }, verticalAlign: "bottom", y: 0 }), cropThreshold: 300, pointRange: 0, states: { hover: { marker: {} }, select: { marker: {} } }, stickyTracking: !0, turboThreshold: 1E3 } }, labels: { style: { position: "absolute", color: "#3E576F" } }, legend: { enabled: !0, align: "center",
      layout: "horizontal", labelFormatter: function labelFormatter() {
        return this.name;
      }, borderWidth: 1, borderColor: "#909090", borderRadius: 5, navigation: { activeColor: "#274b6d", inactiveColor: "#CCC" }, shadow: !1, itemStyle: { cursor: "pointer", color: "#274b6d", fontSize: "12px" }, itemHoverStyle: { color: "#000" }, itemHiddenStyle: { color: "#CCC" }, itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" }, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { fontWeight: "bold" } } }, loading: { labelStyle: { fontWeight: "bold", position: "relative",
        top: "1em" }, style: { position: "absolute", backgroundColor: "white", opacity: 0.5, textAlign: "center" } }, tooltip: { enabled: !0, animation: da, backgroundColor: "rgba(255, 255, 255, .85)", borderWidth: 1, borderRadius: 3, dateTimeLabelFormats: { millisecond: "%A, %b %e, %H:%M:%S.%L", second: "%A, %b %e, %H:%M:%S", minute: "%A, %b %e, %H:%M", hour: "%A, %b %e, %H:%M", day: "%A, %b %e, %Y", week: "Week from %A, %b %e, %Y", month: "%B %Y", year: "%Y" }, headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>', pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
      shadow: !0, snap: cb ? 25 : 10, style: { color: "#333333", cursor: "default", fontSize: "12px", padding: "8px", whiteSpace: "nowrap" } }, credits: { enabled: !0, text: "Highcharts.com", href: "http://www.highcharts.com", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: "#909090", fontSize: "9px" } } };var S = L.plotOptions,
      R = S.line;Lb();var cc = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
      dc = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
      ec = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
      Ba = function Ba(a) {
    var b = [],
        c,
        d;(function (a) {
      a && a.stops ? d = Na(a.stops, function (a) {
        return Ba(a[1]);
      }) : (c = cc.exec(a)) ? b = [E(c[1]), E(c[2]), E(c[3]), parseFloat(c[4], 10)] : (c = dc.exec(a)) ? b = [E(c[1], 16), E(c[2], 16), E(c[3], 16), 1] : (c = ec.exec(a)) && (b = [E(c[1]), E(c[2]), E(c[3]), 1]);
    })(a);return { get: function get(c) {
        var f;d ? (f = w(a), f.stops = [].concat(f.stops), q(d, function (a, b) {
          f.stops[b] = [f.stops[b][0], a.get(c)];
        })) : f = b && !isNaN(b[0]) ? c === "rgb" ? "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")" : c === "a" ? b[3] : "rgba(" + b.join(",") + ")" : a;return f;
      }, brighten: function brighten(a) {
        if (d) q(d, function (b) {
          b.brighten(a);
        });else if (ua(a) && a !== 0) {
          var c;for (c = 0; c < 3; c++) {
            b[c] += E(a * 255), b[c] < 0 && (b[c] = 0), b[c] > 255 && (b[c] = 255);
          }
        }return this;
      }, rgba: b, setOpacity: function setOpacity(a) {
        b[3] = a;return this;
      } };
  };xa.prototype = { init: function init(a, b) {
      this.element = b === "span" ? Z(b) : F.createElementNS(Ma, b);this.renderer = a;this.attrSetters = {};
    }, opacity: 1, animate: function animate(a, b, c) {
      b = o(b, wa, !0);eb(this);if (b) {
        b = w(b);if (c) b.complete = c;ob(this, a, b);
      } else this.attr(a), c && c();
    }, attr: function attr(a, b) {
      var c,
          d,
          e,
          f,
          g = this.element,
          h = g.nodeName.toLowerCase(),
          i = this.renderer,
          j,
          k = this.attrSetters,
          l = this.shadows,
          m,
          p,
          n = this;ma(a) && t(b) && (c = a, a = {}, a[c] = b);if (ma(a)) c = a, h === "circle" ? c = { x: "cx", y: "cy" }[c] || c : c === "strokeWidth" && (c = "stroke-width"), n = H(g, c) || this[c] || 0, c !== "d" && c !== "visibility" && c !== "fill" && (n = parseFloat(n));else {
        for (c in a) {
          if (j = !1, d = a[c], e = k[c] && k[c].call(this, d, c), e !== !1) {
            e !== r && (d = e);if (c === "d") d && d.join && (d = d.join(" ")), /(NaN| {2}|^$)/.test(d) && (d = "M 0 0");else if (c === "x" && h === "text") for (e = 0; e < g.childNodes.length; e++) {
              f = g.childNodes[e], H(f, "x") === H(g, "x") && H(f, "x", d);
            } else if (this.rotation && (c === "x" || c === "y")) p = !0;else if (c === "fill") d = i.color(d, g, c);else if (h === "circle" && (c === "x" || c === "y")) c = { x: "cx", y: "cy" }[c] || c;else if (h === "rect" && c === "r") H(g, { rx: d, ry: d }), j = !0;else if (c === "translateX" || c === "translateY" || c === "rotation" || c === "verticalAlign" || c === "scaleX" || c === "scaleY") j = p = !0;else if (c === "stroke") d = i.color(d, g, c);else if (c === "dashstyle") {
              if (c = "stroke-dasharray", d = d && d.toLowerCase(), d === "solid") d = ba;else {
                if (d) {
                  d = d.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");for (e = d.length; e--;) {
                    d[e] = E(d[e]) * o(a["stroke-width"], this["stroke-width"]);
                  }d = d.join(",");
                }
              }
            } else if (c === "width") d = E(d);else if (c === "align") c = "text-anchor", d = { left: "start", center: "middle", right: "end" }[d];else if (c === "title") e = g.getElementsByTagName("title")[0], e || (e = F.createElementNS(Ma, "title"), g.appendChild(e)), e.textContent = d;c === "strokeWidth" && (c = "stroke-width");if (c === "stroke-width" || c === "stroke") {
              this[c] = d;if (this.stroke && this["stroke-width"]) H(g, "stroke", this.stroke), H(g, "stroke-width", this["stroke-width"]), this.hasStroke = !0;else if (c === "stroke-width" && d === 0 && this.hasStroke) g.removeAttribute("stroke"), this.hasStroke = !1;j = !0;
            }this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(c) && (m || (this.symbolAttr(a), m = !0), j = !0);if (l && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(c)) for (e = l.length; e--;) {
              H(l[e], c, c === "height" ? s(d - (l[e].cutHeight || 0), 0) : d);
            }if ((c === "width" || c === "height") && h === "rect" && d < 0) d = 0;this[c] = d;c === "text" ? (d !== this.textStr && delete this.bBox, this.textStr = d, this.added && i.buildText(this)) : j || H(g, c, d);
          }
        }p && this.updateTransform();
      }return n;
    }, addClass: function addClass(a) {
      var b = this.element,
          c = H(b, "class") || "";c.indexOf(a) === -1 && H(b, "class", c + " " + a);return this;
    }, symbolAttr: function symbolAttr(a) {
      var b = this;q("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","), function (c) {
        b[c] = o(a[c], b[c]);
      });b.attr({ d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b) });
    }, clip: function clip(a) {
      return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : ba);
    }, crisp: function crisp(a, b, c, d, e) {
      var f,
          g = {},
          h = {},
          i,
          a = a || this.strokeWidth || this.attr && this.attr("stroke-width") || 0;i = v(a) % 2 / 2;h.x = Q(b || this.x || 0) + i;h.y = Q(c || this.y || 0) + i;h.width = Q((d || this.width || 0) - 2 * i);h.height = Q((e || this.height || 0) - 2 * i);
      h.strokeWidth = a;for (f in h) {
        this[f] !== h[f] && (this[f] = g[f] = h[f]);
      }return g;
    }, css: function css(a) {
      var b = this.element,
          c = this.textWidth = a && a.width && b.nodeName.toLowerCase() === "text" && E(a.width),
          d,
          e = "",
          f = function f(a, b) {
        return "-" + b.toLowerCase();
      };if (a && a.color) a.fill = a.color;this.styles = a = u(this.styles, a);c && delete a.width;if (Fa && !da) z(this.element, a);else {
        for (d in a) {
          e += d.replace(/([A-Z])/g, f) + ":" + a[d] + ";";
        }H(b, "style", e);
      }c && this.added && this.renderer.buildText(this);return this;
    }, on: function on(a, b) {
      var c = this,
          d = c.element;
      db && a === "click" ? (d.ontouchstart = function (a) {
        c.touchEventFired = Date.now();a.preventDefault();b.call(d, a);
      }, d.onclick = function (a) {
        (za.indexOf("Android") === -1 || Date.now() - (c.touchEventFired || 0) > 1100) && b.call(d, a);
      }) : d["on" + a] = b;return this;
    }, setRadialReference: function setRadialReference(a) {
      this.element.radialReference = a;return this;
    }, translate: function translate(a, b) {
      return this.attr({ translateX: a, translateY: b });
    }, invert: function invert() {
      this.inverted = !0;this.updateTransform();return this;
    }, updateTransform: function updateTransform() {
      var a = this.translateX || 0,
          b = this.translateY || 0,
          c = this.scaleX,
          d = this.scaleY,
          e = this.inverted,
          f = this.rotation;e && (a += this.attr("width"), b += this.attr("height"));a = ["translate(" + a + "," + b + ")"];e ? a.push("rotate(90) scale(-1,1)") : f && a.push("rotate(" + f + " " + (this.x || 0) + " " + (this.y || 0) + ")");(t(c) || t(d)) && a.push("scale(" + o(c, 1) + " " + o(d, 1) + ")");a.length && H(this.element, "transform", a.join(" "));
    }, toFront: function toFront() {
      var a = this.element;a.parentNode.appendChild(a);return this;
    }, align: function align(a, b, c) {
      var d,
          e,
          f,
          g,
          h = {};e = this.renderer;f = e.alignedObjects;
      if (a) {
        if (this.alignOptions = a, this.alignByTranslate = b, !c || ma(c)) this.alignTo = d = c || "renderer", oa(f, this), f.push(this), c = null;
      } else a = this.alignOptions, b = this.alignByTranslate, d = this.alignTo;c = o(c, e[d], e);d = a.align;e = a.verticalAlign;f = (c.x || 0) + (a.x || 0);g = (c.y || 0) + (a.y || 0);if (d === "right" || d === "center") f += (c.width - (a.width || 0)) / { right: 1, center: 2 }[d];h[b ? "translateX" : "x"] = v(f);if (e === "bottom" || e === "middle") g += (c.height - (a.height || 0)) / ({ bottom: 1, middle: 2 }[e] || 1);h[b ? "translateY" : "y"] = v(g);this[this.placed ? "animate" : "attr"](h);this.placed = !0;this.alignAttr = h;return this;
    }, getBBox: function getBBox() {
      var a = this.bBox,
          b = this.renderer,
          c,
          d,
          e = this.rotation;c = this.element;var f = this.styles,
          g = e * La;d = this.textStr;var h;if (d === "" || Zb.test(d)) h = d.length + "|" + f.fontSize + "|" + f.fontFamily, a = b.cache[h];if (!a) {
        if (c.namespaceURI === Ma || b.forExport) {
          try {
            a = c.getBBox ? u({}, c.getBBox()) : { width: c.offsetWidth, height: c.offsetHeight };
          } catch (i) {}if (!a || a.width < 0) a = { width: 0, height: 0 };
        } else a = this.htmlGetBBox();if (b.isSVG) {
          c = a.width;d = a.height;
          if (Fa && f && f.fontSize === "11px" && d.toPrecision(3) === "16.9") a.height = d = 14;if (e) a.width = O(d * ha(g)) + O(c * ca(g)), a.height = O(d * ca(g)) + O(c * ha(g));
        }this.bBox = a;h && (b.cache[h] = a);
      }return a;
    }, show: function show() {
      return this.attr({ visibility: "visible" });
    }, hide: function hide() {
      return this.attr({ visibility: "hidden" });
    }, fadeOut: function fadeOut(a) {
      var b = this;b.animate({ opacity: 0 }, { duration: a || 150, complete: function complete() {
          b.hide();
        } });
    }, add: function add(a) {
      var b = this.renderer,
          c = a || b,
          d = c.element || b.box,
          e = d.childNodes,
          f = this.element,
          g = H(f, "zIndex"),
          h;if (a) this.parentGroup = a;this.parentInverted = a && a.inverted;this.textStr !== void 0 && b.buildText(this);if (g) c.handleZ = !0, g = E(g);if (c.handleZ) for (c = 0; c < e.length; c++) {
        if (a = e[c], b = H(a, "zIndex"), a !== f && (E(b) > g || !t(g) && t(b))) {
          d.insertBefore(f, a);h = !0;break;
        }
      }h || d.appendChild(f);this.added = !0;N(this, "add");return this;
    }, safeRemoveChild: function safeRemoveChild(a) {
      var b = a.parentNode;b && b.removeChild(a);
    }, destroy: function destroy() {
      var a = this,
          b = a.element || {},
          c = a.shadows,
          d = a.renderer.isSVG && b.nodeName === "SPAN" && a.parentGroup,
          e,
          f;b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null;eb(a);if (a.clipPath) a.clipPath = a.clipPath.destroy();if (a.stops) {
        for (f = 0; f < a.stops.length; f++) {
          a.stops[f] = a.stops[f].destroy();
        }a.stops = null;
      }a.safeRemoveChild(b);for (c && q(c, function (b) {
        a.safeRemoveChild(b);
      }); d && d.div.childNodes.length === 0;) {
        b = d.parentGroup, a.safeRemoveChild(d.div), delete d.div, d = b;
      }a.alignTo && oa(a.renderer.alignedObjects, a);for (e in a) {
        delete a[e];
      }return null;
    }, shadow: function shadow(a, b, c) {
      var d = [],
          e,
          f,
          g = this.element,
          h,
          i,
          j,
          k;if (a) {
        i = o(a.width, 3);j = (a.opacity || 0.15) / i;k = this.parentInverted ? "(-1,-1)" : "(" + o(a.offsetX, 1) + ", " + o(a.offsetY, 1) + ")";for (e = 1; e <= i; e++) {
          f = g.cloneNode(0);h = i * 2 + 1 - 2 * e;H(f, { isShadow: "true", stroke: a.color || "black", "stroke-opacity": j * e, "stroke-width": h, transform: "translate" + k, fill: ba });if (c) H(f, "height", s(H(f, "height") - h, 0)), f.cutHeight = h;b ? b.element.appendChild(f) : g.parentNode.insertBefore(f, g);d.push(f);
        }this.shadows = d;
      }return this;
    } };var sa = function sa() {
    this.init.apply(this, arguments);
  };sa.prototype = { Element: xa, init: function init(a, b, c, d) {
      var e = location,
          f,
          g;f = this.createElement("svg").attr({ version: "1.1" });g = f.element;a.appendChild(g);a.innerHTML.indexOf("xmlns") === -1 && H(g, "xmlns", Ma);this.isSVG = !0;this.box = g;this.boxWrapper = f;this.alignedObjects = [];this.url = (bb || mb) && F.getElementsByTagName("base").length ? e.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";this.createElement("desc").add().element.appendChild(F.createTextNode("Created with Highstock 1.3.9"));this.defs = this.createElement("defs").add();
      this.forExport = d;this.gradients = {};this.cache = {};this.setSize(b, c, !1);var h;if (bb && a.getBoundingClientRect) this.subPixelFix = b = function b() {
        z(a, { left: 0, top: 0 });h = a.getBoundingClientRect();z(a, { left: Va(h.left) - h.left + "px", top: Va(h.top) - h.top + "px" });
      }, b(), A(V, "resize", b);
    }, isHidden: function isHidden() {
      return !this.boxWrapper.getBBox().width;
    }, destroy: function destroy() {
      var a = this.defs;this.box = null;this.boxWrapper = this.boxWrapper.destroy();Ia(this.gradients || {});this.gradients = null;if (a) this.defs = a.destroy();this.subPixelFix && X(V, "resize", this.subPixelFix);return this.alignedObjects = null;
    }, createElement: function createElement(a) {
      var b = new this.Element();b.init(this, a);return b;
    }, draw: function draw() {}, buildText: function buildText(a) {
      for (var b = a.element, c = this, d = c.forExport, e = o(a.textStr, "").toString().replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g), f = b.childNodes, g = /style="([^"]+)"/, h = /href="(http[^"]+)"/, i = H(b, "x"), j = a.styles, k = a.textWidth, l = j && j.lineHeight, m = f.length, p = function p(a) {
        return l ? E(l) : c.fontMetrics(/px$/.test(a && a.style.fontSize) ? a.style.fontSize : j.fontSize || 11).h;
      }; m--;) {
        b.removeChild(f[m]);
      }k && !a.added && this.box.appendChild(b);e[e.length - 1] === "" && e.pop();q(e, function (e, f) {
        var l,
            m = 0,
            e = e.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");l = e.split("|||");q(l, function (e) {
          if (e !== "" || l.length === 1) {
            var n = {},
                o = F.createElementNS(Ma, "tspan"),
                q;g.test(e) && (q = e.match(g)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), H(o, "style", q));h.test(e) && !d && (H(o, "onclick", 'location.href="' + e.match(h)[1] + '"'), z(o, { cursor: "pointer" }));e = (e.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">");if (e !== " " && (o.appendChild(F.createTextNode(e)), m ? n.dx = 0 : n.x = i, H(o, n), !m && f && (!da && d && z(o, { display: "block" }), H(o, "dy", p(o), mb && o.offsetHeight)), b.appendChild(o), m++, k)) for (var e = e.replace(/([^\^])-/g, "$1- ").split(" "), n = e.length > 1 && j.whiteSpace !== "nowrap", r, s, v = a._clipHeight, t = [], u = p(), fa = 1; n && (e.length || t.length);) {
              delete a.bBox, r = a.getBBox(), s = r.width, !da && c.forExport && (s = c.measureSpanWidth(o.firstChild.data, a.styles)), r = s > k, !r || e.length === 1 ? (e = t, t = [], e.length && (fa++, v && fa * u > v ? (e = ["..."], a.attr("title", a.textStr)) : (o = F.createElementNS(Ma, "tspan"), H(o, { dy: u, x: i }), q && H(o, "style", q), b.appendChild(o), s > k && (k = s)))) : (o.removeChild(o.firstChild), t.unshift(e.pop())), e.length && o.appendChild(F.createTextNode(e.join(" ").replace(/- /g, "-")));
            }
          }
        });
      });
    }, button: function button(a, b, c, d, e, f, g, h, i) {
      var j = this.label(a, b, c, i, null, null, null, null, "button"),
          k = 0,
          l,
          m,
          p,
          n,
          $,
          o,
          a = { x1: 0, y1: 0, x2: 0, y2: 1 },
          e = w({ "stroke-width": 1, stroke: "#CCCCCC", fill: { linearGradient: a, stops: [[0, "#FEFEFE"], [1, "#F6F6F6"]] }, r: 2, padding: 5, style: { color: "black" } }, e);p = e.style;delete e.style;f = w(e, { stroke: "#68A", fill: { linearGradient: a, stops: [[0, "#FFF"], [1, "#ACF"]] } }, f);n = f.style;delete f.style;g = w(e, { stroke: "#68A", fill: { linearGradient: a, stops: [[0, "#9BD"], [1, "#CDF"]] } }, g);$ = g.style;delete g.style;h = w(e, { style: { color: "#CCC" } }, h);o = h.style;delete h.style;A(j.element, Fa ? "mouseover" : "mouseenter", function () {
        k !== 3 && j.attr(f).css(n);
      });A(j.element, Fa ? "mouseout" : "mouseleave", function () {
        k !== 3 && (l = [e, f, g][k], m = [p, n, $][k], j.attr(l).css(m));
      });j.setState = function (a) {
        (j.state = k = a) ? a === 2 ? j.attr(g).css($) : a === 3 && j.attr(h).css(o) : j.attr(e).css(p);
      };return j.on("click", function () {
        k !== 3 && d.call(j);
      }).attr(e).css(u({ cursor: "default" }, p));
    }, crispLine: function crispLine(a, b) {
      a[1] === a[4] && (a[1] = a[4] = v(a[1]) - b % 2 / 2);a[2] === a[5] && (a[2] = a[5] = v(a[2]) + b % 2 / 2);return a;
    }, path: function path(a) {
      var b = { fill: ba };
      Pa(a) ? b.d = a : aa(a) && u(b, a);return this.createElement("path").attr(b);
    }, circle: function circle(a, b, c) {
      a = aa(a) ? a : { x: a, y: b, r: c };return this.createElement("circle").attr(a);
    }, arc: function arc(a, b, c, d, e, f) {
      if (aa(a)) b = a.y, c = a.r, d = a.innerR, e = a.start, f = a.end, a = a.x;a = this.symbol("arc", a || 0, b || 0, c || 0, c || 0, { innerR: d || 0, start: e || 0, end: f || 0 });a.r = c;return a;
    }, rect: function rect(a, b, c, d, e, f) {
      e = aa(a) ? a.r : e;e = this.createElement("rect").attr({ rx: e, ry: e, fill: ba });return e.attr(aa(a) ? a : e.crisp(f, a, b, s(c, 0), s(d, 0)));
    }, setSize: function setSize(a, b, c) {
      var d = this.alignedObjects,
          e = d.length;this.width = a;this.height = b;for (this.boxWrapper[o(c, !0) ? "animate" : "attr"]({ width: a, height: b }); e--;) {
        d[e].align();
      }
    }, g: function g(a) {
      var b = this.createElement("g");return t(a) ? b.attr({ "class": "highcharts-" + a }) : b;
    }, image: function image(a, b, c, d, e) {
      var f = { preserveAspectRatio: ba };arguments.length > 1 && u(f, { x: b, y: c, width: d, height: e });f = this.createElement("image").attr(f);f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("hc-svg-href", a);return f;
    }, symbol: function symbol(a, b, c, d, e, f) {
      var g,
          h = this.symbols[a],
          h = h && h(v(b), v(c), d, e, f),
          i = /^url\((.*?)\)$/,
          j,
          k;if (h) g = this.path(h), u(g, { symbolName: a, x: b, y: c, width: d, height: e }), f && u(g, f);else if (i.test(a)) k = function k(a, b) {
        a.element && (a.attr({ width: b[0], height: b[1] }), a.alignByTranslate || a.translate(v((d - b[0]) / 2), v((e - b[1]) / 2)));
      }, j = a.match(i)[1], a = Sb[j], g = this.image(j).attr({ x: b, y: c }), g.isImg = !0, a ? k(g, a) : (g.attr({ width: 0, height: 0 }), Z("img", { onload: function onload() {
          k(g, Sb[j] = [this.width, this.height]);
        }, src: j }));
      return g;
    }, symbols: { circle: function circle(a, b, c, d) {
        var e = 0.166 * c;return ["M", a + c / 2, b, "C", a + c + e, b, a + c + e, b + d, a + c / 2, b + d, "C", a - e, b + d, a - e, b, a + c / 2, b, "Z"];
      }, square: function square(a, b, c, d) {
        return ["M", a, b, "L", a + c, b, a + c, b + d, a, b + d, "Z"];
      }, triangle: function triangle(a, b, c, d) {
        return ["M", a + c / 2, b, "L", a + c, b + d, a, b + d, "Z"];
      }, "triangle-down": function triangleDown(a, b, c, d) {
        return ["M", a, b, "L", a + c, b, a + c / 2, b + d, "Z"];
      }, diamond: function diamond(a, b, c, d) {
        return ["M", a + c / 2, b, "L", a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, "Z"];
      }, arc: function arc(a, b, c, d, e) {
        var f = e.start,
            c = e.r || c || d,
            g = e.end - 0.001,
            d = e.innerR,
            h = e.open,
            i = ca(f),
            j = ha(f),
            k = ca(g),
            g = ha(g),
            e = e.end - f < Ka ? 0 : 1;return ["M", a + c * i, b + c * j, "A", c, c, 0, e, 1, a + c * k, b + c * g, h ? "M" : "L", a + d * k, b + d * g, "A", d, d, 0, e, 0, a + d * i, b + d * j, h ? "" : "Z"];
      } }, clipRect: function clipRect(a, b, c, d) {
      var e = "highcharts-" + Db++,
          f = this.createElement("clipPath").attr({ id: e }).add(this.defs),
          a = this.rect(a, b, c, d, 0).add(f);a.id = e;a.clipPath = f;return a;
    }, color: function color(a, b, c) {
      var d = this,
          e,
          f = /^rgba/,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          p = [];a && a.linearGradient ? g = "linearGradient" : a && a.radialGradient && (g = "radialGradient");if (g) {
        c = a[g];h = d.gradients;j = a.stops;b = b.radialReference;Pa(c) && (a[g] = c = { x1: c[0], y1: c[1], x2: c[2], y2: c[3], gradientUnits: "userSpaceOnUse" });g === "radialGradient" && b && !t(c.gradientUnits) && (c = w(c, { cx: b[0] - b[2] / 2 + c.cx * b[2], cy: b[1] - b[2] / 2 + c.cy * b[2], r: c.r * b[2], gradientUnits: "userSpaceOnUse" }));for (m in c) {
          m !== "id" && p.push(m, c[m]);
        }for (m in j) {
          p.push(j[m]);
        }p = p.join(",");h[p] ? a = h[p].id : (c.id = a = "highcharts-" + Db++, h[p] = i = d.createElement(g).attr(c).add(d.defs), i.stops = [], q(j, function (a) {
          f.test(a[1]) ? (e = Ba(a[1]), k = e.get("rgb"), l = e.get("a")) : (k = a[1], l = 1);a = d.createElement("stop").attr({ offset: a[0], "stop-color": k, "stop-opacity": l }).add(i);i.stops.push(a);
        }));return "url(" + d.url + "#" + a + ")";
      } else return f.test(a) ? (e = Ba(a), H(b, c + "-opacity", e.get("a")), e.get("rgb")) : (b.removeAttribute(c + "-opacity"), a);
    }, text: function text(a, b, c, d) {
      var e = L.chart.style,
          f = ka || !da && this.forExport;if (d && !this.forExport) return this.html(a, b, c);b = v(o(b, 0));c = v(o(c, 0));a = this.createElement("text").attr({ x: b, y: c, text: a }).css({ fontFamily: e.fontFamily, fontSize: e.fontSize });
      f && a.css({ position: "absolute" });a.x = b;a.y = c;return a;
    }, fontMetrics: function fontMetrics(a) {
      var a = E(a || 11),
          a = a < 24 ? a + 4 : v(a * 1.2),
          b = v(a * 0.8);return { h: a, b: b };
    }, label: function label(a, b, c, d, e, f, g, h, i) {
      function j() {
        var a, b;a = o.element.style;x = (Ca === void 0 || I === void 0 || n.styles.textAlign) && o.getBBox();n.width = (Ca || x.width || 0) + 2 * s + qb;n.height = (I || x.height || 0) + 2 * s;fa = s + p.fontMetrics(a && a.fontSize).b;if (Hb) {
          if (!J) a = v(-pb * s), b = h ? -fa : 0, n.box = J = d ? p.symbol(d, a, b, n.width, n.height, P) : p.rect(a, b, n.width, n.height, 0, P[Ub]), J.add(n);J.isImg || J.attr(w({ width: n.width, height: n.height }, P));P = null;
        }
      }function k() {
        var a = n.styles,
            a = a && a.textAlign,
            b = qb + s * (1 - pb),
            c;c = h ? 0 : fa;if (t(Ca) && (a === "center" || a === "right")) b += { center: 0.5, right: 1 }[a] * (Ca - x.width);(b !== o.x || c !== o.y) && o.attr({ x: b, y: c });o.x = b;o.y = c;
      }function l(a, b) {
        J ? J.attr(a, b) : P[a] = b;
      }function m() {
        o.add(n);n.attr({ text: a, x: b, y: c });J && t(e) && n.attr({ anchorX: e, anchorY: f });
      }var p = this,
          n = p.g(i),
          o = p.text("", 0, 0, g).attr({ zIndex: 1 }),
          J,
          x,
          pb = 0,
          s = 3,
          qb = 0,
          Ca,
          I,
          Gb,
          G,
          C = 0,
          P = {},
          fa,
          g = n.attrSetters,
          Hb;A(n, "add", m);
      g.width = function (a) {
        Ca = a;return !1;
      };g.height = function (a) {
        I = a;return !1;
      };g.padding = function (a) {
        t(a) && a !== s && (s = a, k());return !1;
      };g.paddingLeft = function (a) {
        t(a) && a !== qb && (qb = a, k());return !1;
      };g.align = function (a) {
        pb = { left: 0, center: 0.5, right: 1 }[a];return !1;
      };g.text = function (a, b) {
        o.attr(b, a);j();k();return !1;
      };g[Ub] = function (a, b) {
        Hb = !0;C = a % 2 / 2;l(b, a);return !1;
      };g.stroke = g.fill = g.r = function (a, b) {
        b === "fill" && (Hb = !0);l(b, a);return !1;
      };g.anchorX = function (a, b) {
        e = a;l(b, a + C - Gb);return !1;
      };g.anchorY = function (a, b) {
        f = a;
        l(b, a - G);return !1;
      };g.x = function (a) {
        n.x = a;a -= pb * ((Ca || x.width) + s);Gb = v(a);n.attr("translateX", Gb);return !1;
      };g.y = function (a) {
        G = n.y = v(a);n.attr("translateY", G);return !1;
      };var y = n.css;return u(n, { css: function css(a) {
          if (a) {
            var b = {},
                a = w(a);q("fontSize,fontWeight,fontFamily,color,lineHeight,width,textDecoration,textShadow".split(","), function (c) {
              a[c] !== r && (b[c] = a[c], delete a[c]);
            });o.css(b);
          }return y.call(n, a);
        }, getBBox: function getBBox() {
          return { width: x.width + 2 * s, height: x.height + 2 * s, x: x.x - s, y: x.y - s };
        }, shadow: function shadow(a) {
          J && J.shadow(a);return n;
        }, destroy: function destroy() {
          X(n, "add", m);X(n.element, "mouseenter");X(n.element, "mouseleave");o && (o = o.destroy());J && (J = J.destroy());xa.prototype.destroy.call(n);n = p = j = k = l = m = null;
        } });
    } };Za = sa;u(xa.prototype, { htmlCss: function htmlCss(a) {
      var b = this.element;if (b = a && b.tagName === "SPAN" && a.width) delete a.width, this.textWidth = b, this.updateTransform();this.styles = u(this.styles, a);z(this.element, a);return this;
    }, htmlGetBBox: function htmlGetBBox() {
      var a = this.element,
          b = this.bBox;if (!b) {
        if (a.nodeName === "text") a.style.position = "absolute";b = this.bBox = { x: a.offsetLeft, y: a.offsetTop, width: a.offsetWidth, height: a.offsetHeight };
      }return b;
    }, htmlUpdateTransform: function htmlUpdateTransform() {
      if (this.added) {
        var a = this.renderer,
            b = this.element,
            c = this.translateX || 0,
            d = this.translateY || 0,
            e = this.x || 0,
            f = this.y || 0,
            g = this.textAlign || "left",
            h = { left: 0, center: 0.5, right: 1 }[g],
            i = this.shadows;z(b, { marginLeft: c, marginTop: d });i && q(i, function (a) {
          z(a, { marginLeft: c + 1, marginTop: d + 1 });
        });this.inverted && q(b.childNodes, function (c) {
          a.invertChild(c, b);
        });if (b.tagName === "SPAN") {
          var j = this.rotation,
              k,
              l = E(this.textWidth),
              m = [j, g, b.innerHTML, this.textWidth].join(",");if (m !== this.cTT) {
            k = a.fontMetrics(b.style.fontSize).b;t(j) && this.setSpanRotation(j, h, k);i = o(this.elemWidth, b.offsetWidth);if (i > l && /[ \-]/.test(b.textContent || b.innerText)) z(b, { width: l + "px", display: "block", whiteSpace: "normal" }), i = l;this.getSpanCorrection(i, k, h, j, g);
          }z(b, { left: e + (this.xCorr || 0) + "px", top: f + (this.yCorr || 0) + "px" });if (mb) k = b.offsetHeight;this.cTT = m;
        }
      } else this.alignOnAdd = !0;
    }, setSpanRotation: function setSpanRotation(a, b, c) {
      var d = {},
          e = Fa ? "-ms-transform" : mb ? "-webkit-transform" : bb ? "MozTransform" : Rb ? "-o-transform" : "";d[e] = d.transform = "rotate(" + a + "deg)";d[e + (bb ? "Origin" : "-origin")] = b * 100 + "% " + c + "px";z(this.element, d);
    }, getSpanCorrection: function getSpanCorrection(a, b, c) {
      this.xCorr = -a * c;this.yCorr = -b;
    } });u(sa.prototype, { html: function html(a, b, c) {
      var d = L.chart.style,
          e = this.createElement("span"),
          f = e.attrSetters,
          g = e.element,
          h = e.renderer;f.text = function (a) {
        a !== g.innerHTML && delete this.bBox;g.innerHTML = a;return !1;
      };f.x = f.y = f.align = f.rotation = function (a, b) {
        b === "align" && (b = "textAlign");e[b] = a;e.htmlUpdateTransform();return !1;
      };e.attr({ text: a, x: v(b), y: v(c) }).css({ position: "absolute", whiteSpace: "nowrap", fontFamily: d.fontFamily, fontSize: d.fontSize });e.css = e.htmlCss;if (h.isSVG) e.add = function (a) {
        var b,
            c = h.box.parentNode,
            d = [];if (this.parentGroup = a) {
          if (b = a.div, !b) {
            for (; a;) {
              d.push(a), a = a.parentGroup;
            }q(d.reverse(), function (a) {
              var d;b = a.div = a.div || Z(Ta, { className: H(a.element, "class") }, { position: "absolute", left: (a.translateX || 0) + "px", top: (a.translateY || 0) + "px" }, b || c);
              d = b.style;u(a.attrSetters, { translateX: function translateX(a) {
                  d.left = a + "px";
                }, translateY: function translateY(a) {
                  d.top = a + "px";
                }, visibility: function visibility(a, b) {
                  d[b] = a;
                } });
            });
          }
        } else b = c;b.appendChild(g);e.added = !0;e.alignOnAdd && e.htmlUpdateTransform();return e;
      };return e;
    } });var rb, qa;if (!da && !ka) Highcharts.VMLElement = qa = { init: function init(a, b) {
      var c = ["<", b, ' filled="f" stroked="f"'],
          d = ["position: ", "absolute", ";"],
          e = b === Ta;(b === "shape" || e) && d.push("left:0;top:0;width:1px;height:1px;");d.push("visibility: ", e ? "hidden" : "visible");c.push(' style="', d.join(""), '"/>');if (b) c = e || b === "span" || b === "img" ? c.join("") : a.prepVML(c), this.element = Z(c);this.renderer = a;this.attrSetters = {};
    }, add: function add(a) {
      var b = this.renderer,
          c = this.element,
          d = b.box,
          d = a ? a.element || a : d;a && a.inverted && b.invertChild(c, d);d.appendChild(c);this.added = !0;this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform();N(this, "add");return this;
    }, updateTransform: xa.prototype.htmlUpdateTransform, setSpanRotation: function setSpanRotation() {
      var a = this.rotation,
          b = ca(a * La),
          c = ha(a * La);z(this.element, { filter: a ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", b, ", M12=", -c, ", M21=", c, ", M22=", b, ", sizingMethod='auto expand')"].join("") : ba });
    }, getSpanCorrection: function getSpanCorrection(a, b, c, d, e) {
      var f = d ? ca(d * La) : 1,
          g = d ? ha(d * La) : 0,
          h = o(this.elemHeight, this.element.offsetHeight),
          i;this.xCorr = f < 0 && -a;this.yCorr = g < 0 && -h;i = f * g < 0;this.xCorr += g * b * (i ? 1 - c : c);this.yCorr -= f * b * (d ? i ? c : 1 - c : 1);e && e !== "left" && (this.xCorr -= a * c * (f < 0 ? -1 : 1), d && (this.yCorr -= h * c * (g < 0 ? -1 : 1)), z(this.element, { textAlign: e }));
    }, pathToVML: function pathToVML(a) {
      for (var b = a.length, c = []; b--;) {
        if (ua(a[b])) c[b] = v(a[b] * 10) - 5;else if (a[b] === "Z") c[b] = "x";else if (c[b] = a[b], a.isArc && (a[b] === "wa" || a[b] === "at")) c[b + 5] === c[b + 7] && (c[b + 7] += a[b + 7] > a[b + 5] ? 1 : -1), c[b + 6] === c[b + 8] && (c[b + 8] += a[b + 8] > a[b + 6] ? 1 : -1);
      }return c.join(" ") || "x";
    }, attr: function attr(a, b) {
      var c,
          d,
          e,
          f = this.element || {},
          g = f.style,
          h = f.nodeName,
          i = this.renderer,
          j = this.symbolName,
          k,
          l = this.shadows,
          m,
          p = this.attrSetters,
          n = this;ma(a) && t(b) && (c = a, a = {}, a[c] = b);if (ma(a)) c = a, n = c === "strokeWidth" || c === "stroke-width" ? this.strokeweight : this[c];else for (c in a) {
        if (d = a[c], m = !1, e = p[c] && p[c].call(this, d, c), e !== !1 && d !== null) {
          e !== r && (d = e);if (j && /^(x|y|r|start|end|width|height|innerR|anchorX|anchorY)/.test(c)) k || (this.symbolAttr(a), k = !0), m = !0;else if (c === "d") {
            d = d || [];this.d = d.join(" ");f.path = d = this.pathToVML(d);if (l) for (e = l.length; e--;) {
              l[e].path = l[e].cutOff ? this.cutOffPath(d, l[e].cutOff) : d;
            }m = !0;
          } else if (c === "visibility") {
            if (l) for (e = l.length; e--;) {
              l[e].style[c] = d;
            }h === "DIV" && (d = d === "hidden" ? "-999em" : 0, lb || (g[c] = d ? "visible" : "hidden"), c = "top");g[c] = d;m = !0;
          } else if (c === "zIndex") d && (g[c] = d), m = !0;else if (Aa(c, ["x", "y", "width", "height"]) !== -1) this[c] = d, c === "x" || c === "y" ? c = { x: "left", y: "top" }[c] : d = s(0, d), this.updateClipping ? (this[c] = d, this.updateClipping()) : g[c] = d, m = !0;else if (c === "class" && h === "DIV") f.className = d;else if (c === "stroke") d = i.color(d, f, c), c = "strokecolor";else if (c === "stroke-width" || c === "strokeWidth") f.stroked = d ? !0 : !1, c = "strokeweight", this[c] = d, ua(d) && (d += "px");else if (c === "dashstyle") (f.getElementsByTagName("stroke")[0] || Z(i.prepVML(["<stroke/>"]), null, null, f))[c] = d || "solid", this.dashstyle = d, m = !0;else if (c === "fill") {
            if (h === "SPAN") g.color = d;else {
              if (h !== "IMG") f.filled = d !== ba ? !0 : !1, d = i.color(d, f, c, this), c = "fillcolor";
            }
          } else if (c === "opacity") m = !0;else if (h === "shape" && c === "rotation") this[c] = f.style[c] = d, f.style.left = -v(ha(d * La) + 1) + "px", f.style.top = v(ca(d * La)) + "px";else if (c === "translateX" || c === "translateY" || c === "rotation") this[c] = d, this.updateTransform(), m = !0;m || (lb ? f[c] = d : H(f, c, d));
        }
      }return n;
    }, clip: function clip(a) {
      var b = this,
          c;a ? (c = a.members, oa(c, b), c.push(b), b.destroyClip = function () {
        oa(c, b);
      }, a = a.getCSS(b)) : (b.destroyClip && b.destroyClip(), a = { clip: lb ? "inherit" : "rect(auto)" });return b.css(a);
    }, css: xa.prototype.htmlCss, safeRemoveChild: function safeRemoveChild(a) {
      a.parentNode && Sa(a);
    }, destroy: function destroy() {
      this.destroyClip && this.destroyClip();return xa.prototype.destroy.apply(this);
    }, on: function on(a, b) {
      this.element["on" + a] = function () {
        var a = V.event;a.target = a.srcElement;b(a);
      };return this;
    }, cutOffPath: function cutOffPath(a, b) {
      var c,
          a = a.split(/[ ,]/);c = a.length;if (c === 9 || c === 11) a[c - 4] = a[c - 2] = E(a[c - 2]) - 10 * b;
      return a.join(" ");
    }, shadow: function shadow(a, b, c) {
      var d = [],
          e,
          f = this.element,
          g = this.renderer,
          h,
          i = f.style,
          j,
          k = f.path,
          l,
          m,
          p,
          n;k && typeof k.value !== "string" && (k = "x");m = k;if (a) {
        p = o(a.width, 3);n = (a.opacity || 0.15) / p;for (e = 1; e <= 3; e++) {
          l = p * 2 + 1 - 2 * e;c && (m = this.cutOffPath(k.value, l + 0.5));j = ['<shape isShadow="true" strokeweight="', l, '" filled="false" path="', m, '" coordsize="10 10" style="', f.style.cssText, '" />'];h = Z(g.prepVML(j), null, { left: E(i.left) + o(a.offsetX, 1), top: E(i.top) + o(a.offsetY, 1) });if (c) h.cutOff = l + 1;j = ['<stroke color="', a.color || "black", '" opacity="', n * e, '"/>'];Z(g.prepVML(j), null, null, h);b ? b.element.appendChild(h) : f.parentNode.insertBefore(h, f);d.push(h);
        }this.shadows = d;
      }return this;
    } }, qa = ea(xa, qa), qa = { Element: qa, isIE8: za.indexOf("MSIE 8.0") > -1, init: function init(a, b, c) {
      var d, e;this.alignedObjects = [];d = this.createElement(Ta);e = d.element;e.style.position = "relative";a.appendChild(d.element);this.isVML = !0;this.box = e;this.boxWrapper = d;this.cache = {};this.setSize(b, c, !1);if (!F.namespaces.hcv) {
        F.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
        try {
          F.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ";
        } catch (f) {
          F.styleSheets[0].cssText += "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ";
        }
      }
    }, isHidden: function isHidden() {
      return !this.box.offsetWidth;
    }, clipRect: function clipRect(a, b, c, d) {
      var e = this.createElement(),
          f = aa(a);return u(e, { members: [], left: (f ? a.x : a) + 1, top: (f ? a.y : b) + 1, width: (f ? a.width : c) - 1, height: (f ? a.height : d) - 1, getCSS: function getCSS(a) {
          var b = a.element,
              c = b.nodeName,
              a = a.inverted,
              d = this.top - (c === "shape" ? b.offsetTop : 0),
              e = this.left,
              b = e + this.width,
              f = d + this.height,
              d = { clip: "rect(" + v(a ? e : d) + "px," + v(a ? f : b) + "px," + v(a ? b : f) + "px," + v(a ? d : e) + "px)" };!a && lb && c === "DIV" && u(d, { width: b + "px", height: f + "px" });return d;
        }, updateClipping: function updateClipping() {
          q(e.members, function (a) {
            a.css(e.getCSS(a));
          });
        } });
    }, color: function color(a, b, c, d) {
      var e = this,
          f,
          g = /^rgba/,
          h,
          i,
          j = ba;a && a.linearGradient ? i = "gradient" : a && a.radialGradient && (i = "pattern");if (i) {
        var k,
            l,
            m = a.linearGradient || a.radialGradient,
            p,
            n,
            o,
            J,
            x,
            s = "",
            a = a.stops,
            r,
            t = [],
            v = function v() {
          h = ['<fill colors="' + t.join(",") + '" opacity="', o, '" o:opacity2="', n, '" type="', i, '" ', s, 'focus="100%" method="any" />'];Z(e.prepVML(h), null, null, b);
        };p = a[0];r = a[a.length - 1];p[0] > 0 && a.unshift([0, p[1]]);r[0] < 1 && a.push([1, r[1]]);q(a, function (a, b) {
          g.test(a[1]) ? (f = Ba(a[1]), k = f.get("rgb"), l = f.get("a")) : (k = a[1], l = 1);t.push(a[0] * 100 + "% " + k);b ? (o = l, J = k) : (n = l, x = k);
        });if (c === "fill") {
          if (i === "gradient") c = m.x1 || m[0] || 0, a = m.y1 || m[1] || 0, p = m.x2 || m[2] || 0, m = m.y2 || m[3] || 0, s = 'angle="' + (90 - T.atan((m - a) / (p - c)) * 180 / Ka) + '"', v();else {
            var j = m.r,
                u = j * 2,
                w = j * 2,
                G = m.cx,
                C = m.cy,
                P = b.radialReference,
                fa,
                j = function j() {
              P && (fa = d.getBBox(), G += (P[0] - fa.x) / fa.width - 0.5, C += (P[1] - fa.y) / fa.height - 0.5, u *= P[2] / fa.width, w *= P[2] / fa.height);s = 'src="' + L.global.VMLRadialGradientURL + '" size="' + u + "," + w + '" origin="0.5,0.5" position="' + G + "," + C + '" color2="' + x + '" ';v();
            };d.added ? j() : A(d, "add", j);j = J;
          }
        } else j = k;
      } else if (g.test(a) && b.tagName !== "IMG") f = Ba(a), h = ["<", c, ' opacity="', f.get("a"), '"/>'], Z(this.prepVML(h), null, null, b), j = f.get("rgb");else {
        j = b.getElementsByTagName(c);if (j.length) j[0].opacity = 1, j[0].type = "solid";j = a;
      }return j;
    }, prepVML: function prepVML(a) {
      var b = this.isIE8,
          a = a.join("");b ? (a = a.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), a = a.indexOf('style="') === -1 ? a.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : a.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : a = a.replace("<", "<hcv:");return a;
    }, text: sa.prototype.html, path: function path(a) {
      var b = { coordsize: "10 10" };
      Pa(a) ? b.d = a : aa(a) && u(b, a);return this.createElement("shape").attr(b);
    }, circle: function circle(a, b, c) {
      var d = this.symbol("circle");if (aa(a)) c = a.r, b = a.y, a = a.x;d.isCircle = !0;d.r = c;return d.attr({ x: a, y: b });
    }, g: function g(a) {
      var b;a && (b = { className: "highcharts-" + a, "class": "highcharts-" + a });return this.createElement(Ta).attr(b);
    }, image: function image(a, b, c, d, e) {
      var f = this.createElement("img").attr({ src: a });arguments.length > 1 && f.attr({ x: b, y: c, width: d, height: e });return f;
    }, rect: function rect(a, b, c, d, e, f) {
      var g = this.symbol("rect");
      g.r = aa(a) ? a.r : e;return g.attr(aa(a) ? a : g.crisp(f, a, b, s(c, 0), s(d, 0)));
    }, invertChild: function invertChild(a, b) {
      var c = b.style;z(a, { flip: "x", left: E(c.width) - 1, top: E(c.height) - 1, rotation: -90 });
    }, symbols: { arc: function arc(a, b, c, d, e) {
        var f = e.start,
            g = e.end,
            h = e.r || c || d,
            c = e.innerR,
            d = ca(f),
            i = ha(f),
            j = ca(g),
            k = ha(g);if (g - f === 0) return ["x"];f = ["wa", a - h, b - h, a + h, b + h, a + h * d, b + h * i, a + h * j, b + h * k];e.open && !c && f.push("e", "M", a, b);f.push("at", a - c, b - c, a + c, b + c, a + c * j, b + c * k, a + c * d, b + c * i, "x", "e");f.isArc = !0;return f;
      }, circle: function circle(a, b, c, d, e) {
        e && (c = d = 2 * e.r);e && e.isCircle && (a -= c / 2, b -= d / 2);return ["wa", a, b, a + c, b + d, a + c, b + d / 2, a + c, b + d / 2, "e"];
      }, rect: function rect(a, b, c, d, e) {
        var f = a + c,
            g = b + d,
            h;!t(e) || !e.r ? f = sa.prototype.symbols.square.apply(0, arguments) : (h = y(e.r, c, d), f = ["M", a + h, b, "L", f - h, b, "wa", f - 2 * h, b, f, b + 2 * h, f - h, b, f, b + h, "L", f, g - h, "wa", f - 2 * h, g - 2 * h, f, g, f, g - h, f - h, g, "L", a + h, g, "wa", a, g - 2 * h, a + 2 * h, g, a + h, g, a, g - h, "L", a, b + h, "wa", a, b, a + 2 * h, b + 2 * h, a, b + h, a + h, b, "x", "e"]);return f;
      } } }, Highcharts.VMLRenderer = rb = function rb() {
    this.init.apply(this, arguments);
  }, rb.prototype = w(sa.prototype, qa), Za = rb;sa.prototype.measureSpanWidth = function (a, b) {
    var c = F.createElement("span"),
        d;d = F.createTextNode(a);c.appendChild(d);z(c, b);this.box.appendChild(c);d = c.offsetWidth;Sa(c);return d;
  };var Vb;if (ka) Highcharts.CanVGRenderer = qa = function qa() {
    Ma = "http://www.w3.org/1999/xhtml";
  }, qa.prototype.symbols = {}, Vb = function () {
    function a() {
      var a = b.length,
          d;for (d = 0; d < a; d++) {
        b[d]();
      }b = [];
    }var b = [];return { push: function push(c, d) {
        b.length === 0 && $b(d, a);b.push(c);
      } };
  }(), Za = qa;Ya.prototype = { addLabel: function addLabel() {
      var a = this.axis,
          b = a.options,
          c = a.chart,
          d = a.horiz,
          e = a.categories,
          f = a.names,
          g = this.pos,
          h = b.labels,
          i = a.tickPositions,
          d = d && e && !h.step && !h.staggerLines && !h.rotation && c.plotWidth / i.length || !d && (c.margin[3] || c.chartWidth * 0.33),
          j = g === i[0],
          k = g === i[i.length - 1],
          l,
          f = e ? o(e[g], f[g], g) : g,
          e = this.label,
          m = i.info;a.isDatetimeAxis && m && (l = b.dateTimeLabelFormats[m.higherRanks[g] || m.unitName]);this.isFirst = j;this.isLast = k;b = a.labelFormatter.call({ axis: a, chart: c, isFirst: j, isLast: k, dateTimeLabelFormat: l, value: a.isLog ? ga(na(f)) : f });g = d && { width: s(1, v(d - 2 * (h.padding || 10))) + "px" };g = u(g, h.style);if (t(e)) e && e.attr({ text: b }).css(g);else {
        l = { align: a.labelAlign };if (ua(h.rotation)) l.rotation = h.rotation;if (d && h.ellipsis) l._clipHeight = a.len / i.length;this.label = t(b) && h.enabled ? c.renderer.text(b, 0, 0, h.useHTML).attr(l).css(g).add(a.labelGroup) : null;
      }
    }, getLabelSize: function getLabelSize() {
      var a = this.label,
          b = this.axis;return a ? a.getBBox()[b.horiz ? "height" : "width"] : 0;
    }, getLabelSides: function getLabelSides() {
      var a = this.label.getBBox(),
          b = this.axis,
          c = b.horiz,
          d = b.options.labels,
          a = c ? a.width : a.height,
          b = c ? a * { left: 0, center: 0.5, right: 1 }[b.labelAlign] - d.x : a;return [-b, a - b];
    }, handleOverflow: function handleOverflow(a, b) {
      var x;var c = !0,
          d = this.axis,
          e = this.isFirst,
          f = this.isLast,
          g = d.horiz ? b.x : b.y,
          h = d.reversed,
          i = d.tickPositions,
          j = this.getLabelSides(),
          k = j[0],
          j = j[1],
          l = d.pos,
          m = l + d.len,
          p = this.label.line || 0,
          n = d.labelEdge,
          o = d.justifyLabels && (e || f);n[p] === r || g + k > n[p] ? n[p] = g + j : o || (c = !1);if (o) x = (d = d.ticks[i[a + (e ? 1 : -1)]]) && d.label.xy && d.label.xy.x + d.getLabelSides()[e ? 0 : 1], i = x, e && !h || f && h ? g + k < l && (g = l - k, d && g + j > i && (c = !1)) : g + j > m && (g = m - j, d && g + k < i && (c = !1)), b.x = g;return c;
    }, getPosition: function getPosition(a, b, c, d) {
      var e = this.axis,
          f = e.chart,
          g = d && f.oldChartHeight || f.chartHeight;return { x: a ? e.translate(b + c, null, null, d) + e.transB : e.left + e.offset + (e.opposite ? (d && f.oldChartWidth || f.chartWidth) - e.right - e.left : 0), y: a ? g - e.bottom + e.offset - (e.opposite ? e.height : 0) : g - e.translate(b + c, null, null, d) - e.transB };
    }, getLabelPosition: function getLabelPosition(a, b, c, d, e, f, g, h) {
      var i = this.axis,
          j = i.transA,
          k = i.reversed,
          l = i.staggerLines,
          m = i.chart.renderer.fontMetrics(e.style.fontSize).b,
          p = e.rotation,
          a = a + e.x - (f && d ? f * j * (k ? -1 : 1) : 0),
          b = b + e.y - (f && !d ? f * j * (k ? 1 : -1) : 0);p && i.side === 2 && (b -= m - m * ca(p * La));!t(e.y) && !p && (b += m - c.getBBox().height / 2);if (l) c.line = g / (h || 1) % l, b += c.line * (i.labelOffset / l);return { x: a, y: b };
    }, getMarkPath: function getMarkPath(a, b, c, d, e, f) {
      return f.crispLine(["M", a, b, "L", a + (e ? 0 : -c), b + (e ? c : 0)], d);
    }, render: function render(a, b, c) {
      var d = this.axis,
          e = d.options,
          f = d.chart.renderer,
          g = d.horiz,
          h = this.type,
          i = this.label,
          j = this.pos,
          k = e.labels,
          l = this.gridLine,
          m = h ? h + "Grid" : "grid",
          p = h ? h + "Tick" : "tick",
          n = e[m + "LineWidth"],
          q = e[m + "LineColor"],
          J = e[m + "LineDashStyle"],
          x = e[p + "Length"],
          m = e[p + "Width"] || 0,
          s = e[p + "Color"],
          t = e[p + "Position"],
          p = this.mark,
          v = k.step,
          u = !0,
          I = d.tickmarkOffset,
          w = this.getPosition(g, j, I, b),
          G = w.x,
          w = w.y,
          C = g && G === d.pos + d.len || !g && w === d.pos ? -1 : 1;this.isActive = !0;if (n) {
        j = d.getPlotLinePath(j + I, n * C, b, !0);if (l === r) {
          l = { stroke: q, "stroke-width": n };if (J) l.dashstyle = J;if (!h) l.zIndex = 1;if (b) l.opacity = 0;this.gridLine = l = n ? f.path(j).attr(l).add(d.gridGroup) : null;
        }if (!b && l && j) l[this.isNew ? "attr" : "animate"]({ d: j, opacity: c });
      }if (m && x) t === "inside" && (x = -x), d.opposite && (x = -x), h = this.getMarkPath(G, w, x, m * C, g, f), p ? p.animate({ d: h, opacity: c }) : this.mark = f.path(h).attr({ stroke: s, "stroke-width": m, opacity: c }).add(d.axisGroup);if (i && !isNaN(G)) i.xy = w = this.getLabelPosition(G, w, i, g, k, I, a, v), this.isFirst && !this.isLast && !o(e.showFirstLabel, 1) || this.isLast && !this.isFirst && !o(e.showLastLabel, 1) ? u = !1 : !d.isRadial && !k.step && !k.rotation && !b && c !== 0 && (u = this.handleOverflow(a, w)), v && a % v && (u = !1), u && !isNaN(w.y) ? (w.opacity = c, i[this.isNew ? "attr" : "animate"](w), this.isNew = !1) : i.attr("y", -9999);
    }, destroy: function destroy() {
      Ia(this, this.axis);
    } };Qb.prototype = { destroy: function destroy() {
      Ia(this, this.axis);
    }, render: function render(a) {
      var b = this.options,
          c = b.format,
          c = c ? Ha(c, this) : b.formatter.call(this);this.label ? this.label.attr({ text: c, visibility: "hidden" }) : this.label = this.axis.chart.renderer.text(c, 0, 0, b.useHTML).css(b.style).attr({ align: this.textAlign, rotation: b.rotation, visibility: "hidden" }).add(a);
    }, setOffset: function setOffset(a, b) {
      var c = this.axis,
          d = c.chart,
          e = d.inverted,
          f = this.isNegative,
          g = c.translate(this.percent ? 100 : this.total, 0, 0, 0, 1),
          c = c.translate(0),
          c = O(g - c),
          h = d.xAxis[0].translate(this.x) + a,
          i = d.plotHeight,
          f = { x: e ? f ? g : g - c : h, y: e ? i - h - b : f ? i - g - c : i - g, width: e ? c : b, height: e ? b : c };if (e = this.label) e.align(this.alignOptions, null, f), f = e.alignAttr, e.attr({ visibility: this.options.crop === !1 || d.isInsidePlot(f.x, f.y) ? da ? "inherit" : "visible" : "hidden" });
    } };var Ib = function Ib(a, b) {
    this.axis = a;if (b) this.options = b, this.id = b.id;
  };Ib.prototype = { render: function render() {
      var a = this,
          b = a.axis,
          c = b.horiz,
          d = (b.pointRange || 0) / 2,
          e = a.options,
          f = e.label,
          g = a.label,
          h = e.width,
          i = e.to,
          j = e.from,
          k = t(j) && t(i),
          l = e.value,
          m = e.dashStyle,
          p = a.svgElem,
          n = [],
          q,
          J = e.color,
          x = e.zIndex,
          r = e.events,
          v = b.chart.renderer;b.isLog && (j = Ea(j), i = Ea(i), l = Ea(l));if (h) {
        if (n = b.getPlotLinePath(l, h), d = { stroke: J, "stroke-width": h }, m) d.dashstyle = m;
      } else if (k) {
        if (j = s(j, b.min - d), i = y(i, b.max + d), n = b.getPlotBandPath(j, i, e), d = { fill: J }, e.borderWidth) d.stroke = e.borderColor, d["stroke-width"] = e.borderWidth;
      } else return;if (t(x)) d.zIndex = x;if (p) {
        if (n) p.animate({ d: n }, null, p.onGetPath);else {
          if (p.hide(), p.onGetPath = function () {
            p.show();
          }, g) a.label = g = g.destroy();
        }
      } else if (n && n.length && (a.svgElem = p = v.path(n).attr(d).add(), r)) for (q in e = function e(b) {
        p.on(b, function (c) {
          r[b].apply(a, [c]);
        });
      }, r) {
        e(q);
      }if (f && t(f.text) && n && n.length && b.width > 0 && b.height > 0) {
        f = w({ align: c && k && "center", x: c ? !k && 4 : 10, verticalAlign: !c && k && "middle", y: c ? k ? 16 : 10 : k ? 6 : -4, rotation: c && !k && 90 }, f);if (!g) a.label = g = v.text(f.text, 0, 0, f.useHTML).attr({ align: f.textAlign || f.align, rotation: f.rotation, zIndex: x }).css(f.style).add();b = [n[1], n[4], o(n[6], n[1])];n = [n[2], n[5], o(n[7], n[2])];c = Ra(b);k = Ra(n);g.align(f, !1, { x: c, y: k, width: va(b) - c, height: va(n) - k });g.show();
      } else g && g.hide();return a;
    }, destroy: function destroy() {
      oa(this.axis.plotLinesAndBands, this);delete this.axis;Ia(this);
    } };W.prototype = { defaultOptions: { dateTimeLabelFormats: { millisecond: "%H:%M:%S.%L", second: "%H:%M:%S", minute: "%H:%M", hour: "%H:%M", day: "%e. %b", week: "%e. %b", month: "%b '%y", year: "%Y" }, endOnTick: !1, gridLineColor: "#C0C0C0", labels: K, lineColor: "#C0D0E0", lineWidth: 1, minPadding: 0.01,
      maxPadding: 0.01, minorGridLineColor: "#E0E0E0", minorGridLineWidth: 1, minorTickColor: "#A0A0A0", minorTickLength: 2, minorTickPosition: "outside", startOfWeek: 1, startOnTick: !1, tickColor: "#C0D0E0", tickLength: 5, tickmarkPlacement: "between", tickPixelInterval: 100, tickPosition: "outside", tickWidth: 1, title: { align: "middle", style: { color: "#4d759e", fontWeight: "bold" } }, type: "linear" }, defaultYAxisOptions: { endOnTick: !0, gridLineWidth: 1, tickPixelInterval: 72, showLastLabel: !0, labels: { x: -8, y: 3 }, lineWidth: 0, maxPadding: 0.05, minPadding: 0.05,
      startOnTick: !0, tickWidth: 0, title: { rotation: 270, text: "Values" }, stackLabels: { enabled: !1, formatter: function formatter() {
          return Ga(this.total, -1);
        }, style: K.style } }, defaultLeftAxisOptions: { labels: { x: -8, y: null }, title: { rotation: 270 } }, defaultRightAxisOptions: { labels: { x: 8, y: null }, title: { rotation: 90 } }, defaultBottomAxisOptions: { labels: { x: 0, y: 14 }, title: { rotation: 0 } }, defaultTopAxisOptions: { labels: { x: 0, y: -5 }, title: { rotation: 0 } }, init: function init(a, b) {
      var c = b.isX;this.horiz = a.inverted ? !c : c;this.coll = (this.isXAxis = c) ? "xAxis" : "yAxis";
      this.opposite = b.opposite;this.side = b.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3);this.setOptions(b);var d = this.options,
          e = d.type;this.labelFormatter = d.labels.formatter || this.defaultLabelFormatter;this.userOptions = b;this.minPixelPadding = 0;this.chart = a;this.reversed = d.reversed;this.zoomEnabled = d.zoomEnabled !== !1;this.categories = d.categories || e === "category";this.names = [];this.isLog = e === "logarithmic";this.isDatetimeAxis = e === "datetime";this.isLinked = t(d.linkedTo);this.tickmarkOffset = this.categories && d.tickmarkPlacement === "between" ? 0.5 : 0;this.ticks = {};this.labelEdge = [];this.minorTicks = {};this.plotLinesAndBands = [];this.alternateBands = {};this.len = 0;this.minRange = this.userMinRange = d.minRange || d.maxZoom;this.range = d.range;this.offset = d.offset || 0;this.stacks = {};this.oldStacks = {};this.stackExtremes = {};this.min = this.max = null;this.crosshair = o(d.crosshair, ja(a.options.tooltip.crosshairs)[c ? 0 : 1], !1);var f,
          d = this.options.events;Aa(this, a.axes) === -1 && (a.axes.push(this), a[this.coll].push(this));this.series = this.series || [];if (a.inverted && c && this.reversed === r) this.reversed = !0;this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;for (f in d) {
        A(this, f, d[f]);
      }if (this.isLog) this.val2lin = Ea, this.lin2val = na;
    }, setOptions: function setOptions(a) {
      this.options = w(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], w(L[this.coll], a));
    }, defaultLabelFormatter: function defaultLabelFormatter() {
      var a = this.axis,
          b = this.value,
          c = a.categories,
          d = this.dateTimeLabelFormat,
          e = L.lang.numericSymbols,
          f = e && e.length,
          g,
          h = a.options.labels.format,
          a = a.isLog ? b : a.tickInterval;if (h) g = Ha(h, this);else if (c) g = b;else if (d) g = ra(d, b);else if (f && a >= 1E3) for (; f-- && g === r;) {
        c = Math.pow(1E3, f + 1), a >= c && e[f] !== null && (g = Ga(b / c, -1) + e[f]);
      }g === r && (g = b >= 1E4 ? Ga(b, 0) : Ga(b, -1, r, ""));return g;
    }, getSeriesExtremes: function getSeriesExtremes() {
      var a = this,
          b = a.chart;a.hasVisibleSeries = !1;a.dataMin = a.dataMax = null;a.stackExtremes = {};a.buildStacks();q(a.series, function (c) {
        if (c.visible || !b.options.chart.ignoreHiddenSeries) {
          var d;d = c.options.threshold;var e;a.hasVisibleSeries = !0;a.isLog && d <= 0 && (d = null);if (a.isXAxis) {
            if (d = c.xData, d.length) a.dataMin = y(o(a.dataMin, d[0]), Ra(d)), a.dataMax = s(o(a.dataMax, d[0]), va(d));
          } else {
            c.getExtremes();e = c.dataMax;c = c.dataMin;if (t(c) && t(e)) a.dataMin = y(o(a.dataMin, c), c), a.dataMax = s(o(a.dataMax, e), e);if (t(d)) if (a.dataMin >= d) a.dataMin = d, a.ignoreMinPadding = !0;else if (a.dataMax < d) a.dataMax = d, a.ignoreMaxPadding = !0;
          }
        }
      });
    }, translate: function translate(a, b, c, d, e, f) {
      var g = this.len,
          h = 1,
          i = 0,
          j = d ? this.oldTransA : this.transA,
          d = d ? this.oldMin : this.min,
          k = this.minPixelPadding,
          e = (this.options.ordinal || this.isLog && e) && this.lin2val;if (!j) j = this.transA;c && (h *= -1, i = g);this.reversed && (h *= -1, i -= h * g);b ? (a = a * h + i, a -= k, a = a / j + d, e && (a = this.lin2val(a))) : (e && (a = this.val2lin(a)), f === "between" && (f = 0.5), a = h * (a - d) * j + i + h * k + (ua(f) ? j * f * this.pointRange : 0));return a;
    }, toPixels: function toPixels(a, b) {
      return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos);
    }, toValue: function toValue(a, b) {
      return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0);
    }, getPlotLinePath: function getPlotLinePath(a, b, c, d, e) {
      var f = this.chart,
          g = this.left,
          h = this.top,
          i,
          j,
          k = c && f.oldChartHeight || f.chartHeight,
          l = c && f.oldChartWidth || f.chartWidth,
          m;i = this.transB;e = o(e, this.translate(a, null, null, c));a = c = v(e + i);i = j = v(k - e - i);if (isNaN(e)) m = !0;else if (this.horiz) {
        if (i = h, j = k - this.bottom, a < g || a > g + this.width) m = !0;
      } else if (a = g, c = l - this.right, i < h || i > h + this.height) m = !0;return m && !d ? null : f.renderer.crispLine(["M", a, i, "L", c, j], b || 1);
    }, getLinearTickPositions: function getLinearTickPositions(a, b, c) {
      for (var d, b = ga(Q(b / a) * a), c = ga(Va(c / a) * a), e = []; b <= c;) {
        e.push(b);b = ga(b + a);if (b === d) break;d = b;
      }return e;
    }, getMinorTickPositions: function getMinorTickPositions() {
      var a = this.options,
          b = this.tickPositions,
          c = this.minorTickInterval,
          d = [],
          e;if (this.isLog) {
        e = b.length;for (a = 1; a < e; a++) {
          d = d.concat(this.getLogTickPositions(c, b[a - 1], b[a], !0));
        }
      } else if (this.isDatetimeAxis && a.minorTickInterval === "auto") d = d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c), this.min, this.max, a.startOfWeek)), d[0] < this.min && d.shift();else for (b = this.min + (b[0] - this.min) % c; b <= this.max; b += c) {
        d.push(b);
      }return d;
    }, adjustForMinRange: function adjustForMinRange() {
      var a = this.options,
          b = this.min,
          c = this.max,
          d,
          e = this.dataMax - this.dataMin >= this.minRange,
          f,
          g,
          h,
          i,
          j;if (this.isXAxis && this.minRange === r && !this.isLog) t(a.min) || t(a.max) ? this.minRange = null : (q(this.series, function (a) {
        i = a.xData;for (g = j = a.xIncrement ? 1 : i.length - 1; g > 0; g--) {
          if (h = i[g] - i[g - 1], f === r || h < f) f = h;
        }
      }), this.minRange = y(f * 5, this.dataMax - this.dataMin));if (c - b < this.minRange) {
        var k = this.minRange;d = (k - c + b) / 2;d = [b - d, o(a.min, b - d)];
        if (e) d[2] = this.dataMin;b = va(d);c = [b + k, o(a.max, b + k)];if (e) c[2] = this.dataMax;c = Ra(c);c - b < k && (d[0] = c - k, d[1] = o(a.min, c - k), b = va(d));
      }this.min = b;this.max = c;
    }, setAxisTranslation: function setAxisTranslation(a) {
      var b = this.max - this.min,
          c = 0,
          d,
          e = 0,
          f = 0,
          g = this.linkedParent,
          h = !!this.categories,
          i = this.transA;if (this.isXAxis || h) g ? (e = g.minPointOffset, f = g.pointRangePadding) : q(this.series, function (a) {
        var g = s(a.pointRange, +h),
            i = a.options.pointPlacement,
            m = a.closestPointRange;g > b && (g = 0);c = s(c, g);e = s(e, ma(i) ? 0 : g / 2);f = s(f, i === "on" ? 0 : g);!a.noSharedTooltip && t(m) && (d = t(d) ? y(d, m) : m);
      }), g = this.ordinalSlope && d ? this.ordinalSlope / d : 1, this.minPointOffset = e *= g, this.pointRangePadding = f *= g, this.pointRange = y(c, b), this.closestPointRange = d;if (a) this.oldTransA = i;this.translationSlope = this.transA = i = this.len / (b + f || 1);this.transB = this.horiz ? this.left : this.bottom;this.minPixelPadding = i * e;
    }, setTickPositions: function setTickPositions(a) {
      var b = this,
          c = b.chart,
          d = b.options,
          e = b.isLog,
          f = b.isDatetimeAxis,
          g = b.isXAxis,
          h = b.isLinked,
          i = b.options.tickPositioner,
          j = d.maxPadding,
          k = d.minPadding,
          l = d.tickInterval,
          m = d.minTickInterval,
          p = d.tickPixelInterval,
          n,
          $ = b.categories;h ? (b.linkedParent = c[b.coll][d.linkedTo], c = b.linkedParent.getExtremes(), b.min = o(c.min, c.dataMin), b.max = o(c.max, c.dataMax), d.type !== b.linkedParent.options.type && pa(11, 1)) : (b.min = o(b.userMin, d.min, b.dataMin), b.max = o(b.userMax, d.max, b.dataMax));if (e) !a && y(b.min, o(b.dataMin, b.min)) <= 0 && pa(10, 1), b.min = ga(Ea(b.min)), b.max = ga(Ea(b.max));if (b.range && t(b.max)) b.userMin = b.min = s(b.min, b.max - b.range), b.userMax = b.max, b.range = null;b.beforePadding && b.beforePadding();
      b.adjustForMinRange();if (!$ && !b.usePercentage && !h && t(b.min) && t(b.max) && (c = b.max - b.min)) {
        if (!t(d.min) && !t(b.userMin) && k && (b.dataMin < 0 || !b.ignoreMinPadding)) b.min -= c * k;if (!t(d.max) && !t(b.userMax) && j && (b.dataMax > 0 || !b.ignoreMaxPadding)) b.max += c * j;
      }b.min === b.max || b.min === void 0 || b.max === void 0 ? b.tickInterval = 1 : h && !l && p === b.linkedParent.options.tickPixelInterval ? b.tickInterval = b.linkedParent.tickInterval : (b.tickInterval = o(l, $ ? 1 : (b.max - b.min) * p / s(b.len, p)), !t(l) && b.len < p && !this.isRadial && !$ && d.startOnTick && d.endOnTick && (n = !0, b.tickInterval /= 4));g && !a && q(b.series, function (a) {
        a.processData(b.min !== b.oldMin || b.max !== b.oldMax);
      });b.setAxisTranslation(!0);b.beforeSetTickPositions && b.beforeSetTickPositions();if (b.postProcessTickInterval) b.tickInterval = b.postProcessTickInterval(b.tickInterval);if (b.pointRange) b.tickInterval = s(b.pointRange, b.tickInterval);if (!l && b.tickInterval < m) b.tickInterval = m;if (!f && !e && !l) b.tickInterval = ub(b.tickInterval, null, tb(b.tickInterval), d);b.minorTickInterval = d.minorTickInterval === "auto" && b.tickInterval ? b.tickInterval / 5 : d.minorTickInterval;b.tickPositions = a = d.tickPositions ? [].concat(d.tickPositions) : i && i.apply(b, [b.min, b.max]);if (!a) !b.ordinalPositions && (b.max - b.min) / b.tickInterval > s(2 * b.len, 200) && pa(19, !0), a = f ? b.getTimeTicks(b.normalizeTimeTickInterval(b.tickInterval, d.units), b.min, b.max, d.startOfWeek, b.ordinalPositions, b.closestPointRange, !0) : e ? b.getLogTickPositions(b.tickInterval, b.min, b.max) : b.getLinearTickPositions(b.tickInterval, b.min, b.max), n && a.splice(1, a.length - 2), b.tickPositions = a;if (!h) e = a[0], f = a[a.length - 1], h = b.minPointOffset || 0, d.startOnTick ? b.min = e : b.min - h > e && a.shift(), d.endOnTick ? b.max = f : b.max + h < f && a.pop(), a.length === 1 && (b.min -= 0.001, b.max += 0.001);
    }, setMaxTicks: function setMaxTicks() {
      var a = this.chart,
          b = a.maxTicks || {},
          c = this.tickPositions,
          d = this._maxTicksKey = [this.coll, this.pos, this.len].join("-");if (!this.isLinked && !this.isDatetimeAxis && c && c.length > (b[d] || 0) && this.options.alignTicks !== !1) b[d] = c.length;a.maxTicks = b;
    }, adjustTickAmount: function adjustTickAmount() {
      var a = this._maxTicksKey,
          b = this.tickPositions,
          c = this.chart.maxTicks;if (c && c[a] && !this.isDatetimeAxis && !this.categories && !this.isLinked && this.options.alignTicks !== !1 && this.min !== r) {
        var d = this.tickAmount,
            e = b.length;this.tickAmount = a = c[a];if (e < a) {
          for (; b.length < a;) {
            b.push(ga(b[b.length - 1] + this.tickInterval));
          }this.transA *= (e - 1) / (a - 1);this.max = b[b.length - 1];
        }if (t(d) && a !== d) this.isDirty = !0;
      }
    }, setScale: function setScale() {
      var a = this.stacks,
          b,
          c,
          d,
          e;this.oldMin = this.min;this.oldMax = this.max;this.oldAxisLength = this.len;this.setAxisSize();e = this.len !== this.oldAxisLength;q(this.series, function (a) {
        if (a.isDirtyData || a.isDirty || a.xAxis.isDirty) d = !0;
      });if (e || d || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax) {
        if (!this.isXAxis) for (b in a) {
          for (c in a[b]) {
            a[b][c].total = null, a[b][c].cum = 0;
          }
        }this.forceRedraw = !1;this.getSeriesExtremes();this.setTickPositions();this.oldUserMin = this.userMin;this.oldUserMax = this.userMax;if (!this.isDirty) this.isDirty = e || this.min !== this.oldMin || this.max !== this.oldMax;
      } else if (!this.isXAxis) {
        if (this.oldStacks) a = this.stacks = this.oldStacks;for (b in a) {
          for (c in a[b]) {
            a[b][c].cum = a[b][c].total;
          }
        }
      }this.setMaxTicks();
    }, setExtremes: function setExtremes(a, b, c, d, e) {
      var f = this,
          g = f.chart,
          c = o(c, !0),
          e = u(e, { min: a, max: b });N(f, "setExtremes", e, function () {
        f.userMin = a;f.userMax = b;f.eventArgs = e;f.isDirtyExtremes = !0;c && g.redraw(d);
      });
    }, zoom: function zoom(a, b) {
      this.allowZoomOutside || (t(this.dataMin) && a <= this.dataMin && (a = r), t(this.dataMax) && b >= this.dataMax && (b = r));this.displayBtn = a !== r || b !== r;this.setExtremes(a, b, !1, r, { trigger: "zoom" });return !0;
    }, setAxisSize: function setAxisSize() {
      var a = this.chart,
          b = this.options,
          c = b.offsetLeft || 0,
          d = b.offsetRight || 0,
          e = this.horiz,
          f,
          g;this.left = g = o(b.left, a.plotLeft + c);this.top = f = o(b.top, a.plotTop);this.width = c = o(b.width, a.plotWidth - c + d);this.height = b = o(b.height, a.plotHeight);this.bottom = a.chartHeight - b - f;this.right = a.chartWidth - c - g;this.len = s(e ? c : b, 0);this.pos = e ? g : f;
    }, getExtremes: function getExtremes() {
      var a = this.isLog;return { min: a ? ga(na(this.min)) : this.min, max: a ? ga(na(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax };
    },
    getThreshold: function getThreshold(a) {
      var b = this.isLog,
          c = b ? na(this.min) : this.min,
          b = b ? na(this.max) : this.max;c > a || a === null ? a = c : b < a && (a = b);return this.translate(a, 0, 1, 0, 1);
    }, autoLabelAlign: function autoLabelAlign(a) {
      a = (o(a, 0) - this.side * 90 + 720) % 360;return a > 15 && a < 165 ? "right" : a > 195 && a < 345 ? "left" : "center";
    }, getOffset: function getOffset() {
      var a = this,
          b = a.chart,
          c = b.renderer,
          d = a.options,
          e = a.tickPositions,
          f = a.ticks,
          g = a.horiz,
          h = a.side,
          i = b.inverted ? [1, 0, 3, 2][h] : h,
          j,
          k = 0,
          l,
          m = 0,
          p = d.title,
          n = d.labels,
          $ = 0,
          J = b.axisOffset,
          x = b.clipOffset,
          v = [-1, 1, 1, -1][h],
          u,
          w = 1,
          Ca = o(n.maxStaggerLines, 5),
          I,
          y,
          G,
          C;a.hasData = j = a.hasVisibleSeries || t(a.min) && t(a.max) && !!e;a.showAxis = b = j || o(d.showEmpty, !0);a.staggerLines = a.horiz && n.staggerLines;if (!a.axisGroup) a.gridGroup = c.g("grid").attr({ zIndex: d.gridZIndex || 1 }).add(), a.axisGroup = c.g("axis").attr({ zIndex: d.zIndex || 2 }).add(), a.labelGroup = c.g("axis-labels").attr({ zIndex: n.zIndex || 7 }).add();if (j || a.isLinked) {
        a.labelAlign = o(n.align || a.autoLabelAlign(n.rotation));q(e, function (b) {
          f[b] ? f[b].addLabel() : f[b] = new Ya(a, b);
        });if (a.horiz && !a.staggerLines && Ca && !n.rotation) {
          for (u = a.reversed ? [].concat(e).reverse() : e; w < Ca;) {
            j = [];I = !1;for (n = 0; n < u.length; n++) {
              y = u[n], G = (G = f[y].label && f[y].label.getBBox()) ? G.width : 0, C = n % w, G && (y = a.translate(y), j[C] !== r && y < j[C] && (I = !0), j[C] = y + G);
            }if (I) w++;else break;
          }if (w > 1) a.staggerLines = w;
        }q(e, function (b) {
          if (h === 0 || h === 2 || { 1: "left", 3: "right" }[h] === a.labelAlign) $ = s(f[b].getLabelSize(), $);
        });if (a.staggerLines) $ *= a.staggerLines, a.labelOffset = $;
      } else for (u in f) {
        f[u].destroy(), delete f[u];
      }if (p && p.text && p.enabled !== !1) {
        if (!a.axisTitle) a.axisTitle = c.text(p.text, 0, 0, p.useHTML).attr({ zIndex: 7, rotation: p.rotation || 0, align: p.textAlign || { low: "left", middle: "center", high: "right" }[p.align] }).css(p.style).add(a.axisGroup), a.axisTitle.isNew = !0;if (b) k = a.axisTitle.getBBox()[g ? "height" : "width"], m = o(p.margin, g ? 5 : 10), l = p.offset;a.axisTitle[b ? "show" : "hide"]();
      }a.offset = v * o(d.offset, J[h]);a.axisTitleMargin = o(l, $ + m + (h !== 2 && $ && v * d.labels[g ? "y" : "x"]));J[h] = s(J[h], a.axisTitleMargin + k + v * a.offset);x[i] = s(x[i], Q(d.lineWidth / 2) * 2);
    }, getLinePath: function getLinePath(a) {
      var b = this.chart,
          c = this.opposite,
          d = this.offset,
          e = this.horiz,
          f = this.left + (c ? this.width : 0) + d,
          d = b.chartHeight - this.bottom - (c ? this.height : 0) + d;c && (a *= -1);return b.renderer.crispLine(["M", e ? this.left : f, e ? d : this.top, "L", e ? b.chartWidth - this.right : f, e ? d : b.chartHeight - this.bottom], a);
    }, getTitlePosition: function getTitlePosition() {
      var a = this.horiz,
          b = this.left,
          c = this.top,
          d = this.len,
          e = this.options.title,
          f = a ? b : c,
          g = this.opposite,
          h = this.offset,
          i = E(e.style.fontSize || 12),
          d = { low: f + (a ? 0 : d), middle: f + d / 2, high: f + (a ? d : 0) }[e.align],
          b = (a ? c + this.height : b) + (a ? 1 : -1) * (g ? -1 : 1) * this.axisTitleMargin + (this.side === 2 ? i : 0);return { x: a ? d : b + (g ? this.width : 0) + h + (e.x || 0), y: a ? b - (g ? this.height : 0) + h : d + (e.y || 0) };
    }, render: function render() {
      var a = this,
          b = a.horiz,
          c = a.reversed,
          d = a.chart,
          e = d.renderer,
          f = a.options,
          g = a.isLog,
          h = a.isLinked,
          i = a.tickPositions,
          j,
          k = a.axisTitle,
          l = a.stacks,
          m = a.ticks,
          p = a.minorTicks,
          n = a.alternateBands,
          o = f.stackLabels,
          J = f.alternateGridColor,
          x = a.tickmarkOffset,
          s = f.lineWidth,
          v = d.hasRendered && t(a.oldMin) && !isNaN(a.oldMin),
          u = a.hasData,
          w = a.showAxis,
          I,
          y = a.justifyLabels = !a.staggerLines && b && f.labels.overflow === "justify",
          G;a.labelEdge.length = 0;q([m, p, n], function (a) {
        for (var b in a) {
          a[b].isActive = !1;
        }
      });if (u || h) if (a.minorTickInterval && !a.categories && q(a.getMinorTickPositions(), function (b) {
        p[b] || (p[b] = new Ya(a, b, "minor"));v && p[b].isNew && p[b].render(null, !0);p[b].render(null, !1, 1);
      }), i.length && (j = i.slice(), (b && c || !b && !c) && j.reverse(), y && (j = j.slice(1).concat([j[0]])), q(j, function (b, c) {
        y && (c = c === j.length - 1 ? 0 : c + 1);if (!h || b >= a.min && b <= a.max) m[b] || (m[b] = new Ya(a, b)), v && m[b].isNew && m[b].render(c, !0, 0.1), m[b].render(c, !1, 1);
      }), x && a.min === 0 && (m[-1] || (m[-1] = new Ya(a, -1, null, !0)), m[-1].render(-1))), J && q(i, function (b, c) {
        if (c % 2 === 0 && b < a.max) n[b] || (n[b] = new Ib(a)), I = b + x, G = i[c + 1] !== r ? i[c + 1] + x : a.max, n[b].options = { from: g ? na(I) : I, to: g ? na(G) : G, color: J }, n[b].render(), n[b].isActive = !0;
      }), !a._addedPlotLB) q((f.plotLines || []).concat(f.plotBands || []), function (b) {
        a.addPlotBandOrLine(b);
      }), a._addedPlotLB = !0;q([m, p, n], function (a) {
        var b,
            c,
            e = [],
            f = wa ? wa.duration || 500 : 0,
            g = function g() {
          for (c = e.length; c--;) {
            a[e[c]] && !a[e[c]].isActive && (a[e[c]].destroy(), delete a[e[c]]);
          }
        };for (b in a) {
          if (!a[b].isActive) a[b].render(b, !1, 0), a[b].isActive = !1, e.push(b);
        }a === n || !d.hasRendered || !f ? g() : f && setTimeout(g, f);
      });if (s) b = a.getLinePath(s), a.axisLine ? a.axisLine.animate({ d: b }) : a.axisLine = e.path(b).attr({ stroke: f.lineColor, "stroke-width": s, zIndex: 7 }).add(a.axisGroup), a.axisLine[w ? "show" : "hide"]();if (k && w) k[k.isNew ? "attr" : "animate"](a.getTitlePosition()), k.isNew = !1;if (o && o.enabled) {
        var C,
            P,
            f = a.stackTotalGroup;if (!f) a.stackTotalGroup = f = e.g("stack-labels").attr({ visibility: "visible", zIndex: 6 }).add();f.translate(d.plotLeft, d.plotTop);for (C in l) {
          for (P in e = l[C], e) {
            e[P].render(f);
          }
        }
      }a.isDirty = !1;
    }, redraw: function redraw() {
      var a = this.chart.pointer;a.reset && a.reset(!0);this.render();q(this.plotLinesAndBands, function (a) {
        a.render();
      });q(this.series, function (a) {
        a.isDirty = !0;
      });
    }, buildStacks: function buildStacks() {
      var a = this.series,
          b = a.length;if (!this.isXAxis) {
        for (; b--;) {
          a[b].setStackedPoints();
        }if (this.usePercentage) for (b = 0; b < a.length; b++) {
          a[b].setPercentStacks();
        }
      }
    },
    destroy: function destroy(a) {
      var b = this,
          c = b.stacks,
          d,
          e = b.plotLinesAndBands;a || X(b);for (d in c) {
        Ia(c[d]), c[d] = null;
      }q([b.ticks, b.minorTicks, b.alternateBands], function (a) {
        Ia(a);
      });for (a = e.length; a--;) {
        e[a].destroy();
      }q("stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup".split(","), function (a) {
        b[a] && (b[a] = b[a].destroy());
      });this.cross && this.cross.destroy();
    }, drawCrosshair: function drawCrosshair(a, b) {
      if (this.crosshair) if ((t(b) || !o(this.crosshair.snap, !0)) === !1) this.hideCrosshair();else {
        var c,
            d = this.crosshair,
            e = d.animation;o(d.snap, !0) ? t(b) && (c = this.chart.inverted != this.horiz ? b.plotX : this.len - b.plotY) : c = this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos;c = this.isRadial ? this.getPlotLinePath(this.isXAxis ? b.x : o(b.stackY, b.y)) : this.getPlotLinePath(null, null, null, null, c);if (c === null) this.hideCrosshair();else if (this.cross) this.cross.attr({ visibility: "visible" })[e ? "animate" : "attr"]({ d: c }, e);else {
          e = { "stroke-width": d.width || 1, stroke: d.color || "#C0C0C0", zIndex: d.zIndex || 2 };if (d.dashStyle) e.dashstyle = d.dashStyle;
          this.cross = this.chart.renderer.path(c).attr(e).add();
        }
      }
    }, hideCrosshair: function hideCrosshair() {
      this.cross && this.cross.hide();
    } };u(W.prototype, { getPlotBandPath: function getPlotBandPath(a, b) {
      var c = this.getPlotLinePath(b),
          d = this.getPlotLinePath(a);d && c ? d.push(c[4], c[5], c[1], c[2]) : d = null;return d;
    }, addPlotBand: function addPlotBand(a) {
      this.addPlotBandOrLine(a, "plotBands");
    }, addPlotLine: function addPlotLine(a) {
      this.addPlotBandOrLine(a, "plotLines");
    }, addPlotBandOrLine: function addPlotBandOrLine(a, b) {
      var c = new Ib(this, a).render(),
          d = this.userOptions;c && (b && (d[b] = d[b] || [], d[b].push(a)), this.plotLinesAndBands.push(c));return c;
    }, removePlotBandOrLine: function removePlotBandOrLine(a) {
      for (var b = this.plotLinesAndBands, c = this.options, d = this.userOptions, e = b.length; e--;) {
        b[e].id === a && b[e].destroy();
      }q([c.plotLines || [], d.plotLines || [], c.plotBands || [], d.plotBands || []], function (b) {
        for (e = b.length; e--;) {
          b[e].id === a && oa(b, b[e]);
        }
      });
    } });W.prototype.getTimeTicks = function (a, b, c, d) {
    var e = [],
        f = {},
        g = L.global.useUTC,
        h,
        i = new Date(b - Ja),
        j = a.unitRange,
        k = a.count;if (t(b)) {
      j >= B.second && (i.setMilliseconds(0), i.setSeconds(j >= B.minute ? 0 : k * Q(i.getSeconds() / k)));if (j >= B.minute) i[Mb](j >= B.hour ? 0 : k * Q(i[wb]() / k));if (j >= B.hour) i[Nb](j >= B.day ? 0 : k * Q(i[xb]() / k));if (j >= B.day) i[zb](j >= B.month ? 1 : k * Q(i[Ua]() / k));j >= B.month && (i[Ob](j >= B.year ? 0 : k * Q(i[jb]() / k)), h = i[kb]());j >= B.year && (h -= h % k, i[Pb](h));if (j === B.week) i[zb](i[Ua]() - i[yb]() + o(d, 1));b = 1;Ja && (i = new Date(i.getTime() + Ja));h = i[kb]();for (var d = i.getTime(), l = i[jb](), m = i[Ua](), p = g ? Ja : (864E5 + i.getTimezoneOffset() * 6E4) % 864E5; d < c;) {
        e.push(d), j === B.year ? d = ib(h + b * k, 0) : j === B.month ? d = ib(h, l + b * k) : !g && (j === B.day || j === B.week) ? d = ib(h, l, m + b * k * (j === B.day ? 1 : 7)) : d += j * k, b++;
      }e.push(d);q(Fb(e, function (a) {
        return j <= B.hour && a % B.day === p;
      }), function (a) {
        f[a] = "day";
      });
    }e.info = u(a, { higherRanks: f, totalRange: j * k });return e;
  };W.prototype.normalizeTimeTickInterval = function (a, b) {
    var c = b || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]],
        d = c[c.length - 1],
        e = B[d[0]],
        f = d[1],
        g;for (g = 0; g < c.length; g++) {
      if (d = c[g], e = B[d[0]], f = d[1], c[g + 1] && a <= (e * f[f.length - 1] + B[c[g + 1][0]]) / 2) break;
    }e === B.year && a < 5 * e && (f = [1, 2, 5]);c = ub(a / e, f, d[0] === "year" ? s(tb(a / e), 1) : 1);return { unitRange: e, count: c, unitName: d[0] };
  };W.prototype.getLogTickPositions = function (a, b, c, d) {
    var e = this.options,
        f = this.len,
        g = [];if (!d) this._minorAutoInterval = null;if (a >= 0.5) a = v(a), g = this.getLinearTickPositions(a, b, c);else if (a >= 0.08) for (var f = Q(b), h, i, j, k, l, e = a > 0.3 ? [1, 2, 4] : a > 0.15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; f < c + 1 && !l; f++) {
      i = e.length;for (h = 0; h < i && !l; h++) {
        j = Ea(na(f) * e[h]), j > b && (!d || k <= c) && g.push(k), k > c && (l = !0), k = j;
      }
    } else if (b = na(b), c = na(c), a = e[d ? "minorTickInterval" : "tickInterval"], a = o(a === "auto" ? null : a, this._minorAutoInterval, (c - b) * (e.tickPixelInterval / (d ? 5 : 1)) / ((d ? f / this.tickPositions.length : f) || 1)), a = ub(a, null, tb(a)), g = Na(this.getLinearTickPositions(a, b, c), Ea), !d) this._minorAutoInterval = a / 5;if (!d) this.tickInterval = a;return g;
  };Ab.prototype = { init: function init(a, b) {
      var c = b.borderWidth,
          d = b.style,
          e = E(d.padding);this.chart = a;this.options = b;this.crosshairs = [];this.now = { x: 0, y: 0 };this.isHidden = !0;this.label = a.renderer.label("", 0, 0, b.shape, null, null, b.useHTML, null, "tooltip").attr({ padding: e, fill: b.backgroundColor, "stroke-width": c, r: b.borderRadius, zIndex: 8 }).css(d).css({ padding: 0 }).add().attr({ y: -999 });ka || this.label.shadow(b.shadow);this.shared = b.shared;
    }, destroy: function destroy() {
      if (this.label) this.label = this.label.destroy();clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout);
    }, move: function move(a, b, c, d) {
      var e = this,
          f = e.now,
          g = e.options.animation !== !1 && !e.isHidden;u(f, { x: g ? (2 * f.x + a) / 3 : a, y: g ? (f.y + b) / 2 : b, anchorX: g ? (2 * f.anchorX + c) / 3 : c, anchorY: g ? (f.anchorY + d) / 2 : d });e.label.attr(f);if (g && (O(a - f.x) > 1 || O(b - f.y) > 1)) clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
        e && e.move(a, b, c, d);
      }, 32);
    }, hide: function hide() {
      var a = this,
          b;clearTimeout(this.hideTimer);if (!this.isHidden) b = this.chart.hoverPoints, this.hideTimer = setTimeout(function () {
        a.label.fadeOut();a.isHidden = !0;
      }, o(this.options.hideDelay, 500)), b && q(b, function (a) {
        a.setState();
      }), this.chart.hoverPoints = null;
    }, getAnchor: function getAnchor(a, b) {
      var c,
          d = this.chart,
          e = d.inverted,
          f = d.plotTop,
          g = 0,
          h = 0,
          i,
          a = ja(a);c = a[0].tooltipPos;this.followPointer && b && (b.chartX === r && (b = d.pointer.normalize(b)), c = [b.chartX - d.plotLeft, b.chartY - f]);c || (q(a, function (a) {
        i = a.series.yAxis;g += a.plotX;h += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!e && i ? i.top - f : 0);
      }), g /= a.length, h /= a.length, c = [e ? d.plotWidth - h : g, this.shared && !e && a.length > 1 && b ? b.chartY - f : e ? d.plotHeight - g : h]);return Na(c, v);
    }, getPosition: function getPosition(a, b, c) {
      var d = this.chart,
          e = d.plotLeft,
          f = d.plotTop,
          g = d.plotWidth,
          h = d.plotHeight,
          i = o(this.options.distance, 12),
          j = c.plotX,
          c = c.plotY,
          d = j + e + (d.inverted ? i : -a - i),
          k = c - b + f + 15,
          l;d < 7 && (d = e + s(j, 0) + i);d + a > e + g && (d -= d + a - (e + g), k = c - b + f - i, l = !0);k < f + 5 && (k = f + 5, l && c >= k && c <= k + b && (k = c + f + i));k + b > f + h && (k = s(f, f + h - b - i));return { x: d, y: k };
    }, defaultFormatter: function defaultFormatter(a) {
      var b = this.points || ja(this),
          c = b[0].series,
          d;d = [c.tooltipHeaderFormatter(b[0])];q(b, function (a) {
        c = a.series;d.push(c.tooltipFormatter && c.tooltipFormatter(a) || a.point.tooltipFormatter(c.tooltipOptions.pointFormat));
      });
      d.push(a.options.footerFormat || "");return d.join("");
    }, refresh: function refresh(a, b) {
      var c = this.chart,
          d = this.label,
          e = this.options,
          f,
          g,
          h = {},
          i,
          j = [];i = e.formatter || this.defaultFormatter;var h = c.hoverPoints,
          k,
          l = this.shared;clearTimeout(this.hideTimer);this.followPointer = ja(a)[0].series.tooltipOptions.followPointer;g = this.getAnchor(a, b);f = g[0];g = g[1];l && (!a.series || !a.series.noSharedTooltip) ? (c.hoverPoints = a, h && q(h, function (a) {
        a.setState();
      }), q(a, function (a) {
        a.setState("hover");j.push(a.getLabelConfig());
      }), h = { x: a[0].category,
        y: a[0].y }, h.points = j, a = a[0]) : h = a.getLabelConfig();i = i.call(h, this);h = a.series;i === !1 ? this.hide() : (this.isHidden && (eb(d), d.attr("opacity", 1).show()), d.attr({ text: i }), k = e.borderColor || a.color || h.color || "#606060", d.attr({ stroke: k }), this.updatePosition({ plotX: f, plotY: g }), this.isHidden = !1);N(c, "tooltipRefresh", { text: i, x: f + c.plotLeft, y: g + c.plotTop, borderColor: k });
    }, updatePosition: function updatePosition(a) {
      var b = this.chart,
          c = this.label,
          c = (this.options.positioner || this.getPosition).call(this, c.width, c.height, a);this.move(v(c.x), v(c.y), a.plotX + b.plotLeft, a.plotY + b.plotTop);
    } };var $a = Highcharts.Pointer = function (a, b) {
    this.init(a, b);
  };$a.prototype = { init: function init(a, b) {
      var c = b.chart,
          d = c.events,
          e = ka ? "" : c.zoomType,
          c = a.inverted,
          f;this.options = b;this.chart = a;this.zoomX = f = /x/.test(e);this.zoomY = e = /y/.test(e);this.zoomHor = f && !c || e && c;this.zoomVert = e && !c || f && c;this.runChartClick = d && !!d.click;this.pinchDown = [];this.lastValidTouch = {};if (b.tooltip.enabled) a.tooltip = new Ab(a, b.tooltip);this.setDOMEvents();
    }, normalize: function normalize(a, b) {
      var c,
          d,
          a = a || V.event;if (!a.target) a.target = a.srcElement;a = bc(a);d = a.touches ? a.touches.item(0) : a;if (!b) this.chartPosition = b = ac(this.chart.container);d.pageX === r ? (c = s(a.x, a.clientX - b.left), d = a.y) : (c = d.pageX - b.left, d = d.pageY - b.top);return u(a, { chartX: v(c), chartY: v(d) });
    }, getCoordinates: function getCoordinates(a) {
      var b = { xAxis: [], yAxis: [] };q(this.chart.axes, function (c) {
        b[c.isXAxis ? "xAxis" : "yAxis"].push({ axis: c, value: c.toValue(a[c.horiz ? "chartX" : "chartY"]) });
      });return b;
    }, getIndex: function getIndex(a) {
      var b = this.chart;return b.inverted ? b.plotHeight + b.plotTop - a.chartY : a.chartX - b.plotLeft;
    }, runPointActions: function runPointActions(a) {
      var b = this,
          c = b.chart,
          d = c.series,
          e = c.tooltip,
          f,
          g,
          h = c.hoverPoint,
          i = c.hoverSeries,
          j,
          k,
          l = c.chartWidth,
          m = b.getIndex(a);if (e && b.options.tooltip.shared && (!i || !i.noSharedTooltip)) {
        g = [];j = d.length;for (k = 0; k < j; k++) {
          if (d[k].visible && d[k].options.enableMouseTracking !== !1 && !d[k].noSharedTooltip && d[k].tooltipPoints.length && (f = d[k].tooltipPoints[m]) && f.series) f._dist = O(m - f.clientX), l = y(l, f._dist), g.push(f);
        }for (j = g.length; j--;) {
          g[j]._dist > l && g.splice(j, 1);
        }if (g.length && g[0].clientX !== b.hoverX) e.refresh(g, a), b.hoverX = g[0].clientX;
      }if (i && i.tracker) {
        if ((f = i.tooltipPoints[m]) && f !== h) f.onMouseOver(a);
      } else e && e.followPointer && !e.isHidden && (d = e.getAnchor([{}], a), e.updatePosition({ plotX: d[0], plotY: d[1] }));if (e && !b._onDocumentMouseMove) b._onDocumentMouseMove = function (a) {
        b.onDocumentMouseMove(a);
      }, A(F, "mousemove", b._onDocumentMouseMove);q(c.axes, function (b) {
        b.drawCrosshair(a, o(f, h));
      });
    }, reset: function reset(a) {
      var b = this.chart,
          c = b.hoverSeries,
          d = b.hoverPoint,
          e = b.tooltip,
          f = e && e.shared ? b.hoverPoints : d;(a = a && e && f) && ja(f)[0].plotX === r && (a = !1);if (a) e.refresh(f), d && d.setState(d.state, !0);else {
        if (d) d.onMouseOut();if (c) c.onMouseOut();e && e.hide();if (this._onDocumentMouseMove) X(F, "mousemove", this._onDocumentMouseMove), this._onDocumentMouseMove = null;q(b.axes, function (a) {
          a.hideCrosshair();
        });this.hoverX = null;
      }
    }, scaleGroups: function scaleGroups(a, b) {
      var c = this.chart,
          d;q(c.series, function (e) {
        d = a || e.getPlotBox();e.xAxis && e.xAxis.zoomEnabled && (e.group.attr(d), e.markerGroup && (e.markerGroup.attr(d), e.markerGroup.clip(b ? c.clipRect : null)), e.dataLabelsGroup && e.dataLabelsGroup.attr(d));
      });c.clipRect.attr(b || c.clipBox);
    }, pinchTranslate: function pinchTranslate(a, b, c, d, e, f, g, h) {
      a && this.pinchTranslateDirection(!0, c, d, e, f, g, h);b && this.pinchTranslateDirection(!1, c, d, e, f, g, h);
    }, pinchTranslateDirection: function pinchTranslateDirection(a, b, c, d, e, f, g, h) {
      var i = this.chart,
          j = a ? "x" : "y",
          k = a ? "X" : "Y",
          l = "chart" + k,
          m = a ? "width" : "height",
          p = i["plot" + (a ? "Left" : "Top")],
          n,
          o,
          q = h || 1,
          x = i.inverted,
          s = i.bounds[a ? "h" : "v"],
          r = b.length === 1,
          v = b[0][l],
          t = c[0][l],
          u = !r && b[1][l],
          w = !r && c[1][l],
          y,
          c = function c() {
        !r && O(v - u) > 20 && (q = h || O(t - w) / O(v - u));o = (p - t) / q + v;n = i["plot" + (a ? "Width" : "Height")] / q;
      };c();b = o;b < s.min ? (b = s.min, y = !0) : b + n > s.max && (b = s.max - n, y = !0);y ? (t -= 0.8 * (t - g[j][0]), r || (w -= 0.8 * (w - g[j][1])), c()) : g[j] = [t, w];x || (f[j] = o - p, f[m] = n);f = x ? 1 / q : q;e[m] = n;e[j] = b;d[x ? a ? "scaleY" : "scaleX" : "scale" + k] = q;d["translate" + k] = f * p + (t - f * v);
    }, pinch: function pinch(a) {
      var b = this,
          c = b.chart,
          d = b.pinchDown,
          e = c.tooltip && c.tooltip.options.followTouchMove,
          f = a.touches,
          g = f.length,
          h = b.lastValidTouch,
          i = b.zoomHor || b.pinchHor,
          j = b.zoomVert || b.pinchVert,
          k = i || j,
          l = b.selectionMarker,
          m = {},
          p = g === 1 && (b.inClass(a.target, "highcharts-tracker") && c.runTrackerClick || c.runChartClick),
          n = {};(k || e) && !p && a.preventDefault();Na(f, function (a) {
        return b.normalize(a);
      });if (a.type === "touchstart") q(f, function (a, b) {
        d[b] = { chartX: a.chartX, chartY: a.chartY };
      }), h.x = [d[0].chartX, d[1] && d[1].chartX], h.y = [d[0].chartY, d[1] && d[1].chartY], q(c.axes, function (a) {
        if (a.zoomEnabled) {
          var b = c.bounds[a.horiz ? "h" : "v"],
              d = a.minPixelPadding,
              e = a.toPixels(a.dataMin),
              f = a.toPixels(a.dataMax),
              g = y(e, f),
              e = s(e, f);b.min = y(a.pos, g - d);b.max = s(a.pos + a.len, e + d);
        }
      });else if (d.length) {
        if (!l) b.selectionMarker = l = u({ destroy: la }, c.plotBox);b.pinchTranslate(i, j, d, f, m, l, n, h);b.hasPinched = k;b.scaleGroups(m, n);!k && e && g === 1 && this.runPointActions(b.normalize(a));
      }
    }, dragStart: function dragStart(a) {
      var b = this.chart;b.mouseIsDown = a.type;b.cancelClick = !1;b.mouseDownX = this.mouseDownX = a.chartX;b.mouseDownY = this.mouseDownY = a.chartY;
    }, drag: function drag(a) {
      var b = this.chart,
          c = b.options.chart,
          d = a.chartX,
          e = a.chartY,
          f = this.zoomHor,
          g = this.zoomVert,
          h = b.plotLeft,
          i = b.plotTop,
          j = b.plotWidth,
          k = b.plotHeight,
          l,
          m = this.mouseDownX,
          p = this.mouseDownY;d < h ? d = h : d > h + j && (d = h + j);e < i ? e = i : e > i + k && (e = i + k);this.hasDragged = Math.sqrt(Math.pow(m - d, 2) + Math.pow(p - e, 2));if (this.hasDragged > 10) {
        l = b.isInsidePlot(m - h, p - i);if (b.hasCartesianSeries && (this.zoomX || this.zoomY) && l && !this.selectionMarker) this.selectionMarker = b.renderer.rect(h, i, f ? 1 : j, g ? 1 : k, 0).attr({ fill: c.selectionMarkerFill || "rgba(69,114,167,0.25)", zIndex: 7 }).add();this.selectionMarker && f && (d -= m, this.selectionMarker.attr({ width: O(d), x: (d > 0 ? 0 : d) + m }));this.selectionMarker && g && (d = e - p, this.selectionMarker.attr({ height: O(d), y: (d > 0 ? 0 : d) + p }));l && !this.selectionMarker && c.panning && b.pan(a, c.panning);
      }
    }, drop: function drop(a) {
      var b = this.chart,
          c = this.hasPinched;if (this.selectionMarker) {
        var d = { xAxis: [], yAxis: [], originalEvent: a.originalEvent || a },
            e = this.selectionMarker,
            f = e.x,
            g = e.y,
            h;if (this.hasDragged || c) q(b.axes, function (a) {
          if (a.zoomEnabled) {
            var b = a.horiz,
                c = a.toValue(b ? f : g),
                b = a.toValue(b ? f + e.width : g + e.height);!isNaN(c) && !isNaN(b) && (d[a.coll].push({ axis: a, min: y(c, b), max: s(c, b) }), h = !0);
          }
        }), h && N(b, "selection", d, function (a) {
          b.zoom(u(a, c ? { animation: !1 } : null));
        });this.selectionMarker = this.selectionMarker.destroy();c && this.scaleGroups();
      }if (b) z(b.container, { cursor: b._cursor }), b.cancelClick = this.hasDragged > 10, b.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [];
    }, onContainerMouseDown: function onContainerMouseDown(a) {
      a = this.normalize(a);a.preventDefault && a.preventDefault();this.dragStart(a);
    }, onDocumentMouseUp: function onDocumentMouseUp(a) {
      this.drop(a);
    },
    onDocumentMouseMove: function onDocumentMouseMove(a) {
      var b = this.chart,
          c = this.chartPosition,
          d = b.hoverSeries,
          a = this.normalize(a, c);c && d && !this.inClass(a.target, "highcharts-tracker") && !b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) && this.reset();
    }, onContainerMouseLeave: function onContainerMouseLeave() {
      this.reset();this.chartPosition = null;
    }, onContainerMouseMove: function onContainerMouseMove(a) {
      var b = this.chart,
          a = this.normalize(a);b.mouseIsDown === "mousedown" && this.drag(a);(this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop)) && !b.openMenu && this.runPointActions(a);
    }, inClass: function inClass(a, b) {
      for (var c; a;) {
        if (c = H(a, "class")) if (c.indexOf(b) !== -1) return !0;else if (c.indexOf("highcharts-container") !== -1) return !1;a = a.parentNode;
      }
    }, onTrackerMouseOut: function onTrackerMouseOut(a) {
      var b = this.chart.hoverSeries,
          c = (a = a.relatedTarget || a.toElement) && a.point && a.point.series;if (b && !b.options.stickyTracking && !this.inClass(a, "highcharts-tooltip") && c !== b) b.onMouseOut();
    }, onContainerClick: function onContainerClick(a) {
      var b = this.chart,
          c = b.hoverPoint,
          d = b.plotLeft,
          e = b.plotTop,
          f = b.inverted,
          g,
          h,
          i,
          a = this.normalize(a);a.cancelBubble = !0;if (!b.cancelClick) c && this.inClass(a.target, "highcharts-tracker") ? (g = this.chartPosition, h = c.plotX, i = c.plotY, u(c, { pageX: g.left + d + (f ? b.plotWidth - i : h), pageY: g.top + e + (f ? b.plotHeight - h : i) }), N(c.series, "click", u(a, { point: c })), b.hoverPoint && c.firePointEvent("click", a)) : (u(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX - d, a.chartY - e) && N(b, "click", a));
    }, onContainerTouchStart: function onContainerTouchStart(a) {
      var b = this.chart;a.touches.length === 1 ? (a = this.normalize(a), b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) ? (this.runPointActions(a), this.pinch(a)) : this.reset()) : a.touches.length === 2 && this.pinch(a);
    }, onContainerTouchMove: function onContainerTouchMove(a) {
      (a.touches.length === 1 || a.touches.length === 2) && this.pinch(a);
    }, onDocumentTouchEnd: function onDocumentTouchEnd(a) {
      this.drop(a);
    }, setDOMEvents: function setDOMEvents() {
      var a = this,
          b = a.chart.container,
          c;this._events = c = [[b, "onmousedown", "onContainerMouseDown"], [b, "onmousemove", "onContainerMouseMove"], [b, "onclick", "onContainerClick"], [b, "mouseleave", "onContainerMouseLeave"], [F, "mouseup", "onDocumentMouseUp"]];db && c.push([b, "ontouchstart", "onContainerTouchStart"], [b, "ontouchmove", "onContainerTouchMove"], [F, "touchend", "onDocumentTouchEnd"]);q(c, function (b) {
        a["_" + b[2]] = function (c) {
          a[b[2]](c);
        };b[1].indexOf("on") === 0 ? b[0][b[1]] = a["_" + b[2]] : A(b[0], b[1], a["_" + b[2]]);
      });
    }, destroy: function destroy() {
      var a = this;q(a._events, function (b) {
        b[1].indexOf("on") === 0 ? b[0][b[1]] = null : X(b[0], b[1], a["_" + b[2]]);
      });delete a._events;clearInterval(a.tooltipTimeout);
    } };var fb = Highcharts.TrackerMixin = { drawTrackerPoint: function drawTrackerPoint() {
      var a = this,
          b = a.chart,
          c = b.pointer,
          d = a.options.cursor,
          e = d && { cursor: d },
          f = function f(c) {
        var d = c.target,
            e;if (b.hoverSeries !== a) a.onMouseOver();for (; d && !e;) {
          e = d.point, d = d.parentNode;
        }if (e !== r && e !== b.hoverPoint) e.onMouseOver(c);
      };q(a.points, function (a) {
        if (a.graphic) a.graphic.element.point = a;if (a.dataLabel) a.dataLabel.element.point = a;
      });if (!a._hasTracking) q(a.trackerGroups, function (b) {
        if (a[b] && (a[b].addClass("highcharts-tracker").on("mouseover", f).on("mouseout", function (a) {
          c.onTrackerMouseOut(a);
        }).css(e), db)) a[b].on("touchstart", f);
      }), a._hasTracking = !0;
    }, drawTrackerGraph: function drawTrackerGraph() {
      var a = this,
          b = a.options,
          c = b.trackByArea,
          d = [].concat(c ? a.areaPath : a.graphPath),
          e = d.length,
          f = a.chart,
          g = f.pointer,
          h = f.renderer,
          i = f.options.tooltip.snap,
          j = a.tracker,
          k = b.cursor,
          l = k && { cursor: k },
          k = a.singlePoints,
          m,
          p = function p() {
        if (f.hoverSeries !== a) a.onMouseOver();
      };if (e && !c) for (m = e + 1; m--;) {
        d[m] === "M" && d.splice(m + 1, 0, d[m + 1] - i, d[m + 2], "L"), (m && d[m] === "M" || m === e) && d.splice(m, 0, "L", d[m - 2] + i, d[m - 1]);
      }for (m = 0; m < k.length; m++) {
        e = k[m], d.push("M", e.plotX - i, e.plotY, "L", e.plotX + i, e.plotY);
      }j ? j.attr({ d: d }) : (a.tracker = h.path(d).attr({ "stroke-linejoin": "round", visibility: a.visible ? "visible" : "hidden", stroke: Tb, fill: c ? Tb : ba, "stroke-width": b.lineWidth + (c ? 0 : 2 * i), zIndex: 2 }).add(a.group), q([a.tracker, a.markerGroup], function (a) {
        a.addClass("highcharts-tracker").on("mouseover", p).on("mouseout", function (a) {
          g.onTrackerMouseOut(a);
        }).css(l);if (db) a.on("touchstart", p);
      }));
    } };if (V.PointerEvent || V.MSPointerEvent) {
    var ta = {};$a.prototype.getWebkitTouches = function () {
      var a,
          b = [];b.item = function (a) {
        return this[a];
      };
      for (a in ta) {
        ta.hasOwnProperty(a) && b.push({ pageX: ta[a].pageX, pageY: ta[a].pageY, target: ta[a].target });
      }return b;
    };U($a.prototype, "init", function (a, b, c) {
      b.container.style["-ms-touch-action"] = b.container.style["touch-action"] = "none";a.call(this, b, c);
    });U($a.prototype, "setDOMEvents", function (a) {
      var b = this;a.apply(this, Array.prototype.slice.call(arguments, 1));q([[this.chart.container, "PointerDown", "touchstart", "onContainerTouchStart", function (a) {
        ta[a.pointerId] = { pageX: a.pageX, pageY: a.pageY, target: a.currentTarget };
      }], [this.chart.container, "PointerMove", "touchmove", "onContainerTouchMove", function (a) {
        ta[a.pointerId] = { pageX: a.pageX, pageY: a.pageY };if (!ta[a.pointerId].target) ta[a.pointerId].target = a.currentTarget;
      }], [document, "PointerUp", "touchend", "onDocumentTouchEnd", function (a) {
        delete ta[a.pointerId];
      }]], function (a) {
        A(a[0], window.PointerEvent ? a[1].toLowerCase() : "MS" + a[1], function (d) {
          d = d.originalEvent;if (d.pointerType === "touch" || d.pointerType === d.MSPOINTER_TYPE_TOUCH) a[4](d), b[a[3]]({ type: a[2], target: d.currentTarget,
            preventDefault: la, touches: b.getWebkitTouches() });
        });
      });
    });
  }var Jb = Highcharts.Legend = function (a, b) {
    this.init(a, b);
  };Jb.prototype = { init: function init(a, b) {
      var c = this,
          d = b.itemStyle,
          e = o(b.padding, 8),
          f = b.itemMarginTop || 0;this.options = b;if (b.enabled) c.baseline = E(d.fontSize) + 3 + f, c.itemStyle = d, c.itemHiddenStyle = w(d, b.itemHiddenStyle), c.itemMarginTop = f, c.padding = e, c.initialItemX = e, c.initialItemY = e - 5, c.maxItemWidth = 0, c.chart = a, c.itemHeight = 0, c.lastLineHeight = 0, c.symbolWidth = o(b.symbolWidth, 16), c.pages = [], c.render(), A(c.chart, "endResize", function () {
        c.positionCheckboxes();
      });
    }, colorizeItem: function colorizeItem(a, b) {
      var c = this.options,
          d = a.legendItem,
          e = a.legendLine,
          f = a.legendSymbol,
          g = this.itemHiddenStyle.color,
          c = b ? c.itemStyle.color : g,
          h = b ? a.legendColor || a.color : g,
          g = a.options && a.options.marker,
          i = { stroke: h, fill: h },
          j;d && d.css({ fill: c, color: c });e && e.attr({ stroke: h });if (f) {
        if (g && f.isMarker) for (j in g = a.convertAttribs(g), g) {
          d = g[j], d !== r && (i[j] = d);
        }f.attr(i);
      }
    }, positionItem: function positionItem(a) {
      var b = this.options,
          c = b.symbolPadding,
          b = !b.rtl,
          d = a._legendItemPos,
          e = d[0],
          d = d[1],
          f = a.checkbox;a.legendGroup && a.legendGroup.translate(b ? e : this.legendWidth - e - 2 * c - 4, d);if (f) f.x = e, f.y = d;
    }, destroyItem: function destroyItem(a) {
      var b = a.checkbox;q(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function (b) {
        a[b] && (a[b] = a[b].destroy());
      });b && Sa(a.checkbox);
    }, destroy: function destroy() {
      var a = this.group,
          b = this.box;if (b) this.box = b.destroy();if (a) this.group = a.destroy();
    }, positionCheckboxes: function positionCheckboxes(a) {
      var b = this.group.alignAttr,
          c,
          d = this.clipHeight || this.legendHeight;if (b) c = b.translateY, q(this.allItems, function (e) {
        var f = e.checkbox,
            g;f && (g = c + f.y + (a || 0) + 3, z(f, { left: b.translateX + e.legendItemWidth + f.x - 20 + "px", top: g + "px", display: g > c - 6 && g < c + d - 6 ? "" : ba }));
      });
    }, renderTitle: function renderTitle() {
      var a = this.padding,
          b = this.options.title,
          c = 0;if (b.text) {
        if (!this.title) this.title = this.chart.renderer.label(b.text, a - 3, a - 4, null, null, null, null, null, "legend-title").attr({ zIndex: 1 }).css(b.style).add(this.group);a = this.title.getBBox();c = a.height;this.offsetWidth = a.width;this.contentGroup.attr({ translateY: c });
      }this.titleHeight = c;
    },
    renderItem: function renderItem(a) {
      var C;var b = this,
          c = b.chart,
          d = c.renderer,
          e = b.options,
          f = e.layout === "horizontal",
          g = b.symbolWidth,
          h = e.symbolPadding,
          i = b.itemStyle,
          j = b.itemHiddenStyle,
          k = b.padding,
          l = f ? o(e.itemDistance, 8) : 0,
          m = !e.rtl,
          p = e.width,
          n = e.itemMarginBottom || 0,
          q = b.itemMarginTop,
          J = b.initialItemX,
          x = a.legendItem,
          r = a.series && a.series.drawLegendSymbol ? a.series : a,
          t = r.options,
          t = t && t.showCheckbox,
          u = e.useHTML;if (!x && (a.legendGroup = d.g("legend-item").attr({ zIndex: 1 }).add(b.scrollGroup), r.drawLegendSymbol(b, a), a.legendItem = x = d.text(e.labelFormat ? Ha(e.labelFormat, a) : e.labelFormatter.call(a), m ? g + h : -h, b.baseline, u).css(w(a.visible ? i : j)).attr({ align: m ? "left" : "right", zIndex: 2 }).add(a.legendGroup), (u ? x : a.legendGroup).on("mouseover", function () {
        a.setState("hover");x.css(b.options.itemHoverStyle);
      }).on("mouseout", function () {
        x.css(a.visible ? i : j);a.setState();
      }).on("click", function (b) {
        var c = function c() {
          a.setVisible();
        },
            b = { browserEvent: b };a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : N(a, "legendItemClick", b, c);
      }), b.colorizeItem(a, a.visible), t)) a.checkbox = Z("input", { type: "checkbox", checked: a.selected, defaultChecked: a.selected }, e.itemCheckboxStyle, c.container), A(a.checkbox, "click", function (b) {
        N(a, "checkboxClick", { checked: b.target.checked }, function () {
          a.select();
        });
      });d = x.getBBox();C = a.legendItemWidth = e.itemWidth || a.legendItemWidth || g + h + d.width + l + (t ? 20 : 0), e = C;b.itemHeight = g = v(a.legendItemHeight || d.height);if (f && b.itemX - J + e > (p || c.chartWidth - 2 * k - J)) b.itemX = J, b.itemY += q + b.lastLineHeight + n, b.lastLineHeight = 0;b.maxItemWidth = s(b.maxItemWidth, e);b.lastItemY = q + b.itemY + n;b.lastLineHeight = s(g, b.lastLineHeight);a._legendItemPos = [b.itemX, b.itemY];f ? b.itemX += e : (b.itemY += q + g + n, b.lastLineHeight = g);b.offsetWidth = p || s((f ? b.itemX - J - l : e) + k, b.offsetWidth);
    }, getAllItems: function getAllItems() {
      var a = [];q(this.chart.series, function (b) {
        var c = b.options;if (o(c.showInLegend, !t(c.linkedTo) ? r : !1, !0)) a = a.concat(b.legendItems || (c.legendType === "point" ? b.data : b));
      });return a;
    }, render: function render() {
      var a = this,
          b = a.chart,
          c = b.renderer,
          d = a.group,
          e,
          f,
          g,
          h,
          i = a.box,
          j = a.options,
          k = a.padding,
          l = j.borderWidth,
          m = j.backgroundColor;a.itemX = a.initialItemX;a.itemY = a.initialItemY;a.offsetWidth = 0;a.lastItemY = 0;if (!d) a.group = d = c.g("legend").attr({ zIndex: 7 }).add(), a.contentGroup = c.g().attr({ zIndex: 1 }).add(d), a.scrollGroup = c.g().add(a.contentGroup);a.renderTitle();e = a.getAllItems();vb(e, function (a, b) {
        return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0);
      });j.reversed && e.reverse();a.allItems = e;a.display = f = !!e.length;q(e, function (b) {
        a.renderItem(b);
      });g = j.width || a.offsetWidth;
      h = a.lastItemY + a.lastLineHeight + a.titleHeight;h = a.handleOverflow(h);if (l || m) {
        g += k;h += k;if (i) {
          if (g > 0 && h > 0) i[i.isNew ? "attr" : "animate"](i.crisp(null, null, null, g, h)), i.isNew = !1;
        } else a.box = i = c.rect(0, 0, g, h, j.borderRadius, l || 0).attr({ stroke: j.borderColor, "stroke-width": l || 0, fill: m || ba }).add(d).shadow(j.shadow), i.isNew = !0;i[f ? "show" : "hide"]();
      }a.legendWidth = g;a.legendHeight = h;q(e, function (b) {
        a.positionItem(b);
      });f && d.align(u({ width: g, height: h }, j), !0, "spacingBox");b.isResizing || this.positionCheckboxes();
    }, handleOverflow: function handleOverflow(a) {
      var b = this,
          c = this.chart,
          d = c.renderer,
          e = this.options,
          f = e.y,
          f = c.spacingBox.height + (e.verticalAlign === "top" ? -f : f) - this.padding,
          g = e.maxHeight,
          h,
          i = this.clipRect,
          j = e.navigation,
          k = o(j.animation, !0),
          l = j.arrowSize || 12,
          m = this.nav,
          p = this.pages,
          n,
          $ = this.allItems;e.layout === "horizontal" && (f /= 2);g && (f = y(f, g));p.length = 0;if (a > f && !e.useHTML) {
        this.clipHeight = h = f - 20 - this.titleHeight - this.padding;this.currentPage = o(this.currentPage, 1);this.fullHeight = a;q($, function (a, b) {
          var c = a._legendItemPos[1],
              d = v(a.legendItem.bBox.height),
              e = p.length;if (!e || c - p[e - 1] > h) p.push(n || c);b === $.length - 1 && c + d - p[e - 1] > h && p.push(c);c !== n && (n = c);
        });if (!i) i = b.clipRect = d.clipRect(0, this.padding, 9999, 0), b.contentGroup.clip(i);i.attr({ height: h });if (!m) this.nav = m = d.g().attr({ zIndex: 1 }).add(this.group), this.up = d.symbol("triangle", 0, 0, l, l).on("click", function () {
          b.scroll(-1, k);
        }).add(m), this.pager = d.text("", 15, 10).css(j.style).add(m), this.down = d.symbol("triangle-down", 0, 0, l, l).on("click", function () {
          b.scroll(1, k);
        }).add(m);b.scroll(0);a = f;
      } else if (m) i.attr({ height: c.chartHeight }), m.hide(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0;return a;
    }, scroll: function scroll(a, b) {
      var c = this.pages,
          d = c.length,
          e = this.currentPage + a,
          f = this.clipHeight,
          g = this.options.navigation,
          h = g.activeColor,
          g = g.inactiveColor,
          i = this.pager,
          j = this.padding;e > d && (e = d);if (e > 0) b !== r && Xa(b, this.chart), this.nav.attr({ translateX: j, translateY: f + this.padding + 7 + this.titleHeight, visibility: "visible" }), this.up.attr({ fill: e === 1 ? g : h }).css({ cursor: e === 1 ? "default" : "pointer" }), i.attr({ text: e + "/" + d }), this.down.attr({ x: 18 + this.pager.getBBox().width, fill: e === d ? g : h }).css({ cursor: e === d ? "default" : "pointer" }), c = -c[e - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: c }), this.currentPage = e, this.positionCheckboxes(c);
    } };K = Highcharts.LegendSymbolMixin = { drawRectangle: function drawRectangle(a, b) {
      var c = a.options.symbolHeight || 12;b.legendSymbol = this.chart.renderer.rect(0, a.baseline - 5 - c / 2, a.symbolWidth, c, o(a.options.symbolRadius, 2)).attr({ zIndex: 3 }).add(b.legendGroup);
    }, drawLineMarker: function drawLineMarker(a) {
      var b = this.options,
          c = b.marker,
          d;d = a.symbolWidth;
      var e = this.chart.renderer,
          f = this.legendGroup,
          a = a.baseline - v(e.fontMetrics(a.options.itemStyle.fontSize).b * 0.3),
          g;if (b.lineWidth) {
        g = { "stroke-width": b.lineWidth };if (b.dashStyle) g.dashstyle = b.dashStyle;this.legendLine = e.path(["M", 0, a, "L", d, a]).attr(g).add(f);
      }if (c && c.enabled) b = c.radius, this.legendSymbol = d = e.symbol(this.symbol, d / 2 - b, a - b, 2 * b, 2 * b).add(f), d.isMarker = !0;
    } };/Trident\/7\.0/.test(za) && U(Jb.prototype, "positionItem", function (a, b) {
    var c = this,
        d = function d() {
      b._legendItemPos && a.call(c, b);
    };c.chart.renderer.forExport ? d() : setTimeout(d);
  });ya.prototype = { init: function init(a, b) {
      var c,
          d = a.series;a.series = null;c = w(L, a);c.series = a.series = d;this.userOptions = a;d = c.chart;this.margin = this.splashArray("margin", d);this.spacing = this.splashArray("spacing", d);var e = d.events;this.bounds = { h: {}, v: {} };this.callback = b;this.isResizing = 0;this.options = c;this.axes = [];this.series = [];this.hasCartesianSeries = d.showAxes;var f = this,
          g;f.index = Wa.length;Wa.push(f);d.reflow !== !1 && A(f, "load", function () {
        f.initReflow();
      });if (e) for (g in e) {
        A(f, g, e[g]);
      }f.xAxis = [];f.yAxis = [];f.animation = ka ? !1 : o(d.animation, !0);f.pointCount = 0;f.counters = new Kb();f.firstRender();
    }, initSeries: function initSeries(a) {
      var b = this.options.chart;(b = D[a.type || b.type || b.defaultSeriesType]) || pa(17, !0);b = new b();b.init(this, a);return b;
    }, isInsidePlot: function isInsidePlot(a, b, c) {
      var d = c ? b : a,
          a = c ? a : b;return d >= 0 && d <= this.plotWidth && a >= 0 && a <= this.plotHeight;
    }, adjustTickAmounts: function adjustTickAmounts() {
      this.options.chart.alignTicks !== !1 && q(this.axes, function (a) {
        a.adjustTickAmount();
      });this.maxTicks = null;
    }, redraw: function redraw(a) {
      var b = this.axes,
          c = this.series,
          d = this.pointer,
          e = this.legend,
          f = this.isDirtyLegend,
          g,
          h,
          i = this.isDirtyBox,
          j = c.length,
          k = j,
          l = this.renderer,
          m = l.isHidden(),
          p = [];Xa(a, this);m && this.cloneRenderTo();for (this.layOutTitles(); k--;) {
        if (a = c[k], a.options.stacking && (g = !0, a.isDirty)) {
          h = !0;break;
        }
      }if (h) for (k = j; k--;) {
        if (a = c[k], a.options.stacking) a.isDirty = !0;
      }q(c, function (a) {
        a.isDirty && a.options.legendType === "point" && (f = !0);
      });if (f && e.options.enabled) e.render(), this.isDirtyLegend = !1;g && this.getStacks();if (this.hasCartesianSeries) {
        if (!this.isResizing) this.maxTicks = null, q(b, function (a) {
          a.setScale();
        });this.adjustTickAmounts();this.getMargins();q(b, function (a) {
          a.isDirty && (i = !0);
        });q(b, function (a) {
          if (a.isDirtyExtremes) a.isDirtyExtremes = !1, p.push(function () {
            N(a, "afterSetExtremes", u(a.eventArgs, a.getExtremes()));delete a.eventArgs;
          });(i || g) && a.redraw();
        });
      }i && this.drawChartBox();q(c, function (a) {
        a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw();
      });d && d.reset && d.reset(!0);l.draw();N(this, "redraw");m && this.cloneRenderTo(!0);q(p, function (a) {
        a.call();
      });
    }, get: function get(a) {
      var b = this.axes,
          c = this.series,
          d,
          e;for (d = 0; d < b.length; d++) {
        if (b[d].options.id === a) return b[d];
      }for (d = 0; d < c.length; d++) {
        if (c[d].options.id === a) return c[d];
      }for (d = 0; d < c.length; d++) {
        e = c[d].points || [];for (b = 0; b < e.length; b++) {
          if (e[b].id === a) return e[b];
        }
      }return null;
    }, getAxes: function getAxes() {
      var a = this,
          b = this.options,
          c = b.xAxis = ja(b.xAxis || {}),
          b = b.yAxis = ja(b.yAxis || {});q(c, function (a, b) {
        a.index = b;a.isX = !0;
      });q(b, function (a, b) {
        a.index = b;
      });c = c.concat(b);q(c, function (b) {
        new W(a, b);
      });a.adjustTickAmounts();
    }, getSelectedPoints: function getSelectedPoints() {
      var a = [];q(this.series, function (b) {
        a = a.concat(Fb(b.points || [], function (a) {
          return a.selected;
        }));
      });return a;
    }, getSelectedSeries: function getSelectedSeries() {
      return Fb(this.series, function (a) {
        return a.selected;
      });
    }, getStacks: function getStacks() {
      var a = this;q(a.yAxis, function (a) {
        if (a.stacks && a.hasVisibleSeries) a.oldStacks = a.stacks;
      });q(a.series, function (b) {
        if (b.options.stacking && (b.visible === !0 || a.options.chart.ignoreHiddenSeries === !1)) b.stackKey = b.type + o(b.options.stack, "");
      });
    }, showResetZoom: function showResetZoom() {
      var a = this,
          b = L.lang,
          c = a.options.chart.resetZoomButton,
          d = c.theme,
          e = d.states,
          f = c.relativeTo === "chart" ? null : "plotBox";this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function () {
        a.zoomOut();
      }, d, e && e.hover).attr({ align: c.position.align, title: b.resetZoomTitle }).add().align(c.position, !1, f);
    }, zoomOut: function zoomOut() {
      var a = this;N(a, "selection", { resetSelection: !0 }, function () {
        a.zoom();
      });
    }, zoom: function zoom(a) {
      var b,
          c = this.pointer,
          d = !1,
          e;!a || a.resetSelection ? q(this.axes, function (a) {
        b = a.zoom();
      }) : q(a.xAxis.concat(a.yAxis), function (a) {
        var e = a.axis,
            h = e.isXAxis;if (c[h ? "zoomX" : "zoomY"] || c[h ? "pinchX" : "pinchY"]) b = e.zoom(a.min, a.max), e.displayBtn && (d = !0);
      });e = this.resetZoomButton;if (d && !e) this.showResetZoom();else if (!d && aa(e)) this.resetZoomButton = e.destroy();b && this.redraw(o(this.options.chart.animation, a && a.animation, this.pointCount < 100));
    }, pan: function pan(a, b) {
      var c = this,
          d = c.hoverPoints,
          e;d && q(d, function (a) {
        a.setState();
      });q(b === "xy" ? [1, 0] : [1], function (b) {
        var d = a[b ? "chartX" : "chartY"],
            h = c[b ? "xAxis" : "yAxis"][0],
            i = c[b ? "mouseDownX" : "mouseDownY"],
            j = (h.pointRange || 0) / 2,
            k = h.getExtremes(),
            l = h.toValue(i - d, !0) + j,
            i = h.toValue(i + c[b ? "plotWidth" : "plotHeight"] - d, !0) - j;h.series.length && l > y(k.dataMin, k.min) && i < s(k.dataMax, k.max) && (h.setExtremes(l, i, !1, !1, { trigger: "pan" }), e = !0);c[b ? "mouseDownX" : "mouseDownY"] = d;
      });e && c.redraw(!1);z(c.container, { cursor: "move" });
    }, setTitle: function setTitle(a, b) {
      var f;var c = this,
          d = c.options,
          e;e = d.title = w(d.title, a);f = d.subtitle = w(d.subtitle, b), d = f;q([["title", a, e], ["subtitle", b, d]], function (a) {
        var b = a[0],
            d = c[b],
            e = a[1],
            a = a[2];d && e && (c[b] = d = d.destroy());a && a.text && !d && (c[b] = c.renderer.text(a.text, 0, 0, a.useHTML).attr({ align: a.align, "class": "highcharts-" + b, zIndex: a.zIndex || 4 }).css(a.style).add());
      });c.layOutTitles();
    }, layOutTitles: function layOutTitles() {
      var a = 0,
          b = this.title,
          c = this.subtitle,
          d = this.options,
          e = d.title,
          d = d.subtitle,
          f = this.spacingBox.width - 44;if (b && (b.css({ width: (e.width || f) + "px" }).align(u({ y: 15 }, e), !1, "spacingBox"), !e.floating && !e.verticalAlign)) a = b.getBBox().height, a >= 18 && a <= 25 && (a = 15);c && (c.css({ width: (d.width || f) + "px" }).align(u({ y: a + e.margin }, d), !1, "spacingBox"), !d.floating && !d.verticalAlign && (a = Va(a + c.getBBox().height)));this.titleOffset = a;
    }, getChartSize: function getChartSize() {
      var a = this.options.chart,
          b = this.renderToClone || this.renderTo;this.containerWidth = nb(b, "width");this.containerHeight = nb(b, "height");this.chartWidth = s(0, a.width || this.containerWidth || 600);this.chartHeight = s(0, o(a.height, this.containerHeight > 19 ? this.containerHeight : 400));
    }, cloneRenderTo: function cloneRenderTo(a) {
      var b = this.renderToClone,
          c = this.container;a ? b && (this.renderTo.appendChild(c), Sa(b), delete this.renderToClone) : (c && c.parentNode === this.renderTo && this.renderTo.removeChild(c), this.renderToClone = b = this.renderTo.cloneNode(0), z(b, { position: "absolute", top: "-9999px", display: "block" }), F.body.appendChild(b), c && b.appendChild(c));
    }, getContainer: function getContainer() {
      var a,
          b = this.options.chart,
          c,
          d,
          e;this.renderTo = a = b.renderTo;e = "highcharts-" + Db++;if (ma(a)) this.renderTo = a = F.getElementById(a);a || pa(13, !0);c = E(H(a, "data-highcharts-chart"));!isNaN(c) && Wa[c] && Wa[c].destroy();H(a, "data-highcharts-chart", this.index);a.innerHTML = "";a.offsetWidth || this.cloneRenderTo();this.getChartSize();c = this.chartWidth;d = this.chartHeight;this.container = a = Z(Ta, { className: "highcharts-container" + (b.className ? " " + b.className : ""), id: e }, u({ position: "relative", overflow: "hidden", width: c + "px", height: d + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)" }, b.style), this.renderToClone || a);this._cursor = a.style.cursor;this.renderer = b.forExport ? new sa(a, c, d, !0) : new Za(a, c, d);ka && this.renderer.create(this, a, c, d);
    }, getMargins: function getMargins() {
      var a = this.spacing,
          b,
          c = this.legend,
          d = this.margin,
          e = this.options.legend,
          f = o(e.margin, 10),
          g = e.x,
          h = e.y,
          i = e.align,
          j = e.verticalAlign,
          k = this.titleOffset;this.resetMargins();b = this.axisOffset;if (k && !t(d[0])) this.plotTop = s(this.plotTop, k + this.options.title.margin + a[0]);if (c.display && !e.floating) if (i === "right") {
        if (!t(d[1])) this.marginRight = s(this.marginRight, c.legendWidth - g + f + a[1]);
      } else if (i === "left") {
        if (!t(d[3])) this.plotLeft = s(this.plotLeft, c.legendWidth + g + f + a[3]);
      } else if (j === "top") {
        if (!t(d[0])) this.plotTop = s(this.plotTop, c.legendHeight + h + f + a[0]);
      } else if (j === "bottom" && !t(d[2])) this.marginBottom = s(this.marginBottom, c.legendHeight - h + f + a[2]);this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin);this.extraTopMargin && (this.plotTop += this.extraTopMargin);this.hasCartesianSeries && q(this.axes, function (a) {
        a.getOffset();
      });t(d[3]) || (this.plotLeft += b[3]);t(d[0]) || (this.plotTop += b[0]);t(d[2]) || (this.marginBottom += b[2]);t(d[1]) || (this.marginRight += b[1]);this.setChartSize();
    }, reflow: function reflow(a) {
      var b = this,
          c = b.options.chart,
          d = b.renderTo,
          e = c.width || nb(d, "width"),
          f = c.height || nb(d, "height"),
          c = a ? a.target : V,
          d = function d() {
        if (b.container) b.setSize(e, f, !1), b.hasUserSize = null;
      };if (!b.hasUserSize && e && f && (c === V || c === F)) {
        if (e !== b.containerWidth || f !== b.containerHeight) clearTimeout(b.reflowTimeout), a ? b.reflowTimeout = setTimeout(d, 100) : d();b.containerWidth = e;b.containerHeight = f;
      }
    }, initReflow: function initReflow() {
      var a = this,
          b = function b(_b) {
        a.reflow(_b);
      };A(V, "resize", b);A(a, "destroy", function () {
        X(V, "resize", b);
      });
    }, setSize: function setSize(a, b, c) {
      var d = this,
          e,
          f,
          g;d.isResizing += 1;g = function g() {
        d && N(d, "endResize", null, function () {
          d.isResizing -= 1;
        });
      };Xa(c, d);d.oldChartHeight = d.chartHeight;d.oldChartWidth = d.chartWidth;if (t(a)) d.chartWidth = e = s(0, v(a)), d.hasUserSize = !!e;if (t(b)) d.chartHeight = f = s(0, v(b));(wa ? ob : z)(d.container, { width: e + "px", height: f + "px" }, wa);d.setChartSize(!0);d.renderer.setSize(e, f, c);d.maxTicks = null;q(d.axes, function (a) {
        a.isDirty = !0;a.setScale();
      });q(d.series, function (a) {
        a.isDirty = !0;
      });d.isDirtyLegend = !0;d.isDirtyBox = !0;d.getMargins();d.redraw(c);
      d.oldChartHeight = null;N(d, "resize");wa === !1 ? g() : setTimeout(g, wa && wa.duration || 500);
    }, setChartSize: function setChartSize(a) {
      var b = this.inverted,
          c = this.renderer,
          d = this.chartWidth,
          e = this.chartHeight,
          f = this.options.chart,
          g = this.spacing,
          h = this.clipOffset,
          i,
          j,
          k,
          l;this.plotLeft = i = v(this.plotLeft);this.plotTop = j = v(this.plotTop);this.plotWidth = k = s(0, v(d - i - this.marginRight));this.plotHeight = l = s(0, v(e - j - this.marginBottom));this.plotSizeX = b ? l : k;this.plotSizeY = b ? k : l;this.plotBorderWidth = f.plotBorderWidth || 0;this.spacingBox = c.spacingBox = { x: g[3], y: g[0], width: d - g[3] - g[1], height: e - g[0] - g[2] };this.plotBox = c.plotBox = { x: i, y: j, width: k, height: l };d = 2 * Q(this.plotBorderWidth / 2);b = Va(s(d, h[3]) / 2);c = Va(s(d, h[0]) / 2);this.clipBox = { x: b, y: c, width: Q(this.plotSizeX - s(d, h[1]) / 2 - b), height: Q(this.plotSizeY - s(d, h[2]) / 2 - c) };a || q(this.axes, function (a) {
        a.setAxisSize();a.setAxisTranslation();
      });
    }, resetMargins: function resetMargins() {
      var a = this.spacing,
          b = this.margin;this.plotTop = o(b[0], a[0]);this.marginRight = o(b[1], a[1]);this.marginBottom = o(b[2], a[2]);this.plotLeft = o(b[3], a[3]);this.axisOffset = [0, 0, 0, 0];this.clipOffset = [0, 0, 0, 0];
    }, drawChartBox: function drawChartBox() {
      var a = this.options.chart,
          b = this.renderer,
          c = this.chartWidth,
          d = this.chartHeight,
          e = this.chartBackground,
          f = this.plotBackground,
          g = this.plotBorder,
          h = this.plotBGImage,
          i = a.borderWidth || 0,
          j = a.backgroundColor,
          k = a.plotBackgroundColor,
          l = a.plotBackgroundImage,
          m = a.plotBorderWidth || 0,
          p,
          n = this.plotLeft,
          o = this.plotTop,
          q = this.plotWidth,
          x = this.plotHeight,
          s = this.plotBox,
          r = this.clipRect,
          v = this.clipBox;p = i + (a.shadow ? 8 : 0);if (i || j) if (e) e.animate(e.crisp(null, null, null, c - p, d - p));else {
        e = { fill: j || ba };if (i) e.stroke = a.borderColor, e["stroke-width"] = i;this.chartBackground = b.rect(p / 2, p / 2, c - p, d - p, a.borderRadius, i).attr(e).add().shadow(a.shadow);
      }if (k) f ? f.animate(s) : this.plotBackground = b.rect(n, o, q, x, 0).attr({ fill: k }).add().shadow(a.plotShadow);if (l) h ? h.animate(s) : this.plotBGImage = b.image(l, n, o, q, x).add();r ? r.animate({ width: v.width, height: v.height }) : this.clipRect = b.clipRect(v);if (m) g ? g.animate(g.crisp(null, n, o, q, x)) : this.plotBorder = b.rect(n, o, q, x, 0, -m).attr({ stroke: a.plotBorderColor,
        "stroke-width": m, zIndex: 1 }).add();this.isDirtyBox = !1;
    }, propFromSeries: function propFromSeries() {
      var a = this,
          b = a.options.chart,
          c,
          d = a.options.series,
          e,
          f;q(["inverted", "angular", "polar"], function (g) {
        c = D[b.type || b.defaultSeriesType];f = a[g] || b[g] || c && c.prototype[g];for (e = d && d.length; !f && e--;) {
          (c = D[d[e].type]) && c.prototype[g] && (f = !0);
        }a[g] = f;
      });
    }, linkSeries: function linkSeries() {
      var a = this,
          b = a.series;q(b, function (a) {
        a.linkedSeries.length = 0;
      });q(b, function (b) {
        var d = b.options.linkedTo;if (ma(d) && (d = d === ":previous" ? a.series[b.index - 1] : a.get(d))) d.linkedSeries.push(b), b.linkedParent = d;
      });
    }, render: function render() {
      var a = this,
          b = a.axes,
          c = a.renderer,
          d = a.options,
          e = d.labels,
          f = d.credits,
          g;a.setTitle();a.legend = new Jb(a, d.legend);a.getStacks();q(b, function (a) {
        a.setScale();
      });a.getMargins();a.maxTicks = null;q(b, function (a) {
        a.setTickPositions(!0);a.setMaxTicks();
      });a.adjustTickAmounts();a.getMargins();a.drawChartBox();a.hasCartesianSeries && q(b, function (a) {
        a.render();
      });if (!a.seriesGroup) a.seriesGroup = c.g("series-group").attr({ zIndex: 3 }).add();q(a.series, function (a) {
        a.translate();a.setTooltipPoints();
        a.render();
      });e.items && q(e.items, function (b) {
        var d = u(e.style, b.style),
            f = E(d.left) + a.plotLeft,
            g = E(d.top) + a.plotTop + 12;delete d.left;delete d.top;c.text(b.html, f, g).attr({ zIndex: 2 }).css(d).add();
      });if (f.enabled && !a.credits) g = f.href, a.credits = c.text(f.text, 0, 0).on("click", function () {
        if (g) location.href = g;
      }).attr({ align: f.position.align, zIndex: 8 }).css(f.style).add().align(f.position);a.hasRendered = !0;
    }, destroy: function destroy() {
      var a = this,
          b = a.axes,
          c = a.series,
          d = a.container,
          e,
          f = d && d.parentNode;N(a, "destroy");Wa[a.index] = r;a.renderTo.removeAttribute("data-highcharts-chart");X(a);for (e = b.length; e--;) {
        b[e] = b[e].destroy();
      }for (e = c.length; e--;) {
        c[e] = c[e].destroy();
      }q("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","), function (b) {
        var c = a[b];c && c.destroy && (a[b] = c.destroy());
      });if (d) d.innerHTML = "", X(d), f && Sa(d);for (e in a) {
        delete a[e];
      }
    }, isReadyToRender: function isReadyToRender() {
      var a = this;return !da && V == V.top && F.readyState !== "complete" || ka && !V.canvg ? (ka ? Vb.push(function () {
        a.firstRender();
      }, a.options.global.canvasToolsURL) : F.attachEvent("onreadystatechange", function () {
        F.detachEvent("onreadystatechange", a.firstRender);F.readyState === "complete" && a.firstRender();
      }), !1) : !0;
    }, firstRender: function firstRender() {
      var a = this,
          b = a.options,
          c = a.callback;if (a.isReadyToRender()) a.getContainer(), N(a, "init"), a.resetMargins(), a.setChartSize(), a.propFromSeries(), a.getAxes(), q(b.series || [], function (b) {
        a.initSeries(b);
      }), a.linkSeries(), N(a, "beforeRender"), a.pointer = new $a(a, b), a.render(), a.renderer.draw(), c && c.apply(a, [a]), q(a.callbacks, function (b) {
        b.apply(a, [a]);
      }), a.cloneRenderTo(!0), N(a, "load");
    }, splashArray: function splashArray(a, b) {
      var c = b[a],
          c = aa(c) ? c : [c, c, c, c];return [o(b[a + "Top"], c[0]), o(b[a + "Right"], c[1]), o(b[a + "Bottom"], c[2]), o(b[a + "Left"], c[3])];
    } };ya.prototype.callbacks = [];qa = Highcharts.CenteredSeriesMixin = { getCenter: function getCenter() {
      var a = this.options,
          b = this.chart,
          c = 2 * (a.slicedOffset || 0),
          d,
          e = b.plotWidth - 2 * c,
          f = b.plotHeight - 2 * c,
          b = a.center,
          a = [o(b[0], "50%"), o(b[1], "50%"), a.size || "100%", a.innerSize || 0],
          g = y(e, f),
          h;return Na(a, function (a, b) {
        h = /%$/.test(a);d = b < 2 || b === 2 && h;return (h ? [e, f, g, g][b] * E(a) / 100 : a) + (d ? c : 0);
      });
    } };var Da = function Da() {};Da.prototype = { init: function init(a, b, c) {
      this.series = a;this.applyOptions(b, c);this.pointAttr = {};if (a.options.colorByPoint && (b = a.options.colors || a.chart.options.colors, this.color = this.color || b[a.colorCounter++], a.colorCounter === b.length)) a.colorCounter = 0;a.chart.pointCount++;return this;
    }, applyOptions: function applyOptions(a, b) {
      var c = this.series,
          d = c.pointValKey,
          a = Da.prototype.optionsToObject.call(this, a);u(this, a);this.options = this.options ? u(this.options, a) : a;if (d) this.y = this[d];if (this.x === r && c) this.x = b === r ? c.autoIncrement() : b;return this;
    }, optionsToObject: function optionsToObject(a) {
      var b = {},
          c = this.series,
          d = c.pointArrayMap || ["y"],
          e = d.length,
          f = 0,
          g = 0;if (typeof a === "number" || a === null) b[d[0]] = a;else if (Pa(a)) {
        if (a.length > e) {
          c = _typeof(a[0]);if (c === "string") b.name = a[0];else if (c === "number") b.x = a[0];f++;
        }for (; g < e;) {
          b[d[g++]] = a[f++];
        }
      } else if ((typeof a === "undefined" ? "undefined" : _typeof(a)) === "object") {
        b = a;
        if (a.dataLabels) c._hasPointLabels = !0;if (a.marker) c._hasPointMarkers = !0;
      }return b;
    }, destroy: function destroy() {
      var a = this.series.chart,
          b = a.hoverPoints,
          c;a.pointCount--;if (b && (this.setState(), oa(b, this), !b.length)) a.hoverPoints = null;if (this === a.hoverPoint) this.onMouseOut();if (this.graphic || this.dataLabel) X(this), this.destroyElements();this.legendItem && a.legend.destroyItem(this);for (c in this) {
        this[c] = null;
      }
    }, destroyElements: function destroyElements() {
      for (var a = "graphic,dataLabel,dataLabelUpper,group,connector,shadowGroup".split(","), b, c = 6; c--;) {
        b = a[c], this[b] && (this[b] = this[b].destroy());
      }
    }, getLabelConfig: function getLabelConfig() {
      return { x: this.category, y: this.y, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal };
    }, select: function select(a, b) {
      var c = this,
          d = c.series,
          e = d.chart,
          a = o(a, !c.selected);c.firePointEvent(a ? "select" : "unselect", { accumulate: b }, function () {
        c.selected = c.options.selected = a;d.options.data[Aa(c, d.data)] = c.options;c.setState(a && "select");b || q(e.getSelectedPoints(), function (a) {
          if (a.selected && a !== c) a.selected = a.options.selected = !1, d.options.data[Aa(a, d.data)] = a.options, a.setState(""), a.firePointEvent("unselect");
        });
      });
    }, onMouseOver: function onMouseOver(a) {
      var b = this.series,
          c = b.chart,
          d = c.tooltip,
          e = c.hoverPoint;if (e && e !== this) e.onMouseOut();this.firePointEvent("mouseOver");d && (!d.shared || b.noSharedTooltip) && d.refresh(this, a);this.setState("hover");c.hoverPoint = this;
    }, onMouseOut: function onMouseOut() {
      var a = this.series.chart,
          b = a.hoverPoints;if (!b || Aa(this, b) === -1) this.firePointEvent("mouseOut"), this.setState(), a.hoverPoint = null;
    }, tooltipFormatter: function tooltipFormatter(a) {
      var b = this.series,
          c = b.tooltipOptions,
          d = o(c.valueDecimals, ""),
          e = c.valuePrefix || "",
          f = c.valueSuffix || "";q(b.pointArrayMap || ["y"], function (b) {
        b = "{point." + b;if (e || f) a = a.replace(b + "}", e + b + "}" + f);a = a.replace(b + "}", b + ":,." + d + "f}");
      });return Ha(a, { point: this, series: this.series });
    }, firePointEvent: function firePointEvent(a, b, c) {
      var d = this,
          e = this.series.options;(e.point.events[a] || d.options && d.options.events && d.options.events[a]) && this.importEvents();a === "click" && e.allowPointSelect && (c = function c(a) {
        d.select(null, a.ctrlKey || a.metaKey || a.shiftKey);
      });N(this, a, b, c);
    }, importEvents: function importEvents() {
      if (!this.hasImportedEvents) {
        var a = w(this.series.options.point, this.options).events,
            b;this.events = a;for (b in a) {
          A(this, b, a[b]);
        }this.hasImportedEvents = !0;
      }
    }, setState: function setState(a, b) {
      var c = this.plotX,
          d = this.plotY,
          e = this.series,
          f = e.options.states,
          g = S[e.type].marker && e.options.marker,
          h = g && !g.enabled,
          i = g && g.states[a],
          j = i && i.enabled === !1,
          k = e.stateMarkerGraphic,
          l = this.marker || {},
          m = e.chart,
          p = this.pointAttr,
          a = a || "",
          b = b && k;if (!(a === this.state && !b || this.selected && a !== "select" || f[a] && f[a].enabled === !1 || a && (j || h && !i.enabled) || a && l.states && l.states[a] && l.states[a].enabled === !1)) {
        if (this.graphic) f = g && this.graphic.symbolName && p[a].r, this.graphic.attr(w(p[a], f ? { x: c - f, y: d - f, width: 2 * f, height: 2 * f } : {}));else {
          if (a && i) if (f = i.radius, l = l.symbol || e.symbol, k && k.currentSymbol !== l && (k = k.destroy()), k) k[b ? "animate" : "attr"]({ x: c - f, y: d - f });else e.stateMarkerGraphic = k = m.renderer.symbol(l, c - f, d - f, 2 * f, 2 * f).attr(p[a]).add(e.markerGroup), k.currentSymbol = l;if (k) k[a && m.isInsidePlot(c, d, m.inverted) ? "show" : "hide"]();
        }this.state = a;
      }
    } };var M = function M() {};M.prototype = { isCartesian: !0, type: "line", pointClass: Da, sorted: !0, requireSorting: !0, pointAttrToOptions: { stroke: "lineColor", "stroke-width": "lineWidth", fill: "fillColor", r: "radius" }, axisTypes: ["xAxis", "yAxis"], colorCounter: 0, parallelArrays: ["x", "y"], init: function init(a, b) {
      var c = this,
          d,
          e,
          f = a.series,
          g = function g(a, b) {
        return o(a.options.index, a._i) - o(b.options.index, b._i);
      };c.chart = a;c.options = b = c.setOptions(b);c.linkedSeries = [];
      c.bindAxes();u(c, { name: b.name, state: "", pointAttr: {}, visible: b.visible !== !1, selected: b.selected === !0 });if (ka) b.animation = !1;e = b.events;for (d in e) {
        A(c, d, e[d]);
      }if (e && e.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0;c.getColor();c.getSymbol();q(c.parallelArrays, function (a) {
        c[a + "Data"] = [];
      });c.setData(b.data, !1);if (c.isCartesian) a.hasCartesianSeries = !0;f.push(c);c._i = f.length - 1;vb(f, g);this.yAxis && vb(this.yAxis.series, g);q(f, function (a, b) {
        a.index = b;a.name = a.name || "Series " + (b + 1);
      });
    }, bindAxes: function bindAxes() {
      var a = this,
          b = a.options,
          c = a.chart,
          d;q(a.axisTypes || [], function (e) {
        q(c[e], function (c) {
          d = c.options;if (b[e] === d.index || b[e] !== r && b[e] === d.id || b[e] === r && d.index === 0) c.series.push(a), a[e] = c, c.isDirty = !0;
        });!a[e] && a.optionalAxis !== e && pa(18, !0);
      });
    }, updateParallelArrays: function updateParallelArrays(a, b) {
      var c = a.series,
          d = arguments;q(c.parallelArrays, typeof b === "number" ? function (d) {
        var f = d === "y" && c.toYData ? c.toYData(a) : a[d];c[d + "Data"][b] = f;
      } : function (a) {
        Array.prototype[b].apply(c[a + "Data"], Array.prototype.slice.call(d, 2));
      });
    }, autoIncrement: function autoIncrement() {
      var a = this.options,
          b = this.xIncrement,
          b = o(b, a.pointStart, 0);this.pointInterval = o(this.pointInterval, a.pointInterval, 1);this.xIncrement = b + this.pointInterval;return b;
    }, getSegments: function getSegments() {
      var a = -1,
          b = [],
          c,
          d = this.points,
          e = d.length;if (e) if (this.options.connectNulls) {
        for (c = e; c--;) {
          d[c].y === null && d.splice(c, 1);
        }d.length && (b = [d]);
      } else q(d, function (c, g) {
        c.y === null ? (g > a + 1 && b.push(d.slice(a + 1, g)), a = g) : g === e - 1 && b.push(d.slice(a + 1, g + 1));
      });this.segments = b;
    }, setOptions: function setOptions(a) {
      var b = this.chart,
          c = b.options.plotOptions,
          b = b.userOptions || {},
          d = b.plotOptions || {},
          e = c[this.type];this.userOptions = a;c = w(e, c.series, a);this.tooltipOptions = w(L.tooltip, L.plotOptions[this.type].tooltip, b.tooltip, d.series && d.series.tooltip, d[this.type] && d[this.type].tooltip, a.tooltip);e.marker === null && delete c.marker;return c;
    }, getColor: function getColor() {
      var a = this.options,
          b = this.userOptions,
          c = this.chart.options.colors,
          d = this.chart.counters,
          e;e = a.color || S[this.type].color;if (!e && !a.colorByPoint) t(b._colorIndex) ? a = b._colorIndex : (b._colorIndex = d.color, a = d.color++), e = c[a];this.color = e;d.wrapColor(c.length);
    }, getSymbol: function getSymbol() {
      var a = this.userOptions,
          b = this.options.marker,
          c = this.chart,
          d = c.options.symbols,
          c = c.counters;this.symbol = b.symbol;if (!this.symbol) t(a._symbolIndex) ? a = a._symbolIndex : (a._symbolIndex = c.symbol, a = c.symbol++), this.symbol = d[a];if (/^url/.test(this.symbol)) b.radius = 0;c.wrapSymbol(d.length);
    }, drawLegendSymbol: K.drawLineMarker, setData: function setData(a, b) {
      var c = this,
          d = c.points,
          e = c.options,
          f = c.chart,
          g = null,
          h = c.xAxis,
          i = h && !!h.categories,
          j;c.xIncrement = null;c.pointRange = i ? 1 : e.pointRange;c.colorCounter = 0;var a = a || [],
          k = a.length;j = e.turboThreshold;var l = this.xData,
          m = this.yData,
          p = c.pointArrayMap,
          p = p && p.length;q(this.parallelArrays, function (a) {
        c[a + "Data"].length = 0;
      });if (j && k > j) {
        for (j = 0; g === null && j < k;) {
          g = a[j], j++;
        }if (ua(g)) {
          i = o(e.pointStart, 0);e = o(e.pointInterval, 1);for (j = 0; j < k; j++) {
            l[j] = i, m[j] = a[j], i += e;
          }c.xIncrement = i;
        } else if (Pa(g)) {
          if (p) for (j = 0; j < k; j++) {
            e = a[j], l[j] = e[0], m[j] = e.slice(1, p + 1);
          } else for (j = 0; j < k; j++) {
            e = a[j], l[j] = e[0], m[j] = e[1];
          }
        } else pa(12);
      } else for (j = 0; j < k; j++) {
        if (a[j] !== r && (e = { series: c }, c.pointClass.prototype.applyOptions.apply(e, [a[j]]), c.updateParallelArrays(e, j), i && e.name)) h.names[e.x] = e.name;
      }ma(m[0]) && pa(14, !0);c.data = [];c.options.data = a;for (j = d && d.length || 0; j--;) {
        d[j] && d[j].destroy && d[j].destroy();
      }if (h) h.minRange = h.userMinRange;c.isDirty = c.isDirtyData = f.isDirtyBox = !0;o(b, !0) && f.redraw(!1);
    }, processData: function processData(a) {
      var b = this.xData,
          c = this.yData,
          d = b.length,
          e;e = 0;var f,
          g,
          h = this.xAxis,
          i = this.options,
          j = i.cropThreshold,
          k = this.isCartesian;if (k && !this.isDirty && !h.isDirty && !this.yAxis.isDirty && !a) return !1;if (k && this.sorted && (!j || d > j || this.forceCrop)) if (a = h.min, h = h.max, b[d - 1] < a || b[0] > h) b = [], c = [];else if (b[0] < a || b[d - 1] > h) e = this.cropData(this.xData, this.yData, a, h), b = e.xData, c = e.yData, e = e.start, f = !0;for (h = b.length - 1; h >= 0; h--) {
        d = b[h] - b[h - 1], d > 0 && (g === r || d < g) ? g = d : d < 0 && this.requireSorting && pa(15);
      }this.cropped = f;this.cropStart = e;this.processedXData = b;this.processedYData = c;if (i.pointRange === null) this.pointRange = g || 1;this.closestPointRange = g;
    }, cropData: function cropData(a, b, c, d) {
      var e = a.length,
          f = 0,
          g = e,
          h = o(this.cropShoulder, 1),
          i;for (i = 0; i < e; i++) {
        if (a[i] >= c) {
          f = s(0, i - h);break;
        }
      }for (; i < e; i++) {
        if (a[i] > d) {
          g = i + h;break;
        }
      }return { xData: a.slice(f, g), yData: b.slice(f, g), start: f, end: g };
    }, generatePoints: function generatePoints() {
      var a = this.options.data,
          b = this.data,
          c,
          d = this.processedXData,
          e = this.processedYData,
          f = this.pointClass,
          g = d.length,
          h = this.cropStart || 0,
          i,
          j = this.hasGroupedData,
          k,
          l = [],
          m;if (!b && !j) b = [], b.length = a.length, b = this.data = b;for (m = 0; m < g; m++) {
        i = h + m, j ? l[m] = new f().init(this, [d[m]].concat(ja(e[m]))) : (b[i] ? k = b[i] : a[i] !== r && (b[i] = k = new f().init(this, a[i], d[m])), l[m] = k);
      }if (b && (g !== (c = b.length) || j)) for (m = 0; m < c; m++) {
        if (m === h && !j && (m += g), b[m]) b[m].destroyElements(), b[m].plotX = r;
      }this.data = b;this.points = l;
    }, setStackedPoints: function setStackedPoints() {
      if (this.options.stacking && !(this.visible !== !0 && this.chart.options.chart.ignoreHiddenSeries !== !1)) {
        var a = this.processedXData,
            b = this.processedYData,
            c = [],
            d = b.length,
            e = this.options,
            f = e.threshold,
            g = e.stack,
            e = e.stacking,
            h = this.stackKey,
            i = "-" + h,
            j = this.negStacks,
            k = this.yAxis,
            l = k.stacks,
            m = k.oldStacks,
            p,
            n,
            o,
            q,
            x;for (o = 0; o < d; o++) {
          q = a[o];x = b[o];n = (p = j && x < f) ? i : h;l[n] || (l[n] = {});if (!l[n][q]) m[n] && m[n][q] ? (l[n][q] = m[n][q], l[n][q].total = null) : l[n][q] = new Qb(k, k.options.stackLabels, p, q, g, e);n = l[n][q];n.points[this.index] = [n.cum || 0];e === "percent" ? (p = p ? h : i, j && l[p] && l[p][q] ? (p = l[p][q], n.total = p.total = s(p.total, n.total) + O(x) || 0) : n.total = ga(n.total + (O(x) || 0))) : n.total = ga(n.total + (x || 0));n.cum = (n.cum || 0) + (x || 0);n.points[this.index].push(n.cum);c[o] = n.cum;
        }if (e === "percent") k.usePercentage = !0;this.stackedYData = c;k.oldStacks = {};
      }
    }, setPercentStacks: function setPercentStacks() {
      var a = this,
          b = a.stackKey,
          c = a.yAxis.stacks;q([b, "-" + b], function (b) {
        var d;for (var e = a.xData.length, f, g; e--;) {
          if (f = a.xData[e], d = (g = c[b] && c[b][f]) && g.points[a.index], f = d) g = g.total ? 100 / g.total : 0, f[0] = ga(f[0] * g), f[1] = ga(f[1] * g), a.stackedYData[e] = f[1];
        }
      });
    }, getExtremes: function getExtremes(a) {
      var b = this.yAxis,
          c = this.processedXData,
          d,
          e = [],
          f = 0;d = this.xAxis.getExtremes();var g = d.min,
          h = d.max,
          i,
          j,
          k,
          l,
          a = a || this.stackedYData || this.processedYData;d = a.length;for (l = 0; l < d; l++) {
        if (j = c[l], k = a[l], i = k !== null && k !== r && (!b.isLog || k.length || k > 0), j = this.getExtremesFromAll || this.cropped || (c[l + 1] || j) >= g && (c[l - 1] || j) <= h, i && j) if (i = k.length) for (; i--;) {
          k[i] !== null && (e[f++] = k[i]);
        } else e[f++] = k;
      }this.dataMin = o(void 0, Ra(e));this.dataMax = o(void 0, va(e));
    }, translate: function translate() {
      this.processedXData || this.processData();this.generatePoints();for (var a = this.options, b = a.stacking, c = this.xAxis, d = c.categories, e = this.yAxis, f = this.points, g = f.length, h = !!this.modifyValue, i = a.pointPlacement, j = i === "between" || ua(i), k = a.threshold, a = 0; a < g; a++) {
        var l = f[a],
            m = l.x,
            p = l.y,
            n = l.low,
            q = b && e.stacks[(this.negStacks && p < k ? "-" : "") + this.stackKey];if (e.isLog && p <= 0) l.y = p = null;l.plotX = c.translate(m, 0, 0, 0, 1, i, this.type === "flags");if (b && this.visible && q && q[m]) q = q[m], p = q.points[this.index], n = p[0], p = p[1], n === 0 && (n = o(k, e.min)), e.isLog && n <= 0 && (n = null), l.total = l.stackTotal = q.total, l.percentage = b === "percent" && l.y / q.total * 100, l.stackY = p, q.setOffset(this.pointXOffset || 0, this.barW || 0);l.yBottom = t(n) ? e.translate(n, 0, 1, 0, 1) : null;h && (p = this.modifyValue(p, l));l.plotY = typeof p === "number" && p !== Infinity ? e.translate(p, 0, 1, 0, 1) : r;l.clientX = j ? c.translate(m, 0, 0, 0, 1) : l.plotX;l.negative = l.y < (k || 0);l.category = d && d[l.x] !== r ? d[l.x] : l.x;
      }this.getSegments();
    }, setTooltipPoints: function setTooltipPoints(a) {
      var b = [],
          c,
          d,
          e = this.xAxis,
          f = e && e.getExtremes(),
          g = e ? e.tooltipLen || e.len : this.chart.plotSizeX,
          h,
          i,
          j = [];if (this.options.enableMouseTracking !== !1) {
        if (a) this.tooltipPoints = null;q(this.segments || this.points, function (a) {
          b = b.concat(a);
        });
        e && e.reversed && (b = b.reverse());this.orderTooltipPoints && this.orderTooltipPoints(b);a = b.length;for (i = 0; i < a; i++) {
          if (e = b[i], c = e.x, c >= f.min && c <= f.max) {
            h = b[i + 1];c = d === r ? 0 : d + 1;for (d = b[i + 1] ? y(s(0, Q((e.clientX + (h ? h.wrappedClientX || h.clientX : g)) / 2)), g) : g; c >= 0 && c <= d;) {
              j[c++] = e;
            }
          }
        }this.tooltipPoints = j;
      }
    }, tooltipHeaderFormatter: function tooltipHeaderFormatter(a) {
      var b = this.tooltipOptions,
          c = b.dateTimeLabelFormats,
          d = b.xDateFormat,
          e = this.xAxis,
          f = e && e.options.type === "datetime",
          b = b.headerFormat,
          e = e && e.closestPointRange,
          g;if (f && !d) {
        if (e) for (g in B) {
          if (B[g] >= e) {
            d = c[g];break;
          }
        } else d = c.day;d = d || c.year;
      }f && d && ua(a.key) && (b = b.replace("{point.key}", "{point.key:" + d + "}"));return Ha(b, { point: a, series: this });
    }, onMouseOver: function onMouseOver() {
      var a = this.chart,
          b = a.hoverSeries;if (b && b !== this) b.onMouseOut();this.options.events.mouseOver && N(this, "mouseOver");this.setState("hover");a.hoverSeries = this;
    }, onMouseOut: function onMouseOut() {
      var a = this.options,
          b = this.chart,
          c = b.tooltip,
          d = b.hoverPoint;if (d) d.onMouseOut();this && a.events.mouseOut && N(this, "mouseOut");c && !a.stickyTracking && (!c.shared || this.noSharedTooltip) && c.hide();this.setState();b.hoverSeries = null;
    }, animate: function animate(a) {
      var b = this,
          c = b.chart,
          d = c.renderer,
          e;e = b.options.animation;var f = c.clipBox,
          g = c.inverted,
          h;if (e && !aa(e)) e = S[b.type].animation;h = "_sharedClip" + e.duration + e.easing;if (a) a = c[h], e = c[h + "m"], a || (c[h] = a = d.clipRect(u(f, { width: 0 })), c[h + "m"] = e = d.clipRect(-99, g ? -c.plotLeft : -c.plotTop, 99, g ? c.chartWidth : c.chartHeight)), b.group.clip(a), b.markerGroup.clip(e), b.sharedClipKey = h;else {
        if (a = c[h]) a.animate({ width: c.plotSizeX }, e), c[h + "m"].animate({ width: c.plotSizeX + 99 }, e);b.animate = null;b.animationTimeout = setTimeout(function () {
          b.afterAnimate();
        }, e.duration);
      }
    }, afterAnimate: function afterAnimate() {
      var a = this.chart,
          b = this.sharedClipKey,
          c = this.group;c && this.options.clip !== !1 && (c.clip(a.clipRect), this.markerGroup.clip());setTimeout(function () {
        b && a[b] && (a[b] = a[b].destroy(), a[b + "m"] = a[b + "m"].destroy());
      }, 100);
    }, drawPoints: function drawPoints() {
      var a,
          b = this.points,
          c = this.chart,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = this.options.marker,
          m,
          p = this.markerGroup;if (l.enabled || this._hasPointMarkers) for (f = b.length; f--;) {
        if (g = b[f], d = Q(g.plotX), e = g.plotY, k = g.graphic, i = g.marker || {}, a = l.enabled && i.enabled === r || i.enabled, m = c.isInsidePlot(v(d), e, c.inverted), a && e !== r && !isNaN(e) && g.y !== null) {
          if (a = g.pointAttr[g.selected ? "select" : ""], h = a.r, i = o(i.symbol, this.symbol), j = i.indexOf("url") === 0, k) k.attr({ visibility: m ? da ? "inherit" : "visible" : "hidden" }).animate(u({ x: d - h, y: e - h }, k.symbolName ? { width: 2 * h, height: 2 * h } : {}));else {
            if (m && (h > 0 || j)) g.graphic = c.renderer.symbol(i, d - h, e - h, 2 * h, 2 * h).attr(a).add(p);
          }
        } else if (k) g.graphic = k.destroy();
      }
    },
    convertAttribs: function convertAttribs(a, b, c, d) {
      var e = this.pointAttrToOptions,
          f,
          g,
          h = {},
          a = a || {},
          b = b || {},
          c = c || {},
          d = d || {};for (f in e) {
        g = e[f], h[f] = o(a[g], b[f], c[f], d[f]);
      }return h;
    }, getAttribs: function getAttribs() {
      var a = this,
          b = a.options,
          c = S[a.type].marker ? b.marker : b,
          d = c.states,
          e = d.hover,
          f,
          g = a.color,
          h = { stroke: g, fill: g },
          i = a.points || [],
          j = [],
          k,
          l = a.pointAttrToOptions,
          m = b.negativeColor,
          p = c.lineColor,
          n = c.fillColor,
          o;b.marker ? (e.radius = e.radius || c.radius + 2, e.lineWidth = e.lineWidth || c.lineWidth + 1) : e.color = e.color || Ba(e.color || g).brighten(e.brightness).get();
      j[""] = a.convertAttribs(c, h);q(["hover", "select"], function (b) {
        j[b] = a.convertAttribs(d[b], j[""]);
      });a.pointAttr = j;for (g = i.length; g--;) {
        h = i[g];if ((c = h.options && h.options.marker || h.options) && c.enabled === !1) c.radius = 0;if (h.negative && m) h.color = h.fillColor = m;k = b.colorByPoint || h.color;if (h.options) for (o in l) {
          t(c[l[o]]) && (k = !0);
        }if (k) {
          c = c || {};k = [];d = c.states || {};f = d.hover = d.hover || {};if (!b.marker) f.color = Ba(f.color || h.color).brighten(f.brightness || e.brightness).get();f = { color: h.color };if (!n) f.fillColor = h.color;
          if (!p) f.lineColor = h.color;k[""] = a.convertAttribs(u(f, c), j[""]);k.hover = a.convertAttribs(d.hover, j.hover, k[""]);k.select = a.convertAttribs(d.select, j.select, k[""]);
        } else k = j;h.pointAttr = k;
      }
    }, destroy: function destroy() {
      var a = this,
          b = a.chart,
          c = /AppleWebKit\/533/.test(za),
          d,
          e,
          f = a.data || [],
          g,
          h,
          i;N(a, "destroy");X(a);q(a.axisTypes || [], function (b) {
        if (i = a[b]) oa(i.series, a), i.isDirty = i.forceRedraw = !0;
      });a.legendItem && a.chart.legend.destroyItem(a);for (e = f.length; e--;) {
        (g = f[e]) && g.destroy && g.destroy();
      }a.points = null;clearTimeout(a.animationTimeout);
      q("area,graph,dataLabelsGroup,group,markerGroup,tracker,graphNeg,areaNeg,posClip,negClip".split(","), function (b) {
        a[b] && (d = c && b === "group" ? "hide" : "destroy", a[b][d]());
      });if (b.hoverSeries === a) b.hoverSeries = null;oa(b.series, a);for (h in a) {
        delete a[h];
      }
    }, getSegmentPath: function getSegmentPath(a) {
      var b = this,
          c = [],
          d = b.options.step;q(a, function (e, f) {
        var g = e.plotX,
            h = e.plotY,
            i;b.getPointSpline ? c.push.apply(c, b.getPointSpline(a, e, f)) : (c.push(f ? "L" : "M"), d && f && (i = a[f - 1], d === "right" ? c.push(i.plotX, h) : d === "center" ? c.push((i.plotX + g) / 2, i.plotY, (i.plotX + g) / 2, h) : c.push(g, i.plotY)), c.push(e.plotX, e.plotY));
      });return c;
    }, getGraphPath: function getGraphPath() {
      var a = this,
          b = [],
          c,
          d = [];q(a.segments, function (e) {
        c = a.getSegmentPath(e);e.length > 1 ? b = b.concat(c) : d.push(e[0]);
      });a.singlePoints = d;return a.graphPath = b;
    }, drawGraph: function drawGraph() {
      var a = this,
          b = this.options,
          c = [["graph", b.lineColor || this.color]],
          d = b.lineWidth,
          e = b.dashStyle,
          f = b.linecap !== "square",
          g = this.getGraphPath(),
          h = b.negativeColor;h && c.push(["graphNeg", h]);q(c, function (c, h) {
        var k = c[0],
            l = a[k];if (l) eb(l), l.animate({ d: g });else if (d && g.length) l = { stroke: c[1], "stroke-width": d, zIndex: 1 }, e ? l.dashstyle = e : f && (l["stroke-linecap"] = l["stroke-linejoin"] = "round"), a[k] = a.chart.renderer.path(g).attr(l).add(a.group).shadow(!h && b.shadow);
      });
    }, clipNeg: function clipNeg() {
      var a = this.options,
          b = this.chart,
          c = b.renderer,
          d = a.negativeColor || a.negativeFillColor,
          e,
          f = this.graph,
          g = this.area,
          h = this.posClip,
          i = this.negClip;e = b.chartWidth;var j = b.chartHeight,
          k = s(e, j),
          l = this.yAxis;if (d && (f || g)) {
        d = v(l.toPixels(a.threshold || 0, !0));d < 0 && (k -= d);
        a = { x: 0, y: 0, width: k, height: d };k = { x: 0, y: d, width: k, height: k };if (b.inverted) a.height = k.y = b.plotWidth - d, c.isVML && (a = { x: b.plotWidth - d - b.plotLeft, y: 0, width: e, height: j }, k = { x: d + b.plotLeft - e, y: 0, width: b.plotLeft + d, height: e });l.reversed ? (b = k, e = a) : (b = a, e = k);h ? (h.animate(b), i.animate(e)) : (this.posClip = h = c.clipRect(b), this.negClip = i = c.clipRect(e), f && this.graphNeg && (f.clip(h), this.graphNeg.clip(i)), g && (g.clip(h), this.areaNeg.clip(i)));
      }
    }, invertGroups: function invertGroups() {
      function a() {
        var a = { width: b.yAxis.len, height: b.xAxis.len };
        q(["group", "markerGroup"], function (c) {
          b[c] && b[c].attr(a).invert();
        });
      }var b = this,
          c = b.chart;if (b.xAxis) A(c, "resize", a), A(b, "destroy", function () {
        X(c, "resize", a);
      }), a(), b.invertGroups = a;
    }, plotGroup: function plotGroup(a, b, c, d, e) {
      var f = this[a],
          g = !f;g && (this[a] = f = this.chart.renderer.g(b).attr({ visibility: c, zIndex: d || 0.1 }).add(e));f[g ? "attr" : "animate"](this.getPlotBox());return f;
    }, getPlotBox: function getPlotBox() {
      return { translateX: this.xAxis ? this.xAxis.left : this.chart.plotLeft, translateY: this.yAxis ? this.yAxis.top : this.chart.plotTop,
        scaleX: 1, scaleY: 1 };
    }, render: function render() {
      var a = this.chart,
          b,
          c = this.options,
          d = c.animation && !!this.animate && a.renderer.isSVG,
          e = this.visible ? "visible" : "hidden",
          f = c.zIndex,
          g = this.hasRendered,
          h = a.seriesGroup;b = this.plotGroup("group", "series", e, f, h);this.markerGroup = this.plotGroup("markerGroup", "markers", e, f, h);d && this.animate(!0);this.getAttribs();b.inverted = this.isCartesian ? a.inverted : !1;this.drawGraph && (this.drawGraph(), this.clipNeg());this.drawDataLabels && this.drawDataLabels();this.visible && this.drawPoints();
      this.options.enableMouseTracking !== !1 && this.drawTracker();a.inverted && this.invertGroups();c.clip !== !1 && !this.sharedClipKey && !g && b.clip(a.clipRect);d ? this.animate() : g || this.afterAnimate();this.isDirty = this.isDirtyData = !1;this.hasRendered = !0;
    }, redraw: function redraw() {
      var a = this.chart,
          b = this.isDirtyData,
          c = this.group,
          d = this.xAxis,
          e = this.yAxis;c && (a.inverted && c.attr({ width: a.plotWidth, height: a.plotHeight }), c.animate({ translateX: o(d && d.left, a.plotLeft), translateY: o(e && e.top, a.plotTop) }));this.translate();this.setTooltipPoints(!0);
      this.render();b && N(this, "updatedData");
    }, setState: function setState(a) {
      var b = this.options,
          c = this.graph,
          d = this.graphNeg,
          e = b.states,
          b = b.lineWidth,
          a = a || "";if (this.state !== a) this.state = a, e[a] && e[a].enabled === !1 || (a && (b = e[a].lineWidth || b + 1), c && !c.dashstyle && (a = { "stroke-width": b }, c.attr(a), d && d.attr(a)));
    }, setVisible: function setVisible(a, b) {
      var c = this,
          d = c.chart,
          e = c.legendItem,
          f,
          g = d.options.chart.ignoreHiddenSeries,
          h = c.visible;f = (c.visible = a = c.userOptions.visible = a === r ? !h : a) ? "show" : "hide";q(["group", "dataLabelsGroup", "markerGroup", "tracker"], function (a) {
        if (c[a]) c[a][f]();
      });if (d.hoverSeries === c) c.onMouseOut();e && d.legend.colorizeItem(c, a);c.isDirty = !0;c.options.stacking && q(d.series, function (a) {
        if (a.options.stacking && a.visible) a.isDirty = !0;
      });q(c.linkedSeries, function (b) {
        b.setVisible(a, !1);
      });if (g) d.isDirtyBox = !0;b !== !1 && d.redraw();N(c, f);
    }, show: function show() {
      this.setVisible(!0);
    }, hide: function hide() {
      this.setVisible(!1);
    }, select: function select(a) {
      this.selected = a = a === r ? !this.selected : a;if (this.checkbox) this.checkbox.checked = a;N(this, a ? "select" : "unselect");
    }, drawTracker: fb.drawTrackerGraph };u(ya.prototype, { addSeries: function addSeries(a, b, c) {
      var d,
          e = this;a && (b = o(b, !0), N(e, "addSeries", { options: a }, function () {
        d = e.initSeries(a);e.isDirtyLegend = !0;e.linkSeries();b && e.redraw(c);
      }));return d;
    }, addAxis: function addAxis(a, b, c, d) {
      var e = b ? "xAxis" : "yAxis",
          f = this.options;new W(this, w(a, { index: this[e].length, isX: b }));f[e] = ja(f[e] || {});f[e].push(a);o(c, !0) && this.redraw(d);
    }, showLoading: function showLoading(a) {
      var b = this.options,
          c = this.loadingDiv,
          d = b.loading;if (!c) this.loadingDiv = c = Z(Ta, { className: "highcharts-loading" }, u(d.style, { zIndex: 10, display: ba }), this.container), this.loadingSpan = Z("span", null, d.labelStyle, c);this.loadingSpan.innerHTML = a || b.lang.loading;if (!this.loadingShown) z(c, { opacity: 0, display: "", left: this.plotLeft + "px", top: this.plotTop + "px", width: this.plotWidth + "px", height: this.plotHeight + "px" }), ob(c, { opacity: d.style.opacity }, { duration: d.showDuration || 0 }), this.loadingShown = !0;
    }, hideLoading: function hideLoading() {
      var a = this.options,
          b = this.loadingDiv;b && ob(b, { opacity: 0 }, { duration: a.loading.hideDuration || 100, complete: function complete() {
          z(b, { display: ba });
        } });this.loadingShown = !1;
    } });u(Da.prototype, { update: function update(a, b, c) {
      var d = this,
          e = d.series,
          f = d.graphic,
          g,
          h = e.data,
          i = e.chart,
          j = e.options,
          b = o(b, !0);d.firePointEvent("update", { options: a }, function () {
        d.applyOptions(a);if (aa(a)) {
          e.getAttribs();if (f) a && a.marker && a.marker.symbol ? d.graphic = f.destroy() : f.attr(d.pointAttr[d.state || ""]);if (a && a.dataLabels && d.dataLabel) d.dataLabel = d.dataLabel.destroy();
        }g = Aa(d, h);e.updateParallelArrays(d, g);j.data[g] = d.options;e.isDirty = e.isDirtyData = !0;if (!e.fixedBox && e.hasCartesianSeries) i.isDirtyBox = !0;j.legendType === "point" && i.legend.destroyItem(d);b && i.redraw(c);
      });
    }, remove: function remove(a, b) {
      var c = this,
          d = c.series,
          e = d.points,
          f = d.chart,
          g,
          h = d.data;Xa(b, f);a = o(a, !0);c.firePointEvent("remove", null, function () {
        g = Aa(c, h);h.length === e.length && e.splice(g, 1);h.splice(g, 1);d.options.data.splice(g, 1);d.updateParallelArrays(c, "splice", g, 1);c.destroy();d.isDirty = !0;d.isDirtyData = !0;a && f.redraw();
      });
    } });u(M.prototype, { addPoint: function addPoint(a, b, c, d) {
      var e = this.options,
          f = this.data,
          g = this.graph,
          h = this.area,
          i = this.chart,
          j = this.xAxis && this.xAxis.names,
          k = g && g.shift || 0,
          l = e.data,
          m,
          p = this.xData;Xa(d, i);c && q([g, h, this.graphNeg, this.areaNeg], function (a) {
        if (a) a.shift = k + 1;
      });if (h) h.isArea = !0;b = o(b, !0);d = { series: this };this.pointClass.prototype.applyOptions.apply(d, [a]);g = d.x;h = p.length;if (this.requireSorting && g < p[h - 1]) for (m = !0; h && p[h - 1] > g;) {
        h--;
      }this.updateParallelArrays(d, "splice", h, 0, 0);this.updateParallelArrays(d, h);if (j) j[g] = d.name;l.splice(h, 0, a);m && (this.data.splice(h, 0, null), this.processData());e.legendType === "point" && this.generatePoints();c && (f[0] && f[0].remove ? f[0].remove(!1) : (f.shift(), this.updateParallelArrays(d, "shift"), l.shift()));this.isDirtyData = this.isDirty = !0;b && (this.getAttribs(), i.redraw());
    }, remove: function remove(a, b) {
      var c = this,
          d = c.chart,
          a = o(a, !0);if (!c.isRemoving) c.isRemoving = !0, N(c, "remove", null, function () {
        c.destroy();d.isDirtyLegend = d.isDirtyBox = !0;d.linkSeries();a && d.redraw(b);
      });c.isRemoving = !1;
    }, update: function update(a, b) {
      var c = this.chart,
          d = this.type,
          e = D[d].prototype,
          f,
          a = w(this.userOptions, { animation: !1, index: this.index, pointStart: this.xData[0] }, { data: this.options.data }, a);this.remove(!1);for (f in e) {
        e.hasOwnProperty(f) && (this[f] = r);
      }u(this, D[a.type || d].prototype);this.init(c, a);o(b, !0) && c.redraw(!1);
    } });u(W.prototype, { update: function update(a, b) {
      var c = this.chart,
          a = c.options[this.coll][this.options.index] = w(this.userOptions, a);this.destroy(!0);this._addedPlotLB = this.userMin = this.userMax = r;this.init(c, u(a, { events: r }));c.isDirtyBox = !0;o(b, !0) && c.redraw();
    }, remove: function remove(a) {
      var b = this.chart,
          c = this.coll;q(this.series, function (a) {
        a.remove(!1);
      });oa(b.axes, this);oa(b[c], this);b.options[c].splice(this.options.index, 1);q(b[c], function (a, b) {
        a.options.index = b;
      });this.destroy();b.isDirtyBox = !0;o(a, !0) && b.redraw();
    }, setTitle: function setTitle(a, b) {
      this.update({ title: a }, b);
    }, setCategories: function setCategories(a, b) {
      this.update({ categories: a }, b);
    } });var ia = ea(M);D.line = ia;S.area = w(R, { threshold: 0 });var ab = ea(M, { type: "area", getSegments: function getSegments() {
      var a = [],
          b = [],
          c = [],
          d = this.xAxis,
          e = this.yAxis,
          f = e.stacks[this.stackKey],
          g = {},
          h,
          i,
          j = this.points,
          k = this.options.connectNulls,
          l,
          m,
          p;if (this.options.stacking && !this.cropped) {
        for (m = 0; m < j.length; m++) {
          g[j[m].x] = j[m];
        }for (p in f) {
          f[p].total !== null && c.push(+p);
        }c.sort(function (a, b) {
          return a - b;
        });q(c, function (a) {
          if (!k || g[a] && g[a].y !== null) g[a] ? b.push(g[a]) : (h = d.translate(a), l = f[a].percent ? f[a].total ? f[a].cum * 100 / f[a].total : 0 : f[a].cum, i = e.toPixels(l, !0), b.push({ y: null, plotX: h, clientX: h, plotY: i, yBottom: i, onMouseOver: la }));
        });b.length && a.push(b);
      } else M.prototype.getSegments.call(this), a = this.segments;this.segments = a;
    }, getSegmentPath: function getSegmentPath(a) {
      var b = M.prototype.getSegmentPath.call(this, a),
          c = [].concat(b),
          d,
          e = this.options;d = b.length;var f = this.yAxis.getThreshold(e.threshold),
          g;d === 3 && c.push("L", b[1], b[2]);if (e.stacking && !this.closedStacks) for (d = a.length - 1; d >= 0; d--) {
        g = o(a[d].yBottom, f), d < a.length - 1 && e.step && c.push(a[d + 1].plotX, g), c.push(a[d].plotX, g);
      } else this.closeSegment(c, a, f);this.areaPath = this.areaPath.concat(c);return b;
    }, closeSegment: function closeSegment(a, b, c) {
      a.push("L", b[b.length - 1].plotX, c, "L", b[0].plotX, c);
    }, drawGraph: function drawGraph() {
      this.areaPath = [];M.prototype.drawGraph.apply(this);var a = this,
          b = this.areaPath,
          c = this.options,
          d = c.negativeColor,
          e = c.negativeFillColor,
          f = [["area", this.color, c.fillColor]];(d || e) && f.push(["areaNeg", d, e]);q(f, function (d) {
        var e = d[0],
            f = a[e];f ? f.animate({ d: b }) : a[e] = a.chart.renderer.path(b).attr({ fill: o(d[2], Ba(d[1]).setOpacity(o(c.fillOpacity, 0.75)).get()), zIndex: 0 }).add(a.group);
      });
    }, drawLegendSymbol: K.drawRectangle });D.area = ab;S.spline = w(R);ia = ea(M, { type: "spline",
    getPointSpline: function getPointSpline(a, b, c) {
      var d = b.plotX,
          e = b.plotY,
          f = a[c - 1],
          g = a[c + 1],
          h,
          i,
          j,
          k;if (f && g) {
        a = f.plotY;j = g.plotX;var g = g.plotY,
            l;h = (1.5 * d + f.plotX) / 2.5;i = (1.5 * e + a) / 2.5;j = (1.5 * d + j) / 2.5;k = (1.5 * e + g) / 2.5;l = (k - i) * (j - d) / (j - h) + e - k;i += l;k += l;i > a && i > e ? (i = s(a, e), k = 2 * e - i) : i < a && i < e && (i = y(a, e), k = 2 * e - i);k > g && k > e ? (k = s(g, e), i = 2 * e - k) : k < g && k < e && (k = y(g, e), i = 2 * e - k);b.rightContX = j;b.rightContY = k;
      }c ? (b = ["C", f.rightContX || f.plotX, f.rightContY || f.plotY, h || d, i || e, d, e], f.rightContX = f.rightContY = null) : b = ["M", d, e];return b;
    } });D.spline = ia;S.areaspline = w(S.area);ab = ab.prototype;ia = ea(ia, { type: "areaspline", closedStacks: !0, getSegmentPath: ab.getSegmentPath, closeSegment: ab.closeSegment, drawGraph: ab.drawGraph, drawLegendSymbol: K.drawRectangle });D.areaspline = ia;S.column = w(R, { borderColor: "#FFFFFF", borderWidth: 1, borderRadius: 0, groupPadding: 0.2, marker: null, pointPadding: 0.1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: { hover: { brightness: 0.1, shadow: !1 }, select: { color: "#C0C0C0", borderColor: "#000000", shadow: !1 } }, dataLabels: { align: null,
      verticalAlign: null, y: null }, stickyTracking: !1, threshold: 0 });ia = ea(M, { type: "column", pointAttrToOptions: { stroke: "borderColor", "stroke-width": "borderWidth", fill: "color", r: "borderRadius" }, cropShoulder: 0, trackerGroups: ["group", "dataLabelsGroup"], negStacks: !0, init: function init() {
      M.prototype.init.apply(this, arguments);var a = this,
          b = a.chart;b.hasRendered && q(b.series, function (b) {
        if (b.type === a.type) b.isDirty = !0;
      });
    }, getColumnMetrics: function getColumnMetrics() {
      var a = this,
          b = a.options,
          c = a.xAxis,
          d = a.yAxis,
          e = c.reversed,
          f,
          g = {},
          h,
          i = 0;b.grouping === !1 ? i = 1 : q(a.chart.series, function (b) {
        var c = b.options,
            e = b.yAxis;if (b.type === a.type && b.visible && d.len === e.len && d.pos === e.pos) c.stacking ? (f = b.stackKey, g[f] === r && (g[f] = i++), h = g[f]) : c.grouping !== !1 && (h = i++), b.columnIndex = h;
      });var c = y(O(c.transA) * (c.ordinalSlope || b.pointRange || c.closestPointRange || 1), c.len),
          j = c * b.groupPadding,
          k = (c - 2 * j) / i,
          l = b.pointWidth,
          b = t(l) ? (k - l) / 2 : k * b.pointPadding,
          l = o(l, k - 2 * b);return a.columnMetrics = { width: l, offset: b + (j + ((e ? i - (a.columnIndex || 0) : a.columnIndex) || 0) * k - c / 2) * (e ? -1 : 1) };
    }, translate: function translate() {
      var a = this.chart,
          b = this.options,
          c = b.borderWidth,
          d = this.yAxis,
          e = this.translatedThreshold = d.getThreshold(b.threshold),
          f = o(b.minPointLength, 5),
          b = this.getColumnMetrics(),
          g = b.width,
          h = this.barW = Va(s(g, 1 + 2 * c)),
          i = this.pointXOffset = b.offset,
          j = -(c % 2 ? 0.5 : 0),
          k = c % 2 ? 0.5 : 1;a.renderer.isVML && a.inverted && (k += 1);M.prototype.translate.apply(this);q(this.points, function (a) {
        var b = o(a.yBottom, e),
            c = y(s(-999 - b, a.plotY), d.len + 999 + b),
            n = a.plotX + i,
            q = h,
            r = y(c, b),
            x,
            c = s(c, b) - r;O(c) < f && f && (c = f, r = v(O(r - e) > f ? b - f : e - (d.translate(a.y, 0, 1, 0, 1) <= e ? f : 0)));a.barX = n;a.pointWidth = g;b = O(n) < 0.5;q = v(n + q) + j;n = v(n) + j;q -= n;x = O(r) < 0.5;c = v(r + c) + k;r = v(r) + k;c -= r;b && (n += 1, q -= 1);x && (r -= 1, c += 1);a.shapeType = "rect";a.shapeArgs = { x: n, y: r, width: q, height: c };
      });
    }, getSymbol: la, drawLegendSymbol: K.drawRectangle, drawGraph: la, drawPoints: function drawPoints() {
      var a = this,
          b = this.chart,
          c = a.options,
          d = b.renderer,
          e = b.options.animationLimit || 250,
          f;q(a.points, function (g) {
        var h = g.plotY,
            i = g.graphic;if (h !== r && !isNaN(h) && g.y !== null) f = g.shapeArgs, i ? (eb(i), i[b.pointCount < e ? "animate" : "attr"](w(f))) : g.graphic = d[g.shapeType](f).attr(g.pointAttr[g.selected ? "select" : ""]).add(a.group).shadow(c.shadow, null, c.stacking && !c.borderRadius);else if (i) g.graphic = i.destroy();
      });
    }, drawTracker: fb.drawTrackerPoint, animate: function animate(a) {
      var b = this.yAxis,
          c = this.options,
          d = this.chart.inverted,
          e = {};if (da) a ? (e.scaleY = 0.001, a = y(b.pos + b.len, s(b.pos, b.toPixels(c.threshold))), d ? e.translateX = a - b.len : e.translateY = a, this.group.attr(e)) : (e.scaleY = 1, e[d ? "translateX" : "translateY"] = b.pos, this.group.animate(e, this.options.animation), this.animate = null);
    }, remove: function remove() {
      var a = this,
          b = a.chart;b.hasRendered && q(b.series, function (b) {
        if (b.type === a.type) b.isDirty = !0;
      });M.prototype.remove.apply(a, arguments);
    } });D.column = ia;S.bar = w(S.column);ia = ea(ia, { type: "bar", inverted: !0 });D.bar = ia;S.scatter = w(R, { lineWidth: 0, tooltip: { headerFormat: '<span style="font-size: 10px; color:{series.color}">{series.name}</span><br/>', pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>", followPointer: !0 }, stickyTracking: !1 });ia = ea(M, { type: "scatter", sorted: !1,
    requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["markerGroup"], takeOrdinalPosition: !1, drawTracker: fb.drawTrackerPoint, drawGraph: function drawGraph() {
      this.options.lineWidth && M.prototype.drawGraph.call(this);
    }, setTooltipPoints: la });D.scatter = ia;S.pie = w(R, { borderColor: "#FFFFFF", borderWidth: 1, center: [null, null], clip: !1, colorByPoint: !0, dataLabels: { distance: 30, enabled: !0, formatter: function formatter() {
        return this.point.name;
      } }, ignoreHiddenPoint: !0, legendType: "point", marker: null, size: null, showInLegend: !1, slicedOffset: 10,
    states: { hover: { brightness: 0.1, shadow: !1 } }, stickyTracking: !1, tooltip: { followPointer: !0 } });R = { type: "pie", isCartesian: !1, pointClass: ea(Da, { init: function init() {
        Da.prototype.init.apply(this, arguments);var a = this,
            b;if (a.y < 0) a.y = null;u(a, { visible: a.visible !== !1, name: o(a.name, "Slice") });b = function b(_b2) {
          a.slice(_b2.type === "select");
        };A(a, "select", b);A(a, "unselect", b);return a;
      }, setVisible: function setVisible(a) {
        var b = this,
            c = b.series,
            d = c.chart,
            e;b.visible = b.options.visible = a = a === r ? !b.visible : a;c.options.data[Aa(b, c.data)] = b.options;
        e = a ? "show" : "hide";q(["graphic", "dataLabel", "connector", "shadowGroup"], function (a) {
          if (b[a]) b[a][e]();
        });b.legendItem && d.legend.colorizeItem(b, a);if (!c.isDirty && c.options.ignoreHiddenPoint) c.isDirty = !0, d.redraw();
      }, slice: function slice(a, b, c) {
        var d = this.series;Xa(c, d.chart);o(b, !0);this.sliced = this.options.sliced = a = t(a) ? a : !this.sliced;d.options.data[Aa(this, d.data)] = this.options;a = a ? this.slicedTranslation : { translateX: 0, translateY: 0 };this.graphic.animate(a);this.shadowGroup && this.shadowGroup.animate(a);
      } }), requireSorting: !1,
    noSharedTooltip: !0, trackerGroups: ["group", "dataLabelsGroup"], axisTypes: [], pointAttrToOptions: { stroke: "borderColor", "stroke-width": "borderWidth", fill: "color" }, getColor: la, animate: function animate(a) {
      var b = this,
          c = b.points,
          d = b.startAngleRad;if (!a) q(c, function (a) {
        var c = a.graphic,
            a = a.shapeArgs;c && (c.attr({ r: b.center[3] / 2, start: d, end: d }), c.animate({ r: a.r, start: a.start, end: a.end }, b.options.animation));
      }), b.animate = null;
    }, setData: function setData(a, b) {
      M.prototype.setData.call(this, a, !1);this.processData();this.generatePoints();
      o(b, !0) && this.chart.redraw();
    }, generatePoints: function generatePoints() {
      var a,
          b = 0,
          c,
          d,
          e,
          f = this.options.ignoreHiddenPoint;M.prototype.generatePoints.call(this);c = this.points;d = c.length;for (a = 0; a < d; a++) {
        e = c[a], b += f && !e.visible ? 0 : e.y;
      }this.total = b;for (a = 0; a < d; a++) {
        e = c[a], e.percentage = b > 0 ? e.y / b * 100 : 0, e.total = b;
      }
    }, translate: function translate(a) {
      this.generatePoints();var b = 0,
          c = this.options,
          d = c.slicedOffset,
          e = d + c.borderWidth,
          f,
          g,
          h,
          i = c.startAngle || 0,
          j = this.startAngleRad = Ka / 180 * (i - 90),
          i = (this.endAngleRad = Ka / 180 * ((c.endAngle || i + 360) - 90)) - j,
          k = this.points,
          l = c.dataLabels.distance,
          c = c.ignoreHiddenPoint,
          m,
          p = k.length,
          n;if (!a) this.center = a = this.getCenter();this.getX = function (b, c) {
        h = T.asin((b - a[1]) / (a[2] / 2 + l));return a[0] + (c ? -1 : 1) * ca(h) * (a[2] / 2 + l);
      };for (m = 0; m < p; m++) {
        n = k[m];f = j + b * i;if (!c || n.visible) b += n.percentage / 100;g = j + b * i;n.shapeType = "arc";n.shapeArgs = { x: a[0], y: a[1], r: a[2] / 2, innerR: a[3] / 2, start: v(f * 1E3) / 1E3, end: v(g * 1E3) / 1E3 };h = (g + f) / 2;h > 0.75 * i && (h -= 2 * Ka);n.slicedTranslation = { translateX: v(ca(h) * d), translateY: v(ha(h) * d) };f = ca(h) * a[2] / 2;g = ha(h) * a[2] / 2;n.tooltipPos = [a[0] + f * 0.7, a[1] + g * 0.7];n.half = h < -Ka / 2 || h > Ka / 2 ? 1 : 0;n.angle = h;e = y(e, l / 2);n.labelPos = [a[0] + f + ca(h) * l, a[1] + g + ha(h) * l, a[0] + f + ca(h) * e, a[1] + g + ha(h) * e, a[0] + f, a[1] + g, l < 0 ? "center" : n.half ? "right" : "left", h];
      }
    }, setTooltipPoints: la, drawGraph: null, drawPoints: function drawPoints() {
      var a = this,
          b = a.chart.renderer,
          c,
          d,
          e = a.options.shadow,
          f,
          g;if (e && !a.shadowGroup) a.shadowGroup = b.g("shadow").add(a.group);q(a.points, function (h) {
        d = h.graphic;g = h.shapeArgs;f = h.shadowGroup;if (e && !f) f = h.shadowGroup = b.g("shadow").add(a.shadowGroup);
        c = h.sliced ? h.slicedTranslation : { translateX: 0, translateY: 0 };f && f.attr(c);d ? d.animate(u(g, c)) : h.graphic = d = b.arc(g).setRadialReference(a.center).attr(h.pointAttr[h.selected ? "select" : ""]).attr({ "stroke-linejoin": "round" }).attr(c).add(a.group).shadow(e, f);h.visible !== void 0 && h.setVisible(h.visible);
      });
    }, sortByAngle: function sortByAngle(a, b) {
      a.sort(function (a, d) {
        return a.angle !== void 0 && (d.angle - a.angle) * b;
      });
    }, drawTracker: fb.drawTrackerPoint, drawLegendSymbol: K.drawRectangle, getCenter: qa.getCenter, getSymbol: la };R = ea(M, R);D.pie = R;M.prototype.drawDataLabels = function () {
    var a = this,
        b = a.options,
        c = b.cursor,
        d = b.dataLabels,
        b = a.points,
        e,
        f,
        g,
        h;if (d.enabled || a._hasPointLabels) a.dlProcessOptions && a.dlProcessOptions(d), h = a.plotGroup("dataLabelsGroup", "data-labels", a.visible ? "visible" : "hidden", d.zIndex || 6), f = d, q(b, function (b) {
      var j,
          k = b.dataLabel,
          l,
          m,
          p = b.connector,
          n = !0;e = b.options && b.options.dataLabels;j = o(e && e.enabled, f.enabled);if (k && !j) b.dataLabel = k.destroy();else if (j) {
        d = w(f, e);j = d.rotation;l = b.getLabelConfig();g = d.format ? Ha(d.format, l) : d.formatter.call(l, d);d.style.color = o(d.color, d.style.color, a.color, "black");if (k) {
          if (t(g)) k.attr({ text: g }), n = !1;else {
            if (b.dataLabel = k = k.destroy(), p) b.connector = p.destroy();
          }
        } else if (t(g)) {
          k = { fill: d.backgroundColor, stroke: d.borderColor, "stroke-width": d.borderWidth, r: d.borderRadius || 0, rotation: j, padding: d.padding, zIndex: 1 };for (m in k) {
            k[m] === r && delete k[m];
          }k = b.dataLabel = a.chart.renderer[j ? "text" : "label"](g, 0, -999, null, null, null, d.useHTML).attr(k).css(u(d.style, c && { cursor: c })).add(h).shadow(d.shadow);
        }k && a.alignDataLabel(b, k, d, null, n);
      }
    });
  };M.prototype.alignDataLabel = function (a, b, c, d, e) {
    var f = this.chart,
        g = f.inverted,
        h = o(a.plotX, -999),
        i = o(a.plotY, -999),
        j = b.getBBox();if (a = this.visible && (a.series.forceDL || f.isInsidePlot(a.plotX, a.plotY, g))) d = u({ x: g ? f.plotWidth - i : h, y: v(g ? f.plotHeight - h : i), width: 0, height: 0 }, d), u(c, { width: j.width, height: j.height }), c.rotation ? (g = { align: c.align, x: d.x + c.x + d.width / 2, y: d.y + c.y + d.height / 2 }, b[e ? "attr" : "animate"](g)) : (b.align(c, null, d), g = b.alignAttr, o(c.overflow, "justify") === "justify" ? this.justifyDataLabel(b, c, g, j, d, e) : o(c.crop, !0) && (a = f.isInsidePlot(g.x, g.y) && f.isInsidePlot(g.x + j.width, g.y + j.height)));if (!a) b.attr({ y: -999 }), b.placed = !1;
  };M.prototype.justifyDataLabel = function (a, b, c, d, e, f) {
    var g = this.chart,
        h = b.align,
        i = b.verticalAlign,
        j,
        k;j = c.x;if (j < 0) h === "right" ? b.align = "left" : b.x = -j, k = !0;j = c.x + d.width;if (j > g.plotWidth) h === "left" ? b.align = "right" : b.x = g.plotWidth - j, k = !0;j = c.y;if (j < 0) i === "bottom" ? b.verticalAlign = "top" : b.y = -j, k = !0;j = c.y + d.height;if (j > g.plotHeight) i === "top" ? b.verticalAlign = "bottom" : b.y = g.plotHeight - j, k = !0;if (k) a.placed = !f, a.align(b, null, e);
  };if (D.pie) D.pie.prototype.drawDataLabels = function () {
    var a = this,
        b = a.data,
        c,
        d = a.chart,
        e = a.options.dataLabels,
        f = o(e.connectorPadding, 10),
        g = o(e.connectorWidth, 1),
        h = d.plotWidth,
        d = d.plotHeight,
        i,
        j,
        k = o(e.softConnector, !0),
        l = e.distance,
        m = a.center,
        p = m[2] / 2,
        n = m[1],
        r = l > 0,
        t,
        x,
        u,
        w,
        y = [[], []],
        A,
        I,
        E,
        G,
        C,
        P = [0, 0, 0, 0],
        H = function H(a, b) {
      return b.y - a.y;
    };if (a.visible && (e.enabled || a._hasPointLabels)) {
      M.prototype.drawDataLabels.apply(a);q(b, function (a) {
        a.dataLabel && a.visible && y[a.half].push(a);
      });for (G = 0; !w && b[G];) {
        w = b[G] && b[G].dataLabel && (b[G].dataLabel.getBBox().height || 21), G++;
      }for (G = 2; G--;) {
        var b = [],
            F = [],
            D = y[G],
            B = D.length,
            z;a.sortByAngle(D, G - 0.5);if (l > 0) {
          for (C = n - p - l; C <= n + p + l; C += w) {
            b.push(C);
          }x = b.length;if (B > x) {
            c = [].concat(D);c.sort(H);for (C = B; C--;) {
              c[C].rank = C;
            }for (C = B; C--;) {
              D[C].rank >= x && D.splice(C, 1);
            }B = D.length;
          }for (C = 0; C < B; C++) {
            c = D[C];u = c.labelPos;c = 9999;var L, K;for (K = 0; K < x; K++) {
              L = O(b[K] - u[1]), L < c && (c = L, z = K);
            }if (z < C && b[C] !== null) z = C;else for (x < B - C + z && b[C] !== null && (z = x - B + C); b[z] === null;) {
              z++;
            }F.push({ i: z, y: b[z] });b[z] = null;
          }F.sort(H);
        }for (C = 0; C < B; C++) {
          c = D[C];u = c.labelPos;t = c.dataLabel;E = c.visible === !1 ? "hidden" : "visible";c = u[1];if (l > 0) {
            if (x = F.pop(), z = x.i, I = x.y, c > I && b[z + 1] !== null || c < I && b[z - 1] !== null) I = c;
          } else I = c;A = e.justify ? m[0] + (G ? -1 : 1) * (p + l) : a.getX(z === 0 || z === b.length - 1 ? c : I, G);t._attr = { visibility: E, align: u[6] };t._pos = { x: A + e.x + ({ left: f, right: -f }[u[6]] || 0), y: I + e.y - 10 };t.connX = A;t.connY = I;if (this.options.size === null) x = t.width, A - x < f ? P[3] = s(v(x - A + f), P[3]) : A + x > h - f && (P[1] = s(v(A + x - h + f), P[1])), I - w / 2 < 0 ? P[0] = s(v(-I + w / 2), P[0]) : I + w / 2 > d && (P[2] = s(v(I + w / 2 - d), P[2]));
        }
      }if (va(P) === 0 || this.verifyDataLabelOverflow(P)) this.placeDataLabels(), r && g && q(this.points, function (b) {
        i = b.connector;u = b.labelPos;if ((t = b.dataLabel) && t._pos) E = t._attr.visibility, A = t.connX, I = t.connY, j = k ? ["M", A + (u[6] === "left" ? 5 : -5), I, "C", A, I, 2 * u[2] - u[4], 2 * u[3] - u[5], u[2], u[3], "L", u[4], u[5]] : ["M", A + (u[6] === "left" ? 5 : -5), I, "L", u[2], u[3], "L", u[4], u[5]], i ? (i.animate({ d: j }), i.attr("visibility", E)) : b.connector = i = a.chart.renderer.path(j).attr({ "stroke-width": g,
          stroke: e.connectorColor || b.color || "#606060", visibility: E }).add(a.group);else if (i) b.connector = i.destroy();
      });
    }
  }, D.pie.prototype.placeDataLabels = function () {
    q(this.points, function (a) {
      var a = a.dataLabel,
          b;if (a) (b = a._pos) ? (a.attr(a._attr), a[a.moved ? "animate" : "attr"](b), a.moved = !0) : a && a.attr({ y: -999 });
    });
  }, D.pie.prototype.alignDataLabel = la, D.pie.prototype.verifyDataLabelOverflow = function (a) {
    var b = this.center,
        c = this.options,
        d = c.center,
        e = c = c.minSize || 80,
        f;d[0] !== null ? e = s(b[2] - s(a[1], a[3]), c) : (e = s(b[2] - a[1] - a[3], c), b[0] += (a[3] - a[1]) / 2);d[1] !== null ? e = s(y(e, b[2] - s(a[0], a[2])), c) : (e = s(y(e, b[2] - a[0] - a[2]), c), b[1] += (a[0] - a[2]) / 2);e < b[2] ? (b[2] = e, this.translate(b), q(this.points, function (a) {
      if (a.dataLabel) a.dataLabel._pos = null;
    }), this.drawDataLabels && this.drawDataLabels()) : f = !0;return f;
  };if (D.column) D.column.prototype.alignDataLabel = function (a, b, c, d, e) {
    var f = this.chart,
        g = f.inverted,
        h = a.dlBox || a.shapeArgs,
        i = a.below || a.plotY > o(this.translatedThreshold, f.plotSizeY),
        j = o(c.inside, !!this.options.stacking);if (h && (d = w(h), g && (d = { x: f.plotWidth - d.y - d.height, y: f.plotHeight - d.x - d.width, width: d.height, height: d.width }), !j)) g ? (d.x += i ? 0 : d.width, d.width = 0) : (d.y += i ? d.height : 0, d.height = 0);c.align = o(c.align, !g || j ? "center" : i ? "right" : "left");c.verticalAlign = o(c.verticalAlign, g || j ? "middle" : i ? "top" : "bottom");M.prototype.alignDataLabel.call(this, a, b, c, d, e);
  };U(M.prototype, "init", function (a) {
    var b;a.apply(this, Array.prototype.slice.call(arguments, 1));(b = this.xAxis) && b.options.ordinal && A(this, "updatedData", function () {
      delete b.ordinalIndex;
    });
  });
  U(W.prototype, "getTimeTicks", function (a, b, c, d, e, f, g, h) {
    var i = 0,
        j = 0,
        k,
        l = {},
        m,
        p,
        n,
        o = [],
        q = -Number.MAX_VALUE,
        x = this.options.tickPixelInterval;if (!this.options.ordinal || !f || f.length < 3 || c === r) return a.call(this, b, c, d, e);for (p = f.length; j < p; j++) {
      n = j && f[j - 1] > d;f[j] < c && (i = j);if (j === p - 1 || f[j + 1] - f[j] > g * 5 || n) {
        if (f[j] > q) {
          for (k = a.call(this, b, f[i], f[j], e); k.length && k[0] <= q;) {
            k.shift();
          }k.length && (q = k[k.length - 1]);o = o.concat(k);
        }i = j + 1;
      }if (n) break;
    }a = k.info;if (h && a.unitRange <= B.hour) {
      j = o.length - 1;for (i = 1; i < j; i++) {
        new Date(o[i] - Ja)[Ua]() !== new Date(o[i - 1] - Ja)[Ua]() && (l[o[i]] = "day", m = !0);
      }m && (l[o[0]] = "day");a.higherRanks = l;
    }o.info = a;if (h && t(x)) {
      var h = a = o.length,
          j = [],
          s;for (m = []; h--;) {
        i = this.translate(o[h]), s && (m[h] = s - i), j[h] = s = i;
      }m.sort();m = m[Q(m.length / 2)];m < x * 0.6 && (m = null);h = o[a - 1] > d ? a - 1 : a;for (s = void 0; h--;) {
        i = j[h], d = s - i, s && d < x * 0.8 && (m === null || d < m * 0.8) ? (l[o[h]] && !l[o[h + 1]] ? (d = h + 1, s = i) : d = h, o.splice(d, 1)) : s = i;
      }
    }return o;
  });u(W.prototype, { beforeSetTickPositions: function beforeSetTickPositions() {
      var a,
          b = [],
          c = !1,
          d,
          e = this.getExtremes(),
          f = e.min,
          e = e.max,
          g;
      if (this.options.ordinal) {
        q(this.series, function (c, d) {
          if (c.visible !== !1 && c.takeOrdinalPosition !== !1 && (b = b.concat(c.processedXData), a = b.length, b.sort(function (a, b) {
            return a - b;
          }), a)) for (d = a - 1; d--;) {
            b[d] === b[d + 1] && b.splice(d, 1);
          }
        });a = b.length;if (a > 2) {
          d = b[1] - b[0];for (g = a - 1; g-- && !c;) {
            b[g + 1] - b[g] !== d && (c = !0);
          }if (!this.options.keepOrdinalPadding && (b[0] - f > d || e - b[b.length - 1] > d)) c = !0;
        }c ? (this.ordinalPositions = b, c = this.val2lin(s(f, b[0]), !0), d = this.val2lin(y(e, b[b.length - 1]), !0), this.ordinalSlope = e = (e - f) / (d - c), this.ordinalOffset = f - c * e) : this.ordinalPositions = this.ordinalSlope = this.ordinalOffset = r;
      }this.groupIntervalFactor = null;
    }, val2lin: function val2lin(a, b) {
      var c = this.ordinalPositions;if (c) {
        var d = c.length,
            e,
            f;for (e = d; e--;) {
          if (c[e] === a) {
            f = e;break;
          }
        }for (e = d - 1; e--;) {
          if (a > c[e] || e === 0) {
            c = (a - c[e]) / (c[e + 1] - c[e]);f = e + c;break;
          }
        }return b ? f : this.ordinalSlope * (f || 0) + this.ordinalOffset;
      } else return a;
    }, lin2val: function lin2val(a, b) {
      var c = this.ordinalPositions;if (c) {
        var d = this.ordinalSlope,
            e = this.ordinalOffset,
            f = c.length - 1,
            g,
            h;if (b) a < 0 ? a = c[0] : a > f ? a = c[f] : (f = Q(a), h = a - f);else for (; f--;) {
          if (g = d * f + e, a >= g) {
            d = d * (f + 1) + e;h = (a - g) / (d - g);break;
          }
        }return h !== r && c[f] !== r ? c[f] + (h ? h * (c[f + 1] - c[f]) : 0) : a;
      } else return a;
    }, getExtendedPositions: function getExtendedPositions() {
      var a = this.chart,
          b = this.series[0].currentDataGrouping,
          c = this.ordinalIndex,
          d = b ? b.count + b.unitName : "raw",
          e = this.getExtremes(),
          f,
          g;if (!c) c = this.ordinalIndex = {};if (!c[d]) f = { series: [], getExtremes: function getExtremes() {
          return { min: e.dataMin, max: e.dataMax };
        }, options: { ordinal: !0 }, val2lin: W.prototype.val2lin }, q(this.series, function (c) {
        g = { xAxis: f, xData: c.xData,
          chart: a, destroyGroupedData: la };g.options = { dataGrouping: b ? { enabled: !0, forced: !0, approximation: "open", units: [[b.unitName, [b.count]]] } : { enabled: !1 } };c.processData.apply(g);f.series.push(g);
      }), this.beforeSetTickPositions.apply(f), c[d] = f.ordinalPositions;return c[d];
    }, getGroupIntervalFactor: function getGroupIntervalFactor(a, b, c) {
      var d = 0,
          c = c.processedXData,
          e = c.length,
          f = [],
          g = this.groupIntervalFactor;if (!g) {
        for (; d < e - 1; d++) {
          f[d] = c[d + 1] - c[d];
        }f.sort(function (a, b) {
          return a - b;
        });d = f[Q(e / 2)];a = s(a, c[0]);b = y(b, c[e - 1]);this.groupIntervalFactor = g = e * d / (b - a);
      }return g;
    }, postProcessTickInterval: function postProcessTickInterval(a) {
      var b = this.ordinalSlope;return b ? a / (b / this.closestPointRange) : a;
    } });U(ya.prototype, "pan", function (a, b) {
    var c = this.xAxis[0],
        d = b.chartX,
        e = !1;if (c.options.ordinal && c.series.length) {
      var f = this.mouseDownX,
          g = c.getExtremes(),
          h = g.dataMax,
          i = g.min,
          j = g.max,
          k = this.hoverPoints,
          l = c.closestPointRange,
          f = (f - d) / (c.translationSlope * (c.ordinalSlope || l)),
          m = { ordinalPositions: c.getExtendedPositions() },
          l = c.lin2val,
          p = c.val2lin,
          n;if (m.ordinalPositions) {
        if (O(f) > 1) k && q(k, function (a) {
          a.setState();
        }), f < 0 ? (k = m, n = c.ordinalPositions ? c : m) : (k = c.ordinalPositions ? c : m, n = m), m = n.ordinalPositions, h > m[m.length - 1] && m.push(h), f = c.toFixedRange(null, null, l.apply(k, [p.apply(k, [i, !0]) + f, !0]), l.apply(n, [p.apply(n, [j, !0]) + f, !0])), f.min >= y(g.dataMin, i) && f.max <= s(h, j) && c.setExtremes(f.min, f.max, !0, !1, { trigger: "pan" }), this.mouseDownX = d, z(this.container, { cursor: "move" });
      } else e = !0;
    } else e = !0;e && a.apply(this, Array.prototype.slice.call(arguments, 1));
  });U(M.prototype, "getSegments", function (a) {
    var b,
        c = this.options.gapSize,
        d = this.xAxis;a.apply(this, Array.prototype.slice.call(arguments, 1));if (c) b = this.segments, q(b, function (a, f) {
      for (var g = a.length - 1; g--;) {
        a[g + 1].x - a[g].x > d.closestPointRange * c && b.splice(f + 1, 0, a.splice(g + 1, a.length - g));
      }
    });
  });var Y = M.prototype,
      fc = Y.processData,
      gc = Y.generatePoints,
      hc = Y.destroy,
      ic = Y.tooltipHeaderFormatter,
      jc = { approximation: "average", groupPixelWidth: 2, dateTimeLabelFormats: gb("millisecond", ["%A, %b %e, %H:%M:%S.%L", "%A, %b %e, %H:%M:%S.%L", "-%H:%M:%S.%L"], "second", ["%A, %b %e, %H:%M:%S", "%A, %b %e, %H:%M:%S", "-%H:%M:%S"], "minute", ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"], "hour", ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"], "day", ["%A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"], "week", ["Week from %A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"], "month", ["%B %Y", "%B", "-%B %Y"], "year", ["%Y", "%Y", "-%Y"]) },
      Wb = { line: {}, spline: {}, area: {}, areaspline: {}, column: { approximation: "sum", groupPixelWidth: 10 }, arearange: { approximation: "range" }, areasplinerange: { approximation: "range" }, columnrange: { approximation: "range",
      groupPixelWidth: 10 }, candlestick: { approximation: "ohlc", groupPixelWidth: 10 }, ohlc: { approximation: "ohlc", groupPixelWidth: 5 } },
      Xb = [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1]], ["week", [1]], ["month", [1, 3, 6]], ["year", null]],
      Oa = { sum: function sum(a) {
      var b = a.length,
          c;if (!b && a.hasNulls) c = null;else if (b) for (c = 0; b--;) {
        c += a[b];
      }return c;
    }, average: function average(a) {
      var b = a.length,
          a = Oa.sum(a);typeof a === "number" && b && (a /= b);return a;
    },
    open: function open(a) {
      return a.length ? a[0] : a.hasNulls ? null : r;
    }, high: function high(a) {
      return a.length ? va(a) : a.hasNulls ? null : r;
    }, low: function low(a) {
      return a.length ? Ra(a) : a.hasNulls ? null : r;
    }, close: function close(a) {
      return a.length ? a[a.length - 1] : a.hasNulls ? null : r;
    }, ohlc: function ohlc(a, b, c, d) {
      a = Oa.open(a);b = Oa.high(b);c = Oa.low(c);d = Oa.close(d);if (typeof a === "number" || typeof b === "number" || typeof c === "number" || typeof d === "number") return [a, b, c, d];
    }, range: function range(a, b) {
      a = Oa.low(a);b = Oa.high(b);if (typeof a === "number" || typeof b === "number") return [a, b];
    } };Y.groupData = function (a, b, c, d) {
    var e = this.data,
        f = this.options.data,
        g = [],
        h = [],
        i = a.length,
        j,
        k,
        l = !!b,
        m = [[], [], [], []],
        d = typeof d === "function" ? d : Oa[d],
        p = this.pointArrayMap,
        n = p && p.length,
        o;for (o = 0; o <= i; o++) {
      for (; c[1] !== r && a[o] >= c[1] || o === i;) {
        if (j = c.shift(), k = d.apply(0, m), k !== r && (g.push(j), h.push(k)), m[0] = [], m[1] = [], m[2] = [], m[3] = [], o === i) break;
      }if (o === i) break;if (p) {
        j = this.cropStart + o;j = e && e[j] || this.pointClass.prototype.applyOptions.apply({ series: this }, [f[j]]);var q;for (k = 0; k < n; k++) {
          if (q = j[p[k]], typeof q === "number") m[k].push(q);else if (q === null) m[k].hasNulls = !0;
        }
      } else if (j = l ? b[o] : null, typeof j === "number") m[0].push(j);else if (j === null) m[0].hasNulls = !0;
    }return [g, h];
  };Y.processData = function () {
    var a = this.chart,
        b = this.options,
        c = b.dataGrouping,
        d = c && o(c.enabled, a.options._stock),
        e;this.forceCrop = d;this.groupPixelWidth = null;if (fc.apply(this, arguments) !== !1 && d) {
      this.destroyGroupedData();var f = this.processedXData,
          g = this.processedYData,
          h = a.plotSizeX,
          i = this.xAxis,
          j = i.options.ordinal,
          k = this.groupPixelWidth = i.getGroupPixelWidth && i.getGroupPixelWidth(),
          a = this.pointRange;if (k) {
        e = !0;this.points = null;d = i.getExtremes();a = d.min;d = d.max;j = j && i.getGroupIntervalFactor(a, d, this) || 1;h = k * (d - a) / h * j;i = i.getTimeTicks(i.normalizeTimeTickInterval(h, c.units || Xb), a, d, null, f, this.closestPointRange);g = Y.groupData.apply(this, [f, g, i, c.approximation]);f = g[0];g = g[1];if (c.smoothed) {
          c = f.length - 1;for (f[c] = d; c-- && c > 0;) {
            f[c] += h / 2;
          }f[0] = a;
        }this.currentDataGrouping = i.info;if (b.pointRange === null) this.pointRange = i.info.totalRange;this.closestPointRange = i.info.totalRange;
        this.processedXData = f;this.processedYData = g;
      } else this.currentDataGrouping = null, this.pointRange = a;this.hasGroupedData = e;
    }
  };Y.destroyGroupedData = function () {
    var a = this.groupedData;q(a || [], function (b, c) {
      b && (a[c] = b.destroy ? b.destroy() : null);
    });this.groupedData = null;
  };Y.generatePoints = function () {
    gc.apply(this);this.destroyGroupedData();this.groupedData = this.hasGroupedData ? this.points : null;
  };Y.tooltipHeaderFormatter = function (a) {
    var b = this.tooltipOptions,
        c = this.options.dataGrouping,
        d = b.xDateFormat,
        e,
        f = this.xAxis,
        g,
        h;if (f && f.options.type === "datetime" && c && ua(a.key)) {
      g = this.currentDataGrouping;c = c.dateTimeLabelFormats;if (g) f = c[g.unitName], g.count === 1 ? d = f[0] : (d = f[1], e = f[2]);else if (!d && c) for (h in B) {
        if (B[h] >= f.closestPointRange) {
          d = c[h][0];break;
        }
      }d = ra(d, a.key);e && (d += ra(e, a.key + g.totalRange - 1));a = b.headerFormat.replace("{point.key}", d);
    } else a = ic.call(this, a);return a;
  };Y.destroy = function () {
    for (var a = this.groupedData || [], b = a.length; b--;) {
      a[b] && a[b].destroy();
    }hc.apply(this);
  };U(Y, "setOptions", function (a, b) {
    var c = a.call(this, b),
        d = this.type,
        e = this.chart.options.plotOptions,
        f = S[d].dataGrouping;if (Wb[d]) f || (f = w(jc, Wb[d])), c.dataGrouping = w(f, e.series && e.series.dataGrouping, e[d].dataGrouping, b.dataGrouping);if (this.chart.options._stock) this.requireSorting = !0;return c;
  });W.prototype.getGroupPixelWidth = function () {
    var a = this.series,
        b = a.length,
        c,
        d = 0,
        e = !1,
        f;for (c = b; c--;) {
      (f = a[c].options.dataGrouping) && (d = s(d, f.groupPixelWidth));
    }for (c = b; c--;) {
      if (f = a[c].options.dataGrouping) if (b = (a[c].processedXData || a[c].data).length, a[c].groupPixelWidth || b > this.chart.plotSizeX / d || b && f.forced) e = !0;
    }return e ? d : 0;
  };S.ohlc = w(S.column, { lineWidth: 1, tooltip: { pointFormat: '<span style="color:{series.color};font-weight:bold">{series.name}</span><br/>Open: {point.open}<br/>High: {point.high}<br/>Low: {point.low}<br/>Close: {point.close}<br/>' }, states: { hover: { lineWidth: 3 } }, threshold: null });R = ea(D.column, { type: "ohlc", pointArrayMap: ["open", "high", "low", "close"], toYData: function toYData(a) {
      return [a.open, a.high, a.low, a.close];
    }, pointValKey: "high", pointAttrToOptions: { stroke: "color",
      "stroke-width": "lineWidth" }, upColorProp: "stroke", getAttribs: function getAttribs() {
      D.column.prototype.getAttribs.apply(this, arguments);var a = this.options,
          b = a.states,
          a = a.upColor || this.color,
          c = w(this.pointAttr),
          d = this.upColorProp;c[""][d] = a;c.hover[d] = b.hover.upColor || a;c.select[d] = b.select.upColor || a;q(this.points, function (a) {
        if (a.open < a.close) a.pointAttr = c;
      });
    }, translate: function translate() {
      var a = this.yAxis;D.column.prototype.translate.apply(this);q(this.points, function (b) {
        if (b.open !== null) b.plotOpen = a.translate(b.open, 0, 1, 0, 1);if (b.close !== null) b.plotClose = a.translate(b.close, 0, 1, 0, 1);
      });
    }, drawPoints: function drawPoints() {
      var a = this,
          b = a.chart,
          c,
          d,
          e,
          f,
          g,
          h,
          i,
          j;q(a.points, function (k) {
        if (k.plotY !== r) i = k.graphic, c = k.pointAttr[k.selected ? "selected" : ""], f = c["stroke-width"] % 2 / 2, j = v(k.plotX) + f, g = v(k.shapeArgs.width / 2), h = ["M", j, v(k.yBottom), "L", j, v(k.plotY)], k.open !== null && (d = v(k.plotOpen) + f, h.push("M", j, d, "L", j - g, d)), k.close !== null && (e = v(k.plotClose) + f, h.push("M", j, e, "L", j + g, e)), i ? i.animate({ d: h }) : k.graphic = b.renderer.path(h).attr(c).add(a.group);
      });
    },
    animate: null });D.ohlc = R;S.candlestick = w(S.column, { lineColor: "black", lineWidth: 1, states: { hover: { lineWidth: 2 } }, tooltip: S.ohlc.tooltip, threshold: null, upColor: "white" });R = ea(R, { type: "candlestick", pointAttrToOptions: { fill: "color", stroke: "lineColor", "stroke-width": "lineWidth" }, upColorProp: "fill", getAttribs: function getAttribs() {
      D.ohlc.prototype.getAttribs.apply(this, arguments);var a = this.options,
          b = a.states,
          c = a.upLineColor || a.lineColor,
          d = b.hover.upLineColor || c,
          e = b.select.upLineColor || c;q(this.points, function (a) {
        if (a.open < a.close) a.pointAttr[""].stroke = c, a.pointAttr.hover.stroke = d, a.pointAttr.select.stroke = e;
      });
    }, drawPoints: function drawPoints() {
      var a = this,
          b = a.chart,
          c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          p;q(a.points, function (n) {
        l = n.graphic;if (n.plotY !== r) c = n.pointAttr[n.selected ? "selected" : ""], j = c["stroke-width"] % 2 / 2, k = v(n.plotX) + j, d = n.plotOpen, e = n.plotClose, f = T.min(d, e), g = T.max(d, e), p = v(n.shapeArgs.width / 2), h = v(f) !== v(n.plotY), i = g !== n.yBottom, f = v(f) + j, g = v(g) + j, m = ["M", k - p, g, "L", k - p, f, "L", k + p, f, "L", k + p, g, "L", k - p, g, "M", k, f, "L", k, h ? v(n.plotY) : f, "M", k, g, "L", k, i ? v(n.yBottom) : g, "Z"], l ? l.animate({ d: m }) : n.graphic = b.renderer.path(m).attr(c).add(a.group).shadow(a.options.shadow);
      });
    } });D.candlestick = R;var sb = sa.prototype.symbols;S.flags = w(S.column, { dataGrouping: null, fillColor: "white", lineWidth: 1, pointRange: 0, shape: "flag", stackDistance: 12, states: { hover: { lineColor: "black", fillColor: "#FCFFC5" } }, style: { fontSize: "11px", fontWeight: "bold", textAlign: "center" }, tooltip: { pointFormat: "{point.text}<br/>" }, threshold: null, y: -30 });D.flags = ea(D.column, { type: "flags",
    sorted: !1, noSharedTooltip: !0, takeOrdinalPosition: !1, trackerGroups: ["markerGroup"], forceCrop: !0, init: M.prototype.init, pointAttrToOptions: { fill: "fillColor", stroke: "color", "stroke-width": "lineWidth", r: "radius" }, translate: function translate() {
      D.column.prototype.translate.apply(this);var a = this.chart,
          b = this.points,
          c = b.length - 1,
          d,
          e,
          f = this.options.onSeries,
          f = (d = f && a.get(f)) && d.options.step,
          g = d && d.points,
          h = g && g.length,
          i = this.xAxis,
          j = i.getExtremes(),
          k,
          l,
          m;if (d && d.visible && h) {
        d = d.currentDataGrouping;l = g[h - 1].x + (d ? d.totalRange : 0);for (b.sort(function (a, b) {
          return a.x - b.x;
        }); h-- && b[c];) {
          if (d = b[c], k = g[h], k.x <= d.x && k.plotY !== r) {
            if (d.x <= l) d.plotY = k.plotY, k.x < d.x && !f && (m = g[h + 1]) && m.plotY !== r && (d.plotY += (d.x - k.x) / (m.x - k.x) * (m.plotY - k.plotY));c--;h++;if (c < 0) break;
          }
        }
      }q(b, function (c, d) {
        if (c.plotY === r) c.x >= j.min && c.x <= j.max ? c.plotY = a.chartHeight - i.bottom - (i.opposite ? i.height : 0) + i.offset - a.plotTop : c.shapeArgs = {};if ((e = b[d - 1]) && e.plotX === c.plotX) {
          if (e.stackIndex === r) e.stackIndex = 0;c.stackIndex = e.stackIndex + 1;
        }
      });
    }, drawPoints: function drawPoints() {
      var a,
          b = this.points,
          c = this.chart.renderer,
          d,
          e,
          f = this.options,
          g = f.y,
          h,
          i,
          j,
          k,
          l = f.lineWidth % 2 / 2,
          m,
          p;for (i = b.length; i--;) {
        if (j = b[i], a = j.plotX > this.xAxis.len, d = j.plotX + (a ? l : -l), k = j.stackIndex, h = j.options.shape || f.shape, e = j.plotY, e !== r && (e = j.plotY + g + l - (k !== r && k * f.stackDistance)), m = k ? r : j.plotX + l, p = k ? r : j.plotY, k = j.graphic, e !== r && d >= 0 && !a) a = j.pointAttr[j.selected ? "select" : ""], k ? k.attr({ x: d, y: e, r: a.r, anchorX: m, anchorY: p }) : j.graphic = c.label(j.options.title || f.title || "A", d, e, h, m, p, f.useHTML).css(w(f.style, j.style)).attr(a).attr({ align: h === "flag" ? "left" : "center", width: f.width, height: f.height }).add(this.markerGroup).shadow(f.shadow), j.tooltipPos = [d, e];else if (k) j.graphic = k.destroy();
      }
    }, drawTracker: function drawTracker() {
      var a = this.points;fb.drawTrackerPoint.apply(this);q(a, function (b) {
        var c = b.graphic;c && A(c.element, "mouseover", function () {
          if (b.stackIndex > 0 && !b.raised) b._y = c.y, c.attr({ y: b._y - 8 }), b.raised = !0;q(a, function (a) {
            if (a !== b && a.raised && a.graphic) a.graphic.attr({ y: a._y }), a.raised = !1;
          });
        });
      });
    }, animate: la });sb.flag = function (a, b, c, d, e) {
    var f = e && e.anchorX || a,
        e = e && e.anchorY || b;return ["M", f, e, "L", a, b + d, a, b, a + c, b, a + c, b + d, a, b + d, "M", f, e, "Z"];
  };q(["circle", "square"], function (a) {
    sb[a + "pin"] = function (b, c, d, e, f) {
      var g = f && f.anchorX,
          f = f && f.anchorY,
          b = sb[a](b, c, d, e);g && f && b.push("M", g, c > f ? c : c + e, "L", g, f);return b;
    };
  });Za === Highcharts.VMLRenderer && q(["flag", "circlepin", "squarepin"], function (a) {
    rb.prototype.symbols[a] = sb[a];
  });R = gb("linearGradient", { x1: 0, y1: 0, x2: 0, y2: 1 }, "stops", [[0, "#FFF"], [1, "#CCC"]]);K = [].concat(Xb);K[4] = ["day", [1, 2, 3, 4]];K[5] = ["week", [1, 2, 3]];u(L, { navigator: { handles: { backgroundColor: "#FFF",
        borderColor: "#666" }, height: 40, margin: 10, maskFill: "rgba(255, 255, 255, 0.75)", outlineColor: "#444", outlineWidth: 1, series: { type: D.areaspline === r ? "line" : "areaspline", color: "#4572A7", compare: null, fillOpacity: 0.4, dataGrouping: { approximation: "average", enabled: !0, groupPixelWidth: 2, smoothed: !0, units: K }, dataLabels: { enabled: !1, zIndex: 2 }, id: "highcharts-navigator-series", lineColor: "#4572A7", lineWidth: 1, marker: { enabled: !1 }, pointRange: 0, shadow: !1, threshold: null }, xAxis: { tickWidth: 0, lineWidth: 0, gridLineWidth: 1, tickPixelInterval: 200,
        labels: { align: "left", x: 3, y: -4 }, crosshair: { label: { enabled: !1 } } }, yAxis: { gridLineWidth: 0, startOnTick: !1, endOnTick: !1, minPadding: 0.1, maxPadding: 0.1, labels: { enabled: !1 }, crosshair: { enabled: !1, label: { enabled: !1 } }, title: { text: null }, tickWidth: 0 } }, scrollbar: { height: cb ? 20 : 14, barBackgroundColor: R, barBorderRadius: 2, barBorderWidth: 1, barBorderColor: "#666", buttonArrowColor: "#666", buttonBackgroundColor: R, buttonBorderColor: "#666", buttonBorderRadius: 2, buttonBorderWidth: 1, minWidth: 6, rifleColor: "#666", trackBackgroundColor: gb("linearGradient", { x1: 0, y1: 0, x2: 0, y2: 1 }, "stops", [[0, "#EEE"], [1, "#FFF"]]), trackBorderColor: "#CCC", trackBorderWidth: 1, liveRedraw: da && !cb } });Bb.prototype = { drawHandle: function drawHandle(a, b) {
      var c = this.chart,
          d = c.renderer,
          e = this.elementsToDestroy,
          f = this.handles,
          g = this.navigatorOptions.handles,
          g = { fill: g.backgroundColor, stroke: g.borderColor, "stroke-width": 1 },
          h;this.rendered || (f[b] = d.g().css({ cursor: "e-resize" }).attr({ zIndex: 4 - b }).add(), h = d.rect(-4.5, 0, 9, 16, 3, 1).attr(g).add(f[b]), e.push(h), h = d.path(["M", -1.5, 4, "L", -1.5, 12, "M", 0.5, 4, "L", 0.5, 12]).attr(g).add(f[b]), e.push(h));f[b][c.isResizing ? "animate" : "attr"]({ translateX: this.scrollerLeft + this.scrollbarHeight + parseInt(a, 10), translateY: this.top + this.height / 2 - 8 });
    }, drawScrollbarButton: function drawScrollbarButton(a) {
      var b = this.chart.renderer,
          c = this.elementsToDestroy,
          d = this.scrollbarButtons,
          e = this.scrollbarHeight,
          f = this.scrollbarOptions,
          g;this.rendered || (d[a] = b.g().add(this.scrollbarGroup), g = b.rect(-0.5, -0.5, e + 1, e + 1, f.buttonBorderRadius, f.buttonBorderWidth).attr({ stroke: f.buttonBorderColor, "stroke-width": f.buttonBorderWidth,
        fill: f.buttonBackgroundColor }).add(d[a]), c.push(g), g = b.path(["M", e / 2 + (a ? -1 : 1), e / 2 - 3, "L", e / 2 + (a ? -1 : 1), e / 2 + 3, e / 2 + (a ? 2 : -2), e / 2]).attr({ fill: f.buttonArrowColor }).add(d[a]), c.push(g));a && d[a].attr({ translateX: this.scrollerWidth - e });
    }, render: function render(a, b, c, d) {
      var e = this.chart,
          f = e.renderer,
          g,
          h,
          i,
          j,
          k = this.scrollbarGroup,
          l = this.navigatorGroup,
          m = this.scrollbar,
          l = this.xAxis,
          p = this.scrollbarTrack,
          n = this.scrollbarHeight,
          q = this.scrollbarEnabled,
          r = this.navigatorOptions,
          x = this.scrollbarOptions,
          t = x.minWidth,
          u = this.height,
          w = this.top,
          A = this.navigatorEnabled,
          I = r.outlineWidth,
          z = I / 2,
          G = 0,
          C = this.outlineHeight,
          E = x.barBorderRadius,
          D = x.barBorderWidth,
          B = w + z,
          F;if (!isNaN(a)) {
        this.navigatorLeft = g = o(l.left, e.plotLeft + n);this.navigatorWidth = h = o(l.len, e.plotWidth - 2 * n);this.scrollerLeft = i = g - n;this.scrollerWidth = j = j = h + 2 * n;l.getExtremes && (F = this.getUnionExtremes(!0)) && (F.dataMin !== l.min || F.dataMax !== l.max) && l.setExtremes(F.dataMin, F.dataMax, !0, !1);c = o(c, l.translate(a));d = o(d, l.translate(b));if (isNaN(c) || O(c) === Infinity) c = 0, d = j;this.zoomedMax = y(s(c, d), h);this.zoomedMin = s(this.fixedWidth ? this.zoomedMax - this.fixedWidth : y(c, d), 0);this.range = this.zoomedMax - this.zoomedMin;c = v(this.zoomedMax);b = v(this.zoomedMin);a = c - b;if (!this.rendered) {
          if (A) this.navigatorGroup = l = f.g("navigator").attr({ zIndex: 3 }).add(), this.leftShade = f.rect().attr({ fill: r.maskFill }).add(l), this.rightShade = f.rect().attr({ fill: r.maskFill }).add(l), this.outline = f.path().attr({ "stroke-width": I, stroke: r.outlineColor }).add(l);if (q) this.scrollbarGroup = k = f.g("scrollbar").add(), m = x.trackBorderWidth, this.scrollbarTrack = p = f.rect().attr({ y: -m % 2 / 2, fill: x.trackBackgroundColor, stroke: x.trackBorderColor, "stroke-width": m, r: x.trackBorderRadius || 0, height: n }).add(k), this.scrollbar = m = f.rect().attr({ y: -D % 2 / 2, height: n, fill: x.barBackgroundColor, stroke: x.barBorderColor, "stroke-width": D, r: E }).add(k), this.scrollbarRifles = f.path().attr({ stroke: x.rifleColor, "stroke-width": 1 }).add(k);
        }e = e.isResizing ? "animate" : "attr";A && (this.leftShade[e]({ x: g, y: w, width: b, height: u }), this.rightShade[e]({ x: g + c, y: w, width: h - c, height: u }), this.outline[e]({ d: ["M", i, B, "L", g + b + z, B, g + b + z, B + C - n, "M", g + c - z, B + C - n, "L", g + c - z, B, i + j, B] }), this.drawHandle(b + z, 0), this.drawHandle(c + z, 1));if (q && k) this.drawScrollbarButton(0), this.drawScrollbarButton(1), k[e]({ translateX: i, translateY: v(B + u) }), p[e]({ width: j }), g = n + b, h = a - D, h < t && (G = (t - h) / 2, h = t, g -= G), this.scrollbarPad = G, m[e]({ x: Q(g) + D % 2 / 2, width: h }), t = n + b + a / 2 - 0.5, this.scrollbarRifles.attr({ visibility: a > 12 ? "visible" : "hidden" })[e]({ d: ["M", t - 3, n / 4, "L", t - 3, 2 * n / 3, "M", t, n / 4, "L", t, 2 * n / 3, "M", t + 3, n / 4, "L", t + 3, 2 * n / 3] });
        this.scrollbarPad = G;this.rendered = !0;
      }
    }, addEvents: function addEvents() {
      var a = this.chart.container,
          b = this.mouseDownHandler,
          c = this.mouseMoveHandler,
          d = this.mouseUpHandler,
          e;e = [[a, "mousedown", b], [a, "mousemove", c], [document, "mouseup", d]];db && e.push([a, "touchstart", b], [a, "touchmove", c], [document, "touchend", d]);q(e, function (a) {
        A.apply(null, a);
      });this._events = e;
    }, removeEvents: function removeEvents() {
      q(this._events, function (a) {
        X.apply(null, a);
      });this._events = r;this.navigatorEnabled && this.baseSeries && X(this.baseSeries, "updatedData", this.updatedDataHandler);
    }, init: function init() {
      var a = this,
          b = a.chart,
          c,
          d,
          e = a.scrollbarHeight,
          f = a.navigatorOptions,
          g = a.height,
          h = a.top,
          i,
          j,
          k = document.body.style,
          l,
          m = a.baseSeries;a.mouseDownHandler = function (d) {
        var d = b.pointer.normalize(d),
            e = a.zoomedMin,
            f = a.zoomedMax,
            h = a.top,
            j = a.scrollbarHeight,
            m = a.scrollerLeft,
            n = a.scrollerWidth,
            p = a.navigatorLeft,
            o = a.navigatorWidth,
            q = a.scrollbarPad,
            r = a.range,
            s = d.chartX,
            t = d.chartY,
            d = b.xAxis[0],
            u,
            v = cb ? 10 : 7;if (t > h && t < h + g + j) if ((h = !a.scrollbarEnabled || t < h + g) && T.abs(s - e - p) < v) a.grabbedLeft = !0, a.otherHandlePos = f, a.fixedExtreme = d.max, b.fixedRange = null;else if (h && T.abs(s - f - p) < v) a.grabbedRight = !0, a.otherHandlePos = e, a.fixedExtreme = d.min, b.fixedRange = null;else if (s > p + e - q && s < p + f + q) {
          a.grabbedCenter = s;a.fixedWidth = r;if (b.renderer.isSVG) l = k.cursor, k.cursor = "ew-resize";i = s - e;
        } else if (s > m && s < m + n) {
          f = h ? s - p - r / 2 : s < p ? e - r * 0.2 : s > m + n - j ? e + r * 0.2 : s < p + e ? e - r : f;if (f < 0) f = 0;else if (f + r >= o) f = o - r, u = c.dataMax;if (f !== e) a.fixedWidth = r, e = c.toFixedRange(f, f + r, null, u), d.setExtremes(e.min, e.max, !0, !1, { trigger: "navigator" });
        }
      };
      a.mouseMoveHandler = function (c) {
        var d = a.scrollbarHeight,
            e = a.navigatorLeft,
            f = a.navigatorWidth,
            g = a.scrollerLeft,
            h = a.scrollerWidth,
            k = a.range,
            l;if (c.pageX !== 0) c = b.pointer.normalize(c), l = c.chartX, l < e ? l = e : l > g + h - d && (l = g + h - d), a.grabbedLeft ? (j = !0, a.render(0, 0, l - e, a.otherHandlePos)) : a.grabbedRight ? (j = !0, a.render(0, 0, a.otherHandlePos, l - e)) : a.grabbedCenter && (j = !0, l < i ? l = i : l > f + i - k && (l = f + i - k), a.render(0, 0, l - i, l - i + k)), j && a.scrollbarOptions.liveRedraw && setTimeout(function () {
          a.mouseUpHandler(c);
        }, 0);
      };a.mouseUpHandler = function (d) {
        var e, f;if (j) {
          if (a.zoomedMin === a.otherHandlePos) e = a.fixedExtreme;else if (a.zoomedMax === a.otherHandlePos) f = a.fixedExtreme;if (a.zoomedMax === a.navigatorWidth) f = c.dataMax;e = c.toFixedRange(a.zoomedMin, a.zoomedMax, e, f);b.xAxis[0].setExtremes(e.min, e.max, !0, !1, { trigger: "navigator", triggerOp: "navigator-drag", DOMEvent: d });
        }if (d.type !== "mousemove") a.grabbedLeft = a.grabbedRight = a.grabbedCenter = a.fixedWidth = a.fixedExtreme = a.otherHandlePos = j = i = null, k.cursor = l || "";
      };var p = b.xAxis.length,
          n = b.yAxis.length;
      b.extraBottomMargin = a.outlineHeight + f.margin;a.navigatorEnabled ? (a.xAxis = c = new W(b, w({ ordinal: m && m.xAxis.options.ordinal }, f.xAxis, { id: "navigator-x-axis", isX: !0, type: "datetime", index: p, height: g, offset: 0, offsetLeft: e, offsetRight: -e, keepOrdinalPadding: !0, startOnTick: !1, endOnTick: !1, minPadding: 0, maxPadding: 0, zoomEnabled: !1 })), a.yAxis = d = new W(b, w(f.yAxis, { id: "navigator-y-axis", alignTicks: !1, height: g, offset: 0, index: n, zoomEnabled: !1 })), m || f.series.data ? a.addBaseSeries() : b.series.length === 0 && U(b, "redraw", function (c, d) {
        if (b.series.length > 0 && !a.series) a.setBaseSeries(), b.redraw = c;c.call(b, d);
      })) : a.xAxis = c = { translate: function translate(a, c) {
          var d = b.xAxis[0].getExtremes(),
              f = b.plotWidth - 2 * e,
              g = d.dataMin,
              d = d.dataMax - g;return c ? a * d / f + g : f * (a - g) / d;
        }, toFixedRange: W.prototype.toFixedRange };U(b, "getMargins", function (b) {
        var e = this.legend,
            f = e.options;b.call(this);a.top = h = a.navigatorOptions.top || this.chartHeight - a.height - a.scrollbarHeight - this.spacing[2] - (f.verticalAlign === "bottom" && f.enabled && !f.floating ? e.legendHeight + o(f.margin, 10) : 0);if (c && d) c.options.top = d.options.top = h, c.setAxisSize(), d.setAxisSize();
      });a.addEvents();
    }, getUnionExtremes: function getUnionExtremes(a) {
      var b = this.chart.xAxis[0],
          c = this.xAxis,
          d = c.options;if (!a || b.dataMin !== null) return { dataMin: o(d && d.min, (t(b.dataMin) && t(c.dataMin) ? y : o)(b.dataMin, c.dataMin)), dataMax: o(d && d.max, (t(b.dataMax) && t(c.dataMax) ? s : o)(b.dataMax, c.dataMax)) };
    }, setBaseSeries: function setBaseSeries(a) {
      var b = this.chart,
          a = a || b.options.navigator.baseSeries;this.series && this.series.remove();this.baseSeries = b.series[a] || typeof a === "string" && b.get(a) || b.series[0];this.xAxis && this.addBaseSeries();
    }, addBaseSeries: function addBaseSeries() {
      var a = this.baseSeries,
          b = a ? a.options : {},
          c = b.data,
          d = this.navigatorOptions.series,
          e;e = d.data;this.hasNavigatorData = !!e;b = w(b, d, { clip: !1, enableMouseTracking: !1, group: "nav", padXAxis: !1, xAxis: "navigator-x-axis", yAxis: "navigator-y-axis", name: "Navigator", showInLegend: !1, isInternal: !0, visible: !0 });b.data = e || c;this.series = this.chart.initSeries(b);if (a && this.navigatorOptions.adaptToUpdatedData !== !1) A(a, "updatedData", this.updatedDataHandler), a.userOptions.events = u(a.userOptions.event, { updatedData: this.updatedDataHandler });
    }, updatedDataHandler: function updatedDataHandler() {
      var a = this.chart.scroller,
          b = a.baseSeries,
          c = b.xAxis,
          d = c.getExtremes(),
          e = d.min,
          f = d.max,
          g = d.dataMin,
          d = d.dataMax,
          h = f - e,
          i,
          j,
          k,
          l,
          m,
          p = a.series;i = p.xData;var n = !!c.setExtremes;j = f >= i[i.length - 1] - (this.closestPointRange || 0);i = e <= g;if (!a.hasNavigatorData) p.options.pointStart = b.xData[0], p.setData(b.options.data, !1), m = !0;i && (l = g, k = l + h);j && (k = d, i || (l = s(k - h, p.xData[0])));n && (i || j) ? isNaN(l) || c.setExtremes(l, k, !0, !1, { trigger: "updatedData" }) : (m && this.chart.redraw(!1), a.render(s(e, g), y(f, d)));
    }, destroy: function destroy() {
      this.removeEvents();q([this.xAxis, this.yAxis, this.leftShade, this.rightShade, this.outline, this.scrollbarTrack, this.scrollbarRifles, this.scrollbarGroup, this.scrollbar], function (a) {
        a && a.destroy && a.destroy();
      });this.xAxis = this.yAxis = this.leftShade = this.rightShade = this.outline = this.scrollbarTrack = this.scrollbarRifles = this.scrollbarGroup = this.scrollbar = null;q([this.scrollbarButtons, this.handles, this.elementsToDestroy], function (a) {
        Ia(a);
      });
    } };Highcharts.Scroller = Bb;U(W.prototype, "zoom", function (a, b, c) {
    var d = this.chart,
        e = d.options,
        f = e.chart.zoomType,
        g = e.navigator,
        e = e.rangeSelector,
        h;if (this.isXAxis && (g && g.enabled || e && e.enabled)) if (f === "x") d.resetZoomButton = "blocked";else if (f === "y") h = !1;else if (f === "xy") d = this.previousZoom, t(b) ? this.previousZoom = [this.min, this.max] : d && (b = d[0], c = d[1], delete this.previousZoom);return h !== r ? h : a.call(this, b, c);
  });U(ya.prototype, "init", function (a, b, c) {
    A(this, "beforeRender", function () {
      var a = this.options;if (a.navigator.enabled || a.scrollbar.enabled) this.scroller = new Bb(this);
    });a.call(this, b, c);
  });U(M.prototype, "addPoint", function (a, b, c, d, e) {
    var f = this.options.turboThreshold;f && this.xData.length > f && aa(b) && !Pa(b) && this.chart.scroller && pa(20, !0);a.call(this, b, c, d, e);
  });u(L, { rangeSelector: { buttonTheme: { width: 28, height: 16, padding: 1, r: 0, stroke: "#68A", zIndex: 7 }, inputPosition: { align: "right" }, labelStyle: { color: "#666" } } });L.lang = w(L.lang, { rangeSelectorZoom: "Zoom", rangeSelectorFrom: "From", rangeSelectorTo: "To" });
  Cb.prototype = { clickButton: function clickButton(a, b) {
      var c = this,
          d = c.selected,
          e = c.chart,
          f = c.buttons,
          g = c.buttonOptions[a],
          h = e.xAxis[0],
          i = e.scroller && e.scroller.getUnionExtremes() || h || {},
          j = i.dataMin,
          k = i.dataMax,
          l,
          m = h && v(y(h.max, o(k, h.max))),
          p = new Date(m),
          n = g.type,
          t = g.count,
          i = g._range,
          u;if (!(j === null || k === null || a === c.selected)) {
        if (n === "month" || n === "year") l = { month: "Month", year: "FullYear" }[n], p["set" + l](p["get" + l]() - t), l = p.getTime(), j = o(j, Number.MIN_VALUE), isNaN(l) || l < j ? (l = j, m = y(l + i, k)) : i = m - l;else if (i) l = s(m - i, j), m = y(l + i, k);else if (n === "ytd") {
          if (h) {
            if (k === r) j = Number.MAX_VALUE, k = Number.MIN_VALUE, q(e.series, function (a) {
              a = a.xData;j = y(a[0], j);k = s(a[a.length - 1], k);
            }), b = !1;m = new Date(k);u = m.getFullYear();l = u = s(j || 0, Date.UTC(u, 0, 1));m = m.getTime();m = y(k || m, m);
          } else {
            A(e, "beforeRender", function () {
              c.clickButton(a);
            });return;
          }
        } else n === "all" && h && (l = j, m = k);f[d] && f[d].setState(0);f[a] && f[a].setState(2);e.fixedRange = i;h ? h.setExtremes(l, m, o(b, 1), 0, { trigger: "rangeSelectorButton", rangeSelectorButton: g }) : (d = e.options.xAxis, d[0] = w(d[0], { range: i, min: u }));c.setSelected(a);
      }
    }, setSelected: function setSelected(a) {
      this.selected = this.options.selected = a;
    }, defaultButtons: [{ type: "month", count: 1, text: "1m" }, { type: "month", count: 3, text: "3m" }, { type: "month", count: 6, text: "6m" }, { type: "ytd", text: "YTD" }, { type: "year", count: 1, text: "1y" }, { type: "all", text: "All" }], init: function init(a) {
      var b = this,
          c = a.options.rangeSelector,
          d = c.buttons || [].concat(b.defaultButtons),
          e = c.selected,
          f = b.blurInputs = function () {
        var a = b.minInput,
            c = b.maxInput;a && a.blur();c && c.blur();
      };b.chart = a;b.options = c;b.buttons = [];a.extraTopMargin = 25;b.buttonOptions = d;A(a.container, "mousedown", f);A(a, "resize", f);q(d, b.computeButtonRange);e !== r && d[e] && this.clickButton(e, !1);A(a, "load", function () {
        A(a.xAxis[0], "afterSetExtremes", function () {
          b.updateButtonStates(!0);
        });
      });
    }, updateButtonStates: function updateButtonStates(a) {
      var b = this,
          c = this.chart,
          d = c.xAxis[0],
          e = c.scroller && c.scroller.getUnionExtremes() || d,
          f = e.dataMin,
          g = e.dataMax,
          h = b.selected,
          i = b.buttons;a && c.fixedRange !== v(d.max - d.min) && (i[h] && i[h].setState(0), b.setSelected(null));q(b.buttonOptions, function (a, c) {
        var e = a._range,
            m = e > g - f,
            p = e < d.minRange,
            n = a.type === "all" && d.max - d.min >= g - f && i[c].state !== 2,
            o = a.type === "ytd" && ra("%Y", f) === ra("%Y", g);e === v(d.max - d.min) && c !== h ? (b.setSelected(c), i[c].setState(2)) : m || p || n || o ? i[c].setState(3) : i[c].state === 3 && i[c].setState(0);
      });
    }, computeButtonRange: function computeButtonRange(a) {
      var b = a.type,
          c = a.count || 1,
          d = { millisecond: 1, second: 1E3, minute: 6E4, hour: 36E5, day: 864E5, week: 6048E5 };if (d[b]) a._range = d[b] * c;else if (b === "month" || b === "year") a._range = { month: 30, year: 365 }[b] * 864E5 * c;
    }, setInputValue: function setInputValue(a, b) {
      var c = this.chart.options.rangeSelector;if (t(b)) this[a + "Input"].HCTime = b;this[a + "Input"].value = ra(c.inputEditDateFormat || "%Y-%m-%d", this[a + "Input"].HCTime);this[a + "DateBox"].attr({ text: ra(c.inputDateFormat || "%b %e, %Y", this[a + "Input"].HCTime) });
    }, drawInput: function drawInput(a) {
      var b = this,
          c = b.chart,
          d = c.options.chart.style,
          e = c.renderer,
          f = c.options.rangeSelector,
          g = b.div,
          h = a === "min",
          i,
          j,
          k,
          l = this.inputGroup;this[a + "Label"] = j = e.label(L.lang[h ? "rangeSelectorFrom" : "rangeSelectorTo"], this.inputGroup.offset).attr({ padding: 1 }).css(w(d, f.labelStyle)).add(l);l.offset += j.width + 5;this[a + "DateBox"] = k = e.label("", l.offset).attr({ padding: 1, width: f.inputBoxWidth || 90, height: f.inputBoxHeight || 16, stroke: f.inputBoxBorderColor || "silver", "stroke-width": 1 }).css(w({ textAlign: "center" }, d, f.inputStyle)).on("click", function () {
        b[a + "Input"].focus();
      }).add(l);l.offset += k.width + (h ? 10 : 0);this[a + "Input"] = i = Z("input", { name: a, className: "highcharts-range-selector", type: "text" }, u({ position: "absolute", border: 0, width: "1px", height: "1px", padding: 0, textAlign: "center",
        fontSize: d.fontSize, fontFamily: d.fontFamily, top: c.plotTop + "px" }, f.inputStyle), g);i.onfocus = function () {
        z(this, { left: l.translateX + k.x + "px", top: l.translateY + "px", width: k.width - 2 + "px", height: k.height - 2 + "px", border: "2px solid silver" });
      };i.onblur = function () {
        z(this, { border: 0, width: "1px", height: "1px" });b.setInputValue(a);
      };i.onchange = function () {
        var a = i.value,
            d = (f.inputDateParser || Date.parse)(a),
            e = c.xAxis[0],
            g = e.dataMin,
            j = e.dataMax;isNaN(d) && (d = a.split("-"), d = Date.UTC(E(d[0]), E(d[1]) - 1, E(d[2])));isNaN(d) || (L.global.useUTC || (d += new Date().getTimezoneOffset() * 6E4), h ? d > b.maxInput.HCTime ? d = r : d < g && (d = g) : d < b.minInput.HCTime ? d = r : d > j && (d = j), d !== r && c.xAxis[0].setExtremes(h ? d : e.min, h ? e.max : d, r, r, { trigger: "rangeSelectorInput" }));
      };
    }, render: function render(a, b) {
      var c = this,
          d = c.chart,
          e = d.renderer,
          f = d.container,
          g = d.options,
          h = g.exporting && g.navigation && g.navigation.buttonOptions,
          i = g.rangeSelector,
          j = c.buttons,
          g = L.lang,
          k = c.div,
          k = c.inputGroup,
          l = i.buttonTheme,
          m = i.inputEnabled !== !1,
          o = l && l.states,
          n = d.plotLeft,
          r;if (!c.rendered && (c.zoomText = e.text(g.rangeSelectorZoom, n, d.plotTop - 10).css(i.labelStyle).add(), r = n + c.zoomText.getBBox().width + 5, q(c.buttonOptions, function (a, b) {
        j[b] = e.button(a.text, r, d.plotTop - 25, function () {
          c.clickButton(b);c.isActive = !0;
        }, l, o && o.hover, o && o.select).css({ textAlign: "center" }).add();r += j[b].width + (i.buttonSpacing || 0);c.selected === b && j[b].setState(2);
      }), c.updateButtonStates(), m)) c.div = k = Z("div", null, { position: "relative", height: 0, zIndex: 1 }), f.parentNode.insertBefore(k, f), c.inputGroup = k = e.g("input-group").add(), k.offset = 0, c.drawInput("min"), c.drawInput("max");m && (f = d.plotTop - 35, k.align(u({ y: f, width: k.offset, x: h && f < (h.y || 0) + h.height - d.spacing[0] ? -40 : 0 }, i.inputPosition), !0, d.spacingBox), c.setInputValue("min", a), c.setInputValue("max", b));c.rendered = !0;
    }, destroy: function destroy() {
      var a = this.minInput,
          b = this.maxInput,
          c = this.chart,
          d = this.blurInputs,
          e;X(c.container, "mousedown", d);X(c, "resize", d);Ia(this.buttons);if (a) a.onfocus = a.onblur = a.onchange = null;if (b) b.onfocus = b.onblur = b.onchange = null;for (e in this) {
        this[e] && e !== "chart" && (this[e].destroy ? this[e].destroy() : this[e].nodeType && Sa(this[e])), this[e] = null;
      }
    } };W.prototype.toFixedRange = function (a, b, c, d) {
    var e = this.chart && this.chart.fixedRange,
        a = o(c, this.translate(a, !0)),
        b = o(d, this.translate(b, !0)),
        c = e && (b - a) / e;c > 0.7 && c < 1.3 && (d ? a = b - e : b = a + e);return { min: a, max: b };
  };U(ya.prototype, "init", function (a, b, c) {
    A(this, "init", function () {
      if (this.options.rangeSelector.enabled) this.rangeSelector = new Cb(this);
    });a.call(this, b, c);
  });Highcharts.RangeSelector = Cb;ya.prototype.callbacks.push(function (a) {
    function b() {
      f = a.xAxis[0].getExtremes();g.render(f.min, f.max);
    }function c() {
      f = a.xAxis[0].getExtremes();isNaN(f.min) || h.render(f.min, f.max);
    }function d(a) {
      a.triggerOp !== "navigator-drag" && g.render(a.min, a.max);
    }function e(a) {
      h.render(a.min, a.max);
    }var f,
        g = a.scroller,
        h = a.rangeSelector;g && (A(a.xAxis[0], "afterSetExtremes", d), U(a, "drawChartBox", function (a) {
      var c = this.isDirtyBox;a.call(this);c && b();
    }), b());h && (A(a.xAxis[0], "afterSetExtremes", e), A(a, "resize", c), c());A(a, "destroy", function () {
      g && X(a.xAxis[0], "afterSetExtremes", d);h && (X(a, "resize", c), X(a.xAxis[0], "afterSetExtremes", e));
    });
  });Highcharts.StockChart = function (a, b) {
    var c = a.series,
        d,
        e = o(a.navigator && a.navigator.enabled, !0) ? { startOnTick: !1, endOnTick: !1 } : null,
        f = { marker: { enabled: !1, states: { hover: { radius: 5 } } }, states: { hover: { lineWidth: 2 } } },
        g = { shadow: !1, borderWidth: 0 };a.xAxis = Na(ja(a.xAxis || {}), function (a) {
      return w({ minPadding: 0, maxPadding: 0, ordinal: !0, title: { text: null }, labels: { overflow: "justify" }, showLastLabel: !0 }, a, { type: "datetime", categories: null }, e);
    });a.yAxis = Na(ja(a.yAxis || {}), function (a) {
      d = a.opposite;return w({ labels: { align: d ? "right" : "left", x: d ? -2 : 2, y: -2 }, showLastLabel: !1, title: { text: null } }, a);
    });a.series = null;a = w({ chart: { panning: !0, pinchType: "x" }, navigator: { enabled: !0 }, scrollbar: { enabled: !0 }, rangeSelector: { enabled: !0 }, title: { text: null }, tooltip: { shared: !0, crosshairs: !0 }, legend: { enabled: !1 }, plotOptions: { line: f, spline: f, area: f, areaspline: f, arearange: f, areasplinerange: f, column: g, columnrange: g, candlestick: g, ohlc: g } }, a, { _stock: !0, chart: { inverted: !1 } });a.series = c;return new ya(a, b);
  };U($a.prototype, "init", function (a, b, c) {
    var d = c.chart.pinchType || "";a.call(this, b, c);this.pinchX = this.pinchHor = d.indexOf("x") !== -1;this.pinchY = this.pinchVert = d.indexOf("y") !== -1;
  });U(W.prototype, "hideCrosshair", function (a, b, c) {
    a.call(this, b, c);this.crossLabel && this.crossLabel.hide();
  });U(W.prototype, "drawCrosshair", function (a, b, c) {
    var d, e;a.call(this, b, c);if (t(this.crosshair.label) && this.crosshair.label.enabled && t(c)) {
      var a = this.chart,
          f = this.options.crosshair.label,
          g = this.isXAxis ? "x" : "y",
          b = this.horiz,
          h = this.opposite,
          i = this.left,
          j = this.top,
          k = this.crossLabel,
          l,
          m,
          p = f.format,
          n = "";if (!k) k = this.crossLabel = a.renderer.label().attr({ align: f.align || b ? "center" : h ? this.labelAlign === "right" ? "right" : "center" : this.labelAlign === "left" ? "left" : "center", zIndex: 12, height: b ? 16 : r, fill: f.backgroundColor || this.series[0] && this.series[0].color || "gray", padding: o(f.padding, 2), stroke: f.borderColor || null, "stroke-width": f.borderWidth || 0 }).css(u({ color: "white", fontWeight: "normal", fontSize: "11px", textAlign: "center" }, f.style)).add();
      b ? (l = c.plotX + i, m = j + (h ? 0 : this.height)) : (l = h ? this.width + i : 0, m = c.plotY + j);if (m < j || m > j + this.height) this.hideCrosshair();else {
        !p && !f.formatter && (this.isDatetimeAxis && (n = "%b %d, %Y"), p = "{value" + (n ? ":" + n : "") + "}");k.attr({ x: l, y: m, text: p ? Ha(p, { value: c[g] }) : f.formatter.call(this, c[g]), visibility: "visible" });c = k.box;if (b) {
          if (this.options.tickPosition === "inside" && !h || this.options.tickPosition !== "inside" && h) m = k.y - c.height;
        } else m = k.y - c.height / 2;b ? (d = i - c.x, e = i + this.width - c.x) : (d = this.labelAlign === "left" ? i : 0, e = this.labelAlign === "right" ? i + this.width : a.chartWidth);k.translateX < d && (l += d - k.translateX);k.translateX + c.width >= e && (l -= k.translateX + c.width - e);k.attr({ x: l, y: m, visibility: "visible" });
      }
    }
  });var kc = Y.init,
      lc = Y.processData,
      mc = Da.prototype.tooltipFormatter;Y.init = function () {
    kc.apply(this, arguments);this.setCompare(this.options.compare);
  };Y.setCompare = function (a) {
    this.modifyValue = a === "value" || a === "percent" ? function (b, c) {
      var d = this.compareValue,
          b = a === "value" ? b - d : b = 100 * (b / d) - 100;if (c) c.change = b;return b;
    } : null;if (this.chart.hasRendered) this.isDirty = !0;
  };Y.processData = function () {
    var a = 0,
        b,
        c,
        d;lc.apply(this, arguments);if (this.xAxis && this.processedYData) {
      b = this.processedXData;c = this.processedYData;for (d = c.length; a < d; a++) {
        if (typeof c[a] === "number" && b[a] >= this.xAxis.min) {
          this.compareValue = c[a];break;
        }
      }
    }
  };U(Y, "getExtremes", function (a) {
    a.call(this);if (this.modifyValue) this.dataMax = this.modifyValue(this.dataMax), this.dataMin = this.modifyValue(this.dataMin);
  });W.prototype.setCompare = function (a, b) {
    this.isXAxis || (q(this.series, function (b) {
      b.setCompare(a);
    }), o(b, !0) && this.chart.redraw());
  };Da.prototype.tooltipFormatter = function (a) {
    a = a.replace("{point.change}", (this.change > 0 ? "+" : "") + Ga(this.change, o(this.series.tooltipOptions.changeDecimals, 2)));return mc.apply(this, [a]);
  };u(Highcharts, { Axis: W, Chart: ya, Color: Ba, Point: Da, Tick: Ya, Tooltip: Ab, Renderer: Za, Series: M, SVGElement: xa, SVGRenderer: sa, arrayMin: Ra, arrayMax: va, charts: Wa, dateFormat: ra, format: Ha, pathAnim: Eb, getOptions: function getOptions() {
      return L;
    }, hasBidiBug: Yb, isTouchDevice: cb, numberFormat: Ga, seriesTypes: D, setOptions: function setOptions(a) {
      L = w(!0, L, a);Lb();return L;
    }, addEvent: A, removeEvent: X, createElement: Z, discardElement: Sa, css: z, each: q, extend: u, map: Na, merge: w, pick: o, splat: ja, extendClass: ea, pInt: E, wrap: U, svg: da, canvas: ka, vml: !da && !ka, product: "Highstock", version: "1.3.9" });
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {// VERSION: 2.2 LAST UPDATE: 13.03.2012
/* 
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 * 
 * Made by Wilq32, wilq32@gmail.com, Wroclaw, Poland, 01.2009
 * Website: http://code.google.com/p/jqueryrotate/ 
 */

// Documentation removed from script file (was kinda useless and outdated)

(function ($) {
	var supportedCSS,
	    styles = document.getElementsByTagName("head")[0].style,
	    toCheck = "transformProperty WebkitTransform OTransform msTransform MozTransform".split(" ");
	for (var a = 0; a < toCheck.length; a++) {
		if (styles[toCheck[a]] !== undefined) supportedCSS = toCheck[a];
	} // Bad eval to preven google closure to remove it from code o_O
	// After compresion replace it back to var IE = 'v' == '\v'
	var IE = eval('"v"=="\v"');

	jQuery.fn.extend({
		rotate: function rotate(parameters) {
			if (this.length === 0 || typeof parameters == "undefined") return;
			if (typeof parameters == "number") parameters = { angle: parameters };
			var returned = [];
			for (var i = 0, i0 = this.length; i < i0; i++) {
				var element = this.get(i);
				if (!element.Wilq32 || !element.Wilq32.PhotoEffect) {

					var paramClone = $.extend(true, {}, parameters);
					var newRotObject = new Wilq32.PhotoEffect(element, paramClone)._rootObj;

					returned.push($(newRotObject));
				} else {
					element.Wilq32.PhotoEffect._handleRotation(parameters);
				}
			}
			return returned;
		},
		getRotateAngle: function getRotateAngle() {
			var ret = [];
			for (var i = 0, i0 = this.length; i < i0; i++) {
				var element = this.get(i);
				if (element.Wilq32 && element.Wilq32.PhotoEffect) {
					ret[i] = element.Wilq32.PhotoEffect._angle;
				}
			}
			return ret;
		},
		stopRotate: function stopRotate() {
			for (var i = 0, i0 = this.length; i < i0; i++) {
				var element = this.get(i);
				if (element.Wilq32 && element.Wilq32.PhotoEffect) {
					clearTimeout(element.Wilq32.PhotoEffect._timer);
				}
			}
		}
	});

	// Library agnostic interface

	Wilq32 = window.Wilq32 || {};
	Wilq32.PhotoEffect = function () {

		if (supportedCSS) {
			return function (img, parameters) {
				img.Wilq32 = {
					PhotoEffect: this
				};

				this._img = this._rootObj = this._eventObj = img;
				this._handleRotation(parameters);
			};
		} else {
			return function (img, parameters) {
				// Make sure that class and id are also copied - just in case you would like to refeer to an newly created object
				this._img = img;

				this._rootObj = document.createElement('span');
				this._rootObj.style.display = "inline-block";
				this._rootObj.Wilq32 = {
					PhotoEffect: this
				};
				img.parentNode.insertBefore(this._rootObj, img);

				if (img.complete) {
					this._Loader(parameters);
				} else {
					var self = this;
					// TODO: Remove jQuery dependency
					jQuery(this._img).bind("load", function () {
						self._Loader(parameters);
					});
				}
			};
		}
	}();

	Wilq32.PhotoEffect.prototype = {
		_setupParameters: function _setupParameters(parameters) {
			this._parameters = this._parameters || {};
			if (typeof this._angle !== "number") this._angle = 0;
			if (typeof parameters.angle === "number") this._angle = parameters.angle;
			this._parameters.animateTo = typeof parameters.animateTo === "number" ? parameters.animateTo : this._angle;

			this._parameters.step = parameters.step || this._parameters.step || null;
			this._parameters.easing = parameters.easing || this._parameters.easing || function (x, t, b, c, d) {
				return -c * ((t = t / d - 1) * t * t * t - 1) + b;
			};
			this._parameters.duration = parameters.duration || this._parameters.duration || 1000;
			this._parameters.callback = parameters.callback || this._parameters.callback || function () {};
			if (parameters.bind && parameters.bind != this._parameters.bind) this._BindEvents(parameters.bind);
		},
		_handleRotation: function _handleRotation(parameters) {
			this._setupParameters(parameters);
			if (this._angle == this._parameters.animateTo) {
				this._rotate(this._angle);
			} else {
				this._animateStart();
			}
		},

		_BindEvents: function _BindEvents(events) {
			if (events && this._eventObj) {
				// Unbinding previous Events
				if (this._parameters.bind) {
					var oldEvents = this._parameters.bind;
					for (var a in oldEvents) {
						if (oldEvents.hasOwnProperty(a))
							// TODO: Remove jQuery dependency
							jQuery(this._eventObj).unbind(a, oldEvents[a]);
					}
				}

				this._parameters.bind = events;
				for (var a in events) {
					if (events.hasOwnProperty(a))
						// TODO: Remove jQuery dependency
						jQuery(this._eventObj).bind(a, events[a]);
				}
			}
		},

		_Loader: function () {
			if (IE) return function (parameters) {
				var width = this._img.width;
				var height = this._img.height;
				this._img.parentNode.removeChild(this._img);

				this._vimage = this.createVMLNode('image');
				this._vimage.src = this._img.src;
				this._vimage.style.height = height + "px";
				this._vimage.style.width = width + "px";
				this._vimage.style.position = "absolute"; // FIXES IE PROBLEM - its only rendered if its on absolute position!
				this._vimage.style.top = "0px";
				this._vimage.style.left = "0px";

				/* Group minifying a small 1px precision problem when rotating object */
				this._container = this.createVMLNode('group');
				this._container.style.width = width;
				this._container.style.height = height;
				this._container.style.position = "absolute";
				this._container.setAttribute('coordsize', width - 1 + ',' + (height - 1)); // This -1, -1 trying to fix ugly problem with small displacement on IE
				this._container.appendChild(this._vimage);

				this._rootObj.appendChild(this._container);
				this._rootObj.style.position = "relative"; // FIXES IE PROBLEM
				this._rootObj.style.width = width + "px";
				this._rootObj.style.height = height + "px";
				this._rootObj.setAttribute('id', this._img.getAttribute('id'));
				this._rootObj.className = this._img.className;
				this._eventObj = this._rootObj;
				this._handleRotation(parameters);
			};else return function (parameters) {
				this._rootObj.setAttribute('id', this._img.getAttribute('id'));
				this._rootObj.className = this._img.className;

				this._width = this._img.width;
				this._height = this._img.height;
				this._widthHalf = this._width / 2; // used for optimisation
				this._heightHalf = this._height / 2; // used for optimisation

				var _widthMax = Math.sqrt(this._height * this._height + this._width * this._width);

				this._widthAdd = _widthMax - this._width;
				this._heightAdd = _widthMax - this._height; // widthMax because maxWidth=maxHeight
				this._widthAddHalf = this._widthAdd / 2; // used for optimisation
				this._heightAddHalf = this._heightAdd / 2; // used for optimisation

				this._img.parentNode.removeChild(this._img);

				this._aspectW = (parseInt(this._img.style.width, 10) || this._width) / this._img.width;
				this._aspectH = (parseInt(this._img.style.height, 10) || this._height) / this._img.height;

				this._canvas = document.createElement('canvas');
				this._canvas.setAttribute('width', this._width);
				this._canvas.style.position = "relative";
				this._canvas.style.left = -this._widthAddHalf + "px";
				this._canvas.style.top = -this._heightAddHalf + "px";
				this._canvas.Wilq32 = this._rootObj.Wilq32;

				this._rootObj.appendChild(this._canvas);
				this._rootObj.style.width = this._width + "px";
				this._rootObj.style.height = this._height + "px";
				this._eventObj = this._canvas;

				this._cnv = this._canvas.getContext('2d');
				this._handleRotation(parameters);
			};
		}(),

		_animateStart: function _animateStart() {
			if (this._timer) {
				clearTimeout(this._timer);
			}
			this._animateStartTime = +new Date();
			this._animateStartAngle = this._angle;
			this._animate();
		},
		_animate: function _animate() {
			var actualTime = +new Date();
			var checkEnd = actualTime - this._animateStartTime > this._parameters.duration;

			// TODO: Bug for animatedGif for static rotation ? (to test)
			if (checkEnd && !this._parameters.animatedGif) {
				clearTimeout(this._timer);
			} else {
				if (this._canvas || this._vimage || this._img) {
					var angle = this._parameters.easing(0, actualTime - this._animateStartTime, this._animateStartAngle, this._parameters.animateTo - this._animateStartAngle, this._parameters.duration);
					this._rotate(~~(angle * 10) / 10);
				}
				if (this._parameters.step) {
					this._parameters.step(this._angle);
				}
				var self = this;
				this._timer = setTimeout(function () {
					self._animate.call(self);
				}, 10);
			}

			// To fix Bug that prevents using recursive function in callback I moved this function to back
			if (this._parameters.callback && checkEnd) {
				this._angle = this._parameters.animateTo;
				this._rotate(this._angle);
				this._parameters.callback.call(this._rootObj);
			}
		},

		_rotate: function () {
			var rad = Math.PI / 180;
			if (IE) return function (angle) {
				this._angle = angle;
				this._container.style.rotation = angle % 360 + "deg";
			};else if (supportedCSS) return function (angle) {
				this._angle = angle;
				this._img.style[supportedCSS] = "rotate(" + angle % 360 + "deg)";
			};else return function (angle) {
				this._angle = angle;
				angle = angle % 360 * rad;
				// clear canvas	
				this._canvas.width = this._width + this._widthAdd;
				this._canvas.height = this._height + this._heightAdd;

				// REMEMBER: all drawings are read from backwards.. so first function is translate, then rotate, then translate, translate..
				this._cnv.translate(this._widthAddHalf, this._heightAddHalf); // at least center image on screen
				this._cnv.translate(this._widthHalf, this._heightHalf); // we move image back to its orginal 
				this._cnv.rotate(angle); // rotate image
				this._cnv.translate(-this._widthHalf, -this._heightHalf); // move image to its center, so we can rotate around its center
				this._cnv.scale(this._aspectW, this._aspectH); // SCALE - if needed ;)
				this._cnv.drawImage(this._img, 0, 0); // First - we draw image
			};
		}()
	};

	if (IE) {
		Wilq32.PhotoEffect.prototype.createVMLNode = function () {
			document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
			try {
				!document.namespaces.rvml && document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml");
				return function (tagName) {
					return document.createElement('<rvml:' + tagName + ' class="rvml">');
				};
			} catch (e) {
				return function (tagName) {
					return document.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
				};
			}
		}();
	}
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
  "object" == ( false ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
      d = c.slice,
      e = c.concat,
      f = c.push,
      g = c.indexOf,
      h = {},
      i = h.toString,
      j = h.hasOwnProperty,
      k = "".trim,
      l = {},
      m = a.document,
      n = "2.1.0",
      o = function o(a, b) {
    return new o.fn.init(a, b);
  },
      p = /^-ms-/,
      q = /-([\da-z])/gi,
      r = function r(a, b) {
    return b.toUpperCase();
  };o.fn = o.prototype = { jquery: n, constructor: o, selector: "", length: 0, toArray: function toArray() {
      return d.call(this);
    }, get: function get(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
    }, pushStack: function pushStack(a) {
      var b = o.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
    }, each: function each(a, b) {
      return o.each(this, a, b);
    }, map: function map(a) {
      return this.pushStack(o.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(d.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor(null);
    }, push: f, sort: c.sort, splice: c.splice }, o.extend = o.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || o.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
      if (null != (a = arguments[h])) for (b in a) {
        c = g[b], d = a[b], g !== d && (j && d && (o.isPlainObject(d) || (e = o.isArray(d))) ? (e ? (e = !1, f = c && o.isArray(c) ? c : []) : f = c && o.isPlainObject(c) ? c : {}, g[b] = o.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      }
    }return g;
  }, o.extend({ expando: "jQuery" + (n + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
      throw new Error(a);
    }, noop: function noop() {}, isFunction: function isFunction(a) {
      return "function" === o.type(a);
    }, isArray: Array.isArray, isWindow: function isWindow(a) {
      return null != a && a === a.window;
    }, isNumeric: function isNumeric(a) {
      return a - parseFloat(a) >= 0;
    }, isPlainObject: function isPlainObject(a) {
      if ("object" !== o.type(a) || a.nodeType || o.isWindow(a)) return !1;try {
        if (a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (b) {
        return !1;
      }return !0;
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) {
        return !1;
      }return !0;
    }, type: function type(a) {
      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? h[i.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
    }, globalEval: function globalEval(a) {
      var b,
          c = eval;a = o.trim(a), a && (1 === a.indexOf("use strict") ? (b = m.createElement("script"), b.text = a, m.head.appendChild(b).parentNode.removeChild(b)) : c(a));
    }, camelCase: function camelCase(a) {
      return a.replace(p, "ms-").replace(q, r);
    }, nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }, each: function each(a, b, c) {
      var d,
          e = 0,
          f = a.length,
          g = s(a);if (c) {
        if (g) {
          for (; f > e; e++) {
            if (d = b.apply(a[e], c), d === !1) break;
          }
        } else for (e in a) {
          if (d = b.apply(a[e], c), d === !1) break;
        }
      } else if (g) {
        for (; f > e; e++) {
          if (d = b.call(a[e], e, a[e]), d === !1) break;
        }
      } else for (e in a) {
        if (d = b.call(a[e], e, a[e]), d === !1) break;
      }return a;
    }, trim: function trim(a) {
      return null == a ? "" : k.call(a);
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (s(Object(a)) ? o.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      return null == b ? -1 : g.call(b, a, c);
    }, merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
        a[e++] = b[d];
      }return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }return e;
    }, map: function map(a, b, c) {
      var d,
          f = 0,
          g = a.length,
          h = s(a),
          i = [];if (h) for (; g > f; f++) {
        d = b(a[f], f, c), null != d && i.push(d);
      } else for (f in a) {
        d = b(a[f], f, c), null != d && i.push(d);
      }return e.apply([], i);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, e, f;return "string" == typeof b && (c = a[b], b = a, a = c), o.isFunction(a) ? (e = d.call(arguments, 2), f = function f() {
        return a.apply(b || this, e.concat(d.call(arguments)));
      }, f.guid = a.guid = a.guid || o.guid++, f) : void 0;
    }, now: Date.now, support: l }), o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
    h["[object " + b + "]"] = b.toLowerCase();
  });function s(a) {
    var b = a.length,
        c = o.type(a);return "function" === c || o.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }var t = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s = "sizzle" + -new Date(),
        t = a.document,
        u = 0,
        v = 0,
        w = eb(),
        x = eb(),
        y = eb(),
        z = function z(a, b) {
      return a === b && (j = !0), 0;
    },
        A = "undefined",
        B = 1 << 31,
        C = {}.hasOwnProperty,
        D = [],
        E = D.pop,
        F = D.push,
        G = D.push,
        H = D.slice,
        I = D.indexOf || function (a) {
      for (var b = 0, c = this.length; c > b; b++) {
        if (this[b] === a) return b;
      }return -1;
    },
        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        K = "[\\x20\\t\\r\\n\\f]",
        L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        M = L.replace("w", "w#"),
        N = "\\[" + K + "*(" + L + ")" + K + "*(?:([*^$|!~]?=)" + K + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + M + ")|)|)" + K + "*\\]",
        O = ":(" + L + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + N.replace(3, 8) + ")*)|.*)\\)|)",
        P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
        Q = new RegExp("^" + K + "*," + K + "*"),
        R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
        S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
        T = new RegExp(O),
        U = new RegExp("^" + M + "$"),
        V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L.replace("w", "w*") + ")"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
        W = /^(?:input|select|textarea|button)$/i,
        X = /^h\d$/i,
        Y = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        $ = /[+~]/,
        _ = /'|\\/g,
        ab = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
        bb = function bb(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    };try {
      G.apply(D = H.call(t.childNodes), t.childNodes), D[t.childNodes.length].nodeType;
    } catch (cb) {
      G = { apply: D.length ? function (a, b) {
          F.apply(a, H.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
        } };
    }function db(a, b, d, e) {
      var f, g, h, i, j, m, p, q, u, v;if ((b ? b.ownerDocument || b : t) !== l && k(b), b = b || l, d = d || [], !a || "string" != typeof a) return d;if (1 !== (i = b.nodeType) && 9 !== i) return [];if (n && !e) {
        if (f = Z.exec(a)) if (h = f[1]) {
          if (9 === i) {
            if (g = b.getElementById(h), !g || !g.parentNode) return d;if (g.id === h) return d.push(g), d;
          } else if (b.ownerDocument && (g = b.ownerDocument.getElementById(h)) && r(b, g) && g.id === h) return d.push(g), d;
        } else {
          if (f[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((h = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(h)), d;
        }if (c.qsa && (!o || !o.test(a))) {
          if (q = p = s, u = b, v = 9 === i && a, 1 === i && "object" !== b.nodeName.toLowerCase()) {
            m = ob(a), (p = b.getAttribute("id")) ? q = p.replace(_, "\\$&") : b.setAttribute("id", q), q = "[id='" + q + "'] ", j = m.length;while (j--) {
              m[j] = q + pb(m[j]);
            }u = $.test(a) && mb(b.parentNode) || b, v = m.join(",");
          }if (v) try {
            return G.apply(d, u.querySelectorAll(v)), d;
          } catch (w) {} finally {
            p || b.removeAttribute("id");
          }
        }
      }return xb(a.replace(P, "$1"), b, d, e);
    }function eb() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function fb(a) {
      return a[s] = !0, a;
    }function gb(a) {
      var b = l.createElement("div");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function hb(a, b) {
      var c = a.split("|"),
          e = a.length;while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }function ib(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || B) - (~a.sourceIndex || B);if (d) return d;if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }return a ? 1 : -1;
    }function jb(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function kb(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function lb(a) {
      return fb(function (b) {
        return b = +b, fb(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }function mb(a) {
      return a && _typeof(a.getElementsByTagName) !== A && a;
    }c = db.support = {}, f = db.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
    }, k = db.setDocument = function (a) {
      var b,
          e = a ? a.ownerDocument || a : t,
          g = e.defaultView;return e !== l && 9 === e.nodeType && e.documentElement ? (l = e, m = e.documentElement, n = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () {
        k();
      }, !1) : g.attachEvent && g.attachEvent("onunload", function () {
        k();
      })), c.attributes = gb(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = gb(function (a) {
        return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Y.test(e.getElementsByClassName) && gb(function (a) {
        return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length;
      }), c.getById = gb(function (a) {
        return m.appendChild(a).id = s, !e.getElementsByName || !e.getElementsByName(s).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if (_typeof(b.getElementById) !== A && n) {
          var c = b.getElementById(a);return c && c.parentNode ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ab, bb);return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ab, bb);return function (a) {
          var c = _typeof(a.getAttributeNode) !== A && a.getAttributeNode("id");return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return _typeof(b.getElementsByTagName) !== A ? b.getElementsByTagName(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return _typeof(b.getElementsByClassName) !== A && n ? b.getElementsByClassName(a) : void 0;
      }, p = [], o = [], (c.qsa = Y.test(e.querySelectorAll)) && (gb(function (a) {
        a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && o.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || o.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll(":checked").length || o.push(":checked");
      }), gb(function (a) {
        var b = e.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && o.push("name" + K + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), o.push(",.*:");
      })), (c.matchesSelector = Y.test(q = m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && gb(function (a) {
        c.disconnectedMatch = q.call(a, "div"), q.call(a, "[s!='']:x"), p.push("!=", O);
      }), o = o.length && new RegExp(o.join("|")), p = p.length && new RegExp(p.join("|")), b = Y.test(m.compareDocumentPosition), r = b || Y.test(m.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }return !1;
      }, z = b ? function (a, b) {
        if (a === b) return j = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === t && r(t, a) ? -1 : b === e || b.ownerDocument === t && r(t, b) ? 1 : i ? I.call(i, a) - I.call(i, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return j = !0, 0;var c,
            d = 0,
            f = a.parentNode,
            g = b.parentNode,
            h = [a],
            k = [b];if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : i ? I.call(i, a) - I.call(i, b) : 0;if (f === g) return ib(a, b);c = a;while (c = c.parentNode) {
          h.unshift(c);
        }c = b;while (c = c.parentNode) {
          k.unshift(c);
        }while (h[d] === k[d]) {
          d++;
        }return d ? ib(h[d], k[d]) : h[d] === t ? -1 : k[d] === t ? 1 : 0;
      }, e) : l;
    }, db.matches = function (a, b) {
      return db(a, null, null, b);
    }, db.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== l && k(a), b = b.replace(S, "='$1']"), !(!c.matchesSelector || !n || p && p.test(b) || o && o.test(b))) try {
        var d = q.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return db(b, l, null, [a]).length > 0;
    }, db.contains = function (a, b) {
      return (a.ownerDocument || a) !== l && k(a), r(a, b);
    }, db.attr = function (a, b) {
      (a.ownerDocument || a) !== l && k(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !n) : void 0;return void 0 !== f ? f : c.attributes || !n ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, db.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, db.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (j = !c.detectDuplicates, i = !c.sortStable && a.slice(0), a.sort(z), j) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }while (e--) {
          a.splice(d[e], 1);
        }
      }return i = null, a;
    }, e = db.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }return c;
    }, d = db.selectors = { cacheLength: 50, createPseudo: fb, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(ab, bb), a[3] = (a[4] || a[5] || "").replace(ab, bb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || db.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && db.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[5] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && T.test(c) && (b = ob(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(ab, bb).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function CLASS(a) {
          var b = w[a + " "];return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && w(a, function (a) {
            return b.test("string" == typeof a.className && a.className || _typeof(a.getAttribute) !== A && a.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = db.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        }, CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                t = !i && !h;if (q) {
              if (f) {
                while (p) {
                  l = b;while (l = l[p]) {
                    if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                  }o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && t) {
                k = q[s] || (q[s] = {}), j = k[a] || [], n = j[0] === u && j[1], m = j[0] === u && j[2], l = n && q.childNodes[n];while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                  if (1 === l.nodeType && ++m && l === b) {
                    k[a] = [u, n, m];break;
                  }
                }
              } else if (t && (j = (b[s] || (b[s] = {}))[a]) && j[0] === u) m = j[1];else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (t && ((l[s] || (l[s] = {}))[a] = [u, m]), l === b)) break;
              }return m -= e, m === d || m % d === 0 && m / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || db.error("unsupported pseudo: " + a);return e[s] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? fb(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) {
              d = I.call(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: fb(function (a) {
          var b = [],
              c = [],
              d = g(a.replace(P, "$1"));return d[s] ? fb(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), !c.pop();
          };
        }), has: fb(function (a) {
          return function (b) {
            return db(a, b).length > 0;
          };
        }), contains: fb(function (a) {
          return function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: fb(function (a) {
          return U.test(a || "") || db.error("unsupported lang: " + a), a = a.replace(ab, bb).toLowerCase(), function (b) {
            var c;do {
              if (c = n ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function target(b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function root(a) {
          return a === m;
        }, focus: function focus(a) {
          return a === l.activeElement && (!l.hasFocus || l.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: function enabled(a) {
          return a.disabled === !1;
        }, disabled: function disabled(a) {
          return a.disabled === !0;
        }, checked: function checked(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(a) {
          return !d.pseudos.empty(a);
        }, header: function header(a) {
          return X.test(a.nodeName);
        }, input: function input(a) {
          return W.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: lb(function () {
          return [0];
        }), last: lb(function (a, b) {
          return [b - 1];
        }), eq: lb(function (a, b, c) {
          return [0 > c ? c + b : c];
        }), even: lb(function (a, b) {
          for (var c = 0; b > c; c += 2) {
            a.push(c);
          }return a;
        }), odd: lb(function (a, b) {
          for (var c = 1; b > c; c += 2) {
            a.push(c);
          }return a;
        }), lt: lb(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) {
            a.push(d);
          }return a;
        }), gt: lb(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) {
            a.push(d);
          }return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      d.pseudos[b] = jb(b);
    }for (b in { submit: !0, reset: !0 }) {
      d.pseudos[b] = kb(b);
    }function nb() {}nb.prototype = d.filters = d.pseudos, d.setFilters = new nb();function ob(a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = x[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        (!c || (e = Q.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));for (g in d.filter) {
          !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        }if (!c) break;
      }return b ? h.length : h ? db.error(a) : x(a, i).slice(0);
    }function pb(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) {
        d += a[b].value;
      }return d;
    }function qb(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = v++;return b.first ? function (b, c, f) {
        while (b = b[d]) {
          if (1 === b.nodeType || e) return a(b, c, f);
        }
      } : function (b, c, g) {
        var h,
            i,
            j = [u, f];if (g) {
          while (b = b[d]) {
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || e) {
            if (i = b[s] || (b[s] = {}), (h = i[d]) && h[0] === u && h[1] === f) return j[2] = h[2];if (i[d] = j, j[2] = a(b, c, g)) return !0;
          }
        }
      };
    }function rb(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) {
          if (!a[e](b, c, d)) return !1;
        }return !0;
      } : a[0];
    }function sb(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      }return g;
    }function tb(a, b, c, d, e, f) {
      return d && !d[s] && (d = tb(d)), e && !e[s] && (e = tb(e, f)), fb(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || wb(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : sb(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = sb(r, n), d(j, [], h, i), k = j.length;while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }e(null, r = [], j, i);
            }k = r.length;while (k--) {
              (l = r[k]) && (j = e ? I.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = sb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
      });
    }function ub(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], i = g || d.relative[" "], j = g ? 1 : 0, k = qb(function (a) {
        return a === b;
      }, i, !0), l = qb(function (a) {
        return I.call(b, a) > -1;
      }, i, !0), m = [function (a, c, d) {
        return !g && (d || c !== h) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
      }]; f > j; j++) {
        if (c = d.relative[a[j].type]) m = [qb(rb(m), c)];else {
          if (c = d.filter[a[j].type].apply(null, a[j].matches), c[s]) {
            for (e = ++j; f > e; e++) {
              if (d.relative[a[e].type]) break;
            }return tb(j > 1 && rb(m), j > 1 && pb(a.slice(0, j - 1).concat({ value: " " === a[j - 2].type ? "*" : "" })).replace(P, "$1"), c, e > j && ub(a.slice(j, e)), f > e && ub(a = a.slice(e)), f > e && pb(a));
          }m.push(c);
        }
      }return rb(m);
    }function vb(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, i, j, k) {
        var m,
            n,
            o,
            p = 0,
            q = "0",
            r = _f && [],
            s = [],
            t = h,
            v = _f || e && d.find.TAG("*", k),
            w = u += null == t ? 1 : Math.random() || .1,
            x = v.length;for (k && (h = g !== l && g); q !== x && null != (m = v[q]); q++) {
          if (e && m) {
            n = 0;while (o = a[n++]) {
              if (o(m, g, i)) {
                j.push(m);break;
              }
            }k && (u = w);
          }c && ((m = !o && m) && p--, _f && r.push(m));
        }if (p += q, c && q !== p) {
          n = 0;while (o = b[n++]) {
            o(r, s, g, i);
          }if (_f) {
            if (p > 0) while (q--) {
              r[q] || s[q] || (s[q] = E.call(j));
            }s = sb(s);
          }G.apply(j, s), k && !_f && s.length > 0 && p + b.length > 1 && db.uniqueSort(j);
        }return k && (u = w, h = t), r;
      };return c ? fb(f) : f;
    }g = db.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = y[a + " "];if (!f) {
        b || (b = ob(a)), c = b.length;while (c--) {
          f = ub(b[c]), f[s] ? d.push(f) : e.push(f);
        }f = y(a, vb(e, d));
      }return f;
    };function wb(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) {
        db(a, b[d], c);
      }return c;
    }function xb(a, b, e, f) {
      var h,
          i,
          j,
          k,
          l,
          m = ob(a);if (!f && 1 === m.length) {
        if (i = m[0] = m[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && c.getById && 9 === b.nodeType && n && d.relative[i[1].type]) {
          if (b = (d.find.ID(j.matches[0].replace(ab, bb), b) || [])[0], !b) return e;a = a.slice(i.shift().value.length);
        }h = V.needsContext.test(a) ? 0 : i.length;while (h--) {
          if (j = i[h], d.relative[k = j.type]) break;if ((l = d.find[k]) && (f = l(j.matches[0].replace(ab, bb), $.test(i[0].type) && mb(b.parentNode) || b))) {
            if (i.splice(h, 1), a = f.length && pb(i), !a) return G.apply(e, f), e;break;
          }
        }
      }return g(a, m)(f, b, !n, e, $.test(a) && mb(b.parentNode) || b), e;
    }return c.sortStable = s.split("").sort(z).join("") === s, c.detectDuplicates = !!j, k(), c.sortDetached = gb(function (a) {
      return 1 & a.compareDocumentPosition(l.createElement("div"));
    }), gb(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || hb("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && gb(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || hb("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), gb(function (a) {
      return null == a.getAttribute("disabled");
    }) || hb(J, function (a, b, c) {
      var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), db;
  }(a);o.find = t, o.expr = t.selectors, o.expr[":"] = o.expr.pseudos, o.unique = t.uniqueSort, o.text = t.getText, o.isXMLDoc = t.isXML, o.contains = t.contains;var u = o.expr.match.needsContext,
      v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      w = /^.[^:#\[\.,]*$/;function x(a, b, c) {
    if (o.isFunction(b)) return o.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });if (b.nodeType) return o.grep(a, function (a) {
      return a === b !== c;
    });if ("string" == typeof b) {
      if (w.test(b)) return o.filter(b, a, c);b = o.filter(b, a);
    }return o.grep(a, function (a) {
      return g.call(b, a) >= 0 !== c;
    });
  }o.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? o.find.matchesSelector(d, a) ? [d] : [] : o.find.matches(a, o.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, o.fn.extend({ find: function find(a) {
      var b,
          c = this.length,
          d = [],
          e = this;if ("string" != typeof a) return this.pushStack(o(a).filter(function () {
        for (b = 0; c > b; b++) {
          if (o.contains(e[b], this)) return !0;
        }
      }));for (b = 0; c > b; b++) {
        o.find(a, e[b], d);
      }return d = this.pushStack(c > 1 ? o.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
    }, filter: function filter(a) {
      return this.pushStack(x(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(x(this, a || [], !0));
    }, is: function is(a) {
      return !!x(this, "string" == typeof a && u.test(a) ? o(a) : a || [], !1).length;
    } });var y,
      z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      A = o.fn.init = function (a, b) {
    var c, d;if (!a) return this;if ("string" == typeof a) {
      if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);if (c[1]) {
        if (b = b instanceof o ? b[0] : b, o.merge(this, o.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : m, !0)), v.test(c[1]) && o.isPlainObject(b)) for (c in b) {
          o.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
        }return this;
      }return d = m.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = m, this.selector = a, this;
    }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : o.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(o) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), o.makeArray(a, this));
  };A.prototype = o.fn, y = o(m);var B = /^(?:parents|prev(?:Until|All))/,
      C = { children: !0, contents: !0, next: !0, prev: !0 };o.extend({ dir: function dir(a, b, c) {
      var d = [],
          e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
        if (1 === a.nodeType) {
          if (e && o(a).is(c)) break;d.push(a);
        }
      }return d;
    }, sibling: function sibling(a, b) {
      for (var c = []; a; a = a.nextSibling) {
        1 === a.nodeType && a !== b && c.push(a);
      }return c;
    } }), o.fn.extend({ has: function has(a) {
      var b = o(a, this),
          c = b.length;return this.filter(function () {
        for (var a = 0; c > a; a++) {
          if (o.contains(this, b[a])) return !0;
        }
      });
    }, closest: function closest(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? o(a, b || this.context) : 0; e > d; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && o.find.matchesSelector(c, a))) {
            f.push(c);break;
          }
        }
      }return this.pushStack(f.length > 1 ? o.unique(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? g.call(o(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(o.unique(o.merge(this.get(), o(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function D(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType) {}return a;
  }o.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return o.dir(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return o.dir(a, "parentNode", c);
    }, next: function next(a) {
      return D(a, "nextSibling");
    }, prev: function prev(a) {
      return D(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return o.dir(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return o.dir(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return o.dir(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return o.dir(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return o.sibling((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return o.sibling(a.firstChild);
    }, contents: function contents(a) {
      return a.contentDocument || o.merge([], a.childNodes);
    } }, function (a, b) {
    o.fn[a] = function (c, d) {
      var e = o.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = o.filter(d, e)), this.length > 1 && (C[a] || o.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
    };
  });var E = /\S+/g,
      F = {};function G(a) {
    var b = F[a] = {};return o.each(a.match(E) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }o.Callbacks = function (a) {
    a = "string" == typeof a ? F[a] || G(a) : o.extend({}, a);var b,
        c,
        d,
        e,
        f,
        g,
        h = [],
        i = !a.once && [],
        j = function j(l) {
      for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) {
        if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
          b = !1;break;
        }
      }d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
    },
        k = { add: function add() {
        if (h) {
          var c = h.length;!function g(b) {
            o.each(b, function (b, c) {
              var d = o.type(c);"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c);
            });
          }(arguments), d ? f = h.length : b && (e = c, j(b));
        }return this;
      }, remove: function remove() {
        return h && o.each(arguments, function (a, b) {
          var c;while ((c = o.inArray(b, h, c)) > -1) {
            h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
          }
        }), this;
      }, has: function has(a) {
        return a ? o.inArray(a, h) > -1 : !(!h || !h.length);
      }, empty: function empty() {
        return h = [], f = 0, this;
      }, disable: function disable() {
        return h = i = b = void 0, this;
      }, disabled: function disabled() {
        return !h;
      }, lock: function lock() {
        return i = void 0, b || k.disable(), this;
      }, locked: function locked() {
        return !i;
      }, fireWith: function fireWith(a, b) {
        return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this;
      }, fire: function fire() {
        return k.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!c;
      } };return k;
  }, o.extend({ Deferred: function Deferred(a) {
      var b = [["resolve", "done", o.Callbacks("once memory"), "resolved"], ["reject", "fail", o.Callbacks("once memory"), "rejected"], ["notify", "progress", o.Callbacks("memory")]],
          c = "pending",
          d = { state: function state() {
          return c;
        }, always: function always() {
          return e.done(arguments).fail(arguments), this;
        }, then: function then() {
          var a = arguments;return o.Deferred(function (c) {
            o.each(b, function (b, f) {
              var g = o.isFunction(a[b]) && a[b];e[f[1]](function () {
                var a = g && g.apply(this, arguments);a && o.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, promise: function promise(a) {
          return null != a ? o.extend(a, d) : d;
        } },
          e = {};return d.pipe = d.then, o.each(b, function (a, f) {
        var g = f[2],
            h = f[3];d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    }, when: function when(a) {
      var b = 0,
          c = d.call(arguments),
          e = c.length,
          f = 1 !== e || a && o.isFunction(a.promise) ? e : 0,
          g = 1 === f ? a : o.Deferred(),
          h = function h(a, b, c) {
        return function (e) {
          b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
        c[b] && o.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
      }return f || g.resolveWith(k, c), g.promise();
    } });var H;o.fn.ready = function (a) {
    return o.ready.promise().done(a), this;
  }, o.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
      a ? o.readyWait++ : o.ready(!0);
    }, ready: function ready(a) {
      (a === !0 ? --o.readyWait : o.isReady) || (o.isReady = !0, a !== !0 && --o.readyWait > 0 || (H.resolveWith(m, [o]), o.fn.trigger && o(m).trigger("ready").off("ready")));
    } });function I() {
    m.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), o.ready();
  }o.ready.promise = function (b) {
    return H || (H = o.Deferred(), "complete" === m.readyState ? setTimeout(o.ready) : (m.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b);
  }, o.ready.promise();var J = o.access = function (a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === o.type(c)) {
      e = !0;for (h in c) {
        o.access(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, o.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b2, c) {
      return j.call(o(a), c);
    })), b)) for (; i > h; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  };o.acceptData = function (a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };function K() {
    Object.defineProperty(this.cache = {}, 0, { get: function get() {
        return {};
      } }), this.expando = o.expando + Math.random();
  }K.uid = 1, K.accepts = o.acceptData, K.prototype = { key: function key(a) {
      if (!K.accepts(a)) return 0;var b = {},
          c = a[this.expando];if (!c) {
        c = K.uid++;try {
          b[this.expando] = { value: c }, Object.defineProperties(a, b);
        } catch (d) {
          b[this.expando] = c, o.extend(a, b);
        }
      }return this.cache[c] || (this.cache[c] = {}), c;
    }, set: function set(a, b, c) {
      var d,
          e = this.key(a),
          f = this.cache[e];if ("string" == typeof b) f[b] = c;else if (o.isEmptyObject(f)) o.extend(this.cache[e], b);else for (d in b) {
        f[d] = b[d];
      }return f;
    }, get: function get(a, b) {
      var c = this.cache[this.key(a)];return void 0 === b ? c : c[b];
    }, access: function access(a, b, c) {
      var d;return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, o.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
    }, remove: function remove(a, b) {
      var c,
          d,
          e,
          f = this.key(a),
          g = this.cache[f];if (void 0 === b) this.cache[f] = {};else {
        o.isArray(b) ? d = b.concat(b.map(o.camelCase)) : (e = o.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;while (c--) {
          delete g[d[c]];
        }
      }
    }, hasData: function hasData(a) {
      return !o.isEmptyObject(this.cache[a[this.expando]] || {});
    }, discard: function discard(a) {
      a[this.expando] && delete this.cache[a[this.expando]];
    } };var L = new K(),
      M = new K(),
      N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      O = /([A-Z])/g;function P(a, b, c) {
    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? o.parseJSON(c) : c;
      } catch (e) {}M.set(a, b, c);
    } else c = void 0;return c;
  }o.extend({ hasData: function hasData(a) {
      return M.hasData(a) || L.hasData(a);
    }, data: function data(a, b, c) {
      return M.access(a, b, c);
    }, removeData: function removeData(a, b) {
      M.remove(a, b);
    }, _data: function _data(a, b, c) {
      return L.access(a, b, c);
    }, _removeData: function _removeData(a, b) {
      L.remove(a, b);
    } }), o.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
          c = g.length;
          while (c--) {
            d = g[c].name, 0 === d.indexOf("data-") && (d = o.camelCase(d.slice(5)), P(f, d, e[d]));
          }L.set(f, "hasDataAttrs", !0);
        }return e;
      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
        M.set(this, a);
      }) : J(this, function (b) {
        var c,
            d = o.camelCase(a);if (f && void 0 === b) {
          if (c = M.get(f, a), void 0 !== c) return c;if (c = M.get(f, d), void 0 !== c) return c;if (c = P(f, d, void 0), void 0 !== c) return c;
        } else this.each(function () {
          var c = M.get(this, d);M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    }, removeData: function removeData(a) {
      return this.each(function () {
        M.remove(this, a);
      });
    } }), o.extend({ queue: function queue(a, b, c) {
      var d;return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || o.isArray(c) ? d = L.access(a, b, o.makeArray(c)) : d.push(c)), d || []) : void 0;
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = o.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = o._queueHooks(a, b),
          g = function g() {
        o.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return L.get(a, c) || L.access(a, c, { empty: o.Callbacks("once memory").add(function () {
          L.remove(a, [b + "queue", c]);
        }) });
    } }), o.fn.extend({ queue: function queue(a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? o.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = o.queue(this, a, b);o._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && o.dequeue(this, a);
      });
    }, dequeue: function dequeue(a) {
      return this.each(function () {
        o.dequeue(this, a);
      });
    }, clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    }, promise: function promise(a, b) {
      var c,
          d = 1,
          e = o.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
        c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }return h(), e.promise(b);
    } });var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      R = ["Top", "Right", "Bottom", "Left"],
      S = function S(a, b) {
    return a = b || a, "none" === o.css(a, "display") || !o.contains(a.ownerDocument, a);
  },
      T = /^(?:checkbox|radio)$/i;!function () {
    var a = m.createDocumentFragment(),
        b = a.appendChild(m.createElement("div"));b.innerHTML = "<input type='radio' checked='checked' name='t'/>", l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();var U = "undefined";l.focusinBubbles = "onfocusin" in a;var V = /^key/,
      W = /^(?:mouse|contextmenu)|click/,
      X = /^(?:focusinfocus|focusoutblur)$/,
      Y = /^([^.]*)(?:\.(.+)|)$/;function Z() {
    return !0;
  }function $() {
    return !1;
  }function _() {
    try {
      return m.activeElement;
    } catch (a) {}
  }o.event = { global: {}, add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          p,
          q,
          r = L.get(a);if (r) {
        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = o.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
          return (typeof o === "undefined" ? "undefined" : _typeof(o)) !== U && o.event.triggered !== b.type ? o.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(E) || [""], j = b.length;while (j--) {
          h = Y.exec(b[j]) || [], n = q = h[1], p = (h[2] || "").split(".").sort(), n && (l = o.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = o.event.special[n] || {}, k = o.extend({ type: n, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && o.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), o.event.global[n] = !0);
        }
      }
    }, remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          p,
          q,
          r = L.hasData(a) && L.get(a);if (r && (i = r.events)) {
        b = (b || "").match(E) || [""], j = b.length;while (j--) {
          if (h = Y.exec(b[j]) || [], n = q = h[1], p = (h[2] || "").split(".").sort(), n) {
            l = o.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
              k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            }g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || o.removeEvent(a, n, r.handle), delete i[n]);
          } else for (n in i) {
            o.event.remove(a, n + b[j], c, d, !0);
          }
        }o.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
      }
    }, trigger: function trigger(b, c, d, e) {
      var f,
          g,
          h,
          i,
          k,
          l,
          n,
          p = [d || m],
          q = j.call(b, "type") ? b.type : b,
          r = j.call(b, "namespace") ? b.namespace.split(".") : [];if (g = h = d = d || m, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + o.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[o.expando] ? b : new o.Event(q, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : o.makeArray(c, [b]), n = o.event.special[q] || {}, e || !n.trigger || n.trigger.apply(d, c) !== !1)) {
        if (!e && !n.noBubble && !o.isWindow(d)) {
          for (i = n.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) {
            p.push(g), h = g;
          }h === (d.ownerDocument || m) && p.push(h.defaultView || h.parentWindow || a);
        }f = 0;while ((g = p[f++]) && !b.isPropagationStopped()) {
          b.type = f > 1 ? i : n.bindType || q, l = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), l && l.apply(g, c), l = k && g[k], l && l.apply && o.acceptData(g) && (b.result = l.apply(g, c), b.result === !1 && b.preventDefault());
        }return b.type = q, e || b.isDefaultPrevented() || n._default && n._default.apply(p.pop(), c) !== !1 || !o.acceptData(d) || k && o.isFunction(d[q]) && !o.isWindow(d) && (h = d[k], h && (d[k] = null), o.event.triggered = q, d[q](), o.event.triggered = void 0, h && (d[k] = h)), b.result;
      }
    }, dispatch: function dispatch(a) {
      a = o.event.fix(a);var b,
          c,
          e,
          f,
          g,
          h = [],
          i = d.call(arguments),
          j = (L.get(this, "events") || {})[a.type] || [],
          k = o.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = o.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
            (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((o.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
          }
        }return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i !== this; i = i.parentNode || this) {
        if (i.disabled !== !0 || "click" !== a.type) {
          for (d = [], c = 0; h > c; c++) {
            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? o(e, this).index(i) >= 0 : o.find(e, this, null, [i]).length), d[e] && d.push(f);
          }d.length && g.push({ elem: i, handlers: d });
        }
      }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
        var c,
            d,
            e,
            f = b.button;return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || m, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
      } }, fix: function fix(a) {
      if (a[o.expando]) return a;var b,
          c,
          d,
          e = a.type,
          f = a,
          g = this.fixHooks[e];g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new o.Event(f), b = d.length;while (b--) {
        c = d[b], a[c] = f[c];
      }return a.target || (a.target = m), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a;
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          return this !== _() && this.focus ? (this.focus(), !1) : void 0;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          return this === _() && this.blur ? (this.blur(), !1) : void 0;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          return "checkbox" === this.type && this.click && o.nodeName(this, "input") ? (this.click(), !1) : void 0;
        }, _default: function _default(a) {
          return o.nodeName(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && (a.originalEvent.returnValue = a.result);
        } } }, simulate: function simulate(a, b, c, d) {
      var e = o.extend(new o.Event(), c, { type: a, isSimulated: !0, originalEvent: {} });d ? o.event.trigger(e, null, b) : o.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
    } }, o.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1);
  }, o.Event = function (a, b) {
    return this instanceof o.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.getPreventDefault && a.getPreventDefault() ? Z : $) : this.type = a, b && o.extend(this, b), this.timeStamp = a && a.timeStamp || o.now(), void (this[o.expando] = !0)) : new o.Event(a, b);
  }, o.Event.prototype = { isDefaultPrevented: $, isPropagationStopped: $, isImmediatePropagationStopped: $, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      this.isImmediatePropagationStopped = Z, this.stopPropagation();
    } }, o.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (a, b) {
    o.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return (!e || e !== d && !o.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), l.focusinBubbles || o.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      o.event.simulate(b, a.target, o.event.fix(a), !0);
    };o.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = L.access(d, b);e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = L.access(d, b) - 1;e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
      } };
  }), o.fn.extend({ on: function on(a, b, c, d, e) {
      var f, g;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        "string" != typeof b && (c = c || b, b = void 0);for (g in a) {
          this.on(g, b, c, a[g], e);
        }return this;
      }if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;else if (!d) return this;return 1 === e && (f = d, d = function d(a) {
        return o().off(a), f.apply(this, arguments);
      }, d.guid = f.guid || (f.guid = o.guid++)), this.each(function () {
        o.event.add(this, a, d, c, b);
      });
    }, one: function one(a, b, c, d) {
      return this.on(a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, o(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        for (e in a) {
          this.off(e, b, a[e]);
        }return this;
      }return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
        o.event.remove(this, a, c, b);
      });
    }, trigger: function trigger(a, b) {
      return this.each(function () {
        o.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];return c ? o.event.trigger(a, b, c, !0) : void 0;
    } });var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      bb = /<([\w:]+)/,
      cb = /<|&#?\w+;/,
      db = /<(?:script|style|link)/i,
      eb = /checked\s*(?:[^=]|=\s*.checked.)/i,
      fb = /^$|\/(?:java|ecma)script/i,
      gb = /^true\/(.*)/,
      hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      ib = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td;function jb(a, b) {
    return o.nodeName(a, "table") && o.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }function kb(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }function lb(a) {
    var b = gb.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function mb(a, b) {
    for (var c = 0, d = a.length; d > c; c++) {
      L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
    }
  }function nb(a, b) {
    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
      if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};for (e in j) {
          for (c = 0, d = j[e].length; d > c; c++) {
            o.event.add(b, e, j[e][c]);
          }
        }
      }M.hasData(a) && (h = M.access(a), i = o.extend({}, h), M.set(b, i));
    }
  }function ob(a, b) {
    var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && o.nodeName(a, b) ? o.merge([a], c) : c;
  }function pb(a, b) {
    var c = b.nodeName.toLowerCase();"input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
  }o.extend({ clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = o.contains(a.ownerDocument, a);if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || o.isXMLDoc(a))) for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++) {
        pb(f[d], g[d]);
      }if (b) if (c) for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++) {
        nb(f[d], g[d]);
      } else nb(a, h);return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h;
    }, buildFragment: function buildFragment(a, b, c, d) {
      for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++) {
        if (e = a[m], e || 0 === e) if ("object" === o.type(e)) o.merge(l, e.nodeType ? [e] : e);else if (cb.test(e)) {
          f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || ["", ""])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], j = h[0];while (j--) {
            f = f.lastChild;
          }o.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
        } else l.push(b.createTextNode(e));
      }k.textContent = "", m = 0;while (e = l[m++]) {
        if ((!d || -1 === o.inArray(e, d)) && (i = o.contains(e.ownerDocument, e), f = ob(k.appendChild(e), "script"), i && mb(f), c)) {
          j = 0;while (e = f[j++]) {
            fb.test(e.type || "") && c.push(e);
          }
        }
      }return k;
    }, cleanData: function cleanData(a) {
      for (var b, c, d, e, f, g, h = o.event.special, i = 0; void 0 !== (c = a[i]); i++) {
        if (o.acceptData(c) && (f = c[L.expando], f && (b = L.cache[f]))) {
          if (d = Object.keys(b.events || {}), d.length) for (g = 0; void 0 !== (e = d[g]); g++) {
            h[e] ? o.event.remove(c, e) : o.removeEvent(c, e, b.handle);
          }L.cache[f] && delete L.cache[f];
        }delete M.cache[c[M.expando]];
      }
    } }), o.fn.extend({ text: function text(a) {
      return J(this, function (a) {
        return void 0 === a ? o.text(this) : this.empty().each(function () {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
        });
      }, null, a, arguments.length);
    }, append: function append() {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = jb(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = jb(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, remove: function remove(a, b) {
      for (var c, d = a ? o.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
        b || 1 !== c.nodeType || o.cleanData(ob(c)), c.parentNode && (b && o.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c));
      }return this;
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && (o.cleanData(ob(a, !1)), a.textContent = "");
      }return this;
    }, clone: function clone(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return o.clone(this, a, b);
      });
    }, html: function html(a) {
      return J(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = a.replace(ab, "<$1></$2>");try {
            for (; d > c; c++) {
              b = this[c] || {}, 1 === b.nodeType && (o.cleanData(ob(b, !1)), b.innerHTML = a);
            }b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = arguments[0];return this.domManip(arguments, function (b) {
        a = this.parentNode, o.cleanData(ob(this)), a && a.replaceChild(b, this);
      }), a && (a.length || a.nodeType) ? this : this.remove();
    }, detach: function detach(a) {
      return this.remove(a, !0);
    }, domManip: function domManip(a, b) {
      a = e.apply([], a);var c,
          d,
          f,
          g,
          h,
          i,
          j = 0,
          k = this.length,
          m = this,
          n = k - 1,
          p = a[0],
          q = o.isFunction(p);if (q || k > 1 && "string" == typeof p && !l.checkClone && eb.test(p)) return this.each(function (c) {
        var d = m.eq(c);q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
      });if (k && (c = o.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
        for (f = o.map(ob(c, "script"), kb), g = f.length; k > j; j++) {
          h = c, j !== n && (h = o.clone(h, !0, !0), g && o.merge(f, ob(h, "script"))), b.call(this[j], h, j);
        }if (g) for (i = f[f.length - 1].ownerDocument, o.map(f, lb), j = 0; g > j; j++) {
          h = f[j], fb.test(h.type || "") && !L.access(h, "globalEval") && o.contains(i, h) && (h.src ? o._evalUrl && o._evalUrl(h.src) : o.globalEval(h.textContent.replace(hb, "")));
        }
      }return this;
    } }), o.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    o.fn[a] = function (a) {
      for (var c, d = [], e = o(a), g = e.length - 1, h = 0; g >= h; h++) {
        c = h === g ? this : this.clone(!0), o(e[h])[b](c), f.apply(d, c.get());
      }return this.pushStack(d);
    };
  });var qb,
      rb = {};function sb(b, c) {
    var d = o(c.createElement(b)).appendTo(c.body),
        e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : o.css(d[0], "display");return d.detach(), e;
  }function tb(a) {
    var b = m,
        c = rb[a];return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c;
  }var ub = /^margin/,
      vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
      wb = function wb(a) {
    return a.ownerDocument.defaultView.getComputedStyle(a, null);
  };function xb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || o.contains(a.ownerDocument, a) || (g = o.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
  }function yb(a, b) {
    return { get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }!function () {
    var b,
        c,
        d = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
        e = m.documentElement,
        f = m.createElement("div"),
        g = m.createElement("div");g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", f.appendChild(g);function h() {
      g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", e.appendChild(f);var d = a.getComputedStyle(g, null);b = "1%" !== d.top, c = "4px" === d.width, e.removeChild(f);
    }a.getComputedStyle && o.extend(l, { pixelPosition: function pixelPosition() {
        return h(), b;
      }, boxSizingReliable: function boxSizingReliable() {
        return null == c && h(), c;
      }, reliableMarginRight: function reliableMarginRight() {
        var b,
            c = g.appendChild(m.createElement("div"));return c.style.cssText = g.style.cssText = d, c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.innerHTML = "", b;
      } });
  }(), o.swap = function (a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }e = c.apply(a, d || []);for (f in b) {
      a.style[f] = g[f];
    }return e;
  };var zb = /^(none|table(?!-c[ea]).+)/,
      Ab = new RegExp("^(" + Q + ")(.*)$", "i"),
      Bb = new RegExp("^([+-])=(" + Q + ")", "i"),
      Cb = { position: "absolute", visibility: "hidden", display: "block" },
      Db = { letterSpacing: 0, fontWeight: 400 },
      Eb = ["Webkit", "O", "Moz", "ms"];function Fb(a, b) {
    if (b in a) return b;var c = b[0].toUpperCase() + b.slice(1),
        d = b,
        e = Eb.length;while (e--) {
      if (b = Eb[e] + c, b in a) return b;
    }return d;
  }function Gb(a, b, c) {
    var d = Ab.exec(b);return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }function Hb(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
      "margin" === c && (g += o.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= o.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= o.css(a, "border" + R[f] + "Width", !0, e))) : (g += o.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += o.css(a, "border" + R[f] + "Width", !0, e)));
    }return g;
  }function Ib(a, b, c) {
    var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = wb(a),
        g = "border-box" === o.css(a, "boxSizing", !1, f);if (0 >= e || null == e) {
      if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e)) return e;d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
    }return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }function Jb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
      d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : f[g] || (e = S(d), (c && "none" !== c || !e) && L.set(d, "olddisplay", e ? c : o.css(d, "display"))));
    }for (g = 0; h > g; g++) {
      d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    }return a;
  }o.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = xb(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = o.camelCase(b),
            i = a.style;return b = o.cssProps[h] || (o.cssProps[h] = Fb(i, h)), g = o.cssHooks[b] || o.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(o.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || o.cssNumber[h] || (c += "px"), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = "", i[b] = c)), void 0);
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = o.camelCase(b);return b = o.cssProps[h] || (o.cssProps[h] = Fb(a.style, h)), g = o.cssHooks[b] || o.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), "" === c || c ? (f = parseFloat(e), c === !0 || o.isNumeric(f) ? f || 0 : e) : e;
    } }), o.each(["height", "width"], function (a, b) {
    o.cssHooks[b] = { get: function get(a, c, d) {
        return c ? 0 === a.offsetWidth && zb.test(o.css(a, "display")) ? o.swap(a, Cb, function () {
          return Ib(a, b, d);
        }) : Ib(a, b, d) : void 0;
      }, set: function set(a, c, d) {
        var e = d && wb(a);return Gb(a, c, d ? Hb(a, b, d, "border-box" === o.css(a, "boxSizing", !1, e), e) : 0);
      } };
  }), o.cssHooks.marginRight = yb(l.reliableMarginRight, function (a, b) {
    return b ? o.swap(a, { display: "inline-block" }, xb, [a, "marginRight"]) : void 0;
  }), o.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    o.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
          e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
        }return e;
      } }, ub.test(a) || (o.cssHooks[a + b].set = Gb);
  }), o.fn.extend({ css: function css(a, b) {
      return J(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (o.isArray(b)) {
          for (d = wb(a), e = b.length; e > g; g++) {
            f[b[g]] = o.css(a, b[g], !1, d);
          }return f;
        }return void 0 !== c ? o.style(a, b, c) : o.css(a, b);
      }, a, b, arguments.length > 1);
    }, show: function show() {
      return Jb(this, !0);
    }, hide: function hide() {
      return Jb(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        S(this) ? o(this).show() : o(this).hide();
      });
    } });function Kb(a, b, c, d, e) {
    return new Kb.prototype.init(a, b, c, d, e);
  }o.Tween = Kb, Kb.prototype = { constructor: Kb, init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (o.cssNumber[c] ? "" : "px");
    }, cur: function cur() {
      var a = Kb.propHooks[this.prop];return a && a.get ? a.get(this) : Kb.propHooks._default.get(this);
    }, run: function run(a) {
      var b,
          c = Kb.propHooks[this.prop];return this.pos = b = this.options.duration ? o.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this;
    } }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = { _default: { get: function get(a) {
        var b;return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = o.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
      }, set: function set(a) {
        o.fx.step[a.prop] ? o.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[o.cssProps[a.prop]] || o.cssHooks[a.prop]) ? o.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
      } } }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = { set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, o.easing = { linear: function linear(a) {
      return a;
    }, swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    } }, o.fx = Kb.prototype.init, o.fx.step = {};var Lb,
      Mb,
      Nb = /^(?:toggle|show|hide)$/,
      Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
      Pb = /queueHooks$/,
      Qb = [Vb],
      Rb = { "*": [function (a, b) {
      var c = this.createTween(a, b),
          d = c.cur(),
          e = Ob.exec(b),
          f = e && e[3] || (o.cssNumber[a] ? "" : "px"),
          g = (o.cssNumber[a] || "px" !== f && +d) && Ob.exec(o.css(c.elem, a)),
          h = 1,
          i = 20;if (g && g[3] !== f) {
        f = f || g[3], e = e || [], g = +d || 1;do {
          h = h || ".5", g /= h, o.style(c.elem, a, g + f);
        } while (h !== (h = c.cur() / d) && 1 !== h && --i);
      }return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
    }] };function Sb() {
    return setTimeout(function () {
      Lb = void 0;
    }), Lb = o.now();
  }function Tb(a, b) {
    var c,
        d = 0,
        e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
      c = R[d], e["margin" + c] = e["padding" + c] = a;
    }return b && (e.opacity = e.width = a), e;
  }function Ub(a, b, c) {
    for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }function Vb(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = this,
        l = {},
        m = a.style,
        n = a.nodeType && S(a),
        p = L.get(a, "fxshow");c.queue || (h = o._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, k.always(function () {
      k.always(function () {
        h.unqueued--, o.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], j = o.css(a, "display"), "none" === j && (j = tb(a.nodeName)), "inline" === j && "none" === o.css(a, "float") && (m.display = "inline-block")), c.overflow && (m.overflow = "hidden", k.always(function () {
      m.overflow = c.overflow[0], m.overflowX = c.overflow[1], m.overflowY = c.overflow[2];
    }));for (d in b) {
      if (e = b[d], Nb.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (n ? "hide" : "show")) {
          if ("show" !== e || !p || void 0 === p[d]) continue;n = !0;
        }l[d] = p && p[d] || o.style(a, d);
      }
    }if (!o.isEmptyObject(l)) {
      p ? "hidden" in p && (n = p.hidden) : p = L.access(a, "fxshow", {}), f && (p.hidden = !n), n ? o(a).show() : k.done(function () {
        o(a).hide();
      }), k.done(function () {
        var b;L.remove(a, "fxshow");for (b in l) {
          o.style(a, b, l[b]);
        }
      });for (d in l) {
        g = Ub(n ? p[d] : 0, d, k), d in p || (p[d] = g.start, n && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
      }
    }
  }function Wb(a, b) {
    var c, d, e, f, g;for (c in a) {
      if (d = o.camelCase(c), e = b[d], f = a[c], o.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = o.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }function Xb(a, b, c) {
    var d,
        e,
        f = 0,
        g = Qb.length,
        h = o.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
        j.tweens[g].run(f);
      }return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: o.extend({}, b), opts: o.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: Lb || Sb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
        var d = o.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
          j.tweens[c].run(1);
        }return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for (Wb(k, j.opts.specialEasing); g > f; f++) {
      if (d = Qb[f].call(j, a, k, j.opts)) return d;
    }return o.map(k, Ub, j), o.isFunction(j.opts.start) && j.opts.start.call(a, j), o.fx.timer(o.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }o.Animation = o.extend(Xb, { tweener: function tweener(a, b) {
      o.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");for (var c, d = 0, e = a.length; e > d; d++) {
        c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b);
      }
    }, prefilter: function prefilter(a, b) {
      b ? Qb.unshift(a) : Qb.push(a);
    } }), o.speed = function (a, b, c) {
    var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? o.extend({}, a) : { complete: c || !c && b || o.isFunction(a) && a, duration: a, easing: c && b || b && !o.isFunction(b) && b };return d.duration = o.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in o.fx.speeds ? o.fx.speeds[d.duration] : o.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      o.isFunction(d.old) && d.old.call(this), d.queue && o.dequeue(this, d.queue);
    }, d;
  }, o.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(S).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function animate(a, b, c, d) {
      var e = o.isEmptyObject(a),
          f = o.speed(b, c, d),
          g = function g() {
        var b = Xb(this, o.extend({}, a), f);(e || L.get(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = o.timers,
            g = L.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && Pb.test(e) && d(g[e]);
        }for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }(b || !c) && o.dequeue(this, a);
      });
    }, finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = L.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = o.timers,
            g = d ? d.length : 0;for (c.finish = !0, o.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }for (b = 0; g > b; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }delete c.finish;
      });
    } }), o.each(["toggle", "show", "hide"], function (a, b) {
    var c = o.fn[b];o.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e);
    };
  }), o.each({ slideDown: Tb("show"), slideUp: Tb("hide"), slideToggle: Tb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    o.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), o.timers = [], o.fx.tick = function () {
    var a,
        b = 0,
        c = o.timers;for (Lb = o.now(); b < c.length; b++) {
      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    }c.length || o.fx.stop(), Lb = void 0;
  }, o.fx.timer = function (a) {
    o.timers.push(a), a() ? o.fx.start() : o.timers.pop();
  }, o.fx.interval = 13, o.fx.start = function () {
    Mb || (Mb = setInterval(o.fx.tick, o.fx.interval));
  }, o.fx.stop = function () {
    clearInterval(Mb), Mb = null;
  }, o.fx.speeds = { slow: 600, fast: 200, _default: 400 }, o.fn.delay = function (a, b) {
    return a = o.fx ? o.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
      var d = setTimeout(b, a);c.stop = function () {
        clearTimeout(d);
      };
    });
  }, function () {
    var a = m.createElement("input"),
        b = m.createElement("select"),
        c = b.appendChild(m.createElement("option"));a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = m.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value;
  }();var Yb,
      Zb,
      $b = o.expr.attrHandle;o.fn.extend({ attr: function attr(a, b) {
      return J(this, o.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        o.removeAttr(this, a);
      });
    } }), o.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (a && 3 !== f && 8 !== f && 2 !== f) return _typeof(a.getAttribute) === U ? o.prop(a, b, c) : (1 === f && o.isXMLDoc(a) || (b = b.toLowerCase(), d = o.attrHooks[b] || (o.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = o.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void o.removeAttr(a, b));
    }, removeAttr: function removeAttr(a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(E);if (f && 1 === a.nodeType) while (c = f[e++]) {
        d = o.propFix[c] || c, o.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
      }
    }, attrHooks: { type: { set: function set(a, b) {
          if (!l.radioValue && "radio" === b && o.nodeName(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } } }), Zb = { set: function set(a, b, c) {
      return b === !1 ? o.removeAttr(a, c) : a.setAttribute(c, c), c;
    } }, o.each(o.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = $b[b] || o.find.attr;$b[b] = function (a, b, d) {
      var e, f;
      return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e;
    };
  });var _b = /^(?:input|select|textarea|button)$/i;o.fn.extend({ prop: function prop(a, b) {
      return J(this, o.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[o.propFix[a] || a];
      });
    } }), o.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function prop(a, b, c) {
      var d,
          e,
          f,
          g = a.nodeType;if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !o.isXMLDoc(a), f && (b = o.propFix[b] || b, e = o.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1;
        } } } }), l.optSelected || (o.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
    } }), o.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    o.propFix[this.toLowerCase()] = this;
  });var ac = /[\t\r\n\f]/g;o.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = "string" == typeof a && a,
          i = 0,
          j = this.length;if (o.isFunction(a)) return this.each(function (b) {
        o(this).addClass(a.call(this, b, this.className));
      });if (h) for (b = (a || "").match(E) || []; j > i; i++) {
        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
          f = 0;while (e = b[f++]) {
            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
          }g = o.trim(d), c.className !== g && (c.className = g);
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = 0 === arguments.length || "string" == typeof a && a,
          i = 0,
          j = this.length;if (o.isFunction(a)) return this.each(function (b) {
        o(this).removeClass(a.call(this, b, this.className));
      });if (h) for (b = (a || "").match(E) || []; j > i; i++) {
        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
          f = 0;while (e = b[f++]) {
            while (d.indexOf(" " + e + " ") >= 0) {
              d = d.replace(" " + e + " ", " ");
            }
          }g = a ? o.trim(d) : "", c.className !== g && (c.className = g);
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(o.isFunction(a) ? function (c) {
        o(this).toggleClass(a.call(this, c, this.className, b), b);
      } : function () {
        if ("string" === c) {
          var b,
              d = 0,
              e = o(this),
              f = a.match(E) || [];while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "");
      });
    }, hasClass: function hasClass(a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
        if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0) return !0;
      }return !1;
    } });var bc = /\r/g;o.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = o.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, o(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : o.isArray(e) && (e = o.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = o.valHooks[this.type] || o.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = o.valHooks[e.type] || o.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c);
      }
    } }), o.extend({ valHooks: { select: { get: function get(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
            if (c = d[i], !(!c.selected && i !== e || (l.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && o.nodeName(c.parentNode, "optgroup"))) {
              if (b = o(c).val(), f) return b;g.push(b);
            }
          }return g;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = o.makeArray(b),
              g = e.length;while (g--) {
            d = e[g], (d.selected = o.inArray(o(d).val(), f) >= 0) && (c = !0);
          }return c || (a.selectedIndex = -1), f;
        } } } }), o.each(["radio", "checkbox"], function () {
    o.valHooks[this] = { set: function set(a, b) {
        return o.isArray(b) ? a.checked = o.inArray(o(a).val(), b) >= 0 : void 0;
      } }, l.checkOn || (o.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  }), o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    o.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), o.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    }, bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function unbind(a, b) {
      return this.off(a, null, b);
    }, delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    } });var cc = o.now(),
      dc = /\?/;o.parseJSON = function (a) {
    return JSON.parse(a + "");
  }, o.parseXML = function (a) {
    var b, c;if (!a || "string" != typeof a) return null;try {
      c = new DOMParser(), b = c.parseFromString(a, "text/xml");
    } catch (d) {
      b = void 0;
    }return (!b || b.getElementsByTagName("parsererror").length) && o.error("Invalid XML: " + a), b;
  };var ec,
      fc,
      gc = /#.*$/,
      hc = /([?&])_=[^&]*/,
      ic = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      kc = /^(?:GET|HEAD)$/,
      lc = /^\/\//,
      mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      nc = {},
      oc = {},
      pc = "*/".concat("*");try {
    fc = location.href;
  } catch (qc) {
    fc = m.createElement("a"), fc.href = "", fc = fc.href;
  }ec = mc.exec(fc.toLowerCase()) || [];function rc(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(E) || [];if (o.isFunction(c)) while (d = f[e++]) {
        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }function sc(a, b, c, d) {
    var e = {},
        f = a === oc;function g(h) {
      var i;return e[h] = !0, o.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function tc(a, b) {
    var c,
        d,
        e = o.ajaxSettings.flatOptions || {};for (c in b) {
      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    }return d && o.extend(!0, a, d), a;
  }function uc(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) {
      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    }if (d) for (e in h) {
      if (h[e] && h[e].test(d)) {
        i.unshift(e);break;
      }
    }if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;break;
        }g || (g = e);
      }f = f || g;
    }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }function vc(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }f = k.shift();while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
          }
        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
        }
      }
    }return { state: "success", data: b };
  }o.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: fc, type: "GET", isLocal: jc.test(ec[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": pc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": o.parseJSON, "text xml": o.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
      return b ? tc(tc(a, o.ajaxSettings), b) : tc(o.ajaxSettings, a);
    }, ajaxPrefilter: rc(nc), ajaxTransport: rc(oc), ajax: function ajax(a, b) {
      "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && (b = a, a = void 0), b = b || {};var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = o.ajaxSetup({}, b),
          l = k.context || k,
          m = k.context && (l.nodeType || l.jquery) ? o(l) : o.event,
          n = o.Deferred(),
          p = o.Callbacks("once memory"),
          q = k.statusCode || {},
          r = {},
          s = {},
          t = 0,
          u = "canceled",
          v = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
          var b;if (2 === t) {
            if (!f) {
              f = {};while (b = ic.exec(e)) {
                f[b[1].toLowerCase()] = b[2];
              }
            }b = f[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === t ? e : null;
        }, setRequestHeader: function setRequestHeader(a, b) {
          var c = a.toLowerCase();return t || (a = s[c] = s[c] || a, r[a] = b), this;
        }, overrideMimeType: function overrideMimeType(a) {
          return t || (k.mimeType = a), this;
        }, statusCode: function statusCode(a) {
          var b;if (a) if (2 > t) for (b in a) {
            q[b] = [q[b], a[b]];
          } else v.always(a[v.status]);return this;
        }, abort: function abort(a) {
          var b = a || u;return c && c.abort(b), x(0, b), this;
        } };if (n.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || fc) + "").replace(gc, "").replace(lc, ec[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = o.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = mc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === ec[1] && h[2] === ec[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (ec[3] || ("http:" === ec[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = o.param(k.data, k.traditional)), sc(nc, k, b, v), 2 === t) return v;i = k.global, i && 0 === o.active++ && o.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !kc.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = hc.test(d) ? d.replace(hc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), k.ifModified && (o.lastModified[d] && v.setRequestHeader("If-Modified-Since", o.lastModified[d]), o.etag[d] && v.setRequestHeader("If-None-Match", o.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : k.accepts["*"]);for (j in k.headers) {
        v.setRequestHeader(j, k.headers[j]);
      }if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();u = "abort";for (j in { success: 1, error: 1, complete: 1 }) {
        v[j](k[j]);
      }if (c = sc(oc, k, b, v)) {
        v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
          v.abort("timeout");
        }, k.timeout));try {
          t = 1, c.send(r, x);
        } catch (w) {
          if (!(2 > t)) throw w;x(-1, w);
        }
      } else x(-1, "No Transport");function x(a, b, f, h) {
        var j,
            r,
            s,
            u,
            w,
            x = b;2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = uc(k, v, f)), u = vc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (o.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (o.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? n.resolveWith(l, [r, x, v]) : n.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --o.active || o.event.trigger("ajaxStop")));
      }return v;
    }, getJSON: function getJSON(a, b, c) {
      return o.get(a, b, c, "json");
    }, getScript: function getScript(a, b) {
      return o.get(a, void 0, b, "script");
    } }), o.each(["get", "post"], function (a, b) {
    o[b] = function (a, c, d, e) {
      return o.isFunction(c) && (e = e || d, d = c, c = void 0), o.ajax({ url: a, type: b, dataType: e, data: c, success: d });
    };
  }), o.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    o.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), o._evalUrl = function (a) {
    return o.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
  }, o.fn.extend({ wrapAll: function wrapAll(a) {
      var b;return o.isFunction(a) ? this.each(function (b) {
        o(this).wrapAll(a.call(this, b));
      }) : (this[0] && (b = o(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;while (a.firstElementChild) {
          a = a.firstElementChild;
        }return a;
      }).append(this)), this);
    }, wrapInner: function wrapInner(a) {
      return this.each(o.isFunction(a) ? function (b) {
        o(this).wrapInner(a.call(this, b));
      } : function () {
        var b = o(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function wrap(a) {
      var b = o.isFunction(a);return this.each(function (c) {
        o(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function unwrap() {
      return this.parent().each(function () {
        o.nodeName(this, "body") || o(this).replaceWith(this.childNodes);
      }).end();
    } }), o.expr.filters.hidden = function (a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0;
  }, o.expr.filters.visible = function (a) {
    return !o.expr.filters.hidden(a);
  };var wc = /%20/g,
      xc = /\[\]$/,
      yc = /\r?\n/g,
      zc = /^(?:submit|button|image|reset|file)$/i,
      Ac = /^(?:input|select|textarea|keygen)/i;function Bc(a, b, c, d) {
    var e;if (o.isArray(b)) o.each(b, function (b, e) {
      c || xc.test(a) ? d(a, e) : Bc(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? b : "") + "]", e, c, d);
    });else if (c || "object" !== o.type(b)) d(a, b);else for (e in b) {
      Bc(a + "[" + e + "]", b[e], c, d);
    }
  }o.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      b = o.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };if (void 0 === b && (b = o.ajaxSettings && o.ajaxSettings.traditional), o.isArray(a) || a.jquery && !o.isPlainObject(a)) o.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      Bc(c, a[c], b, e);
    }return d.join("&").replace(wc, "+");
  }, o.fn.extend({ serialize: function serialize() {
      return o.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = o.prop(this, "elements");return a ? o.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !o(this).is(":disabled") && Ac.test(this.nodeName) && !zc.test(a) && (this.checked || !T.test(a));
      }).map(function (a, b) {
        var c = o(this).val();return null == c ? null : o.isArray(c) ? o.map(c, function (a) {
          return { name: b.name, value: a.replace(yc, "\r\n") };
        }) : { name: b.name, value: c.replace(yc, "\r\n") };
      }).get();
    } }), o.ajaxSettings.xhr = function () {
    try {
      return new XMLHttpRequest();
    } catch (a) {}
  };var Cc = 0,
      Dc = {},
      Ec = { 0: 200, 1223: 204 },
      Fc = o.ajaxSettings.xhr();a.ActiveXObject && o(a).on("unload", function () {
    for (var a in Dc) {
      Dc[a]();
    }
  }), l.cors = !!Fc && "withCredentials" in Fc, l.ajax = Fc = !!Fc, o.ajaxTransport(function (a) {
    var _b3;return l.cors || Fc && !a.crossDomain ? { send: function send(c, d) {
        var e,
            f = a.xhr(),
            g = ++Cc;if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) {
          f[e] = a.xhrFields[e];
        }a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");for (e in c) {
          f.setRequestHeader(e, c[e]);
        }_b3 = function b(a) {
          return function () {
            _b3 && (delete Dc[g], _b3 = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? { text: f.responseText } : void 0, f.getAllResponseHeaders()));
          };
        }, f.onload = _b3(), f.onerror = _b3("error"), _b3 = Dc[g] = _b3("abort"), f.send(a.hasContent && a.data || null);
      }, abort: function abort() {
        _b3 && _b3();
      } } : void 0;
  }), o.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(a) {
        return o.globalEval(a), a;
      } } }), o.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), o.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, _c;return { send: function send(d, e) {
          b = o("<script>").prop({ async: !0, charset: a.scriptCharset, src: a.url }).on("load error", _c = function c(a) {
            b.remove(), _c = null, a && e("error" === a.type ? 404 : 200, a.type);
          }), m.head.appendChild(b[0]);
        }, abort: function abort() {
          _c && _c();
        } };
    }
  });var Gc = [],
      Hc = /(=)\?(?=&|$)|\?\?/;o.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var a = Gc.pop() || o.expando + "_" + cc++;return this[a] = !0, a;
    } }), o.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Hc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = o.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || o.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && o.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), o.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || m;var d = v.exec(a),
        e = !c && [];return d ? [b.createElement(d[1])] : (d = o.buildFragment([a], b, e), e && e.length && o(e).remove(), o.merge([], d.childNodes));
  };var Ic = o.fn.load;o.fn.load = function (a, b, c) {
    if ("string" != typeof a && Ic) return Ic.apply(this, arguments);var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h >= 0 && (d = a.slice(h), a = a.slice(0, h)), o.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && o.ajax({ url: a, type: e, dataType: "html", data: b }).done(function (a) {
      f = arguments, g.html(d ? o("<div>").append(o.parseHTML(a)).find(d) : a);
    }).complete(c && function (a, b) {
      g.each(c, f || [a.responseText, b, a]);
    }), this;
  }, o.expr.filters.animated = function (a) {
    return o.grep(o.timers, function (b) {
      return a === b.elem;
    }).length;
  };var Jc = a.document.documentElement;function Kc(a) {
    return o.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }o.offset = { setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = o.css(a, "position"),
          l = o(a),
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = o.css(a, "top"), i = o.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), o.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, o.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        o.offset.setOffset(this, a, b);
      });var b,
          c,
          d = this[0],
          e = { top: 0, left: 0 },
          f = d && d.ownerDocument;if (f) return b = f.documentElement, o.contains(b, d) ? (_typeof(d.getBoundingClientRect) !== U && (e = d.getBoundingClientRect()), c = Kc(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e;
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };return "fixed" === o.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), o.nodeName(a[0], "html") || (d = a.offset()), d.top += o.css(a[0], "borderTopWidth", !0), d.left += o.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - o.css(c, "marginTop", !0), left: b.left - d.left - o.css(c, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent || Jc;while (a && !o.nodeName(a, "html") && "static" === o.css(a, "position")) {
          a = a.offsetParent;
        }return a || Jc;
      });
    } }), o.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (b, c) {
    var d = "pageYOffset" === c;o.fn[b] = function (e) {
      return J(this, function (b, e, f) {
        var g = Kc(b);return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
      }, b, e, arguments.length, null);
    };
  }), o.each(["top", "left"], function (a, b) {
    o.cssHooks[b] = yb(l.pixelPosition, function (a, c) {
      return c ? (c = xb(a, b), vb.test(c) ? o(a).position()[b] + "px" : c) : void 0;
    });
  }), o.each({ Height: "height", Width: "width" }, function (a, b) {
    o.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      o.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");return J(this, function (b, c, d) {
          var e;return o.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? o.css(b, c, g) : o.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), o.fn.size = function () {
    return this.length;
  }, o.fn.andSelf = o.fn.addBack, "function" == "function" && __webpack_require__(1) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return o;
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Lc = a.jQuery,
      Mc = a.$;return o.noConflict = function (b) {
    return a.$ === o && (a.$ = Mc), b && a.jQuery === o && (a.jQuery = Lc), o;
  }, (typeof b === "undefined" ? "undefined" : _typeof(b)) === U && (a.jQuery = a.$ = o), o;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (e, t) {
  "use strict";
  var n = e.History = e.History || {},
      r = __webpack_provided_window_dot_jQuery;if (typeof n.Adapter != "undefined") throw new Error("History.js Adapter has already been loaded...");n.Adapter = { bind: function bind(e, t, n) {
      r(e).bind(t, n);
    }, trigger: function trigger(e, t, n) {
      r(e).trigger(t, n);
    }, extractEventData: function extractEventData(e, n, r) {
      var i = n && n.originalEvent && n.originalEvent[e] || r && r[e] || t;return i;
    }, onDomLoad: function onDomLoad(e) {
      r(e);
    } }, typeof n.init != "undefined" && n.init();
})(window), function (e, t) {
  "use strict";
  var n = e.console || t,
      r = e.document,
      i = e.navigator,
      s = !1,
      o = e.setTimeout,
      u = e.clearTimeout,
      a = e.setInterval,
      f = e.clearInterval,
      l = e.JSON,
      c = e.alert,
      h = e.History = e.History || {},
      p = e.history;try {
    s = e.sessionStorage, s.setItem("TEST", "1"), s.removeItem("TEST");
  } catch (d) {
    s = !1;
  }l.stringify = l.stringify || l.encode, l.parse = l.parse || l.decode;if (typeof h.init != "undefined") throw new Error("History.js Core has already been loaded...");h.init = function (e) {
    return typeof h.Adapter == "undefined" ? !1 : (typeof h.initCore != "undefined" && h.initCore(), typeof h.initHtml4 != "undefined" && h.initHtml4(), !0);
  }, h.initCore = function (d) {
    if (typeof h.initCore.initialized != "undefined") return !1;h.initCore.initialized = !0, h.options = h.options || {}, h.options.hashChangeInterval = h.options.hashChangeInterval || 100, h.options.safariPollInterval = h.options.safariPollInterval || 500, h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500, h.options.disableSuid = h.options.disableSuid || !1, h.options.storeInterval = h.options.storeInterval || 1e3, h.options.busyDelay = h.options.busyDelay || 250, h.options.debug = h.options.debug || !1, h.options.initialTitle = h.options.initialTitle || r.title, h.options.html4Mode = h.options.html4Mode || !1, h.options.delayInit = h.options.delayInit || !1, h.intervalList = [], h.clearAllIntervals = function () {
      var e,
          t = h.intervalList;if (typeof t != "undefined" && t !== null) {
        for (e = 0; e < t.length; e++) {
          f(t[e]);
        }h.intervalList = null;
      }
    }, h.debug = function () {
      (h.options.debug || !1) && h.log.apply(h, arguments);
    }, h.log = function () {
      var e = typeof n != "undefined" && typeof n.log != "undefined" && typeof n.log.apply != "undefined",
          t = r.getElementById("log"),
          i,
          s,
          o,
          u,
          a;e ? (u = Array.prototype.slice.call(arguments), i = u.shift(), typeof n.debug != "undefined" ? n.debug.apply(n, [i, u]) : n.log.apply(n, [i, u])) : i = "\n" + arguments[0] + "\n";for (s = 1, o = arguments.length; s < o; ++s) {
        a = arguments[s];if ((typeof a === "undefined" ? "undefined" : _typeof(a)) == "object" && typeof l != "undefined") try {
          a = l.stringify(a);
        } catch (f) {}i += "\n" + a + "\n";
      }return t ? (t.value += i + "\n-----\n", t.scrollTop = t.scrollHeight - t.clientHeight) : e || c(i), !0;
    }, h.getInternetExplorerMajorVersion = function () {
      var e = h.getInternetExplorerMajorVersion.cached = typeof h.getInternetExplorerMajorVersion.cached != "undefined" ? h.getInternetExplorerMajorVersion.cached : function () {
        var e = 3,
            t = r.createElement("div"),
            n = t.getElementsByTagName("i");while ((t.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->") && n[0]) {}return e > 4 ? e : !1;
      }();return e;
    }, h.isInternetExplorer = function () {
      var e = h.isInternetExplorer.cached = typeof h.isInternetExplorer.cached != "undefined" ? h.isInternetExplorer.cached : Boolean(h.getInternetExplorerMajorVersion());return e;
    }, h.options.html4Mode ? h.emulated = { pushState: !0, hashChange: !0 } : h.emulated = { pushState: !Boolean(e.history && e.history.pushState && e.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)), hashChange: Boolean(!("onhashchange" in e || "onhashchange" in r) || h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8) }, h.enabled = !h.emulated.pushState, h.bugs = { setHash: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)), safariPoll: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)), ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8), hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7) }, h.isEmptyObject = function (e) {
      for (var t in e) {
        if (e.hasOwnProperty(t)) return !1;
      }return !0;
    }, h.cloneObject = function (e) {
      var t, n;return e ? (t = l.stringify(e), n = l.parse(t)) : n = {}, n;
    }, h.getRootUrl = function () {
      var e = r.location.protocol + "//" + (r.location.hostname || r.location.host);if (r.location.port || !1) e += ":" + r.location.port;return e += "/", e;
    }, h.getBaseHref = function () {
      var e = r.getElementsByTagName("base"),
          t = null,
          n = "";return e.length === 1 && (t = e[0], n = t.href.replace(/[^\/]+$/, "")), n = n.replace(/\/+$/, ""), n && (n += "/"), n;
    }, h.getBaseUrl = function () {
      var e = h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl();return e;
    }, h.getPageUrl = function () {
      var e = h.getState(!1, !1),
          t = (e || {}).url || h.getLocationHref(),
          n;return n = t.replace(/\/+$/, "").replace(/[^\/]+$/, function (e, t, n) {
        return (/\./.test(e) ? e : e + "/"
        );
      }), n;
    }, h.getBasePageUrl = function () {
      var e = h.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function (e, t, n) {
        return (/[^\/]$/.test(e) ? "" : e
        );
      }).replace(/\/+$/, "") + "/";return e;
    }, h.getFullUrl = function (e, t) {
      var n = e,
          r = e.substring(0, 1);return t = typeof t == "undefined" ? !0 : t, /[a-z]+\:\/\//.test(e) || (r === "/" ? n = h.getRootUrl() + e.replace(/^\/+/, "") : r === "#" ? n = h.getPageUrl().replace(/#.*/, "") + e : r === "?" ? n = h.getPageUrl().replace(/[\?#].*/, "") + e : t ? n = h.getBaseUrl() + e.replace(/^(\.\/)+/, "") : n = h.getBasePageUrl() + e.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "");
    }, h.getShortUrl = function (e) {
      var t = e,
          n = h.getBaseUrl(),
          r = h.getRootUrl();return h.emulated.pushState && (t = t.replace(n, "")), t = t.replace(r, "/"), h.isTraditionalAnchor(t) && (t = "./" + t), t = t.replace(/^(\.\/)+/g, "./").replace(/\#$/, ""), t;
    }, h.getLocationHref = function (e) {
      return e = e || r, e.URL === e.location.href ? e.location.href : e.location.href === decodeURIComponent(e.URL) ? e.URL : e.location.hash && decodeURIComponent(e.location.href.replace(/^[^#]+/, "")) === e.location.hash ? e.location.href : e.URL.indexOf("#") == -1 && e.location.href.indexOf("#") != -1 ? e.location.href : e.URL || e.location.href;
    }, h.store = {}, h.idToState = h.idToState || {}, h.stateToId = h.stateToId || {}, h.urlToId = h.urlToId || {}, h.storedStates = h.storedStates || [], h.savedStates = h.savedStates || [], h.normalizeStore = function () {
      h.store.idToState = h.store.idToState || {}, h.store.urlToId = h.store.urlToId || {}, h.store.stateToId = h.store.stateToId || {};
    }, h.getState = function (e, t) {
      typeof e == "undefined" && (e = !0), typeof t == "undefined" && (t = !0);var n = h.getLastSavedState();return !n && t && (n = h.createStateObject()), e && (n = h.cloneObject(n), n.url = n.cleanUrl || n.url), n;
    }, h.getIdByState = function (e) {
      var t = h.extractId(e.url),
          n;if (!t) {
        n = h.getStateString(e);if (typeof h.stateToId[n] != "undefined") t = h.stateToId[n];else if (typeof h.store.stateToId[n] != "undefined") t = h.store.stateToId[n];else {
          for (;;) {
            t = new Date().getTime() + String(Math.random()).replace(/\D/g, "");if (typeof h.idToState[t] == "undefined" && typeof h.store.idToState[t] == "undefined") break;
          }h.stateToId[n] = t, h.idToState[t] = e;
        }
      }return t;
    }, h.normalizeState = function (e) {
      var t, n;if (!e || (typeof e === "undefined" ? "undefined" : _typeof(e)) != "object") e = {};if (typeof e.normalized != "undefined") return e;if (!e.data || _typeof(e.data) != "object") e.data = {};return t = {}, t.normalized = !0, t.title = e.title || "", t.url = h.getFullUrl(e.url ? e.url : h.getLocationHref()), t.hash = h.getShortUrl(t.url), t.data = h.cloneObject(e.data), t.id = h.getIdByState(t), t.cleanUrl = t.url.replace(/\??\&_suid.*/, ""), t.url = t.cleanUrl, n = !h.isEmptyObject(t.data), (t.title || n) && h.options.disableSuid !== !0 && (t.hash = h.getShortUrl(t.url).replace(/\??\&_suid.*/, ""), /\?/.test(t.hash) || (t.hash += "?"), t.hash += "&_suid=" + t.id), t.hashedUrl = h.getFullUrl(t.hash), (h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(t) && (t.url = t.hashedUrl), t;
    }, h.createStateObject = function (e, t, n) {
      var r = { data: e, title: t, url: n };return r = h.normalizeState(r), r;
    }, h.getStateById = function (e) {
      e = String(e);var n = h.idToState[e] || h.store.idToState[e] || t;return n;
    }, h.getStateString = function (e) {
      var t, n, r;return t = h.normalizeState(e), n = { data: t.data, title: e.title, url: e.url }, r = l.stringify(n), r;
    }, h.getStateId = function (e) {
      var t, n;return t = h.normalizeState(e), n = t.id, n;
    }, h.getHashByState = function (e) {
      var t, n;return t = h.normalizeState(e), n = t.hash, n;
    }, h.extractId = function (e) {
      var t, n, r, i;return e.indexOf("#") != -1 ? i = e.split("#")[0] : i = e, n = /(.*)\&_suid=([0-9]+)$/.exec(i), r = n ? n[1] || e : e, t = n ? String(n[2] || "") : "", t || !1;
    }, h.isTraditionalAnchor = function (e) {
      var t = !/[\/\?\.]/.test(e);return t;
    }, h.extractState = function (e, t) {
      var n = null,
          r,
          i;return t = t || !1, r = h.extractId(e), r && (n = h.getStateById(r)), n || (i = h.getFullUrl(e), r = h.getIdByUrl(i) || !1, r && (n = h.getStateById(r)), !n && t && !h.isTraditionalAnchor(e) && (n = h.createStateObject(null, null, i))), n;
    }, h.getIdByUrl = function (e) {
      var n = h.urlToId[e] || h.store.urlToId[e] || t;return n;
    }, h.getLastSavedState = function () {
      return h.savedStates[h.savedStates.length - 1] || t;
    }, h.getLastStoredState = function () {
      return h.storedStates[h.storedStates.length - 1] || t;
    }, h.hasUrlDuplicate = function (e) {
      var t = !1,
          n;return n = h.extractState(e.url), t = n && n.id !== e.id, t;
    }, h.storeState = function (e) {
      return h.urlToId[e.url] = e.id, h.storedStates.push(h.cloneObject(e)), e;
    }, h.isLastSavedState = function (e) {
      var t = !1,
          n,
          r,
          i;return h.savedStates.length && (n = e.id, r = h.getLastSavedState(), i = r.id, t = n === i), t;
    }, h.saveState = function (e) {
      return h.isLastSavedState(e) ? !1 : (h.savedStates.push(h.cloneObject(e)), !0);
    }, h.getStateByIndex = function (e) {
      var t = null;return typeof e == "undefined" ? t = h.savedStates[h.savedStates.length - 1] : e < 0 ? t = h.savedStates[h.savedStates.length + e] : t = h.savedStates[e], t;
    }, h.getCurrentIndex = function () {
      var e = null;return h.savedStates.length < 1 ? e = 0 : e = h.savedStates.length - 1, e;
    }, h.getHash = function (e) {
      var t = h.getLocationHref(e),
          n;return n = h.getHashByUrl(t), n;
    }, h.unescapeHash = function (e) {
      var t = h.normalizeHash(e);return t = decodeURIComponent(t), t;
    }, h.normalizeHash = function (e) {
      var t = e.replace(/[^#]*#/, "").replace(/#.*/, "");return t;
    }, h.setHash = function (e, t) {
      var n, i;return t !== !1 && h.busy() ? (h.pushQueue({ scope: h, callback: h.setHash, args: arguments, queue: t }), !1) : (h.busy(!0), n = h.extractState(e, !0), n && !h.emulated.pushState ? h.pushState(n.data, n.title, n.url, !1) : h.getHash() !== e && (h.bugs.setHash ? (i = h.getPageUrl(), h.pushState(null, null, i + "#" + e, !1)) : r.location.hash = e), h);
    }, h.escapeHash = function (t) {
      var n = h.normalizeHash(t);return n = e.encodeURIComponent(n), h.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), n;
    }, h.getHashByUrl = function (e) {
      var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");return t = h.unescapeHash(t), t;
    }, h.setTitle = function (e) {
      var t = e.title,
          n;t || (n = h.getStateByIndex(0), n && n.url === e.url && (t = n.title || h.options.initialTitle));try {
        r.getElementsByTagName("title")[0].innerHTML = t.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ");
      } catch (i) {}return r.title = t, h;
    }, h.queues = [], h.busy = function (e) {
      typeof e != "undefined" ? h.busy.flag = e : typeof h.busy.flag == "undefined" && (h.busy.flag = !1);if (!h.busy.flag) {
        u(h.busy.timeout);var t = function t() {
          var e, n, r;if (h.busy.flag) return;for (e = h.queues.length - 1; e >= 0; --e) {
            n = h.queues[e];if (n.length === 0) continue;r = n.shift(), h.fireQueueItem(r), h.busy.timeout = o(t, h.options.busyDelay);
          }
        };h.busy.timeout = o(t, h.options.busyDelay);
      }return h.busy.flag;
    }, h.busy.flag = !1, h.fireQueueItem = function (e) {
      return e.callback.apply(e.scope || h, e.args || []);
    }, h.pushQueue = function (e) {
      return h.queues[e.queue || 0] = h.queues[e.queue || 0] || [], h.queues[e.queue || 0].push(e), h;
    }, h.queue = function (e, t) {
      return typeof e == "function" && (e = { callback: e }), typeof t != "undefined" && (e.queue = t), h.busy() ? h.pushQueue(e) : h.fireQueueItem(e), h;
    }, h.clearQueue = function () {
      return h.busy.flag = !1, h.queues = [], h;
    }, h.stateChanged = !1, h.doubleChecker = !1, h.doubleCheckComplete = function () {
      return h.stateChanged = !0, h.doubleCheckClear(), h;
    }, h.doubleCheckClear = function () {
      return h.doubleChecker && (u(h.doubleChecker), h.doubleChecker = !1), h;
    }, h.doubleCheck = function (e) {
      return h.stateChanged = !1, h.doubleCheckClear(), h.bugs.ieDoubleCheck && (h.doubleChecker = o(function () {
        return h.doubleCheckClear(), h.stateChanged || e(), !0;
      }, h.options.doubleCheckInterval)), h;
    }, h.safariStatePoll = function () {
      var t = h.extractState(h.getLocationHref()),
          n;if (!h.isLastSavedState(t)) return n = t, n || (n = h.createStateObject()), h.Adapter.trigger(e, "popstate"), h;return;
    }, h.back = function (e) {
      return e !== !1 && h.busy() ? (h.pushQueue({ scope: h, callback: h.back, args: arguments, queue: e }), !1) : (h.busy(!0), h.doubleCheck(function () {
        h.back(!1);
      }), p.go(-1), !0);
    }, h.forward = function (e) {
      return e !== !1 && h.busy() ? (h.pushQueue({ scope: h, callback: h.forward, args: arguments, queue: e }), !1) : (h.busy(!0), h.doubleCheck(function () {
        h.forward(!1);
      }), p.go(1), !0);
    }, h.go = function (e, t) {
      var n;if (e > 0) for (n = 1; n <= e; ++n) {
        h.forward(t);
      } else {
        if (!(e < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");for (n = -1; n >= e; --n) {
          h.back(t);
        }
      }return h;
    };if (h.emulated.pushState) {
      var v = function v() {};h.pushState = h.pushState || v, h.replaceState = h.replaceState || v;
    } else h.onPopState = function (t, n) {
      var r = !1,
          i = !1,
          s,
          o;return h.doubleCheckComplete(), s = h.getHash(), s ? (o = h.extractState(s || h.getLocationHref(), !0), o ? h.replaceState(o.data, o.title, o.url, !1) : (h.Adapter.trigger(e, "anchorchange"), h.busy(!1)), h.expectedStateId = !1, !1) : (r = h.Adapter.extractEventData("state", t, n) || !1, r ? i = h.getStateById(r) : h.expectedStateId ? i = h.getStateById(h.expectedStateId) : i = h.extractState(h.getLocationHref()), i || (i = h.createStateObject(null, null, h.getLocationHref())), h.expectedStateId = !1, h.isLastSavedState(i) ? (h.busy(!1), !1) : (h.storeState(i), h.saveState(i), h.setTitle(i), h.Adapter.trigger(e, "statechange"), h.busy(!1), !0));
    }, h.Adapter.bind(e, "popstate", h.onPopState), h.pushState = function (t, n, r, i) {
      if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if (i !== !1 && h.busy()) return h.pushQueue({ scope: h, callback: h.pushState, args: arguments, queue: i }), !1;h.busy(!0);var s = h.createStateObject(t, n, r);return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.pushState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0;
    }, h.replaceState = function (t, n, r, i) {
      if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if (i !== !1 && h.busy()) return h.pushQueue({ scope: h, callback: h.replaceState, args: arguments, queue: i }), !1;h.busy(!0);var s = h.createStateObject(t, n, r);return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.replaceState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0;
    };if (s) {
      try {
        h.store = l.parse(s.getItem("History.store")) || {};
      } catch (m) {
        h.store = {};
      }h.normalizeStore();
    } else h.store = {}, h.normalizeStore();h.Adapter.bind(e, "unload", h.clearAllIntervals), h.saveState(h.storeState(h.extractState(h.getLocationHref(), !0))), s && (h.onUnload = function () {
      var e, t, n;try {
        e = l.parse(s.getItem("History.store")) || {};
      } catch (r) {
        e = {};
      }e.idToState = e.idToState || {}, e.urlToId = e.urlToId || {}, e.stateToId = e.stateToId || {};for (t in h.idToState) {
        if (!h.idToState.hasOwnProperty(t)) continue;e.idToState[t] = h.idToState[t];
      }for (t in h.urlToId) {
        if (!h.urlToId.hasOwnProperty(t)) continue;e.urlToId[t] = h.urlToId[t];
      }for (t in h.stateToId) {
        if (!h.stateToId.hasOwnProperty(t)) continue;e.stateToId[t] = h.stateToId[t];
      }h.store = e, h.normalizeStore(), n = l.stringify(e);try {
        s.setItem("History.store", n);
      } catch (i) {
        if (i.code !== DOMException.QUOTA_EXCEEDED_ERR) throw i;s.length && (s.removeItem("History.store"), s.setItem("History.store", n));
      }
    }, h.intervalList.push(a(h.onUnload, h.options.storeInterval)), h.Adapter.bind(e, "beforeunload", h.onUnload), h.Adapter.bind(e, "unload", h.onUnload));if (!h.emulated.pushState) {
      h.bugs.safariPoll && h.intervalList.push(a(h.safariStatePoll, h.options.safariPollInterval));if (i.vendor === "Apple Computer, Inc." || (i.appCodeName || "") === "Mozilla") h.Adapter.bind(e, "hashchange", function () {
        h.Adapter.trigger(e, "popstate");
      }), h.getHash() && h.Adapter.onDomLoad(function () {
        h.Adapter.trigger(e, "hashchange");
      });
    }
  }, (!h.options || !h.options.delayInit) && h.init();
}(window);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/**
 * RippleWise Pay production javascript
 *
 */
$(document).ready(function () {

	var chart_dashboard; // global


	/* Main Navigation Settings Toggle */
	$("#settings-nav-trigger").on("click", function (event) {
		$(".rw-navbar-static-left .nav-stacked > li").removeClass('active');
		$(this).tooltip('hide');
		$("#settings-nav-trigger").parent().slideUp(200);

		$(".rw-front").addClass('pt-page-flipOutRight');
		$(".rw-back").addClass('active pt-page-flipInLeft');

		// Open first list item
		$(".rw-navbar-static-left .nav-stacked.rw-back > li:first-child > a").click();

		setTimeout(function () {
			$(".rw-front").removeClass('active pt-page-flipOutRight');
			$(".rw-back").removeClass('pt-page-flipInLeft');

			$("#dashboard-nav-trigger").parent().slideDown(200);
		}, 1000);
	});
	$("#dashboard-nav-trigger").on("click", function (event) {
		$(".rw-navbar-static-left .nav-stacked > li").removeClass('active');
		$(this).tooltip('hide');
		$("#dashboard-nav-trigger").parent().slideUp(200);

		$(".rw-back").addClass('pt-page-flipOutRight');
		$(".rw-front").addClass('active pt-page-flipInLeft');

		// Open first list item
		$(".rw-navbar-static-left .nav-stacked.rw-front > li:first-child > a").click();

		setTimeout(function () {
			$(".rw-back").removeClass('active pt-page-flipOutRight');
			$(".rw-front").removeClass('pt-page-flipInLeft');

			$("#settings-nav-trigger").parent().slideDown(200);
		}, 1000);
	});
	/* end Main Navigation Settings Toggle */

	/* Main Navigation */

	// History handler
	History.Adapter.bind(window, 'statechange', function () {
		// Note: We are using statechange instead of popstate, more: https://github.com/browserstate/history.js

		var State = History.getState();

		if (State.data.state != 'no-ajax') {

			// Load AJAX Content
			$.ajax({
				url: location.pathname + location.search,
				cache: false,
				dataType: 'json',
				data: { ajax: "true" }
			}).done(function (data) {
				//console.log(data)

				// Rename Title
				document.title = data.site_title;

				// Handle menu active class
				// Level 1
				$(".rw-navbar-static-left .nav-stacked > li").removeClass("active"); // Remove active from old
				$('.rw-navbar-static-left .nav-stacked > li[data-active="' + data.active + '"]').addClass('active'); // Add active class to new
				// Level 2
				// Level 1
				$(".rw-navbar-static-left .nav-stacked ul > li").removeClass("active"); // Remove active from old
				$('.rw-navbar-static-left .nav-stacked ul > li[data-activex="' + data.activex + '"]').addClass('active'); // Add active class to new

				// Collapse menu
				//$(".navbar-toggle").click();

				// Empty frame and prepend new data
				$("#frame").empty();
				//$("#frame").hide();
				$("#frame").html(data.html);
				$("html, body").animate({ scrollTop: 0 }, 100);
				//$("#frame").fadeIn();

				// Rename page header
				$("#title").html(data.title);

				// Re-enable tooltips
				$('header a.icon').tooltip({ placement: 'bottom' });

				// Also don't forget Google Analytics: https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
				//ga('send', 'pageview');
			});
		} else {
			return false;
		}
	});

	// Level 1 and 2
	$(".rw-navbar-static-left .nav-stacked li a").on("click", function (event) {

		// Check class .no-ajax in case of sign out link
		if (!$(this).hasClass('no-ajax')) {

			event.preventDefault();
			var href = $(this).attr("href");
			History.pushState(null, null, href);
		}
	});
	/* end Main Navigation */

	/* Tooltips - repeat in ajax calls*/
	$('.rw-footer-navigation li a').tooltip();
	$('header a.icon').tooltip({ placement: 'bottom' });
	$('#signout-navbar').tooltip({ placement: 'left' });
	/* end Tooltips */

	// Ajax Links
	$("body").on("click", "a.ajax", function (event) {

		event.preventDefault();
		var href = $(this).attr("href");
		History.pushState(null, null, href);
	});
	// end Ajax Links


	/* Support Message Toggle */
	$("body").on("click", ".new-support-form-trigger", function (event) {

		$(".new-support-form").slideToggle(200);
		$(this).tooltip('destroy');
	});
	/* end Support Message Toggle */

	/* Inline Support Message Toggle - IMPORTANT: target by specific ID in production*/
	$("body").on("click", ".inline-support-form-trigger", function (event) {
		$(".inline-support-form").slideToggle(200);
	});
	/* end Inline Support Message Toggle */

	/* Message Handler */
	$("body").on("click", ".messages.default .rw-messages li a", function (event) {

		$(this).parent('li').toggleClass('active');

		// Only change url if active class is added
		if ($(this).parent('li').hasClass('active')) {
			event.preventDefault();
			var href = $(this).attr("href");
			History.pushState({ state: 'no-ajax' }, $(document).find("title").text(), href); // Trick: in order not to trigger history statechange we pass 'no-ajax'
		} else {
			return false;
		}
	});

	$("body").on("click", "a.message-close-trigger", function (event) {

		// Hide focused message container
		$(".message-remove").slideToggle();

		event.preventDefault();
		var href = $(this).attr("href");
		History.pushState({ state: 'no-ajax' }, $(document).find("title").text(), href); // Trick: in order not to trigger history statechange we pass 'no-ajax'
	});
	/* end Message Handler */

	/* Loading Animation */
	var rotation = function rotation() {
		$("#icon-loading").rotate({
			angle: 0,
			animateTo: 360,
			callback: rotation,
			easing: function easing(x, t, b, c, d) {
				// t: current time, b: begInnIng value, c: change In value, d: duration
				return c * (t / d) + b;
			}
		});
	};
	rotation(); // Trigger this manually when loading new items
	/* Loading Animation */
});

// Global AJAX events

/* Ajax Loading Bar */
$(document).ajaxSend(function (e, jqXHR) {
	if ($("#loadingbar").length === 0) {
		$("body").append("<div id='loadingbar'>");
		$("#loadingbar").addClass("waiting").append($("<dt/><dd/>"));
		$("#loadingbar").width(50 + Math.random() * 30 + "%");
	}
});
$(document).ajaxComplete(function (e, jqXHR) {
	$("#loadingbar").width("101%").delay(200).fadeOut(400, function () {
		$(this).remove();
	});
});
/* end Ajax Loading Bar */
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/**
 * RippleWise Pay dev javascript
 *
 * NOT TO BE USED IN PRODUCTION!
 *
 */

$(document).ready(function () {

	/* Convert UNIX time to human time */
	function getTimeFormat() {
		// Create a date object with the current time
		var now = new Date();

		// Create an array with the current month, day and time
		var date = [now.getDate(), now.getMonth() + 1, now.getFullYear()];

		// Create an array with the current hour, minute and second
		var time = [now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds()];

		// If seconds and minutes are less than 10, add a zero
		for (var i = 1; i < 3; i++) {
			if (time[i] < 10) {
				time[i] = "0" + time[i];
			}
		}

		// Return the formatted string
		return time.join(":"); //date.join(".") + " " + 
	}
	/* end Convert UNIX time to human time */

	/* Update Times */
	function update_times() {
		$('.ago').each(function () {
			seconds = parseInt($(this).attr('data-timer')) + 1;

			if (!isNaN(seconds)) {
				$(this).attr('data-timer', seconds);
				if (seconds >= 86400) {
					if (seconds < 172800) {
						$(this).html(Math.floor(seconds / 86400) + ' day');
					} else {
						$(this).html(Math.floor(seconds / 86400) + ' days');
					}
				} else if (seconds >= 3600) {
					if (seconds < 7200) {
						$(this).html(Math.floor(seconds / 3600) + ' hour');
					} else {
						$(this).html(Math.floor(seconds / 3600) + ' hours');
					}
				} else if (seconds >= 60) {
					if (seconds < 120) {
						$(this).html(Math.floor(seconds / 60) + ' minute');
					} else {
						$(this).html(Math.floor(seconds / 60) + ' minutes');
					}
				} else {
					$(this).html(seconds + ' seconds');
				}
			} else {
				$(this).attr('data-timer', null);
				$(this).html('?');
			}
		});
	}
	setInterval(update_times, 1000);
	/* end Update Times */

	/* Keyboard Shortcuts */
	$(document).keyup(function (e) {
		if (e.keyCode == 27) {
			$('#log').hide();
			return false;
		} // esc

		else if (String.fromCharCode(e.charCode || e.keyCode) == "L") {
				$('.settings_widget').hide();
				$('#log').toggle();
				return false;
			} // letter d
	});
	/* end Keyboard Shortcuts */

	/* Test Message */
	$("#toggle-alerts").on("click", function (event) {
		$(".rw-alerts").css('visibility', 'visible').hide().fadeIn().removeClass('hidden');
	});
	/* end Test Message */

	/* Test Socket */
	/*var socket = io.connect("212.235.179.27:1337");
 
 socket.on("connect", function(){
 	$('#alpha_data').prepend('<p><span class="blue">'+getTimeFormat()+' ></span> Live feed active</p>');
 	$("#socket-status").html("<span></span>Live feed active");
 	$("#socket-status").removeClass('off');
 	
 	socket.emit("join", "rw-client-webapp");
 });
 socket.on("connecting", function(){
 	$('#alpha_data').prepend('<p><span class="blue">'+getTimeFormat()+' ></span> Connecting</p>');
 	$("#socket-status").html("<span></span>Connecting...");
 	$("#socket-status").addClass('off');
 });
 socket.on("disconnect", function(){
 	$('#alpha_data').prepend('<p><span class="red">'+getTimeFormat()+' ></span> Server offline</p>');
 	$("#socket-status").html("<span></span>Server offline");
 	$("#socket-status").addClass('off');
 });
 socket.on("connect_failed", function(){
 	$('#alpha_data').prepend('<p><span class="red">'+getTimeFormat()+' ></span> Connection failed</p>');
 	$("#socket-status").html("<span></span>Conn. failed");
 	$("#socket-status").addClass('off');
 });
 socket.on("error", function(){
 	$('#alpha_data').prepend('<p><span class="red">'+getTimeFormat()+' ></span> Connection error</p>');
 	$("#socket-status").html("<span></span>Error");
 	$("#socket-status").addClass('off');
 });
 socket.on("reconnecting", function(){
 	$('#alpha_data').prepend('<p><span class="red">'+getTimeFormat()+' ></span> Reconnecting</p>');
 	$("#socket-status").html("<span></span>Reconnecting");
 	$("#socket-status").addClass('off');
 });
 socket.on("reconnect", function(){
 	$('#alpha_data').prepend('<p><span class="red">'+getTimeFormat()+' ></span> Reconnect successful</p>');
 	$("#socket-status").html("<span></span>Live feed active");
 	$("#socket-status").removeClass('off');
 });*/

	/* Receive Commands */
	/*socket.on("update", function(msg) {
 	$('#alpha_data').prepend('<p><span class="blue">'+getTimeFormat()+' ></span> ' + msg + "</p>");
 })
 socket.on("update-clients", function(data){
 	$('#alpha_clients').empty();
 	$.each(data, function(clientid, name) {
 		$('#alpha_clients').prepend("<p>" + clientid + ":" + name + "</p>");
 	});
 });
 socket.on("command", function(clientid, msg){
 	var timestamp = (new Date).getTime();
 	
 	$('#alpha_data').prepend('<p data-nonce="'+timestamp+'" style="display: none"><span class="blue">'+getTimeFormat()+' ></span> ' + clientid + ":" + msg + "</p>");
 	$('p[data-nonce='+timestamp+']').slideDown("fast");
 	$('p[data-nonce='+timestamp+']').removeClass('glow');
 	$('p[data-nonce='+timestamp+']').addClass('glow');
 	
 	if(msg == "socket-add-payment"){
 		
 		// Menu Notification
 		current_number = parseInt($('.payments-badge-primary').attr('data-value'))
 		current_number++
 
 		$('.payments-badge-primary')
 			.attr('data-value', current_number)
 			.removeClass('hide')
 			.show()
 			.html(current_number)
 		$('.payments-badge-secondary')
 			.attr('data-value', current_number)
 			.removeClass('hide')
 			.show()
 			.html(current_number)
 
 		// Chart update Number
 		number = parseInt(chart_dashboard.series[2].data[6].y) + 1;
 		chart_dashboard.series[2].data[6].update(number);
 		
 		$('.rw-messages')
 			.prepend($('<li>')
 				.hide()
 				.attr('data-nonce', timestamp)
 				.addClass('green')
 				.append($('<a>')
 					.attr('href', "#")
 					.append($('<span>')
 						.addClass('dot')
 						.append($('<span>')
 						)
 					)
 					.append($('<span>')
 						.append($('<div>')
 							.addClass('body')
 							.append($('<span>')
 								.text('Payment active')
 								.addClass('title')
 							)
 							.append($('<span>')
 								.text(Math.floor((Math.random()*200)+1).toFixed(2) + ' USD')
 								.addClass('value')
 							)
 						)
 					)
 					.append($('<span>')
 						.addClass('time')
 						.addClass('ago')
 						.attr('data-timer', 0)
 					)
 				)
 		)
 	}
 	else if(msg == "socket-add-completed-payment") {
 
 		// Chart update Amount
 		amount = parseInt(chart_dashboard.series[3].data[6].y) + 5000;
 		chart_dashboard.series[3].data[6].update(amount);
 
 		// Chart update Number
 		number = parseInt(chart_dashboard.series[0].data[6].y) + 1;
 		chart_dashboard.series[0].data[6].update(number);
 
 		$('.rw-messages')
 			.prepend($('<li>')
 				.hide()
 				.attr('data-nonce', timestamp)
 				.addClass('blue')
 				.append($('<a>')
 					.attr('href', "#")
 					.append($('<span>')
 						.addClass('dot')
 						.append($('<span>')
 						)
 					)
 					.append($('<span>')
 						.append($('<div>')
 							.addClass('body')
 							.append($('<span>')
 								.text('Payment completed')
 								.addClass('title')
 							)
 							.append($('<span>')
 								.text(Math.floor((Math.random()*200)+1).toFixed(2) + ' USD')
 								.addClass('value')
 							)
 						)
 					)
 					.append($('<span>')
 						.addClass('time')
 						.addClass('ago')
 						.attr('data-timer', 0)
 					)
 				)
 		)
 	}
 	else if(msg == "socket-add-canceled-payment") {
 
 		// Chart update Number
 		number = parseInt(chart_dashboard.series[1].data[6].y) + 1;
 		chart_dashboard.series[1].data[6].update(number);
 
 
 		$('.rw-messages')
 			.prepend($('<li>')
 				.hide()
 				.attr('data-nonce', timestamp)
 				.addClass('magenta')
 				.append($('<a>')
 					.attr('href', "#")
 					.append($('<span>')
 						.addClass('dot')
 						.append($('<span>')
 						)
 					)
 					.append($('<span>')
 						.append($('<div>')
 							.addClass('body')
 							.append($('<span>')
 								.text('Payment canceled')
 								.addClass('title')
 							)
 							.append($('<span>')
 								.text(Math.floor((Math.random()*100)+1).toFixed(2) + ' USD')
 								.addClass('value')
 							)
 						)
 					)
 					.append($('<span>')
 						.addClass('time')
 						.addClass('ago')
 						.attr('data-timer', 0)
 					)
 				)
 		)
 	}
 	else if(msg == "socket-add-support") {
 
 		// Menu Notification
 		current_number = parseInt($('.messages-badge-primary').attr('data-value'))
 		current_number++
 
 		$('.messages-badge-primary')
 			.attr('data-value', current_number)
 			.removeClass('hide')
 			.show()
 			.html(current_number)
 		$('.messages-badge-secondary')
 			.attr('data-value', current_number)
 			.removeClass('hide')
 			.show()
 			.html(current_number)
 
 		$('.rw-messages')
 			.prepend($('<li>')
 				.hide()
 				.attr('data-nonce', timestamp)
 				.addClass('orange')
 				.append($('<a>')
 					.attr('href', "#")
 					.append($('<span>')
 						.addClass('dot')
 						.append($('<span>')
 						)
 					)
 					.append($('<span>')
 						.append($('<div>')
 							.addClass('body')
 							.append($('<span>')
 								.text('Support')
 								.addClass('title')
 							)
 							.append($('<span>')
 								.text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra non arcu et pellentesque...')
 								.addClass('value')
 							)
 						)
 					)
 					.append($('<span>')
 						.addClass('time')
 						.addClass('ago')
 						.attr('data-timer', 0)
 					)
 				)
 		)
 	}
 	else if(msg == "socket-send-payment") {
 		
 		completeProtocol();
 		
 	}
 	else if(msg == "socket-send-no-payment") {
 
 		cancelProtocol();
 		
 	}
 	else if(msg == "socket-send-partial-payment") {
 		
 		$('.alpha-received-amount').html('10.00000000 BTC');
 		$('.alpha-status').html('Awaiting FULL deposit');
 		
 	}
 	else if(msg == "socket-set-timer") {
 		
 		setTimer(5); // Enter seconds until end of time
 		
 	}
 	else if(msg == "socket-set-theme-default") {
 		
 		$('.invoice-title').html('RippleWise');
 		$('span.logo').addClass('image');
 		$('span.logo').html('R');
 		$('<link rel="stylesheet" type="text/css" href="resources/css/rw-checkout-theme.css">').appendTo("head");
 			
 	}
 	else if(msg == "socket-set-theme-tesla") {
 		
 		$('.invoice-title').html('Tesla Motors');
 		$('span.logo').addClass('image');
 		$('span.logo').html('T');
 		$('<link rel="stylesheet" type="text/css" href="resources/css/rw-checkout-theme-tesla.css">').appendTo("head");
 			
 	}
 	else if(msg == "socket-set-theme-bitstamp") {
 		
 		$('.invoice-title').html('BitStamp');
 		$('span.logo').removeClass('image'); 
 		$('span.logo').html('B');
 		$('<link rel="stylesheet" type="text/css" href="resources/css/rw-checkout-theme-bitstamp.css">').appendTo("head");
 			
 	}
 	else if(msg == "socket-reload") {
 		
 		// Everything but socket page
 		if(window.location.pathname != '/ripplewise_pay/test-socket.php'){
 			window.location.reload(true);
 		}
 	
 	}
 	
 	// Show message
 	$('li[data-nonce='+timestamp+']').show();
 	$('li[data-nonce='+timestamp+']').removeClass('glow');
 	$('li[data-nonce='+timestamp+']').addClass('glow');
 	
 	// Update Times
 	update_times();
 	
 	// Remove old log
 	var num = $('.rw-messages li').length;
 	if(num > 20){
 		$(".rw-messages li").filter(":last").remove();
 	}
 });*/

	/* Send Commands */
	$("body").on("click", ".socket-command-trigger", function (event) {
		socket.emit("send", $(this).data('command'));
	});
	/* end Test Socket */
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! Socket.IO.min.js build:0.9.16, production. Copyright(c) 2011 LearnBoost <dev@learnboost.com> MIT Licensed */
var io =  false ? {} : module.exports;(function () {
  (function (a, b) {
    var c = a;c.version = "0.9.16", c.protocol = 1, c.transports = [], c.j = [], c.sockets = {}, c.connect = function (a, d) {
      var e = c.util.parseUri(a),
          f,
          g;b && b.location && (e.protocol = e.protocol || b.location.protocol.slice(0, -1), e.host = e.host || (b.document ? b.document.domain : b.location.hostname), e.port = e.port || b.location.port), f = c.util.uniqueUri(e);var h = { host: e.host, secure: "https" == e.protocol, port: e.port || ("https" == e.protocol ? 443 : 80), query: e.query || "" };c.util.merge(h, d);if (h["force new connection"] || !c.sockets[f]) g = new c.Socket(h);return !h["force new connection"] && g && (c.sockets[f] = g), g = g || c.sockets[f], g.of(e.path.length > 1 ? e.path : "");
    };
  })("object" == ( false ? "undefined" : _typeof(module)) ? module.exports : this.io = {}, this), function (a, b) {
    var c = a.util = {},
        d = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        e = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];c.parseUri = function (a) {
      var b = d.exec(a || ""),
          c = {},
          f = 14;while (f--) {
        c[e[f]] = b[f] || "";
      }return c;
    }, c.uniqueUri = function (a) {
      var c = a.protocol,
          d = a.host,
          e = a.port;return "document" in b ? (d = d || document.domain, e = e || (c == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)) : (d = d || "localhost", !e && c == "https" && (e = 443)), (c || "http") + "://" + d + ":" + (e || 80);
    }, c.query = function (a, b) {
      var d = c.chunkQuery(a || ""),
          e = [];c.merge(d, c.chunkQuery(b || ""));for (var f in d) {
        d.hasOwnProperty(f) && e.push(f + "=" + d[f]);
      }return e.length ? "?" + e.join("&") : "";
    }, c.chunkQuery = function (a) {
      var b = {},
          c = a.split("&"),
          d = 0,
          e = c.length,
          f;for (; d < e; ++d) {
        f = c[d].split("="), f[0] && (b[f[0]] = f[1]);
      }return b;
    };var f = !1;c.load = function (a) {
      if ("document" in b && document.readyState === "complete" || f) return a();c.on(b, "load", a, !1);
    }, c.on = function (a, b, c, d) {
      a.attachEvent ? a.attachEvent("on" + b, c) : a.addEventListener && a.addEventListener(b, c, d);
    }, c.request = function (a) {
      if (a && "undefined" != typeof XDomainRequest && !c.ua.hasCORS) return new XDomainRequest();if ("undefined" != typeof XMLHttpRequest && (!a || c.ua.hasCORS)) return new XMLHttpRequest();if (!a) try {
        return new window[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
      } catch (b) {}return null;
    }, "undefined" != typeof window && c.load(function () {
      f = !0;
    }), c.defer = function (a) {
      if (!c.ua.webkit || "undefined" != typeof importScripts) return a();c.load(function () {
        setTimeout(a, 100);
      });
    }, c.merge = function (b, d, e, f) {
      var g = f || [],
          h = typeof e == "undefined" ? 2 : e,
          i;for (i in d) {
        d.hasOwnProperty(i) && c.indexOf(g, i) < 0 && (_typeof(b[i]) != "object" || !h ? (b[i] = d[i], g.push(d[i])) : c.merge(b[i], d[i], h - 1, g));
      }return b;
    }, c.mixin = function (a, b) {
      c.merge(a.prototype, b.prototype);
    }, c.inherit = function (a, b) {
      function c() {}c.prototype = b.prototype, a.prototype = new c();
    }, c.isArray = Array.isArray || function (a) {
      return Object.prototype.toString.call(a) === "[object Array]";
    }, c.intersect = function (a, b) {
      var d = [],
          e = a.length > b.length ? a : b,
          f = a.length > b.length ? b : a;for (var g = 0, h = f.length; g < h; g++) {
        ~c.indexOf(e, f[g]) && d.push(f[g]);
      }return d;
    }, c.indexOf = function (a, b, c) {
      for (var d = a.length, c = c < 0 ? c + d < 0 ? 0 : c + d : c || 0; c < d && a[c] !== b; c++) {}return d <= c ? -1 : c;
    }, c.toArray = function (a) {
      var b = [];for (var c = 0, d = a.length; c < d; c++) {
        b.push(a[c]);
      }return b;
    }, c.ua = {}, c.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function () {
      try {
        var a = new XMLHttpRequest();
      } catch (b) {
        return !1;
      }return a.withCredentials != undefined;
    }(), c.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent), c.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent);
  }("undefined" != typeof io ? io : module.exports, this), function (a, b) {
    function c() {}a.EventEmitter = c, c.prototype.on = function (a, c) {
      return this.$events || (this.$events = {}), this.$events[a] ? b.util.isArray(this.$events[a]) ? this.$events[a].push(c) : this.$events[a] = [this.$events[a], c] : this.$events[a] = c, this;
    }, c.prototype.addListener = c.prototype.on, c.prototype.once = function (a, b) {
      function d() {
        c.removeListener(a, d), b.apply(this, arguments);
      }var c = this;return d.listener = b, this.on(a, d), this;
    }, c.prototype.removeListener = function (a, c) {
      if (this.$events && this.$events[a]) {
        var d = this.$events[a];if (b.util.isArray(d)) {
          var e = -1;for (var f = 0, g = d.length; f < g; f++) {
            if (d[f] === c || d[f].listener && d[f].listener === c) {
              e = f;break;
            }
          }if (e < 0) return this;d.splice(e, 1), d.length || delete this.$events[a];
        } else (d === c || d.listener && d.listener === c) && delete this.$events[a];
      }return this;
    }, c.prototype.removeAllListeners = function (a) {
      return a === undefined ? (this.$events = {}, this) : (this.$events && this.$events[a] && (this.$events[a] = null), this);
    }, c.prototype.listeners = function (a) {
      return this.$events || (this.$events = {}), this.$events[a] || (this.$events[a] = []), b.util.isArray(this.$events[a]) || (this.$events[a] = [this.$events[a]]), this.$events[a];
    }, c.prototype.emit = function (a) {
      if (!this.$events) return !1;var c = this.$events[a];if (!c) return !1;var d = Array.prototype.slice.call(arguments, 1);if ("function" == typeof c) c.apply(this, d);else {
        if (!b.util.isArray(c)) return !1;var e = c.slice();for (var f = 0, g = e.length; f < g; f++) {
          e[f].apply(this, d);
        }
      }return !0;
    };
  }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function (exports, nativeJSON) {
    function f(a) {
      return a < 10 ? "0" + a : a;
    }function date(a, b) {
      return isFinite(a.valueOf()) ? a.getUTCFullYear() + "-" + f(a.getUTCMonth() + 1) + "-" + f(a.getUTCDate()) + "T" + f(a.getUTCHours()) + ":" + f(a.getUTCMinutes()) + ":" + f(a.getUTCSeconds()) + "Z" : null;
    }function quote(a) {
      return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function (a) {
        var b = meta[a];return typeof b == "string" ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
      }) + '"' : '"' + a + '"';
    }function str(a, b) {
      var c,
          d,
          e,
          f,
          g = gap,
          h,
          i = b[a];i instanceof Date && (i = date(a)), typeof rep == "function" && (i = rep.call(b, a, i));switch (typeof i === "undefined" ? "undefined" : _typeof(i)) {case "string":
          return quote(i);case "number":
          return isFinite(i) ? String(i) : "null";case "boolean":case "null":
          return String(i);case "object":
          if (!i) return "null";gap += indent, h = [];if (Object.prototype.toString.apply(i) === "[object Array]") {
            f = i.length;for (c = 0; c < f; c += 1) {
              h[c] = str(c, i) || "null";
            }return e = h.length === 0 ? "[]" : gap ? "[\n" + gap + h.join(",\n" + gap) + "\n" + g + "]" : "[" + h.join(",") + "]", gap = g, e;
          }if (rep && (typeof rep === "undefined" ? "undefined" : _typeof(rep)) == "object") {
            f = rep.length;for (c = 0; c < f; c += 1) {
              typeof rep[c] == "string" && (d = rep[c], e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e));
            }
          } else for (d in i) {
            Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e));
          }return e = h.length === 0 ? "{}" : gap ? "{\n" + gap + h.join(",\n" + gap) + "\n" + g + "}" : "{" + h.join(",") + "}", gap = g, e;}
    }"use strict";if (nativeJSON && nativeJSON.parse) return exports.JSON = { parse: nativeJSON.parse, stringify: nativeJSON.stringify };var JSON = exports.JSON = {},
        cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" },
        rep;JSON.stringify = function (a, b, c) {
      var d;gap = "", indent = "";if (typeof c == "number") for (d = 0; d < c; d += 1) {
        indent += " ";
      } else typeof c == "string" && (indent = c);rep = b;if (!b || typeof b == "function" || (typeof b === "undefined" ? "undefined" : _typeof(b)) == "object" && typeof b.length == "number") return str("", { "": a });throw new Error("JSON.stringify");
    }, JSON.parse = function (text, reviver) {
      function walk(a, b) {
        var c,
            d,
            e = a[b];if (e && (typeof e === "undefined" ? "undefined" : _typeof(e)) == "object") for (c in e) {
          Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), d !== undefined ? e[c] = d : delete e[c]);
        }return reviver.call(a, b, e);
      }var j;text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (a) {
        return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
      }));if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({ "": j }, "") : j;throw new SyntaxError("JSON.parse");
    };
  }("undefined" != typeof io ? io : module.exports, typeof JSON != "undefined" ? JSON : undefined), function (a, b) {
    var c = a.parser = {},
        d = c.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"],
        e = c.reasons = ["transport not supported", "client not handshaken", "unauthorized"],
        f = c.advice = ["reconnect"],
        g = b.JSON,
        h = b.util.indexOf;c.encodePacket = function (a) {
      var b = h(d, a.type),
          c = a.id || "",
          i = a.endpoint || "",
          j = a.ack,
          k = null;switch (a.type) {case "error":
          var l = a.reason ? h(e, a.reason) : "",
              m = a.advice ? h(f, a.advice) : "";if (l !== "" || m !== "") k = l + (m !== "" ? "+" + m : "");break;case "message":
          a.data !== "" && (k = a.data);break;case "event":
          var n = { name: a.name };a.args && a.args.length && (n.args = a.args), k = g.stringify(n);break;case "json":
          k = g.stringify(a.data);break;case "connect":
          a.qs && (k = a.qs);break;case "ack":
          k = a.ackId + (a.args && a.args.length ? "+" + g.stringify(a.args) : "");}var o = [b, c + (j == "data" ? "+" : ""), i];return k !== null && k !== undefined && o.push(k), o.join(":");
    }, c.encodePayload = function (a) {
      var b = "";if (a.length == 1) return a[0];for (var c = 0, d = a.length; c < d; c++) {
        var e = a[c];b += "\uFFFD" + e.length + "\uFFFD" + a[c];
      }return b;
    };var i = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;c.decodePacket = function (a) {
      var b = a.match(i);if (!b) return {};var c = b[2] || "",
          a = b[5] || "",
          h = { type: d[b[1]], endpoint: b[4] || "" };c && (h.id = c, b[3] ? h.ack = "data" : h.ack = !0);switch (h.type) {case "error":
          var b = a.split("+");h.reason = e[b[0]] || "", h.advice = f[b[1]] || "";break;case "message":
          h.data = a || "";break;case "event":
          try {
            var j = g.parse(a);h.name = j.name, h.args = j.args;
          } catch (k) {}h.args = h.args || [];break;case "json":
          try {
            h.data = g.parse(a);
          } catch (k) {}break;case "connect":
          h.qs = a || "";break;case "ack":
          var b = a.match(/^([0-9]+)(\+)?(.*)/);if (b) {
            h.ackId = b[1], h.args = [];if (b[3]) try {
              h.args = b[3] ? g.parse(b[3]) : [];
            } catch (k) {}
          }break;case "disconnect":case "heartbeat":}return h;
    }, c.decodePayload = function (a) {
      if (a.charAt(0) == "\uFFFD") {
        var b = [];for (var d = 1, e = ""; d < a.length; d++) {
          a.charAt(d) == "\uFFFD" ? (b.push(c.decodePacket(a.substr(d + 1).substr(0, e))), d += Number(e) + 1, e = "") : e += a.charAt(d);
        }return b;
      }return [c.decodePacket(a)];
    };
  }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function (a, b) {
    function c(a, b) {
      this.socket = a, this.sessid = b;
    }a.Transport = c, b.util.mixin(c, b.EventEmitter), c.prototype.heartbeats = function () {
      return !0;
    }, c.prototype.onData = function (a) {
      this.clearCloseTimeout(), (this.socket.connected || this.socket.connecting || this.socket.reconnecting) && this.setCloseTimeout();if (a !== "") {
        var c = b.parser.decodePayload(a);if (c && c.length) for (var d = 0, e = c.length; d < e; d++) {
          this.onPacket(c[d]);
        }
      }return this;
    }, c.prototype.onPacket = function (a) {
      return this.socket.setHeartbeatTimeout(), a.type == "heartbeat" ? this.onHeartbeat() : (a.type == "connect" && a.endpoint == "" && this.onConnect(), a.type == "error" && a.advice == "reconnect" && (this.isOpen = !1), this.socket.onPacket(a), this);
    }, c.prototype.setCloseTimeout = function () {
      if (!this.closeTimeout) {
        var a = this;this.closeTimeout = setTimeout(function () {
          a.onDisconnect();
        }, this.socket.closeTimeout);
      }
    }, c.prototype.onDisconnect = function () {
      return this.isOpen && this.close(), this.clearTimeouts(), this.socket.onDisconnect(), this;
    }, c.prototype.onConnect = function () {
      return this.socket.onConnect(), this;
    }, c.prototype.clearCloseTimeout = function () {
      this.closeTimeout && (clearTimeout(this.closeTimeout), this.closeTimeout = null);
    }, c.prototype.clearTimeouts = function () {
      this.clearCloseTimeout(), this.reopenTimeout && clearTimeout(this.reopenTimeout);
    }, c.prototype.packet = function (a) {
      this.send(b.parser.encodePacket(a));
    }, c.prototype.onHeartbeat = function (a) {
      this.packet({ type: "heartbeat" });
    }, c.prototype.onOpen = function () {
      this.isOpen = !0, this.clearCloseTimeout(), this.socket.onOpen();
    }, c.prototype.onClose = function () {
      var a = this;this.isOpen = !1, this.socket.onClose(), this.onDisconnect();
    }, c.prototype.prepareUrl = function () {
      var a = this.socket.options;return this.scheme() + "://" + a.host + ":" + a.port + "/" + a.resource + "/" + b.protocol + "/" + this.name + "/" + this.sessid;
    }, c.prototype.ready = function (a, b) {
      b.call(this);
    };
  }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function (a, b, c) {
    function d(a) {
      this.options = { port: 80, secure: !1, document: "document" in c ? document : !1, resource: "socket.io", transports: b.transports, "connect timeout": 1e4, "try multiple transports": !0, reconnect: !0, "reconnection delay": 500, "reconnection limit": Infinity, "reopen delay": 3e3, "max reconnection attempts": 10, "sync disconnect on unload": !1, "auto connect": !0, "flash policy port": 10843, manualFlush: !1 }, b.util.merge(this.options, a), this.connected = !1, this.open = !1, this.connecting = !1, this.reconnecting = !1, this.namespaces = {}, this.buffer = [], this.doBuffer = !1;if (this.options["sync disconnect on unload"] && (!this.isXDomain() || b.util.ua.hasCORS)) {
        var d = this;b.util.on(c, "beforeunload", function () {
          d.disconnectSync();
        }, !1);
      }this.options["auto connect"] && this.connect();
    }function e() {}a.Socket = d, b.util.mixin(d, b.EventEmitter), d.prototype.of = function (a) {
      return this.namespaces[a] || (this.namespaces[a] = new b.SocketNamespace(this, a), a !== "" && this.namespaces[a].packet({ type: "connect" })), this.namespaces[a];
    }, d.prototype.publish = function () {
      this.emit.apply(this, arguments);var a;for (var b in this.namespaces) {
        this.namespaces.hasOwnProperty(b) && (a = this.of(b), a.$emit.apply(a, arguments));
      }
    }, d.prototype.handshake = function (a) {
      function f(b) {
        b instanceof Error ? (c.connecting = !1, c.onError(b.message)) : a.apply(null, b.split(":"));
      }var c = this,
          d = this.options,
          g = ["http" + (d.secure ? "s" : "") + ":/", d.host + ":" + d.port, d.resource, b.protocol, b.util.query(this.options.query, "t=" + +new Date())].join("/");if (this.isXDomain() && !b.util.ua.hasCORS) {
        var h = document.getElementsByTagName("script")[0],
            i = document.createElement("script");i.src = g + "&jsonp=" + b.j.length, h.parentNode.insertBefore(i, h), b.j.push(function (a) {
          f(a), i.parentNode.removeChild(i);
        });
      } else {
        var j = b.util.request();j.open("GET", g, !0), this.isXDomain() && (j.withCredentials = !0), j.onreadystatechange = function () {
          j.readyState == 4 && (j.onreadystatechange = e, j.status == 200 ? f(j.responseText) : j.status == 403 ? c.onError(j.responseText) : (c.connecting = !1, !c.reconnecting && c.onError(j.responseText)));
        }, j.send(null);
      }
    }, d.prototype.getTransport = function (a) {
      var c = a || this.transports,
          d;for (var e = 0, f; f = c[e]; e++) {
        if (b.Transport[f] && b.Transport[f].check(this) && (!this.isXDomain() || b.Transport[f].xdomainCheck(this))) return new b.Transport[f](this, this.sessionid);
      }return null;
    }, d.prototype.connect = function (a) {
      if (this.connecting) return this;var c = this;return c.connecting = !0, this.handshake(function (d, e, f, g) {
        function h(a) {
          c.transport && c.transport.clearTimeouts(), c.transport = c.getTransport(a);if (!c.transport) return c.publish("connect_failed");c.transport.ready(c, function () {
            c.connecting = !0, c.publish("connecting", c.transport.name), c.transport.open(), c.options["connect timeout"] && (c.connectTimeoutTimer = setTimeout(function () {
              if (!c.connected) {
                c.connecting = !1;if (c.options["try multiple transports"]) {
                  var a = c.transports;while (a.length > 0 && a.splice(0, 1)[0] != c.transport.name) {}a.length ? h(a) : c.publish("connect_failed");
                }
              }
            }, c.options["connect timeout"]));
          });
        }c.sessionid = d, c.closeTimeout = f * 1e3, c.heartbeatTimeout = e * 1e3, c.transports || (c.transports = c.origTransports = g ? b.util.intersect(g.split(","), c.options.transports) : c.options.transports), c.setHeartbeatTimeout(), h(c.transports), c.once("connect", function () {
          clearTimeout(c.connectTimeoutTimer), a && typeof a == "function" && a();
        });
      }), this;
    }, d.prototype.setHeartbeatTimeout = function () {
      clearTimeout(this.heartbeatTimeoutTimer);if (this.transport && !this.transport.heartbeats()) return;var a = this;this.heartbeatTimeoutTimer = setTimeout(function () {
        a.transport.onClose();
      }, this.heartbeatTimeout);
    }, d.prototype.packet = function (a) {
      return this.connected && !this.doBuffer ? this.transport.packet(a) : this.buffer.push(a), this;
    }, d.prototype.setBuffer = function (a) {
      this.doBuffer = a, !a && this.connected && this.buffer.length && (this.options.manualFlush || this.flushBuffer());
    }, d.prototype.flushBuffer = function () {
      this.transport.payload(this.buffer), this.buffer = [];
    }, d.prototype.disconnect = function () {
      if (this.connected || this.connecting) this.open && this.of("").packet({ type: "disconnect" }), this.onDisconnect("booted");return this;
    }, d.prototype.disconnectSync = function () {
      var a = b.util.request(),
          c = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, b.protocol, "", this.sessionid].join("/") + "/?disconnect=1";a.open("GET", c, !1), a.send(null), this.onDisconnect("booted");
    }, d.prototype.isXDomain = function () {
      var a = c.location.port || ("https:" == c.location.protocol ? 443 : 80);return this.options.host !== c.location.hostname || this.options.port != a;
    }, d.prototype.onConnect = function () {
      this.connected || (this.connected = !0, this.connecting = !1, this.doBuffer || this.setBuffer(!1), this.emit("connect"));
    }, d.prototype.onOpen = function () {
      this.open = !0;
    }, d.prototype.onClose = function () {
      this.open = !1, clearTimeout(this.heartbeatTimeoutTimer);
    }, d.prototype.onPacket = function (a) {
      this.of(a.endpoint).onPacket(a);
    }, d.prototype.onError = function (a) {
      a && a.advice && a.advice === "reconnect" && (this.connected || this.connecting) && (this.disconnect(), this.options.reconnect && this.reconnect()), this.publish("error", a && a.reason ? a.reason : a);
    }, d.prototype.onDisconnect = function (a) {
      var b = this.connected,
          c = this.connecting;this.connected = !1, this.connecting = !1, this.open = !1;if (b || c) this.transport.close(), this.transport.clearTimeouts(), b && (this.publish("disconnect", a), "booted" != a && this.options.reconnect && !this.reconnecting && this.reconnect());
    }, d.prototype.reconnect = function () {
      function e() {
        if (a.connected) {
          for (var b in a.namespaces) {
            a.namespaces.hasOwnProperty(b) && "" !== b && a.namespaces[b].packet({ type: "connect" });
          }a.publish("reconnect", a.transport.name, a.reconnectionAttempts);
        }clearTimeout(a.reconnectionTimer), a.removeListener("connect_failed", f), a.removeListener("connect", f), a.reconnecting = !1, delete a.reconnectionAttempts, delete a.reconnectionDelay, delete a.reconnectionTimer, delete a.redoTransports, a.options["try multiple transports"] = c;
      }function f() {
        if (!a.reconnecting) return;if (a.connected) return e();if (a.connecting && a.reconnecting) return a.reconnectionTimer = setTimeout(f, 1e3);a.reconnectionAttempts++ >= b ? a.redoTransports ? (a.publish("reconnect_failed"), e()) : (a.on("connect_failed", f), a.options["try multiple transports"] = !0, a.transports = a.origTransports, a.transport = a.getTransport(), a.redoTransports = !0, a.connect()) : (a.reconnectionDelay < d && (a.reconnectionDelay *= 2), a.connect(), a.publish("reconnecting", a.reconnectionDelay, a.reconnectionAttempts), a.reconnectionTimer = setTimeout(f, a.reconnectionDelay));
      }this.reconnecting = !0, this.reconnectionAttempts = 0, this.reconnectionDelay = this.options["reconnection delay"];var a = this,
          b = this.options["max reconnection attempts"],
          c = this.options["try multiple transports"],
          d = this.options["reconnection limit"];this.options["try multiple transports"] = !1, this.reconnectionTimer = setTimeout(f, this.reconnectionDelay), this.on("connect", f);
    };
  }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this), function (a, b) {
    function c(a, b) {
      this.socket = a, this.name = b || "", this.flags = {}, this.json = new d(this, "json"), this.ackPackets = 0, this.acks = {};
    }function d(a, b) {
      this.namespace = a, this.name = b;
    }a.SocketNamespace = c, b.util.mixin(c, b.EventEmitter), c.prototype.$emit = b.EventEmitter.prototype.emit, c.prototype.of = function () {
      return this.socket.of.apply(this.socket, arguments);
    }, c.prototype.packet = function (a) {
      return a.endpoint = this.name, this.socket.packet(a), this.flags = {}, this;
    }, c.prototype.send = function (a, b) {
      var c = { type: this.flags.json ? "json" : "message", data: a };return "function" == typeof b && (c.id = ++this.ackPackets, c.ack = !0, this.acks[c.id] = b), this.packet(c);
    }, c.prototype.emit = function (a) {
      var b = Array.prototype.slice.call(arguments, 1),
          c = b[b.length - 1],
          d = { type: "event", name: a };return "function" == typeof c && (d.id = ++this.ackPackets, d.ack = "data", this.acks[d.id] = c, b = b.slice(0, b.length - 1)), d.args = b, this.packet(d);
    }, c.prototype.disconnect = function () {
      return this.name === "" ? this.socket.disconnect() : (this.packet({ type: "disconnect" }), this.$emit("disconnect")), this;
    }, c.prototype.onPacket = function (a) {
      function d() {
        c.packet({ type: "ack", args: b.util.toArray(arguments), ackId: a.id });
      }var c = this;switch (a.type) {case "connect":
          this.$emit("connect");break;case "disconnect":
          this.name === "" ? this.socket.onDisconnect(a.reason || "booted") : this.$emit("disconnect", a.reason);break;case "message":case "json":
          var e = ["message", a.data];a.ack == "data" ? e.push(d) : a.ack && this.packet({ type: "ack", ackId: a.id }), this.$emit.apply(this, e);break;case "event":
          var e = [a.name].concat(a.args);a.ack == "data" && e.push(d), this.$emit.apply(this, e);break;case "ack":
          this.acks[a.ackId] && (this.acks[a.ackId].apply(this, a.args), delete this.acks[a.ackId]);break;case "error":
          a.advice ? this.socket.onError(a) : a.reason == "unauthorized" ? this.$emit("connect_failed", a.reason) : this.$emit("error", a.reason);}
    }, d.prototype.send = function () {
      this.namespace.flags[this.name] = !0, this.namespace.send.apply(this.namespace, arguments);
    }, d.prototype.emit = function () {
      this.namespace.flags[this.name] = !0, this.namespace.emit.apply(this.namespace, arguments);
    };
  }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function (a, b, c) {
    function d(a) {
      b.Transport.apply(this, arguments);
    }a.websocket = d, b.util.inherit(d, b.Transport), d.prototype.name = "websocket", d.prototype.open = function () {
      var a = b.util.query(this.socket.options.query),
          d = this,
          e;return e || (e = c.MozWebSocket || c.WebSocket), this.websocket = new e(this.prepareUrl() + a), this.websocket.onopen = function () {
        d.onOpen(), d.socket.setBuffer(!1);
      }, this.websocket.onmessage = function (a) {
        d.onData(a.data);
      }, this.websocket.onclose = function () {
        d.onClose(), d.socket.setBuffer(!0);
      }, this.websocket.onerror = function (a) {
        d.onError(a);
      }, this;
    }, b.util.ua.iDevice ? d.prototype.send = function (a) {
      var b = this;return setTimeout(function () {
        b.websocket.send(a);
      }, 0), this;
    } : d.prototype.send = function (a) {
      return this.websocket.send(a), this;
    }, d.prototype.payload = function (a) {
      for (var b = 0, c = a.length; b < c; b++) {
        this.packet(a[b]);
      }return this;
    }, d.prototype.close = function () {
      return this.websocket.close(), this;
    }, d.prototype.onError = function (a) {
      this.socket.onError(a);
    }, d.prototype.scheme = function () {
      return this.socket.options.secure ? "wss" : "ws";
    }, d.check = function () {
      return "WebSocket" in c && !("__addTask" in WebSocket) || "MozWebSocket" in c;
    }, d.xdomainCheck = function () {
      return !0;
    }, b.transports.push("websocket");
  }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this), function (a, b) {
    function c() {
      b.Transport.websocket.apply(this, arguments);
    }a.flashsocket = c, b.util.inherit(c, b.Transport.websocket), c.prototype.name = "flashsocket", c.prototype.open = function () {
      var a = this,
          c = arguments;return WebSocket.__addTask(function () {
        b.Transport.websocket.prototype.open.apply(a, c);
      }), this;
    }, c.prototype.send = function () {
      var a = this,
          c = arguments;return WebSocket.__addTask(function () {
        b.Transport.websocket.prototype.send.apply(a, c);
      }), this;
    }, c.prototype.close = function () {
      return WebSocket.__tasks.length = 0, b.Transport.websocket.prototype.close.call(this), this;
    }, c.prototype.ready = function (a, d) {
      function e() {
        var b = a.options,
            e = b["flash policy port"],
            g = ["http" + (b.secure ? "s" : "") + ":/", b.host + ":" + b.port, b.resource, "static/flashsocket", "WebSocketMain" + (a.isXDomain() ? "Insecure" : "") + ".swf"];c.loaded || (typeof WEB_SOCKET_SWF_LOCATION == "undefined" && (WEB_SOCKET_SWF_LOCATION = g.join("/")), e !== 843 && WebSocket.loadFlashPolicyFile("xmlsocket://" + b.host + ":" + e), WebSocket.__initialize(), c.loaded = !0), d.call(f);
      }var f = this;if (document.body) return e();b.util.load(e);
    }, c.check = function () {
      return typeof WebSocket != "undefined" && "__initialize" in WebSocket && !!swfobject ? swfobject.getFlashPlayerVersion().major >= 10 : !1;
    }, c.xdomainCheck = function () {
      return !0;
    }, typeof window != "undefined" && (WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = !0), b.transports.push("flashsocket");
  }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);if ("undefined" != typeof window) var swfobject = function () {
    function A() {
      if (t) return;try {
        var a = i.getElementsByTagName("body")[0].appendChild(Q("span"));a.parentNode.removeChild(a);
      } catch (b) {
        return;
      }t = !0;var c = l.length;for (var d = 0; d < c; d++) {
        l[d]();
      }
    }function B(a) {
      t ? a() : l[l.length] = a;
    }function C(b) {
      if (_typeof(h.addEventListener) != a) h.addEventListener("load", b, !1);else if (_typeof(i.addEventListener) != a) i.addEventListener("load", b, !1);else if (_typeof(h.attachEvent) != a) R(h, "onload", b);else if (typeof h.onload == "function") {
        var c = h.onload;h.onload = function () {
          c(), b();
        };
      } else h.onload = b;
    }function D() {
      k ? E() : F();
    }function E() {
      var c = i.getElementsByTagName("body")[0],
          d = Q(b);d.setAttribute("type", e);var f = c.appendChild(d);if (f) {
        var g = 0;(function () {
          if (_typeof(f.GetVariable) != a) {
            var b = f.GetVariable("$version");b && (b = b.split(" ")[1].split(","), y.pv = [parseInt(b[0], 10), parseInt(b[1], 10), parseInt(b[2], 10)]);
          } else if (g < 10) {
            g++, setTimeout(arguments.callee, 10);return;
          }c.removeChild(d), f = null, F();
        })();
      } else F();
    }function F() {
      var b = m.length;if (b > 0) for (var c = 0; c < b; c++) {
        var d = m[c].id,
            e = m[c].callbackFn,
            f = { success: !1, id: d };if (y.pv[0] > 0) {
          var g = P(d);if (g) if (S(m[c].swfVersion) && !(y.wk && y.wk < 312)) U(d, !0), e && (f.success = !0, f.ref = G(d), e(f));else if (m[c].expressInstall && H()) {
            var h = {};h.data = m[c].expressInstall, h.width = g.getAttribute("width") || "0", h.height = g.getAttribute("height") || "0", g.getAttribute("class") && (h.styleclass = g.getAttribute("class")), g.getAttribute("align") && (h.align = g.getAttribute("align"));var i = {},
                j = g.getElementsByTagName("param"),
                k = j.length;for (var l = 0; l < k; l++) {
              j[l].getAttribute("name").toLowerCase() != "movie" && (i[j[l].getAttribute("name")] = j[l].getAttribute("value"));
            }I(h, i, d, e);
          } else J(g), e && e(f);
        } else {
          U(d, !0);if (e) {
            var n = G(d);n && _typeof(n.SetVariable) != a && (f.success = !0, f.ref = n), e(f);
          }
        }
      }
    }function G(c) {
      var d = null,
          e = P(c);if (e && e.nodeName == "OBJECT") if (_typeof(e.SetVariable) != a) d = e;else {
        var f = e.getElementsByTagName(b)[0];f && (d = f);
      }return d;
    }function H() {
      return !u && S("6.0.65") && (y.win || y.mac) && !(y.wk && y.wk < 312);
    }function I(b, c, d, e) {
      u = !0, r = e || null, s = { success: !1, id: d };var g = P(d);if (g) {
        g.nodeName == "OBJECT" ? (p = K(g), q = null) : (p = g, q = d), b.id = f;if (_typeof(b.width) == a || !/%$/.test(b.width) && parseInt(b.width, 10) < 310) b.width = "310";if (_typeof(b.height) == a || !/%$/.test(b.height) && parseInt(b.height, 10) < 137) b.height = "137";i.title = i.title.slice(0, 47) + " - Flash Player Installation";var j = y.ie && y.win ? ["Active"].concat("").join("X") : "PlugIn",
            k = "MMredirectURL=" + h.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + j + "&MMdoctitle=" + i.title;_typeof(c.flashvars) != a ? c.flashvars += "&" + k : c.flashvars = k;if (y.ie && y.win && g.readyState != 4) {
          var l = Q("div");d += "SWFObjectNew", l.setAttribute("id", d), g.parentNode.insertBefore(l, g), g.style.display = "none", function () {
            g.readyState == 4 ? g.parentNode.removeChild(g) : setTimeout(arguments.callee, 10);
          }();
        }L(b, c, d);
      }
    }function J(a) {
      if (y.ie && y.win && a.readyState != 4) {
        var b = Q("div");a.parentNode.insertBefore(b, a), b.parentNode.replaceChild(K(a), b), a.style.display = "none", function () {
          a.readyState == 4 ? a.parentNode.removeChild(a) : setTimeout(arguments.callee, 10);
        }();
      } else a.parentNode.replaceChild(K(a), a);
    }function K(a) {
      var c = Q("div");if (y.win && y.ie) c.innerHTML = a.innerHTML;else {
        var d = a.getElementsByTagName(b)[0];if (d) {
          var e = d.childNodes;if (e) {
            var f = e.length;for (var g = 0; g < f; g++) {
              (e[g].nodeType != 1 || e[g].nodeName != "PARAM") && e[g].nodeType != 8 && c.appendChild(e[g].cloneNode(!0));
            }
          }
        }
      }return c;
    }function L(c, d, f) {
      var g,
          h = P(f);if (y.wk && y.wk < 312) return g;if (h) {
        _typeof(c.id) == a && (c.id = f);if (y.ie && y.win) {
          var i = "";for (var j in c) {
            c[j] != Object.prototype[j] && (j.toLowerCase() == "data" ? d.movie = c[j] : j.toLowerCase() == "styleclass" ? i += ' class="' + c[j] + '"' : j.toLowerCase() != "classid" && (i += " " + j + '="' + c[j] + '"'));
          }var k = "";for (var l in d) {
            d[l] != Object.prototype[l] && (k += '<param name="' + l + '" value="' + d[l] + '" />');
          }h.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + i + ">" + k + "</object>", n[n.length] = c.id, g = P(c.id);
        } else {
          var m = Q(b);m.setAttribute("type", e);for (var o in c) {
            c[o] != Object.prototype[o] && (o.toLowerCase() == "styleclass" ? m.setAttribute("class", c[o]) : o.toLowerCase() != "classid" && m.setAttribute(o, c[o]));
          }for (var p in d) {
            d[p] != Object.prototype[p] && p.toLowerCase() != "movie" && M(m, p, d[p]);
          }h.parentNode.replaceChild(m, h), g = m;
        }
      }return g;
    }function M(a, b, c) {
      var d = Q("param");d.setAttribute("name", b), d.setAttribute("value", c), a.appendChild(d);
    }function N(a) {
      var b = P(a);b && b.nodeName == "OBJECT" && (y.ie && y.win ? (b.style.display = "none", function () {
        b.readyState == 4 ? O(a) : setTimeout(arguments.callee, 10);
      }()) : b.parentNode.removeChild(b));
    }function O(a) {
      var b = P(a);if (b) {
        for (var c in b) {
          typeof b[c] == "function" && (b[c] = null);
        }b.parentNode.removeChild(b);
      }
    }function P(a) {
      var b = null;try {
        b = i.getElementById(a);
      } catch (c) {}return b;
    }function Q(a) {
      return i.createElement(a);
    }function R(a, b, c) {
      a.attachEvent(b, c), o[o.length] = [a, b, c];
    }function S(a) {
      var b = y.pv,
          c = a.split(".");return c[0] = parseInt(c[0], 10), c[1] = parseInt(c[1], 10) || 0, c[2] = parseInt(c[2], 10) || 0, b[0] > c[0] || b[0] == c[0] && b[1] > c[1] || b[0] == c[0] && b[1] == c[1] && b[2] >= c[2] ? !0 : !1;
    }function T(c, d, e, f) {
      if (y.ie && y.mac) return;var g = i.getElementsByTagName("head")[0];if (!g) return;var h = e && typeof e == "string" ? e : "screen";f && (v = null, w = null);if (!v || w != h) {
        var j = Q("style");j.setAttribute("type", "text/css"), j.setAttribute("media", h), v = g.appendChild(j), y.ie && y.win && _typeof(i.styleSheets) != a && i.styleSheets.length > 0 && (v = i.styleSheets[i.styleSheets.length - 1]), w = h;
      }y.ie && y.win ? v && _typeof(v.addRule) == b && v.addRule(c, d) : v && _typeof(i.createTextNode) != a && v.appendChild(i.createTextNode(c + " {" + d + "}"));
    }function U(a, b) {
      if (!x) return;var c = b ? "visible" : "hidden";t && P(a) ? P(a).style.visibility = c : T("#" + a, "visibility:" + c);
    }function V(b) {
      var c = /[\\\"<>\.;]/,
          d = c.exec(b) != null;return d && (typeof encodeURIComponent === "undefined" ? "undefined" : _typeof(encodeURIComponent)) != a ? encodeURIComponent(b) : b;
    }var a = "undefined",
        b = "object",
        c = "Shockwave Flash",
        d = "ShockwaveFlash.ShockwaveFlash",
        e = "application/x-shockwave-flash",
        f = "SWFObjectExprInst",
        g = "onreadystatechange",
        h = window,
        i = document,
        j = navigator,
        k = !1,
        l = [D],
        m = [],
        n = [],
        o = [],
        p,
        q,
        r,
        s,
        t = !1,
        u = !1,
        v,
        w,
        x = !0,
        y = function () {
      var f = _typeof(i.getElementById) != a && _typeof(i.getElementsByTagName) != a && _typeof(i.createElement) != a,
          g = j.userAgent.toLowerCase(),
          l = j.platform.toLowerCase(),
          m = l ? /win/.test(l) : /win/.test(g),
          n = l ? /mac/.test(l) : /mac/.test(g),
          o = /webkit/.test(g) ? parseFloat(g.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
          p = !1,
          q = [0, 0, 0],
          r = null;if (_typeof(j.plugins) != a && _typeof(j.plugins[c]) == b) r = j.plugins[c].description, r && (_typeof(j.mimeTypes) == a || !j.mimeTypes[e] || !!j.mimeTypes[e].enabledPlugin) && (k = !0, p = !1, r = r.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), q[0] = parseInt(r.replace(/^(.*)\..*$/, "$1"), 10), q[1] = parseInt(r.replace(/^.*\.(.*)\s.*$/, "$1"), 10), q[2] = /[a-zA-Z]/.test(r) ? parseInt(r.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);else if (_typeof(h[["Active"].concat("Object").join("X")]) != a) try {
        var s = new window[["Active"].concat("Object").join("X")](d);s && (r = s.GetVariable("$version"), r && (p = !0, r = r.split(" ")[1].split(","), q = [parseInt(r[0], 10), parseInt(r[1], 10), parseInt(r[2], 10)]));
      } catch (t) {}return { w3: f, pv: q, wk: o, ie: p, win: m, mac: n };
    }(),
        z = function () {
      if (!y.w3) return;(_typeof(i.readyState) != a && i.readyState == "complete" || _typeof(i.readyState) == a && (i.getElementsByTagName("body")[0] || i.body)) && A(), t || (_typeof(i.addEventListener) != a && i.addEventListener("DOMContentLoaded", A, !1), y.ie && y.win && (i.attachEvent(g, function () {
        i.readyState == "complete" && (i.detachEvent(g, arguments.callee), A());
      }), h == top && function () {
        if (t) return;try {
          i.documentElement.doScroll("left");
        } catch (a) {
          setTimeout(arguments.callee, 0);return;
        }A();
      }()), y.wk && function () {
        if (t) return;if (!/loaded|complete/.test(i.readyState)) {
          setTimeout(arguments.callee, 0);return;
        }A();
      }(), C(A));
    }(),
        W = function () {
      y.ie && y.win && window.attachEvent("onunload", function () {
        var a = o.length;for (var b = 0; b < a; b++) {
          o[b][0].detachEvent(o[b][1], o[b][2]);
        }var c = n.length;for (var d = 0; d < c; d++) {
          N(n[d]);
        }for (var e in y) {
          y[e] = null;
        }y = null;for (var f in swfobject) {
          swfobject[f] = null;
        }swfobject = null;
      });
    }();return { registerObject: function registerObject(a, b, c, d) {
        if (y.w3 && a && b) {
          var e = {};e.id = a, e.swfVersion = b, e.expressInstall = c, e.callbackFn = d, m[m.length] = e, U(a, !1);
        } else d && d({ success: !1, id: a });
      }, getObjectById: function getObjectById(a) {
        if (y.w3) return G(a);
      }, embedSWF: function embedSWF(c, d, e, f, g, h, i, j, k, l) {
        var m = { success: !1, id: d };y.w3 && !(y.wk && y.wk < 312) && c && d && e && f && g ? (U(d, !1), B(function () {
          e += "", f += "";var n = {};if (k && (typeof k === "undefined" ? "undefined" : _typeof(k)) === b) for (var o in k) {
            n[o] = k[o];
          }n.data = c, n.width = e, n.height = f;var p = {};if (j && (typeof j === "undefined" ? "undefined" : _typeof(j)) === b) for (var q in j) {
            p[q] = j[q];
          }if (i && (typeof i === "undefined" ? "undefined" : _typeof(i)) === b) for (var r in i) {
            _typeof(p.flashvars) != a ? p.flashvars += "&" + r + "=" + i[r] : p.flashvars = r + "=" + i[r];
          }if (S(g)) {
            var s = L(n, p, d);n.id == d && U(d, !0), m.success = !0, m.ref = s;
          } else {
            if (h && H()) {
              n.data = h, I(n, p, d, l);return;
            }U(d, !0);
          }l && l(m);
        })) : l && l(m);
      }, switchOffAutoHideShow: function switchOffAutoHideShow() {
        x = !1;
      }, ua: y, getFlashPlayerVersion: function getFlashPlayerVersion() {
        return { major: y.pv[0], minor: y.pv[1], release: y.pv[2] };
      }, hasFlashPlayerVersion: S, createSWF: function createSWF(a, b, c) {
        return y.w3 ? L(a, b, c) : undefined;
      }, showExpressInstall: function showExpressInstall(a, b, c, d) {
        y.w3 && H() && I(a, b, c, d);
      }, removeSWF: function removeSWF(a) {
        y.w3 && N(a);
      }, createCSS: function createCSS(a, b, c, d) {
        y.w3 && T(a, b, c, d);
      }, addDomLoadEvent: B, addLoadEvent: C, getQueryParamValue: function getQueryParamValue(a) {
        var b = i.location.search || i.location.hash;if (b) {
          /\?/.test(b) && (b = b.split("?")[1]);if (a == null) return V(b);var c = b.split("&");for (var d = 0; d < c.length; d++) {
            if (c[d].substring(0, c[d].indexOf("=")) == a) return V(c[d].substring(c[d].indexOf("=") + 1));
          }
        }return "";
      }, expressInstallCallback: function expressInstallCallback() {
        if (u) {
          var a = P(f);a && p && (a.parentNode.replaceChild(p, a), q && (U(q, !0), y.ie && y.win && (p.style.display = "block")), r && r(s)), u = !1;
        }
      } };
  }();(function () {
    if ("undefined" == typeof window || window.WebSocket) return;var a = window.console;if (!a || !a.log || !a.error) a = { log: function log() {}, error: function error() {} };if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
      a.error("Flash Player >= 10.0.0 is required.");return;
    }location.protocol == "file:" && a.error("WARNING: web-socket-js doesn't work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://..."), WebSocket = function (_WebSocket) {
      function WebSocket(_x, _x2, _x3, _x4, _x5) {
        return _WebSocket.apply(this, arguments);
      }

      WebSocket.toString = function () {
        return _WebSocket.toString();
      };

      return WebSocket;
    }(function (a, b, c, d, e) {
      var f = this;f.__id = WebSocket.__nextId++, WebSocket.__instances[f.__id] = f, f.readyState = WebSocket.CONNECTING, f.bufferedAmount = 0, f.__events = {}, b ? typeof b == "string" && (b = [b]) : b = [], setTimeout(function () {
        WebSocket.__addTask(function () {
          WebSocket.__flash.create(f.__id, a, b, c || null, d || 0, e || null);
        });
      }, 0);
    }), WebSocket.prototype.send = function (a) {
      if (this.readyState == WebSocket.CONNECTING) throw "INVALID_STATE_ERR: Web Socket connection has not been established";var b = WebSocket.__flash.send(this.__id, encodeURIComponent(a));return b < 0 ? !0 : (this.bufferedAmount += b, !1);
    }, WebSocket.prototype.close = function () {
      if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) return;this.readyState = WebSocket.CLOSING, WebSocket.__flash.close(this.__id);
    }, WebSocket.prototype.addEventListener = function (a, b, c) {
      a in this.__events || (this.__events[a] = []), this.__events[a].push(b);
    }, WebSocket.prototype.removeEventListener = function (a, b, c) {
      if (!(a in this.__events)) return;var d = this.__events[a];for (var e = d.length - 1; e >= 0; --e) {
        if (d[e] === b) {
          d.splice(e, 1);break;
        }
      }
    }, WebSocket.prototype.dispatchEvent = function (a) {
      var b = this.__events[a.type] || [];for (var c = 0; c < b.length; ++c) {
        b[c](a);
      }var d = this["on" + a.type];d && d(a);
    }, WebSocket.prototype.__handleEvent = function (a) {
      "readyState" in a && (this.readyState = a.readyState), "protocol" in a && (this.protocol = a.protocol);var b;if (a.type == "open" || a.type == "error") b = this.__createSimpleEvent(a.type);else if (a.type == "close") b = this.__createSimpleEvent("close");else {
        if (a.type != "message") throw "unknown event type: " + a.type;var c = decodeURIComponent(a.message);b = this.__createMessageEvent("message", c);
      }this.dispatchEvent(b);
    }, WebSocket.prototype.__createSimpleEvent = function (a) {
      if (document.createEvent && window.Event) {
        var b = document.createEvent("Event");return b.initEvent(a, !1, !1), b;
      }return { type: a, bubbles: !1, cancelable: !1 };
    }, WebSocket.prototype.__createMessageEvent = function (a, b) {
      if (document.createEvent && window.MessageEvent && !window.opera) {
        var c = document.createEvent("MessageEvent");return c.initMessageEvent("message", !1, !1, b, null, null, window, null), c;
      }return { type: a, data: b, bubbles: !1, cancelable: !1 };
    }, WebSocket.CONNECTING = 0, WebSocket.OPEN = 1, WebSocket.CLOSING = 2, WebSocket.CLOSED = 3, WebSocket.__flash = null, WebSocket.__instances = {}, WebSocket.__tasks = [], WebSocket.__nextId = 0, WebSocket.loadFlashPolicyFile = function (a) {
      WebSocket.__addTask(function () {
        WebSocket.__flash.loadManualPolicyFile(a);
      });
    }, WebSocket.__initialize = function () {
      if (WebSocket.__flash) return;WebSocket.__swfLocation && (window.WEB_SOCKET_SWF_LOCATION = WebSocket.__swfLocation);if (!window.WEB_SOCKET_SWF_LOCATION) {
        a.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");return;
      }var b = document.createElement("div");b.id = "webSocketContainer", b.style.position = "absolute", WebSocket.__isFlashLite() ? (b.style.left = "0px", b.style.top = "0px") : (b.style.left = "-100px", b.style.top = "-100px");var c = document.createElement("div");c.id = "webSocketFlash", b.appendChild(c), document.body.appendChild(b), swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, { hasPriority: !0, swliveconnect: !0, allowScriptAccess: "always" }, null, function (b) {
        b.success || a.error("[WebSocket] swfobject.embedSWF failed");
      });
    }, WebSocket.__onFlashInitialized = function () {
      setTimeout(function () {
        WebSocket.__flash = document.getElementById("webSocketFlash"), WebSocket.__flash.setCallerUrl(location.href), WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);for (var a = 0; a < WebSocket.__tasks.length; ++a) {
          WebSocket.__tasks[a]();
        }WebSocket.__tasks = [];
      }, 0);
    }, WebSocket.__onFlashEvent = function () {
      return setTimeout(function () {
        try {
          var b = WebSocket.__flash.receiveEvents();for (var c = 0; c < b.length; ++c) {
            WebSocket.__instances[b[c].webSocketId].__handleEvent(b[c]);
          }
        } catch (d) {
          a.error(d);
        }
      }, 0), !0;
    }, WebSocket.__log = function (b) {
      a.log(decodeURIComponent(b));
    }, WebSocket.__error = function (b) {
      a.error(decodeURIComponent(b));
    }, WebSocket.__addTask = function (a) {
      WebSocket.__flash ? a() : WebSocket.__tasks.push(a);
    }, WebSocket.__isFlashLite = function () {
      if (!window.navigator || !window.navigator.mimeTypes) return !1;var a = window.navigator.mimeTypes["application/x-shockwave-flash"];return !a || !a.enabledPlugin || !a.enabledPlugin.filename ? !1 : a.enabledPlugin.filename.match(/flashlite/i) ? !0 : !1;
    }, window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION || (window.addEventListener ? window.addEventListener("load", function () {
      WebSocket.__initialize();
    }, !1) : window.attachEvent("onload", function () {
      WebSocket.__initialize();
    }));
  })(), function (a, b, c) {
    function d(a) {
      if (!a) return;b.Transport.apply(this, arguments), this.sendBuffer = [];
    }function e() {}a.XHR = d, b.util.inherit(d, b.Transport), d.prototype.open = function () {
      return this.socket.setBuffer(!1), this.onOpen(), this.get(), this.setCloseTimeout(), this;
    }, d.prototype.payload = function (a) {
      var c = [];for (var d = 0, e = a.length; d < e; d++) {
        c.push(b.parser.encodePacket(a[d]));
      }this.send(b.parser.encodePayload(c));
    }, d.prototype.send = function (a) {
      return this.post(a), this;
    }, d.prototype.post = function (a) {
      function d() {
        this.readyState == 4 && (this.onreadystatechange = e, b.posting = !1, this.status == 200 ? b.socket.setBuffer(!1) : b.onClose());
      }function f() {
        this.onload = e, b.socket.setBuffer(!1);
      }var b = this;this.socket.setBuffer(!0), this.sendXHR = this.request("POST"), c.XDomainRequest && this.sendXHR instanceof XDomainRequest ? this.sendXHR.onload = this.sendXHR.onerror = f : this.sendXHR.onreadystatechange = d, this.sendXHR.send(a);
    }, d.prototype.close = function () {
      return this.onClose(), this;
    }, d.prototype.request = function (a) {
      var c = b.util.request(this.socket.isXDomain()),
          d = b.util.query(this.socket.options.query, "t=" + +new Date());c.open(a || "GET", this.prepareUrl() + d, !0);if (a == "POST") try {
        c.setRequestHeader ? c.setRequestHeader("Content-type", "text/plain;charset=UTF-8") : c.contentType = "text/plain";
      } catch (e) {}return c;
    }, d.prototype.scheme = function () {
      return this.socket.options.secure ? "https" : "http";
    }, d.check = function (a, d) {
      try {
        var e = b.util.request(d),
            f = c.XDomainRequest && e instanceof XDomainRequest,
            g = a && a.options && a.options.secure ? "https:" : "http:",
            h = c.location && g != c.location.protocol;if (e && (!f || !h)) return !0;
      } catch (i) {}return !1;
    }, d.xdomainCheck = function (a) {
      return d.check(a, !0);
    };
  }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this), function (a, b) {
    function c(a) {
      b.Transport.XHR.apply(this, arguments);
    }a.htmlfile = c, b.util.inherit(c, b.Transport.XHR), c.prototype.name = "htmlfile", c.prototype.get = function () {
      this.doc = new window[["Active"].concat("Object").join("X")]("htmlfile"), this.doc.open(), this.doc.write("<html></html>"), this.doc.close(), this.doc.parentWindow.s = this;var a = this.doc.createElement("div");a.className = "socketio", this.doc.body.appendChild(a), this.iframe = this.doc.createElement("iframe"), a.appendChild(this.iframe);var c = this,
          d = b.util.query(this.socket.options.query, "t=" + +new Date());this.iframe.src = this.prepareUrl() + d, b.util.on(window, "unload", function () {
        c.destroy();
      });
    }, c.prototype._ = function (a, b) {
      a = a.replace(/\\\//g, "/"), this.onData(a);try {
        var c = b.getElementsByTagName("script")[0];c.parentNode.removeChild(c);
      } catch (d) {}
    }, c.prototype.destroy = function () {
      if (this.iframe) {
        try {
          this.iframe.src = "about:blank";
        } catch (a) {}this.doc = null, this.iframe.parentNode.removeChild(this.iframe), this.iframe = null, CollectGarbage();
      }
    }, c.prototype.close = function () {
      return this.destroy(), b.Transport.XHR.prototype.close.call(this);
    }, c.check = function (a) {
      if (typeof window != "undefined" && ["Active"].concat("Object").join("X") in window) try {
        var c = new window[["Active"].concat("Object").join("X")]("htmlfile");return c && b.Transport.XHR.check(a);
      } catch (d) {}return !1;
    }, c.xdomainCheck = function () {
      return !1;
    }, b.transports.push("htmlfile");
  }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports), function (a, b, c) {
    function d() {
      b.Transport.XHR.apply(this, arguments);
    }function e() {}a["xhr-polling"] = d, b.util.inherit(d, b.Transport.XHR), b.util.merge(d, b.Transport.XHR), d.prototype.name = "xhr-polling", d.prototype.heartbeats = function () {
      return !1;
    }, d.prototype.open = function () {
      var a = this;return b.Transport.XHR.prototype.open.call(a), !1;
    }, d.prototype.get = function () {
      function b() {
        this.readyState == 4 && (this.onreadystatechange = e, this.status == 200 ? (a.onData(this.responseText), a.get()) : a.onClose());
      }function d() {
        this.onload = e, this.onerror = e, a.retryCounter = 1, a.onData(this.responseText), a.get();
      }function f() {
        a.retryCounter++, !a.retryCounter || a.retryCounter > 3 ? a.onClose() : a.get();
      }if (!this.isOpen) return;var a = this;this.xhr = this.request(), c.XDomainRequest && this.xhr instanceof XDomainRequest ? (this.xhr.onload = d, this.xhr.onerror = f) : this.xhr.onreadystatechange = b, this.xhr.send(null);
    }, d.prototype.onClose = function () {
      b.Transport.XHR.prototype.onClose.call(this);if (this.xhr) {
        this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = e;try {
          this.xhr.abort();
        } catch (a) {}this.xhr = null;
      }
    }, d.prototype.ready = function (a, c) {
      var d = this;b.util.defer(function () {
        c.call(d);
      });
    }, b.transports.push("xhr-polling");
  }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this), function (a, b, c) {
    function e(a) {
      b.Transport["xhr-polling"].apply(this, arguments), this.index = b.j.length;var c = this;b.j.push(function (a) {
        c._(a);
      });
    }var d = c.document && "MozAppearance" in c.document.documentElement.style;a["jsonp-polling"] = e, b.util.inherit(e, b.Transport["xhr-polling"]), e.prototype.name = "jsonp-polling", e.prototype.post = function (a) {
      function i() {
        j(), c.socket.setBuffer(!1);
      }function j() {
        c.iframe && c.form.removeChild(c.iframe);try {
          h = document.createElement('<iframe name="' + c.iframeId + '">');
        } catch (a) {
          h = document.createElement("iframe"), h.name = c.iframeId;
        }h.id = c.iframeId, c.form.appendChild(h), c.iframe = h;
      }var c = this,
          d = b.util.query(this.socket.options.query, "t=" + +new Date() + "&i=" + this.index);if (!this.form) {
        var e = document.createElement("form"),
            f = document.createElement("textarea"),
            g = this.iframeId = "socketio_iframe_" + this.index,
            h;e.className = "socketio", e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.style.display = "none", e.target = g, e.method = "POST", e.setAttribute("accept-charset", "utf-8"), f.name = "d", e.appendChild(f), document.body.appendChild(e), this.form = e, this.area = f;
      }this.form.action = this.prepareUrl() + d, j(), this.area.value = b.JSON.stringify(a);try {
        this.form.submit();
      } catch (k) {}this.iframe.attachEvent ? h.onreadystatechange = function () {
        c.iframe.readyState == "complete" && i();
      } : this.iframe.onload = i, this.socket.setBuffer(!0);
    }, e.prototype.get = function () {
      var a = this,
          c = document.createElement("script"),
          e = b.util.query(this.socket.options.query, "t=" + +new Date() + "&i=" + this.index);this.script && (this.script.parentNode.removeChild(this.script), this.script = null), c.async = !0, c.src = this.prepareUrl() + e, c.onerror = function () {
        a.onClose();
      };var f = document.getElementsByTagName("script")[0];f.parentNode.insertBefore(c, f), this.script = c, d && setTimeout(function () {
        var a = document.createElement("iframe");document.body.appendChild(a), document.body.removeChild(a);
      }, 100);
    }, e.prototype._ = function (a) {
      return this.onData(a), this.isOpen && this.get(), this;
    }, e.prototype.ready = function (a, c) {
      var e = this;if (!d) return c.call(this);b.util.load(function () {
        c.call(e);
      });
    }, e.check = function () {
      return "document" in c;
    }, e.xdomainCheck = function () {
      return !0;
    }, b.transports.push("jsonp-polling");
  }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this), "function" == "function" && __webpack_require__(1) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return io;
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
__webpack_require__(4);
__webpack_require__(3);
__webpack_require__(7);
__webpack_require__(5);
__webpack_require__(8);
__webpack_require__(9);
module.exports = __webpack_require__(10);


/***/ })
/******/ ]);