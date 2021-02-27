/**
 * 给你一个 m x n 的整数网格 accounts ，其中 accounts[i][j] 是第 i​​​​​​​​​​​​ 位客户在第 j 家银行托管的资产数量。返回最富有客户所拥有的 资产总量 。
 * 客户的 资产总量 就是他们在各家银行托管的资产数量之和。最富有客户就是 资产总量 最大的客户。
 *  
 * 示例 1：
 * 输入：accounts = [[1,2,3],[3,2,1]]
 * 输出：6
 * 解释：
 * 第 1 位客户的资产总量 = 1 + 2 + 3 = 6
 * 第 2 位客户的资产总量 = 3 + 2 + 1 = 6
 * 两位客户都是最富有的，资产总量都是 6 ，所以返回 6 。
 */

/**
* @param {number[][]} accounts
* @return {number}
*/
var maximumWealth1 = function (accounts) {
    let max = 0
    for (let i = 0; i < accounts.length; i++) {
        let money = 0
        for (let j = 0; j < accounts[i].length; j++) {
            money += accounts[i][j]
        }
        if (money > max) {
            max = money
        }
    }
    return max
};

var maximumWealth2 = function (accounts) {
    return Math.max.apply(null, (accounts.map(item => item.reduce((pre, cur) => pre + cur))))
};

// 第一种写法先假定一个最大值，之后将每个客户的资产总量与其比较。
// 第二种写法仅供装逼使用。