/**
 * 给你一个 m x n 的矩阵 matrix 。如果这个矩阵是托普利茨矩阵，返回 true ；否则，返回 false 。
 * 如果矩阵上每一条由左上到右下的对角线上的元素都相同，那么这个矩阵是 托普利茨矩阵 。
 * 1 2 3 4
 * 5 1 2 3
 * 9 5 1 2
 * 输入：matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
 * 输出：true
 * 解释：
 * 在上述矩阵中, 其对角线为: 
 * "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]"。 
 * 各条对角线上的所有元素均相同, 因此答案是 True 。
 */

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
    // 遍历该矩阵，将每一个元素和它左上角的元素相比对即可
    const row = matrix.length// 行数
    const column = matrix[0].length// 列数
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < column; j++) {
            if (matrix[i][j] !== matrix[i - 1][j - 1]) {
                return false
            }
        }
    }
    return true
};