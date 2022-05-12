function multipleOfIndex(arr) {
  let newarr = []
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % i == 0) {
      newarr.push(arr[i])
    }
  }
  return newarr
}
