function countBits(n){
  // The binary representation
  // of 1234 is 10011010010,
  // so the function should
  // return 5 in this case
  let b = n.toString(2).split('')
  let c = 0
  for (let i = 0; i < b.length; i++){
    if(b[i] == '1'){
      c++
    }
  }
  return c
}
