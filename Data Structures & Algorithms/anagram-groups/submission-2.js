class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // sort the string array

        let output = new Map();

        for (let char of strs) {
            let sortedKey = char.split("").sort().join("");

            if (output.has(sortedKey)) {
                output.get(sortedKey).push(char);
            } else {
                output.set(sortedKey, [char]);
            }
        }

        return Array.from(output.values());
    }
}
