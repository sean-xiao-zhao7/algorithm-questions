const insertionSort = (input) => {
    const sorted = [];
    for (const [currentInputIndex, currentInputValue] of Object.entries(
        input
    )) {
        for (const [currentSortedIndex, currentSortedValue] of Object.entries(
            sorted
        )) {
            if (currentSortedValue > currentInputValue) {
                sorted.splice(currentSortedIndex, 0, currentNum);
                break;
            }
        }
    }
    return sorted;
};

export default insertionSort;
