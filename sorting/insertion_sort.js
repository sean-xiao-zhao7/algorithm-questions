const insertionSort = (input) => {
    const sorted = [];
    for (const [currentInputIndex, currentInputValue] of Object.entries(
        input
    )) {
        let inserted = false;
        for (const [currentSortedIndex, currentSortedValue] of Object.entries(
            sorted
        )) {
            if (currentSortedValue > currentInputValue) {
                sorted.splice(currentSortedIndex, 0, currentInputValue);
                inserted = true;
                break;
            }
        }
        if (!inserted) {
            sorted.push(currentInputValue);
        }
        inserted = false;
    }
    return sorted;
};

export default insertionSort;
