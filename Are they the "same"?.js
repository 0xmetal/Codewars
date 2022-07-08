function comp(a1, a2) {
    let arr = []
    if (a1 == null || a2 == null) {
        return false
    } else {
        for (let i = 0; i < a1.length; i++) {
            arr.push(a1[i] * a1[i])
        }
        a2.sort((a, b) => a - b)
        arr.sort((a, b) => a - b)
        return arr.join('') == a2.join('')
    }
}