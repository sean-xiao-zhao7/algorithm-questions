const insertionSort = (input) => {
    const sorted = [];
    for (const currentInputValue of input) {
        let inserted = false;
        for (const [currentSortedIndex, currentSortedValue] of Object.entries(
            sorted
        )) {
            if (currentSortedValue >= currentInputValue) {
                sorted.splice(currentSortedIndex, 0, currentInputValue);
                inserted = true;
                break;
            }
        }
        if (!inserted) {
            sorted.push(currentInputValue);
        } else {
            inserted = false;
        }
    }
    return sorted;
};

export default insertionSort;
