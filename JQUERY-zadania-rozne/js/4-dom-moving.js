$(document).ready(function(){ // OBLIGATORYJNE - Lepije mieć :
$('.users-list li').each(function(index, element) { // na dowórt index i elemnt niz w js
    $(element).css('margin-left', index*10 + 'px');
}  )
let secondListItem = $('.user-list li').eq(1); // wyciganie drugie elementu jako element JQ
console.log(secondListItem);






})// OBLIGATORYJNE - Lepije mieć :)