function find_average(array) {
  // your code here
  sum = 0
  for(i in array) {
    sum += array[i]
  }
  return sum/array.length || 0
}