/**
 * Stairs
 * `stairsTabulationVersion` is a function that calculates the number of steps
to climb `n` stairs using tabulation (bottom-up dynamic programming)
approach. It iterates through the steps from 2 to `n`, calculating the
number of ways to reach each step by summing up the ways to reach the
previous two steps. Finally, it returns the total number of ways to reach
the `n`-th step. 
 * @param {number} n
 * @returns {number} steps
 */

export default function stairsTabulationVersion(n: number) {
    let prev = 1,
        prev2 = 1;
    for (let i = 2; i < n + 1; i++) {
        const current = prev + prev2;
        prev2 = prev;
        prev = current;
    }

    return prev;
}

const stairsRecursiveVersion = function (n: number) {
    if (n == 0) {
        return 1;
    }
    if (n == 1) {
        return 1;
    }

    return stairsRecursiveVersion(n - 1) + stairsRecursiveVersion(n - 2);
};
