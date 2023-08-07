//Função normal
function somar(x, y) {
  return x + y;
}

//Função com Arrow function
const somar = (x, y) => {
  return x + y;
};

//Da pra resumir ainda mais ela
//quando o retorno dela ja é na mesma linha,
const somarResumido = (x, y) => x + y;

//Da pra resumir mais ainda quando só se tem 1 parametro
const sobrenome = (sob) => "Boniek " + sob;
//   jeito "antigo"
// function sobrenome(sob) {
//   return 'Boniek' + sob
// }
