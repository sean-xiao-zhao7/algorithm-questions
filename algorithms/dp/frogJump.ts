/**
 * frogJump
 *
 * There is a frog on the 1st step of N stairs.
 * HEIGHTS[i] is the height of the i+1 stair.
 * If the frog jumps from ith to jth stair, the energy cost is HEIGHTS[i - 1] - HEIGHTS[j - 2].
 * If the frog is at ith step it can jump to i+1 or i+2 th stair.
 * Find the minimum cost from 1st to Nth stair.
 *
 * @param {number} n
 * @returns {number} steps
 */

export function frogJumpTab(n: number, heights: number[]) {
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

export default function mainFunc(n: number) {
    // return helper(n, [0, 10, 20, 30, 10], []);
    return frogJumpTab(n, [0, 10, 20, 30, 10]);
}

function generateInput(n: number) {
    const heights: number[] = [0];
    for (let i = 0; i < n; i++) {
        heights.push(Math.floor(Math.random() * 50));
    }
    console.log(heights);
    return heights;
}

const helper = function (n: number, heights: number[], dp: number[]) {
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
        Math.abs(heights[n - 1] - heights[n]) + helper(n - 1, heights, dp);
    const cost2 =
        Math.abs(heights[n - 2] - heights[n]) + helper(n - 2, heights, dp);

    dp[n] = Math.min(cost1, cost2);
    return dp[n];
};
