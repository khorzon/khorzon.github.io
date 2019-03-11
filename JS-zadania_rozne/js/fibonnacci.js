let searchedNumber = 100;
function fibonacci(number){
    if(number === 0 || number === 1){
        return number;
    }
    else{
            fibNumber = fibonacci(number-1) + fibonacci(number-2);
    }
    return fibNumber;
}
result = fibonacci(searchedNumber);
console.log(`${searchedNumber} liczba ciągu Fibonacciego wynosi: ${result}`);