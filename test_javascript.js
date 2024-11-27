// import letterCombinationsOfAPhoneNumber from "./backtracking/letter-combinations-of-a-phone-number.js";

import {
    countPalindrome,
    generateTestInput,
} from "./actual_questions/palindrome.js";

// const input = ["a", "a", "b", "b", "a", "a", "b"];
const input = generateTestInput(3);
console.log(input, countPalindrome(input));
// console.log(isPalindrome("aaaa"));
