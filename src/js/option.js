import "../../libs/jquery-nice-select-master/js/jquery.nice-select-with-search-multiple"
$(document).ready(function() {
  $('.select').niceSelect();
  $('.nice-select ul.list').last().append('<div class="button-submit-group"><button class="link btn-submit">Подтвердить</button><button class="link btn-clear disabled">Отчистить</button></div>')
  
  $('.btn-submit').on('click', function(){
    var totalNumGuests = [...document.querySelectorAll('.count')]
    totalNumGuests = totalNumGuests.map((el)=>el.innerHTML).map((el)=>Number(el)).reduce((a,v)=>a +v)
    document.querySelector('.multiple-options').innerHTML = `Гостей: ${totalNumGuests}`;
  });
  
  function plusCounter(el) {
    var currentCount = 1;
    return function() {
      el.nextElementSibling.innerHTML=currentCount;
      return currentCount++;
    };
  }

  function minusCounter(el) {
    var currentCount = 0;
    return function() {
      el.previousElementSibling.innerHTML=currentCount;
      return currentCount>0?currentCount--:0;
    };
  }    

  var counterfnPlus = [],
      counterfnMinus = [],
      buttonminus = [...document.getElementsByClassName('minus')],
      buttonplus = [...document.getElementsByClassName('plus')];
       
    buttonplus.map((el,j)=>{
      counterfnPlus[j] = plusCounter(el); 
      el.addEventListener('click', counterfnPlus[j] );
    });
    buttonminus.map((el,j)=>{
      counterfnMinus[j] = minusCounter(el);
      el.addEventListener('click', counterfnMinus[j] );
    });  


});