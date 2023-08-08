//objeto
let personagem = {
  nome: "Boniek",
  idade: 90,
  //array
  carros: [
    //objetos
    { modelo: "Fiat", cor: "preto" },
    { modelo: "Ferrari", cor: "vermelho" },
  ],
};
//objeto  > array > objeto
personagem.carros[1].modelo //output: Ferrari
