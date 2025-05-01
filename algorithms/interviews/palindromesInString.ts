/*
 * A palindrome is a sequence of numbers or letters that is the same if read both forward and backward (i.e. abcba, abccba).
 * Given an array of letters as input, write an algorithm that returns the number of contiguous subsequence palindromes.
 * Example: [“a”,”a”,“b”,“b”,“a”] (aabba) as input would return 8.
 * The possible palindromes are a, a, b, b, a, aa, bb, abba (you don’t need to return this part).
 * */
function countPalindromesInStringRecursive(
    input: string,
    cache: { string: boolean } | {}
) {}

function countPalindromesInStringTabulation(
    input: string,
    cache: { string: boolean } | {}
) {}

function isPalindrome(input: string, cache: { string: boolean } | {}) {
    const result = 1;
    let start = 0,
        end = input.length - 1;
    while (start < end) {
        if (input[start] !== input[end]) return 0;
        if (cache[input.slice(start, end)]) return 1;
        start++;
        end--;
    }
    return result;
}

export default function main() {
    const stringInput = "aabba";
    const result = countPalindromesInStringTabulation(stringInput, {});
    console.log("Total palindromes is " + result);
}

main();
