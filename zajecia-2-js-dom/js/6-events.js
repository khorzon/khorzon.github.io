/* Zdarzenia jako metody obiektów DOM */

let heading = document.querySelector('section h2');

function changeColor(){
    this.style.backgroundColor = 'red';
}

function setText(){
    this.innerText = 'Nowy Tekst';
}
heading.onclick = changeColor; // brak nawiasów, bo tak jakby wrzucamy funkcję do obiektu. gdybyśmy dali nawiasy to by wywoało funkcję
// heading.onclick = setText; // tutaj mamy nadpisanie funkcji do jednego zdarzenia nie moga byc dodane 2 funkcje

heading.addEventListener('click', changeColor);
heading.addEventListener('click', setText); // event listenerem mozna dodać 2 słuchania i akcje na jednym zdarzeniu;


document.querySelector('p').addEventListener('click', function(){
    this.style.backgroundColor = 'red';
    heading.removeEventListener('click', setText);
    })

console.dir(heading);

/* Obsługa zdarzeń */

document.querySelector('a').addEventListener('click', function(event){

    event.preventDefault();
    event.stopPropagation();
    console.log(event);
    this.style.backgroundColor = 'pink';

})

document.body.addEventListener('click', function(){
    this.style.backgroundColor = 'blue';
})