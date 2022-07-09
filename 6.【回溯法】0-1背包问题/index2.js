// 我们可以借助一个数组来记录当前路径从而消除递归

var weight = [16, 15, 15]; // 每个货物的重量或者说体积
var price = [45, 25, 25]; // 每个货物的价值
var volume = 30; // 船整体的可装载重量或体积

var _path = []; // 记录当前路径
var _deep = 0; // 记录当前深度
var _volume = volume; // 当前剩余空间
var _value = 0; // 当前价值

var resultArray = [];

// 对于一个结点而言，先判断是否到达了叶子，如果没有，就想办法深入
// 深入的时候，先考虑左边的叶子，然后考虑右边的叶子
// 对于到达了叶子结点的，就需要回溯了（此时更新解）
// 回溯的思想就是，如果是从左边回溯的，进入右边即可，如果是从右边回溯的，继续回溯
// 如果在回溯的时候回到了根节点，而且是从右边回溯的，说明整个树遍历完毕了

do {

    // 深入

    while (_deep < weight.length) {

        // 先判断左树是否可行
        if (weight[_deep] <= _volume) {
            _path[_deep] = 1;
            _volume -= weight[_deep];
            _value += price[_deep];
        }

        // 不然就走右树
        else {
            _path[_deep] = 0;
        }

        _deep += 1;
    }

    // 追加解

    resultArray.push({
        path: _path.join('-'),
        volume: _volume,
        value: _value
    });

    // 回溯

    // 回溯到第一个左数分支或者根结点
    while (_deep > 0 && _path[_deep - 1] == 0) {
        _deep -= 1;
    }

    // 如果回溯到根节点了，就遍历完毕了
    if (_deep == 0) break;

    // 否则，进入右树
    _path[_deep - 1] = 0;
    _volume += weight[_deep - 1];
    _value -= price[_deep - 1];

} while (true);

console.log(resultArray);
