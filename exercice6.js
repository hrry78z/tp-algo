function censure(chaine) {}
const phrase = "Bonjour à tous, et bon courage";
let voyelle = [
  "a",
  "e",
  "i",
  "o",
  "u",
  "y",
  "A",
  "E",
  "I",
  "O",
  "U",
  "Y",
  "à",
  "é",
  "è",
  "À",
  "É",
  "È",
];
let resultat = "";

for (let i = 0; i < phrase.length; i++) {
  if (voyelle.includes(phrase[i])) {
    resultat += "*";
  } else {
    resultat += phrase[i];
  }
}

console.log(resultat);
git;
