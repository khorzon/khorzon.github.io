let numberArray = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
function chooseSort(insArray) {
    for (let i = 0; i < insArray.length; i++) {
        for (let k = i + 1; k < insArray.length; k++) {
            if (insArray[i] > insArray[k]) {
                let temp = insArray[k];
                insArray[k] = insArray[i];
                insArray[i] = temp;
            }
        }
    }
    return insArray;
}
let sortedArray = chooseSort(numberArray);
console.log(sortedArray);