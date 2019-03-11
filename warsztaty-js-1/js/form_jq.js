$(document).ready(function () {
    $('form').submit(function (e) {
        e.preventDefault();
        //let valueInputName = $('#fname').val();
        //let valueInputSurname = $('#lname').val();

        /* LUB inna zepranie value */

        //       let valueInputName = $('input').eq(0).val();
        //       let valueInputSurname = $('input').eq(1).val();
        //

        /* LUB pętla po wszystkich polach */

        $.each($('input:not([type="submit"])'), function (i, e) {

            console.log($(e).val());

        });

        //  console.log(valueInputName);
        //   console.log(valueInputSurname);
        //   $('#formularz').append(`<h2>Imię to: ${valueInputName} </h2>`);
        //   $('#formularz').append(`<h2>Nazwisko to: ${valueInputSurname} </h2> `);
    });
})