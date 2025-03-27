/**
 * Find path of min values. Each node in triangle has integer val > 0.
 * Each movement down a row must move to adjacent element to the right.
 * This means each downward movement only has 2 possibilities.
 *
 * @param triangle integer 2D array. Each row on one more element than previous.
 * @param height integer The height of the triangle
 * @param row integer Signals which child to continue the path in current row
 * @returns minPathVal integer the value of the min path.
 */
function minPathValsMatrixAllStartsRecursive(
    col: number,
    row: number,
    matrix: number[][]
) {}

export function minPathValsMatrixAllStartsTab(triangle: number[][]) {}

export default function main() {
    const matrix = [[1], [2, 5], [1, 9, 6]];
    // [ [ 1 ],
    // , [ 2, 5 ],
    // , [ 1, 9, 6 ] ]

    const recursiveResult = minPathValsMatrixAllStartsRecursive(0, 0, matrix);
    // const tabulationResult = minPathValsMatrixAllStartsTab(triangle);
    console.log(recursiveResult);
}

main();
