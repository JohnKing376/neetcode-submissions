class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // create a map
        // i would store the numbers with their frequency
        // loop through k times
        // push the max num and delete from the map
        // return the new array

        let numMap = new Map();
        let output = [];
        let max = 0;

        for (let num of nums) {
            numMap.set(num, (numMap.get(num) || 0) + 1);
        }

        for (let i = 0; i < k; i++) {
            max = Math.max(...numMap.values());
            console.log(max)

            for (const [key, value] of numMap) {
                if (value === max) {
                    output.push(key);
                    numMap.delete(key);
                    break;
                }
            }
        }

        return output;
    }
}
