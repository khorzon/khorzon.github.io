/* Selektory znaczników */
$(document).ready(function(){
let paragaraph = document.getElementsByTagName('p');

let paragraphJQ = $('p');


console.log(paragaraph);
console.log(paragraphJQ);

paragraphJQ.css('background', 'gray');

/* Selektory ID */

let sectionAbout = $('#about');
console.log(sectionAbout);


/* Selektor klasy */

let headings = $('.main-header');
console.log(headings);

})