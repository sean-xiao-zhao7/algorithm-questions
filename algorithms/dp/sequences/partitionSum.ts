/**
 * Determine if input array can be partitioned by 2, where each sub-array sums to the same sum.
 *
 * @param array integer 1D array.
 */
function partitionSumRecursive(
    array: number[],
    leftSum: number,
    rightSum: number,
    cache: number[][][]
) {
    const currentElement = array[0];

    if (cache[array.length - 1][leftSum][rightSum] !== -1) {
        return cache[array.length - 1][leftSum][rightSum];
    }

    if (array.length === 1) {
        return (
            leftSum + currentElement === rightSum ||
            leftSum === rightSum + currentElement
        );
    }

    const remainingArray = array.slice(1);

    // add current element to left
    const newLeftSum = leftSum + currentElement;
    const takeCurrentLeft = partitionSumRecursive(
        remainingArray,
        newLeftSum,
        rightSum,
        cache
    );

    // add current element to right
    const newRightSum = rightSum + currentElement;
    const takeCurrentRight = partitionSumRecursive(
        remainingArray,
        leftSum,
        newRightSum,
        cache
    );

    cache[array.length - 1][leftSum][rightSum] =
        takeCurrentLeft || takeCurrentRight ? 1 : 0;
    return cache[array.length - 1][leftSum][rightSum];
}

/**
 * Determine if input array can be partitioned by 2, where each sub-array sums to the same sum.
 *
 * @param array integer 1D array.
 */
function partitionSumRecursiveHalfMethod(array: number[], targetSum: number) {
    if (targetSum === 0) {
        return true;
    }

    if (array.length === 1) {
        return array[0] === targetSum;
    }

    const currentElement = array[0];
    const newTarget = targetSum - currentElement;
    const newArray = array.slice(1);

    const takeCurrentBool = partitionSumRecursiveHalfMethod(
        newArray,
        newTarget
    );
    const dontTakeCurrentBool = partitionSumRecursiveHalfMethod(
        newArray,
        targetSum
    );

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
        const cache: number[][][] = [];
        array.forEach(() => {
            let lefts: number[][] = [];
            for (let left = 0; left < entireSum; left++) {
                lefts[left] = [];
                for (let right = 0; right < entireSum; right++) {
                    lefts[left][right] = -1;
                }
            }
            cache.push(lefts);
        });
        const recursiveResult = partitionSumRecursive(array, 0, 0, cache);

        // const recursiveResult = partitionSumRecursiveHalfMethod(
        //     array,
        //     entireSum / 2
        // );
        console.log(recursiveResult);
    }
}

main();
