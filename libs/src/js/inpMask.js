import "../../libs/jquery.maskedinput-master/src/jquery.maskedinput.js";

$(document).ready(function(){
    $(".date").mask(
        "99.99.9999",
        {placeholder:"ДД.MМ.ГГГГ"}
    );
})