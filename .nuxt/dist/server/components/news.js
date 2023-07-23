exports.ids = [10];
exports.modules = {

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(237);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0a994b78", content, true, context)
};

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_style_index_0_id_317e4d66_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(206);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_style_index_0_id_317e4d66_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_style_index_0_id_317e4d66_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_style_index_0_id_317e4d66_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_style_index_0_id_317e4d66_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".card-image[data-v-317e4d66]{text-align:center}.description[data-v-317e4d66],.title[data-v-317e4d66]{font-size:16px;margin-left:5%;text-align:left}.description[data-v-317e4d66]{padding-bottom:3%}.columns[data-v-317e4d66],.content[data-v-317e4d66]{padding-left:5%;text-align:center}figure[data-v-317e4d66]{display:block;margin-left:8%;padding-bottom:5%;padding-top:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/News.vue?vue&type=template&id=317e4d66&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<div class=\"card-image\" data-v-317e4d66><figure data-v-317e4d66><img" + _vm._ssrAttr("src", __webpack_require__(84)) + " alt=\"Placeholder image\" data-v-317e4d66></figure></div> "), _vm._ssrNode("<div class=\"content\" data-v-317e4d66>", "</div>", [_vm._ssrNode("<p class=\"title\" data-v-317e4d66>" + _vm._ssrEscape(" " + _vm._s(_vm.title) + " ") + "</p> <p class=\"description\" data-v-317e4d66>Breve descripción de la noticia.</p> "), _c('nuxt-link', {
    class: `button ${_vm.type} is-rounded is-medium`,
    attrs: {
      "to": _vm.path
    }
  }, [_vm._v("\n      " + _vm._s(_vm.text) + "\n    ")])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/News.vue?vue&type=template&id=317e4d66&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/News.vue?vue&type=script&lang=js&
/* harmony default export */ var Newsvue_type_script_lang_js_ = ({
  props: {
    "type": String,
    "text": String,
    "path": String,
    "title": String
  },
  data() {
    return {
      title1: "Noticia",
      url: "url del sitio"
    };
  }
});
// CONCATENATED MODULE: ./components/News.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Newsvue_type_script_lang_js_ = (Newsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/News.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(236)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Newsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "317e4d66",
  "718385a4"
  
)

/* harmony default export */ var News = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sororidad.1832148.jpg";

/***/ })

};;
//# sourceMappingURL=news.js.map