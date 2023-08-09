let fruits = ["Maça", "Uva", "Laranja", "Banana"];

fruits.sort(); //altera a ordem do array, sem nada ele fica em ordem alfabetica
console.log(fruits);

fruits.reverse(); //inverte a ordem orignal

//mas se colocar o .sort() e dps o reverse, ele inverte a ordem alfabetica
fruits.sort();
fruits.reverse();

//

let cars = [
  { brand: "Fiat", year: 2022 },
  { brand: "Bmw", year: 2018 },
  { brand: "Ferrari", year: 2020 },
];

cars.sort((a, b) => {
  // if (a.year > b.year) {
  //   return 1;
  // } else if (a.year < b.year) {
  //   return -1;
  // } else {
  //   return 0;
  // }
//simplificado
  return a.year - b.year;
});
// Bmw 2018
//Ferrari 2020
//Fiat 2022
