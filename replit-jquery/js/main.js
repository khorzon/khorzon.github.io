$(document).ready(function(){



showNav();





})
/* Tutaj wypisujemy funkcje */

function showNav(){
    $('.red').on({
        click: function(){
            $('.main-nav').toggleClass('active');
        }
    })    
    $('.main-nav').on({
        click: function(){
            $(this).toggleClass('active');
        }

    })
}
