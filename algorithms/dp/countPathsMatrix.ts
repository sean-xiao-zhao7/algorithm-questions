/**
 * Count all possible paths from 0,0 to m-1,n-1 of a matrix of size m:n.
 * @param input integer 2D array.
 */

const directions = {
    vertical: "vertical",
    horizontal: "horizontal",
    diagonal: "diagonal",
};

const countPathsMatrixRecursive = function (
    m: number,
    n: number,
    grandTotal: number
) {
    if (m == 0 && n == 0) {
        return;
    } else if (m == 0) {
        return;
    } else if (n == 0) {
        return;
    } else {
        grandTotal += 2;
        countPathsMatrixRecursive(m, n - 1, grandTotal);
        countPathsMatrixRecursive(m - 1, n, grandTotal);
        countPathsMatrixRecursive(m - 1, n - 1, grandTotal);
    }
};

export function countPathsMatrixTab(m: number, n: number) {}

function generateInput() {}

export default function main() {
    // [(0,0), (0,1)
    //  (1,0), (1,1)]
    const cache = [];
    let grandTotal = 0;
    const currentResult = countPathsMatrixRecursive(2, 2, grandTotal);

    return currentResult;
}
