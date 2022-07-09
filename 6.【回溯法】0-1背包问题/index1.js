var weight = [16, 15, 15]; // 每个货物的重量或者说体积
var price = [45, 25, 25]; // 每个货物的价值
var volume = 30; // 船整体的可装载重量或体积

// 对于求解从第 index 货物起，还有容量为 _volume 而言的最佳解
function doCalc(index, _volume) {
    if (index > weight.length) return { path: "", value: 0 };

    // 记录选择当前货物和不选择当前货物的最佳价值
    var _1_value, _1_path;
    var _0_value, _0_path;

    // 我们先判断如果选择了第index货物的最优解
    // 可是需要先判断这个货物是否可以装进去
    if (_volume >= weight[index - 1]) {

        // 请求选择了当前货物后子树的最佳值
        var _sub_1_result = doCalc(index + 1, _volume - weight[index - 1]);

        // 进而获取当前货物的最佳值
        _1_value = price[index - 1] + _sub_1_result.value;
        _1_path = '1-' + _sub_1_result.path;
    }

    // 不选择当前货物的最佳值
    var _sub_0_result = doCalc(index + 1, _volume);
    _0_value = _sub_0_result.value;
    _0_path = "0-" + _sub_0_result.path;

    // 比较一个最大值返回即可

    return (_volume < weight[index - 1] || _1_value < _0_value) ?

        // 右树 0
        {
            path: _0_path,
            value: _0_value
        } :

        // 左树 1
        {
            path: _1_path,
            value: _1_value
        };

};

var result = doCalc(1, volume);
console.log(result);
