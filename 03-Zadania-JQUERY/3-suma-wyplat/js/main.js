$(document).ready(function () {
    let sum = 0;
    $($('#count-sum')).click(function () {
        $('.salary').each(function (index, element) {
            sum += parseFloat($(element).html());
        })
        $('#sum').html(sum);
    });
});

