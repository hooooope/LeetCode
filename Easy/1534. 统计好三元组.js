/**
 * 给你一个整数数组 arr ，以及 a、b 、c 三个整数。请你统计其中好三元组的数量。
 * 如果三元组 (arr[i], arr[j], arr[k]) 满足下列全部条件，则认为它是一个 好三元组 。
 * 0 <= i < j < k < arr.length
 * |arr[i] - arr[j]| <= a
 * |arr[j] - arr[k]| <= b
 * |arr[i] - arr[k]| <= c
 * 其中 |x| 表示 x 的绝对值。
 * 返回 好三元组的数量 。
 *
 * 示例 1：
 * 输入：arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
 * 输出：4
 * 解释：一共有 4 个好三元组：[(3,0,1), (3,0,1), (3,1,1), (0,1,1)] 。
 */

/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
    let result = 0
    for (let i = 0; i < arr.length - 2; i++) {
        const first = arr[i]
        for (let j = i + 1; j < arr.length - 1; j++) {
            const second = arr[j]
            if (Math.abs(first - second) <= a) {
                for (let k = j + 1; k < arr.length; k++) {
                    const third = arr[k]
                    if (Math.abs(second - third) <= b && Math.abs(first - third) <= c) {
                        result++
                    }
                }
            }
        }
    }
    return result
};