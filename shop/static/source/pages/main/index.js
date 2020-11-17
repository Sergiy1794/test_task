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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../components/common_componentc/box_info/index.js":
/*!*********************************************************!*\
  !*** ../components/common_componentc/box_info/index.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/box_info/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/common_componentc/box_info/index.scss":
/*!***********************************************************!*\
  !*** ../components/common_componentc/box_info/index.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/common_componentc/breadcrumbs/index.js":
/*!************************************************************!*\
  !*** ../components/common_componentc/breadcrumbs/index.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/breadcrumbs/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/common_componentc/breadcrumbs/index.scss":
/*!**************************************************************!*\
  !*** ../components/common_componentc/breadcrumbs/index.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/common_componentc/footer/index.js":
/*!*******************************************************!*\
  !*** ../components/common_componentc/footer/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/footer/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

$('.navbar_footer').find('.header').on('click', function () {
  if (!$(this).parents('.navbar_footer').hasClass('active')) {
    $(this).parents('.navbar_footer').addClass('active');
  } else {
    $(this).parents('.navbar_footer').removeClass('active');
  }
});

/***/ }),

/***/ "../components/common_componentc/footer/index.scss":
/*!*********************************************************!*\
  !*** ../components/common_componentc/footer/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/common_componentc/header/index.js":
/*!*******************************************************!*\
  !*** ../components/common_componentc/header/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/header/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


select_main_menu(document.getElementsByClassName("dropdown"));

function select_main_menu(_ref) {
  var _ref2 = _toArray(_ref),
      item = _ref2.slice(0);

  item.map(function (item) {
    $(item).on("mouseenter", function () {
      item.getElementsByClassName("dropdown-menu")[0].classList.add("show");
    });
    $(item).on("mouseleave", function () {
      item.getElementsByClassName("dropdown-menu")[0].classList.remove("show");
    });
  });
}

$(".acounts").on("click", function () {
  console.log($(this));

  if (!$(this).hasClass("active")) {
    $(".acounts_login").addClass("active");
    $(this).addClass("active");
  } else {// if(!$(this).parents('.acounts_modal').length>0){
    //   $(".acounts_form").removeClass("active");
    //   $(this).removeClass("active");
    // }
  }
});
$(".btn-new_user").on("click", function (event) {
  event.preventDefault();
  $(".acounts_form").removeClass("active");
  $(".acounts_register").addClass("active");
});
$(".btn-login_user").on("click", function (event) {
  event.preventDefault();
  $(".acounts_form").removeClass("active");
  $(".acounts_login").addClass("active");
});
$(document).mouseup(function (e) {
  var acounts_modal = $(e.target).parents(".acounts_modal "); // тут указываем класс элемента

  if (acounts_modal.length < 1) {
    $(".acounts_modal").removeClass("active");
    $(".acounts").removeClass("active");
    $(".acounts_form").removeClass("active");
  }

  var acounts_modal = $(e.target).parents(".search "); // тут указываем класс элемента

  if (acounts_modal.length < 1) {
    $(".search").removeClass("active");
  }
});
$(".search_icon").on("click", function () {
  if ($(this).parents(".search").hasClass("active")) {
    if ($(this).parents(".search")[0].querySelector("input").value === "") {
      $(this).parents(".search").removeClass("active");
    } else {
      var querySearch = $(this).parents(".search")[0].querySelector("input").value;
      sessionStorage.setItem("search_question", querySearch);
      location.href = "/search/?q=".concat(querySearch);
    }
  } else {
    $(this).parents(".search").addClass("active");
  }
});
$(".btn-search_icon").on("click", function () {
  if ($(this).parents(".search_mobil")[0].querySelector("input").value !== "") {
    var querySearch = $(this).parents(".search_mobil")[0].querySelector("input").value;
    sessionStorage.setItem("search_question", querySearch);
    location.href = "/search/?q=".concat(querySearch);
  }
});
$(".search_mobil_input").on("keydown", function (e) {
  if ($(this).val() !== "" && e.keyCode === 13) {
    e.preventDefault();
    sessionStorage.setItem("search_question", $(this).val());
    location.href = "/search/?q=".concat($(this).val());
  }
});
$(".search_field").on("keydown", function (e) {
  if ($(this).val() !== "" && e.keyCode === 13) {
    e.preventDefault();
    sessionStorage.setItem("search_question", $(this).val());
    location.href = "/search/?q=".concat($(this).val());
  }
});
$(".burger").on("click", function (e) {
  if ($(".burger").hasClass("active")) {
    $(".burger").removeClass("active");
    $(".navbar_mobile").removeClass("active");
    $(".main_background").removeClass("show");
    $("body").removeClass("body-overflow");
  } else {
    $(".burger").addClass("active");
    $(".navbar_mobile").addClass("active");
    $(".main_background").addClass("show");
    $("body").addClass("body-overflow");
  }
});
mobil_navbar(".navbar_mobile");

function mobil_navbar(navbar) {
  var menu_input = _toConsumableArray($(navbar).find(".nav-item"));

  menu_input.map(function (item) {
    if ($(item).children(".main").length > 0) {
      $(item).children(".header").on("click", function () {
        $(navbar).find(".nav-item").removeClass("active");
        $(item).addClass("active");
      });
    }
  });
}

/***/ }),

/***/ "../components/common_componentc/header/index.scss":
/*!*********************************************************!*\
  !*** ../components/common_componentc/header/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/common_componentc/normalize/index.js":
/*!**********************************************************!*\
  !*** ../components/common_componentc/normalize/index.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/normalize/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/common_componentc/normalize/index.scss":
/*!************************************************************!*\
  !*** ../components/common_componentc/normalize/index.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/button/index.js":
/*!***********************************************!*\
  !*** ../components/interface/button/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/button/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


$('.btn-lean_more').on('mouseenter', function () {
  $(this).addClass('is-focus-over');
  $(this).removeClass('is-focus-out');
});
$('.btn-lean_more').on('mouseleave', function () {
  $(this).addClass('is-focus-out');
  $(this).removeClass('is-focus-over');
});

_toConsumableArray($('.btn-black')).map(function (item) {
  var current_width = $(item)[0].offsetWidth;
  console.log(current_width);
  $(item).css('width', "".concat(current_width, "px"));
});

_toConsumableArray($('.btn-yelow')).map(function (item) {
  var current_width = $(item)[0].offsetWidth;
  console.log(current_width);
  $(item).css('width', "".concat(current_width, "px"));
}); //  $('.burger').on('click',function(){
//      $(this).toggleClass('active')
//  })

/***/ }),

/***/ "../components/interface/button/index.scss":
/*!*************************************************!*\
  !*** ../components/interface/button/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/form/elements/all_elements.js":
/*!*************************************************************!*\
  !*** ../components/interface/form/elements/all_elements.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "../components/interface/form/elements/input/index.js");
/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textarea */ "../components/interface/form/elements/textarea/index.js");
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radio */ "../components/interface/form/elements/radio/index.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list */ "../components/interface/form/elements/list/index.js");
// # import всіх елементів в формі:
// # INPUT "при наведені на текст він піднімається"
// # list список такий як в брифі
// # texaria 





/***/ }),

/***/ "../components/interface/form/elements/input/index.js":
/*!************************************************************!*\
  !*** ../components/interface/form/elements/input/index.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/form/elements/input/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var field_inputs = $('.input-field');

if (field_inputs.length > 0) {
  field_inputs.on('focus', function () {
    $(this).parents('.input').addClass('in-focus');
    $(this).parents('.input').removeClass('is-error');
  });
  field_inputs.on('blur', function () {
    if ($(this).val().length < 1 || $(this).val() == '+38(___) ___-____') {
      $(this).parents('.input').removeClass('in-focus');
    }
  });
  $('.form__group_label').on('click', function () {
    $(this).parents('.input').toggleClass('in-focus');
  }); // console.log(field_inputs );

  for (var key in field_inputs) {
    if (field_inputs.hasOwnProperty(key) && _typeof(field_inputs[key]) == 'object') {
      var input = field_inputs[key]; // console.log($(input).val().length );

      if ($(input).val().length > 1) {
        $(input).parents('.input').addClass('in-focus');
      } else {
        $(input).parents('.input').removeClass('in-focus');
      }
    }
  }
}

/***/ }),

/***/ "../components/interface/form/elements/input/index.scss":
/*!**************************************************************!*\
  !*** ../components/interface/form/elements/input/index.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/form/elements/list/index.js":
/*!***********************************************************!*\
  !*** ../components/interface/form/elements/list/index.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/form/elements/list/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

$('.form_box__item').on('click', function () {
  $(this).toggleClass('form_box__item-active');
  var item_input = $(this).find('input');

  if (item_input.prop('checked') == true) {
    item_input.prop('checked', false);
  } else {
    item_input.prop('checked', true);
  }

  var form_box__header = $(this).parents('.form_box').find('.form_box__header');
  var box_item = $(this).parents('.form_box__main').find('.form_box__item');

  if (box_item.length > 0) {
    var count_item_active = 0;

    for (var key in box_item) {
      if (box_item.hasOwnProperty(key)) {
        if ($(box_item[key]).hasClass('form_box__item') && $(box_item[key]).hasClass('form_box__item-active')) {
          count_item_active++;
        }
      }
    }

    if (count_item_active == box_item.length) {
      form_box__header.addClass('form_box__header-active');
    } else {
      form_box__header.removeClass('form_box__header-active');
    }
  }
});
$('.form_box__header').on('click', function () {
  var this_box = $(this);
  $(this).toggleClass('form_box__header-active');
  var item_input = $(this).find('.form_box__header-input');

  if (item_input.length > 0) {
    if (item_input.prop('checked') == true) {
      item_input.prop('checked', false);
    } else {
      item_input.prop('checked', true);
    }

    var box_item = $(this).parents('.form_box').find('.form_box__main').find('.form_box__item');

    if (box_item.length > 0) {
      Object.values(box_item).reduce(function (previousValue, currentItem, index, arr) {
        if ($(currentItem).hasClass('form_box__item')) {
          if (this_box.hasClass('form_box__header-active')) {
            console.log("step1");

            if (!$(currentItem).hasClass('form_box__item-active')) {
              console.log("step1");
              $(currentItem).addClass('form_box__item-active');

              var _item_input = $(currentItem).find('input');

              _item_input.prop('checked', true);
            }
          } else {
            console.log("step2");

            if ($(currentItem).hasClass('form_box__item-active')) {
              console.log($(currentItem));
              $(currentItem).removeClass('form_box__item-active');

              var _item_input2 = $(currentItem).find('input');

              _item_input2.prop('checked', false);
            }
          }
        }
      }, 0);
    }
  }
});

/***/ }),

/***/ "../components/interface/form/elements/list/index.scss":
/*!*************************************************************!*\
  !*** ../components/interface/form/elements/list/index.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/form/elements/radio/index.js":
/*!************************************************************!*\
  !*** ../components/interface/form/elements/radio/index.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/form/elements/radio/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

$('.radio_group__header').on('click', function () {
  delete_load_file();

  if ($(this).hasClass('type_logo_radio_group__header')) {
    $(this).parent('.radio_group-check').toggleClass('is-active');
  } else if (!$(this).parent('.radio_group-check').hasClass('is-active')) {
    var change_chack = $(this).parent('.radio_group-check').data('chenge');
    $('.change_chack').val(change_chack);
    $(this).parents('.form_container__main').find('.radio_group-check').removeClass('is-active');
    $(this).parent('.radio_group-check').addClass('is-active');
  }
});
$('.form_file_load').on('click', function () {
  event.preventDefault();
  $('#file_logo__life').trigger('click');
  var dropArea = event.target;
  ;
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function (eventName) {
    dropArea.addEventListener(eventName, preventDefaults, false);
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  } // начало перетаскивания


  ;
  ['dragenter', 'dragover'].forEach(function (eventName) {
    dropArea.addEventListener(eventName, highlight, false);
  });
  ['dragleave', 'drop'].forEach(function (eventName) {
    dropArea.addEventListener(eventName, unhighlight, false);
  });

  function highlight(e) {
    dropArea.classList.add('highlight');
  }

  function unhighlight(e) {
    dropArea.classList.remove('highlight');
  } // конец перетаскивания
  // Загрузка файла


  dropArea.addEventListener('drop', handleDrop, false);

  function handleDrop(e) {
    var dt = e.dataTransfer;
    var files = dt.files;
    document.getElementById("file_logo__life").files = files;

    for (var i = 0; i < files.length; i++) {
      var file = files.item(i);
      var FileUploadPath = file.name;
      var Extension = FileUploadPath.substring(FileUploadPath.lastIndexOf('.') + 1).toLowerCase();
      var allowedExtensions = ['jpeg', 'jpg', 'png', 'psd', 'pdf', 'zip', 'rar'];
      var is_type_ok = contains(allowedExtensions, Extension);

      if (is_type_ok) {
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function (e) {
          load_file(file.name);
        };
      } else {
        alert('File format is not supported');
      }
    }
  } // Кінець загрузки файла

});

if (document.getElementById('file_logo__life') != null) {
  document.getElementById('file_logo__life').addEventListener('change', function () {
    if (this.value) {
      console.log(this.value);
      var FileUploadPath = this.value;
      var Extension = FileUploadPath.substring(FileUploadPath.lastIndexOf('.') + 1).toLowerCase();
      var allowedExtensions = ['jpeg', 'jpg', 'png', 'psd', 'pdf', 'zip', 'rar'];
      var is_type_ok = contains(allowedExtensions, Extension);

      if (is_type_ok) {
        load_file(this.files[0].name);
      } else {
        alert('File format is not supported');
      }
    }
  });
}

function contains(arr, elem) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      return true;
    }
  }

  return false;
}

function load_file(fail_name) {
  var cout_cahr = 15;
  var checbox = document.getElementsByClassName('radio_group-check is-active');
  var form_file_load = checbox[0].querySelectorAll('.form_file_load');
  var form_file_downloads = checbox[0].querySelectorAll('.form_file_downloads');
  var name__file = form_file_downloads[0].querySelectorAll('.text');
  form_file_load[0].classList.add('hidden');
  fail_name = fail_name.length > cout_cahr ? "".concat(fail_name.slice(0, cout_cahr), "...") : fail_name;
  name__file[0].textContent = fail_name;
  form_file_downloads[0].classList.remove('hidden');
  form_file_downloads[0].addEventListener('click', function () {
    delete_load_file();
  });
}

function delete_load_file() {
  $('#file_logo__life').val('');
  var checbox = document.getElementsByClassName('radio_group-check is-active');
  var form_file_load = checbox[0].querySelectorAll('.form_file_load');
  var form_file_downloads = checbox[0].querySelectorAll('.form_file_downloads');

  if (form_file_downloads.length > 0) {
    form_file_downloads[0].classList.add('hidden');
    form_file_load[0].classList.remove('hidden');
  }
}

/***/ }),

/***/ "../components/interface/form/elements/radio/index.scss":
/*!**************************************************************!*\
  !*** ../components/interface/form/elements/radio/index.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/form/elements/textarea/index.js":
/*!***************************************************************!*\
  !*** ../components/interface/form/elements/textarea/index.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/form/elements/textarea/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var field_inputs = $('.textarea-field');

if (field_inputs.length > 0) {
  field_inputs.on('focus', function () {
    $(this).parents('.textarea').addClass('in-focus');
    $(this).parents('.textarea').removeClass('is-error');
  });
  field_inputs.on('blur', function () {
    if ($(this).val().length < 1 || $(this).val() == '+38(___) ___-____') {
      $(this).parents('.textarea').removeClass('in-focus');
    }
  });
  $('.form__group_label').on('click', function () {
    $(this).parents('.textarea').toggleClass('in-focus');
  }); // console.log(field_inputs );

  for (var key in field_inputs) {
    if (field_inputs.hasOwnProperty(key) && _typeof(field_inputs[key]) == 'object') {
      var input = field_inputs[key]; // console.log($(input).val().length );

      if ($(input).val().length > 1) {
        $(input).parents('.textarea').addClass('in-focus');
      } else {
        $(input).parents('.textarea').removeClass('in-focus');
      }
    }
  }
}

/***/ }),

/***/ "../components/interface/form/elements/textarea/index.scss":
/*!*****************************************************************!*\
  !*** ../components/interface/form/elements/textarea/index.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/form/form_grid.scss":
/*!***************************************************!*\
  !*** ../components/interface/form/form_grid.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/form/index.js":
/*!*********************************************!*\
  !*** ../components/interface/form/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/form/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_all_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/all_elements */ "../components/interface/form/elements/all_elements.js");
/* harmony import */ var _form_grid_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form_grid.scss */ "../components/interface/form/form_grid.scss");
/* harmony import */ var _form_grid_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_form_grid_scss__WEBPACK_IMPORTED_MODULE_2__);




if ($('input[type="tel"]').length > 0) {
  $('input[type="tel"]').mask("+38(099) 999-9999");
}

/***/ }),

/***/ "../components/interface/form/index.scss":
/*!***********************************************!*\
  !*** ../components/interface/form/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/grid/index.js":
/*!*********************************************!*\
  !*** ../components/interface/grid/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/grid/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/interface/grid/index.scss":
/*!***********************************************!*\
  !*** ../components/interface/grid/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/module/form_errors/index.js":
/*!*************************************************!*\
  !*** ../components/module/form_errors/index.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/module/form_errors/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
 // import {check_operator} from './../mob_operator/index';
// let array_oper_number = [39, 50, 63, 66, 67, 68, 73, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99, 44];
// let array_error = check_operator(array_oper_number);

$(function () {
  Onload();
});
/**
 * valide_form - Валідація форм
 * @param {selector form} ID Форми на яку підвішують валідацію
 * @param {class name} class групи куди виводять помилки
 * @param {bull} true Чи виводи вспливайку пісял відповіді ajax
 *
 **/

function Onload() {
  // valide_form('#brief_st', '.input', false);
  // valide_form('#contacts', '.input', true);
  // valide_form('#feedback_smal', '.input', true);
  // valide_form('#contacts', '.input', true);
  valide_form("#form_info_question", ".input", true);
  console.log("form_info_question");
}

function location_leng() {
  return location.pathname.split("/")[1];
}

function valide_form(id_form, append_error_box, check_request) {
  var check_request = check_request;

  if ($(id_form).length > 0) {
    var lang_site;
    var errore_text = {};
    lang_site = location_leng();

    switch (lang_site) {
      case "uk":
        errore_text.required = "Поле обов'язково для заповнення";
        errore_text.email = "Поле має містити email";
        errore_text.rating = "Оцінка товару є обов'язкова";
        break;

      case "ru":
        errore_text.required = "Поле обязательно для заполнения";
        errore_text.email = "Поле должно содержать email";
        errore_text.rating = "Оценка товара является обязательная";
        break;

      case "en":
        errore_text.required = "The field is required";
        errore_text.email = "The field must contain an email";
        errore_text.rating = "Evaluation of the goods is required";
        break;

      default:
        errore_text.required = "Поле обов'язково для заповнення";
        errore_text.email = "Поле має містити email";
        errore_text.rating = "Оцінка товару є обов'язкова";
    }

    $(id_form).validate({
      errorPlacement: function errorPlacement(event, validator) {
        $(validator).parents(append_error_box).append($(event));
        $(validator).parents(append_error_box).addClass("is-error");
      },
      ignore: "not:hidden.product_rating",
      rules: {
        name: {
          required: true
        },
        username: {
          required: true
        },
        password: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        user_last_name: {
          required: true
        },
        payment: {
          required: true
        },
        phone: {
          required: true
        },
        address: {
          required: true
        },
        pass: {
          required: true
        },
        repeat_pass: {
          required: true
        }
      },
      messages: {
        name: {
          required: errore_text.required
        },
        username: {
          required: errore_text.required
        },
        password: {
          required: errore_text.required
        },
        email: {
          required: errore_text.required,
          email: errore_text.email
        },
        user_last_name: {
          required: errore_text.required
        },
        payment: {
          required: errore_text.required
        }
      },
      submitHandler: function submitHandler(form) {
        e.preventDefault(); // Закидує в скритий інпут інфу про ольорове оформлення логотипа

        var current_color_logo = $(".logo_color__wrap").find(".is-active");
        var current_color_mass = [];
        $.each($(current_color_logo), function (index, value) {
          current_color_mass.push($(value).attr("data-check"));
        });
        $(".logo_color").val(current_color_mass);
        var data = formSerialize({
          form: form
        });
        send_form({
          form: form,
          data: data
        });
        var all_form_input = form.querySelectorAll("input"); // const all_form_textaria = form.querySelectorAll('textarea');
        // for (const key in all_form_input) {
        //   if (all_form_input.hasOwnProperty(key)) {
        //     const element = all_form_input[key];
        //   }
        // }

        function send_form(params) {
          var form = params.form;
          var check_id = $(form).attr("id");
          var form_data = params.data;
          var url_form = form.action;
          var form_json = {};

          if (url_form != "") {
            $(".loader_all").addClass("loader_all-active");
            var loader = '<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';
            document.getElementById("loader_all__wrap").innerHTML = loader;
            fetch(url_form, {
              method: "POST",
              body: form_data
            }).then(function (data) {
              return data.json();
            }).then(function (data) {
              $(".loader_all").removeClass("loader_all-active");

              if (data.status == "OK" && typeof data["status"] !== "undefined") {
                if (typeof data["redirect_url"] !== "undefined" && data.redirect_url != "") {
                  // Аналітика для двох видів форм feedback_smal і contacts
                  if (check_id == "feedback_smal" || check_id == "contacts") {
                    gtag_report_conversion();
                  } // Аналітика для двох видів форм feedback_smal і contacts


                  clear_input();
                  location.href = data.redirect_url;
                } else {// sayHi();
                }
              }
            });
          } else {
            console.error("URL Form is #".concat(params.form.id, " not found "));
          }
        }

        function clear_input() {
          var TYPE_INPUT = {
            TEXT: "text",
            EMAIL: "email",
            CHECKBOX: "checkbox",
            HIDDEN: "hidden",
            TEL: "tel",
            FILE: "file"
          };
          var all_form_input = form.querySelectorAll("input");
          var all_form_textaria = form.querySelectorAll("textarea");

          for (var key in all_form_textaria) {
            if (all_form_textaria.hasOwnProperty(key)) {
              var element = all_form_textaria[key];
              element.value = "";
            }
          }

          for (var _key in all_form_input) {
            if (all_form_input.hasOwnProperty(_key)) {
              var _element = all_form_input[_key];

              switch (_element.type) {
                case TYPE_INPUT.TEXT:
                  _element.value = "";
                  break;

                case TYPE_INPUT.EMAIL:
                  _element.value = "";
                  break;

                case TYPE_INPUT.TEL:
                  _element.value = "";
                  break;
                // case TYPE_INPUT.HIDDEN:
                //   element.value=''
                //   break;

                case TYPE_INPUT.FILE:
                  _element.value = "";
                  break;

                case TYPE_INPUT.CHECKBOX:
                  $(_element).prop("checked", false);
                  break;
              }
            }
          }
        }

        function formSerialize(params) {
          var form = params.form;
          var serialize = $(form).serializeArray();
          var data = {};
          data["inputs"] = [], data["item_category_ids"] = [], data["item_ids"] = [], data["inputs"] = [];
          var inputs_other = form.querySelectorAll("input[name=other]");
          Array.apply(null, inputs_other).map(function (item) {
            var categories_input = $(item).parents(".form_container__main").find(".form_box__header-input");
            data["inputs"].push({
              item_category_id: categories_input[0].name,
              text: item.value
            });
          });
          $(serialize).each(function (index, input) {
            if (input.value == "category") {
              data["item_category_ids"].push(input.name);
            } else if (input.value == "item") {
              data["item_ids"].push(input.name);
            } else {
              data[input.name] = input.value;
            }
          });
          var file_logo__life = form.querySelectorAll("#file_logo__life")[0];
          var file_logo__life2 = form.querySelectorAll("#last_hidden_file")[0];
          var Formdata = new FormData();

          if (file_logo__life != undefined) {
            if (file_logo__life.files[0] !== undefined) {
              Formdata.append("logo", file_logo__life.files[0]);
            }
          }

          console.log("data: ", data); // TODO: Написати костиль для останнього лого

          if (file_logo__life2 !== undefined) {
            if (file_logo__life2.files[0] !== undefined) {
              Formdata.append("logo2", file_logo__life2.files[0]);
            }
          }

          console.log("data: ", data);
          var current_texts_mass = [];
          var all_texts_logo = $(".logo_input__wrap");
          $.each($(all_texts_logo), function (index, value) {
            current_texts_mass.push({
              text_id: $(value).attr("data-text_id"),
              value: $(value).find(".input-field").val()
            });
          });
          data["texts"] = current_texts_mass;
          var current_ranges_mass = [];
          var all_ranges_logo = $(".all_range_slider");
          $.each($(all_ranges_logo), function (index, value) {
            current_ranges_mass.push({
              range_id: $(value).parents(".slider__wrap").attr("data-range_item_id"),
              value: $(value).val()
            });
          });
          data["ranges"] = current_ranges_mass;
          data["images"] = current_type_mass; // console.log('data: ', data);

          Formdata.append("data", JSON.stringify(data));
          return Formdata;
        }
      }
    });
  }
}

/***/ }),

/***/ "../components/module/form_errors/index.scss":
/*!***************************************************!*\
  !*** ../components/module/form_errors/index.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/pages/main/index.js":
/*!*****************************************!*\
  !*** ../components/pages/main/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/pages/main/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

var scrolled = window.pageYOffset || document.documentElement.scrollTop;

if ($('.is_front_page').length > 0) {
  scrolled > 0 ? $("header").addClass("header_bg") : $("header").removeClass("header_bg");
}

window.onscroll = function () {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;

  if ($('.is_front_page').length > 0) {
    scrolled > 0 ? $("header").addClass("header_bg") : $("header").removeClass("header_bg");
  }
};

$('.slider_hero').slick({
  arrows: false,
  dots: true,
  lazyLoad: "anticipated" // autoplay: true,
  // autoplaySpeed: 1800,

});
$('.sliders__our_projects').on('init', function (event, slick) {
  setTimeout(function () {
    if ($('.sliders__our_projects').length > 0) {
      var innerHeight = $($('.sliders__our_projects').find('.slick-track')[0]).innerHeight();
      console.log(innerHeight);
      $('.sliders__our_projects').height(innerHeight + 45);
      $('.slick-track').height(innerHeight + 10);
    }
  }, 0);
});
$('.sliders__our_projects').on('reInit', function (event, slick) {
  console.log("reInit");
});
var sliders__our_projects = $('.sliders__our_projects').slick({
  centerMode: true,
  slidesToShow: 3,
  dots: true,
  arrows: false,
  swipe: true,
  autoplay: true,
  autoplaySpeed: 1800,
  swipeToSlide: true,
  responsive: [{
    breakpoint: 992,
    settings: {
      centerMode: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true
    }
  }, {
    breakpoint: 658,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      centerMode: false
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      infinite: true
    }
  }]
});

/***/ }),

/***/ "../components/pages/main/index.scss":
/*!*******************************************!*\
  !*** ../components/pages/main/index.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_common_componentc_normalize_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/common_componentc/normalize/index */ "../components/common_componentc/normalize/index.js");
/* harmony import */ var _components_interface_grid_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/interface/grid/index */ "../components/interface/grid/index.js");
/* harmony import */ var _components_interface_form_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/interface/form/index */ "../components/interface/form/index.js");
/* harmony import */ var _components_interface_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/interface/button */ "../components/interface/button/index.js");
/* harmony import */ var _components_module_form_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/module/form_errors */ "../components/module/form_errors/index.js");
/* harmony import */ var _components_common_componentc_breadcrumbs_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/common_componentc/breadcrumbs/index */ "../components/common_componentc/breadcrumbs/index.js");
/* harmony import */ var _components_common_componentc_box_info_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/common_componentc/box_info/index */ "../components/common_componentc/box_info/index.js");
/* harmony import */ var _components_common_componentc_header_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/common_componentc/header/index */ "../components/common_componentc/header/index.js");
/* harmony import */ var _components_common_componentc_footer_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/common_componentc/footer/index */ "../components/common_componentc/footer/index.js");
/* harmony import */ var _components_pages_main_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/pages/main/index */ "../components/pages/main/index.js");
// script interface



 // // script common elements

 // import './../components/common_componentc/admin_panel/index'


 // // script pages





/***/ })

/******/ });
//# sourceMappingURL=index.js.map