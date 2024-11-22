/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
    const result = [];
    let currentDigitIndex = 0;
    while (currentDigitIndex < digits.length) {
        let currentDigit = digits.charAt(currentDigitIndex);
        if (currentDigit === "") {
            return result;
        }

        for (let letter of lettersHash[currentDigit]) {
            let currentWord = letter;
            while (digits.length > 0) {
                let currentWord = "";
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
