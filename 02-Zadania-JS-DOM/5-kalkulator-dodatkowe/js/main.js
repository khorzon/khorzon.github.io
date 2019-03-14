let numbers = document.querySelectorAll('.number.button');
let resultField = document.getElementById('result');

numbers.forEach(function(element){
    element.addEventListener('click',function(){
        resultField.innerHTML += element.innerHTML;
    })
})
let operationButtons = document.querySelectorAll('.operation.button');
operationButtons.forEach(function(element){
    element.addEventListener('click', function(){
        console.log(number1);        
        resultField.innerHTML += element.innerHTML;

    })
})
let countButton = document.getElementById('count');
countButton.addEventListener('click', function(){
    let equation = resultField.innerHTML;
    let result = eval(equation);
    resultField.innerHTML = result;
})

let deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', function(){
        resultField.innerHTML = '';
})
