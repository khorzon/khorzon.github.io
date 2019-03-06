/* Tablice */

let names = ['Ania', 'Patrycja', 'Paweł'];

console.log(names);

console.log(names[0]);

console.log(`${names[0]} i ${names[1]}`);

names[3] = 'Joanna';

console.log(names);

names.push('Beata'); // dodawanie elementu na koncu tablicy

console.log(names);

console.log(names.length); // okreslenie dlugosci tablicy 

console.log(names.join);

let stringFromTable = names.join(''); // pusty ciag znakow pomiedzy wyrazami z tablicy

console.log(stringFromTable);

let tableRevesed = names.reverse();

console.log(tableRevesed);

console.log(names.sort());

/* Typy danych w tablicach */

let newArray = [1, 'Alicja', true, ['Adam', 'Piotr'], {name: 'Łukasz'}]; // można mieszać typy danych w tablicach

console.log(newArray);

console.log(newArray[3][1]); // Z elemenu na indeksie 3 wyciagnij element na indeksie 1


