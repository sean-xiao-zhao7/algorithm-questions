/**
 * Find missing numbers up to input and return all in array, sorted asc.
 *
 * @param upperLimit number the max integer to find missing numbers until.
 * @param inputArray number[] array with some missing numbers, sorted asc.
 * @returns missingNums number[] array of numbers missing.
 */
function findMissingNums(maxNum: number, inputArray: number[]) {
    const missingNums: number[] = [];
    let counter = 1;
    let index = 0;
    while (counter < maxNum + 1) {
        if (inputArray[index] === counter) {
            counter++;
            index++;
        } else {
            missingNums.push(counter);
            counter++;
        }
    }
    return missingNums;
}

const result = findMissingNums(10, [1, 4, 6]);
console.log(result);
