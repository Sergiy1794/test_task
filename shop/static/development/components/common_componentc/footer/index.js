import './index.scss'
 


$('.navbar_footer').find('.header').on('click',function(){
    if(!$(this).parents('.navbar_footer').hasClass('active')){
        $(this).parents('.navbar_footer').addClass('active')
    }else{
        $(this).parents('.navbar_footer').removeClass('active')
    }
})