function stringTransformer(str) {
    let revd = str.split(' ').reverse().join(' ')
    let mapped = revd
        .split('').map(x =>
            x == x.toLowerCase()
                ? x.toUpperCase()
                : x == x.toUpperCase()
                    ? x.toLowerCase()
                    : x
        )
        .join('')
    return mapped
}

console.log(stringTransformer('Example string'))