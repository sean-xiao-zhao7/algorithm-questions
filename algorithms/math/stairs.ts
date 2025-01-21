/**
 * Stairs
 *
 * @param {number} n
 * @returns {number} steps
 */

export default function stairs(n: number) {
    if (n == 0) {
        return 1;
    }

    return stairs(n - 1) + stairs(n - 2);
}
