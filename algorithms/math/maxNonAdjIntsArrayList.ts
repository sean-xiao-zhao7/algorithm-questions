/**
 * maxNonAdjIntsArrayList
 *
 * @param {number} n
 * @returns {number} steps
 */

export function maxNonAdjIntsArrayListTab(
    n: number,
    heights: number[],
    k: number
) {
    let prev1 = 0,
        prev2 = heights[0];

    for (let i = 2; i < n + 1; i++) {
        const cost1 = Math.abs(heights[i - 1] - heights[i]) + prev2;
        const cost2 = Math.abs(heights[i - 2] - heights[i]) + prev1;

        const min = Math.min(cost1, cost2);
        prev1 = prev2;
        prev2 = min;
    }
    return prev2;
}

export default function mainFunc(n: number, k: number) {
    return maxNonAdjIntsArrayListRec(n, [0, 10, 20, 30, 10], [], k);
    // return maxNonAdjIntsArrayListTab(n, [0, 10, 20, 30, 10], k);
}

function generateInput(n: number) {
    const heights: number[] = [0];
    for (let i = 0; i < n; i++) {
        heights.push(Math.floor(Math.random() * 50));
    }
    console.log(heights);
    return heights;
}

const maxNonAdjIntsArrayListRec = function (
    n: number,
    heights: number[],
    dp: number[],
    k: number
) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return heights[0];
    }

    if (dp.indexOf(n) !== -1) {
        return dp[n];
    }

    const cost1 =
        Math.abs(heights[n - 1] - heights[n]) +
        maxNonAdjIntsArrayListRec(n - 1, heights, dp, k);
    const cost2 =
        Math.abs(heights[n - 2] - heights[n]) +
        maxNonAdjIntsArrayListRec(n - 2, heights, dp, k);
    const cost3 =
        Math.abs(heights[n - 3] - heights[n]) +
        maxNonAdjIntsArrayListRec(n - 3, heights, dp, k);

    dp[n] = Math.min(cost1, cost2, cost3);
    return dp[n];
};
