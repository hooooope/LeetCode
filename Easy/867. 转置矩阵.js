/**
 * 给你一个二维整数数组 matrix， 返回 matrix 的 转置矩阵 。
 * 矩阵的 转置 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
 *   2   4  -1        2   -10   18
 * -10   5  11   =>   4     5   -7
 *  18  -7   6       -1    11    6
 * 示例 1：
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[[1,4,7],[2,5,8],[3,6,9]]
 *
 * 示例 2：
 * 输入：matrix = [[1,2,3],[4,5,6]]
 * 输出：[[1,4],[2,5],[3,6]]
 */

/**
* @param {number[][]} matrix
* @return {number[][]}
*/
var transpose1 = function (matrix) {
    // 将 m行 n列的矩阵转化为 n行 m列。
    const result = []
    const row = matrix.length// 行数
    const column = matrix[0].length// 列数
    for (let i = 0; i < column; i++) {// 遍历列
        result[i] = []
        for (let j = 0; j < row; j++) {// 取出当前列的每一项，并存入数组
            result[i].push(matrix[j][i])
        }
    }
    return result
};

var transpose2 = function (matrix) {
    const m = matrix.length, n = matrix[0].length
    const result = new Array(n).fill(0).map(() => new Array(m).fill(0))
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            result[i][j] = matrix[j][i]
        }
    }
    return result
}

// 以上两种写法的思路是一致的，但是第一种写法需要动态扩容数组，比较消耗性能。