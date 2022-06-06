function howMuchWater(water, load, clothes) {
  let big = load * 2
  if(clothes > big){
    return 'Too much clothes'
  } else if (clothes < load){
    return 'Not enough clothes'
  } else {
    return Number((water * 1.1 ** (clothes - load)).toFixed(2))
  }
}