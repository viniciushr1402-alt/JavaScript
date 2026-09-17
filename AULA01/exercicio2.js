const readline = require('readline-sync');
console.log("---Balança Virtual---")
const pesopeca = readline.questionFloat('Informe o peso da peca (em g): ');

if (pesopeca >= 95 && pesopeca <= 105) {
  console.log(`Peso: ${pesopeca}g - PEÇA APROVADA`);
}
 else {
  console.log(`Peso: ${pesopeca}g - PEÇA REPROVADA`);
}