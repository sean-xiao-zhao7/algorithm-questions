import bubbleSort from "./bubble_sort.js";
import insertionSort from "./insertion_sort.js";

const generateDataset = (length) => {
    const result = [];
    let index = 0;
    while (index < length) {
        result.push(Math.floor(Math.random() * 100));
        index += 1;
    }
    return result;
};

let input = generateDataset(10);
// input = [11212, 2324, 12, 123, 5343, 123];
console.log(input);
// bubbleSort(input);
input = insertionSort(input);
console.log(input);
