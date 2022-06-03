function rakeGarden =
  (garden) => garden
  .split(' ')
  .map(x =>
    x != 'gravel' && x != 'rock'
      ? 'gravel' : x).join(' ')
