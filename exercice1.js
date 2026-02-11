function separationindex(tableau) {
  let pair = [];
  let impair = [];

  for (let i = 0; i < liste.length; i++) {
    if (tableau[i] % 2 == 0) {
      pair.push(tableau[i]);
    } else if (tableau[i] % 2 !== 0) {
      impair.push(tableau[i]);
    }
  }
  return "Indices pairs : " + pair + "\n Indices impairs : " + impair;
}

const liste = [11, 34, 22, 76, 31, 12, 29];

console.log(separationindex(liste));
