function openOrSenior(data){
  let age = []
  for (let i = 0; i < data.length; i++){
    let person = data[i]
    if (person[0] >= 55 && person[1] > 7){
      age.push('Senior')
    } else {
      age.push('Open')
    }
  }
  return age
}
