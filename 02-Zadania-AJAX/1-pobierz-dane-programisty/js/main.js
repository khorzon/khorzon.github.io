$(document).ready(function () {
    $('#container').append('<button>Pobierz dane</button>');
    $('button').click(function () {
        loadData('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php');
    });
});
function loadData(url) {
    $('#container').append('<div id="dane-programisty"></div>');
    $.getJSON(url,
        function (JSONData) {
            for (let prop in JSONData) {
                $('#dane-programisty').append(`<p class="bolder">${prop}: </p>`);
                $('#dane-programisty').append(`<p>${JSONData[prop]}: </p>`);
            }
        }
    );

}


