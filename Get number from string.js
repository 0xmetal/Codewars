function getNumberFromString(s) {
    let arr = s.split('')
    let o = []
    for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i]) || arr[i] == '0') {
            o.push(arr[i])
        }
    }
    let yes = o.map(Number).join('')
    return parseInt(yes)
}

console.log(getNumberFromString("th7s 7s num0ber: 7"));