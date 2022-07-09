
var weight = [16, 15, 15]; // 每个货物的重量或者说体积
var price = [45, 25, 25]; // 每个货物的价值
var volume = 30; // 船整体的可装载重量或体积

var deep = 0; // 当前池子的深度（显然，在此处，当深度到达3的时候，就是叶子了）
var nodeArray = [{
    volume: volume, // 当前结点剩余容量
    value: 0, // 当前结点已经获取的价值
    path: "" // 记录当前选择的路线
}];

var i, len;
while (deep != 3) {
    len = nodeArray.length;

    // 更新结点池
    for (i = 0; i < len; i++) {

        // 先判断左树是否可以加入池子
        if (nodeArray[i].volume >= weight[deep]) {
            nodeArray.push({
                volume: nodeArray[i].volume - weight[deep],
                value: nodeArray[i].value + price[deep],
                path: nodeArray[i].path + "-1"
            });
        }

        // 那么对于右树而言，一定可行，只需要修改路径即可
        nodeArray[i].path += "-0";

    }

    deep += 1;
}

console.log(nodeArray);
