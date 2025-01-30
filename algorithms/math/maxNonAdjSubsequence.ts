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
    if (length == 0) {
        return 0;
    }

    // calculate sum if the current element is chosen to be added to total sum.
    // Due to constraint of non-adjacent, the next input in recursion is n - 2 length.
    let sumChoose = 0,
        sumNotChoose = 0;
    if (cache.indexOf(length - 2) !== -1) {
        sumChoose = input[length - 1] + cache[length - 2];
    } else {
        cache[length - 2] = maxNonAdjSubsequenceRecursive(
            input.slice(0, length - 2),
            cache
        );
        sumChoose = input[length - 1] + cache[length - 2];
    }

    // also sum if current element is not chosen.
    if (cache.indexOf(length - 1) !== -1) {
        sumNotChoose = cache[length - 1];
    } else {
        cache[length - 1] = maxNonAdjSubsequenceRecursive(
            input.slice(0, length - 1),
            cache
        );
        sumNotChoose = cache[length - 1];
    }

    return Math.max(sumChoose, sumNotChoose);
};

export function maxNonAdjSubsequenceTab(input: number[]) {}

function generateInput() {}

export default function main() {
    const input = [[2], [1], [1, 2, 4], [4], [2, 1, 4, 9]];
    const results: number[][] = [];
    for (const array of input) {
        const currentResult = maxNonAdjSubsequenceRecursive(array, []);
        results.push(currentResult);
        // return maxNonAdjIntsArrayListTab(n, [0, 10, 20, 30, 10], k);
    }

    return results;
}
