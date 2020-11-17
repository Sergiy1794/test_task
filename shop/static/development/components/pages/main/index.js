import './index.scss'


var scrolled = window.pageYOffset || document.documentElement.scrollTop;
if ($('.is_front_page').length>0){
  scrolled > 0 ? $("header").addClass("header_bg") : $("header").removeClass("header_bg");
}



window.onscroll = function() {
    
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if ($('.is_front_page').length>0){
        scrolled > 0 ? $("header").addClass("header_bg") : $("header").removeClass("header_bg");
    }
}


$('.slider_hero').slick({
    arrows: false,
    dots:true,
    lazyLoad: "anticipated",
    // autoplay: true,
    // autoplaySpeed: 1800,
})


$('.sliders__our_projects').on('init', function(event, slick){
    
   setTimeout(()=>{
    if($('.sliders__our_projects').length>0){
        let innerHeight =  $($('.sliders__our_projects').find('.slick-track')[0]).innerHeight();
 
        console.log(innerHeight );
        $('.sliders__our_projects').height(innerHeight+45);
        $('.slick-track').height(innerHeight+10);
     }
   },0)

});


$('.sliders__our_projects').on('reInit', function(event, slick){
    console.log("reInit")
});

let sliders__our_projects= $('.sliders__our_projects').slick({
    centerMode: true,
    slidesToShow: 3,
    dots: true,
    arrows: false,
    swipe: true, 
    autoplay: true,
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
          }
        },
        {
          breakpoint: 658,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            centerMode: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            infinite: true,
          }
        }
      
      ]
})
 

 