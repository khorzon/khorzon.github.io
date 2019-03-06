/* Węzeł rodzica */

let heading = document.getElementsByClassName('main-title')[0];
console.log(heading);

console.log(heading.parentElement);

heading.parentElement.style.backgroundColor = 'pink';


/* Węzeł potomstwa */

let article = document.getElementById('about');

console.log(article.children); // tutaj tylko elementy html
console.log(article.childNodes); // tutaj wyswietlają sie entery, puste znaki itp

console.log(article.firstElementChild);// tutaj tylko elementy html
console.log(article.lastElementChild);// tutaj tylko elementy html
console.log(article.lastChild);  // tutaj wyswietlają sie entery, puste znaki itp

/* Relacje z rodzenstwem */

heading.nextElementSibling.style = 'font-size: 1.5em';