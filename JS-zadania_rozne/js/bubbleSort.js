numberArray = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
function bubbleSort(insArray) {
    for (let i = 0; i < insArray.length - 1; i++) {
        for (let j = 0; j < insArray.length - i; j++) {
            if (insArray[j] > insArray[j + 1]) {
                let temp = insArray[j];
                insArray[j] = insArray[j + 1];
                insArray[j + 1] = temp;
            }
        }
    }
    return insArray;
}
let sortedArray = bubbleSort(numberArray);
console.log(sortedArray);