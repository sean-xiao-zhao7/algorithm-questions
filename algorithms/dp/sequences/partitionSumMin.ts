/**
 * Determine if input array can be partitioned by 2, where each sub-array sums to the same sum.
 *
 * @param array integer 1D array.
 */
function partitionSumMinRecursive(array: number[], targetSum: number) {
    if (targetSum === 0) {
        return true;
    }

    if (array.length === 1) {
        return array[0] === targetSum;
    }

    const currentElement = array[0];
    const newTarget = targetSum - currentElement;
    const newArray = array.slice(1);

    const takeCurrentBool = partitionSumMinRecursive(newArray, newTarget);
    const dontTakeCurrentBool = partitionSumMinRecursive(newArray, targetSum);

    return takeCurrentBool || dontTakeCurrentBool;
}

/**
 * Bottom up. From array of length 1 and target of 0, to length of N and target of "target".
 * @param array
 */
function partitionSumRTabulation() {}

/**
 * Main exec, with some input preparation.
 */
export default function main() {
    const array = [2, 3, 3, 3, 4, 5];
    const entireSum = array.reduce((x, c) => x + c, 0);
    if (entireSum % 2 !== 0) {
        console.log(entireSum, false);
    } else {
        const recursiveResult = partitionSumMinRecursive(array, entireSum / 2);
        console.log(recursiveResult);
    }
}

main();
