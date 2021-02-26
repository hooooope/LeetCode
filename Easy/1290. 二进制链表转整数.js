/**
 * 给你一个单链表的引用结点 head。链表中每个结点的值不是 0 就是 1。
 * 已知此链表是一个整数数字的二进制表示形式。
 * 请你返回该链表所表示数字的 十进制值 。
 * 
 * 示例 1：
 * 输入：head = [1,0,1]
 * 输出：5
 * 解释：二进制数 (101) 转化为十进制数 (5)
 * 示例 2：
 * 输入：head = [0]
 * 输出：0
 */

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue1 = function (head) {
    let res = ''
    let node = head
    while (node !== null) {
        res += node.val
        node = node.next
    }
    return parseInt(res, 2)
};

var getDecimalValue2 = function (head) {
    let res = 0
    let node = head
    while (node !== null) {
        res = res << 1 + node.val
        node = node.next
    }
    return res
};

// 第一种写法使用了 JavaScript 特有的函数 parseInt，直接将二进制转化为十进制。
// 第二种写法使用了位操作，每次先左移一位（相当于乘以 2）再加上后一位的值。
// 位操作的性能会略高，并且这种写法比较通用。