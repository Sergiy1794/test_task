import "./index.scss";

$(".filter_header").on("click", function () {

  if (!$(this).parents(".catalog__filter ").hasClass("active")) {
    $(this).parents(".catalog__filter ").addClass("active");
  } else {
    $(this).parents(".catalog__filter").removeClass("active");
  }
});

$(document).mouseup(function (e) {
  var acounts_modal = $(e.target).parents(".filter_main_wrap "); // тут указываем класс элемента
  if (acounts_modal.length < 1) {
    $(".filter_main_wrap").removeClass("active");
  }
});



function getAjaxProduct() {}

function setURL() {}

function updatePagination() {}

function createCard() {}

// ======================
// ======================
// ======================
// ======================
//
// Catalog sort direction code
sortChangeDirection();
function sortChangeDirection() {
  $(".sorting_direction_wrap").on("click", function () {
    let sortValue = $(".sorting_direction_wrap").find("input").val();
    let valueInput = sortValue === "-" ? "" : "-";
    $(".sorting_direction_wrap").find("input").val(valueInput);

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
    catalogUpdateTriger();
  });
}


// ======================
// ======================
// ======================
// ======================
//
// Catalog sor mobil

$('.sort_inputs').find('.sort_input').on('click',function(){
  let sort_input_value = $(this).data('value');
  $(this).parents('.sort_inputs').find('input').val(sort_input_value);

  if(!$(this).hasClass('active')){
    $(this).addClass('active')
  }else{
    $(this).removeClass('active')
  }

})


// ======================
// ======================
// ======================
// ======================
//
// Catalog select item code start

selelectActive();

function onCheckSelectItem(element, parentClass) {
  let temObject = { name: null, value: null };
  if (!$(element).hasClass("active")) {
    temObject.value = $(element).data("value");
    temObject.text = $(element).text();

    $(element)
      .parents(parentClass)
      .find(".dropdown-toggle")
      .text(temObject.text);
    $(element)
      .parents(parentClass)
      .find("[type='hidden']")
      .val(temObject.value);

    $(element)
      .parents(parentClass)
      .find(".dropdown-item")
      .removeClass("active");
    $(element).addClass("active");
  }

  catalogUpdateTriger();
}

function onClickSelectItem(element, parentClass) {
  $(element).on("click", function () {
    onCheckSelectItem(element, parentClass);
  });
}
function selelectActive() {
  const selelect_item = $(".selelect_item");

  [...selelect_item].map((select) => {
    let dropdown_item = [...$(select).find(".dropdown-item")];

    [...dropdown_item].map((item) => {
      onClickSelectItem(item, ".selelect_item");
    });
  });
}

// ======================
// ======================
// ======================
// ======================
//
// Filter range catalog code start

initRenge();

function initRenge() {
  var rangeSlider = document.getElementById("slider-range");

  noUiSlider.create(rangeSlider, {
    start: [2000, 8000],

    connect: [false, true, false],
    tooltips: [true, true],
    range: {
      min: [0],
      max: [10000],
    },
    format: {
      from: Number,
      to: function (value) {
        return parseInt(value).toFixed(0);
      },
    },
  });
  rangeSlider.noUiSlider.on("change", function (value, handle) {
    $("[name='min_price']").val(value[0]);
    $("[name='max_price']").val(value[1]);
    catalogUpdateTriger();
  });
}

// ======================
// ======================
// ======================
// ======================
//
// Filter catalog code start
filterGroupChengActive();

function filterGroupChengActive() {
  const selelect_item = $(".filter_item");

  [...selelect_item].map((select) => {
    let dropdown_item = [...$(select).find(".header")];

    [...dropdown_item].map((item) => {
      onClickFilterGroup(item, ".filter_item");
      filterCheckedItemCheckbox(item, ".filter_item");
    });
  });
}
function onClickFilterGroup(element, parentClass) {
  $(element).on("click", function () {
    onCheckFilterGroup(element, parentClass);
  });
}
function onCheckFilterGroup(element, parentClass) {
  let temObject = { name: null, value: null };

  if (!$(element).parents(parentClass).hasClass("active")) {
    $(element).parents(parentClass).addClass("active");
  } else {
    $(element).parents(parentClass).removeClass("active");
  }
}

function filterCheckedItemCheckbox(element, parentClass) {
  const filterMainItem = $(element).parents(parentClass).find(".main_item");

  [...filterMainItem].map((item) => {
    $(item).on("click", function () {
      if ($(item).hasClass("active")) {
        $(item).removeClass("active");
        $(item).children("input").prop("checked", false);
      } else {
        $(item).addClass("active");
        $(item).children("input").prop("checked", true);
      }
      // код зміни URl

      catalogUpdateTriger();
    });
  });
}

// Filter catalog code end

// Filter get propery in URL
function getParametersInURL() {
  var regex = /[?&]([^=#]+)=([^&#]*)/g,
    url = window.location.href,
    params = {},
    match;
  while ((match = regex.exec(url))) {
    params[match[1]] = match[2];
  }
  return params;
}

// Filter get propery crate catalog
function getParamsCatalog() {
  let all_input = $(".catalog").find("input");
  let catalogParams = new Map();

  [...all_input].map((item) => {
    let inputParam = getInputParams(item);

    if (!!inputParam.name & (inputParam.name != "")) {
      catalogParams.set(inputParam.name, inputParam.value);
    }
  });

  catalogParams.set(
    "sort",
    catalogParams.get("sort") + catalogParams.get("sorting_direction")
  );
  catalogParams.delete("sorting_direction");

  // let parametersInURL =  getParametersInURL();

  // Object.keys(parametersInURL).map(key=>{
  //   if(!catalogParams.has(key)){
  //     catalogParams.set(key,parametersInURL[key])
  //   }
  // })

  // console.log(catalogParams );

  return catalogParams;
}

// Filter get input propery value
function getInputParams(input) {
  const typeInput = $(input).attr("type");

  let objTempInput = { name: "", value: "" };

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

// update URL Catalog

function updateUrlParems(params) {
  let tempUrl = createUrl(params);
  history.pushState(
    null,
    null,
    `?
  ${tempUrl}`
  );
}

function createUrl(config_model) {
  let back_url = Array.from(config_model)
    .map((key) => {
      return `${key[0]}=${encodeURIComponent(key[1])}`;
    })
    .join("&");

  return back_url;
}

// Update params filter

function catalogUpdateTriger() {
  let paramsCatalog = getParamsCatalog();

  updateUrlParems(paramsCatalog);

  deleteCatalogCard(".catalog__main", ".catalog__item");
  createHoverCard(20);

  setTimeout(function () {
    deleteCatalogCard(".catalog__main", ".catalog__item_animation");
    createProductCard(".catalog__main");
    createPaginationUrl();
  }, 400);
}

function deleteCatalogCard(classCatalog, classCard) {
  $(classCatalog).find(classCard).remove();
}

function createHoverCard(countCard) {
  let hoverCard = ``;

  for (let index = 0; index < countCard; index++) {
    hoverCard += `<div class="catalog__item_animation"></div>`;
  }

  $(".catalog__main")[0].innerHTML = hoverCard;
  [...$(".catalog__item_animation")].map((item) => {
    let widthCard = $(item).width();

    $(item).height(widthCard * 1, 3);
  });
}

function createProductCard() {
  let productCard = "";

  for (let index = 0; index < 40; index++) {
    productCard += `
    
  <div class="catalog__item  catalog__item-first_animation">
    <div class="header">
      <div class="info">
        <div class="status">В наявності</div>
        <div class="price">4 456 грн.</div>
      </div>
      <div class="marker">
        <div class="new">Новинка</div>
        <div class="sale">Розпродаж</div>
      </div>
    </div>
    <div class="main">
      <a class="photo" href="#">
        <img src="./static/source/img/catalog_photo/Rectangle-1.jpg" alt="" srcset="">
      </a>
      <a  href="#" class="name">INDU LINE</a>
    </div>
    <a  href="#" class="footer">Детальніше</a>
  </div>
  
    `;
  }

  $(".catalog__main")[0].innerHTML = productCard;
  let time = 450;
  [...$(".catalog__main").find(".catalog__item")].map((item) => {
    setTimeout(function () {
      $(item).removeClass("catalog__item-first_animation");
    }, time);
    time += 450;
  });
}

createPaginationProduct();

function createPaginationProduct() {
  let allProduct = 325;
  let countCatalog = 20;
  let activePage = 5;
  let pagination = {};
  let countPage = Number((allProduct / countCatalog).toFixed(0));

  if (countPage > 4 || activePage <= countPage) {
    pagination = {
      start: [1, 2, 3, 4],
      end: [countPage],
    };
  } else if (countPage > 4 && activePage > 4 && activePage <= countPage - 2) {
    pagination = {
      start: [1, 2, 3, 4],
      center: [activePage - 1, activePage, activePage + 1, activePage + 2],
      end: [countPage],
    };
  } else if (countPage > 4 && activePage > 4 && activePage === countPage - 1) {
    pagination = {
      start: [1],
      end: [activePage - 2, activePage - 1, activePage, countPage],
    };
  } else {
    pagination = {
      start: [1],
      end: [activePage - 3, activePage - 2, activePage - 1, activePage],
    };
  }

  let allPagination = "";
  if (!!pagination.start && pagination.start.length > 0) {
    let pagitation_items = "";
    for (let index = 0; index < pagination.start.length; index++) {
      pagitation_items += `<a data-value="${pagination.start[index]}" class="catalog__pagination_item">${pagination.start[index]}</a>`;
    }
    allPagination += `<div class="catalog__pagination_box catalog__pagination_start">${pagitation_items}</div><div class="catalog__pagination_dots">...</div>`;
  }

  if (!!pagination.center && pagination.center.length > 0) {
    let pagitation_items = "";
    for (let index = 0; index < pagination.center.length; index++) {
      pagitation_items += `<a data-value="${pagination.center[index]}" class="catalog__pagination_item">${pagination.center[index]}</a>`;
    }
    allPagination += `<div class="catalog__pagination_box catalog__pagination_center">${pagitation_items}</div><div class="catalog__pagination_dots">...</div>`;
  }
  if (!!pagination.end && pagination.end.length > 0) {
    let pagitation_items = "";
    for (let index = 0; index < pagination.end.length; index++) {
      pagitation_items += `<a data-value="${pagination.end[index]}" class="catalog__pagination_item">${pagination.end[index]}</a>`;
    }
    allPagination += `<div class="catalog__pagination_box catalog__pagination_end">${pagitation_items}</div>`;
  }

  $(".catalog__pagination")[0].innerHTML = allPagination;
}
createPaginationUrl();

function createPaginationUrl() {
  let catalogPaginationItem = $(".catalog__pagination").find(
    ".catalog__pagination_item"
  );
  let paramsCatalog = getParamsCatalog();

  let tempUrl = createUrl(paramsCatalog);
  [...catalogPaginationItem].map((item) => {
    let namber_page = $(item).data("value");
    let paginationItemUrl = tempUrl + `&pagination=${namber_page}`;
    $(item).attr("href", `?${paginationItemUrl}`);
  });
}

onClickPagination();
function onClickPagination() {
  let catalogPaginationItem = $(".catalog__pagination_item");

  [...catalogPaginationItem].map((item) => {
    console.log($(item));

    $(item).on("click", function (event) {
      event.preventDefault();
      let hrefUrl = $(item).attr("href");

      getProductPaginationCatalog(hrefUrl);
    });
  });
}




let Catalog = function($Catalog) {
  this.$Catalog = $Catalog;
};

Catalog.prototype = {



  run: function() {
 
  }
}

$(document).ready(function() {
 
      new Catalog($(this)).run();
  
});


