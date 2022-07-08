function vaporcode(string) {
    // vaporcode
    // make string 2 spaced
    // and uppercase
    // return string.split('').map(x => x.toUpperCase() + '  ').join('')
    let arr = string
        .split(' ')
        .join('')
        .split('')
        .map(x =>
            x.toUpperCase() + '  ')
        .join('')
    let arr2 = arr.split('')
    return arr2.slice(0, -2).join('')
}