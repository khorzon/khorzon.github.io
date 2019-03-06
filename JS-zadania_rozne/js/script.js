let word = 'Akademia 108';

function reverse(sentence) {
    let arraySentence = sentence.split('');
    arraySentence.reverse();
    return arraySentence.join('');
}

let reverseWord = reverse(word);
console.log(reverseWord);