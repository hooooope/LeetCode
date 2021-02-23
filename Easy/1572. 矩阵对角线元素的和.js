/**
 * 给你一个正方形矩阵 mat，请你返回矩阵对角线元素的和。
 * 请你返回在矩阵主对角线上的元素和副对角线上且不在主对角线上元素的和。
 * 示例  1：
 * 输入：mat = [[1,2,3],
 *             [4,5,6],
 *             [7,8,9]]
 * 输出：25
 * 解释：对角线的和为：1 + 5 + 9 + 3 + 7 = 25
 * 请注意，元素 mat[1][1] = 5 只会被计算一次。
 */

/*
[[6, 3, 1, 10, 7,  4],
[4, 10, 1,  9, 5, 10],
[5,  5, 7,  3, 8,  5],
[2,  7, 6,  4, 7,  6],
[7,  9, 6,  1, 8,  5],
[1,  7, 9,  5, 8,  4]]
*/

/**
* @param {number[][]} mat
* @return {number}
*/
// I wrote
var diagonalSum1 = function (mat) {
    let res = 0
    const row = mat.length// 矩阵行数
    const column = mat[0].length// 矩阵列数
    const n = Math.floor(row / 2)// 行数取一半
    for (let i = 0; i < n; i++) {
        res += mat[i][i]// 左上角
        res += mat[i][column - 1 - i]// 右上角
        res += mat[row - 1 - i][i]// 左下角
        res += mat[row - 1 - i][column - 1 - i]// 右下角
    }
    if (row % 2 !== 0) {// 如果是奇数行，还存在一个中心值
        res += mat[n][n]
    }
    return res
};

// others wrote
var diagonalSum2 = function (mat) {
    let a = 0, b = mat.length - 1
    let num = 0
    while (a <= b) {
        if (a == b) {
            num += mat[a][a]
        } else {
            num += mat[a][a] + mat[a][b] + mat[b][a] + mat[b][b]
        }
        a++
        b--
    }
    return num
}

// 以上两种写法的思路都是一样的，第二中写法比较精巧。