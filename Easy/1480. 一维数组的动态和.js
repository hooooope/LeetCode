/**
 * 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。
 * 请返回 nums 的动态和。
 *
 * 示例 1：
 * 输入：nums = [1,2,3,4]
 * 输出：[1,3,6,10]
 * 解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum1 = function (nums) {
    const result = []
    let total = 0
    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
        result.push(total)
    }
    return result
};

var runningSum2 = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i - 1]
    }
    return nums
};

// 第二种写法不需要创建额外的变量，但是会修改参数，有副作用（Side Effect）。