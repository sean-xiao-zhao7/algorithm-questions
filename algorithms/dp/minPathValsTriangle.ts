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
function minPathValsTriangleRecursive(
    height: number,
    row: number,
    triangle: number[][]
) {
    const triangleHeight = triangle.length;
    const currentValue = triangle[height][row];

    if (height === triangleHeight - 1) {
        return currentValue;
    }

    const downTotal: number =
        currentValue + minPathValsTriangleRecursive(height + 1, row, triangle);

    const diagonalDownTotal: number =
        currentValue +
        minPathValsTriangleRecursive(height + 1, row + 1, triangle);

    return Math.min(downTotal, diagonalDownTotal);
}

export function minPathValsTriangleTab(h: number, triangle: number[][]) {}

export default function main() {
    const triangle = [[1], [2, 5], [1, 9, 6]];
    // [ [ 1 ],
    // , [ 2, 5 ],
    // , [ 1, 9, 6 ] ]

    const overallMin = minPathValsTriangleRecursive(0, 0, triangle);
    console.log(overallMin);
    return overallMin;
}
