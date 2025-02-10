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
    for (let x = 1; x < m; x++) {
        dp[x] = [];
        for (let y = 1; y < n; y++) {
            const prevXIndex = x - 1;
            const prevYIndex = y - 1;
            let horizontalTotal = 1;
            if (prevXIndex !== 0) horizontalTotal = dp[x - 1][y];
            let verticalTotal = 1;
            if (prevYIndex !== 0) verticalTotal = dp[x][y - 1];
            dp[x][y] = horizontalTotal + verticalTotal;
        }
    }
    console.log(dp);
    return dp[m - 1][n - 1];
}

function generateInput() {}

export default function main() {
    // [(0,0), (0,1), (0,2)
    //  (1,0), (1,1), (1,2)
    //  (2,0), (2,1), (2,2)]
    const grandTotal = countPathsMatrixTab(3, 3);
    return grandTotal;
}
