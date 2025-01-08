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
) {}

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
        const time1 = Math.floor(Math.random() * 23) + 1;
        const time2 = Math.floor(Math.random() * 23) + 1;

        startTimes.push(time1);
        endTimes.push(time2);
    }

    return [startTimes, endTimes];
}
