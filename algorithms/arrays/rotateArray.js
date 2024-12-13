// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

/**
 *
 * @param {number[], number} rotateArray
 * @returns {number[]}
 */

export function rotateArray(inputArray, step) {
    if (step < 1 || step >= inputArray.length) {
        return inputArray;
    }

    return inputArray
        .slice(inputArray.length - step, inputArray.length)
        .concat(inputArray.slice(0, inputArray.length - step));
}

export function rotateArraySolution(inputArray) {}

export function generateInput(length, max) {
    return Array.from(new Array(length), (_) =>
        Math.floor(Math.random() * max)
    ).sort();
}
