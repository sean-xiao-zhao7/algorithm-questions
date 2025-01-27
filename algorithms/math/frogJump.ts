/**
 * frogJump
 *
 * There is a frog on the 1st step of N stairs.
 * HEIGHT[i] is the height of the (i + 1)th stair.
 * If the frog jumps from ith to jth stair, the energy cost is HEIGHT[i - 1] - HEIGHT[j - 1].
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
    if (n == 0) {
        return 1;
    }
    if (n == 1) {
        return 1;
    }

    return recursiveVersion(n - 1) + recursiveVersion(n - 2);
};
