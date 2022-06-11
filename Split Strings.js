function solution(p){
  let c = 0
  let arr = []
  for (let i = 0; i < p.length; i += 2){
    if (!p[i + 1]){
      arr.push(p[i] + '_')
    } else {
      let letters = p[i] + p[i + 1]
      arr.push(letters)
    }
  }
  return arr
}