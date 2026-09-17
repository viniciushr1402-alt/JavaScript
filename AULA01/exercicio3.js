const readline = require('readline-sync');
console.log("---TABELA VIRTUAL---")

const Cycle = readline.questionInt('Qual e a quantidade de pecas por ciclo?: ');
for (let ciclo = 1; ciclo <= 10; ciclo++) {
  const acumulativa = ciclo * Cycle;
 console.log(`Ciclo ${ciclo}: ${acumulativa} peças acumuladas`);
}