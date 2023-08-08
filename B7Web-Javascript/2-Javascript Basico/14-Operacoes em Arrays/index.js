let ingredientes = ["agua", "farinha", "ovo", "corante", "sal"];
//                    0         1        2        3        4
ingredientes.push("cebola"); //adiciona cebola na linha 5
//push adiciona um item no final do array

console.log(ingredientes);
console.log(`total de igredientes: ${ingredientes.length}`);
//.lenght usado para ver o tamanho do array

ingredientes.pop(); //remove o ultimo item do array
ingredientes.shift(); //remove o primeiro item do array
