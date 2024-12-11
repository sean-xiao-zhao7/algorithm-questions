import {
    dedupSorted2,
    generateInput,
} from "./algorithms/arrays/dedupSorted2.js";

const input = generateInput(10, 2);
console.log(input);
dedupSorted2(input);
console.log(input);
