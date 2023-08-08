let nome = "boniek";
let nomes = ["Boniek", "Pedro"]; //array

let Pessoa = {
  //Objeto
  nome: "Boniek", //nome da caristeristica : valor
  idade: 90,
  pais: "Brazil",
};

console.log(Pessoa);
console.log(Pessoa.nome); //output: nome
console.log(Pessoa.idade); //output: idade
console.log(`${Pessoa.nome}" tem "${Pessoa.idade} anos`);

//obejto dentro de objeto
let personagem = {
  nome: "Ravar",
  classe: "Mago guerreiro",
  //outro objeto
  caracteristicas: {
    força: 15,
    magia: 20,
    stamina: 5,
  },
};
//como acessar? objeto.objeto2.valor
console.log(personagem.caracteristicas.magia);

//arrays dentro de objetos
let objeto = {
  array1: ["item", "item2", "item3"],
};
//acessamos o objeto com . eo array com []
console.log(objeto.array1[2]); //output item3
