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
    rowInitial: number,
    initialNinja1Col: number,
    initialNinja2Col: number,
    matrix: number[][]
) {
    let dp: number[][][] = [];
    matrix.forEach((_, rowIdx) => {
        let row: number[][] = [];
        matrix[0].forEach((_) => {
            let col1: number[] = [];
            matrix[0].forEach((_) => {
                col1.push(-1);
            });
            row.push(col1);
        });
        dp.push(row);
    });

    let overAllMax = -1;
    for (let row = rowInitial; row < matrix.length; row++) {
        for (let col1 = 0; col1 < matrix[0].length; col1++) {
            for (let col2 = 0; col2 < matrix[0].length; col2++) {
                let currentMax = -1;
                if (row === rowInitial) {
                    currentMax =
                        matrix[row][initialNinja1Col] +
                        matrix[row][initialNinja2Col];
                } else {
                    const nextColNinja1 = ninja1Col + nextColNinja1Diff;
                    const nextColNinja2 = ninja2Col + nextColNinja2Diff;
                    if (
                        nextColNinja1 < 0 ||
                        nextColNinja2 >= matrix[0].length
                    ) {
                        continue;
                    }
                    if (ninja1Col === ninja2Col) {
                        currentMax = matrix[row][ninja1Col];
                    } else {
                        currentMax =
                            matrix[row][ninja1Col] + matrix[row][ninja2Col];
                    }
                    currentMax += dp[row - 1][nextColNinja1][nextColNinja2];
                }
                overAllMax = Math.max(overAllMax, currentMax);
            }
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

    // const result = maxNinjaChocoRecursive(
    //     0,
    //     0,
    //     matrix[0].length - 1,
    //     matrix,
    //     cache
    // );

    // dp[0][0][length - 1]
    // dp[1][0][length - 1]
    // dp[1][1][length - 1]
    // dp[1][0][length - 2]
    // dp[1][1][length - 2]
    // dp[2][0][length - 1]
    // dp[2][1][length - 1]
    // dp[2][0][length - 2]
    // dp[2][1][length - 2]

    [
        [
            [-1, -1, -1, -1],
            [-1, -1, -1, -1],
            [-1, -1, -1, -1],
            [-1, -1, -1, -1],
        ],
        [
            [-1, -1, -1, -1],
            [-1, -1, -1, -1],
            [-1, -1, -1, -1],
            [-1, -1, -1, -1],
        ],
        [
            [-1, -1, -1, -1],
            [-1, -1, -1, -1],
            [-1, -1, -1, -1],
            [-1, -1, -1, -1],
        ],
        [
            [-1, -1, -1, -1],
            [-1, -1, -1, -1],
            [-1, -1, -1, -1],
            [-1, -1, -1, -1],
        ],
    ];

    const result = maxNinjaChocoTab(0, 0, matrix[0].length - 1, matrix);
    console.log(result);
}

main();
