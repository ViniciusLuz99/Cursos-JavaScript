let isMember = true;

//condicional ternaria, deu certo(é mebmro no caso) vai ser 2, se não é 10
let shipping = isMember ? 2 : 10;

console.log(isMember ? "Membro" : "Não é membro");
console.log("Frete: " + shipping);

let age = 90;

let isAdult = ((age >= 18) ? "Sim" : "Não");
console.log(isAdult);
