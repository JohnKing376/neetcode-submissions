class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const countMap = new Map();

        let L = 0;
        let maxCount = 0;
        let maxLength = 0;

        for (let R = 0; R < s.length; R++) {
            let charR = s[R];
            countMap.set(charR, (countMap.get(charR) || 0) + 1);
            maxCount = Math.max(maxCount, countMap.get(charR));

            while (R - L + 1 - maxCount > k) {
                let charL = s[L];
                countMap.set(charL, countMap.get(charL) - 1);
                L++;
            }

            maxLength = Math.max(maxLength, R - L + 1);
        }
        return maxLength;
    }
}
