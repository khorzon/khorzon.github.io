$(document).ready(function () {
    function btccourse() {
        $.getJSON('https://blockchain.info/pl/ticker', function (JsonData) {
            let oldCourse = parseFloat($('#current-exchange-price').text());
            let h3insert = $('#current-exchange-price');
            console.log(JsonData);
            let PLNData = JsonData.PLN;
            course = PLNData.last;
            console.log(course);
            console.log(oldCourse);
            h3insert.text(course);
            if (course > oldCourse) {
                h3insert.removeClass();
                h3insert.addClass('green');
            }
            else if (course < oldCourse) {
                h3insert.removeClass();
                h3insert.addClass('red');
            }
            else {
                h3insert.removeClass();
                h3insert.addClass('black');
            }
        }
        );
    }
    //OBSLUGA CLICKA


    btccourse();
    let interval = setInterval(btccourse, 5000);


    $('button').click(function(){
        console.log('click on any Button')
        console.log($(this).val())
        clearInterval(interval);
        interval = setInterval(btccourse, $(this).val());
    })
})
