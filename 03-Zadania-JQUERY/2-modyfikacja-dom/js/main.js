$(document).ready(function () {

    let divContainer = $('#content');
    let butTf = $('<button>LastToFirst</button>');
    let butTl = $('<button>FirstToLast</button>');

    divContainer.append(butTf);
    divContainer.append(butTl);

    for (let i = 1; i < 6; i++) {
        $('#content').append(`<p>To jest paragraf ${i}`);
    }


    butTf.click(function () {
        let lastP = $('#content p:last-of-type');

        $('#content p:first-of-type').before(lastP);
        $('#content p:first-of-type').css('marginTop', '0px');


    });
    butTl.click(function () {
        let firstP = $('#content p:first-of-type');
        $('#content p:last-of-type').after(firstP);
        $('#content p:last-of-type').css('marginTop', '0px');


    });
})