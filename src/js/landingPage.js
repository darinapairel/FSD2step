$(document).ready(function(){
    $('.mainSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        infinite:true,
        autoplay:true,
        autoplaySpeed:5000,
        arrows:false,        
        cssEase: 'linear',
        variableWidth: true,

    });
});