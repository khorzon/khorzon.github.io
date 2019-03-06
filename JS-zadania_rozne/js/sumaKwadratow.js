numbersArray = [0, 1, 2, 3, 4, 5];

function arPower(insArray) {
    let sum = 0;
    let power =0;

    insArray.forEach(function (element) {
        power = Math.pow(element, 2);
        sum += power;
    });

    return sum;
}
let sumOfPowers = arPower(numbersArray);

console.log(`wynik dodawania sumy kwadratów wynosi: ${sumOfPowers}`);