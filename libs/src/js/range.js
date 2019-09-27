import noUiSlider from "../../libs/noUiSlider-14.0.2/src/nouislider";

$(document).ready(function(){
    var range = document.getElementById('range-price')
    var rangeVal = document.getElementById('range-value')
    noUiSlider.create(
        range,
         {
             start: [20, 80],
             connect: true,
             range: {
                 'min': 0,
                 'max': 100
             }
         }
      )
      range.noUiSlider.on('update', 
        (values)=>{
            rangeVal.innerHTML = values.join(' - ');
        })
})
