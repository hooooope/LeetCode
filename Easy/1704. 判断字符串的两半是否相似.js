/**
 * 给你一个偶数长度的字符串 s 。将其拆分成长度相同的两半，前一半为 a ，后一半为 b 。
 * 两个字符串 相似 的前提是它们都含有相同数目的元音（'a'，'e'，'i'，'o'，'u'，'A'，'E'，'I'，'O'，'U'）。
 * 注意，s 可能同时含有大写和小写字母。
 * 如果 a 和 b 相似，返回 true ；否则，返回 false 。
 *
 * 示例 1：
 * 输入：s = "book"
 * 输出：true
 * 解释：a = "bo" 且 b = "ok" 。a 中有 1 个元音，b 也有 1 个元音。所以，a 和 b 相似。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike1 = function (s) {
    let count1 = 0, count2 = 0,
        middle = s.length / 2,
        vowel = {
            'a': true, 'e': true, 'i': true, 'o': true, 'u': true,
            'A': true, 'E': true, 'I': true, 'O': true, 'U': true,
        }
    for (let i = 0; i < middle; i++) {
        if (vowel[s[i]]) {
            count1++
        }
        if (vowel[s[i + middle]]) {
            count2++
        }
    }
    return count1 === count2
};

var halvesAreAlike2 = function (s) {
    let count1 = 0, count2 = 0,
        middle = s.length / 2
    for (let i = 0; i < middle; i++) {
        const current1 = s[i], current2 = s[i + middle]
        if (current1 === 'a' || current1 === 'e' || current1 === 'i' || current1 === 'o' || current1 === 'u' || current1 === 'A' || current1 === 'E' || current1 === 'I' || current1 === 'O' || current1 === 'U') {
            count1++
        }
        if (current2 === 'a' || current2 === 'e' || current2 === 'i' || current2 === 'o' || current2 === 'u' || current2 === 'A' || current2 === 'E' || current2 === 'I' || current2 === 'O' || current2 === 'U') {
            count2++
        }
    }
    return count1 === count2
};