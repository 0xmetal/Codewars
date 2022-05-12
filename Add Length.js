function addLength(str) {
  let arr = str.split(' ')
  let newarr = []
  for (let i = 0; i < arr.length; i++) {
    newarr.push(`${arr[i]} ${arr[i].length}`)
  }
  return newarr
}
