$(document).ready(function() {
    $('#burgeer').on('click', function(){
        $('nav').addClass('menu-block');
        $('#header-menu').show();
        $('#burgeer').hide();
        $('#close').show();
    });
    
    $('#close').on('click', function(){
       $('nav').removeClass('menu-block');
       $('#header-menu').hide();
       $('#burgeer').show();
       $('#close').hide();

    });
});