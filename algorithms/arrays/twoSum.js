/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
export default function (numbers, target) {
    let overallIndex = 0,
        index1 = 0,
        index2 = numbers.length - 1;
    while (overallIndex < numbers.length) {
        const item1 = numbers[index1];
        const item2 = numbers[index2];

        if (item1 > target) {
            return [-1, -1];
        }

        const sum = item1 + item2;

        if (sum === target) {
            return [index1, index2];
        }
    }

    return [index1, index2];
}
