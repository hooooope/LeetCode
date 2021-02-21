/**
 * 给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。
 *  S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
 * J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。
 * 示例 1:
 * 输入: J = "aA", S = "aAAbbbb"
 * 输出: 3
 *
 * 示例 2:
 * 输入: J = "z", S = "ZZ"
 * 输出: 0
 */

/**
* @param {string} jewels
* @param {string} stones
* @return {number}
*/
var numJewelsInStones1 = function (jewels, stones) {
    let result = 0
    const hash = Object.create(null)
    for (let i = 0; i < jewels.length; i++) {
        hash[jewels[i]] = true
    }
    for (let i = 0; i < stones.length; i++) {
        if (hash[stones[i]]) {
            result++
        }
    }
    return result
};

// ES6
var numJewelsInStones2 = function (jewels, stones) {
    const jewelsSet = new Set([...jewels])
    return stones.split('').reduce((prev, val) => {
        if (jewelsSet.has(val)) {
            return prev + 1
        }
        return prev
    }, 0)
};

