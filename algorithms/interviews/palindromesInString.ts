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
    const length = input.length;
    if (length == 1) {
        return 0;
    }

    if (cache[input]) {
        return 0;
    } else {
        cache[input] = true;
    }

    const currentResult: number = isPalidrome(input);
    const totalStartingThisChar =
        currentResult +
        countPalindromesInStringRecursive(input.slice(0, length - 1), cache);
    const totalWithoutThisChar = countPalindromesInStringRecursive(
        input.slice(1, length),
        cache
    );

    return totalStartingThisChar + totalWithoutThisChar;
}

function isPalidrome(input: string) {
    const result = 1;
    let start = 0,
        end = input.length - 1;
    while (start < end) {
        if (input[start] !== input[end]) return 0;
        start++;
        end--;
    }
    console.log(input);
    return result;
}

export default function main() {
    const stringInput = "aabba";
    return (
        stringInput.length + countPalindromesInStringRecursive(stringInput, {})
    );
}
