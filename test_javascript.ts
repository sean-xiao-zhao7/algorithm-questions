import mainFunc, {
    generateInputSquareMatrix,
} from "./algorithms/arrays/compressSquareMatrix.js";

const input = generateInputSquareMatrix(5, 10);
console.log(input);

const result = mainFunc(input);
// console.log(result);
