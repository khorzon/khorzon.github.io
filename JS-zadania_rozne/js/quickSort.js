let numberArray = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
function quickSort(insArray) {
    if(insArray.length>=1){
        let left =[];
        let right =[];
        let sortedArray =[];
        let reference = insArray.shift();
        for(let i =0; i<insArray.length; i++){
            if(insArray[i]<reference){
                left.push(insArray[i]);
            }
            else{
                right.push(insArray[i]);
            }
        }
        return sortedArray.concat(quickSort(left), reference, quickSort(right));
    }
    else{
        return insArray;
    }
}
let sortedArray = quickSort(numberArray);
console.log(sortedArray);