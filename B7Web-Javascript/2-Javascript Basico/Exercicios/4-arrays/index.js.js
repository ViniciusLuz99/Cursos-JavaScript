let carros = ["BMW", "Ferrari", "Mercedes"];
let x = carros[1];
console.log("1. " + carros[x]);

//troque a ferrari por audi
carros[1] = "Audi";
console.log("lista com audi: ");
console.log(carros);

//adicione volvo a lista
carros.push("Volvo");

console.log(carros);
//exiba quantidades de itens no array

console.log(carros.length());
