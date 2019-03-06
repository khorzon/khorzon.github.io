'use strict'; //uzywanie strict, nie dopuszcza zrobienia zmiennej bez deklaracji zmiennej

// deklaracja 1 zmiennej

let number;
console.log(number);

/* definiowanie wartości zmiennej */

number = 2*4;

console.log(number);

let name = 'Łukasz';
console.log(name);

let newNumber = number;
console.log(newNumber);

let fname, sname /* deklaracja dwoch zmiennych w jednej linii */

let age=18, height=172; /* deklaracja 2 zmiennych z przypisaniem */

// weight = 72; 
/* mozna przypisać wartosc zmiennej bez deklaracji */

// console.log(weight);

// roznice pomiedzy let i var

// zmiennej let nie da rady z redeklarować
// zmienną let można redeklarować

let userAge=50;
userAge = 30; 

// let userAge=40; sposob niepoprawny

console.log(userAge);

var userName = 'Adam';
userName = 'Paweł';
var userName='Antoni';


console.log(userName);


/* STAŁĘ w JS, kiedyś nie było */

const numberOfMonths = 12;
console.log(numberOfMonths);
// numberOfMonths = 6; nie można redefiniować stałych

