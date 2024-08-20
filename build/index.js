/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ (function(module) {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);






const allowedBlocks = ['core/paragraph', 'core/heading', 'core/quote', 'core/verse', 'core/pullquote', 'core/preformatted', 'core/list', 'core/blockquote'];
const customGradientPresets = [{
  name: 'JShine',
  gradient: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
  slug: 'jshine'
}, {
  name: 'Cool Sky',
  gradient: 'linear-gradient(135deg,#2980b9 0%,#6dd5fa 50%,#ffffff 100%)',
  slug: 'cool-sky'
}, {
  name: 'Lunada',
  gradient: 'linear-gradient(135deg,#5433FF 0%,#20BDFF 51%,#A5FECB 100%)',
  slug: 'lunada'
}, {
  name: 'Blue Raspberry',
  gradient: 'linear-gradient(135deg,#00B4DB 0%,#0083B0 100%)',
  slug: 'blue-raspberry'
}, {
  name: 'Citrus Peel',
  gradient: 'linear-gradient(135deg,#FDC830 0%,#F37335 100%)',
  slug: 'citrus-peel'
}, {
  name: 'Sin City Red',
  gradient: 'linear-gradient(135deg,#ED213A 0%,#93291E 100%)',
  slug: 'sin-city-red'
}, {
  name: 'Blue Skies',
  gradient: 'linear-gradient(135deg,#56CCF2 0%,#2F80ED 100%)',
  slug: 'blue-skies'
}, {
  name: 'Mango Pulp',
  gradient: 'linear-gradient(135deg,#F09819 0%,#EDDE5D 100%)',
  slug: 'mango-pulp'
}, {
  name: 'Frozen',
  gradient: 'linear-gradient(135deg,#403B4A 0%,#E7E9BB 100%)',
  slug: 'frozen'
}, {
  name: 'Rose Water',
  gradient: 'linear-gradient(135deg,#E55D87 0%,#5FC3E4 100%)',
  slug: 'rose-water'
}, {
  name: 'Moonlit Asteroid',
  gradient: 'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
  slug: 'moonlit-asteroid'
}, {
  name: 'Rastafarie',
  gradient: 'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
  slug: 'rastafari'
}, {
  name: 'Frozen Dreams',
  gradient: 'linear-gradient(135deg,#FD6585 0%, #0D25B9 100%)',
  slug: 'frozen-dreams'
}, {
  name: 'Winter Neva',
  gradient: 'linear-gradient(135deg,#a1c4fd 0%, #c2e9fb 100%)',
  slug: 'winter-neva'
}, {
  name: 'Dusty Grass',
  gradient: 'linear-gradient(135deg,#d4fc79 0%, #96e6a1 100%)',
  slug: 'dusty-grass'
}, {
  name: 'Tempting Azure',
  gradient: 'linear-gradient(135deg,#84fab0 0%, #8fd3f4 100%)',
  slug: 'tempting-azure'
}, {
  name: 'Heavy Rain',
  gradient: 'linear-gradient(135deg,#cfd9df 0%, #e2ebf0 100%)',
  slug: 'heavy-rain'
}, {
  name: 'Amy Crisp',
  gradient: 'linear-gradient(135deg,#a6c0fe 0%, #f68084 100%)',
  slug: 'amy-crisp'
}, {
  name: 'Mean Fruit',
  gradient: 'linear-gradient(135deg,#fccb90 0%, #d57eeb 100%)',
  slug: 'mean-fruit'
}, {
  name: 'Deep Blue',
  gradient: 'linear-gradient(135deg,#e0c3fc 0%, #8ec5fc 100%)',
  slug: 'deep-blue'
}, {
  name: 'Ripe Malinka',
  gradient: 'linear-gradient(135deg,#f093fb 0%, #f5576c 100%)',
  slug: 'ripe-malinka'
}, {
  name: 'Cloudy Knoxville',
  gradient: 'linear-gradient(135deg,#fdfbfb 0%, #ebedee 100%)',
  slug: 'cloudy-knoxville'
}, {
  name: 'Malibu Beach',
  gradient: 'linear-gradient(135deg,#4facfe 0%, #00f2fe 100%)',
  slug: 'malibu-beach'
}, {
  name: 'Sunset Bliss',
  gradient: 'linear-gradient(135deg,#ff3eaa 0%, #ffa414 100%)',
  slug: 'sunset-bliss'
}];
const FilterBlocks = settings => {
  if (!allowedBlocks.includes(settings.name)) {
    return settings;
  }
  const {
    edit: Edit,
    save: Save
  } = settings;
  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      hasGradient: {
        type: 'boolean',
        default: false
      },
      gradientColors: {
        type: 'string',
        default: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)'
      },
      uid: {
        type: 'string',
        default: ''
      }
    },
    edit: function EditFunction(props) {
      const {
        attributes,
        setAttributes
      } = props;
      const {
        uid,
        hasGradient,
        gradientColors
      } = attributes;
      (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!uid) {
          const uniqueId = `gradient-text-${Math.floor(Math.random() * 100000)}`;
          setAttributes({
            uid: uniqueId
          });
        }
      }, [setAttributes, uid]);
      const userGradientPalette = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useSetting)('color.gradients.custom');
      const themeGradientPalette = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useSetting)('color.gradients.theme');
      const defaultGradientPalette = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useSetting)('color.gradients.default');
      const allGradients = [...(customGradientPresets || []), ...(defaultGradientPalette || []), ...(themeGradientPalette || []), ...(userGradientPalette || [])];
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Gradient Text?', 'wp-gradient-text')
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
        "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Gradient Text?', 'wp-gradient-text')
      }, ['Yes', 'No'].map(has => {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          key: has,
          isSmall: true,
          variant: hasGradient === (has === 'Yes' ? true : false) ? 'primary' : undefined,
          onClick: () => setAttributes({
            hasGradient: has === 'Yes'
          })
        }, has);
      }))), hasGradient && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Choose Colors', 'wp-gradient-text')
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.GradientPicker, {
        __nextHasNoMargin: true,
        value: gradientColors,
        onChange: currentGradient => setAttributes({
          gradientColors: currentGradient
        }),
        gradients: allGradients
      }))), hasGradient ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: `is-gradient-text ${uid}`
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
									.${uid} *:not(style) {
										-webkit-text-fill-color: transparent;
										background: ${gradientColors};
										-webkit-background-clip: text;
										-webkit-box-decoration-break: clone;
										color: black;
									}
								`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Edit, {
        ...props
      })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Edit, {
        ...props
      }));
    },
    save(props) {
      const {
        attributes
      } = props;
      const {
        uid,
        hasGradient,
        gradientColors
      } = attributes;
      return hasGradient ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: `is-gradient-text ${uid}`
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
							.${uid} *:not(style) {
								-webkit-text-fill-color: transparent;
								background: ${gradientColors};
								-webkit-background-clip: text;
								-webkit-box-decoration-break: clone;
								color: black;
							}
						`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Save, {
        ...props
      })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Save, {
        ...props
      });
    }
  };
};
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('blocks.registerBlockType', 'mm/wp-grident-text', FilterBlocks);
}();
/******/ })()
;
//# sourceMappingURL=index.js.map