String.prototype.toAlternatingCase = function () {
  return this.split('').map(x =>
    x == x.toLowerCase()
    ? x.toUpperCase()
    : x == x.toUpperCase()
    ? x.toLowerCase()
    : x)
    .join('')
}
