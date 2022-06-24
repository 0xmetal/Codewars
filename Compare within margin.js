function closeCompare(a, b, margin) {
    let dif = a - b
    if (margin >= dif) {
        return 0
    } else if (a < b) {
        return -1
    } else if (a > b) {
        return 1
    }
    return dif
}

console.log(closeCompare(4, 5))
// console.log(closeCompare(2, 5, 3))

// a is considered "close to" b if margin
// is greater than or equal to the distance between a and b.

// When a is close to b, return 0.

// Otherwise...
// 
// When a is less than b, return -1.
// 
// When a is greater than b, return 1.