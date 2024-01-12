const bubbleSort = (nums) => {
    let length = nums.length;
    let currentLength = length;
    while (currentLength > 0) {
        let prevIndex = 0;
        let currentIndex = 1;
        while (currentIndex < currentLength) {
            const prevVal = nums[prevIndex];
            const currentVal = nums[currentIndex];
            if (prevVal > currentVal) {
                nums[prevIndex] = currentVal;
                nums[currentIndex] = prevVal;
            }
            prevIndex += 1;
            currentIndex += 1;
        }
        currentLength -= 1;
    }
};

const nums = [11212, 2324, 12, 123, 5343, 123];
console.log(nums);
bubbleSort(nums);
console.log(nums);
