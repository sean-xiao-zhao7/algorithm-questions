export default function compressSquareMatrix(
    matrix: number[][],
    factors: number[],
    x: number
) {
    let sum = -1;
    for (const row of matrix) {
        console.log(row);
    }
    return sum;
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
