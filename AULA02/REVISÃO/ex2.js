// "Se no dia a dia a fábrica produzir 100 peças em vez de 6, a gente teria que mudar o código-fonte. Como faríamos para o sistema perguntar primeiro quantas peças foram produzidas no dia e adaptar o loop sozinho?"


const entrada = require('readline-sync');



let acumulador = 0;



for (let valor = 1; valor <=6; valor++){

    const peca = entrada.questionFloat(`Digite o valor da peca ${valor}: `);

    acumulador += peca;

}
const media = acumulador / 6;

console.log(`Total de defeitos: ${acumulador}`);
console.log(`Media: ${media.toFixed(2)}`);
