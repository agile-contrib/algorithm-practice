var weight1 = 30; //第一艘船载重
var weight2 = 10; //第二艘船载重
var w = [1, 9, 9, 4, 4, 9]; //集装箱

var nowW1 = 0; //当前载重
var nowBest1 = 0; //当前最优装载
var n = w.length; //集装箱个数

function Loading(deep) {
    if (deep > n) {

        //如果到达根，判断当前叶子是否比原来的最优解更好
        if (nowW1 > nowBest1)
            nowBest1 = nowW1;
        return;
    }

    //如果1分支可以
    if (nowW1 + w[deep - 1] <= weight1) {

        // 选择1分支
        nowW1 += w[deep - 1];
        Loading(deep + 1);

        // 恢复
        nowW1 -= w[deep - 1];
    }

    //0分支一定可以
    Loading(deep + 1);
}

// 求解出第一艘可以装载的最大重量
Loading(1);
var firstLoad = nowBest1;

// 计算所有集装箱重量
var all = 0;
for (var i = 0; i < n; i++) {
    all += w[i];
}

console.log("第一艘载重：" + firstLoad + "\n");

// 直接判断余下的第二艘是否可以装下即可

if (all > weight2 + firstLoad) {
    console.log("失败\n");
} else {
    console.log("成功\n");
}
