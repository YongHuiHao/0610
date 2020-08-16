function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    //先将第二个参数插入arr数组中
    arr.push(num);
    //再将arr排序
    arr.sort((a, b) => a - b);
    console.log(arr);
    //然后查找num第一次出现的
    num = arr.indexOf(num);
    return num;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 30));