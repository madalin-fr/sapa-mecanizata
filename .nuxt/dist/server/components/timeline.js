exports.ids = [16];
exports.modules = {

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(172);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5a76e16b", content, true, context)
};

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_e6ba2fea_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(157);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_e6ba2fea_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_e6ba2fea_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_e6ba2fea_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_e6ba2fea_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "[class^=gb-][data-v-e6ba2fea]:not(.gb-base-icon){font-family:\"Roboto\",sans-serif!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/Timeline.vue?vue&type=template&id=e6ba2fea&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "timeline-main"
  }, [_c('vue-timeline-update', {
    attrs: {
      "date": new Date('2016-06-26'),
      "title": "Primer curso de programación competitiva",
      "description": "Niñas Pro nace en el año 2016 como una agrupación de mujeres estudiantes\n        de ingeniería que, al ser testigos de la poca participación femenina en sus salas de\n        clases, comenzaron a realizar un curso gratuito de programación competitiva para niñas\n        y con ello promover vocaciones tecnológicas en niñas y adolescentes.",
      "category": "Evento Pro",
      "icon": "code",
      "color": "green"
    }
  }), _vm._ssrNode(" "), _c('vue-timeline-update', {
    attrs: {
      "date": new Date('2019-03-15'),
      "title": "Creamos la Corporación",
      "description": "En el año 2019 formalizamos Niñas Pro como una asociación sin fines de lucro,\n        empezamos a idear una estructura organizacional e hicimos un Piloto con un equipo de\n        voluntarias de la Universidad de los Andes para la creación de sedes y poder expandir\n        nuestro trabajo.",
      "category": "Hito",
      "icon": "code",
      "color": "red"
    }
  }), _vm._ssrNode(" "), _c('vue-timeline-update', {
    attrs: {
      "date": new Date('2019-04-1'),
      "title": "Piloto Sede Las Condes",
      "description": "Piloto con un equipo de voluntarias de la Universidad de los Andes para la \n        creación de sedes y poder expandir nuestro trabajo.",
      "category": "¡Nueva Sede!",
      "icon": "code",
      "color": "turquoise"
    }
  }), _vm._ssrNode(" "), _c('vue-timeline-update', {
    attrs: {
      "date": new Date('2020-04-1'),
      "title": "Nuevas Sedes Coquimbo y Concepción",
      "description": "En el 2020 se crearon nuevas sedes en Coquimbo y Concepción y todos los\n        grupos de trabajo realizamos el curso anual de programación competitiva en formato\n        virtual debido a la pandemia.",
      "category": "¡Nueva Sede!",
      "icon": "code",
      "color": "turquoise"
    }
  }), _vm._ssrNode(" "), _c('vue-timeline-update', {
    attrs: {
      "date": new Date('2020-06-1'),
      "title": "Primera Versión Arduino Quest",
      "description": "Implementamos por primera vez este curso virtual de electrónica con\n        arduino. Consistió en 4 semanas de actividades y trabajo personalizado con mentoras\n        y las niñas que completaron el plan de trabajo recibieron un kit en sus casas para\n        programar sus proyectos personales.",
      "category": "Evento PRO",
      "icon": "code",
      "color": "green"
    }
  }), _vm._ssrNode(" "), _c('vue-timeline-update', {
    attrs: {
      "date": new Date('2020-10-10'),
      "title": "Primera Versión Semana Ada Lovelace",
      "description": "En el 2020 realizamos por primera vez el evento Semana de Ada Lovelace, \n        en el que niñas y mujeres pudieron conocer la historia de Mujeres Pro y participar\n        en talleres de introducción a la programación y la electrónica.",
      "category": "Evento PRO",
      "icon": "code",
      "color": "green"
    }
  }), _vm._ssrNode(" "), _c('vue-timeline-update', {
    attrs: {
      "date": new Date('2020-11-1'),
      "title": "Curso Intensivo de Entrenamiento para la OCI",
      "description": "En el 2020 hicimos un curso de programación específico para reforzar los contenidos\n        avanzados que se evalúan en las diferentes fases de la Olimpiada Chilena de Informática. Dos de \n        las tres niñas que clasificaron en la última fase ¡participaron en los cursos de Niñas Pro!",
      "category": "Evento PRO",
      "icon": "code",
      "color": "green"
    }
  }), _vm._ssrNode(" "), _c('vue-timeline-update', {
    attrs: {
      "date": new Date('2021-03-15'),
      "title": "¡Cumplimos 2 años como Corporación Sin Fines de Lucro!",
      "description": "Hicimos las votaciones de renovación o elección de directorio, celebramos\n        que somos más de 80 voluntaries y que hemos llegado a más de 1900 niñas y adolescentes.",
      "category": "Hito",
      "icon": "code",
      "color": "red",
      "is-last": ""
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Timeline.vue?vue&type=template&id=e6ba2fea&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/Timeline.vue?vue&type=script&lang=js&
/* harmony default export */ var Timelinevue_type_script_lang_js_ = ({
  name: "Timeline"
});
// CONCATENATED MODULE: ./components/Timeline.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Timelinevue_type_script_lang_js_ = (Timelinevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Timeline.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(171)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Timelinevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e6ba2fea",
  "c30673c8"
  
)

/* harmony default export */ var Timeline = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=timeline.js.map