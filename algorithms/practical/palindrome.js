// A palindrome is a sequence of numbers or letters that is the same if read both forward and backward (i.e. abcba, abccba).
// Given an array of letters as input, write an algorithm that returns the number of contiguous subsequence palindromes.
// Example: [“a”,”a”,“b”, “b”, “a”] as input would return 8.
// The possible palindromes are a, a, b, b, a, aa, bb, abba (you don’t need to return this part).

export function isPalindromeLogN2(currentIndex, index2, input, cache) {
    if (currentIndex === index2) {
        return true;
    }

    if (index2 == currentIndex + 1 && input[currentIndex] === input[index2]) {
        return true;
    }

    if (cache[currentIndex[index2]] != -1) {
        return cache[currentIndex[index2]];
    }

    if (
        input[currentIndex] === input[index2] &&
        isPalindromeLogN2(currentIndex + 1, index2 - 1, input, cache)
    ) {
        cache[currentIndex[index2]] = true;
    } else {
        cache[currentIndex[index2]] = false;
    }

    return cache[currentIndex[index2]];
}

export function countPalindromeN2(input) {
    const length = input.length;
    let total = 0;

    const cache = Array.from({ length: total }, () =>
        new Array(total).fill(-1)
    );

    let currentIndex = 0;
    while (currentIndex < length) {
        let index2 = currentIndex + 1;
        while (index2 < length) {
            if (isPalindromeLogN2(currentIndex, index2, input, cache)) {
                total += 1;
            }
            index2 += 1;
        }
        currentIndex += 1;
    }

    return total;
}

export function isPalindromeN3(input) {
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

export function countPalindromeN3(input) {
    let total = input.length; // count single letters
    let currentIndex = 0;
    while (currentIndex < input.length) {
        const remainingTotalArray = input.slice(currentIndex);

        // check every possible subarrays of remainingTotalArray
        // currentSubArray is reset at every iteration of outer loop
        let subArrayToCheck = [];
        for (let item of remainingTotalArray) {
            subArrayToCheck.push(item);
            if (subArrayToCheck.length > 1) {
                if (isPalindromeN3(subArrayToCheck)) {
                    total += 1;
                }
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
