import mainFunc from "./algorithms/arrays/compressSquareMatrix.js";

export function generateInput1DArray(length, max) {
    const a = Array.from(new Array(length), (_) =>
        Math.floor(Math.random() * max * (Math.round(Math.random()) * 2 - 1))
    );

    return a.sort((a, b) => (a > b ? 1 : -1));
}

export function generateInput2DArray(
    rows: number,
    cols: number,
    valMax: number
) {
    const main: number[][] = [];
    for (let i = 0; i < rows; i++) {
        let row: number[] = [];
        for (let j = 0; j < cols; j++) {
            row[j] = Math.floor(Math.random() * valMax);
        }
    }
}

const input = generateInput2DArray(5, 5, 10);
console.log(input);

const result = mainFunc(input, 3);
// console.log(result);
