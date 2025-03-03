/**
 * Find path of min values. Each node in matrix has integer val > 0.
 *
 * @param matrix integer 2D array.
 * @param m integer The width of the matrix
 * @param n integer The height of the matrix
 * @returns minPathVal integer the value of the min path.
 */
const minPathValsMatrixRecursive = function (
    m: number,
    n: number,
    matrix: number[][]
) {
    const currentNodeVal = matrix[m - 1][n - 1];

    // base case: only 1 node in the matrix, return the node's value as min
    if (m === 1 && n === 1) return currentNodeVal;

    let overallMin = 0;
    if (m === 1) {
        overallMin = minPathValsMatrixRecursive(m, n - 1, matrix);
    } else if (n === 1) {
        overallMin = minPathValsMatrixRecursive(m - 1, n, matrix);
    } else {
        const upMinVal = minPathValsMatrixRecursive(m, n - 1, matrix);
        const leftMinVal = minPathValsMatrixRecursive(m - 1, n, matrix);
        overallMin = Math.min(upMinVal, leftMinVal);
    }

    return currentNodeVal + overallMin;
};

export function minPathValsMatrixTab(m: number, n: number, matrix: number[][]) {
    const minVals: number[][] = [];
    minVals[0][0] = matrix[0][0];
    minVals[1][0] = matrix[0][0] + matrix[1][0];
    minVals[0][1] = matrix[0][0] + matrix[0][1];
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            minVals[i][j] = Math.min(minVals[i - 1][j], minVals[i][j - 1]);
        }
    }
    return minVals[m - 1][n - 1];
}

function generateInput() {}

export default function main() {
    // const matrix = [
    //     [1, 3, 4, 5],
    //     [2, 5, 6, 7],
    //     [1, 9, 6, 5],
    //     [8, 8, 5, 7],
    // ];
    const matrix = [
        [1, 3, 4],
        [2, 5, 6],
        [1, 9, 6],
    ];
    // const minPathVal = minPathValsMatrixRecursive(
    //     matrix.length,
    //     matrix[0].length,
    //     matrix
    // );
    const minPathVal = minPathValsMatrixTab(
        matrix.length,
        matrix[0].length,
        matrix
    );
    return minPathVal;
}
