import "./index.scss";

// function getAjaxProduct() {}

// function setURL() {}

// function updatePagination() {}

// function createCard() {}

class Catalog {
  getInputParams(input) {
    // get value Input
    const typeInput = $(input).attr("type");
    console.log($(input)[0]);
    console.log(typeInput);

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
  getParamsCatalog() {
    // get All params catalog

    let all_input;

    if (window.innerWidth < 769) {
      all_input = [...$(".catalog").find("input")].filter(
        (item) => $(item).parents(".desctop").length < 1
      );
    } else {
      all_input = [...$(".catalog").find("input")].filter(
        (item) => $(item).parents(".mobil").length < 1
      );
    }

    let catalogParams = new Map();

    [...all_input].map((item) => {
      let inputParam = this.getInputParams(item);

      if (!!inputParam.name && inputParam.name !== "") {
        catalogParams.set(inputParam.name, inputParam.value);
      }
    });

    catalogParams.set(
      "sort",
      `${catalogParams.get("sort") + catalogParams.get("sorting_direction")}`
    );
    catalogParams.delete("sorting_direction");

    return catalogParams;
  }
  createUrl(config_model) {
    let back_url = Array.from(config_model)
      .map((key) => {
        return `${key[0]}=${encodeURIComponent(key[1])}`;
      })
      .join("&");

    return back_url;
  }
  updateUrlParems(params) {
    let tempUrl = this.createUrl(params);
    history.pushState(
      null,
      null,
      `?
      ${tempUrl}`
    );
  }
  deleteCatalogCard(classCatalog, classCard) {
    $(classCatalog).find(classCard).remove();
  }
  createProductCard() {
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
  createHoverCard(countCard) {
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
  createPaginationUrl() {
    let catalogPaginationItem = $(".catalog__pagination").find(
      ".catalog__pagination_item"
    );
    let paramsCatalog = this.getParamsCatalog();

    let tempUrl = this.createUrl(paramsCatalog);
    [...catalogPaginationItem].map((item) => {
      let namber_page = $(item).data("value");
      let paginationItemUrl = tempUrl + `&pagination=${namber_page}`;
      $(item).attr("href", `?${paginationItemUrl}`);
    });
  }
  fetchNewCard(urlParams) {
    let self = this;
    // let urlCatalog = this.createUrl(urlParams)
    let dataParams = JSON.stringify(Object.fromEntries(urlParams));
    fetch("urlCatalog", {
      method: "POST",
      body: dataParams,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }
  catalogUpdateTriger() {
    let self = this;
    let paramsCatalog = this.getParamsCatalog();

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

  getProductPaginationCatalog(getUrl) {
    let self = this;
    history.pushState(
      null,
      null,
      `?
    ${getUrl}`
    );
  
    this.deleteCatalogCard(".catalog__main", ".catalog__item");
    this.createHoverCard(20);
  
    setTimeout(function () {
      self.deleteCatalogCard(".catalog__main", ".catalog__item_animation");
      self.createProductCard(".catalog__main");
      self.createPaginationUrl();
    }, 400);
  }
  onCloseWindow(){
    $(document).mouseup(function (e) {
      var acounts_modal = $(e.target).parents(".catalog__filter "); // тут указываем класс элемента
    console.log(acounts_modal );
    
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
  run() {
    this.onCloseWindow()
  }
}

class Pagination extends Catalog {
  createPaginationProduct() {
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
    } else if (
      countPage > 4 &&
      activePage > 4 &&
      activePage === countPage - 1
    ) {
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

  onClickPagination() {
    let self = this;
    let catalogPaginationItem = $(".catalog__pagination_item");

    [...catalogPaginationItem].map((item) => {
      $(item).on("click", function (event) {
        event.preventDefault();
        let hrefUrl = $(item).attr("href");

        self.getProductPaginationCatalog(hrefUrl);
      });
    });
  }

  run() {
    this.createPaginationProduct();
    this.onClickPagination();
  }
}

class Sort extends Catalog {
  onCheckSelectItem(element, parentClass) {
    let temObject = { name: null, value: null };
    if (!$(element).hasClass("active")) {
      temObject.value = $(element).data("value");
      temObject.text = $(element).text();

      let parentBox = $(element).parents(parentClass);

      if (parentBox.parents(".per_page").length > 0) {
        $("[name='per_page']").val(temObject.value);

        $(".per_page").find(".dropdown-toggle").text(temObject.text);

        $(".per_page").find(`.dropdown-item`).removeClass("active");
        $(".per_page")
          .find(`.dropdown-item[data-value='${temObject.value}']`)
          .addClass("active");

        $(".per_page_item").removeClass("active");
        $(`.per_page_item[data-value="${temObject.value}"]`).addClass("active");
      } else {
        parentBox.find(".dropdown-toggle").text(temObject.text);
        parentBox.find("[type='hidden']").val(temObject.value);
      }

      parentBox.find(".dropdown-item").removeClass("active");
      $(element).addClass("active");
    }

    this.catalogUpdateTriger();
  }

  onClickSelectItem(element, parentClass) {
    let self = this;
    $(element).on("click", function () {
      self.onCheckSelectItem(element, parentClass);
    });
  }

  selelectActive() {
    const selelect_item = $(".selelect_item");

    [...selelect_item].map((select) => {
      let dropdown_item = [...$(select).find(".dropdown-item")];

      [...dropdown_item].map((item) => {
        this.onClickSelectItem(item, ".selelect_item");
      });
    });
  }

  sortChangeDirection() {
    let self = this;
    $(".sorting_direction_wrap").on("click", function () {
      let sortValue = $(".sorting_direction_wrap").find("input").val();
      let valueInput = sortValue === "-" ? "" : "-";
      $(".sorting_direction_wrap").find("input").val(valueInput);

      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(this).addClass("active");
      }
      self.catalogUpdateTriger();
    });
  }
  showSortMobil() {
    
    $(".catalog__sort")
      .find(".header")
      .on("click", function () {
        if (window.innerWidth < 769) {
          if (
            !$(this).parents(".catalog__sort").find(".mobil").hasClass("active")
          ) {
            $(this).parents(".catalog__sort").find(".mobil").addClass("active");
          } else {
            $(this)
              .parents(".catalog__sort")
              .find(".mobil")
              .removeClass("active");
          }
        }
        
      });
  }
  sortMobil() {
    // Catalog sor mobil
    let self = this;
    $(".sort_inputs")
      .find(".sort_input")
      .on("click", function (event) {
        event.preventDefault();
        let sort_input_value = $(this).data("value");
        $(this).parents(".sort_inputs").find("input").val(sort_input_value);

        $(this)
          .parents(".sort_inputs")
          .find(".sort_input")
          .removeClass("active");
        if (!$(this).hasClass("active")) {
          $(this).addClass("active");
        } else {
          $(this).removeClass("active");
        }
        self.catalogUpdateTriger();
      });

  }
  pageMobil() {
    let self = this;
    $(".per_page_item").on("click", function () {
      let temObject = {};
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

  run() {
    this.sortChangeDirection();
    this.showSortMobil();
    this.sortMobil();
    this.pageMobil();
    this.selelectActive();
  }
}

class Filter extends Catalog {
  showFilterBox() {
    $(".filter_header").on("click", function () {
      if (!$(this).parents(".catalog__filter ").hasClass("active")) {
        $(this).parents(".catalog__filter ").addClass("active");
      } else {
        $(this).parents(".catalog__filter").removeClass("active");
      }
    });
  }

  showfilterGroup() {
    const selelect_item = $(".filter_item");
console.log('showfilterGroup' );

    [...selelect_item].map((select) => {
      let dropdown_item = [...$(select).find(".header")];

      [...dropdown_item].map((item) => {
        console.log('23123' );
        
        this.onClickFilterGroup(item, ".filter_item");
        this.filterCheckedItemCheckbox(item, ".filter_item");
      });
    });
  }

  onCheckFilterGroup(element, parentClass) {
    let temObject = { name: null, value: null };

    if (!$(element).parents(parentClass).hasClass("active")) {
      $(element).parents(parentClass).addClass("active");
    } else {
      $(element).parents(parentClass).removeClass("active");
    }
  }
  onClickFilterGroup(element, parentClass) {
    let self = this;
    $(element).on("click", function () {
      self.onCheckFilterGroup(element, parentClass);
    });
  }

  filterCheckedItemCheckbox(element, parentClass) {
    let self = this;
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

        self.catalogUpdateTriger();
      });
    });
  }

  initRenge() {
    let self = this;

    var rangeSlider = document.getElementById("slider-range");

    let rangeSliderPrice = $(rangeSlider).parents('.slider_price')

    let min_price = rangeSliderPrice.data('min_price')
    let max_price = rangeSliderPrice.data('max_price')



    noUiSlider.create(rangeSlider, {
      start: [2000, 8000],

      connect: [false, true, false],
      tooltips: [true, true],
      range: {
        min: [min_price],
        max: [max_price],
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
      self.catalogUpdateTriger();
    });
  }

  run() {
    console.log('213123' );

    this.showFilterBox();
    this.showfilterGroup();
    this.initRenge();
  }
}



$(document).ready(function () {
 
  let catalog = new Catalog();
  catalog.run();


  let pagination = new Pagination();
  pagination.run();

  let filter = new Filter();
  filter.run();

  let sort = new Sort();
  sort.run();

  catalog_descriptions_more()

});


function catalog_descriptions_more(){
  $('.catalog_descriptions-more').on('click',function(){
    console.log($(this) );
    console.log($(this).data('moreout') );
    
    if(!$('.catalog_descriptions__box').hasClass('show')){
      $(this).text($(this).data('moreout'))
      $('.catalog_descriptions__box').addClass('show')
    }else{
      $(this).text($(this).data('morein'))
      $('.catalog_descriptions__box').removeClass('show')
    }
  })
}

