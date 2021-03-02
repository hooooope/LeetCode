/**
 * 给你一个数组 candies 和一个整数 extraCandies ，其中 candies[i] 代表第 i 个孩子拥有的糖果数目。
 * 对每一个孩子，检查是否存在一种方案，将额外的 extraCandies 个糖果分配给孩子们之后，此孩子有 最多 的糖果。
 * 注意，允许有多个孩子同时拥有 最多 的糖果数目。
 *
 * 示例 1：
 * 输入：candies = [2,3,5,1,3], extraCandies = 3
 * 输出：[true,true,true,false,true]
 * 解释：
 * 孩子 1 有 2 个糖果，如果他得到所有额外的糖果（3个），那么他总共有 5 个糖果，他将成为拥有最多糖果的孩子。
 * 孩子 2 有 3 个糖果，如果他得到至少 2 个额外糖果，那么他将成为拥有最多糖果的孩子。
 * 孩子 3 有 5 个糖果，他已经是拥有最多糖果的孩子。
 * 孩子 4 有 1 个糖果，即使他得到所有额外的糖果，他也只有 4 个糖果，无法成为拥有糖果最多的孩子。
 * 孩子 5 有 3 个糖果，如果他得到至少 2 个额外糖果，那么他将成为拥有最多糖果的孩子。
 */

/**
* @param {number[]} candies
* @param {number} extraCandies
* @return {boolean[]}
*/

var kidsWithCandies1 = function (candies, extraCandies) {
    return candies.map(candie => candie + extraCandies >= Math.max(...candies))
};

var kidsWithCandies2 = function (candies, extraCandies) {
    const res = []
    let max = 0
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > max) {
            max = candies[i]
        }
    }
    for (let j = 0; j < candies.length; j++) {
        res.push(candies[j] + extraCandies >= max)
    }
    return res
};

/*
第一种写法虽然简短，但时间复杂度为 O(n^2)。
第二种写法，先计算出 candies 的最大值，之后将 candies 的每一项加上 extra 后与最大值比较。
时间复杂度为 O(n)。
*/