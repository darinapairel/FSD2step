$(document).ready(function() {
    var p = 's';
    var isVisible = false;
     
    $('.expanded-button').on('click', function(){
      isVisible = isVisible?false:true;
      isVisible ?
        $(this).next().show() :
        $(this).next().hide();    
      return isVisible;
    })
  })