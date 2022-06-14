function numberToPower(number, power){
  let sol = 1
  for (let i = 0; i < power; i++){
    sol = sol * number
  }
  return sol
}
