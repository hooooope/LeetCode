/**
 * 给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
 * 在 S 上反复执行重复项删除操作，直到无法继续删除。
 * 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
 *
 * 示例：
 * 输入："abbaca"
 * 输出："ca"
 * 解释：
 * 例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。
 * 之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
 */

/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates1 = function (S) {
    let res = S
    for (let i = 1; i < res.length; i++) {
        if (res[i] === res[i - 1]) {
            res = res.slice(0, i - 1) + res.slice(i + 1)
            i -= 2
        }
    }
    return res
};

var removeDuplicates2 = function (S) {
    let stack = []
    for (let i = 0; i < S.length; i++) {
        if (stack.length && S[i] === stack[stack.length - 1]) {
            stack.pop()
        } else {
            stack.push(S[i])
        }
    }
    return stack.join('')
};

// 第一种写法，使用字符串的切片函数。
// 第二种写法，使用栈的数据结构。