/*
Algoritmos e estruturas de dados em JavaScript
JavaScript básico
Comparar com o operador lógico OR
O operador lógico OR (||) retorna true se qualquer um dos operandos for true. Caso contrário, retorna false.

O operador lógico ou é composto por dois símbolos de pipe: (||). Normalmente, ele pode ser encontrado entre as teclas Backspace e Enter.

O padrão abaixo deve parecer familiar a partir de pontos de passagem anteriores.

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
O código retornará Yes se num estiver entre 5 e 10 (5 e 10 inclusive). A mesma lógica pode ser escrita com o operador lógico OR.

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
Combine as duas instruções if em uma mesma instrução a qual retorna a string Outside se val não estiver entre 10 e 20, inclusos 10 e 20. Caso contrário, retorna a string Inside. */
function testLogicalOr(val) {
  
  // Altere apenas o código abaixo desta linha

  // Verifica se o valor de 'val' é menor que 10 ou maior que 20
  if (val < 10 || val > 20) {
    // Se a condição for verdadeira, retorna "Outside" (fora do intervalo)
    return "Outside";
  }

  // Se a condição acima não for satisfeita, ou seja, se o valor de 'val' estiver entre 10 e 20
  // Retorna "Inside" (dentro do intervalo)
  return "Inside";
}

// Chamando a função testLogicalOr passando o valor 15 como argumento
// A função irá retornar "Inside" pois 15 está entre 10 e 20
testLogicalOr(15);