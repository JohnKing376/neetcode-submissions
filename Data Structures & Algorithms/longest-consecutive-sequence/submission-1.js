class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums)
        let longestStreak = 0

        for(let num of numSet) {
            if(!numSet.has(num - 1)) {
                let currentNum = num;
                let currentStreak = 1;

                while(numSet.has(currentNum + 1)) {
                    currentStreak++;
                    currentNum++;
                }

                longestStreak = Math.max(longestStreak, currentStreak)
            }
        }

        return longestStreak
    }
}

