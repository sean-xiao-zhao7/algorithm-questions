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
    matrix: number[][],
    cache: number[][]
) {
    if (col < 0 || col >= matrix[0].length) {
        return 10000;
    }

    if (row == 0) {
        return matrix[row][col];
    }

    if (cache[row][col] !== -1) {
        return cache[row][col];
    }

    const upLeft =
        matrix[row][col] +
        minPathValsMatrixAllStartsRecursive(row - 1, col - 1, matrix, cache);
    const directlyUp =
        matrix[row][col] +
        minPathValsMatrixAllStartsRecursive(row - 1, col, matrix, cache);
    const upRight =
        matrix[row][col] +
        minPathValsMatrixAllStartsRecursive(row - 1, col + 1, matrix, cache);

    const min = Math.min(upLeft, directlyUp, upRight);
    cache[row][col] = min;
    return min;
}

export function minPathValsMatrixAllStartsTab(triangle: number[][]) {}

export default function main() {
    const matrix = [
        [1, 3, 12],
        [2, 53, 1],
        [10, 9, 6],
    ];

    let cache: number[][] = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
    ];

    let overallMin = minPathValsMatrixAllStartsRecursive(
        matrix.length - 1,
        0,
        matrix,
        cache
    );
    for (let col = 1; col < matrix[0].length; col++) {
        cache = [
            [-1, -1, -1],
            [-1, -1, -1],
            [-1, -1, -1],
        ];
        const recursiveResult = minPathValsMatrixAllStartsRecursive(
            matrix.length - 1,
            col,
            matrix,
            cache
        );
        overallMin = Math.min(overallMin, recursiveResult);
    }
    // const tabulationResult = minPathValsMatrixAllStartsTab(triangle);
    console.log(overallMin);
}

main();
