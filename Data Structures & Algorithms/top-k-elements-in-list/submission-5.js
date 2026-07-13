class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let numMap = new Map()

        for (let num of nums) {
            numMap.set(num, (numMap.get(num) || 0) + 1)
        }

        const entries = Array.from(numMap.entries())

        entries.sort((a, b) => b[1] - a[1])

        return entries.slice(0, k).map(entry => entry[0])
    }
}
