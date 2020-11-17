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
/******/ 	return __webpack_require__(__webpack_require__.s = "./catalog.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "../components/pages/catalog/index.js":
/*!********************************************!*\
  !*** ../components/pages/catalog/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/pages/catalog/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // function getAjaxProduct() {}
// function setURL() {}
// function updatePagination() {}
// function createCard() {}

var Catalog = /*#__PURE__*/function () {
  function Catalog() {
    _classCallCheck(this, Catalog);
  }

  _createClass(Catalog, [{
    key: "getInputParams",
    value: function getInputParams(input) {
      // get value Input
      var typeInput = $(input).attr("type");
      console.log($(input)[0]);
      console.log(typeInput);
      var objTempInput = {
        name: "",
        value: ""
      };

      switch (typeInput) {
        case "checkbox":
          if (!!$(input).prop("checked")) {
            objTempInput["name"] = input.name;
            objTempInput["value"] = $(input).prop("checked");
          }

          break;

        case "hidden":
          objTempInput["name"] = input.name;
          objTempInput["value"] = input.value;
          break;

        case "radio":
          break;

        default:
          break;
      }

      return objTempInput;
    }
  }, {
    key: "getParamsCatalog",
    value: function getParamsCatalog() {
      var _this = this;

      // get All params catalog
      var all_input;

      if (window.innerWidth < 769) {
        all_input = _toConsumableArray($(".catalog").find("input")).filter(function (item) {
          return $(item).parents(".desctop").length < 1;
        });
      } else {
        all_input = _toConsumableArray($(".catalog").find("input")).filter(function (item) {
          return $(item).parents(".mobil").length < 1;
        });
      }

      var catalogParams = new Map();

      _toConsumableArray(all_input).map(function (item) {
        var inputParam = _this.getInputParams(item);

        if (!!inputParam.name && inputParam.name !== "") {
          catalogParams.set(inputParam.name, inputParam.value);
        }
      });

      catalogParams.set("sort", "".concat(catalogParams.get("sort") + catalogParams.get("sorting_direction")));
      catalogParams.delete("sorting_direction");
      return catalogParams;
    }
  }, {
    key: "createUrl",
    value: function createUrl(config_model) {
      var back_url = Array.from(config_model).map(function (key) {
        return "".concat(key[0], "=").concat(encodeURIComponent(key[1]));
      }).join("&");
      return back_url;
    }
  }, {
    key: "updateUrlParems",
    value: function updateUrlParems(params) {
      var tempUrl = this.createUrl(params);
      history.pushState(null, null, "?\n      ".concat(tempUrl));
    }
  }, {
    key: "deleteCatalogCard",
    value: function deleteCatalogCard(classCatalog, classCard) {
      $(classCatalog).find(classCard).remove();
    }
  }, {
    key: "createProductCard",
    value: function createProductCard() {
      var productCard = "";

      for (var index = 0; index < 40; index++) {
        productCard += "\n        \n          <div class=\"catalog__item  catalog__item-first_animation\">\n            <div class=\"header\">\n              <div class=\"info\">\n                <div class=\"status\">\u0412 \u043D\u0430\u044F\u0432\u043D\u043E\u0441\u0442\u0456</div>\n                <div class=\"price\">4 456 \u0433\u0440\u043D.</div>\n              </div>\n              <div class=\"marker\">\n                <div class=\"new\">\u041D\u043E\u0432\u0438\u043D\u043A\u0430</div>\n                <div class=\"sale\">\u0420\u043E\u0437\u043F\u0440\u043E\u0434\u0430\u0436</div>\n              </div>\n            </div>\n            <div class=\"main\">\n              <a class=\"photo\" href=\"#\">\n                <img src=\"./static/source/img/catalog_photo/Rectangle-1.jpg\" alt=\"\" srcset=\"\">\n              </a>\n              <a  href=\"#\" class=\"name\">INDU LINE</a>\n            </div>\n            <a  href=\"#\" class=\"footer\">\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435</a>\n          </div>\n        \n            ";
      }

      $(".catalog__main")[0].innerHTML = productCard;
      var time = 450;

      _toConsumableArray($(".catalog__main").find(".catalog__item")).map(function (item) {
        setTimeout(function () {
          $(item).removeClass("catalog__item-first_animation");
        }, time);
        time += 450;
      });
    }
  }, {
    key: "createHoverCard",
    value: function createHoverCard(countCard) {
      var hoverCard = "";

      for (var index = 0; index < countCard; index++) {
        hoverCard += "<div class=\"catalog__item_animation\"></div>";
      }

      $(".catalog__main")[0].innerHTML = hoverCard;

      _toConsumableArray($(".catalog__item_animation")).map(function (item) {
        var widthCard = $(item).width();
        $(item).height(widthCard * 1, 3);
      });
    }
  }, {
    key: "createPaginationUrl",
    value: function createPaginationUrl() {
      var catalogPaginationItem = $(".catalog__pagination").find(".catalog__pagination_item");
      var paramsCatalog = this.getParamsCatalog();
      var tempUrl = this.createUrl(paramsCatalog);

      _toConsumableArray(catalogPaginationItem).map(function (item) {
        var namber_page = $(item).data("value");
        var paginationItemUrl = tempUrl + "&pagination=".concat(namber_page);
        $(item).attr("href", "?".concat(paginationItemUrl));
      });
    }
  }, {
    key: "fetchNewCard",
    value: function fetchNewCard(urlParams) {
      var self = this; // let urlCatalog = this.createUrl(urlParams)

      var dataParams = JSON.stringify(Object.fromEntries(urlParams));
      fetch("urlCatalog", {
        method: "POST",
        body: dataParams
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(data);
      });
    }
  }, {
    key: "catalogUpdateTriger",
    value: function catalogUpdateTriger() {
      var self = this;
      var paramsCatalog = this.getParamsCatalog();
      this.fetchNewCard(paramsCatalog);
      this.updateUrlParems(paramsCatalog);
      this.deleteCatalogCard(".catalog__main", ".catalog__item");
      this.createHoverCard(20);
      setTimeout(function () {
        self.deleteCatalogCard(".catalog__main", ".catalog__item_animation");
        self.createProductCard(".catalog__main");
        self.createPaginationUrl();
      }, 400);
    }
  }, {
    key: "getProductPaginationCatalog",
    value: function getProductPaginationCatalog(getUrl) {
      var self = this;
      history.pushState(null, null, "?\n    ".concat(getUrl));
      this.deleteCatalogCard(".catalog__main", ".catalog__item");
      this.createHoverCard(20);
      setTimeout(function () {
        self.deleteCatalogCard(".catalog__main", ".catalog__item_animation");
        self.createProductCard(".catalog__main");
        self.createPaginationUrl();
      }, 400);
    }
  }, {
    key: "onCloseWindow",
    value: function onCloseWindow() {
      $(document).mouseup(function (e) {
        var acounts_modal = $(e.target).parents(".catalog__filter "); // тут указываем класс элемента

        console.log(acounts_modal);

        if (acounts_modal.length < 1) {
          $(".catalog__filter").removeClass("active");
        }

        var acounts_modal = $(e.target).parents(".catalog__sort  "); // тут указываем класс элемента

        if (acounts_modal.length < 1) {
          $(".mobil").removeClass("active");
          $(".desctop ").removeClass("active");
        }
      });
    }
  }, {
    key: "run",
    value: function run() {
      this.onCloseWindow();
    }
  }]);

  return Catalog;
}();

var Pagination = /*#__PURE__*/function (_Catalog) {
  _inherits(Pagination, _Catalog);

  var _super = _createSuper(Pagination);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _super.apply(this, arguments);
  }

  _createClass(Pagination, [{
    key: "createPaginationProduct",
    value: function createPaginationProduct() {
      var allProduct = 325;
      var countCatalog = 20;
      var activePage = 5;
      var pagination = {};
      var countPage = Number((allProduct / countCatalog).toFixed(0));

      if (countPage > 4 || activePage <= countPage) {
        pagination = {
          start: [1, 2, 3, 4],
          end: [countPage]
        };
      } else if (countPage > 4 && activePage > 4 && activePage <= countPage - 2) {
        pagination = {
          start: [1, 2, 3, 4],
          center: [activePage - 1, activePage, activePage + 1, activePage + 2],
          end: [countPage]
        };
      } else if (countPage > 4 && activePage > 4 && activePage === countPage - 1) {
        pagination = {
          start: [1],
          end: [activePage - 2, activePage - 1, activePage, countPage]
        };
      } else {
        pagination = {
          start: [1],
          end: [activePage - 3, activePage - 2, activePage - 1, activePage]
        };
      }

      var allPagination = "";

      if (!!pagination.start && pagination.start.length > 0) {
        var pagitation_items = "";

        for (var index = 0; index < pagination.start.length; index++) {
          pagitation_items += "<a data-value=\"".concat(pagination.start[index], "\" class=\"catalog__pagination_item\">").concat(pagination.start[index], "</a>");
        }

        allPagination += "<div class=\"catalog__pagination_box catalog__pagination_start\">".concat(pagitation_items, "</div><div class=\"catalog__pagination_dots\">...</div>");
      }

      if (!!pagination.center && pagination.center.length > 0) {
        var _pagitation_items = "";

        for (var _index = 0; _index < pagination.center.length; _index++) {
          _pagitation_items += "<a data-value=\"".concat(pagination.center[_index], "\" class=\"catalog__pagination_item\">").concat(pagination.center[_index], "</a>");
        }

        allPagination += "<div class=\"catalog__pagination_box catalog__pagination_center\">".concat(_pagitation_items, "</div><div class=\"catalog__pagination_dots\">...</div>");
      }

      if (!!pagination.end && pagination.end.length > 0) {
        var _pagitation_items2 = "";

        for (var _index2 = 0; _index2 < pagination.end.length; _index2++) {
          _pagitation_items2 += "<a data-value=\"".concat(pagination.end[_index2], "\" class=\"catalog__pagination_item\">").concat(pagination.end[_index2], "</a>");
        }

        allPagination += "<div class=\"catalog__pagination_box catalog__pagination_end\">".concat(_pagitation_items2, "</div>");
      }

      $(".catalog__pagination")[0].innerHTML = allPagination;
    }
  }, {
    key: "onClickPagination",
    value: function onClickPagination() {
      var self = this;
      var catalogPaginationItem = $(".catalog__pagination_item");

      _toConsumableArray(catalogPaginationItem).map(function (item) {
        $(item).on("click", function (event) {
          event.preventDefault();
          var hrefUrl = $(item).attr("href");
          self.getProductPaginationCatalog(hrefUrl);
        });
      });
    }
  }, {
    key: "run",
    value: function run() {
      this.createPaginationProduct();
      this.onClickPagination();
    }
  }]);

  return Pagination;
}(Catalog);

var Sort = /*#__PURE__*/function (_Catalog2) {
  _inherits(Sort, _Catalog2);

  var _super2 = _createSuper(Sort);

  function Sort() {
    _classCallCheck(this, Sort);

    return _super2.apply(this, arguments);
  }

  _createClass(Sort, [{
    key: "onCheckSelectItem",
    value: function onCheckSelectItem(element, parentClass) {
      var temObject = {
        name: null,
        value: null
      };

      if (!$(element).hasClass("active")) {
        temObject.value = $(element).data("value");
        temObject.text = $(element).text();
        var parentBox = $(element).parents(parentClass);

        if (parentBox.parents(".per_page").length > 0) {
          $("[name='per_page']").val(temObject.value);
          $(".per_page").find(".dropdown-toggle").text(temObject.text);
          $(".per_page").find(".dropdown-item").removeClass("active");
          $(".per_page").find(".dropdown-item[data-value='".concat(temObject.value, "']")).addClass("active");
          $(".per_page_item").removeClass("active");
          $(".per_page_item[data-value=\"".concat(temObject.value, "\"]")).addClass("active");
        } else {
          parentBox.find(".dropdown-toggle").text(temObject.text);
          parentBox.find("[type='hidden']").val(temObject.value);
        }

        parentBox.find(".dropdown-item").removeClass("active");
        $(element).addClass("active");
      }

      this.catalogUpdateTriger();
    }
  }, {
    key: "onClickSelectItem",
    value: function onClickSelectItem(element, parentClass) {
      var self = this;
      $(element).on("click", function () {
        self.onCheckSelectItem(element, parentClass);
      });
    }
  }, {
    key: "selelectActive",
    value: function selelectActive() {
      var _this2 = this;

      var selelect_item = $(".selelect_item");

      _toConsumableArray(selelect_item).map(function (select) {
        var dropdown_item = _toConsumableArray($(select).find(".dropdown-item"));

        _toConsumableArray(dropdown_item).map(function (item) {
          _this2.onClickSelectItem(item, ".selelect_item");
        });
      });
    }
  }, {
    key: "sortChangeDirection",
    value: function sortChangeDirection() {
      var self = this;
      $(".sorting_direction_wrap").on("click", function () {
        var sortValue = $(".sorting_direction_wrap").find("input").val();
        var valueInput = sortValue === "-" ? "" : "-";
        $(".sorting_direction_wrap").find("input").val(valueInput);

        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
        } else {
          $(this).addClass("active");
        }

        self.catalogUpdateTriger();
      });
    }
  }, {
    key: "showSortMobil",
    value: function showSortMobil() {
      $(".catalog__sort").find(".header").on("click", function () {
        if (window.innerWidth < 769) {
          if (!$(this).parents(".catalog__sort").find(".mobil").hasClass("active")) {
            $(this).parents(".catalog__sort").find(".mobil").addClass("active");
          } else {
            $(this).parents(".catalog__sort").find(".mobil").removeClass("active");
          }
        }
      });
    }
  }, {
    key: "sortMobil",
    value: function sortMobil() {
      // Catalog sor mobil
      var self = this;
      $(".sort_inputs").find(".sort_input").on("click", function (event) {
        event.preventDefault();
        var sort_input_value = $(this).data("value");
        $(this).parents(".sort_inputs").find("input").val(sort_input_value);
        $(this).parents(".sort_inputs").find(".sort_input").removeClass("active");

        if (!$(this).hasClass("active")) {
          $(this).addClass("active");
        } else {
          $(this).removeClass("active");
        }

        self.catalogUpdateTriger();
      });
    }
  }, {
    key: "pageMobil",
    value: function pageMobil() {
      var self = this;
      $(".per_page_item").on("click", function () {
        var temObject = {};

        if (!$(this).hasClass("active")) {
          $(".per_page_item").removeClass("active");
          temObject.value = $(this).data("value");
          temObject.text = $(this).text();
          $("[name='per_page']").val(temObject.value);
          $(this).addClass("active");
          self.catalogUpdateTriger();
        }
      });
    }
  }, {
    key: "run",
    value: function run() {
      this.sortChangeDirection();
      this.showSortMobil();
      this.sortMobil();
      this.pageMobil();
      this.selelectActive();
    }
  }]);

  return Sort;
}(Catalog);

var Filter = /*#__PURE__*/function (_Catalog3) {
  _inherits(Filter, _Catalog3);

  var _super3 = _createSuper(Filter);

  function Filter() {
    _classCallCheck(this, Filter);

    return _super3.apply(this, arguments);
  }

  _createClass(Filter, [{
    key: "showFilterBox",
    value: function showFilterBox() {
      $(".filter_header").on("click", function () {
        if (!$(this).parents(".catalog__filter ").hasClass("active")) {
          $(this).parents(".catalog__filter ").addClass("active");
        } else {
          $(this).parents(".catalog__filter").removeClass("active");
        }
      });
    }
  }, {
    key: "showfilterGroup",
    value: function showfilterGroup() {
      var _this3 = this;

      var selelect_item = $(".filter_item");

      _toConsumableArray(selelect_item).map(function (select) {
        var dropdown_item = _toConsumableArray($(select).find(".header"));

        _toConsumableArray(dropdown_item).map(function (item) {
          _this3.onClickFilterGroup(item, ".filter_item");

          _this3.filterCheckedItemCheckbox(item, ".filter_item");
        });
      });
    }
  }, {
    key: "onCheckFilterGroup",
    value: function onCheckFilterGroup(element, parentClass) {
      var temObject = {
        name: null,
        value: null
      };

      if (!$(element).parents(parentClass).hasClass("active")) {
        $(element).parents(parentClass).addClass("active");
      } else {
        $(element).parents(parentClass).removeClass("active");
      }
    }
  }, {
    key: "onClickFilterGroup",
    value: function onClickFilterGroup(element, parentClass) {
      var self = this;
      $(element).on("click", function () {
        self.onCheckFilterGroup(element, parentClass);
      });
    }
  }, {
    key: "filterCheckedItemCheckbox",
    value: function filterCheckedItemCheckbox(element, parentClass) {
      var self = this;
      var filterMainItem = $(element).parents(parentClass).find(".main_item");

      _toConsumableArray(filterMainItem).map(function (item) {
        $(item).on("click", function () {
          if ($(item).hasClass("active")) {
            $(item).removeClass("active");
            $(item).children("input").prop("checked", false);
          } else {
            $(item).addClass("active");
            $(item).children("input").prop("checked", true);
          } // код зміни URl


          self.catalogUpdateTriger();
        });
      });
    }
  }, {
    key: "initRenge",
    value: function initRenge() {
      var self = this;
      var rangeSlider = document.getElementById("slider-range");
      noUiSlider.create(rangeSlider, {
        start: [2000, 8000],
        connect: [false, true, false],
        tooltips: [true, true],
        range: {
          min: [0],
          max: [10000]
        },
        format: {
          from: Number,
          to: function to(value) {
            return parseInt(value).toFixed(0);
          }
        }
      });
      rangeSlider.noUiSlider.on("change", function (value, handle) {
        $("[name='min_price']").val(value[0]);
        $("[name='max_price']").val(value[1]);
        self.catalogUpdateTriger();
      });
    }
  }, {
    key: "run",
    value: function run() {
      this.showFilterBox();
      this.showfilterGroup();
      this.initRenge();
    }
  }]);

  return Filter;
}(Catalog);

$(document).ready(function () {
  var catalog = new Catalog();
  catalog.run();
  var pagination = new Pagination();
  pagination.run();
  var filter = new Filter();
  filter.run();
  var sort = new Sort();
  sort.run();
  catalog_descriptions_more();
});

function catalog_descriptions_more() {
  $('.catalog_descriptions-more').on('click', function () {
    console.log($(this));
    console.log($(this).data('moreout'));

    if (!$('.catalog_descriptions__box').hasClass('show')) {
      $(this).text($(this).data('moreout'));
      $('.catalog_descriptions__box').addClass('show');
    } else {
      $(this).text($(this).data('morein'));
      $('.catalog_descriptions__box').removeClass('show');
    }
  });
}

/***/ }),

/***/ "../components/pages/catalog/index.scss":
/*!**********************************************!*\
  !*** ../components/pages/catalog/index.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./catalog.js":
/*!********************!*\
  !*** ./catalog.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_common_componentc_normalize_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/common_componentc/normalize/index */ "../components/common_componentc/normalize/index.js");
/* harmony import */ var _components_interface_grid_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/interface/grid/index */ "../components/interface/grid/index.js");
/* harmony import */ var _components_interface_form_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/interface/form/index */ "../components/interface/form/index.js");
/* harmony import */ var _components_interface_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/interface/button */ "../components/interface/button/index.js");
/* harmony import */ var _components_common_componentc_breadcrumbs_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/common_componentc/breadcrumbs/index */ "../components/common_componentc/breadcrumbs/index.js");
/* harmony import */ var _components_common_componentc_header_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/common_componentc/header/index */ "../components/common_componentc/header/index.js");
/* harmony import */ var _components_common_componentc_footer_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/common_componentc/footer/index */ "../components/common_componentc/footer/index.js");
/* harmony import */ var _components_pages_catalog_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/pages/catalog/index */ "../components/pages/catalog/index.js");
// script interface



 // // script common elements
// import '../components/module/form_errors'
// import './../components/common_componentc/admin_panel/index'

 // // script pages





/***/ })

/******/ });
//# sourceMappingURL=index.js.map