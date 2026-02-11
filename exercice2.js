function voiturecher(prix) {
  if (voiture1.prix > voiture2.prix) {
    return "Voiture la plus chère : " + voiture1.marque + " " + voiture1.modele;
  } else if (voiture1.prix < voiture2.prix) {
    return "Voiture la plus chère : " + voiture2.marque + " " + voiture2.modele;
  }
}

const voiture1 = {
  marque: "Renault",
  modele: "Clio",
  prix: 13000,
};
const voiture2 = {
  marque: "Renault",
  modele: "Megane",
  prix: 18000,
};

console.log(voiturecher(voiture1, voiture2));
