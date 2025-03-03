/**
 * Find path of min values. Each node in matrix has integer val > 0.
 *
 * @param input integer 2D array.
 * @returns minPathVal integer the value of the min path.
 */
const minPathValsMatrixRecursive = function (
    m: number,
    n: number,
    matrix: number[][]
) {};

export function minPathValsMatrixTab(m: number, n: number) {}

function generateInput() {}

export default function main() {
    const matrix = [
        [1, 3, 4, 5],
        [2, 5, 6, 7],
        [1, 9, 6, 5],
        [8, 8, 5, 7],
    ];
    const minPathVal = minPathValsMatrixRecursive(
        matrix.length,
        matrix[0].length,
        matrix
    );
    return minPathVal;
}
