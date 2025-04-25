/**
 * Find the max path for 2 ninjas in a matrix from top to bottom row.
 *
 * @param matrix integer 2D array.
 * @param row integer the row both ninjas are on this iteration.
 * @param ninja1Col integer The col the first ninja is on this iteration.
 * @param ninja2Col integer The col the second ninja is on this iteration.
 * @returns maxPathVal integer the value of the max path.
 */
function maxNinjaChocoRecursive(
    row: number,
    ninja1Col: number,
    ninja2Col: number,
    matrix: number[][],
    cache: number[][][]
) {
    if (row === matrix.length - 1) {
        if (ninja1Col === ninja2Col) return matrix[row][ninja1Col];
        else return matrix[row][ninja1Col] + matrix[row][ninja2Col];
    }

    let overAllMax = -1;
    for (
        let nextColNinja1Diff = -1;
        nextColNinja1Diff < 2;
        nextColNinja1Diff++
    ) {
        for (
            let nextColNinja2Diff = -1;
            nextColNinja2Diff < 2;
            nextColNinja2Diff++
        ) {
            let currentMax = -1;
            const nextColNinja1 = ninja1Col + nextColNinja1Diff;
            const nextColNinja2 = ninja2Col + nextColNinja2Diff;
            if (nextColNinja1 < 0 || nextColNinja2 >= matrix[0].length) {
                continue;
            }

            if (ninja1Col === ninja2Col) {
                currentMax = matrix[row][ninja1Col];
            } else {
                currentMax = matrix[row][ninja1Col] + matrix[row][ninja2Col];
            }
            currentMax += maxNinjaChocoRecursive(
                row + 1,
                nextColNinja1,
                nextColNinja2,
                matrix,
                cache
            );
            overAllMax = Math.max(overAllMax, currentMax);
        }
    }
    cache[row][ninja1Col][ninja2Col] = overAllMax;
    return overAllMax;
}

export function maxNinjaChocoTab(
    initialNinja1Col: number,
    initialNinja2Col: number,
    matrix: number[][]
) {
    let dp: number[][][] = [];
    matrix.forEach((_, rowIdx) => {
        let row: number[][] = [];
        matrix[0].forEach((_, col1Index) => {
            let col1: number[] = [];
            matrix[0].forEach((_, col2Index) => {
                if (rowIdx === matrix.length - 1) {
                    // if n - 1 row (last row) calc the max from matrix
                    if (col1Index === col2Index) {
                        col1.push(matrix[rowIdx][col1Index]);
                    } else {
                        col1.push(
                            matrix[rowIdx][col1Index] +
                                matrix[rowIdx][col2Index]
                        );
                    }
                } else {
                    // for non-last row set initial value to -1
                    col1.push(-1);
                }
            });
            row.push(col1);
        });

        dp.push(row);
    });
    // console.log(dp);

    let overAllMax = -1;
    const colWidth = matrix[0].length - 1;
    for (let rowIdx = matrix.length - 1; rowIdx >= 0; rowIdx--) {
        for (let col1Idx = 0; col1Idx < colWidth; col1Idx++) {
            for (let col2Idx = 0; col1Idx < colWidth; col2Idx++) {}
        }
    }
    return overAllMax;
}

export default function main() {
    const matrix = [
        [1, 3, 12, 3],
        [2, 53, 1, 4],
        [10, 9, 6, 10],
        [0, 8, 1, 13],
    ];

    let cache: number[][][] = [];
    matrix.forEach(() => {
        let row: number[][] = [];
        matrix[0].forEach(() => {
            let col: number[] = [];
            matrix[0].forEach(() => {
                col.push(-1);
            });
            row.push(col);
        });
        cache.push(row);
    });

    const result = maxNinjaChocoTab(0, matrix[0].length - 1, matrix);
    console.log(result);
}

main();
