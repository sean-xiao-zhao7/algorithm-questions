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
    console.log(numsSeen);

    return sum;
}

function findXMax(row: number[], factor: number) {
    const xMaxArray: number[] = [];
    let min = row[0],
        minIndex = 0;
    for (const item in row) {
        if (row[item] > min) {
            if (xMaxArray.length < factor) {
                xMaxArray.push(row[item]);
            } else {
                xMaxArray[minIndex] = row[item];
            }
        } else if (row[item] < min) {
            if (xMaxArray.length < factor) {
                minIndex = xMaxArray.push(row[item]) - 1;
                min = row[item];
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
