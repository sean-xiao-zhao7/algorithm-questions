import {
    dedupSorted2,
    generateInput,
} from "./algorithms/arrays/dedupSorted2.js";

const input = generateInput(15, 5);
console.log(input);
dedupSorted2(input);
console.log(input);
