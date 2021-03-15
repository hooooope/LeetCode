/**
 * 请你设计一个可以解释字符串 command 的 Goal 解析器 。
 * command 由 "G"、"()" 和/或 "(al)" 按某种顺序组成。
 * Goal 解析器会将 "G" 解释为字符串 "G"、"()" 解释为字符串 "o" ，"(al)" 解释为字符串 "al" 。
 * 然后，按原顺序将经解释得到的字符串连接成一个字符串。
 * 给你字符串 command ，返回 Goal 解析器 对 command 的解释结果。
 *
 * 示例 1：
 * 输入：command = "G()(al)"
 * 输出："Goal"
 * 解释：Goal 解析器解释命令的步骤如下所示：
 * G -> G
 * () -> o
 * (al) -> al
 * 最后连接得到的结果是 "Goal"
 */

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
    return command.replace(/\(\)/g, 'o').replace(/\(al\)/g, 'al')
};

var interpret2 = function (command) {
    let res = '', i = 0
    while (i < command.length) {
        const current = command[i]
        if (current === 'G') {
            res += 'G'
            i++
        } else if (current === '(' && command[i + 1] === ')') {
            res += 'o'
            i += 2
        } else {
            res += 'al'
            i += 4
        }
    }
    return res
};
