function getValidatorForPoints(poins) {
    let x1 = points[0]
    let y1 = points[1]
    let x2 = points[2]
    let y2 = points[3]
    return slope(x1, y1, x2, y2)
}

const slope = ([x1, y1, x2, y2]) => {
    const result = (y2 - y1) / (x2 - x1)
    return isFinite(result) ? `${result}` : 'undefined'
}