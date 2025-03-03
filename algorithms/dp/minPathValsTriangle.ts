/**
 * Find path of min values. Each node in triangle has integer val > 0.
 * Each movement down a row must move to adjacent element to the right.
 * This means each downward movement only has 2 possibilities.
 *
 * @param triangle integer 2D array. Each row on one more element than previous.
 * @param h integer The height of the triangle
 * @param entryIndex integer Signals which child to continue the path in current row
 * @returns minPathVal integer the value of the min path.
 */
const minPathValsTriangleRecursive = function (
    h: number,
    triangle: number[][],
    entryIndex: number
) {
    const currentRow = triangle[h - 1];
    if (h === 1) {
        return currentRow[0];
    }

    if (typeof currentRow[entryIndex] === undefined) {
        return 0;
    }

    let currentMin = 0;
    const prevRowIndexMin =
        currentRow[entryIndex] +
        minPathValsTriangleRecursive(h - 1, triangle, entryIndex);
    const prevRowIndexMinusOneMin =
        currentRow[entryIndex] +
        minPathValsTriangleRecursive(h - 1, triangle, entryIndex - 1);
    currentMin = Math.min(prevRowIndexMin, prevRowIndexMinusOneMin);

    return currentMin;
};

export function minPathValsTriangleTab(h: number, triangle: number[][]) {}

function generateInput() {}

export default function main() {
    const triangle = [[1], [2, 5], [1, 9, 6]];
    // [ [ 1 ],
    // , [ 3, 8 ],
    // , [ 1, 10, 16 ] ]
    const lastRow = triangle[triangle.length - 1];
    let overallMin = -1;
    for (let index in lastRow) {
        const currentMin = minPathValsTriangleRecursive(
            triangle.length,
            triangle,
            parseInt(index)
        );
        if (overallMin === -1) {
            overallMin = currentMin;
        } else {
            overallMin = Math.min(overallMin, currentMin);
        }
    }
    return overallMin;
}
