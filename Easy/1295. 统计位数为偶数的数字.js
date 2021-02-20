/**
 * 给你一个整数数组 nums，请你返回其中 位数 为 偶数 的数字的个数。
 * 示例 ：
 * 输入：nums = [12,345,2,6,7896]
 * 输出：2
 * 解释：
 * 12 是 2 位数字（位数为偶数）
 * 345 是 3 位数字（位数为奇数）
 * 2 是 1 位数字（位数为奇数）
 * 6 是 1 位数字 位数为奇数）
 * 7896 是 4 位数字（位数为偶数）
 * 因此只有 12 和 7896 是位数为偶数的数字
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    const len = nums.length
    let result = 0
    for (let i = 0; i < len; i++) {
        const s = nums[i].toString()
        s.length % 2 === 0 ? result++ : null// 当前项为偶数，则 result 加一。
    }
    return result
};
