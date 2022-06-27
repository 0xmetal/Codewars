const cannonsReady = (gunners) => {
    let arr = []
    for (let i in gunners) {
        arr.push(gunners[i])
    }
    return arr.includes('nay') ? 'Shiver me timbers!' : 'Fire!'
}