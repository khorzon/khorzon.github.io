$(document).ready(function () {
    let heading = $('.main-header');
    heading.click(function () {
        $(this).css('background-color', 'blue'); // $ w this dlatego że musimy sie dodwolac do obiektu JQ !!!!
    })
    heading.click(function () {
        $(this).css('color', 'red'); // można do tego samego zdarzenia kilka rzeczy podpiąć
    })
    $('p').on({
        click: function () {
            $(this).css('background-color', 'red');
        },
        mouseover: function () {
            $(this).css('color', 'yellow');
        }
    });
    /* Obsługa buttona */
    let addButton = $('.add-user-button');
    let removeButton = $('.remove-user-button');
    let add10Button = $('.add-10users-button');
    addButton.on({
        click: function () {
            console.log('click!');
            let liElements = $('.users-list li');
            console.log(liElements);
            let ulList = $('.users-list');
            console.log(ulList);
            ulList.append(`<li>Users ${liElements.length + 1}</li>`);
        }
    })
    removeButton.on({
        click: function () {
            console.log('click!');
            let liElements = $('.users-list li');
            console.log(liElements);
            let ulLastElement = $('.users-list li').eq(liElements.length - 1);
            console.log(ulLastElement);
            ulLastElement.remove();
        },
        mouseover: function () {
            let liElements = $('.users-list li');
            let ulLastElement = $('.users-list li').eq(liElements.length - 1);
            ulLastElement.css('color', 'red');
        }
    })
    add10Button.on({
        click: function () {
            for (let i = 0; i < 10; i++) {
                let liElements = $('.users-list li');
                let ulList = $('.users-list');
                ulList.append(`<li>Users ${liElements.length + 1}</li>`);
            }
        }
    })
})