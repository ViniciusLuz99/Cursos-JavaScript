function calcularImovel(metragem, quartos) {
  let m2 = 3000;
  let preco = 0;

  switch (quartos) {
    case 1:
      preco = metragem * m2; //caso tenha 1 quarto
      break;
    case 2:
      preco = metragem * (m2 * 1.2); //caso tenha 2 quartos
      break;
    default:
      preco = metragem * (m2 * 1.5); //caso tenha 3 ou mais quartos
      break;
  }

  // let quartosValorizado;
  // if (quartos <= 1) {
  //   quartosValorizado = m2 * 1; //caso tenha 1 quarto
  // } else if (quartos == 2) {
  //   quartosValorizado = m2 * 1.2; //caso tenha 2 quartos
  // } else {
  //   quartosValorizado = m2 * 1.5; //caso tenha 3 ou mais quartos
  // }
  // preco = metragem * quartosValorizado;
  return preco;
}

let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);
