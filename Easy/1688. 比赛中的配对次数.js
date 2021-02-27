/**
 * 给你一个整数 n ，表示比赛中的队伍数。比赛遵循一种独特的赛制：
 * 如果当前队伍数是 偶数 ，那么每支队伍都会与另一支队伍配对。总共进行 n / 2 场比赛，且产生 n / 2 支队伍进入下一轮。
 * 如果当前队伍数为 奇数 ，那么将会随机轮空并晋级一支队伍，其余的队伍配对。总共进行 (n - 1) / 2 场比赛，且产生 (n - 1) / 2 + 1 支队伍进入下一轮。
 * 返回在比赛中进行的配对次数，直到决出获胜队伍为止。
 * 
 * 示例 1：
 * 输入：n = 7
 * 输出：6
 * 解释：比赛详情：
 * - 第 1 轮：队伍数 = 7 ，配对次数 = 3 ，4 支队伍晋级。
 * - 第 2 轮：队伍数 = 4 ，配对次数 = 2 ，2 支队伍晋级。
 * - 第 3 轮：队伍数 = 2 ，配对次数 = 1 ，决出 1 支获胜队伍。
 * 总配对次数 = 3 + 2 + 1 = 6
 * 
 * 示例 2：
 * 输入：n = 14
 * 输出：13
 * 解释：比赛详情：
 * - 第 1 轮：队伍数 = 14 ，配对次数 = 7 ，7 支队伍晋级。
 * - 第 2 轮：队伍数 = 7 ，配对次数 = 3 ，4 支队伍晋级。 
 * - 第 3 轮：队伍数 = 4 ，配对次数 = 2 ，2 支队伍晋级。
 * - 第 4 轮：队伍数 = 2 ，配对次数 = 1 ，决出 1 支获胜队伍。
 * 总配对次数 = 7 + 3 + 2 + 1 = 13
 */

/**
* @param {number} n
* @return {number}
*/
var numberOfMatches1 = function (n) {
    // count：记录匹配次数
    // n：记录晋级的队伍数
    let count = 0
    while (n !== 1) {
        if (n % 2 === 0) {// 偶数：匹配 n/2 次，晋级 n/2 支队伍。
            n /= 2
            count += n
        } else {// 奇数：匹配 (n-1)/2 次，晋级 (n-1)/2+1 支队伍。
            n = (n - 1) / 2 + 1
            count += n - 1
        }
    }
    return count
};

var numberOfMatches2 = function (n) {
    /* 共有 n 支队伍，只有 1 个冠军，因此需要淘汰 n-1 支队伍
        每轮比赛淘汰 1 支队伍，因此需要进行 n-1 轮比赛 */
    return n - 1
};

// 没有比较的余地，第二种写法，直接看透事物的本质...