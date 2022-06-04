function odds(v){
  // v is an array of numbers
  // return only the odds
  let arr = []
  for (let i = 0; i < v.length; i++){
    if (v[i] % 2 != 0){
      arr.push(v[i])
    }
  }
  return arr
}
