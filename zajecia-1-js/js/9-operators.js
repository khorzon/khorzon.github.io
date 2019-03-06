/* Operatory arytmetyczne */

console.log(2+2);
console.log(9%5);
console.log(9%2); // test na parzystosc

let number = 10;

console.log(number);
console.log(++number); // pre inkrementacja  number += 1 lub number = number +1; 
console.log(number++); // post inkrementacja
console.log(number);

console.log(number);
console.log(--number); // pre inkrementacja
console.log(number--); // post inkrementacja
console.log(number);

/* operatory przypisania */

let age = 15;

age += 5; // age = age +5; 

console.log(age);

age %= 2 ;

console.log(age);

/* Operatory porównania */

console.log(2==2);
console.log(2=='2');
console.log(2==='2');

console.log(2!=2);
console.log(2!=='2');

console.log('imie' === 'imie');
console.log('imie' == 'imie');
console.log('imie' === 'nazwisko');

console.log(2>2);

console.log(2>=2);

/* operatory logiczne */
// /* iloczyn logiczny */ (oba muszą byc prawdą..)

console.log('name'=='name' && 2==2);


// /* iloraz logiczny */ Przynajmniej jedo musi byc prawdziwe

console.log('name'=='nasme' || 2==3); // 

/* negacja logiczna */

console.log(!(2==2));

/* operator warunkowy */

let age2 = 15;
let isMature = (age2>18)?'pelnoletni':'nieletni'; // Tworzenie warunkowej zmiennej 

console.log(isMature);

