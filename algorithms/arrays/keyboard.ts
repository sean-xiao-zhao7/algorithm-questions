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
        const reverseSteps = 26 - parseInt(charIndex);
        charSteps[keyboard[charIndex]] = [parseInt(charIndex), reverseSteps];
    }
    console.log(charSteps);

    let fingerIndex = 0;
    for (let char of searchTerm) {
    }
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
