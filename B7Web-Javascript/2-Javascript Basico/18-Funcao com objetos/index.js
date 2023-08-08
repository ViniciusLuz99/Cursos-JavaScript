let pessoa = {
  nome: "Vlad",
  sobrenome: "Kratovisk",
  idade: 30,
  //funcao que mostra o nome completo ( juncao de nome + sobrenome)
  nomeCompleto: function () {
    return `${this.nome} ${this.sobrenome}}`;
    //this significa isto, no caso o proprio objeto
  },
  es6Method() {
    // ES6 method syntax also has access to obj's properties using `this`
    return `${this.nome} ${this.sobrenome}`;
  },
  //funcao arrow, perde acesso ao "this"
  arrowF: () => {
    return `${this.nome} ${this.sobrenome}}`;
  },
};

console.log(pessoa.nomeCompleto());
