function XO(str){
  // Check to see if a string
  // has the same amount of 'x's and 'o's
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
