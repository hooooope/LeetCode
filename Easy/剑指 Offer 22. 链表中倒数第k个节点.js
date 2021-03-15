/**
 * 输入一个链表，输出该链表中倒数第k个节点。
 * 为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
 * 例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。
 * 这个链表的倒数第 3 个节点是值为 4 的节点。
 * 
 * 示例：
 * 给定一个链表: 1->2->3->4->5, 和 k = 2.
 * 返回链表 4->5.
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
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd1 = function (head, k) {
    let slow = head, fast = head
    for (let i = 0; i < k; i++) {
        fast = fast.next
    }
    while (fast != null) {
        slow = slow.next
        fast = fast.next
    }
    return slow
};

var getKthFromEnd2 = function (head, k) {
    let slow = head, fast = head
    let i = 0
    while (fast) {
        fast = fast.next
        if (i >= k) {
            slow = slow.next
        }
        i++
    }
    return slow
};


let obj5 = {
    val: 5,
    next: null
}
let obj4 = {
    val: 4,
    next: obj5
}
let obj3 = {
    val: 3,
    next: obj4
}
let obj2 = {
    val: 2,
    next: obj3
}
let obj1 = {
    val: 1,
    next: obj2
}
console.log(getKthFromEnd(obj1, 2))