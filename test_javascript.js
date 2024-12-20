import mainFunc from "./algorithms/arrays/twoSum.js";

export function generateInput(length, max) {
    const a = Array.from(new Array(length), (_) =>
        Math.floor(Math.random() * max * (Math.round(Math.random()) * 2 - 1))
    );

    return a.sort((a, b) => (a > b ? 1 : -1));
}

const input = generateInput(10, 10);
console.log(input);

const result = mainFunc([2, 7, 11, 15], 9);
console.log(result);
