let idade = 20;

if(idade == 20){  // == menos rigoroso, aceita string "20" eo number 20
  console.log("Voce tem 20 anos")
}

if(idade == 15){  // ===  rigoroso, aceita só number como valor
  console.log("Voce tem 15 anos")
}