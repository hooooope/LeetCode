/**
 * 给你一个整数数组 nums 。
 * 如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。
 * 返回好数对的数目。
 *
 * 示例 1：
 * 输入：nums = [1,2,3,1,1,3]
 * 输出：4
 * 解释：有 4 组好数对，分别是 (0,3), (0,4), (3,4), (2,5) ，下标从 0 开始
 *
 * 示例 2：
 * 输入：nums = [1,1,1,1]
 * 输出：6
 * 解释：数组中的每组数字都是好数对
 */

/**
* @param {number[]} nums
* @return {number}
*/
var numIdenticalPairs = function (nums) {
    let res = 0
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                res++
            }
        }
    }
    return res
};

var numIdenticalPairs = function (nums) {
    let res = 0
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (hash[num] === undefined) {
            hash[num] = 0
        } else {
            hash[num] += 1
            res += hash[num]
        }
    }
    return res
};

/*
第一种写法：暴力解法。
第二种写法：事实上，就是第一种写法的逆向思维。
例：[1,1,1,1]
遍历到第一项时，有0对好数对。
遍历到第二项时，有1对好数对。
遍历到第三项时，有2对好数对。
遍历到第四项时，有3对好数对。
将每次出现的好数对累加起来。
*/