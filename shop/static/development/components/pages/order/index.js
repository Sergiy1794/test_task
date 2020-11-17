import "./index.scss";

let select_type_delivery = $(".select_type_delivery").select2({
  dropdownAutoWidth: true,
  placeholder: "Оберіть тип доставки",
  width: "resolve",
  language: {
    noResults: function () {
      return "Доставок не знайдено";
    },
  },
});

select_type_delivery.on("select2:select", function (e) {
  let item = e.params.data.element.dataset.parents;
  let parentsElement = JSON.parse(item);

  let ellementsHidden = [
    ".delivery_address",
    ".select_delivery_sity",
    ".select_delivery_department",
  ];

  ellementsHidden.map((item) => {
    $(item).parents(".input").addClass("hidden");
  });

  parentsElement.map((item) => {
    $(item).parents(".input").removeClass("hidden");
  });
});

let select_delivery_sity = $(".select_delivery_sity").select2({
  dropdownAutoWidth: true,
  placeholder: "Оберіть місто",
  width: "resolve",
  language: {
    noResults: function () {
      return "Міст не знайдено";
    },
  },
  ajax: {
    url: `https://eleek.starway.agency/api/settlements/`,
    data: function (params) {
      console.log(params);

      var query = {
        per_page: 20,
        search_query: params.term,
        page_number: params.page || 1,
      };

      return query;
    },
    processResults: function (data, params, ...props) {
      params.page = params.page || 1;

      let options = data.results.map((item) => {
        console.log(item);

        return {
          id: item.id,
          text: `${item.title} (${item.region.title})`,
          item,
        };
      });

      return {
        results: options,
        pagination: {
          more: params.page * 30 < data.count,
        },
      };
    },
  },
});

select_delivery_sity.on("select2:select", function (e) {
    $(".select_delivery_department").parents('.input').removeClass("hidden-op");
    $(select_delivery_department).val([]).trigger("change");
    $(select_delivery_department).empty();

    let item = e.params.data.item.title;

      fetch(`https://eleek.starway.agency/api/warehouses/?query=${item}`, {
          method: 'GET',
      })
      .then(data => {
        return data.json();
      })
      .then(body => {
        if (body.count != 0) {
          for (let key in body.results) {
            let option_area = document.createElement('option');
            option_area.textContent = body.results[key].title;
            $(select_delivery_department)[0].appendChild(option_area);
          }
        }
      })
})

let select_delivery_department = $(".select_delivery_department").select2({
  dropdownAutoWidth: true,
  placeholder: "Оберіть відділення",
  width: "resolve",
  language: {
    noResults: function () {
      return "Відділення не знайдено";
    },
  },
});
let select_type_payment = $(".select_type_payment").select2({
  dropdownAutoWidth: true,
  placeholder: "Оберіть спосіб оплати",
  width: "resolve",
  language: {
    noResults: function () {
      return "Способів оплати не знайдено";
    },
  },
});

[...$("select")].map((item) => {
  $(item).on("select2:opening", function (e) {
    if ($(item).parents(".input").find("label.error").length > 0) {
      $(item).parents(".input").find("label.error").remove();
      $(item).removeClass("is-error");
    }

    if ($(item).parents(".hidden-op").length > 0) {
      let parentsElements = $(item).data("parents");
      let parentsElementsError = $(item).data("error");

      $(parentsElements)
        .parents(".input")
        .append(`<label class="error">${parentsElementsError}</label>`);
      $(parentsElements).parents(".input").addClass("is-error ");

      return false;
    }
  });
});

$(".hidden-op").on("click", function (event) {
  event.preventDefault();
  return false;
});

// let select_city = $(".select_city").select2({
//     dropdownAutoWidth: true,
//     width: "resolve",
//     placeholder: gettext("Оберіть місто"),

//     language: {
//       noResults: function () {
//         return gettext("Місто не знайдено");
//       },
//     },
//     ajax: {
//       url: `/api/settlements/`,
//       data: function (params) {
//         console.log(params);

//         var query = {
//           per_page: 20,
//           search_query: params.term,
//           page_number: params.page || 1,
//         };

//         return query;
//       },
//       processResults: function (data, params, ...props) {
//         params.page = params.page || 1;

//         let options = data.results.map((item) => {
//           console.log(item);

//           return {
//             id: item.id,
//             text:  `${item.title} (${item.region.title})`,
//             item,
//           };
//         });

//         return {
//           results: options,
//           pagination: {
//             more: params.page * 30 < data.count,
//           },
//         };
//       },
//     },
//   });

//   $('.select_aria').select2({
//     dropdownAutoWidth: true,
//     width: 'resolve',
//     language: {
//       noResults: function () {
//         return gettext("Відділень не знайдено");
//       },
//     },
//   });

//     $(".select_city").on("select2:select", function (e) {

//       $('.select_aria').val([]).trigger("change");
//       $('.select_aria').empty();
//       let item = e.params.data.item.title;

//       fetch(`/api/warehouses/?query=${item}`, {
//           method: 'GET',
//       })
//       .then(data => {
//         return data.json();
//       })
//       .then(body => {
//         if (body.count != 0) {
//           for (let key in body.results) {
//             let option_area = document.createElement('option');
//             option_area.textContent = body.results[key].title;
//             $('.select_aria')[0].appendChild(option_area);
//           }
//         }
//       })

//     });
