/* manipulacja trescia */


let heading = document.querySelector('section h2');

let curTitle = heading.innerHTML;

console.log(curTitle);


//podmiana wartosci

heading.innerHTML = 'Zmiana <span>tytułu</span> arykułu'; // tutaj bedzie zamiana na elementy html

// heading.innerText = 'Całkiem nowy <span> tytuł </span> '; // tutaj bedzie zamiana na całkiem czysty tekst

// heading.outerHTML = '<h3>Całkiem nowy outer html jako tytuł</h3>'; // wyrzuca zawartosc razem ze znaczniekim i zamienia na tekst


/* manipulacja atrybutami */


heading.id = 'main-heading';

// heading.className = 'new-class second-new-class'; // ndpisanie klas

heading.classList.add('new-class');  // tylko dodanie nowej klasy, stara sie zachowa

//remove class

heading.classList.remove('main-title');

// przełącznie klas - toogle

heading.style.backgroundColor = 'red'; // tak nie uzywamy, raczej zmieniamy klasy. 


