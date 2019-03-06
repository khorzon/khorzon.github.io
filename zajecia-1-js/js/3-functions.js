sayHello(); //funkcje jako funkcje mozna wywołąć przed zdefiniowaniem bo parser leci 2 razy

/* Definicja funkcji */

function sayHello(){
console.log('Hello!');
}
// Wywołąnie funkcji


// Wyrażenia funkcyjne 


//
const sayName = function (){
    console.log('Łukasz2');
}

sayName(); //wywołąnie takiej funkcji nie da rady wywołać przed deklaracją


/* parametry funkcji */

function printInfo(name='Jan'){
    console.log('Im yout father, ' + name);
}

printInfo('Luk');
printInfo('Adam');
printInfo();


/* Napisz funkcję, która wyświetli wynik doddawania dwóch dowolnych liczb */

function addNumbers(num1,num2){  //parametry
    // let liczba1 = a;
    // let liczba2 = b;
    // wynik = a + b;
    // console.log(num1+num2);
    return num1 + num2;  //zwracanie wartosci funkcji  - zawsze jesli chcemy korzystac z wyniku funkcji
    //po returnie nic się nie wykona

}

addNumbers(4,6); //argumenty
addNumbers(10,345);

let result = addNumbers(7,7);
console.log(result);

console.log('Wynik dodawanie to' + addNumbers(5,2));


/* Funkcje strzałkowe */

const multiplyNumbers = (num1,num2) => {
    console.log(num1*num2)
}

multiplyNumbers(5,78);
//  z jednym parameterem nie trzeba dawać nawiasów
const square = a => a*a
sqnumber = 9;
let squaredNumber = square(sqnumber)

console.log(squaredNumber);
