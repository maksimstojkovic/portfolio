/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/PlayfairDisplay-Regular.ttf */ "./src/fonts/PlayfairDisplay-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/PlayfairDisplay-Bold.ttf */ "./src/fonts/PlayfairDisplay-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Roboto-Regular.ttf */ "./src/fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/display-photo.jpg */ "./src/img/display-photo.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Playfair Display";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Playfair Display";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype");
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: "Roboto";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("truetype");
  font-weight: normal;
  font-style: normal;
}
:root,
html,
body {
  --section-max-width: 1000px;
  --h-margin-bottom: 20px;
  --p-margin-bottom: 10px;
  --border-radius: 10px;
  --h-color: black;
  --p-color: #565656;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "Roboto", "Arial", sans-serif;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 0 var(--h-margin-bottom) 0;
  padding: 0;
  color: var(--h-color);
  font-family: "Playfair Display";
  font-weight: normal;
}
@media (max-width: 1000px) {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: center;
  }
}

h1 {
  font-size: 2.2rem;
}

h2 {
  font-size: 1.4rem;
}

p {
  margin: 0 0 var(--p-margin-bottom) 0;
  color: var(--p-color);
  line-height: 1.5rem;
}

.icon {
  width: 30px;
}

section {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section-wrapper {
  width: min(80%, var(--section-max-width));
  padding: 25px max(10%, var(--section-max-width) / 2) 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.section-wrapper:last-of-type {
  padding-bottom: 25px;
}

.about-me {
  --padding-x: 30px;
  --padding-y: 10px;
  background-color: #0891b2;
}
@media (max-width: 1000px) {
  .about-me {
    --h-color: white;
    --p-color: white;
  }
  .about-me .socials img {
    filter: invert(1);
  }
}
.about-me .section-wrapper {
  flex-direction: row;
  align-items: center;
}
.about-me .section-wrapper .photo {
  --min-size: 320px;
  width: 100%;
  max-width: var(--min-size);
  aspect-ratio: 1;
  z-index: 1;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-size: contain;
  border-radius: var(--border-radius);
  box-shadow: 3px 3px var(--padding-x) rgba(0, 0, 0, 0.2);
  text-wrap: nowrap;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.about-me .section-wrapper .photo h1 {
  margin: 0 0 5px 0;
  padding: 0 8px;
  border-radius: calc(var(--border-radius) / 2);
  font-size: min(2.2rem, 9vw);
  font-weight: bold;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
}
.about-me .content {
  --total-height: 180px;
  min-height: calc(var(--total-height) - 2 * var(--padding-y));
  padding: var(--padding-y) var(--padding-x);
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  background-color: white;
}
@media (max-width: 1000px) {
  .about-me .content {
    background-color: #0891b2;
  }
}
.about-me .content .socials {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 20px;
}

@media (max-width: 1000px) {
  .about-me .section-wrapper {
    flex-wrap: wrap;
  }
  .about-me .section-wrapper .photo {
    margin-bottom: 30px;
  }
  .about-me .section-wrapper .content {
    padding: 0;
    box-shadow: none;
  }
  .about-me .section-wrapper .content .socials {
    justify-content: center;
  }
}
.portfolio .projects {
  --gap-x: 30px;
  --gap-y: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc((var(--section-max-width) - 3 * var(--gap-x)) / 3), 1fr));
  gap: var(--gap-y) var(--gap-x);
}
@media (max-width: 1000px) {
  .portfolio .projects {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 500px) {
  .portfolio .projects {
    grid-template-columns: 1fr;
  }
}
.portfolio .projects .card {
  border-radius: var(--border-radius);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.portfolio .projects .card .project-screenshot {
  --height: 250px;
  width: 100%;
  height: var(--height);
  min-width: 100%;
  min-height: var(--height);
  object-fit: contain;
  background-color: white;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
}
.portfolio .projects .card .project-details {
  flex: 1;
  padding: 20px;
  border-radius: 0 0 var(--border-radius) var(--border-radius);
}
.portfolio .projects .card .project-details .project-header {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.portfolio .projects .card .project-details .project-header h2 {
  margin: 0;
  text-align: left;
  flex: 1;
}
.portfolio .projects .card .project-details p {
  margin: 0;
}

.contact-me {
  --h-color: white;
  --p-color: white;
  background-color: #0891b2;
}
.contact-me .contact-methods {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.contact-me .contact-methods a {
  font-weight: bold;
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.contact-me .contact-methods a:not(:last-child) {
  margin-bottom: 10px;
}
.contact-me .contact-methods a img {
  margin-right: 10px;
  filter: invert(1);
}
.contact-me .contact-methods a p {
  margin: 0;
  font-style: normal;
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"Playfair Display\";\n  src: url(\"fonts/PlayfairDisplay-Regular.ttf\") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Playfair Display\";\n  src: url(\"fonts/PlayfairDisplay-Bold.ttf\") format(\"truetype\");\n  font-weight: bold;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Roboto\";\n  src: url(\"fonts/Roboto-Regular.ttf\") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n// SASS VARIABLES\n\n$tablet-breakpoint: 1000px;\n$phone-breakpoint: 500px;\n\n:root,\nhtml,\nbody {\n  // CSS VARIABLES\n  --section-max-width: 1000px;\n\n  --h-margin-bottom: 20px;\n  --p-margin-bottom: 10px;\n  --border-radius: 10px;\n  --h-color: black;\n  --p-color: #565656;\n\n  width: 100%;\n  // height: 100%;\n  margin: 0;\n  padding: 0;\n\n  font-family: \"Roboto\", \"Arial\", sans-serif;\n  font-size: 16px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0 0 var(--h-margin-bottom) 0;\n  padding: 0;\n\n  color: var(--h-color);\n  font-family: \"Playfair Display\";\n  font-weight: normal;\n\n  @media (max-width: $tablet-breakpoint) {\n    text-align: center;\n  }\n}\n\nh1 {\n  font-size: 2.2rem;\n}\n\nh2 {\n  font-size: 1.4rem;\n}\n\np {\n  margin: 0 0 var(--p-margin-bottom) 0;\n\n  color: var(--p-color);\n  line-height: 1.5rem;\n}\n\n.icon {\n  width: 30px;\n}\n\n// SECTIONS\n\nsection {\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.section-wrapper {\n  width: min(80%, var(--section-max-width));\n  padding: 25px max(10%, var(--section-max-width) / 2) 45px;\n\n  &:last-of-type {\n    padding-bottom: 25px;\n  }\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n// ABOUT ME\n\n.about-me {\n  --padding-x: 30px;\n  --padding-y: 10px;\n\n  background-color: #0891b2;\n\n  @media (max-width: $tablet-breakpoint) {\n    --h-color: white;\n    --p-color: white;\n\n    .socials img {\n      filter: invert(1);\n    }\n  }\n\n  .section-wrapper {\n    flex-direction: row;\n    align-items: center;\n\n    .photo {\n      --min-size: 320px;\n\n      width: 100%;\n      max-width: var(--min-size);\n      aspect-ratio: 1;\n      // min-height: var(--min-size);\n\n      z-index: 1;\n      background: url(\"./img/display-photo.jpg\");\n      background-size: contain;\n      border-radius: var(--border-radius);\n      box-shadow: 3px 3px var(--padding-x) rgba(0, 0, 0, 0.2);\n      text-wrap: nowrap;\n\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-end;\n      align-items: center;\n\n      h1 {\n        margin: 0 0 5px 0;\n        padding: 0 8px;\n\n        border-radius: calc(var(--border-radius) / 2);\n\n        font-size: min(2.2rem, 9vw);\n        font-weight: bold;\n        color: white;\n        // -webkit-text-stroke: 0.05rem rgba(0, 0, 0, 1);\n\n        background-color: rgba(0, 0, 0, 0.8);\n      }\n    }\n  }\n\n  .content {\n    --total-height: 180px;\n\n    min-height: calc(var(--total-height) - 2 * var(--padding-y));\n    padding: var(--padding-y) var(--padding-x);\n\n    border-radius: 0 var(--border-radius) var(--border-radius) 0;\n    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);\n\n    display: flex;\n    flex-direction: column;\n\n    background-color: white;\n\n    @media (max-width: $tablet-breakpoint) {\n      background-color: #0891b2;\n    }\n\n    .socials {\n      flex: 1;\n\n      display: flex;\n      justify-content: flex-end;\n      align-items: flex-end;\n      gap: 20px;\n    }\n  }\n}\n\n@media (max-width: $tablet-breakpoint) {\n  .about-me .section-wrapper {\n    flex-wrap: wrap;\n\n    .photo {\n      margin-bottom: 30px;\n    }\n\n    .content {\n      padding: 0;\n\n      box-shadow: none;\n\n      .socials {\n        justify-content: center;\n      }\n    }\n  }\n}\n\n// PORTFOLIO\n\n.portfolio {\n  .projects {\n    --gap-x: 30px;\n    --gap-y: 50px;\n\n    width: 100%;\n\n    display: grid;\n    grid-template-columns: repeat(\n      auto-fill,\n      minmax(calc((var(--section-max-width) - 3 * var(--gap-x)) / 3), 1fr)\n    );\n    gap: var(--gap-y) var(--gap-x);\n\n    @media (max-width: $tablet-breakpoint) {\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    @media (max-width: $phone-breakpoint) {\n      grid-template-columns: 1fr;\n    }\n\n    .card {\n      border-radius: var(--border-radius);\n\n      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);\n\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n\n      .project-screenshot {\n        --height: 250px;\n\n        width: 100%;\n        height: var(--height);\n        min-width: 100%;\n        min-height: var(--height);\n\n        object-fit: contain;\n        background-color: white;\n\n        border-radius: var(--border-radius) var(--border-radius) 0 0;\n      }\n\n      .project-details {\n        flex: 1;\n        padding: 20px;\n\n        border-radius: 0 0 var(--border-radius) var(--border-radius);\n\n        .project-header {\n          margin-bottom: 10px;\n\n          display: flex;\n          align-items: center;\n          gap: 10px;\n\n          h2 {\n            margin: 0;\n\n            text-align: left;\n\n            flex: 1;\n          }\n        }\n\n        p {\n          margin: 0;\n        }\n      }\n    }\n  }\n}\n\n// CONTACT ME\n\n.contact-me {\n  --h-color: white;\n  --p-color: white;\n\n  background-color: #0891b2;\n\n  .contact-methods {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    a {\n      &:not(:last-child) {\n        margin-bottom: 10px;\n      }\n\n      font-weight: bold;\n      text-decoration: none;\n\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n\n      img {\n        margin-right: 10px;\n\n        filter: invert(1);\n      }\n\n      p {\n        margin: 0;\n\n        font-style: normal;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/PlayfairDisplay-Bold.ttf":
/*!********************************************!*\
  !*** ./src/fonts/PlayfairDisplay-Bold.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c3c9165182044bf7f179.ttf";

/***/ }),

/***/ "./src/fonts/PlayfairDisplay-Regular.ttf":
/*!***********************************************!*\
  !*** ./src/fonts/PlayfairDisplay-Regular.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6a97b5c64f316f567fa1.ttf";

/***/ }),

/***/ "./src/fonts/Roboto-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Roboto-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/img/cellphone.svg":
/*!*******************************!*\
  !*** ./src/img/cellphone.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/cellphone.svg";

/***/ }),

/***/ "./src/img/display-photo.jpg":
/*!***********************************!*\
  !*** ./src/img/display-photo.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/display-photo.jpg";

/***/ }),

/***/ "./src/img/email.svg":
/*!***************************!*\
  !*** ./src/img/email.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/email.svg";

/***/ }),

/***/ "./src/img/github.svg":
/*!****************************!*\
  !*** ./src/img/github.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/github.svg";

/***/ }),

/***/ "./src/img/linkedin.svg":
/*!******************************!*\
  !*** ./src/img/linkedin.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/linkedin.svg";

/***/ }),

/***/ "./src/img/newspaper-variant.svg":
/*!***************************************!*\
  !*** ./src/img/newspaper-variant.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/newspaper-variant.svg";

/***/ }),

/***/ "./src/img/open-in-new.svg":
/*!*********************************!*\
  !*** ./src/img/open-in-new.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/open-in-new.svg";

/***/ }),

/***/ "./src/img/p2p_network.png":
/*!*********************************!*\
  !*** ./src/img/p2p_network.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/p2p_network.png";

/***/ }),

/***/ "./src/img/script-text.svg":
/*!*********************************!*\
  !*** ./src/img/script-text.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/script-text.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _img_cellphone_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/cellphone.svg */ "./src/img/cellphone.svg");
/* harmony import */ var _img_email_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/email.svg */ "./src/img/email.svg");
/* harmony import */ var _img_github_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/github.svg */ "./src/img/github.svg");
/* harmony import */ var _img_linkedin_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/linkedin.svg */ "./src/img/linkedin.svg");
/* harmony import */ var _img_newspaper_variant_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/newspaper-variant.svg */ "./src/img/newspaper-variant.svg");
/* harmony import */ var _img_open_in_new_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/open-in-new.svg */ "./src/img/open-in-new.svg");
/* harmony import */ var _img_script_text_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/script-text.svg */ "./src/img/script-text.svg");
/* harmony import */ var _img_p2p_network_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/p2p_network.png */ "./src/img/p2p_network.png");










})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsaUpBQW9EO0FBQ2hHLDRDQUE0QywySUFBaUQ7QUFDN0YsNENBQTRDLCtIQUEyQztBQUN2Riw0Q0FBNEMsMkhBQTBDO0FBQ3RGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxVQUFVLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFN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QUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ087QUFDSjtBQUNDO0FBQ0U7QUFDUztBQUNOO0FBQ0Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImZvbnRzL1BsYXlmYWlyRGlzcGxheS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImZvbnRzL1BsYXlmYWlyRGlzcGxheS1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcImZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1nL2Rpc3BsYXktcGhvdG8uanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG46cm9vdCxcbmh0bWwsXG5ib2R5IHtcbiAgLS1zZWN0aW9uLW1heC13aWR0aDogMTAwMHB4O1xuICAtLWgtbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgLS1wLW1hcmdpbi1ib3R0b206IDEwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLS1oLWNvbG9yOiBibGFjaztcbiAgLS1wLWNvbG9yOiAjNTY1NjU2O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiAwIDAgdmFyKC0taC1tYXJnaW4tYm90dG9tKSAwO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogdmFyKC0taC1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgaDEsXG4gIGgyLFxuICBoMyxcbiAgaDQsXG4gIGg1LFxuICBoNiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAyLjJyZW07XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbnAge1xuICBtYXJnaW46IDAgMCB2YXIoLS1wLW1hcmdpbi1ib3R0b20pIDA7XG4gIGNvbG9yOiB2YXIoLS1wLWNvbG9yKTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn1cblxuLmljb24ge1xuICB3aWR0aDogMzBweDtcbn1cblxuc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlY3Rpb24td3JhcHBlciB7XG4gIHdpZHRoOiBtaW4oODAlLCB2YXIoLS1zZWN0aW9uLW1heC13aWR0aCkpO1xuICBwYWRkaW5nOiAyNXB4IG1heCgxMCUsIHZhcigtLXNlY3Rpb24tbWF4LXdpZHRoKSAvIDIpIDQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5zZWN0aW9uLXdyYXBwZXI6bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG59XG5cbi5hYm91dC1tZSB7XG4gIC0tcGFkZGluZy14OiAzMHB4O1xuICAtLXBhZGRpbmcteTogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4OTFiMjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmFib3V0LW1lIHtcbiAgICAtLWgtY29sb3I6IHdoaXRlO1xuICAgIC0tcC1jb2xvcjogd2hpdGU7XG4gIH1cbiAgLmFib3V0LW1lIC5zb2NpYWxzIGltZyB7XG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XG4gIH1cbn1cbi5hYm91dC1tZSAuc2VjdGlvbi13cmFwcGVyIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hYm91dC1tZSAuc2VjdGlvbi13cmFwcGVyIC5waG90byB7XG4gIC0tbWluLXNpemU6IDMyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiB2YXIoLS1taW4tc2l6ZSk7XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBib3gtc2hhZG93OiAzcHggM3B4IHZhcigtLXBhZGRpbmcteCkgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0ZXh0LXdyYXA6IG5vd3JhcDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hYm91dC1tZSAuc2VjdGlvbi13cmFwcGVyIC5waG90byBoMSB7XG4gIG1hcmdpbjogMCAwIDVweCAwO1xuICBwYWRkaW5nOiAwIDhweDtcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzKSAvIDIpO1xuICBmb250LXNpemU6IG1pbigyLjJyZW0sIDl2dyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cbi5hYm91dC1tZSAuY29udGVudCB7XG4gIC0tdG90YWwtaGVpZ2h0OiAxODBweDtcbiAgbWluLWhlaWdodDogY2FsYyh2YXIoLS10b3RhbC1oZWlnaHQpIC0gMiAqIHZhcigtLXBhZGRpbmcteSkpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLXkpIHZhcigtLXBhZGRpbmcteCk7XG4gIGJvcmRlci1yYWRpdXM6IDAgdmFyKC0tYm9yZGVyLXJhZGl1cykgdmFyKC0tYm9yZGVyLXJhZGl1cykgMDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5hYm91dC1tZSAuY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4OTFiMjtcbiAgfVxufVxuLmFib3V0LW1lIC5jb250ZW50IC5zb2NpYWxzIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBnYXA6IDIwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmFib3V0LW1lIC5zZWN0aW9uLXdyYXBwZXIge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICAuYWJvdXQtbWUgLnNlY3Rpb24td3JhcHBlciAucGhvdG8ge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbiAgLmFib3V0LW1lIC5zZWN0aW9uLXdyYXBwZXIgLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICAuYWJvdXQtbWUgLnNlY3Rpb24td3JhcHBlciAuY29udGVudCAuc29jaWFscyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbi5wb3J0Zm9saW8gLnByb2plY3RzIHtcbiAgLS1nYXAteDogMzBweDtcbiAgLS1nYXAteTogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KGNhbGMoKHZhcigtLXNlY3Rpb24tbWF4LXdpZHRoKSAtIDMgKiB2YXIoLS1nYXAteCkpIC8gMyksIDFmcikpO1xuICBnYXA6IHZhcigtLWdhcC15KSB2YXIoLS1nYXAteCk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5wb3J0Zm9saW8gLnByb2plY3RzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLnBvcnRmb2xpbyAucHJvamVjdHMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG4ucG9ydGZvbGlvIC5wcm9qZWN0cyAuY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wb3J0Zm9saW8gLnByb2plY3RzIC5jYXJkIC5wcm9qZWN0LXNjcmVlbnNob3Qge1xuICAtLWhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IHZhcigtLWhlaWdodCk7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogdmFyKC0taGVpZ2h0KTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpIHZhcigtLWJvcmRlci1yYWRpdXMpIDAgMDtcbn1cbi5wb3J0Zm9saW8gLnByb2plY3RzIC5jYXJkIC5wcm9qZWN0LWRldGFpbHMge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgdmFyKC0tYm9yZGVyLXJhZGl1cykgdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG59XG4ucG9ydGZvbGlvIC5wcm9qZWN0cyAuY2FyZCAucHJvamVjdC1kZXRhaWxzIC5wcm9qZWN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cbi5wb3J0Zm9saW8gLnByb2plY3RzIC5jYXJkIC5wcm9qZWN0LWRldGFpbHMgLnByb2plY3QtaGVhZGVyIGgyIHtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmbGV4OiAxO1xufVxuLnBvcnRmb2xpbyAucHJvamVjdHMgLmNhcmQgLnByb2plY3QtZGV0YWlscyBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY29udGFjdC1tZSB7XG4gIC0taC1jb2xvcjogd2hpdGU7XG4gIC0tcC1jb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODkxYjI7XG59XG4uY29udGFjdC1tZSAuY29udGFjdC1tZXRob2RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFjdC1tZSAuY29udGFjdC1tZXRob2RzIGEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFjdC1tZSAuY29udGFjdC1tZXRob2RzIGE6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY29udGFjdC1tZSAuY29udGFjdC1tZXRob2RzIGEgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmaWx0ZXI6IGludmVydCgxKTtcbn1cbi5jb250YWN0LW1lIC5jb250YWN0LW1ldGhvZHMgYSBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLCtCQUFBO0VBQ0EsK0RBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFFQTtFQUNFLCtCQUFBO0VBQ0Es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MkRRO0VBQ0UsU0FBQTtBQXpEVjs7QUFrRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEseUJBQUE7QUFoRUY7QUFrRUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBaEVKO0FBa0VJO0VBS0UsaUJBQUE7RUFDQSxxQkFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBckVOO0FBNERNO0VBQ0UsbUJBQUE7QUExRFI7QUFvRU07RUFDRSxrQkFBQTtFQUVBLGlCQUFBO0FBbkVSO0FBc0VNO0VBQ0UsU0FBQTtFQUVBLGtCQUFBO0FBckVSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQbGF5ZmFpciBEaXNwbGF5XFxcIjtcXG4gIHNyYzogdXJsKFxcXCJmb250cy9QbGF5ZmFpckRpc3BsYXktUmVndWxhci50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheWZhaXIgRGlzcGxheVxcXCI7XFxuICBzcmM6IHVybChcXFwiZm9udHMvUGxheWZhaXJEaXNwbGF5LUJvbGQudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgc3JjOiB1cmwoXFxcImZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi8vIFNBU1MgVkFSSUFCTEVTXFxuXFxuJHRhYmxldC1icmVha3BvaW50OiAxMDAwcHg7XFxuJHBob25lLWJyZWFrcG9pbnQ6IDUwMHB4O1xcblxcbjpyb290LFxcbmh0bWwsXFxuYm9keSB7XFxuICAvLyBDU1MgVkFSSUFCTEVTXFxuICAtLXNlY3Rpb24tbWF4LXdpZHRoOiAxMDAwcHg7XFxuXFxuICAtLWgtbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIC0tcC1tYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLS1oLWNvbG9yOiBibGFjaztcXG4gIC0tcC1jb2xvcjogIzU2NTY1NjtcXG5cXG4gIHdpZHRoOiAxMDAlO1xcbiAgLy8gaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG5cXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgXFxcIkFyaWFsXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgbWFyZ2luOiAwIDAgdmFyKC0taC1tYXJnaW4tYm90dG9tKSAwO1xcbiAgcGFkZGluZzogMDtcXG5cXG4gIGNvbG9yOiB2YXIoLS1oLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheWZhaXIgRGlzcGxheVxcXCI7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtYnJlYWtwb2ludCkge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDAgMCB2YXIoLS1wLW1hcmdpbi1ib3R0b20pIDA7XFxuXFxuICBjb2xvcjogdmFyKC0tcC1jb2xvcik7XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4uaWNvbiB7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLy8gU0VDVElPTlNcXG5cXG5zZWN0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZWN0aW9uLXdyYXBwZXIge1xcbiAgd2lkdGg6IG1pbig4MCUsIHZhcigtLXNlY3Rpb24tbWF4LXdpZHRoKSk7XFxuICBwYWRkaW5nOiAyNXB4IG1heCgxMCUsIHZhcigtLXNlY3Rpb24tbWF4LXdpZHRoKSAvIDIpIDQ1cHg7XFxuXFxuICAmOmxhc3Qtb2YtdHlwZSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcbiAgfVxcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4vLyBBQk9VVCBNRVxcblxcbi5hYm91dC1tZSB7XFxuICAtLXBhZGRpbmcteDogMzBweDtcXG4gIC0tcGFkZGluZy15OiAxMHB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4OTFiMjtcXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0LWJyZWFrcG9pbnQpIHtcXG4gICAgLS1oLWNvbG9yOiB3aGl0ZTtcXG4gICAgLS1wLWNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgLnNvY2lhbHMgaW1nIHtcXG4gICAgICBmaWx0ZXI6IGludmVydCgxKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLnNlY3Rpb24td3JhcHBlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIC5waG90byB7XFxuICAgICAgLS1taW4tc2l6ZTogMzIwcHg7XFxuXFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgbWF4LXdpZHRoOiB2YXIoLS1taW4tc2l6ZSk7XFxuICAgICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICAgIC8vIG1pbi1oZWlnaHQ6IHZhcigtLW1pbi1zaXplKTtcXG5cXG4gICAgICB6LWluZGV4OiAxO1xcbiAgICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi9pbWcvZGlzcGxheS1waG90by5qcGdcXFwiKTtcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgICAgYm94LXNoYWRvdzogM3B4IDNweCB2YXIoLS1wYWRkaW5nLXgpIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgICB0ZXh0LXdyYXA6IG5vd3JhcDtcXG5cXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgIGgxIHtcXG4gICAgICAgIG1hcmdpbjogMCAwIDVweCAwO1xcbiAgICAgICAgcGFkZGluZzogMCA4cHg7XFxuXFxuICAgICAgICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWJvcmRlci1yYWRpdXMpIC8gMik7XFxuXFxuICAgICAgICBmb250LXNpemU6IG1pbigyLjJyZW0sIDl2dyk7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIC8vIC13ZWJraXQtdGV4dC1zdHJva2U6IDAuMDVyZW0gcmdiYSgwLCAwLCAwLCAxKTtcXG5cXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5jb250ZW50IHtcXG4gICAgLS10b3RhbC1oZWlnaHQ6IDE4MHB4O1xcblxcbiAgICBtaW4taGVpZ2h0OiBjYWxjKHZhcigtLXRvdGFsLWhlaWdodCkgLSAyICogdmFyKC0tcGFkZGluZy15KSk7XFxuICAgIHBhZGRpbmc6IHZhcigtLXBhZGRpbmcteSkgdmFyKC0tcGFkZGluZy14KTtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMCB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwO1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtYnJlYWtwb2ludCkge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwODkxYjI7XFxuICAgIH1cXG5cXG4gICAgLnNvY2lhbHMge1xcbiAgICAgIGZsZXg6IDE7XFxuXFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgICBnYXA6IDIwcHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtYnJlYWtwb2ludCkge1xcbiAgLmFib3V0LW1lIC5zZWN0aW9uLXdyYXBwZXIge1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuXFxuICAgIC5waG90byB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgfVxcblxcbiAgICAuY29udGVudCB7XFxuICAgICAgcGFkZGluZzogMDtcXG5cXG4gICAgICBib3gtc2hhZG93OiBub25lO1xcblxcbiAgICAgIC5zb2NpYWxzIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vLyBQT1JURk9MSU9cXG5cXG4ucG9ydGZvbGlvIHtcXG4gIC5wcm9qZWN0cyB7XFxuICAgIC0tZ2FwLXg6IDMwcHg7XFxuICAgIC0tZ2FwLXk6IDUwcHg7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChcXG4gICAgICBhdXRvLWZpbGwsXFxuICAgICAgbWlubWF4KGNhbGMoKHZhcigtLXNlY3Rpb24tbWF4LXdpZHRoKSAtIDMgKiB2YXIoLS1nYXAteCkpIC8gMyksIDFmcilcXG4gICAgKTtcXG4gICAgZ2FwOiB2YXIoLS1nYXAteSkgdmFyKC0tZ2FwLXgpO1xcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldC1icmVha3BvaW50KSB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHBob25lLWJyZWFrcG9pbnQpIHtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgfVxcblxcbiAgICAuY2FyZCB7XFxuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuXFxuICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG5cXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAucHJvamVjdC1zY3JlZW5zaG90IHtcXG4gICAgICAgIC0taGVpZ2h0OiAyNTBweDtcXG5cXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0taGVpZ2h0KTtcXG5cXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpIHZhcigtLWJvcmRlci1yYWRpdXMpIDAgMDtcXG4gICAgICB9XFxuXFxuICAgICAgLnByb2plY3QtZGV0YWlscyB7XFxuICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG5cXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG5cXG4gICAgICAgIC5wcm9qZWN0LWhlYWRlciB7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGdhcDogMTBweDtcXG5cXG4gICAgICAgICAgaDIge1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG5cXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcblxcbiAgICAgICAgICAgIGZsZXg6IDE7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHAge1xcbiAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi8vIENPTlRBQ1QgTUVcXG5cXG4uY29udGFjdC1tZSB7XFxuICAtLWgtY29sb3I6IHdoaXRlO1xcbiAgLS1wLWNvbG9yOiB3aGl0ZTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODkxYjI7XFxuXFxuICAuY29udGFjdC1tZXRob2RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGEge1xcbiAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgIH1cXG5cXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICBpbWcge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcblxcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxuICAgICAgfVxcblxcbiAgICAgIHAge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcblxcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCBcIi4vaW1nL2NlbGxwaG9uZS5zdmdcIjtcbmltcG9ydCBcIi4vaW1nL2VtYWlsLnN2Z1wiO1xuaW1wb3J0IFwiLi9pbWcvZ2l0aHViLnN2Z1wiO1xuaW1wb3J0IFwiLi9pbWcvbGlua2VkaW4uc3ZnXCI7XG5pbXBvcnQgXCIuL2ltZy9uZXdzcGFwZXItdmFyaWFudC5zdmdcIjtcbmltcG9ydCBcIi4vaW1nL29wZW4taW4tbmV3LnN2Z1wiO1xuaW1wb3J0IFwiLi9pbWcvc2NyaXB0LXRleHQuc3ZnXCJcbmltcG9ydCBcIi4vaW1nL3AycF9uZXR3b3JrLnBuZ1wiXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=