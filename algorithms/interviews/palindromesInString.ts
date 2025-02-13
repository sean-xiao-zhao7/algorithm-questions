/*
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

    const currentResult: number = isPalindrome(input, cache);
    const totalStartingThisChar =
        currentResult +
        countPalindromesInStringRecursive(input.slice(0, length - 1), cache);
    const totalWithoutThisChar = countPalindromesInStringRecursive(
        input.slice(1, length),
        cache
    );
    return totalStartingThisChar + totalWithoutThisChar;
}

function countPalindromesInStringTabulation(
    input: string,
    cache: { string: boolean } | {}
) {
    const iterations: number[][] = [];
    iterations[0] = [];
    iterations[0][0] = 1; // totalStartingThisChar
    iterations[0][1] = 0; // totalWithoutThisChar
    for (let length = 1; length < input.length + 1; length++) {
        iterations[length] = [];

        const currentString = input.slice(0, length);
        let currentResult: number = isPalindrome(currentString, cache);
        const totalStartingThisChar = currentResult + iterations[length - 1][0];
        iterations[length][0] = totalStartingThisChar;

        const remainingString = input.slice(1, input.length);
        currentResult = isPalindrome(remainingString, cache);
        const totalWithoutThisChar = currentResult + iterations[length - 1][1];
        iterations[length][1] = totalWithoutThisChar;

        console.log(currentString);
        console.log(iterations);
    }
    return iterations[input.length][0] + iterations[input.length][1];
}

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
    return countPalindromesInStringTabulation(stringInput, {});
    // return (
    //     stringInput.length + countPalindromesInStringTa(stringInput, {})
    // );
}
