function validateCode(p) {
  let arr = p.toString().split('').map(Number)
  return arr[0] == 1 || arr[0] == 2 || arr[0] == 3 ? true : false
}
