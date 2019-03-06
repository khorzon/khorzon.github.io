/* Wyszukiwanie elementóœ po ID */

let section = document.getElementById('about');

console.log(section);
console.dir(section);

section.style.backgroundColor = 'pink';


/* Wyszukiwanie elementów po klasie */


let paragraf = document.getElementsByClassName('content');


console.log(paragraf);
console.dir(paragraf);


for (let i=0; i<paragraf.length; i++)
{

paragraf[i].style.backgroundColor = 'yellow'; // zmienia kolor dla pjedynczego elementu
}

/* Wyszukiwanie pod znaczniku // Tagu */


let heading = document.getElementsByTagName('h2');

heading[0].style.backgroundColor = 'green';


console.log(heading);
console.dir(heading);

/* Wyszukiwanie po selektorach */ // ta metoda jest wolniejsza

let firstPar = document.querySelector('.content'); //można po wszystkich elementach css-a
console.log(firstPar);


let allPar = document.querySelectorAll('.content');
console.log(allPar);
