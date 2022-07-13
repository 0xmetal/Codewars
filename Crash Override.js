function aliasGen(a, b) {
    let fLetter = a[0].toUpperCase()
    let lLetter = b[0].toUpperCase()
    if (/^[a-zA-Z]*$/.test(fLetter) && /^[a-zA-Z]*$/.test(lLetter)) {
        let name = firstName[fLetter]
        let lame = surname[lLetter]
        return `${name} ${lame}`
    } else {
        return 'Your name must start with a letter from A - Z.'
    }
}

console.log('yes')
