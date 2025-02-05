/**
 * Find the subsequence that has no adjacent elements from the input, which also has the max sum.
 * @param input integer array.
 */
const ninjaRecursive = function (
    day: number,
    points: number[][],
    lastChoiceIndex: number,
    cache: number[][]
) {
    console.log(`${day} day ${lastChoiceIndex} choice:`, points[day]);

    // return from cache if found
    if (
        typeof cache[day] !== "undefined" &&
        typeof cache[day][lastChoiceIndex] !== "undefined"
    ) {
        return cache[day][lastChoiceIndex];
    }

    // last day
    if (day === 0) {
        let max = 0;
        for (let index = 0; index < 3; index++) {
            if (index != lastChoiceIndex) {
                max = Math.max(max, points[0][index]);
            }
        }
        if (typeof cache[0] === "undefined") cache[0] = [];
        cache[0][lastChoiceIndex] = max;
        return max;
    }

    // find the max of 3 days possible
    let max = 0;
    for (let index = 0; index < 3; index++) {
        if (index != lastChoiceIndex) {
            const currentDayPoints =
                points[day][index] +
                ninjaRecursive(day - 1, points, index, cache);
            max = Math.max(max, currentDayPoints);
        }
    }
    if (typeof cache[day] === "undefined") cache[day] = [];
    cache[day][lastChoiceIndex] = max;
    return max;
};

export function ninjaTab(points: number[][]) {
    const length = points.length;
    const dp = [0];
    let prevChosen = 3;

    for (let day = 1; day < length; day++) {
        let currentMax = 0;
        for (let index = 0; index < 3; index++) {
            if (index != prevChosen) {
                const currentDayPoints = points[day][index] + dp[day - 1];
                const prevMax = currentMax;
                currentMax = Math.max(currentMax, currentDayPoints);
                if (prevMax < currentMax) {
                    prevChosen = index;
                }
            }
        }
        dp[day] = currentMax;
    }
    console.log(dp);
    return dp[length - 1];
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
    const cache = [];
    // const currentResult = ninjaRecursive(points.length - 1, points, 3, cache);
    const currentResult = ninjaTab(points);

    return currentResult;
}
