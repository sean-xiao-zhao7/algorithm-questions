/*
 * A palindrome is a sequence of numbers or letters that is the same if read both forward and backward (i.e. abcba, abccba).
 * Given an array of letters as input, write an algorithm that returns the number of contiguous subsequence palindromes.
 * Example: ["a","a","b","b","a"] (aabba) as input would return 8.
 * The possible palindromes are a, a, b, b, a, aa, bb, abba (you don’t need to return this part).
 * */
function countPalindromesInStringRecursive(input: string[]) {
    if (input.length === 1) {
        return 1;
    }

    if (input.length === 2) {
        return 2;
    }

    if (isPalindrome(input)) {
        return 1 + countPalindromesInStringRecursive(input.slice(1));
    } else {
        return 0 + countPalindromesInStringRecursive(input.slice(1));
    }
}

function countPalindromesInStringTabulation(
    input: string,
    cache: { string: boolean } | {}
) {}

function isPalindrome(input: string[]) {
    let start = 0,
        end = input.length - 1;
    while (start < end) {
        if (input[start] !== input[end]) return false;
        start++;
        end--;
    }
    return true;
}

export default function main() {
    const stringInput = ["a", "a", "b", "b", "a"];
    const result = countPalindromesInStringRecursive(stringInput);
    console.log("Total palindromes is " + result);
}

main();
