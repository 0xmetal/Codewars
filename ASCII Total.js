function uniTotal(string) {
    if (string) {
        return string
            .split('')
            .map(x => x.charCodeAt(0))
            .reduce((a, b) => a + b)
    } else {
        return 0
    }

}

// console.log(uniTotal('Mary Had A Little Lamb'));
console.log(uniTotal('e'));
