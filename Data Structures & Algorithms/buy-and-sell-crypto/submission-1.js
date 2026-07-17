class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let L = 0; 

        for (let R = 1; R < prices.length; R++) {
            if (prices[R] > prices[L]) {
                let profit = prices[R] - prices[L];
                maxProfit = Math.max(maxProfit, profit);
            } else {
                L = R;
            }
        }

        return maxProfit;
    }
}
