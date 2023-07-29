/*
Declarar variáveis somente de leitura com a palavra-chave const
A palavra-chave let não é a única nova forma de declarar variáveis. Na versão ES6, você também pode declarar variáveis usando a palavra-chave const.

const possui todos os recursos maravilhosos que let tem, com o bônus adicional que variáveis declaradas usando const são somente de leitura. Elas têm um valor constante, o que significa que a variável atribuída com const não pode ser atribuída novamente:

const FAV_PET = "Cats";
FAV_PET = "Dogs";
O console vai exibir um erro devido à reatribuição do valor de FAV_PET.

Você sempre deve nomear variáveis que você não quer reatribuir, usando a palavra-chave const. Isso ajuda quando você acidentalmente tenta reatribuir uma variável que deveria ser constante.

Observação: é comum que os desenvolvedores usem nomes de variáveis maiúsculas para valores imutáveis e minúsculas ou camelCase para valores mutáveis (objetos e arrays). Você aprenderá mais sobre objetos, arrays e valores imutáveis e mutáveis em desafios futuros. Em desafios posteriores, você também verá exemplos de identificadores de variáveis maiúsculas, minúsculas ou em camelCase.

Altere o código para que todas as variáveis sejam declaradas usando let ou const. Use let quando você quiser que a variável mude e const quando você quiser que a variável permaneça constante. Além disso, renomeie as variáveis declaradas com const para que estejam de acordo com as práticas comuns. Não altere as strings atribuídas às variáveis.


*/

const FCC = "freeCodeCamp"; // Altere esta linha
let fact = "is cool!"; // Altere esta linha
fact = "is awesome!";
console.log(FCC, fact); // Altere esta linha