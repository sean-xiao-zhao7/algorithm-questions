import {
    reverseWords,
    generateInput,
} from "./algorithms/arrays/reverseWords.js";

const input = generateInput(10, 5);
console.log(input);

const result = reverseWords(input);
console.log(result);
