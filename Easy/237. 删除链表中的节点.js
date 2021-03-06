/**
 * 请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点。传入函数的唯一参数为 要被删除的节点 。
 *
 * 现有一个链表 -- head = [4,5,1,9]，它可以表示为:
 * 4 => 5 => 1 => 9
 *
 * 示例 ：
 * 输入：head = [4,5,1,9], node = 5
 * 输出：[4,1,9]
 * 解释：给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
 */

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {// 移除当前 node。
    node.val = node.next.val// 将当前 node.val 改为下一个节点的值。
    node.next = node.next.next// 将当前节点的下一个节点，指向当前节点的下下一个节点。
};