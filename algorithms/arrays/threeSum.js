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
    const seen = {};
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] in seen) {
            continue;
        } else {
            seen[nums[index]] = true;
        }
        const twoSum = -nums[index];
        const seen2 = {};
        for (let index2 = index + 1; index2 < nums.length; index2++) {
            const target = twoSum - nums[index2];
            if (nums[index2] in seen2 || target in seen2) {
                continue;
            } else {
                seen2[nums[index2]] = true;
                seen2[target] = true;
            }
            const targetIndex = nums.indexOf(target);
            if (targetIndex > -1) {
                const threeSumSet = [
                    nums[index],
                    nums[index2],
                    nums[targetIndex],
                ];
                seen[threeSumSet] = threeSumSet;
                result.push(threeSumSet);
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
