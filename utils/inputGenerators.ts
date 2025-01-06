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
            row[j] = Math.floor(Math.random() * valMax) + 1;
        }
        main[i] = row;
    }
    return main;
}
