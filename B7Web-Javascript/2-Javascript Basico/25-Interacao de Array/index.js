let fruits = ["Maça", "Uva", "Laranja", "Banana"];

let bigFruits = fruits.filter((item) => {
  return item.length > 4;
  // if (item.length > 4) {
  //   return true;
  // } else {
  //   return false
  // }
});
console.log(bigFruits); //Banana, laranja

let maisDeTresT = fruits.every((value) => {
  return value.length > 3;
  // if (value.length > 3) {
  //   return true;
  // } else {
  //   return false;
  // }
});
//every: so retornara true se todos do array tiverem mais que 3 letras
if (maisDeTresT) {
  console.log("Maior que 3 letras");
} else {
  console.log("Não são todos que sao maior que 3 letras");
}

//some: retorna true se algum for maior que 3
let maisDeTres = fruits.some((value) => {
  return value.length > 3;
  // if (value.length > 3) {
  //   return true;
  // } else {
  //   return false;
  // }
});
if (maisDeTres) {
  console.log("Algum item é maior que 3");
} else {
  console.log("Nenhum item é maior que 3");
}

//includes: procura no array a palavra
if (fruits.includes("Uva")) {
  console.log("Tem umva sim");
} else {
  console.log("Não tem umva");
}
