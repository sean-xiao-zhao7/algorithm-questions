// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters.
// The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.

/**
 *
 * @param {string} s
 * @returns {string}
 */

export function reverseWords(s) {}

export function reverseWordsSolution(inputArray) {}

export function generateInput(length, max) {
    const a = Array.from(new Array(length), (_) =>
        Math.floor(Math.random() * max * 10000)
    ).sort();

    return a.join(" ");
}
