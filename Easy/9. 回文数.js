/**
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
 *
 * 示例 1：
 * 输入：x = 121
 * 输出：true
 *
 * 示例 2：
 * 输入：x = -121
 *  输出：false
 * 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 */
var isPalindrome1 = function (x) {
    const s = x.toString()
    const mid = Math.floor(s.length / 2)
    const len = s.length
    for (let i = 0; i < mid; i++) {
        if (s[i] !== s[len - 1 - i]) {// 模拟双端队列的行为
            return false
        }
    }
    return true
};

// 数字  => 字符串 => 数组 => 反转 => 字符串 => 与原始字符串比较
var isPalindrome2 = function (x) {
    const s = x.toString()
    const array = s.split('')
    return array.reverse().join('') === s
};