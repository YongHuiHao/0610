function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    const newArr = arr.filter(item => {
        if (item) {
            console.log(item);
            return item;
        }
    });
    return newArr;
}
console.log(bouncer([false, null, 0, NaN, undefined, ""]));