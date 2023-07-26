// Array de contatos com informações sobre diferentes pessoas
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

// Função para procurar e retornar informações sobre um contato específico
function lookUpProfile(name, prop) {
  // Loop externo para iterar sobre os elementos do array 'contacts' (lista de contatos)
  for (let i = 0; i < contacts.length; i++) {
    // Verifica se o 'firstName' (nome) do contato corresponde ao 'name' fornecido
    if (contacts[i].firstName === name) {
      // Se o contato for encontrado, verifica se a propriedade 'prop' existe no contato
      if (prop in contacts[i]) {
        // Se a propriedade existir, retorna o valor dessa propriedade para o contato correspondente
        return contacts[i][prop];
      } else {
        // Caso a propriedade não exista no contato, retorna uma mensagem de erro
        return "No such property";
      }
    }
  }
  // Caso nenhum contato corresponda ao 'name' fornecido, retorna uma mensagem de erro
  return "No such contact";
}

// Chamada da função 'lookUpProfile' para buscar o contato com o nome "Akira" e a propriedade "likes"
lookUpProfile("Akira", "likes");
