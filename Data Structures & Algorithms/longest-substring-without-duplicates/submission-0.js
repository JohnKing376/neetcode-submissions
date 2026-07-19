class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const charMap = new Set();

        let left = 0;
        let result = 0

        for(let right = 0; right < s.length; right++) {
            while(charMap.has(s[right])) {
                charMap.delete(s[left])
                left++
            }
            charMap.add(s[right]);

            result = Math.max(result, right - left + 1);
        }

        return result;

    }
}
