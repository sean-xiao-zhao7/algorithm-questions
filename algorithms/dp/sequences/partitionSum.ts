/**
 * Determine if input array can be partitioned by 2, where each sub-array sums to the same sum.
 *
 * @param array integer 1D array.
 */
function partitionSumRecursive(
    array: number[],
    leftSum: number,
    rightSum: number
) {
    const currentElement = array[0];

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
        rightSum
    );

    // add current element to right
    const newRightSum = rightSum + currentElement;
    const takeCurrentRight = partitionSumRecursive(
        remainingArray,
        leftSum,
        newRightSum
    );

    return takeCurrentLeft || takeCurrentRight;
}

/**
 * Determine if input array can be partitioned by 2, where each sub-array sums to the same sum.
 *
 * @param array integer 1D array.
 */
function partitionSumRecursiveHalfMethod(array: number[], targetSum: number) {}

/**
 * Bottom up. From array of length 1 and target of 0, to length of N and target of "target".
 * @param array
 */
function partitionSumRTabulation() {}

/**
 * Main exec, with some input preparation.
 */
export default function main() {
    const array = [2, 3, 3, 3, 4, 4];
    const entireSum = array.reduce((x, c) => x + c, 0);
    if (entireSum % 2 !== 0) {
        console.log(entireSum, false);
    } else {
        // const recursiveResult = partitionSumRecursive(array, 0, 0);
        const recursiveResult = partitionSumRecursiveHalfMethod(
            array,
            entireSum / 2
        );
        console.log(recursiveResult);
    }
}

main();
