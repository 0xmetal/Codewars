function XO(str){
  let o = 0, x = 0
  for (let i = 0; i < str.length; i++){
    if (str[i].toLowerCase() == 'o'){
      o++
    } else if (str[i].toLowerCase() == 'x'){
      x++
    }
  }
  return o == x
}
