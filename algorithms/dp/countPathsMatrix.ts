/**
 * Count all possible paths from 0,0 to m-1,n-1 of a matrix of size m:n.
 * @param input integer 2D array.
 */

const directions = {
    vertical: "vertical",
    horizontal: "horizontal",
    diagonal: "diagonal",
};

const countPathsMatrixRecursive = function (
    m: number,
    n: number,
    prevDirection: string
) {
    if (m == 1 && n == 1) {
        return prevDirection !== "diagonal" ? 1 : 0;
    } else if (m == 1) {
        return 0;
    } else if (n == 1) {
        return 0;
    } else {
        let grandTotal = 2;
        grandTotal += countPathsMatrixRecursive(
            m,
            n - 1,
            directions.horizontal
        );
        grandTotal += countPathsMatrixRecursive(m - 1, n, directions.vertical);
        grandTotal += countPathsMatrixRecursive(
            m - 1,
            n - 1,
            directions.diagonal
        );
        return grandTotal;
    }
};

export function countPathsMatrixTab(m: number, n: number) {}

function generateInput() {}

export default function main() {
    // [(0,0), (0,1)
    //  (1,0), (1,1)]
    const grandTotal = countPathsMatrixRecursive(4, 4, "none");
    return grandTotal + 1;
}
