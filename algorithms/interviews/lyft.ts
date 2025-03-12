function quickSort(inputArray: number[]) {
    const length = inputArray.length;
    let pivotIndex = length - 1; // pivot is last element

    if (length === 1) {
        return inputArray;
    }

    pivotIndex = qsMovePivot(inputArray, pivotIndex);
    // const leftArray: number[] = quickSort(inputArray.slice(0, pivotIndex));
    // leftArray.push(inputArray[pivotIndex]);
    // const rightArray: number[] = quickSort(inputArray.slice(pivotIndex + 1));
    // return leftArray.concat(rightArray);
}

function qsMovePivot(inputArray: number[], pivotIndex: number) {
    console.log(pivotIndex);
    for (let index = 0; index < pivotIndex; index++) {
        if (inputArray[index] >= inputArray[pivotIndex]) {
            inputArray.splice(pivotIndex, 0, inputArray[index]);
            inputArray.splice(index, 1);
        }
    }
    console.log(inputArray);
    return pivotIndex;
}

const input = [1231, 4123, 412, 12, 1231, 4];
const sortedInput = quickSort(input);
console.log(sortedInput);
