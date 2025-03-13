/**
 * replaceUnderscoreCapitalise
 * Replace underscores with spaces, and capitalise all words.
 *
 * @param inputString string. Any string that may contain underscores and or words.
 * @returns resultString string. The converted string.
 */
function replaceUnderscoreCapitalise(inputString: string) {
    let resultString = "";
    let prevUnderscore = true;
    for (let index = 0; index < inputString.length; index++) {
        if (prevUnderscore) {
            resultString += inputString[index].toUpperCase();
            prevUnderscore = false;
        } else if (inputString[index] === "_") {
            resultString += " ";
            prevUnderscore = true;
        } else {
            resultString += inputString[index];
            prevUnderscore = false;
        }
    }

    return resultString;
}

const result = replaceUnderscoreCapitalise(
    "asdfasdfasdfsafdas_asdfas_asdfa_asdfasdf_asdasf_asdfasdf"
);
console.log(result);
