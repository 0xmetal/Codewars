function rowWeights(arr) {
    let odds = []
    let evens = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            odds.push(arr[i])
        } else {
            evens.push(arr[i])
        }
    }
    let n = odds.join('')
    let parsed = parseInt(n)
    if (arr.length == 1) {
        return [parsed, 0]
    } else if (!arr) {
        return [0, 0]
    } else {
        let odsum = odds.reduce((a, b) => a + b)
        let evsum = evens.reduce((a, b) => a + b)
        return [odsum, evsum]
    }
}