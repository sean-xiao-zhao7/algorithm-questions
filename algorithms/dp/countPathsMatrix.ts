/**
 * Count all possible paths from 0,0 to m-1,n-1 of a matrix of size m:n.
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
    const dp: number[][] = [];
    for (let x = 0; x < m; x++) {
        dp[x][0] = 1;
    }
    for (let y = 0; y < n; y++) {
        dp[0][y] = 1;
    }
    for (let x = 1; x < m; x++) {
        for (let y = 1; y < n; y++) {
            if (typeof dp[x][y] !== "undefined") {
                const horizontalTotal = dp[x - 1][y];
                const verticalTotal = dp[x][y - 1];
                dp[x][y] = horizontalTotal + verticalTotal;
            }
        }
    }
    return dp[m - 1][n - 1];
}

function generateInput() {}

export default function main() {
    // [(0,0), (0,1), (0,2)
    //  (1,0), (1,1), (1,2)
    //  (2,0), (2,1), (2,2)]
    const grandTotal = countPathsMatrixTab(4, 3);
    return grandTotal;
}
