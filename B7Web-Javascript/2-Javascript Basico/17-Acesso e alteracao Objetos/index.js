let pessoa = {
  //Objeto
  nome: "Boniek", //nome da caristeristica : valor
  idade: 90,
  pais: "Brazil",
};
pessoa.nome = "Pedro"; //agora o nome sera pedro

let personagem = {
  nome: "Ravar",
  classe: "Mago guerreiro",
  //outro objeto
  caracteristicas: {
    forca: 15,
    magia: 20,
    stamina: 5,
  },
};
personagem.caracteristicas.forca += 5; //adicionado mais 5 de força ao objeto personagem no objeto interno caracteristicas no valor força

let objeto = {
  array1: ["item", "item2", "item3"],
};
objeto.array1.push("item4") //adicionado item4 ao array do objeto