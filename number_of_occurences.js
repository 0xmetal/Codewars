Array.prototype.numberOfOccurrences = function(a) {
  let arr = this
  let val = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == a) {
      val++
    }
  }
  return val
}