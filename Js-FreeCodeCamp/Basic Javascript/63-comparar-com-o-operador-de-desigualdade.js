
/*Comparar com o operador de desigualdade
O operador de desigualdade (!=) é o oposto do operador de igualdade. Significa que não é igual e retorna false onde a igualdade retornaria true e vice-versa. Tal como o operador de igualdade, o operador de desigualdade converterá os tipos de dados de valores enquanto compara.

Exemplos

1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false
Adicione o operador de desigualdade != na instrução if para que a função retorne a string Not Equal quando val não for equivalente a 99.

*/
// Configuração
function testNotEqual(val) {
  if (val != 99) { // Altere esta linha
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);