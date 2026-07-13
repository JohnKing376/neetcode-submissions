class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""
        for (let str of strs) {
            result += str.length + "#" + str
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0
        let result = []

        while(i < str.length) {
            let j = str.indexOf("#", i) // j = 1

            let len = parseInt(str.substring(i, j)) // len = 5

            let word = str.substring(j + 1, j + 1 + len)

            result.push(word)

            i = j + 1 + len
        }

        return result
    }
}
