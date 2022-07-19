/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  registerBlockType
} = wp.blocks;
const {
  RichText,
  InspectorControls,
  ColorPalette,
  MediaUpload
} = wp.editor;
const {
  PanelBody,
  IconButton
} = wp.components;
registerBlockType('talia/custom-cta', {
  //built-in attributes
  title: 'Call to Action',
  description: "Custom CTA Block",
  icon: 'format-image',
  category: 'design',
  //custom attributes
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: 'h2'
    },
    titleColor: {
      type: 'string',
      default: '#000000'
    },
    bodyColor: {
      type: 'string',
      default: '#f0f0f0'
    },
    body: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    background: {
      type: 'string',
      default: 'null'
    }
  },

  //built-in functions
  edit(_ref) {
    let {
      attributes,
      setAttributes
    } = _ref;
    const {
      title,
      body,
      titleColor,
      bodyColor,
      background
    } = attributes; //custom functions

    function onChangeTitle(newTitle) {
      setAttributes({
        title: newTitle
      });
    }

    function onChangeBody(newBody) {
      setAttributes({
        body: newBody
      });
    }

    function onTitleColorChange(newColor) {
      setAttributes({
        titleColor: newColor
      });
    }

    function onBodyColorChange(newBodyColor) {
      setAttributes({
        bodyColor: newBodyColor
      });
    }

    function onSelectImage(newImage) {
      setAttributes({
        background: newImage.sizes.full.url
      });
    }

    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      style: {
        marginBottom: '40px'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: 'Font Colors'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Select Title Color")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      value: titleColor,
      onChange: onTitleColorChange
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Select Body Color")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      value: bodyColor,
      onChange: onBodyColorChange
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: 'Background Image'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Select Background Image:")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      onSelect: onSelectImage,
      type: "image",
      value: background,
      render: _ref2 => {
        let {
          open
        } = _ref2;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
          onClick: open,
          icon: "upload",
          className: "editor-media-placeholder__button is-button is-default is-large"
        }, "Upload Background Image");
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "cta-container",
      style: {
        backgroundImage: `url('${background}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      key: "editable",
      tagName: "h2",
      placeholder: "Enter Title",
      value: title,
      onChange: onChangeTitle,
      style: {
        color: titleColor
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      key: "editable",
      tagName: "p",
      placeholder: "Enter Description",
      value: body,
      onChange: onChangeBody,
      style: {
        color: bodyColor
      }
    }))];
  },

  save(_ref3) {
    let {
      attributes
    } = _ref3;
    const {
      title,
      body,
      titleColor,
      bodyColor,
      background
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "cta-container",
      style: {
        backgroundImage: `url('${background}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      style: {
        color: titleColor
      }
    }, title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "p",
      value: body,
      style: {
        color: bodyColor
      }
    }));
  }

});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map