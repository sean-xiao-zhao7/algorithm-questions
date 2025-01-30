/**
 * fibonacci
 * Solve fibonacci using tabulation.
 * @param {integer} n
 * @returns {integer} prev
 */

export default function fibonacci(n: number) {
    let prev2 = 0,
        prev1 = 1;

    for (let i = 2; i < n + 1; i++) {
        const currentFib = prev2 + prev1;
        prev2 = prev1;
        prev1 = currentFib;
    }

    return prev1;
}
