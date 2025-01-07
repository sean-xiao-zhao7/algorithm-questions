export default function compressSquareMatrix(
    matrix: number[][],
    factors: number[],
    x: number
) {
    console.log("The matrix\n", matrix);
    console.log("The factors", factors);
    console.log("Picking " + x);

    const numsSeen = {};
    for (const row in matrix) {
        if (factors[row] <= 0) {
            continue;
        }
        matrix[row].sort((a, b) => a - b);
        matrix[row].reverse();
        numsSeen[row] = matrix[row].slice(0, factors[row]);
    }
    return sumXMax(numsSeen, x);
}

function sumXMax(numsSeen: { number: number[] } | {}, x: number) {
    console.log(numsSeen);
    let sums = [];
    for (let row in numsSeen) {
        sums = sums.concat(numsSeen[row]);
    }
    sums.sort((a, b) => a - b);
    sums.reverse();
    sums = sums.slice(0, x);
    return sums.reduce((vals, val) => vals + val, 0);
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
