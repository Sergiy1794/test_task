import './index.scss'

$('.sliderMainPhoto').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.sliderNavbar'
})
let sliderNavbar = $('.sliderNavbar').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.sliderMainPhoto',
    arrows: false,
    dots: false,
    focusOnSelect: true,
})

$('.sliderNavbar_next').on('click',function(){

    sliderNavbar.slick("slickNext");
  });

function widthSliderFooter(){
    let allSliderGalery = $('.product__gallery').width();
    let widthNavbar = allSliderGalery*0.8;
    let widthBoxVideo = allSliderGalery*0.2;
    $('.sliderNavbar_wrap').width(widthNavbar)
    $('.boxVideo').width(widthBoxVideo)
}
widthSliderFooter();
 
window.onresize = function(event) {
    widthSliderFooter();
};



class ProductCard {

    showProductDescription(){
        [...$('.product__description')].map(item=>{
            $(item).children('.header').on('click',function(){
                if(!$(this).parents('.product__description').hasClass('active')){
                    $('.product__description').removeClass('active');
                    $(this).parents('.product__description').addClass('active');

                }else{
                    $(this).parents('.product__description').removeClass('active');
                }
            })
        })
    }

    run(){
        this.showProductDescription()
    }
}

let productCard = new ProductCard();

productCard.run();