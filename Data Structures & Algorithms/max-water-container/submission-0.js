class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0

        for(let i = 0; i < heights.length; i++) {
            for(let j = i + 1; j < heights.length; j++) {
                let height = j - i
                let width = Math.min(heights[i], heights[j])
                let area = height * width

                maxArea = Math.max(maxArea, area)
            }
        }


        return maxArea
    }
}
