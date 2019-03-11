$(document).ready(function(){
let heading = $('.main-header');
/* Modyfikacja zawartości */
heading.text('Nowa zawartość nagłówka');
heading.html('Nowa zawartość nagłówka ze <span> spanem </span>');
/* Czysty Javascript */
 // document.getElementById('about').innerHTML = 'Nowa zaawartość przez javascript';
 /* Metoda append, prepend, before, after */
heading.append('Wewnątrz na końcu');
heading.prepend('Wewnątrz na początku');
heading.after('Za znacznikeim');
heading.before('PRzed znacznikeim');
/* Przed każdym paramgrafem dodaj nagłówki h3 z trescia 'NAglowek h3 */
/* let paragraphs = $('p');
paragraphs.forEach(function(element){
for(let i=0; i<element.length; i++){
    element.before(`<h3>NAgłówek ${i}</h3>`);
}
}) */
let paragraphs = $('p');
paragraphs.before(`<h3>NAgłówek </h3>`);
// paragraphs.before('<h3>NAgłówek </h3>');
/* Tworzenie elementów */
let newPar = $('<p>Nowy paragraf JQ</p>');
heading.before(newPar);
/* Usuwanie elementów i ich zawartośći */
// heading.empty(); // czyszczenie zawartsci
// headinr.remove(); // usuniecie znacznika
/* Modyfikacja wyglądu */
// heading.css('color', '#f00');
// heading.css('background-color', '#0f0');
// heading.css('color', '#aaa');
heading.css({color: '#f00', backgroundColor: '#0f0'}); // przekazujemy obiekt zeby dac wiecej rzeczy
//W JQ nie stylujemy!
/* Dodawanie klas  */
$('p:nth-of-type(even)').addClass('bg-orange');
})