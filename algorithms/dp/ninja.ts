/**
 * Find the subsequence that has no adjacent elements from the input, which also has the max sum.
 * @param input integer array.
 */
const ninjaRecursive = function (
    day: number,
    points: number[][],
    yesterdayTaskIndex: number,
    cache: number[][]
) {
    console.log(`${day} day ${yesterdayTaskIndex} choice:`, points[day]);

    // return from cache if found
    if (
        typeof cache[day] !== "undefined" &&
        typeof cache[day][yesterdayTaskIndex] !== "undefined"
    ) {
        return cache[day][yesterdayTaskIndex];
    }

    // last day
    if (day === 0) {
        let max = 0;
        for (let index = 0; index < 3; index++) {
            if (index != yesterdayTaskIndex) {
                max = Math.max(max, points[0][index]);
            }
        }
        if (typeof cache[0] === "undefined") cache[0] = [];
        cache[0][yesterdayTaskIndex] = max;
        return max;
    }

    // find the max of 3 days possible
    let max = 0;
    for (let index = 0; index < 3; index++) {
        if (index != yesterdayTaskIndex) {
            const currentDayPoints =
                points[day][index] +
                ninjaRecursive(day - 1, points, index, cache);
            max = Math.max(max, currentDayPoints);
        }
    }
    if (typeof cache[day] === "undefined") cache[day] = [];
    cache[day][yesterdayTaskIndex] = max;
    return max;
};

export function ninjaTab(points: number[][]) {
    const dp: number[][] = [];
    dp.push([Math.max(points[0][1], points[0][2])]);
    dp.push([Math.max(points[0][0], points[0][2])]);
    dp.push([Math.max(points[0][0], points[0][1])]);
    dp.push([Math.max(points[0][0], points[0][1], points[0][2])]);

    for (let day = 1; day < length; day++) {
        dp[day] = [];
        for (
            let yesterdayTaskIndex = 0;
            yesterdayTaskIndex < 3;
            yesterdayTaskIndex++
        ) {
            dp[day][yesterdayTaskIndex] = 0;

            // calculate the max of 3 tasks today based on previous day's choice
            let todayMax = 0;
            for (let todayTaskIndex = 0; todayTaskIndex < 3; todayTaskIndex++) {
                if (todayTaskIndex !== yesterdayTaskIndex) {
                    const todayPoints =
                        points[day][todayTaskIndex] +
                        points[day - 1][todayTaskIndex];
                    todayMax = Math.max(todayPoints, todayMax);
                }
            }
            dp[day][yesterdayTaskIndex] = todayMax;
        }
    }

    return dp[length - 1][3];
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
