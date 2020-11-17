import "./index.scss";

select_main_menu(document.getElementsByClassName("dropdown"));

function select_main_menu([...item]) {
  item.map((item) => {
     
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
  } else {
    // if(!$(this).parents('.acounts_modal').length>0){
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
      var querySearch = $(this).parents(".search")[0].querySelector("input")
        .value;
      sessionStorage.setItem("search_question", querySearch);
      location.href = `/search/?q=${querySearch}`;
    }
  } else {
    $(this).parents(".search").addClass("active");
  }
});
$(".btn-search_icon").on("click", function () {
  if ($(this).parents(".search_mobil")[0].querySelector("input").value !== "") {
    var querySearch = $(this).parents(".search_mobil")[0].querySelector("input").value;
 
    sessionStorage.setItem("search_question", querySearch);
    location.href = `/search/?q=${querySearch}`;
  }
});

$(".search_mobil_input").on("keydown", function (e) {
  if ($(this).val() !== "" && e.keyCode === 13) {
    e.preventDefault(); 
    sessionStorage.setItem("search_question", $(this).val());
    location.href = `/search/?q=${$(this).val()}`;
  }
});

$(".search_field").on("keydown", function (e) { 
  if ($(this).val() !== "" && e.keyCode === 13) {
    e.preventDefault();
    sessionStorage.setItem("search_question", $(this).val());
    location.href = `/search/?q=${$(this).val()}`;
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
  
  const menu_input = [...$(navbar).find(".nav-item")];
  menu_input.map((item) => {
    if ($(item).children(".main").length > 0) {
      $(item)
        .children(".header")
        .on("click", function () {
          $(navbar).find(".nav-item").removeClass("active");

          $(item).addClass("active");
        });
    }
  });
}
