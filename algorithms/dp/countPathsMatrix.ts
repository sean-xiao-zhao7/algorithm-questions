/**
 * Count all possible paths from 0,0 to m-1,n-1 of a matrix of size m:n.
 * Going only horizontal and vertical directions.
 * @param input integer 2D array.
 */
const countPathsMatrixRecursive = function (m: number, n: number) {
    if (m == 1 && n == 1) {
        return 1;
    } else if (m == 1) {
        return 1;
    } else if (n == 1) {
        return 1;
    } else {
        const horizontalTotal = countPathsMatrixRecursive(m - 1, n);
        const verticalTotal = countPathsMatrixRecursive(m, n - 1);
        return horizontalTotal + verticalTotal;
    }
};

export function countPathsMatrixTab(m: number, n: number) {
    let up: number = 1;
    let lefts: number[] = Array(n).fill(1);

    for (let x = 1; x < m; x++) {
        up = 1;
        for (let y = 1; y < n; y++) {
            up = lefts[y] + up;
            lefts[y] = up;
        }
    }
    return up;
}
/**
 * The number of possible ways to traverse from 0,0 to m-1,n-1
 * is equal to number of ways to choose n-1 ups or m-1 lefts from total slots of (m-1) + (n-1)
 * Simply calculate C(m+n-2, m-1) or C(m+n-2, n-1)
 *
 * @param m rows
 * @param n columns
 */
export function countPathsMatrixComb(m: number, n: number) {
    const nElements = m + n - 2;
    const selection = m - 1;
    let combination = 1; // temp var to hold value of C(nElements, selection)

    // each iteration calculate one fraction of C(n,r) = n!/r!(n-r)!
    for (let denominator = 1; denominator <= selection; denominator++) {
        const numerator = nElements - selection + denominator; // n!/(n-r)!
        const currentFraction = numerator / denominator;
        combination = combination * currentFraction;
    }
    return combination;
}

function generateInput() {}

export default function main() {
    const grandTotal = countPathsMatrixComb(3, 4);
    return grandTotal;
}
