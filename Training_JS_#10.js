function pickIt(arr) {
    // even ones to the right
    // odd ones to the left
    var odd = [], even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            odd.push(arr[i])
        } else {
            even.push(arr[i])
        }
    }
    return [odd, even];
}

console.log(pickIt([8, 1, 5, 4, 6, 1, 1]))



