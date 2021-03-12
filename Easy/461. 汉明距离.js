/**
 * 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。
 * 给出两个整数 x 和 y，计算它们之间的汉明距离。
 * 注意：
 * 0 ≤ x, y < 231.
 * 示例:
 * 输入: x = 1, y = 4
 * 输出: 2
 * 解释:
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 *        ↑   ↑
 * 上面的箭头指出了对应二进制位不同的位置。
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// 暴力法
var hammingDistance1 = function (x, y) {
    let str1 = x.toString(2),
        str2 = y.toString(2),
        length = Math.max(str1.length, str2.length),
        result = 0
    str1 = str1.padStart(length, 0)
    str2 = str2.padStart(length, 0)
    for (let i = 0; i < length; i++) {
        if (str1[i] !== str2[i]) {
            result++
        }
    }
    return result
};

/**
 * 为了计算等于 1 的位数，可以将每个位移动到最左侧或最右侧，然后检查该位是否为 1。
 * 更准确的说，应该进行逻辑移位，移入零替换丢弃的位。
 * 这里采用右移位，每个位置都会被移动到最右边。
 * 移位后检查最右位的位是否为 1 即可。
 * 检查最右位是否为 1，可以使用取模运算（i % 2）或者 AND 操作（i & 1），
 * 这两个操作都会屏蔽最右位以外的其他位。
 */
var hammingDistance2 = function (x, y) {
    let xor = x ^ y,
        result = 0
    while (xor !== 0) {
        if (xor % 2 === 1) {
            result++
        }
        xor = xor >> 1
    }
    return result
};

/**
 * 布赖恩·克尼根算法
 * 遇到最右边的 1 后，如果可以跳过中间的 0，直接跳到下一个 1，效率会高很多。
 * 这是布赖恩·克尼根位计数算法的基本思想。该算法使用特定比特位和算术运算移除等于 1 的最右比特位。
 * 当我们在 number 和 number-1 上做 AND 位运算时，原数字 number 的最右边等于 1 的比特会被移除。
 */
var hammingDistance3 = function (x, y) {
    let xor = x ^ y,
        result = 0
    while (xor !== 0) {
        result++
        // remove the rightmost bit of '1'
        xor = xor & (xor - 1)
    }
    return result
};