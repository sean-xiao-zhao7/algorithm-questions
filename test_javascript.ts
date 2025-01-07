import mainFunc, {
    generateInputSquareMatrix,
    generateFactors,
} from "./algorithms/arrays/compressSquareMatrix.js";

const input1 = generateInputSquareMatrix(5, 10);
const input2 = generateFactors(5);

const result = mainFunc(input1, input2, 3);
console.log(result);
