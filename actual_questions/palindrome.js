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
    let count = input.length;
    let numSeen = 0;
    for (let item of input) {
        let seen = "";
        for (let item of input.slice(numSeen)) {
            seen += item;
            if (seen.length > 1 && isPalindrome(seen)) {
                count += 1;
            }
        }
        numSeen += 1;
    }
    return count;
}

const input = ["a", "a", "b", "b", "a", "a", "b"];
console.log(countPalindrome(input));
// console.log(isPalindrome("aaaa"));
