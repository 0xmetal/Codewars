function sumTwoSmallestNumbers(numbers) {
    let res = numbers.sort((a, b) => a - b).slice(0, 2);
    return res[0] + res[1]
}