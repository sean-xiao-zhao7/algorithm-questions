/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
export default function (numbers, target) {
    if (numbers[0] < 0 && numbers[-1] > 0) {
        return oneNegOnePos(numbers, target);
    } else if (numbers[0] < 0 && numbers[-1] < 0) {
        return bothNegs(numbers, target);
    } else {
        return bothPos(numbers, target);
    }
}

function bothPos(numbers, target) {
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

        if (sum < target) {
        }

        if (item2 > target) {
            index2--;
        }
    }

    return [index1, index2];
}

function oneNegOnePos(numbers, target) {
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

        if (sum < target) {
        }

        if (item2 > target) {
            index2--;
        }
    }

    return [index1, index2];
}

function bothNegs(numbers, target) {
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

        if (sum < target) {
        }

        if (item2 > target) {
            index2--;
        }
    }

    return [index1, index2];
}
