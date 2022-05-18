function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let sum = 0
  for (let i in classPoints) {
   sum += classPoints[i]
  }
  let avg = sum / classPoints.length
  if (yourPoints > avg) {
    return true
  } else {
    return false
  }
}