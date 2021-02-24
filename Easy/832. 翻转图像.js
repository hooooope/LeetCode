/**
 * 给定一个二进制矩阵 A，我们想先水平翻转图像，然后反转图像并返回结果。
 * 水平翻转图片就是将图片的每一行都进行翻转，即逆序。例如，水平翻转 [1, 1, 0] 的结果是 [0, 1, 1]。
 * 反转图片的意思是图片中的 0 全部被 1 替换， 1 全部被 0 替换。例如，反转 [0, 1, 1] 的结果是 [1, 0, 0]。
 *
 * 示例 1：
 * 输入：[[1,1,0],[1,0,1],[0,0,0]]
 * 输出：[[1,0,0],[0,1,0],[1,1,1]]
 * 解释：首先翻转每一行: [[0,1,1],[1,0,1],[0,0,0]]；
 *        然后反转图片: [[1,0,0],[0,1,0],[1,1,1]]
 */

/**
* @param {number[][]} A
* @return {number[][]}
*/
// I wrote
var flipAndInvertImage1 = function (A) {
    for (let i = 0; i < A.length; i++) {
        A[i] = A[i].reverse().map(item => item ^= 1)
    }
    return A
};

// official wrote
var flipAndInvertImage2 = function (A) {
    const n = A.length
    for (let i = 0; i < n; i++) {
        let left = 0, right = n - 1
        while (left < right) {
            // 位置对应且相同的数字不需要修改，因为交换位置之后再取反，并没有变化。
            if (A[i][left] === A[i][right]) {
                A[i][left] ^= 1
                A[i][right] ^= 1
            }
            left++
            right--
        }
        if (left === right) {
            A[i][left] ^= 1
        }
    }
    return A
};

// 第一种写法虽然看上去简洁，但时间复杂度为：O(n^3)。
// leetcode官方写法的性能更好，时间复杂度：O(n^2)。