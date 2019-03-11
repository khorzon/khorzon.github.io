$(document).ready(function(){



    showNav();
    
    
    
    
    
    })
    /* Tutaj wypisujemy funkcje */
    
    function showNav(){
        $('.arrow').on({
            click: function(){
                $('.main-nav').toggleClass('active');
                $('.arrow').toggleClass('arrow-active');
            }
        })    
        $('.main-nav').on({
            click: function(){
                $(this).toggleClass('active');
            }
    
        })
    }
    