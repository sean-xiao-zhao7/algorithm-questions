/**
 * Find the subsequence that has no adjacent elements from the input, which also has the max sum.
 * @param input integer array.
 */
const maxNonAdjSubsequenceRecursive = function (
    input: number[],
    cache: number[]
) {
    const length = input.length;

    // if there is only 1 element, choose it
    if (length == 1) {
        return input[0];
    }

    // if no element, it's an edge case. Return 0.
    if (length <= 0) {
        return 0;
    }

    if (typeof cache[length] !== "undefined") {
        return cache[length];
    }

    // calculate sum if the current element is chosen to be added to total sum.
    // Due to constraint of non-adjacent, the next input in recursion is n - 2 length.
    const sumChoose =
        input[length - 1] +
        maxNonAdjSubsequenceRecursive(input.slice(0, length - 2), cache);

    // also sum if current element is not chosen.
    const sumNotChoose = maxNonAdjSubsequenceRecursive(
        input.slice(0, length - 1),
        cache
    );

    cache[length] = Math.max(sumChoose, sumNotChoose);

    return cache[length];
};

export function maxNonAdjSubsequenceTab(input: number[]) {
    const length = input.length;

    // first two values are of length 0, and length 1.
    let prev0 = 0,
        prev1 = input[0];

    for (let index = 1; index < length; index++) {
        // calculate sum if the current element is chosen to be added to total sum.
        const sumChoose = input[index] + prev0;
        // also sum if current element is not chosen.
        const sumNotChoose = prev1;
        const maxSum = Math.max(sumChoose, sumNotChoose);
        prev0 = prev1;
        prev1 = maxSum;
    }
    return prev1;
}

function generateInput() {}

export default function main() {
    const input = [[2], [1], [1, 2, 4], [4], [2, 1, 4, 9]];
    const results: number[] = [];
    for (const array of input) {
        const currentResult = maxNonAdjSubsequenceTab(array);
        results.push(currentResult);
    }

    return results;
}
