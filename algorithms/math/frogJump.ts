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

export function frogJumpTab(n: number, heights) {
    let cost = 0;

    for (let i = 2; i < n; i++) {
        const cost1 = Math.abs(heights[i - 1] - heights[i]) + cost;
        const cost2 = Math.abs(heights[i - 2] - heights[i]) + cost;

        cost += Math.min(cost1, cost2);
    }

    return cost;
}

export default function mainFunc(n: number) {
    return frogJumpTab(n, [0, 40, 1, 22, 28, 34, 32, 6, 14, 40, 18]);
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
