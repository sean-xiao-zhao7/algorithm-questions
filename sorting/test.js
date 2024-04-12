import bubbleSort from "./bubble_sort.js";
import insertionSort from "./insertion_sort.js";

const generateDataset = (length) => {
    const result = [];
    let index = 0;
    while (index < length) {
        result.push(Math.random() * 10);
    }
    return result;
};

let nums = [11212, 2324, 12, 123, 5343, 123];
console.log(nums);
// bubbleSort(nums);
nums = insertionSort(nums);
console.log(nums);
