import "./index.scss";

$(document).ready(function () {
  {
    // Stage

    // ==============
    // ====Line====
    // ==============

    window.addEventListener("resize", function (event) {
      show_line();
    });

    show_line();

    function show_line() {
      if ($(".stages").length > 0 && $(".stages__line").length > 0) {
        let stages = document.getElementsByClassName("stages");

        for (const key in stages) {
          if (stages.hasOwnProperty(key)) {
            const element = stages[key];

            let line_to_block = $(element)
              .find(".stages__line")
              .data("line_to_block");
            let position_line = stages_line_corditat(element, line_to_block);

            $(element).find(".stages__line").css({ top: position_line.top });
            $(element).find(".stages__line").height(position_line.height);
          }
        }
      }
    }
    function stages_line_corditat(element, line_to_block) {
      let first_item_list = $(element).find(".stages__item").first();
      let last_item_list = $(element).find(".stages__item").last();

      let height_first_item_list,
        position_first_item_list,
        height_last_item_list,
        position_last_item_list,
        top_position_line;
      let position_line = {};

      if ($(first_item_list[0]).length > 0) {
        height_first_item_list = first_item_list.height();
        // console.log(first_item_list.offset().top);

        position_first_item_list = first_item_list.offset().top;
        // position_first_item_list = first_item_list[0].offsetTop;
      }

      if ($(last_item_list[0]).length > 0) {
        height_last_item_list = last_item_list.height();
        // position_last_item_list = last_item_list[0].offsetTop;
        position_last_item_list = last_item_list.offset().top;
      }
      // ///////////////////

      if (line_to_block == true) {
        top_position_line = $(".page__main_detail").last().offset().top;

        position_line.top = -(position_first_item_list - top_position_line);
        position_line.height =
          position_last_item_list -
          top_position_line +
          height_last_item_list / 2;
      } else {
        position_line.top = height_last_item_list / 2;
        position_line.height =
          position_last_item_list - position_first_item_list;
      }
      return position_line;
    }

    // ==============
    // ====Line end ====
    // ==============

    if ($(".tab").length > 0) {
      $(".tab__header_item").on("click", function () {
        $(".tab__header_item").removeClass("tab__header_item-active");
        $(this).addClass("tab__header_item-active");
        let id = $(this).data("id");

        $(".tab__main_item").removeClass("tab__main_item-active");
        $(`#${id}`).addClass("tab__main_item-active");

        show_line();
      });
    }
  }

  {
    if ($(".seo_step").length > 0) {
      let seo_steps = $(".seo_step").find(".step__sections");
      // let seo_steps_length = seo_steps.length;

      let cordination_seo_step1 = $(seo_steps[0]).offset().left;
      let cordination_seo_step3 = $(seo_steps[1]).offset().left;
      let seo_step_width = cordination_seo_step3 - cordination_seo_step1;
      $(".step__line").width(seo_step_width);
      window.addEventListener("resize", function (event) {
        let seo_steps = $(".seo_step").find(".step__sections");
        // let seo_steps_length = seo_steps.length;

        let cordination_seo_step1 = $(seo_steps[0]).offset().left;
        let cordination_seo_step3 = $(seo_steps[1]).offset().left;
        let seo_step_width = cordination_seo_step3 - cordination_seo_step1;
        $(".step__line").width(seo_step_width);
      });
    }
  }
});

// $(document).ready(function(){

//     greenSlider();
// });
// $(window).on('resize', function(){

//      greenSlider();
// });

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 99999,
      settings: "unslick",
    },
    {
      breakpoint: 777,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const sl = $(".service__box_logo").slick(settings);

$(window).on("resize", function () {
  // console.log( $(window).width() > 540);
  if ($(window).width() < 777) {
    $(".slick-arrow").removeClass("hidden");
  } else {
    $(".slick-arrow").addClass("hidden");
  }
  if ($(window).width() < 777 && !sl.hasClass("slick-initialized")) {
    $(".service__box_logo").slick(settings);
  }
});
if ($(window).width() < 777) {
    $(".slick-arrow").removeClass("hidden");
  } else {
    $(".slick-arrow").addClass("hidden");
  }

$(".slick-prev").on("click", function () {
  $(".service__box_logo").slick("slickNext");
});
$(".slick-next").on("click", function () {
  $(".service__box_logo").slick("slickPrev");
});
