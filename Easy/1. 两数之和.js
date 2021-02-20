/**
 * 给定一个整数数组 nums 和一个整数目标值 target，
 * 请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 * 你可以按任意顺序返回答案。
 *
 * 示例：
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1]
 */

/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var twoSum = function (nums, target) {
    const hash = Object.create(null)// 也可以使用数组代替。
    const len = nums.length
    for (let i = 0; i < len; i++) {
        const value = nums[i]
        const diff = target - value
        if (hash[diff] >= 0) {
            return [i, hash[diff]]
        }
        hash[value] = i// 以 { value: index } 的形式存储。
    }
};