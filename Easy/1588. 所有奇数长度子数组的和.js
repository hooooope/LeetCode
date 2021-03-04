/**
 * 给你一个正整数数组 arr ，请你计算所有可能的奇数长度子数组的和。
 * 子数组 定义为原数组中的一个连续子序列。
 * 请你返回 arr 中 所有奇数长度子数组的和 。
 *
 * 示例 1：
 * 输入：arr = [1,4,2,5,3]
 * 输出：58
 * 解释：所有奇数长度子数组和它们的和为：
 * [1] = 1
 * [4] = 4
 * [2] = 2
 * [5] = 5
 * [3] = 3
 * [1,4,2] = 7
 * [4,2,5] = 11
 * [2,5,3] = 10
 * [1,4,2,5,3] = 15
 * 我们将所有值求和得到 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
 */

/**
* @param {number[]} arr
* @return {number}
*/
var sumOddLengthSubarrays1 = function (arr) {
    let res = 0
    let odd = 1
    while (odd <= arr.length) {
        for (let i = 0; i + odd <= arr.length; i++) {
            for (let j = 0; j < odd; j++) {
                res += arr[i + j]
            }
        }
        odd += 2
    }
    return res
};
/*
例：[1,4,2,5,3]
第一轮，遍历出 1，4，2，5，3，每次输出 1 个数字。
第二轮，遍历出 142，425，253，每次输出 3 个数字。
第三轮，遍历出 14253，每次输出 5 个数字。
每次输出 odd 个数字（奇数）。
while 循环控制比较多少轮。
外层 for 循环记录每次输出的开始索引，
内层 for 循环控制每次输出多少个数字。
即，从索引 i 开始，遍历 odd 次。
*/

var sumOddLengthSubarrays2 = function (arr) {
    let res = 0
    const presum = [0]// arr 的前缀和数组
    for (let i = 0; i < arr.length; i++) {
        presum.push(arr[i] + presum[i])
    }
    for (let i = 0; i < arr.length; i++) {
        for (let odd = 1; i + odd <= arr.length; odd += 2) {
            res += presum[i + odd] - presum[i]
        }
    }
    return res
};
/*
例：[1,4,2,5,3]
先计算出前缀和数组 presum：[0,1,5,7,12,15]
已知 arr中第 n项到第 m项的和，为 presum第 m + 1项到第 n 项的差。
第一轮，累加 arr中的第 0项、第 0项到第 2项、第 0项到第 4项的和。
第二轮，累加 arr中的第 1项、第 1项到第 3项的和。
第三轮，累加 arr中的第 2项、第 2项到第 4项的和。
第四轮，累加 arr中的第 3项。
第五轮，累加 arr中的第 4项。
其中，arr的开始索引为 i，结束索引为 i + odd - 1。
因此每次累加 presum第 (i + odd)项与第 i项的差。
*/

// 第二种写法，利用前缀和数组降低了时间复杂度。