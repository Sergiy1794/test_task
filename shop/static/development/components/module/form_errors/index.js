import "./index.scss";
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
      errorPlacement: function (event, validator) {
        $(validator).parents(append_error_box).append($(event));
        $(validator).parents(append_error_box).addClass("is-error");
      },
      ignore: "not:hidden.product_rating",
      rules: {
        name: {
          required: true,
        },
        username: {
          required: true,
        },
        password: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        user_last_name: {
          required: true,
        },
        payment: {
          required: true,
        },
        phone: {
          required: true, 
        },
        address: {
          required: true,
        },
        pass: {
          required: true,
        },
        repeat_pass: {
          required: true,
        },
      },

      messages: {
        name: {
          required: errore_text.required, 
        },
        username: {
          required: errore_text.required,
        },
        password: {
          required: errore_text.required,
        },
        
        
         
       
        email: {
          required: errore_text.required,
          email: errore_text.email,
        },
        user_last_name: {
          required: errore_text.required,
        },
        payment: {
          required: errore_text.required,
        },
        
      },

      submitHandler: function (form) {
        e.preventDefault();

        // Закидує в скритий інпут інфу про ольорове оформлення логотипа
        let current_color_logo = $(".logo_color__wrap").find(".is-active");
        let current_color_mass = [];
        $.each($(current_color_logo), function (index, value) {
          current_color_mass.push($(value).attr("data-check"));
        });
        $(".logo_color").val(current_color_mass);

        let data = formSerialize({ form: form });

        send_form({ form: form, data: data });

        const all_form_input = form.querySelectorAll("input");
        // const all_form_textaria = form.querySelectorAll('textarea');

        // for (const key in all_form_input) {
        //   if (all_form_input.hasOwnProperty(key)) {
        //     const element = all_form_input[key];
        //   }
        // }

        function send_form(params) {
          let form = params.form;
          var check_id = $(form).attr("id");
          let form_data = params.data;
          let url_form = form.action;
          var form_json = {};

          if (url_form != "") {
            $(".loader_all").addClass("loader_all-active");
            var loader =
              '<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';
            document.getElementById("loader_all__wrap").innerHTML = loader;

            fetch(url_form, {
              method: "POST",
              body: form_data,
            })
              .then((data) => {
                return data.json();
              })
              .then((data) => {
                $(".loader_all").removeClass("loader_all-active");
                if (
                  data.status == "OK" &&
                  typeof data["status"] !== "undefined"
                ) {
                  if (
                    typeof data["redirect_url"] !== "undefined" &&
                    data.redirect_url != ""
                  ) {
                    // Аналітика для двох видів форм feedback_smal і contacts
                    if (check_id == "feedback_smal" || check_id == "contacts") {
                      gtag_report_conversion();
                    }
                    // Аналітика для двох видів форм feedback_smal і contacts

                    clear_input();
                    location.href = data.redirect_url;
                  } else {
                    // sayHi();
                  }
                }
              });
          } else {
            console.error(`URL Form is #${params.form.id} not found `);
          }
        }

        function clear_input() {
          const TYPE_INPUT = {
            TEXT: "text",
            EMAIL: "email",
            CHECKBOX: "checkbox",
            HIDDEN: "hidden",
            TEL: "tel",
            FILE: "file",
          };
          const all_form_input = form.querySelectorAll("input");
          const all_form_textaria = form.querySelectorAll("textarea");

          for (const key in all_form_textaria) {
            if (all_form_textaria.hasOwnProperty(key)) {
              const element = all_form_textaria[key];
              element.value = "";
            }
          }

          for (const key in all_form_input) {
            if (all_form_input.hasOwnProperty(key)) {
              const element = all_form_input[key];

              switch (element.type) {
                case TYPE_INPUT.TEXT:
                  element.value = "";
                  break;
                case TYPE_INPUT.EMAIL:
                  element.value = "";
                  break;
                case TYPE_INPUT.TEL:
                  element.value = "";
                  break;
                // case TYPE_INPUT.HIDDEN:
                //   element.value=''
                //   break;
                case TYPE_INPUT.FILE:
                  element.value = "";
                  break;

                case TYPE_INPUT.CHECKBOX:
                  $(element).prop("checked", false);
                  break;
              }
            }
          }
        }

        function formSerialize(params) {
          let form = params.form;
          let serialize = $(form).serializeArray();

          let data = {};
          (data["inputs"] = []),
            (data["item_category_ids"] = []),
            (data["item_ids"] = []),
            (data["inputs"] = []);

          let inputs_other = form.querySelectorAll("input[name=other]");
          Array.apply(null, inputs_other).map((item) => {
            let categories_input = $(item)
              .parents(".form_container__main")
              .find(".form_box__header-input");
            data["inputs"].push({
              item_category_id: categories_input[0].name,
              text: item.value,
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

          let file_logo__life = form.querySelectorAll("#file_logo__life")[0];
          let file_logo__life2 = form.querySelectorAll("#last_hidden_file")[0];

          let Formdata = new FormData();
          if (file_logo__life != undefined) {
            if (file_logo__life.files[0] !== undefined) {
              Formdata.append("logo", file_logo__life.files[0]);
            }
          }
          console.log("data: ", data);
          // TODO: Написати костиль для останнього лого
          if (file_logo__life2 !== undefined) {
            if (file_logo__life2.files[0] !== undefined) {
              Formdata.append("logo2", file_logo__life2.files[0]);
            }
          }
          console.log("data: ", data);
          let current_texts_mass = [];
          let all_texts_logo = $(".logo_input__wrap");
          $.each($(all_texts_logo), function (index, value) {
            current_texts_mass.push({
              text_id: $(value).attr("data-text_id"),
              value: $(value).find(".input-field").val(),
            });
          });
          data["texts"] = current_texts_mass;

          let current_ranges_mass = [];
          let all_ranges_logo = $(".all_range_slider");
          $.each($(all_ranges_logo), function (index, value) {
            current_ranges_mass.push({
              range_id: $(value)
                .parents(".slider__wrap")
                .attr("data-range_item_id"),
              value: $(value).val(),
            });
          });
          data["ranges"] = current_ranges_mass;
 
          data["images"] = current_type_mass;
          // console.log('data: ', data);

          Formdata.append("data", JSON.stringify(data));

          return Formdata;
        }
      },
    });
  }
}
