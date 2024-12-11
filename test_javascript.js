import {
    dedupSorted2,
    dedupSorted2Solution,
    generateInput,
} from "./algorithms/arrays/dedupSorted2.js";

const input = generateInput(15, 5);
console.log(input);
dedupSorted2Solution(input);
console.log(input);
