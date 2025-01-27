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

export default function frogJump(n: number) {
    let prev = 1,
        prev2 = 1;
    for (let i = 2; i < n + 1; i++) {
        const current = prev + prev2;
        prev2 = prev;
        prev = current;
    }

    return prev;
}

export const recursiveVersion = function (n: number) {
    return helper(n, generateInput(n));
};

function generateInput(n: number) {
    const heights: number[] = [0];
    for (let i = 0; i < n; i++) {
        heights.push(Math.floor(Math.random() * 50));
    }
    console.log(heights);
    return heights;
}

const helper = function (n: number, heights: number[]) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return heights[0];
    }

    const cost1 =
        Math.abs(heights[n - 1] - heights[n]) + helper(n - 1, heights);
    const cost2 =
        Math.abs(heights[n - 2] - heights[n]) + helper(n - 2, heights);

    return Math.min(cost1, cost2);
};
