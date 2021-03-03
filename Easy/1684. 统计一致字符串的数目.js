/**
 * 给你一个由不同字符组成的字符串 allowed 和一个字符串数组 words 。
 * 如果一个字符串的每一个字符都在 allowed 中，就称这个字符串是 一致字符串 。
 * 请你返回 words 数组中 一致字符串 的数目。
 *
 * 示例 1：
 * 输入：allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
 * 输出：2
 * 解释：字符串 "aaab" 和 "baa" 都是一致字符串，因为它们只包含字符 'a' 和 'b' 。
 */

/**
* @param {string} allowed
* @param {string[]} words
* @return {number}
*/
var countConsistentStrings = function (allowed, words) {
    let res = 0
    const hash = {}
    for (let i = 0; i < allowed.length; i++) {// 将单词的每个字母转化为哈希表。
        const letter = allowed[i]
        hash[letter] = true
    }
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        for (let j = 0; j < word.length; j++) {
            const letter = word[j]
            if (!hash[letter]) {// 当前字母不存在，则继续比较下一个单词。
                break
            }
            if (j === word.length - 1) {
                res++
            }
        }
    }
    return res
};
