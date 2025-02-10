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

export function countPathsMatrixComb(m: number, n: number) {
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

function generateInput() {}

export default function main() {
    // [(0,0), (0,1), (0,2)
    //  (1,0), (1,1), (1,2)
    //  (2,0), (2,1), (2,2)]
    const grandTotal = countPathsMatrixComb(3, 4);
    return grandTotal;
}
