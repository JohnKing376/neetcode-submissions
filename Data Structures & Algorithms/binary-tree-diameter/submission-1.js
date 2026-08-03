/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let maxDiameter = 0;
        function calculateDepth(root) {
            if (!root) return 0;

            let leftDepth = calculateDepth(root.left);
            let rightDepth = calculateDepth(root.right);

            maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

            return 1 + Math.max(leftDepth, rightDepth);
        }

        calculateDepth(root);
        return maxDiameter;
    }
}
