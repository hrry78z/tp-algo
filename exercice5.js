function multiples(tab, n) {
  let tableaumultiple = [];
  for (i = 0; i < tab.length; i++) {
    if (tab[i] % n == 0) {
      tableaumultiple.push(tab[i]);
    }
  }
  console.log(tableaumultiple);
}

const tableau50 = [
  523, 12, 87, 432, 234, 91, 678, 45, 234, 12, 876, 34, 210, 56, 789, 123, 345,
  987, 54, 321, 432, 210, 654, 76, 89, 12, 98, 765, 234, 567, 890, 12, 345, 678,
  901, 234, 567, 123, 876, 543, 12, 345, 678, 234, 567, 89, 90, 123, 456, 789,
];

console.log(multiples(tableau50, 5));
