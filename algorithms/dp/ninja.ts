/**
 * Find the subsequence that has no adjacent elements from the input, which also has the max sum.
 * @param input integer array.
 */
const ninjaRecursive = function (
    day: number,
    points: number[][],
    lastChoiceIndex: number
) {
    const length = points.length;

    // last day
    if (length <= 0) {
        let max = 0;
        for (let index = 0; index < 3; index++) {
            if (index != lastChoiceIndex) {
                max = Math.max(max, points[0][index]);
            }
        }
        return max;
    }

    let max = 0;
    for (let index = 0; index < 3; index++) {
        if (index != lastChoiceIndex) {
            const currentMax =
                points[day][index] + ninjaRecursive(day - 1, points, index);
            max = Math.max(max, currentMax);
        }
    }
    return max;
};

export function ninjaTab(input: number[]) {
    const length = input.length;

    // first two values are of length 0, and length 1.
    let prev0 = 0,
        prev1 = input[0];

    for (let index = 1; index < length; index++) {
        // calculate sum if the current element is chosen to be added to total sum.
        const sumChoose = input[index] + prev0;
        // also sum if current element is not chosen.
        const sumNotChoose = prev1;
        const maxSum = Math.max(sumChoose, sumNotChoose);
        prev0 = prev1;
        prev1 = maxSum;
    }
    return prev1;
}

function generateInput() {}

export default function main() {
    const points = [
        [2, 1, 3],
        [1, 7, 9],
        [1, 2, 4],
        [4, 3, 4],
        [2, 1, 4],
    ];
    // start with last = 3, no action is done
    const currentResult = ninjaRecursive(points.length + 1, points, 3);

    return currentResult;
}
