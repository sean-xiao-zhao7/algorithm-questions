/**
 * partyChairs
 *
 * There are n guests who are invited to a party.
 * The k-th guest will attend the party at time S[k] and leave the party at time E[k].
 * Given an integer array S and an integer array E, both of length n,
 *
 * @param startTimes number[]
 * @param endingTimes number[]
 * @returns an integer denoting the minimum number of chairs you need such that everyone attending the party can sit down.
 */
export default function partyChairs(
    startTimes: number[],
    endingTimes: number[]
) {
    const n = startTimes.length;
    const timesPeople = {};
    for (let time = 0; time < 25; time++) {
        timesPeople[time] = 0;
    }

    for (let i = 0; i < n; i++) {
        for (let time = 0; time < 25; time++) {
            if (time >= startTimes[i] && time <= endingTimes[i]) {
                timesPeople[time] += 1;
            }
        }
    }

    console.log(timesPeople);
}

/**
 * generateInput
 *
 * Generate inputs startTimes and endTimes for partyChairs.
 * @param n number: the length of both startTimes and endTimes.
 * @returns number[][]: an array containing both startTimes and endTimes.
 */
export function generateInput(n: number) {
    const startTimes: number[] = [],
        endTimes: number[] = [];
    for (let i = 0; i < n; i++) {
        const time1 = Math.floor(Math.random() * 20) + 1;
        const time2 = Math.floor(Math.random() * (24 - time1)) + 1;

        startTimes.push(time1);
        endTimes.push(time1 + time2);
    }

    return [startTimes, endTimes];
}
