/**
 * Determine if any subset can sum up to target.
 *
 * @param array integer 1D array.
 * @param initialTarget integer the target.
 * @param result Object that contains all arrays that sums up to target.
 * @param currentSeq temporary variable to store numbers seen so far.
 */
function partition2Sums(
    array: number[],
    initialTarget: number,
    result: { arrays: number[][]; count: number },
    currentSeq: number[]
) {
    const length = array.length;
    const currentElement = array[0];
    if (length === 1) {
        if (currentElement === initialTarget) {
            result.arrays.push(array);
            result.count++;
            return true;
        }
        return false;
    }

    if (currentElement === initialTarget) {
        result.arrays.push([array[0]]);
        result.count++;
    }

    if (initialTarget === 0) {
        result.arrays.push(currentSeq);
        result.count++;
        return true;
    }

    const remainingArray = array.slice(1);
    const remainingSum = initialTarget - currentElement;
    // don't take current element
    partition2Sums(remainingArray, initialTarget, result, currentSeq);
    // take current element
    partition2Sums(remainingArray, remainingSum, result, [
        ...currentSeq,
        currentElement,
    ]);

    // const array = [1, 2, 2, 3];
}

/**
 * Main exec, with some input preparation.
 */
export default function main() {
    const array = [1, 2, 2, 3];
    const arrays: number[][] = [];
    const result = { arrays, count: 0 };
    partition2Sums(array, 3, result, []);
    console.log(result);
}

main();
