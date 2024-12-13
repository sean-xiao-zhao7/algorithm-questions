import { rotateArray, generateInput } from "./algorithms/arrays/rotateArray.js";

const input = generateInput(15, 5);
console.log(input);

const result = rotateArray(input, 3);
console.log(result);
