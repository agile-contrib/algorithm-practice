// 记录着A矩阵的行和列数
// 比如：A3就是
// Matrix[2]*Matrix[3]
// 也就是15*5
var Matrix = [30, 35, 15, 5, 10, 20, 25];

// 矩阵个数
var num = Matrix.length - 1;

// 记录求解的结果
// 比如Am~An相乘的最少步骤就记录在 calcStep[m-1][n-1];
var calcStep = [];
for (var k = 0; k < num; k++) calcStep.push([]);

// 先计算一个矩阵乘法最优解，再计算二个矩阵最优解，...
for (var i = 1; i <= num; i++) {

    // 对于需要计算i个矩阵的时候，依次是：
    // 1~i-1 , 2~i-2 , ... , num-i+1~num
    for (var j = 1; j <= num - i + 1; j++) {

        // 当前计算的是 j~j+i-1

        if (i == 1) {

            // 如果矩阵个数为1，直接设置为0即可
            calcStep[j - 1][j + i - 2] = 0;
        } else {
            // 如果矩阵个数不是1，那么，我们就需要降低个数来求解（因为比当前个数少的都已经求解出来了）
            // 我们可以把矩阵先划分成两堆先分别求解，然后再合并
            // 考虑到左边可以划分的个数为1，2，3，...，i-1

            // 先求解出左边划分了一个的情况
            calcStep[j - 1][j + i - 2] = calcStep[j][j + i - 2] + Matrix[j - 1] * Matrix[j] * Matrix[j + i - 1];

            // 然后从左边划分了二个开始比较
            for (var leftNum = 2; leftNum <= i - 1; leftNum++) {

                var temp = calcStep[j - 1][j + leftNum - 2] + calcStep[j + leftNum - 1][j + i - 2] + Matrix[j - 1] * Matrix[j + leftNum - 1] * Matrix[j + i - 1];
                if (temp < calcStep[j - 1][j + i - 2]) {
                    calcStep[j - 1][j + i - 2] = temp;
                }

            }

        }

    }

}

console.log(calcStep);

// 所以最少的次数就是
console.log(calcStep[0][num - 1]);
