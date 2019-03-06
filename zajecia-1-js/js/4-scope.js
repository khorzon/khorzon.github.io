/* Zasięgi zmiennych */

let result = 10;

function  addNumbers(){
    let result = 2 +2;

    // newResult=17; 
    // ta zmienna stała się zmienną globalną, widoczną poza funkcją
    console.log(result);
}

addNumbers();

console.log(result);
// console.log(newResult);

if(true){
    var number = 20; //var tutaj zrobi się globalną zmienną w pętli też, let jest lokalną
    let newNumber = 15; //let jest tutaj tylko lokalny, w pętlach też
}

console.log(number);
console.log(newNumber);