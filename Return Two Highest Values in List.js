function twoHighest(arr) {
  if (arr.length <= 1){
    return arr
  } else {
    var uniq = [...new Set(arr)].sort() 
    return uniq.sort((a, b) => a-b).slice(-2).reverse()
  }
}