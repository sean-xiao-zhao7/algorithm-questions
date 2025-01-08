import mainFunc, { generateInput } from "./algorithms/arrays/partyChairs.js";

const inputs = generateInput(10);
const result = mainFunc(inputs[0], inputs[1]);
console.log(result);
