export default function compressSquareMatrix(
    matrix: number[][],
    factors: number[],
    x: number
) {
    // console.log(matrix);
    // console.log(factors);

    let sum = -1;
    let numsSelected = 0;
    const numsSeen = {};

    for (const row in matrix) {
        // console.log(row);
        if (factors[row] <= 0) {
            continue;
        }

        numsSeen[row] = findXMax(matrix[row], factors[row]);
    }

    return sum;
}

function findXMax(row: number[], factor: number) {
    const xMaxArray: number[] = new Array(factor);
    let max = 0,
        maxIndex = 0;
    for (const item in row) {
        if (row[item] > max) {
            max = row[item];
            maxIndex = +item;
            xMaxArray;
        }
    }
}

export function generateInputSquareMatrix(rows: number, valMax: number) {
    const main: number[][] = [];
    for (let i = 0; i < rows; i++) {
        let row: number[] = [];
        for (let j = 0; j < rows; j++) {
            row[j] = Math.floor(Math.random() * valMax) + 1;
        }
        main[i] = row;
    }
    return main;
}

export function generateFactors(matrixSize: number) {
    const factors: number[] = [];
    for (let i = 0; i < matrixSize; i++) {
        factors[i] = Math.floor(Math.random() * (matrixSize + 1));
    }
    return factors;
}
