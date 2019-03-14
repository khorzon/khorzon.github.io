$(document).ready(function () {

    function done(text){
        newH2 = $(`<h2>${text}</h2>`).addClass('invisible');

        $(newDiv).append(newH2);
        
        newH2.animate({opacity: '1'},500);
    }

    let divContent = $('#content');
    let newButton = $('<button>animate!</button>');
    divContent.append(newButton);
    let newDiv = $('<div></div>').addClass('redDiv');
    divContent.append(newDiv);

    $('button').on({
        click: function () {
            console.log('click!');
            $('.redDiv').animate({marginLeft: '100px', height: '100px', width: '100px'}, 3000, function(){
            $('.redDiv').addClass('blue');
            $('.redDiv').animate({backgroundColor: 'blue'},5000, function(){
                done('Animacja Zakońćzona!')
            });
            })
        }
    })


})