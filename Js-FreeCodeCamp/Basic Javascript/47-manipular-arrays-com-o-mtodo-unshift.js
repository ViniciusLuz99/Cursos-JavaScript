// Configuração
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Altere apenas o código abaixo desta linha
myArray.unshift(["Paul", 35]);

/*
Manipular arrays com o método unshift
Você pode não apenas usar shift para remover elementos do início de um array, como também pode usar unshift para adicionar elementos ao início de um array, ou seja, adicionar elementos na posição inicial do array.

.unshift() funciona exatamente como .push(), mas, ao invés de adicionar o elemento ao final do array, unshift() adiciona o elemento no início do array.

Exemplo:

const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
Após o shift, ourArray teria o valor ["J","cat"]. Após o unshift, ourArray teria o valor ["Happy","J","cat"]. */