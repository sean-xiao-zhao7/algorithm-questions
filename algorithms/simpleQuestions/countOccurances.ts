/**
 * countOccurances
 * Count each integer in inputArray's occurances.
 *
 * @param inputArray number[]. Array of integers with repeated values.
 * @returns occurancesArray number[]. Array of how many each integer occured.
 */
function countOccurances(inputArray: number[]) {
    const occurances: number[] = [];
    for (let item of inputArray) {
        if (typeof occurances[item] === "undefined") {
            occurances[item] = 1;
        } else {
            occurances[item] += 1;
        }
    }
    return occurances;
}

const result = countOccurances([
    0, 1, 1, 2, 3, 2, 3, 0, 0, 4, 2, 1, 2, 1, 2, 3, 4,
]);
console.log(result);
