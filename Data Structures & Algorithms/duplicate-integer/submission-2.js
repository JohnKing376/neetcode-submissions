class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // We could use a for loop that goes through the array twice, This could be the brute force approach
        // We could as well use a Set, Which only contans unique values

        let unique = new Set();

        for (let i = 0; i < nums.length; i++) {
            if (unique.has(nums[i])) {
                return true;
            }
            unique.add(nums[i]);
        }
        return false;
    }
}
