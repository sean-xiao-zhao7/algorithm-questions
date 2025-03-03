/**
 * Find path of min values. Each node in triangle has integer val > 0.
 *
 * @param triangle integer 2D array. Each row on one more element than previous.
 * @param h integer The height of the triangle
 * @returns minPathVal integer the value of the min path.
 */
const minPathValsTriangleRecursive = function (
    h: number,
    triangle: number[][]
) {};

export function minPathValsTriangleTab(h: number, triangle: number[][]) {}

function generateInput() {}

export default function main() {
    const triangle = [[1], [2, 5], [1, 9, 6]];
    // [ [ 1 ],
    // , [ 3, 8 ],
    // , [ 1, 10, 16 ] ]
    const minPathVal = minPathValsTriangleRecursive(triangle.length, triangle);
    return minPathVal;
}
