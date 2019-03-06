function stringCount(word, letter){
    word = word.toLowerCase();
    let arrayWord = word.split('');
    let counter =0;
    arrayWord.forEach(function(litera){
        if(litera===letter){
            counter +=1;
        }
    })
    return counter;
}

result = stringCount('Akademia 108', 'a');
console.log('ilość wystąpień podanej litery to: '+ result);