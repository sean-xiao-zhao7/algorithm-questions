/**
 * Determine if any sub-sequence of input array sums up to K.
 *
 * @param array integer 1D array.
 * @param k the target.
 * @returns able integer if k can be summed up to.
 */
function findK(array: number[], k: number) {
    if (k === 0) {
        return true;
    }

    if (k < 0) {
        return false;
    }

    if (array.length === 0) {
        if (array[0] === k) {
            return true;
        } else {
            return false;
        }
    }

    // consider current element
    const remainingSum = k - array[0];
    const remainingArray = array.slice(1);
    const considerResult = findK(remainingArray, remainingSum);
    const dontConsiderResult = findK(remainingArray, k);
    return considerResult || dontConsiderResult;
}

export default function main() {
    const array = [1, 3, 12, 3, 2, 53, 1, 4];
    const result = findK(array, 50);
    console.log(result);
}

main();
