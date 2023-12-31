$(function () {
    $('#RangePicker').daterangepicker({
        "locale": {
            "format": "YYYYMMDD",
            "separator": " ~ ",
            "applyLabel": "확인",
            "cancelLabel": "취소",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "daysOfWeek": ["월", "화", "수", "목", "금", "토", "일"],
            "monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            "firstDay": 1
        },
        "startDate": "2023-12-01",
        "endDate": "2023-12-31",
        "drops": "down"
    }, function (start, end) {
        console.log('New date range selected: ' + start.format('YYYYMMDD') + ' to ' + end.format('YYYYMMDD') );
    });
});