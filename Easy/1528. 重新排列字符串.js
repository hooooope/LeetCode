/**
 * 给你一个字符串 s 和一个 长度相同 的整数数组 indices 。
 * 请你重新排列字符串 s ，其中第 i 个字符需要移动到 indices[i] 指示的位置。
 * 返回重新排列后的字符串。
 *
 * 示例 1：
 * 输入：s = "codeleet", indices = [4,5,6,7,0,2,1,3]
 * 输出："leetcode"
 * 解释：如图所示，"codeleet" 重新排列后变为 "leetcode" 。
 *
 * 4 5 6 7 0 2 1 3
 * c o d e l e e t
 *
 * l e e t c o d e
 * 0 1 2 3 4 5 6 7
 */

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    const result = []
    for (let i = 0; i < indices.length; i++) {
        const index = indices[i]
        result[index] = s[i]
    }
    return result.join('')
};