/*Substituir cadeias de if else por switch
Se você tiver muitas opções para escolher, uma instrução switch pode ser mais fácil de escrever do que muitas instruções if/else if encadeadas. O seguinte:

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
pode ser substituído por:

switch (val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
Altere a cadeia de instruções if/else if por um comando switch.*/
function chainToSwitch(val) {
  let answer = "";
  // Altere apenas o código abaixo desta linha

  // if (val === "bob") {
  //   answer = "Marley";
  // } else if (val === 42) {
  //   answer = "The Answer";
  // } else if (val === 1) {
  //   answer = "There is no #1";
  // } else if (val === 99) {
  //   answer = "Missed me by this much!";
  // } else if (val === 7) {
  //   answer = "Ate Nine";
  // }

  switch (val) {
    case "bob":
      return "Marley";
      break;

    case 42:
      return "The Answer";
      break;

    case 1:
      return "There is no #1";
      break;

    case 99:
      return "Missed me by this much!";
      break;

    case 7:
      return "Ate Nine";
      break;
  }

  // Altere apenas o código acima desta linha
  return answer;
}

chainToSwitch(7);
