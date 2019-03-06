/* Typy liczbowe - number*/

let age = 31;

console.log(age);
console.log(typeof age); // badanie rodzaju zmiennej

/* typ łańcuchowy - string */

let name = 'Łukasz';  // nie mieszamy rodzaju cudzysłowiu

console.log(name);
console.log(typeof name); // badanie rodzaju zmiennej

let number = '15';  // nie mieszamy rodzaju cudzysłowiu

console.log(number);
console.log(typeof number); // badanie rodzaju zmiennej


console.log('This is Luke\'s car');

console.log('My name is ' + name + ', My age is ' + age); //łączenie łańcuchów konkatenacja 

/* ECMA 6 */

// interpolacja stringów

console.log(`My name is ${name}, my age is ${age}`); // odwórcony apostrof - backtick



/* Typy logiczne boolean*/


let itIsTrue = true; 
console.log(itIsTrue);
console.log(typeof itIsTrue);

/* Typt specjalne */

let fname;
console.log(fname);

fname = null;
console.log(fname);
console.log(typeof fname);

/* Dynamiczne typowanie  */

console.log(2-'2');
console.log(2+'2');
console.log(2+true);
console.log(2+'true');
console.log(2-'true'); //wychodzi NaN - to jest liczba...
console.log(typeof (2-'true')); //wychodzi NaN - to jest liczba...
console.log((2/0)); // wychodzi infinity
console.log(Infinity+2); 



