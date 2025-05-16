/**
 * Determine if any subset can sum up to target.
 *
 * @param array integer 1D array.
 * @param initialTarget integer the target.
 * @returns integer the number of subsets that sum up to initial target.
 */
function partition2Sums(
    array: number[],
    initialTarget: number,
    cache: number[][]
) {
    const length = array.length;
    const arrayIdx = length - 1;
    const currentElement = array[0];

    if (length === 1) {
        if (currentElement === initialTarget) {
            return 1;
        }
        return 0;
    }

    if (initialTarget === 0) {
        return 1;
    }

    if (cache[arrayIdx][initialTarget] !== -1) {
        return cache[arrayIdx][initialTarget];
    }

    const remainingArray = array.slice(1);
    // don't take current element
    const sum1 = partition2Sums(remainingArray, initialTarget, cache);
    // take current element
    let sum2 = 0;
    if (currentElement < initialTarget) {
        const remainingSum = initialTarget - currentElement;
        sum2 = partition2Sums(remainingArray, remainingSum, cache);
    }
    cache[arrayIdx][initialTarget] = sum1 + sum2;
    return sum1 + sum2;
}

/**
 * Main exec, with some input preparation.
 */
export default function main() {
    const array = [1, 2, 2, 3];
    const target = 3;

    // Memoization
    const cache: number[][] = [];
    array.forEach(() => {
        const row: number[] = [];
        for (let i = 0; i <= target; i++) {
            row[i] = -1;
        }
        cache.push(row);
    });

    const result = partition2Sums(array, target, cache);
    console.log(result);
}

main();
