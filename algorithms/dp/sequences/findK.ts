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

function findKTabulation(array: number[], target: number, cache: number[][]) {}

export default function main() {
    const array = [1, 3, 12, 3, 2, 53, 1, 4];
    const target = 5;
    const cache: number[][] = [];
    array.forEach((_, idxArray) => {
        const row: number[] = [];
        for (let idx = 0; idx < target; idx++) {
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
        cache.push(row);
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
        cache[0][array[0]] = 1;
    }

    // const result = findKRecursive(array, target, cache);
    const result = findKTabulation(array, target, cache);
    console.log(result, cache);
}

main();
