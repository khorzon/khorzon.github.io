numbersArray = [1, 2, 3, 4, 5, 6];

function product(insArray) {
    let product = 1;
    let sum = 0;

    insArray.forEach(function (element, index) {
        sum += element;
        product *= element;
    });
    console.log('Wynik dodawania elementów tablicy to: ' + sum);
    console.log('Wynik mnożenia elementów tablicy to: ' + product);
}
product(numbersArray);