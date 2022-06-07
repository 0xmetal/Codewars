function removeSmallest(k) {
  let n = k.slice()
  const min = Math.min(...n);
  const index = n.indexOf(min);
  if (index > -1) {
    n.splice(index, 1);
  }
  return n;
}