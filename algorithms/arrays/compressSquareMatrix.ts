export default function compressSquareMatrix(
    matrix: number[][],
    factors: number[],
    x: number
) {
    console.log(matrix);
    console.log(factors);

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
    console.log(numsSeen);

    return sum;
}

function findXMax(row: number[], factor: number) {
    const xMaxArray: number[] = [];
    xMaxArray.push(row[0]);
    for (const item of row) {
        if (item > xMaxArray[-1]) {
            if (xMaxArray.length === factor) {
                xMaxArray.shift();
            }
            xMaxArray.push(item);
        } else if (item < xMaxArray[0]) {
            if (xMaxArray.length < factor) {
                xMaxArray.unshift(item);
            }
        }
    }
    return xMaxArray;
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
        factors.push(Math.floor(Math.random() * (matrixSize + 1)));
    }
    return factors;
}
