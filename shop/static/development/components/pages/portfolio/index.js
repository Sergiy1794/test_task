import "./index.scss";

function resizeNameCategoresInGalery() {
  [...$(".sliders__items")].map((item, index) => {
    let all_imagesGalery = $(item).find('[data-fancybox="images-preview"]');
    if (all_imagesGalery.length > 0) {
      [...all_imagesGalery].map((item) => {
        $(item).data("fancybox", `images-preview${index}`);
        item.dataset.fancybox = `images-preview${index}`;
      });
    }
  });
}

function slidersTopPositionControl() {
  let slideHeight = $(
    $(".sliders__our_projects").find(".slick-current")[0]
  ).innerHeight();
  $(".sliders__our_projects_control-next")[0].style.top = `${
    slideHeight / 2
  }px `;
  $(".sliders__our_projects_control-prew")[0].style.top = `${
    slideHeight / 2
  }px `;
}

function sliders__our_projects() {
  $(".sliders__our_projects").on("init", function (event, slick) {
    setTimeout(() => {
      if ($(".sliders__our_projects").length > 0) {
        let innerHeight = $(
          $(".sliders__our_projects").find(".slick-track")[0]
        ).innerHeight();

        $(".sliders__our_projects").height(innerHeight + 45);
        $(".slick-track").height(innerHeight + 10);

        slidersTopPositionControl();
      }

      [...$(".sliders__items")].map((item) => {
        let index = $(item).data("slick-index");
        let all_imagesGalery = $(item).find('[data-fancybox="images-preview"]');

        if (all_imagesGalery.length > 0) {
          [...all_imagesGalery].map((item) => {
            $(item).data("fancybox", `images-preview${index}`);
            item.dataset.fancybox = `images-preview${index}`;
          });
        }
      });
    }, 0);
  });

  let sliders__our_projects = $(".sliders__our_projects").slick({
    centerMode: true,
    slidesToShow: 3,
    dots: true,
    arrows: false,
    swipe: true,
    //  autoplay: true,
    autoplaySpeed: 1800,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: "unslick",
      },
    ],
  });

  $(".sliders__our_projects_control-prew").on("click", function () {
    sliders__our_projects.slick("slickPrev");
  });
  $(".sliders__our_projects_control-next").on("click", function () {
    sliders__our_projects.slick("slickNext");
  });
  sliders__our_projects.on("beforeChange", function (
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    let activeSlider = slick.$slides[currentSlide];
    console.log($(activeSlider).find(".descriptions")[0]);
    console.log($(activeSlider).find(".descriptions")[0].innerHTML);

    $(".descriptions_all")[0].innerHTML = $(activeSlider).find(
      ".descriptions"
    )[0].innerHTML;
    console.log();
    console.log(nextSlide);
  });
}

$(window).on("resize", function () {
  var width = $(window).width();
  if (width <= 768) {
    resizeNameCategoresInGalery();
    onShowHoverBoxActive();
  } else {
    if (!$(".sliders__our_projects").hasClass("slick-initialized")) {
      sliders__our_projects();
    } else {
      slidersTopPositionControl();
    }
  }
});

var width = $(window).width();

if (width <= 768) {
  resizeNameCategoresInGalery();
  onShowHoverBoxActive();
} else {
  if (!$(".sliders__our_projects").hasClass("slick-initialized")) {
    sliders__our_projects();
  } else {
    slidersTopPositionControl();
  }
}

function onShowHoverBoxActive() {
  [...$(".sliders__items")].map((item) => {
    let heightItem = $(item).height();
    $(item).find(".hover_box")[0].style.top = `${heightItem - 20}px `;

    $(item).on("click", function () {
      if (!$(this).find(".hover_box").hasClass("active")) {
        $(".hover_box").removeClass("active");
        $(this).find(".hover_box").addClass("active");

        let hover_mobile = $(this)
          .find(".hover_box")
          .find(".hover_box_mobile")
          .height();
        $(this).find(".hover_box").height(hover_mobile);
      } else {
        $(item).find(".hover_box").removeClass("active");
      }
    });
  });
}
