/**
 * frogJump
 *
 * There is a frog on the 1st step of N stairs.
 * HEIGHT[2] is the height of the 3rd stair.
 * If the frog jumps from ith to jth stair, the energy cost is HEIGHT[i - 1] - HEIGHT[j - 2].
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
    const height = [];
    return helper(n, height);
};

const helper = function (n: number, height, cost = 0) {
    if (n == 0) {
        return height[1];
    }

    const cost1 = Math.abs(height[n] - height[n]);
    const cost2 = Math.abs(height[n] - height[n - 2]);

    return helper(n - 1, height) + helper(n - 2, height);
};
