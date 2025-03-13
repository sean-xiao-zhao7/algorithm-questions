/**
 * replaceSpaceLowercase
 * Replace spaces with underscores, and lowercase all words.
 *
 * @param inputString string. Any string that may contain spaces and or words.
 * @returns resultString string. The converted string.
 */
function replaceSpaceLowercase(inputString: string) {
    let resultString = "";
    let prevSpace = true;
    for (let index = 0; index < inputString.length; index++) {
        if (prevSpace) {
            resultString += inputString[index].toLowerCase();
            prevSpace = false;
        } else if (inputString[index] === " ") {
            resultString += "_";
            prevSpace = true;
        } else {
            resultString += inputString[index];
        }
    }

    return resultString;
}

const result = replaceSpaceLowercase(
    "Asdfasdfasdfsafdas Asdfas Asdfa Asdfasdf Asdasf Asdfasdf"
);
console.log(result);
