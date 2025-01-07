/**
 * Keyboard
 * Return the number of steps needed to type out the searchTerm using keyboard.
 * @param searchTerm
 * @returns integer - the number of steps used to achieve the searchTerm.
 */
export default function Keyboard(searchTerm: string) {
    console.log("Finding\n", searchTerm);

    const keyboard = "abcdefghijklmnopqrstuvwxyz";
    const charSteps = {};
    for (let charIndex in Array.from(keyboard)) {
        const reverseSteps = 25 - parseInt(charIndex);
        charSteps[keyboard[charIndex]] = [parseInt(charIndex), reverseSteps];
    }
    console.log(charSteps);

    let stepsCount = 0;
    let prevCharSteps = -1;
    for (let currentChar of searchTerm) {
        if (prevCharSteps !== -1) {
            stepsCount += Math.abs(charSteps[currentChar] - prevCharSteps);
            prevCharSteps = charSteps[currentChar];
        } else {
            stepsCount += charSteps[currentChar];
        }
    }

    return stepsCount;
}

export function generateInput(length: number) {
    let result = "";
    const keyboard = "abcdefghijklmnopqrstuvwxy";
    for (let index = 0; index < length; index++) {
        const randIndex = Math.floor(Math.random() * 26);
        result += keyboard[randIndex];
    }
    return result;
}
