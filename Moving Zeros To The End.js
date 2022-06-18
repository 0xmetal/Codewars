function moveZeros(arr) {
    var i = arr.length;
    while (i--) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr.push(0)
        }
    }
    return arr
}