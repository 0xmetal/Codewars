function calculateTip(amount, rating) {
  rating = rating.toUpperCase()
  return rating === 'EXCELLENT' ? Math.ceil(amount * 20 / 100)
    : rating === 'GOOD' ? Math.ceil(amount * 10 / 100)
    : rating === 'TERRIBLE' ? Math.ceil(amount * 0 / 100)
    : rating === 'GREAT' ? Math.ceil(amount * 15 / 100)
    : rating === 'POOR' ? Math.ceil(amount * 5 / 100)
    : 'Rating not recognised'
}
