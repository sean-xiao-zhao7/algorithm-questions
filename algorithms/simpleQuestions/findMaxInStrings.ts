/**
 * findMaxInStrings
 * Find max single number in each string of an array of strings, each string is numbers plus dashes.
 *
 * @param inputArray string[]. Array of strings matching description.
 * @returns maxs number[]. The max number in each string.
 */
function findMaxInStrings(inputArray: string[]) {
    let maxs: number[] = [];
    for (let item of inputArray) {
        maxs.push(singleMax(item));
    }
    return maxs;
}

function singleMax(input: string) {
    let max = -1;
    let word = "";
    for (let char of input) {
        if (char !== "-") {
            word += char;
        } else {
            max = Math.max(max, parseInt(word));
            word = "";
        }
    }
    max = Math.max(max, parseInt(word));
    return max;
}

const result = findMaxInStrings([
    "12-123-12123-124-123",
    "123-123-12123-124-456745",
    "124124-56474-12123-124-123",
    "435345-123-3453-4564-6457",
    "345-123-12123-3453-123",
    "3453456-123-73657-124-123",
]);
console.log(result);
