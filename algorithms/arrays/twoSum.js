/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
export default function (numbers, target) {
    let index1 = 0,
        index2 = numbers.length - 1;
    while (index1 !== index2) {
        const item1 = numbers[index1];
        const item2 = numbers[index2];

        if (item1 > target) {
            return [undefined, undefined];
        }

        const sum = item1 + item2;

        if (sum === target) {
            console.log(
                `${target} = ${numbers[index1]}(at ${index1}) + ${numbers[index2]}(at ${index2})`
            );
            return [index1, index2];
        }

        if (sum < target) {
            index1++;
        } else {
            index2--;
        }
    }

    return [undefined, undefined];
}
