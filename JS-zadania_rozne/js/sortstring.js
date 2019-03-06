let word = 'Akademia 108';

function sort(phrase){
    let arrayPhrase = phrase.split('');
    arrayPhrase.sort();
    return arrayPhrase.join('');
}

let sortWord = sort(word);
console.log(sortWord);