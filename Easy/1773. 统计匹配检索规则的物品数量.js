/**
 * 给你一个数组 items ，其中 items[i] = [typei, colori, namei] ，描述第 i 件物品的类型、颜色以及名称。
 * 另给你一条由两个字符串 ruleKey 和 ruleValue 表示的检索规则。
 * 如果第 i 件物品能满足下述条件之一，则认为该物品与给定的检索规则 匹配 ：
 * ruleKey == "type" 且 ruleValue == typei 。
 * ruleKey == "color" 且 ruleValue == colori 。
 * ruleKey == "name" 且 ruleValue == namei 。
 * 统计并返回 匹配检索规则的物品数量 。
 *  
 * 示例 1：
 * 输入：items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]],
 * ruleKey = "color", ruleValue = "silver"
 * 输出：1
 * 解释：只有一件物品匹配检索规则，这件物品是 ["computer","silver","lenovo"] 。
 */

/**
* @param {string[][]} items
* @param {string} ruleKey
* @param {string} ruleValue
* @return {number}
*/
var countMatches = function (items, ruleKey, ruleValue) {
    let res = 0
    for (let i = 0; i < items.length; i++) {
        const item = items[i]
        switch (ruleKey) {
            case 'type':
                item[0] === ruleValue ? (res++) : null
                break
            case 'color':
                item[1] === ruleValue ? (res++) : null
                break
            case 'name':
                item[2] === ruleValue ? (res++) : null
                break
        }
    }
    return res
};