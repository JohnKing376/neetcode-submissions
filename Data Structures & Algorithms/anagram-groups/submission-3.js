class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let output = new Map()

        for (let str of strs) {
            const count = new Array(26).fill(0)

            for(let char of str) {
                count[char.charCodeAt(0) - 97]++
            }

            let key = count.toString()

            if(!output.get(key)) {
                output.set(key, [])
            }

            output.get(key).push(str)
        }

        return Array.from(output.values())
    }
}
