class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = new Array(nums.length);

        // perform a left sweep
        result[0] = 1;
        for (let i = 1; i < nums.length; i++) {
            result[i] = result[i - 1] * nums[i - 1];
        }

        // peform sweep for the right
        let rightProduct = 1
        for(let i = nums.length - 1; i >= 0; i--) {
            result[i] = result[i] * rightProduct
            rightProduct *= nums[i]
        }

        return result
    }
}
