/* Tworzenie węzłów */

let newFooter = document.createElement('footer');

console.log(newFooter);

let footerClass = document.createAttribute('class');

footerClass.value = 'article-footer';


let paragrafy = document.querySelectorAll('section p');

let paragraphCount = paragrafy.length;

let footerContent = document.createTextNode(`artykuł ma ${paragraphCount} paragrafów`);

//trzeba utworzyc nowy wezel:

newFooter.appendChild(footerContent); //tutaj wrzucamy obiekt nowego tekstu
newFooter.setAttributeNode(footerClass); // tutaj dodalismy obiekt węzła atrybutu

document.getElementById('about').appendChild(newFooter); // wrzucamy newFooter jako ostatnie dziecko section#about


/* Dodawanie węzłów przez innym elementem */

let newHeading = document.createElement('h3');

let headingText = document.createTextNode('Nowy nagłówek');

newHeading.appendChild(headingText);

// document.getElementById('about').insertBefore(newHeading, document.querySelector('section h2'));

document.querySelector('section h2').parentElement.insertBefore(newHeading, document.querySelector('section h2'));

/* dodaj po */

document.querySelector('section h2').parentElement.insertBefore(newHeading, document.querySelector('section h2').nextSibling);

// to jest cały czas jeden obiekt, dlatego wyswyetla sie tylko jeden raz


/* Usuwanie węzłów */

document.getElementById('about').removeChild(document.getElementsByTagName('p')[0]);

    