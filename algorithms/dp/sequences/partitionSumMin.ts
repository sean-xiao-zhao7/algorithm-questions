/**
 * Determine the minimal sum differences between any 2 way partitions.
 *
 * @param array integer 1D array.
 * @returns min integer the minimum difference between partitions
 */
function partitionSumMinRecursive(array: number[], targetSum: number) {
    if (targetSum === 0) {
        return 0;
    }

    if (array.length === 1) {
        return Math.abs(array[0] - targetSum);
    }

    const currentElement = array[0];
    const newTarget = targetSum - currentElement;
    const newArray = array.slice(1);

    const takeCurrentBool = partitionSumMinRecursive(newArray, newTarget);
    const dontTakeCurrentBool = partitionSumMinRecursive(newArray, targetSum);

    return Math.min(takeCurrentBool, dontTakeCurrentBool);
}

/**
 * Main exec, with some input preparation.
 */
export default function main() {
    const array = [2, 3, 3, 3, 4, 5];
    const entireSum = array.reduce((x, c) => x + c, 0);
    const recursiveResult = partitionSumMinRecursive(array, entireSum / 2);
    console.log(recursiveResult);
}

main();
