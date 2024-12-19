// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that
// i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

/**
 *
 * @param {number[]} nums
 * @returns {number[]}
 */

export function threeSum(nums) {
    const result = [];
    for (let index = 0; index < nums.length; index++) {
        const twoSum = -nums[index];
        for (let index2 = index + 1; index2 < nums.length; index2++) {
            const target = twoSum - nums[index2];
            if (target in nums) {
                result.push([nums[index], nums[index2], nums[target]]);
            }
        }
    }
    return result;
}

export function generateInput(length, max) {
    const a = Array.from(new Array(length), (_) =>
        Math.floor(Math.random() * max * (Math.round(Math.random()) * 2 - 1))
    );

    return a;
}
