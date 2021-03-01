/**
 * 给定一个整数数组  nums，求出数组从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点。
 * 实现 NumArray 类：
 * NumArray(int[] nums) 使用数组 nums 初始化对象
 * int sumRange(int i, int j) 返回数组 nums 从索引 i 到 j（i ≤ j）范围内元素的总和，
 * 包含 i、j 两点（也就是 sum(nums[i], nums[i + 1], ... , nums[j])）
 * 
 * 示例：
 * 输入：
 * ["NumArray", "sumRange", "sumRange", "sumRange"]
 * [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
 * 输出：
 * [null, 1, -1, -3]
 * 解释：
 * NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
 * numArray.sumRange(0, 2); // return 1 ((-2) + 0 + 3)
 * numArray.sumRange(2, 5); // return -1 (3 + (-5) + 2 + (-1)) 
 * numArray.sumRange(0, 5); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))
 */

var NumArray1 = function (nums) {
    this.numArray = nums
};

NumArray.prototype.sumRange1 = function (i, j) {
    const numArray = this.numArray
    let res = 0
    while (i <= j) {
        res += numArray[i]
        i++
    }
    return res
};

// ------------------------------------------------------------

/**
* @param {number[]} nums
*/
var NumArray2 = function (nums) {
    this.sums = new Array(nums.length + 1).fill(0)// 前缀和数组
    for (let i = 0; i < nums.length; i++) {
        this.sums[i + 1] = this.sums[i] + nums[i]
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange2 = function (i, j) {
    return this.sums[j + 1] - this.sums[i]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

 // 第一种为暴力写法，虽然初始化很快，但之后每次调用都需要重新计算。
 // 第二种写法，初始化时，需要先计算出前缀和数组，之后每次调用都可以利用前缀和数组快速得到结果。