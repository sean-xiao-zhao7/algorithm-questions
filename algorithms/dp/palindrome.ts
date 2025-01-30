/*
 * A palindrome is a sequence of numbers or letters that is the same if read both forward and backward (i.e. abcba, abccba).
 * Given an array of letters as input, write an algorithm that returns the number of contiguous subsequence palindromes.
 * Example: [“a”,”a”,“b”,“b”,“a”] (aabba) as input would return 8.
 * The possible palindromes are a, a, b, b, a, aa, bb, abba (you don’t need to return this part).
 * */
function countPalindromes(input: string) {}

function countPalindromesRecursive(input: string) {
    const length = input.length;
    if (length == 1) {
        return 1;
    }

    return 1 + countPalindromesRecursive(input.slice(0, length - 1));
}

function generateTestInput(size: number) {
    const finalInput: string[] = [];
    const chars = ["a", "b"];
    let index = 0;
    while (index < size) {
        finalInput.push(chars[Math.floor(Math.random() * 2)]);
        index += 1;
    }
    return finalInput;
}

export default function main(input: string[]) {
    const stringInput = input.join("");
    return countPalindromes(stringInput);
}
