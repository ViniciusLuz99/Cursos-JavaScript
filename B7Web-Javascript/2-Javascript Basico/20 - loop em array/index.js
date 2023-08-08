let cores = ["preto", " branco", "azul", "vermelho"];

for (let n = 0; n < cores.length; n++) {
  console.log(cores[n]);
}

for (let i in cores) {
  console.log([i]);
}

for (let cor of cores) {
  console.log(cor);
}

let cores2 = [
  { nome: "preto", qt: 10 },
  { nome: "Azul", qt: 15 },
  { nome: "Vermelho", qt: 5 },
];

for (let cor of cores2) {
  console.log(`Nome: ${cor.nome} - ${cor.qt}`);
}

//loop pra alterar informações
for (let i in cores) {
  cores[i].nome = cores[i].toLocaleUpperCase();
}
