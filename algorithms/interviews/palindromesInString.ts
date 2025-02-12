/*
 * TODO
 *
 * A palindrome is a sequence of numbers or letters that is the same if read both forward and backward (i.e. abcba, abccba).
 * Given an array of letters as input, write an algorithm that returns the number of contiguous subsequence palindromes.
 * Example: [“a”,”a”,“b”,“b”,“a”] (aabba) as input would return 8.
 * The possible palindromes are a, a, b, b, a, aa, bb, abba (you don’t need to return this part).
 * */
function countPalindromesInStringRecursive(
    input: string,
    cache: { string: boolean } | {}
) {
    //[“a”,”a”,“b”,“b”,“a”]
    //[a] + [a, b, b, a]
    //[a] + [a] + [b, b, a]
    //[a] + [a] + [b] + [b, a]
    //[a] + [a] + [b] + [b] + [a]
}

export default function main(input: string[]) {
    const stringInput = input.join("");
    return countPalindromesInStringRecursive(stringInput, {});
}
