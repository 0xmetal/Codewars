function reverseLetter(str) {
  //coding and coding..

  const replaced = str.replace(/[^a-zA-Z]/gi, '');
  return replaced.split('').reverse().join('')

}
