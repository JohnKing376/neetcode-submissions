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
     * @return {boolean}
     */
    isBalanced(root) {
        if (!root) return true;
        
        function calculateDepth(p) {
            if (!p) {
                return 0;
            }

            let leftDepth = calculateDepth(p.left);
            let rightDepth = calculateDepth(p.right);

            return 1 + Math.max(leftDepth, rightDepth);
        }

        let leftTree = calculateDepth(root.left);
        let rightTree = calculateDepth(root.right);

        if (Math.abs(leftTree - rightTree) > 1) {
            return false;
        }

        return (this.isBalanced(root.left) && this.isBalanced(root.right));
    }
}
