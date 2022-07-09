//  需要排序的数组
var dataArray = [4, 8, 3, 7, 1, 5, 6, 2];

// 算法入口
function quickSort(begin, end) {
    if (begin < end) {
        var splitIndex = partition(begin, end);
        quickSort(begin, splitIndex - 1);
        quickSort(splitIndex + 1, end);
    }
}


function partition(begin, end) {

    // 把起点作为判断点
    var left = begin, right = end + 1;

    var compareData = dataArray[begin];
    while (true) {

        // left左边的值比判断点小
        do {
            left += 1;
        } while (dataArray[left] < compareData && left < end);

        // right右边的值比判断点小
        do {
            right -= 1;
        } while (dataArray[right] > compareData);

        // 如果交叉了，判断完毕
        if (left >= right) break;

        // 停止意味着需要交换left和right坐标对应的值
        var temp = dataArray[left];
        dataArray[left] = dataArray[right];
        dataArray[right] = temp;

    }

    // 由于起点作为划分标准，和分界线的值进行交换
    dataArray[begin] = dataArray[right];
    dataArray[right] = compareData;

    // 返回划分点的坐标
    return right;
}

console.log("排序前：[" + dataArray.join(', ') + "]");

// 进行排序
quickSort(0, dataArray.length - 1);

console.log("排序后：[" + dataArray.join(', ') + "]");
