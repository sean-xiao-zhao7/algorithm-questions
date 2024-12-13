import { threeSum, generateInput } from "./algorithms/arrays/threeSum.js";

const input = generateInput(20, 3);
console.log(input);

const result = threeSum(input);
console.log(result);
