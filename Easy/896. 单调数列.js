/**
 * 如果数组是单调递增或单调递减的，那么它是单调的。
 * 如果对于所有 i <= j，A[i] <= A[j]，那么数组 A 是单调递增的。 如果对于所有 i <= j，A[i]> = A[j]，那么数组 A 是单调递减的。
 * 当给定的数组 A 是单调数组时返回 true，否则返回 false。
 *
 * 示例 1：
 * 输入：[1,2,2,3]
 * 输出：true
 *
 * 示例 2：
 * 输入：[6,5,4,4]
 * 输出：true
 */

/**
* @param {number[]} A
* @return {boolean}
*/
var isMonotonic1 = function (A) {
    for (let i = 0; i < A.length - 1; i++) {
        if (A[i] > A[i + 1]) {// 递减
            for (let j = i + 1; j < A.length - 1; j++) {
                if (A[j] < A[j + 1]) {// 如果出现递增则返回 false
                    return false
                }
            }
            return true
        } else if (A[i] < A[i + 1]) {// 递增
            for (let j = i + 1; j < A.length - 1; j++) {
                if (A[j] > A[j + 1]) {// 如果出现递减则返回 false
                    return false
                }
            }
            return true
        }
    }
    return true
};

var isMonotonic2 = function (A) {
    let inc = true, dec = true// 递增、递减标志位
    for (let i = 0; i < A.length - 1; i++) {
        if (A[i] > A[i + 1]) {
            inc = false
        }
        if (A[i] < A[i + 1]) {
            dec = false
        }
    }
    return inc || dec
};

var isMonotonic3 = function (A) {
    function isInc(arr) {
        return arr.slice(1).every((item, index) => arr[index] <= item)
    }
    return isInc(A) || isInc(A.reverse())
};

/**
 * 第一种写法，判断数组是先递增还是递减，
 * 若先出现递增，则之后不允许出现 A[j] > A[j + 1]；
 * 若先出现递减，则之后不允许出现 A[j] < A[j + 1]；
 * 若遍历完成，仍没有判断出递增还是递减，说明每一项都相等，则返回 true。
 *
 * 第二种写法，假设递增、递减标志位，
 * 若出现递增，则递减不成立，
 * 若出现递减，则递增不成立，
 * 若以上两种情况都没有出现，说明每一项都相等。
 * 只要有一个条件成立，就说明该数组为单调数列。
 *
 * 第三种写法，
 * 先判断原数组是否为递增数列，
 * 再判断反转数组是否为递增数列。
 * 该写法需要遍历两次数组。
 */