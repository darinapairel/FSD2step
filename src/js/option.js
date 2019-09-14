import "../../libs/jquery-nice-select-1.1.0/js/jquery.nice-select"
$(document).ready(function() {
    $('.select').niceSelect();
    function plusCounter(el) {
      var currentCount = 1;
      return function() {
        console.log(el.nextElementSibling, currentCount)
        el.nextElementSibling.innerHTML=currentCount
        return currentCount++;
      };
    }
    function minusCounter(el) {
      var currentCount = 0;
      return function() {
        el.previousElementSibling.innerHTML=currentCount
        return currentCount>0?currentCount--:0;
      };
    }    

    var counterfnPlus = [],
        counterfnMinus = [],
        buttonminus = [...document.getElementsByClassName('minus')],
        buttonplus = [...document.getElementsByClassName('plus')];
         
      buttonplus.map((el,j)=>{
        counterfnPlus[j] = plusCounter(el); 
        el.addEventListener('click', counterfnPlus[j] )
      });
      buttonminus.map((el,j)=>{
        counterfnMinus[j] = minusCounter(el);
        el.addEventListener('click', counterfnMinus[j] )
      });  

      $('.nice-select ul.list').last().append('<div><button class="link">Подтвердить</button><button class="link disabled">Отчистить</button></div>')

});