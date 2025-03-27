/**
 * Find the min path from any starting to any end in a 2D matrix.
 *
 * @param matrix integer 2D array.
 * @param row integer The height of the matrix.
 * @param col integer The width of the matrix.
 * @returns minPathVal integer the value of the min path.
 */
function minPathValsMatrixAllStartsRecursive(
    row: number,
    col: number,
    matrix: number[][]
) {
    if (col < 0 || col >= matrix[0].length) {
        return 10000;
    }

    if (row == 0) {
        return matrix[row][col];
    }

    const upLeft =
        matrix[row][col] +
        minPathValsMatrixAllStartsRecursive(row - 1, col - 1, matrix);
    const directlyUp =
        matrix[row][col] +
        minPathValsMatrixAllStartsRecursive(row - 1, col, matrix);
    const upRight =
        matrix[row][col] +
        minPathValsMatrixAllStartsRecursive(row - 1, col + 1, matrix);

    return Math.min(upLeft, directlyUp, upRight);
}

export function minPathValsMatrixAllStartsTab(triangle: number[][]) {}

export default function main() {
    const matrix = [
        [1, 3, 12],
        [2, 53, 1],
        [10, 9, 6],
    ];

    let overallMin = minPathValsMatrixAllStartsRecursive(
        matrix.length - 1,
        0,
        matrix
    );
    for (let col = 1; col < matrix[0].length; col++) {
        const recursiveResult = minPathValsMatrixAllStartsRecursive(
            matrix.length - 1,
            col,
            matrix
        );
        overallMin = Math.min(overallMin, recursiveResult);
    }
    // const tabulationResult = minPathValsMatrixAllStartsTab(triangle);
    console.log(overallMin);
}

main();
