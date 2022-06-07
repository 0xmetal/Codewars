function minMax(arr){
  if (arr.length <= 1){
    return [arr[0], arr[0]]
  } else {
    let sorted = arr.sort((a, b)=>a-b)
    return [sorted[0], sorted[sorted.length - 1]]
  }
}