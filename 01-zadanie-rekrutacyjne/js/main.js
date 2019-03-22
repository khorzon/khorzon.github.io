$(document).ready(function () {
    /* Query selector of submit button */
    $('input[type="submit"]').click(function (e) {
        /* Don't make default action */
        e.preventDefault();
        /* Launching checking instructions */
        checkIfEmpty();
        /* LAunching validating instructions */
        validateForm();
        /* Making default action if Validation is OK*/
        if ((validateForm() === true) && (checkIfEmpty() === true)) {
            window.location = this.href;
        }
    });
});
function checkIfEmpty() {
    /* Cleaining red alerts in case field was filled with data since last attempt of validation */
    let redAlerts = $('.red-alert-no-data');  /* Collection of all red-alerts active */
    $.each(redAlerts, function (index, element) {
        let prevElem = element.previousElementSibling;
        if ($(prevElem).type === 'radio') {    /* removing red-alert class from radio buttons */
            if (prevElem.checked === true) {
                $(element).removeClass('red-alert-no-data').text(''); /* Adding red class to alert-box */
            }
        }
        else if ($(prevElem).val() !== '') { /* removing red-alert class from name, email and phone inputs */
            $(element).removeClass('red-alert-no-data').text('');
        };
    });
    /* Get collection if input fields without submit button - it does not contain the CITY value! */
    let inputFields = $('input:not([type="submit"])');
    /* Now Checking if any field is empty or unchecked */
    $.each(inputFields, function (index, element) {
        let nextElem = element.nextElementSibling; /* Searching for next element, in this case it would be P Tag */
        if (element.type === 'radio') {    /* Checkich radio buttons */
            if (element.checked === false) {
                $(nextElem).addClass('red-alert-no-data').text('Proszę wyrazić zgodę');
            }
        }
        else if ($(element).val() === '') { /* Checking text, email and phone inputs */
            $(nextElem).addClass('red-alert-no-data').text('Proszę wypełnić pole');
        };
    });
    let redCount = $('.red-alert-no-data').length; /* Counting red alerts to return status of function */
    if (redCount === 0) {
        return true;
    }
    else {
        return false;
    }
}
function validateForm() {
    let emailField = $('#email'); /* cathing email input */
    let telField = $('#tel'); /* catching tel input */
    let nextTelElem = telField[0].nextElementSibling;  /* next elelment to tel input */
    let nextEmailElem = emailField[0].nextElementSibling; /* next element to email */

    /* Validation of Telephone number */
    let arrTel = telField.val().split("");
    arrTel.forEach(function (element) {  /* Making a loop on splitted string */
        if (isNaN(element) || arrTel.length < 6) { /* Searching for Not a Numbers Elements and length of number */
            $(nextTelElem).addClass('red-alert-no-data').text('Niedoposzczalne są inne znaki niż cyfry lub numer jest za krótki');
            return false;
        }
    })
    /* E-mail validation */
    /* Making a regular expression for comparsion*/
    let expr = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;
    /* Compraing email from input with expresion */
    let mail = emailField.val();
    if (expr.test(mail)) {
        //Correct Addres
    }
    else {
        $(nextEmailElem).addClass('red-alert-no-data').text('Niepoprawny adres E-mail');
        return false;
    }
    return true;
}
