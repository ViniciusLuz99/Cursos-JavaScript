let colors = ["red", "blue", "green"];
//              0       1       2
//todos os arrays começas do 0
console.log(colors);
console.log(colors[0]); //red
console.log(colors[2]); //green

//Arrays podem armazenar tanto strings quanto numbers e booleans
let idades = [10, 20, 30];
//podem ate ir varios tipos juntos
let lista = ["algo", 30, "test", true];

//Pode-se tambem adicionar um array dentro de um array
let listaNomes = ["Algo", "Silva", "boniek"];

let lista1 = ["blabla", listaNomes]; // um array com outro array(externo) nele

let lista2 = ["blabla", [1, 2, 3]]; // um array com outro array
//posicoes       0      1[0,1, 2]

console.log(lista2[1]); //ira mostrar o array[1,2,3]
console.log(lista2[1][0]); //ira mostrar o 1
