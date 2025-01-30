/**
 * maxNonAdjIntsArrayList
 *
 * Find the max
 *
 * @param {number} n
 * @returns {number} steps
 */

export default function mainFunc() {
    const input = [[2], [1], [1, 2, 4], [4], [2, 1, 4, 9]];
    const results: number[][] = [];
    for (const array of input) {
        const currentResult = maxNonAdjSubsequenceRecursive(array);
        results.push(currentResult);
        // return maxNonAdjIntsArrayListTab(n, [0, 10, 20, 30, 10], k);
    }

    return results;
}

function generateInput() {}

/**
 * Find the subsequence that has no adjacent elements from the input, which also has the max sum.
 * @param input integer array.
 */
const maxNonAdjSubsequenceRecursive = function (input: number[]) {
    const length = input.length;

    // if there is only 1 element, choose it
    if (length == 1) {
        return input[0];
    }

    // if no element, it's an edge case. Return 0.
    if (length == 0) {
        return 0;
    }

    const sumChoose =
        input[length - 1] +
        maxNonAdjSubsequenceRecursive(input.slice(length - 2));

    const sumNotChoose = maxNonAdjSubsequenceRecursive(input.slice(length - 1));

    return Math.max(sumChoose, sumNotChoose);
};

export function maxNonAdjSubsequenceTab(input: number[]) {}
