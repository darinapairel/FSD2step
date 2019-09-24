import '../../libs/daterangepicker-master/daterangepicker';
import moment from 'moment';

$(document).ready(function() {
    $('.calendar').daterangepicker({        
        "linkedCalendars": false,
        "showCustomRangeLabel": false,
        locale: {
            locale: moment.locale('ru'),
            cancelLabel: 'Отчистить',
            applyLabel: 'Применить'
        },
        "buttonClasses": "calendar-buttons__btn",
        "applyButtonClasses":"calendar-buttons__btn_purple",
        "cancelButtonClasses":"calendar-buttons__btn_grey"
    });
    $('.calendar').on('apply.daterangepicker', function(ev, picker){
                $('#calendar__input-first').val(picker.startDate.format('DD.MM.YYYY'));
                $('#calendar__input-second').val(picker.endDate.format('DD.MM.YYYY'));
            });
});