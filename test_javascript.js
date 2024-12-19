import { mainFunc } from "./algorithms/arrays/twoSum.js";

export function generateInput(length, max) {
    const a = Array.from(new Array(length), (_) =>
        Math.floor(Math.random() * max * (Math.round(Math.random()) * 2 - 1))
    );

    return a;
}

const input = generateInput(10, 5);
console.log(input);

const result = mainFunc(input);
console.log(result);
