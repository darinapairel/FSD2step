import "../../libs/jquery.maskedinput-master/dist/jquery.maskedinput.js";

$(document).ready(function(){
    $(".date").mask(
        "99.99.9999",
        {placeholder:"ДД.MМ.ГГГГ"}
    );
})