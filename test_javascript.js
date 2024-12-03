// import letterCombinationsOfAPhoneNumber from "./backtracking/letter-combinations-of-a-phone-number.js";

import {
    countPalindromeN2,
    countPalindromeN3,
    generateTestInput,
} from "./actual_questions/palindrome.js";

// const input = ["a", "a", "b", "b", "a", "a", "b"];
const input = generateTestInput(10000);
console.log(countPalindromeN3(input));
// console.log(isPalindrome("aaaa"));
