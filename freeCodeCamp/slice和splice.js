function frankenSplice(arr1, arr2, n) {
    //将第一个数组中的所有元素依次复制到第二个数组中
    // let newArr = arr1.slice();
    arr1.forEach(item => {
        arr2.splice(n, 0, item);
        n++;
    });
    console.log(arr1);
    return arr2;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));