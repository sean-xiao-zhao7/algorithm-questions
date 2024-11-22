/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
    const result = [];
    let currentDigitIndex = 0;
    let currentDigit = digits.charAt(currentDigitIndex);
    if (currentDigit == "") return result;

    for (let letter of lettersHash[currentDigit]) {
        let currentWord = letter;
        let digit2 = digits.charAt(currentDigitIndex + 1);
        if (currentDigit === "") break;
        for (let letter2 of lettersHash[currentDigit]) {
            currentWord += letter2;
            currentDigit = digits.charAt(currentDigitIndex + 2);
            if (currentDigit === "") break;
            for (let letter3 of lettersHash[currentDigit]) {
                currentWord += letter3;
                currentDigit = digits.charAt(currentDigitIndex + 3);
                if (currentDigit === "") break;
                for (let letter4 of lettersHash[currentDigit]) {
                    currentWord += letter4;
                }
            }
        }
    }

    return result;
};

const lettersHash = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tub",
    9: "wxyz",
};

export default letterCombinations;
