numberArray = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
function insertSort(insArray) {
    for (let i = 0; i < insArray.length - 1; i++) {
        if (insArray[i] > insArray[i + 1]) {
            let temp = insArray[i];
            insArray[i] = insArray[i + 1];
            insArray[i + 1] = temp;
            for (let k = i; k > 0; k--) {
                if (insArray[k] < insArray[k - 1]) {
                    let temp = insArray[k];
                    insArray[k] = insArray[k - 1];
                    insArray[k - 1] = temp;
                }
            }
        }
    }
    return insArray;
}
let sortedArray = insertSort(numberArray);
console.log(sortedArray);