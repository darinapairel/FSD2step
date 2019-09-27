import "../../libs/slick-1.8.1/slick/slick"
import "../../libs/rater-master/rater"
$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 1,
        fade: true,
        arrows: true,
        dots: true,
        appendArrows:$(".carousel")
    });
    $('.room-star').rate({
        max_value:5,
        readonly: true
      });
})