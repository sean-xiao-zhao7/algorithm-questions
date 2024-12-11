import {
    dedupSorted2,
    generateInputs,
} from "./algorithms/arrays/dedupSorted2.js";

const input = generateInputs(10, 10);
console.log(input);
const result = dedupSorted2(input);

console.log(result);
