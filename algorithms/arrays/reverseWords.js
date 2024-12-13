// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters.
// The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.

/**
 *
 * @param {string} s
 * @returns {string}
 */

export function reverseWords(s) {
    s = s.trim();
    const firstSpaceIndex = s.indexOf(" ");
    if (firstSpaceIndex === -1) {
        return s;
    }

    return (
        reverseWords(s.slice(firstSpaceIndex)) +
        " " +
        s.slice(0, firstSpaceIndex)
    );
}

export function reverseWordsSolution(inputArray) {}

export function generateInput(length, max) {
    const a = Array.from(new Array(length), (_) =>
        Math.floor(Math.random() * max * 10000)
    ).sort();

    return a.join(" ");
}
