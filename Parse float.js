function parseF(s) {
    let sol = parseFloat(s)
    if (sol === 0) {
        return 0
    } else if (sol) {
        return sol
    } else {
        return null
    }
}