const insertionSort = (nums) => {
    const sorted = [];
    for (const currentNum of nums) {
        if (sorted.length == 0) {
            sorted.push(currentNum);
            continue;
        }
        for (const [currentSortedIndex, currentSortedValue] of Object.entries(
            sorted
        )) {
            if (currentSortedValue > currentNum) {
                sorted.splice(currentSortedIndex, 0, currentNum);
                break;
            }
        }
    }
    return sorted;
};

export default insertionSort;
