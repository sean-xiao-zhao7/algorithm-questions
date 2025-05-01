/*
 * A palindrome is a sequence of numbers or letters that is the same if read both forward and backward (i.e. abcba, abccba).
 * Given an array of letters as input, write an algorithm that returns the number of contiguous subsequence palindromes.
 * Example: ["a","a","b","b","a"] (aabba) as input would return 8.
 * The possible palindromes are a, a, b, b, a, aa, bb, abba (you don’t need to return this part).
 * */
function countPalindromesInStringRecursive(
    input: string[],
    cache: number[][],
    startIdx: number,
    endIdx: number
) {
    if (input.length === 2) {
        return isPalindrome(input);
    }
    if (cache[startIdx][endIdx] !== -1) {
        return 0;
    }

    const isCurrentPalidrome = isPalindrome(input);
    cache[startIdx][endIdx] = isCurrentPalidrome;

    let removeFirstCount = 0,
        removeLastCount = 0;
    removeFirstCount = countPalindromesInStringRecursive(
        input.slice(1),
        cache,
        startIdx + 1,
        endIdx
    );
    removeLastCount = countPalindromesInStringRecursive(
        input.slice(0, -1),
        cache,
        startIdx,
        endIdx - 1
    );
    return isCurrentPalidrome + removeFirstCount + removeLastCount;
}

function isPalindrome(input: string[]) {
    let start = 0,
        end = input.length - 1;
    while (start <= end) {
        if (input[start] !== input[end]) return 0;
        start++;
        end--;
    }
    console.log(input);
    return 1;
}

function countPalindromesInStringTabulation(
    input: string,
    cache: { string: boolean } | {}
) {}

export default function main() {
    const stringInput = ["a", "a", "b", "b", "a"];
    const cache: number[][] = [];
    stringInput.forEach((_, idx) => {
        const endIdxArray: number[] = [];
        stringInput.forEach(() => endIdxArray.push(-1));
        cache[idx] = endIdxArray;
    });
    const result =
        countPalindromesInStringRecursive(
            stringInput,
            cache,
            0,
            stringInput.length - 1
        ) + stringInput.length;
    console.log("Total palindromes is " + result);
    console.log(cache);
}

main();
