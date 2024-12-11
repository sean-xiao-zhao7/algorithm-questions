// Given an integer array nums sorted in non-decreasing order,
// remove some duplicates in-place such that each unique element appears at most twice.
// The relative order of the elements should be kept the same.

/**
 *
 * @param {number[]} inputArray
 * @returns {number[]}
 */

export function dedupSorted2(inputArray) {
    let count = 0;
    let prev = null;
    let index = 0;
    let length = inputArray.length;
    while (index < length) {
        if (inputArray[index] === prev) {
            if (count < 2) {
                count++;
                index++;
            } else {
                inputArray.splice(index, 1);
                length--;
            }
        } else if (inputArray[index] !== prev) {
            prev = inputArray[index];
            count = 1;
            index++;
        }
    }
}

export function dedupSorted2Solution(inputArray) {
    let count = 0;
    for (const index in inputArray) {
        if (count < 2 || inputArray[index] > inputArray[index - 2]) {
            inputArray[count] = inputArray[index];
            count++;
        }
    }
    return count;
}

export function generateInput(length, max) {
    return Array.from(new Array(length), (_) =>
        Math.floor(Math.random() * max)
    ).sort();
}
