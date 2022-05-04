"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Home.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Home.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _popUps_Popup_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popUps/Popup.vue */ "./resources/js/components/popUps/Popup.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    var popupTriggers = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)({
      buttonTrigger: false
    });

    var TogglePopup = function TogglePopup(trigger) {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    return {
      Popup: _popUps_Popup_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      popupTriggers: popupTriggers,
      TogglePopup: TogglePopup
    };
  },
  data: function data() {
    return {
      nombre: "",
      correo: "",
      numero: "",
      file: null,
      fileName: ""
    };
  },
  methods: {
    onchange: function onchange(e) {
      var _this = this;

      console.log("selected File", e.target.files[0]);
      this.file = e.target.files[0];
      var fd = new FormData();
      fd.append("file", this.file);
      this.axios.post('/upload-cv', fd).then(function (response) {
        console.log(response, "Archivo cargado");
        _this.fileName = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    bolsaTrabajo: function bolsaTrabajo() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var bolsaT;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                bolsaT = {
                  nombre: _this2.nombre,
                  correo: _this2.correo,
                  numero: _this2.numero,
                  fileName: _this2.fileName
                };
                _context.next = 3;
                return _this2.axios.post('/upload-file', bolsaT).then(function (response) {
                  alert('Hemos recibido tu Curriculum. Lo revisaremos y nos pondremos en contacto contigo');
                })["catch"](function (error) {
                  console.log(error);
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _videos_video1_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../videos/video1.gif */ "./resources/js/videos/video1.gif");
/* harmony import */ var _videos_video2_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../videos/video2.gif */ "./resources/js/videos/video2.gif");
/* harmony import */ var _images_carusel_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/carusel_3.jpg */ "./resources/js/images/carusel_3.jpg");
/* harmony import */ var _images_carusel_4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/carusel_4.jpg */ "./resources/js/images/carusel_4.jpg");
/* harmony import */ var _images_carusel_5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/carusel_5.jpg */ "./resources/js/images/carusel_5.jpg");
/* harmony import */ var _images_carusel_6_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/carusel_6.jpg */ "./resources/js/images/carusel_6.jpg");
/* harmony import */ var _images_foto1_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/foto1.jpg */ "./resources/js/images/foto1.jpg");
/* harmony import */ var _images_foto2_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/foto2.jpg */ "./resources/js/images/foto2.jpg");
/* harmony import */ var _images_foto3_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/foto3.jpg */ "./resources/js/images/foto3.jpg");
/* harmony import */ var _images_cobertura_amplia_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/cobertura_amplia.jpg */ "./resources/js/images/cobertura_amplia.jpg");
/* harmony import */ var _images_cobertura_da_ter_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/cobertura_da_ter.jpg */ "./resources/js/images/cobertura_da_ter.jpg");













var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "row"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "coll"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card abcard"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "carouselExampleControls",
  "class": "carousel slide",
  "data-bs-ride": "carousel"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "carousel-inner carousel-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "carousel-item active"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _videos_video1_gif__WEBPACK_IMPORTED_MODULE_1__["default"],
  "class": "w-100",
  alt: "#"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "carousel-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _videos_video2_gif__WEBPACK_IMPORTED_MODULE_2__["default"],
  "class": "w-100",
  alt: "#"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "carousel-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _images_carusel_3_jpg__WEBPACK_IMPORTED_MODULE_3__["default"],
  "class": "w-100",
  alt: "#"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "carousel-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _images_carusel_4_jpg__WEBPACK_IMPORTED_MODULE_4__["default"],
  "class": "w-100",
  alt: "#"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "carousel-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _images_carusel_5_jpg__WEBPACK_IMPORTED_MODULE_5__["default"],
  "class": "w-100",
  alt: "#"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "carousel-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _images_carusel_6_jpg__WEBPACK_IMPORTED_MODULE_6__["default"],
  "class": "w-100",
  alt: "#"
})])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExampleControls\" data-bs-slide=\"prev\">\r\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"visually-hidden\">Previous</span>\r\n  </button>\r\n  <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExampleControls\" data-bs-slide=\"next\">\r\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"visually-hidden\">Next</span>\r\n  </button> ")], -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "colr"
};
var _hoisted_6 = {
  "class": "card"
};
var _hoisted_7 = {
  "class": "card-body"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "short-w"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Cotiza tu seguro en Línea"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  style: {
    "color": "aliceblue"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" - Diferible hasta a 10 meses."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" - 5% descuento si su pago mensual es mediante depósito o transferencia."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" - 12% si el pago es de contado. ")])], -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": ""
};
var _hoisted_10 = {
  "class": "form1"
};
var _hoisted_11 = {
  "class": "data-user w-100"
};
var _hoisted_12 = {
  "class": "mb-3 thrid"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mb-3 w-100 info-user"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mb-3 thrid"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "btn btn-primary",
  onclick: "mialerta();",
  href: "https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D523310899624%26app%3Dfacebook%26entry_point%3Dpage_cta%26fbclid%3DIwAR026Z6h52OzrnLoWiIlNrzUVLGddt8EE0lNgXxykiclIDwV-Io-eE0IPcU&h=AT2je-pmkwHeJkucBplfNGTAXYYxEgbWR8tLThlNHhkaPG-PPQY-NCSFeg2u3DrFcDVW808RLpHLxcbfmU28sBaJ7a2NkI_eDWnxrQC4FfVGeOpcNoy_vUB8DakPqi6tW0VqCDy07OkoUOi-KrwL8mrZTr9KMJ_0JQ",
  role: "button",
  "data-mdb-ripple-color": "dark",
  target: "_blank"
}, " Cobertura Amplia ")])], -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "career-atn"
};
var _hoisted_15 = {
  "class": "career bg-r"
};
var _hoisted_16 = {
  "class": "card-body"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Unete a nuestro equipo de ventas! Compartenos tus datos y CV", -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "row g-3 align-items-center"
};
var _hoisted_19 = {
  "class": "col-auto w-100"
};
var _hoisted_20 = {
  "class": "row g-3 align-items-center"
};
var _hoisted_21 = {
  "class": "col-auto w-100"
};
var _hoisted_22 = {
  "class": "row g-3 align-items-center"
};
var _hoisted_23 = {
  "class": "col-auto w-100"
};
var _hoisted_24 = {
  "class": "row g-3 align-items-center"
};
var _hoisted_25 = {
  "class": "col-auto w-100"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  style: {
    "margin-top": "1rem"
  },
  type: "submit",
  "class": "btn btn-primary",
  placeholder: "Adjunta tu CV"
}, "Enviar", -1
/* HOISTED */
);

var _hoisted_27 = {
  "class": "atn bg-r"
};
var _hoisted_28 = {
  "class": "card-body servs"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "carouselExampleControls",
  "class": "carousel slide",
  "data-bs-ride": "carousel"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "carousel-inner"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "SERVICIOS ATENDIDOS"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "carousel-item active"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _images_foto1_jpg__WEBPACK_IMPORTED_MODULE_7__["default"],
  "class": "w-100",
  alt: "#"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "carousel-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _images_foto2_jpg__WEBPACK_IMPORTED_MODULE_8__["default"],
  "class": "w-100",
  alt: "#"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "carousel-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _images_foto3_jpg__WEBPACK_IMPORTED_MODULE_9__["default"],
  "class": "w-100",
  alt: "#"
})])])], -1
/* HOISTED */
);

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_31 = {
  "class": "row py-md-5 m-0 bg-r"
};
var _hoisted_32 = {
  "class": "col-12 col-md-6 ps-md-5 py-1 order-2 order-md-1 altx"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Cobertura Amplia", -1
/* HOISTED */
);

var _hoisted_35 = {
  "class": "text-start"
};
var _hoisted_36 = {
  "class": "my-4"
};

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  Todo lo señalado en la cobertura Daños a Terceros. ");

var _hoisted_38 = {
  "class": "my-4"
};

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  Robo o Perdida de su Vehículo. ");

var _hoisted_40 = {
  "class": "my-4"
};

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  Daños Materiales. ");

var _hoisted_42 = {
  "class": "my-4"
};

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  Gastos Médicos a Ocupantes Vehículo. ");

var _hoisted_44 = {
  "class": "my-4"
};

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  2 Servicios de Grua. ");

var _hoisted_46 = {
  "class": "my-4"
};

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  Daños a los Cristales. ");

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-12 col-md-6 pe-md-5 my-autoorder-1 order-md-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _images_cobertura_amplia_jpg__WEBPACK_IMPORTED_MODULE_10__["default"],
  alt: "carro",
  "class": "m-auto img-fluid my-md-4"
})], -1
/* HOISTED */
);

var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_50 = {
  "class": "row py-md-5 m-0 bg-r"
};
var _hoisted_51 = {
  "class": "col-12 col-md-6 ps-md-5 py-1 order-2 order-md-1 altx"
};

var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Cobertura Daños a Terceros", -1
/* HOISTED */
);

var _hoisted_54 = {
  "class": "text-start"
};
var _hoisted_55 = {
  "class": "my-4"
};

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  Daños a Terceros. ");

var _hoisted_57 = {
  "class": "my-4"
};

var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  Lesiones y daños. ");

var _hoisted_59 = {
  "class": "my-4"
};

var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  Pago de Fianza SIN Limite. ");

var _hoisted_61 = {
  "class": "my-4"
};

var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  El tramite de inmediato de amparo para evitar que usted sea detenido. ");

var _hoisted_63 = {
  "class": "my-4"
};

var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  Los tramites administrativos y judiciales para la devolución de su vehículo. ");

var _hoisted_65 = {
  "class": "my-4"
};

var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  Si usted es culpable pagamos los daños ocasionados a terceros. ");

var _hoisted_67 = {
  "class": "my-4"
};

var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  Si usted es afectado reclamamos reparación de los daños de su vehículo. ");

var _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-12 col-md-6 pe-md-5 my-autoorder-1 order-md-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _images_cobertura_da_ter_jpg__WEBPACK_IMPORTED_MODULE_11__["default"],
  alt: "carro",
  "class": "m-auto img-fluid my-md-4"
})], -1
/* HOISTED */
);

var _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Popup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Popup");

  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_font_awesome_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("font-awesome-icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_hoisted_1, $setup.popupTriggers.buttonTrigger ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Popup, {
    key: 0,
    TogglePopup: function TogglePopup() {
      return $setup.TogglePopup('buttonTrigger');
    }
  }, null, 8
  /* PROPS */
  , ["TogglePopup"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    onClick: _cache[0] || (_cache[0] = function () {
      return $setup.TogglePopup('buttonTrigger');
    }),
    "class": "btn btn-primary"
  }, "Daños a Terceros")])]), _hoisted_13])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[5] || (_cache[5] = function () {
      return $options.bolsaTrabajo && $options.bolsaTrabajo.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "inputPassword6",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.nombre = $event;
    }),
    "class": "form-control form-control-sm",
    "aria-describedby": "passwordHelpInline",
    placeholder: "Nombre"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.nombre]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "email",
    id: "inputPassword6",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.correo = $event;
    }),
    "class": "form-control form-control-sm",
    "aria-describedby": "passwordHelpInline",
    placeholder: "Correo"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.correo]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    id: "inputPassword6",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.numero = $event;
    }),
    "class": "form-control form-control-sm",
    "aria-describedby": "passwordHelpInline",
    placeholder: "Número"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.numero]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "file",
    "class": "form-control form-control-sm file-input",
    onChange: _cache[4] || (_cache[4] = function () {
      return $options.onchange && $options.onchange.apply($options, arguments);
    }),
    id: "formFileSm"
  }, null, 32
  /* HYDRATE_EVENTS */
  )])]), _hoisted_26], 32
  /* HYDRATE_EVENTS */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "exact-active-class": "active",
    to: "/servicios",
    "class": "serv"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_29];
    }),
    _: 1
    /* STABLE */

  })])])])])]), _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_font_awesome_icon, {
    icon: "circle-check"
  }), _hoisted_37]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_font_awesome_icon, {
    icon: "circle-check"
  }), _hoisted_39]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_font_awesome_icon, {
    icon: "circle-check"
  }), _hoisted_41]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_font_awesome_icon, {
    icon: "circle-check"
  }), _hoisted_43]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_font_awesome_icon, {
    icon: "circle-check"
  }), _hoisted_45]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_font_awesome_icon, {
    icon: "circle-check"
  }), _hoisted_47])])]), _hoisted_48]), _hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [_hoisted_52, _hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_font_awesome_icon, {
    icon: "circle-check"
  }), _hoisted_56]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_font_awesome_icon, {
    icon: "circle-check"
  }), _hoisted_58]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_font_awesome_icon, {
    icon: "circle-check"
  }), _hoisted_60]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_font_awesome_icon, {
    icon: "circle-check"
  }), _hoisted_62]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_font_awesome_icon, {
    icon: "circle-check"
  }), _hoisted_64]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_font_awesome_icon, {
    icon: "circle-check"
  }), _hoisted_66]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_font_awesome_icon, {
    icon: "circle-check"
  }), _hoisted_68])])]), _hoisted_69]), _hoisted_70], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/images/carusel_3.jpg":
/*!*******************************************!*\
  !*** ./resources/js/images/carusel_3.jpg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/carusel_3.jpg?7aca55e651b0a5670a153ee195051ca5");

/***/ }),

/***/ "./resources/js/images/carusel_4.jpg":
/*!*******************************************!*\
  !*** ./resources/js/images/carusel_4.jpg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/carusel_4.jpg?156e3d030ecc041672fca2c2b109093a");

/***/ }),

/***/ "./resources/js/images/carusel_5.jpg":
/*!*******************************************!*\
  !*** ./resources/js/images/carusel_5.jpg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/carusel_5.jpg?ff5a5e22a1d41cc4d06954078033f638");

/***/ }),

/***/ "./resources/js/images/carusel_6.jpg":
/*!*******************************************!*\
  !*** ./resources/js/images/carusel_6.jpg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/carusel_6.jpg?9619306a0d340dd6a301f1d8852b15e1");

/***/ }),

/***/ "./resources/js/images/cobertura_amplia.jpg":
/*!**************************************************!*\
  !*** ./resources/js/images/cobertura_amplia.jpg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/cobertura_amplia.jpg?4192762cba6c8a54c1ca16f428630e4c");

/***/ }),

/***/ "./resources/js/images/cobertura_da_ter.jpg":
/*!**************************************************!*\
  !*** ./resources/js/images/cobertura_da_ter.jpg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/cobertura_da_ter.jpg?b05df33849e6df45ec0006ad24078c6d");

/***/ }),

/***/ "./resources/js/images/foto1.jpg":
/*!***************************************!*\
  !*** ./resources/js/images/foto1.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/foto1.jpg?dc0fb641fb327b337aaccef75be3aaae");

/***/ }),

/***/ "./resources/js/images/foto2.jpg":
/*!***************************************!*\
  !*** ./resources/js/images/foto2.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/foto2.jpg?1951299ee279d3d32a526e7bd8b0c62a");

/***/ }),

/***/ "./resources/js/images/foto3.jpg":
/*!***************************************!*\
  !*** ./resources/js/images/foto3.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/foto3.jpg?058321976f53f5dd7c4e4ede9e21888b");

/***/ }),

/***/ "./resources/js/videos/video1.gif":
/*!****************************************!*\
  !*** ./resources/js/videos/video1.gif ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/video1.gif?b5e78dcf5f9db498db2dec28f1706fbc");

/***/ }),

/***/ "./resources/js/videos/video2.gif":
/*!****************************************!*\
  !*** ./resources/js/videos/video2.gif ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/video2.gif?d7a3e64a01878a092ee42ea47e70c6c1");

/***/ }),

/***/ "./resources/js/components/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Home.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_f2b6376c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=f2b6376c */ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c");
/* harmony import */ var _Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js */ "./resources/js/components/Home.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_rogex_Desktop_httseguros_HTTSeguros_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_rogex_Desktop_httseguros_HTTSeguros_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Home_vue_vue_type_template_id_f2b6376c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Home.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Home.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c":
/*!************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=template&id=f2b6376c ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_f2b6376c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_f2b6376c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=template&id=f2b6376c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c");


/***/ })

}]);