/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

export const findMedianSortedArrays = (nums1, nums2) => {
    const len1 = nums1.length;
    const len2 = nums2.length;

    let index1,
        index2 = 0;

    let median1,
        median2 = 0;

    for (let iteration; iteration < (len1 + len2) / 2; iteration++) {
        median2 = median1;

        if (index1 == len1) {
            index2++;
        } else if (index2 == len2) {
            index1++;
        }

        const item1 = nums1[index1];
        const item2 = nums2[index2];

        if (item1 < item2) {
            median1 = item1;
            index1++;
        } else {
            median1 = item2;
            index2++;
        }
    }

    console.log(median1, median2);
};

export function generateTestInput(size) {
    const finalInput1 = [1, 3, 5, 6, 7, 8, 10];
    const finalInput2 = [2, 3, 4, 5, 6, 7, 8, 9, 12, 15];
    // [1, 2, 3, 3, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 10, 12, 15]

    return finalInput1, finalInput2;
}
