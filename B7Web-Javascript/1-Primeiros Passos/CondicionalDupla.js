let idade = 90;

// && é como se fosse um "e, i"
// || é como se fosse um "ou"

//idependentes uma da outra, podem ate interferir sem nenhum problema na outra
if (idade < 18) {
  console.log("Voce é uma Criança");
}

if (idade >= 18 && idade < 60) {
  console.log("Voce é um adulto");
}

if (idade >= 60) {
  console.log("Voce é um idoso");
}

//não interfere uma na outra
if (idade < 18) {
  console.log("Voce é uma Criança");
} else if (idade >= 18 && idade < 60) {
  console.log("Voce é um adulto");
} else if (idade >= 60) {
  console.log("Voce é um idoso");
}
