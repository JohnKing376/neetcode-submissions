class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const matchesArray = s.match(/[A-Za-z0-9]/g);
        const cleanString = matchesArray ? matchesArray.join("").toLowerCase() : "";

        console.log(cleanString);

        let left = 0;
        let right = cleanString.length - 1;

        while (left < right) {
            if (cleanString[left] !== cleanString[right]) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}
