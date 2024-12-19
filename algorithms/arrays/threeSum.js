// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that
// i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

/**
 *
 * @param {number[]} input
 * @returns {number[]}
 */

export function best3sums(input) {
    const result = [];

    // partition into postives and negatives
    const posItems = new Set([]),
        negItems = new Set([]);
    for (let item in input) {
        if (item > 0) posItems.push(item);
        else if (item < 0) negItems.push(item);
    }

    // detect presence of zero
    let zeroExists = false;
    if (input.indexOf(0) != -1) {
        zeroExists = true;
    }

    // O(n) loop
    let overallIndex = 0,
        posIndex = 0,
        negsIndex = 0;
    let currentPosItem, currentNegItem;
    while (overallIndex < input.length) {
        if (posIndex !== posItems.length) {
            currentPosItem = posItems[posIndex];
            posIndex++;
            overallIndex++;
        }
        if (negsIndex !== negItems.length) {
            currentNegItem = negItems[negsIndex];
            negsIndex++;
            overallIndex++;
        }
    }
    return result;
}

export function myThreeSum(nums) {
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
            if (nums[index2] in seen2) {
                continue;
            } else {
                seen2[nums[index2]] = true;
            }

            const target = twoSum - nums[index2];
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

function IsSameThreeSums(threeSum1, threeSum2) {
    for (let index = 0; index < threeSum1.length; index++) {
        if (threeSum2.indexOf(threeSum1[index]) == -1) {
            return false;
        }
    }

    return true;
}

export function generateInput(length, max) {
    const a = Array.from(new Array(length), (_) =>
        Math.floor(Math.random() * max * (Math.round(Math.random()) * 2 - 1))
    );

    return a;
}
