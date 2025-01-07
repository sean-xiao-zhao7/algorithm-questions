/**
 * Keyboard
 * Return the number of steps needed to type out the searchTerm using keyboard.
 * @param searchTerm
 * @returns integer - the number of steps used to achieve the searchTerm.
 */
const keyboard = "abcdefghijklmnopqrstuvwxyz";

export default function Keyboard(searchTerm: string) {
    console.log("Typing out", searchTerm);

    const charSteps = {};
    for (let charIndex in Array.from(keyboard)) {
        charSteps[keyboard[charIndex]] = parseInt(charIndex);
    }
    // console.log(charSteps);

    let stepsCount = 0;
    let prevCharSteps = -1;
    for (let currentChar of searchTerm) {
        if (prevCharSteps !== -1) {
            stepsCount += Math.abs(charSteps[currentChar] - prevCharSteps);
        } else {
            stepsCount += charSteps[currentChar];
        }
        prevCharSteps = charSteps[currentChar];
    }

    return stepsCount;
}

export function generateInput(length: number) {
    let result = "";
    for (let index = 0; index < length; index++) {
        const randIndex = Math.floor(Math.random() * 25);
        result += keyboard[randIndex];
    }
    return result;
}
