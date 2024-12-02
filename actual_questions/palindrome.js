// A palindrome is a sequence of numbers or letters that is the same if read both forward and backward (i.e. abcba, abccba).
// Given an array of letters as input, write an algorithm that returns the number of contiguous subsequence palindromes.
// Example: [“a”,”a”,“b”, “b”, “a”] as input would return 8.
// The possible palindromes are a, a, b, b, a, aa, bb, abba (you don’t need to return this part).

export function isPalindrome(input) {
    let forwardIndex = 0;
    let backIndex = input.length - 1;
    while (forwardIndex <= backIndex) {
        if (input[forwardIndex] != input[backIndex]) {
            return false;
        }
        forwardIndex += 1;
        backIndex -= 1;
    }
    return true;
}

export function countPalindrome(input) {
    let total = input.length; // count single letters

    let currentIndex = 0;
    while (currentIndex < input.length) {
        const remainingTotalArray = input.slice(currentIndex);

        // check every possible subarrays of remainingTotalArray
        let currentSubArray = [];
        for (let item of remainingTotalArray) {
            currentSubArray.push(item);
            if (currentSubArray.length > 1 && isPalindrome(currentSubArray)) {
                total += 1;
            }
        }
        currentIndex += 1;
    }

    return total;
}

export function generateTestInput(size) {
    const finalInput = [];
    const chars = ["a", "b"];
    let index = 0;
    while (index < size) {
        finalInput.push(chars[Math.floor(Math.random() * 2)]);
        index += 1;
    }
    return finalInput;
}
