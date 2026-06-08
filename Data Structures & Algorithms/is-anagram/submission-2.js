class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let charMap = new Map();

        if(s.length !== t.length) return false

        for (let char of s) {
            charMap.set(char, (charMap.get(char) || 0) + 1);
        }

        for (let char of t) {
             if (!charMap.has(char)) {
                return false;
            }

            let currentCount = charMap.get(char);
            
            if (currentCount === 1) {
                charMap.delete(char);
            } else {
                charMap.set(char, currentCount - 1);
            }
        }

        return charMap.size === 0
    }
}
