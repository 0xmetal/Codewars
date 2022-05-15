function multiTable(number) {
  let arr = []
  for (let i = 1; i <= 10; i++) {
    // 1 * 5 = 5
    // 2 * 5 = 10
    arr.push(`${i} * ${number} = ${i * number}`)
  }
  return arr.join('\n')
}
