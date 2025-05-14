/**
 * Determine the minimal sum differences between any 2 way partitions.
 *
 * @param array integer 1D array.
 * @returns min integer the minimum difference between partitions
 */
function partitionSumMinRecursive(array: number[], targetSum: number) {}

/**
 * From array of length 1 and target of 0, to length of N and target of "target".
 * @param array
 * @param target
 * @param cache
 */
function makeFindKDP(array: number[], initialTarget: number) {
    const dp: number[][] = [];
    array.forEach((_) => {
        const row: number[] = [];
        for (let idx = 0; idx <= initialTarget; idx++) {
            // base case
            // if (k === 0) {
            //     return true;
            // }
            if (idx === 0) {
                row[idx] = 1;
            } else {
                row[idx] = -1;
            }
        }
        dp.push(row);
    });

    for (let idxArray = 1; idxArray < array.length; idxArray++) {
        for (let target = 1; target <= initialTarget; target++) {
            const remainingSum = target - array[idxArray];
            const considerResult = dp[idxArray - 1][remainingSum];
            const dontConsiderResult = dp[idxArray - 1][target];
            dp[idxArray][target] = considerResult || dontConsiderResult;
        }
    }
    return dp;
}

/**
 * Main exec, with some input preparation.
 */
export default function main() {
    const array = [2, 3, 3, 3, 4, 5];
    // 0 to 20
    // 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20
    // 18, 17, ...
    const entireSum = array.reduce((x, c) => x + c, 0);
    const dp = makeFindKDP(array, entireSum);
    const recursiveResult = partitionSumMinStriverRecursive(array);
    console.log(recursiveResult);
}

main();
