function stairsIn20(days){
  let arr = []
  let sol = 0
  for (let i = 0; i < days.length; i++){
    let day = days[i]
    for (let j = 0; j < day.length; j++){
      sol += day[j]
    }
  }
  return sol * 20
}
