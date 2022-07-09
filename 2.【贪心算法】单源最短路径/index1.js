// 记录着图的路径（带方向）
// 源是1
path = {
    '1-2': 10, // 比如这个，表示 1到2 长度是10
    '1-5': 100,
    '1-4': 30,
    '2-3': 50,
    '3-5': 10,
    '4-3': 20,
    '4-5': 60
};

// -1表示不通，如果是别的数值，就表示最短距离
var dist = [0, -1, -1, -1, -1];

// 用于记录可以作为源触发的起点
var begin = [1];

while (begin.length > 0) {

    var newBegin = [];

    // 遍历每个起点
    for (var i = 0; i < begin.length; i++) {


        // 判断当前作为新的起点到各个点的距离
        // 如果更小就更新
        for (var j = 2; j <= 5; j++) {

            var pathname = begin[i] + "-" + j;

            // 如果当前路径是通的
            if (pathname in path) {

                var newValue = dist[begin[i] - 1] + path[pathname];

                if (dist[j - 1] == -1 || newValue < dist[j - 1]) {
                    dist[j - 1] = newValue;

                    // 到达的新结点作为下次的起点
                    // （如果新到达的结点不优于原来的，也不用作为新结点）
                    newBegin.push(j);
                }

            }

        }

    }

    begin = newBegin;
}

console.log(dist);
