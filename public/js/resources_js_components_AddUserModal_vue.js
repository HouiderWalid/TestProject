(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_AddUserModal_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddUserModal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddUserModal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Axios_instance = axios__WEBPACK_IMPORTED_MODULE_1___default().create({
  baseURL: "http://localhost/api/",
  responseType: 'json',
  headers: {
    'content-type': 'multipart/form-data',
    'X-CSRF-TOKEN': document.querySelector("meta[name='csrf-token']").content
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AddUserModal",
  props: {
    mode: {
      type: Object,
      "default": function _default() {
        return {
          mode: 'add',
          user: null
        };
      }
    }
  },
  data: function data() {
    return {
      avatar_display: '',
      errors: {},
      fields: {}
    };
  },
  methods: {
    showAvatar: function showAvatar(event) {
      var _this = this;

      this.fields['avatar'] = event.target.files[0];
      var fileReader = new FileReader();

      fileReader.onload = function (e) {
        return _this.avatar_display = e.target.result;
      };

      fileReader.readAsDataURL(event.target.files[0]);
    },
    create: function create() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var formData, url, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                formData = new FormData();
                Object.keys(_this2.fields).forEach(function (key) {
                  return formData.append(key, _this2.fields[key]);
                });
                url = _this2.mode.mode === 'add' ? 'user' : 'user/' + _this2.mode.user.id;
                _context.next = 5;
                return Axios_instance.post(url, formData);

              case 5:
                response = _context.sent;
                console.log(response.data);

                if (response && response.data) {
                  if (response.data.code === 200) {
                    _this2.$emit('created', response.data.data);
                  } else if (response.data.code === 401) {
                    _this2.errors = response.data.errors;
                    console.log(_this2.errors['first_name'] !== undefined);
                  } else {// code 500 todo
                  }
                } else console.log('api error');

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  updated: function updated() {
    console.log('updated');
    this.fields = this.mode.user;

    if (!document.querySelector('.modal').classList.contains("show")) {
      if (Object.keys(this.errors).length > 0) this.errors = {};
      if (this.avatar_display !== '') this.avatar_display = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddUserModal.vue?vue&type=style&index=0&id=5d6d1d6c&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddUserModal.vue?vue&type=style&index=0&id=5d6d1d6c&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#avatar + label[data-v-5d6d1d6c] {\n  margin-top: 1.8rem;\n}\n.avatar-uploaded-view[data-v-5d6d1d6c] {\n  height: 150px;\n  text-align: center;\n}\n.avatar-uploaded-view #avatar-img[data-v-5d6d1d6c] {\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddUserModal.vue?vue&type=style&index=0&id=5d6d1d6c&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddUserModal.vue?vue&type=style&index=0&id=5d6d1d6c&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUserModal_vue_vue_type_style_index_0_id_5d6d1d6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUserModal.vue?vue&type=style&index=0&id=5d6d1d6c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddUserModal.vue?vue&type=style&index=0&id=5d6d1d6c&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUserModal_vue_vue_type_style_index_0_id_5d6d1d6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUserModal_vue_vue_type_style_index_0_id_5d6d1d6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/AddUserModal.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/AddUserModal.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddUserModal_vue_vue_type_template_id_5d6d1d6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddUserModal.vue?vue&type=template&id=5d6d1d6c&scoped=true& */ "./resources/js/components/AddUserModal.vue?vue&type=template&id=5d6d1d6c&scoped=true&");
/* harmony import */ var _AddUserModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddUserModal.vue?vue&type=script&lang=js& */ "./resources/js/components/AddUserModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _AddUserModal_vue_vue_type_style_index_0_id_5d6d1d6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddUserModal.vue?vue&type=style&index=0&id=5d6d1d6c&lang=scss&scoped=true& */ "./resources/js/components/AddUserModal.vue?vue&type=style&index=0&id=5d6d1d6c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _AddUserModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddUserModal_vue_vue_type_template_id_5d6d1d6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddUserModal_vue_vue_type_template_id_5d6d1d6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5d6d1d6c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AddUserModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/AddUserModal.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/AddUserModal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUserModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUserModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddUserModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUserModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/AddUserModal.vue?vue&type=style&index=0&id=5d6d1d6c&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/AddUserModal.vue?vue&type=style&index=0&id=5d6d1d6c&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUserModal_vue_vue_type_style_index_0_id_5d6d1d6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUserModal.vue?vue&type=style&index=0&id=5d6d1d6c&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddUserModal.vue?vue&type=style&index=0&id=5d6d1d6c&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/AddUserModal.vue?vue&type=template&id=5d6d1d6c&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/AddUserModal.vue?vue&type=template&id=5d6d1d6c&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUserModal_vue_vue_type_template_id_5d6d1d6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUserModal_vue_vue_type_template_id_5d6d1d6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUserModal_vue_vue_type_template_id_5d6d1d6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUserModal.vue?vue&type=template&id=5d6d1d6c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddUserModal.vue?vue&type=template&id=5d6d1d6c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddUserModal.vue?vue&type=template&id=5d6d1d6c&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddUserModal.vue?vue&type=template&id=5d6d1d6c&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "add-user-modal" }, [
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: _vm.mode.mode + "-user",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "form-row" }, [
                _c("div", { staticClass: "col-md-6 mb-3" }, [
                  _c("label", { attrs: { for: "first_name" } }, [
                    _vm._v("First name")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fields["first_name"],
                        expression: "fields['first_name']"
                      }
                    ],
                    staticClass: "form-control",
                    class: [
                      _vm.errors["first_name"] === undefined ? "" : "is-invalid"
                    ],
                    attrs: {
                      type: "text",
                      placeholder: "first name",
                      id: "first_name"
                    },
                    domProps: { value: _vm.fields["first_name"] },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.fields, "first_name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors["first_name"]
                    ? _c(
                        "div",
                        {
                          staticClass: "invalid-feedback",
                          class: [
                            _vm.errors["first_name"] ? "d-block" : "d-none"
                          ]
                        },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.errors["first_name"][0]) +
                              "\n                            "
                          )
                        ]
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6 mb-3" }, [
                  _c("label", { attrs: { for: "last_name" } }, [
                    _vm._v("Last name")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fields["last_name"],
                        expression: "fields['last_name']"
                      }
                    ],
                    staticClass: "form-control",
                    class: [
                      _vm.errors["last_name"] === undefined ? "" : "is-invalid"
                    ],
                    attrs: {
                      type: "text",
                      placeholder: "last name",
                      id: "last_name"
                    },
                    domProps: { value: _vm.fields["last_name"] },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.fields, "last_name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors["last_name"]
                    ? _c(
                        "div",
                        {
                          staticClass: "invalid-feedback",
                          class: [
                            _vm.errors["last_name"] ? "d-block" : "d-none"
                          ]
                        },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.errors["last_name"][0]) +
                              "\n                            "
                          )
                        ]
                      )
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-row" }, [
                _c("div", { staticClass: "col-md-6 mb-3" }, [
                  _c("label", { attrs: { for: "password" } }, [
                    _vm._v("Password")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fields["password"],
                        expression: "fields['password']"
                      }
                    ],
                    staticClass: "form-control",
                    class: [
                      _vm.errors["password"] === undefined ? "" : "is-invalid"
                    ],
                    attrs: {
                      type: "text",
                      placeholder: "password",
                      id: "password"
                    },
                    domProps: { value: _vm.fields["password"] },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.fields, "password", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors["password"]
                    ? _c(
                        "div",
                        {
                          staticClass: "invalid-feedback",
                          class: [_vm.errors["password"] ? "d-block" : "d-none"]
                        },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.errors["password"][0]) +
                              "\n                            "
                          )
                        ]
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6 mb-3" }, [
                  _c("label", { attrs: { for: "password_confirmation" } }, [
                    _vm._v("Password Confirmation")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fields["password_confirmation"],
                        expression: "fields['password_confirmation']"
                      }
                    ],
                    staticClass: "form-control",
                    class: [
                      _vm.errors["password"] === undefined ? "" : "is-invalid"
                    ],
                    attrs: {
                      type: "text",
                      placeholder: "password confirmation",
                      id: "password_confirmation"
                    },
                    domProps: { value: _vm.fields["password_confirmation"] },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.fields,
                          "password_confirmation",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors["password"]
                    ? _c(
                        "div",
                        {
                          staticClass: "invalid-feedback",
                          class: [_vm.errors["password"] ? "d-block" : "d-none"]
                        },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.errors["password"][0]) +
                              "\n                            "
                          )
                        ]
                      )
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-row" }, [
                _c("div", { staticClass: "col-md-6 mb-3" }, [
                  _c("label", { attrs: { for: "email" } }, [_vm._v("Email")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fields["email"],
                        expression: "fields['email']"
                      }
                    ],
                    staticClass: "form-control",
                    class: [
                      _vm.errors["email"] === undefined ? "" : "is-invalid"
                    ],
                    attrs: { type: "text", placeholder: "email", id: "email" },
                    domProps: { value: _vm.fields["email"] },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.fields, "email", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors["email"]
                    ? _c(
                        "div",
                        {
                          staticClass: "invalid-feedback",
                          class: [_vm.errors["email"] ? "d-block" : "d-none"]
                        },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.errors["email"][0]) +
                              "\n                            "
                          )
                        ]
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6 mb-3" }, [
                  _c("div", [_vm._v("Avatar")]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "custom-file-input",
                    class: [
                      _vm.errors["avatar"] === undefined ? "" : "is-invalid"
                    ],
                    staticStyle: { "margin-bottom": "12px" },
                    attrs: { type: "file", id: "avatar" },
                    on: { change: _vm.showAvatar }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "custom-file-label",
                      attrs: { for: "avatar" }
                    },
                    [_vm._v("Choose file...")]
                  ),
                  _vm._v(" "),
                  _vm.errors["avatar"]
                    ? _c(
                        "div",
                        {
                          staticClass: "invalid-feedback",
                          class: [_vm.errors["avatar"] ? "d-block" : "d-none"]
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.errors["avatar"][0]) +
                              "\n                            "
                          )
                        ]
                      )
                    : _vm._e()
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "avatar-uploaded-view p2" }, [
              _c("img", {
                attrs: { id: "avatar-img", src: _vm.avatar_display, alt: "" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [_vm._v("Close")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "button" },
                  on: { click: _vm.create }
                },
                [_vm._v("Save changes")]
              )
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Modal title")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);