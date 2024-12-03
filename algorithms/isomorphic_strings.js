// Two strings s1 and s2 are called isomorphic if there is a one-to-one mapping possible for every character of s1 to every character of s2.
// And all occurrences of every character in ‘s1’ map to the same character in ‘s2’.

export const isomorphicStringChecker = (s1, s2) => {
    const len1 = s1.length;
    const len2 = s2.length;

    if (len1 != len2) return false;

    const seen = {};

    let index = 0;
    while (index < len1) {
        const item1 = s1[index];
        const item2 = s2[index];
        if (item1 in seen && seen[item1] !== item2) {
            return false;
        } else if (!(item1 in seen)) {
            seen[item1] = item2;
        }
        index++;
    }

    return true;
};
