/**
 * Determine if input array can be partitioned by 2, where each sub-array sums to the same sum.
 *
 * @param array integer 1D array.
 */
function partitionSumRecursive(
    array: number[],
    left: number[],
    right: number[],
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
    const newLeft = [...left, currentElement];
    const takeCurrentLeft = partitionSumRecursive(
        remainingArray,
        newLeft,
        right,
        newLeftSum,
        rightSum
    );

    // add current element to right
    const newRightSum = rightSum + currentElement;
    const newRight = [...right, currentElement];
    const takeCurrentRight = partitionSumRecursive(
        remainingArray,
        left,
        newRight,
        leftSum,
        newRightSum
    );

    return takeCurrentLeft || takeCurrentRight;
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
    // [1] [3, 12, 3, 2, 53, 1, 4];
    const recursiveResult = partitionSumRecursive(array, [], [], 0, 0);
    console.log(recursiveResult);
}

main();
