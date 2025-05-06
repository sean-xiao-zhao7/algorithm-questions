/**
 * Determine if any sub-sequence of input array sums up to K.
 *
 * @param array integer 1D array.
 * @param k the target.
 * @returns able integer if k can be summed up to.
 */
function findKRecursive(array: number[], k: number, cache: number[][]) {
    if (k === 0) {
        return true;
    }

    if (array.length === 1) {
        if (array[0] === k) {
            return true;
        } else {
            return false;
        }
    }

    const length = array.length - 1;
    if (cache[length][k] !== -1) {
        return cache[length][k] === 1 ? true : false;
    }

    // consider current element
    const remainingSum = k - array[0];
    const remainingArray = array.slice(1);

    const considerResult = findKRecursive(remainingArray, remainingSum, cache);
    const dontConsiderResult = findKRecursive(remainingArray, k, cache);

    const overallResult = considerResult || dontConsiderResult;
    cache[length][k] = overallResult ? 1 : 0;
    return overallResult;
}

/**
 * Bottom up. From array of length 1 and target of 0, to length of N and target of "target".
 * @param array
 * @param target
 * @param cache
 */
function findKTabulation(
    array: number[],
    initialTarget: number,
    cache: number[][]
) {
    for (let idxArray = 1; idxArray < array.length; idxArray++) {
        for (let target = 1; target <= initialTarget; target++) {
            const remainingSum = target - array[idxArray];
            const considerResult = cache[idxArray - 1][remainingSum];
            const dontConsiderResult = cache[idxArray - 1][target];
            cache[idxArray][target] = considerResult || dontConsiderResult;
        }
    }
    return cache[array.length - 1][initialTarget];
}

/**
 * Main exec, with some input preparation.
 */
export default function main() {
    const array = [1, 3, 12, 3, 2, 53, 1, 4];
    // const array = [1, 3]
    // cache(1, 5) = cache(0, 5) || cache(0, 5 - 3);
    const target = 6;
    const cache: number[][] = [];
    array.forEach((_) => {
        const row: number[] = [];
        for (let idx = 0; idx <= target; idx++) {
            row[idx] = -1;
        }
        cache.push(row);
    });

    const dp: number[][] = [];
    array.forEach((_) => {
        const row: number[] = [];
        for (let idx = 0; idx <= target; idx++) {
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
    // base case
    // if (array.length === 1) {
    //     if (array[0] === k) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    if (array[0] < array.length) {
        dp[0][array[0]] = 1;
    }

    const recursiveResult = findKRecursive(array, target, cache);
    const tabResult = findKTabulation(array, target, dp);
    console.log(dp);
    console.log(
        `Recursive result is ${recursiveResult}\n`,
        `Tabulation result is ${tabResult}`
    );
}

main();
