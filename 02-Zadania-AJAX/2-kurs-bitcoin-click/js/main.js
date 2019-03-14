$(document).ready(function () {
    let url = 'https://blockchain.info/pl/ticker';
    $('button').on({
        click: function () {
            $.getJSON(url,
                function (JSONBtc) {
                    if (($('#buy').html() === '') || ($('#sell').html() === '')) {
                        $('#buy').html(JSONBtc.PLN.buy);
                        $('#sell').html(JSONBtc.PLN.sell);
                    }
                    else {
                        let oldBuy = parseFloat($('#buy').html());
                        let oldSell = parseFloat($('#sell').html());
                        let newBuy = JSONBtc.PLN.buy;
                        let newSell = JSONBtc.PLN.sell;
                        $('#buy').html(newBuy);
                        $('#sell').html(newSell);
                        $('#buy + i').removeClass();
                        $('#sell + i').removeClass();
                        if (newBuy > oldBuy) {
                            $('#buy + i').addClass('fas fa-arrow-up green');
                        }
                        else if (newBuy === oldBuy) {
                            $('#buy + i').addClass('fas fa-minus blue');
                        }
                        else {
                            $('#buy + i').addClass('fas fa-arrow-down red');
                        }
                        /*  */
                        if (newSell > oldSell) {
                            $('#sell + i').addClass('fas fa-arrow-up green');
                        }
                        else if (newSell === oldSell) {
                            $('#sell + i').addClass('fas fa-minus blue');
                        }
                        else {
                            $('#sell + i').addClass('fas fa-arrow-down red');
                        }
                    }
                }
            );
        }
    })
});