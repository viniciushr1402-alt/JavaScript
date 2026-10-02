const fs = require('fs');

const dados = JSON.parse(fs.readFileSync('producao.json', 'utf-8'));
let metasAtingidas = 0;

dados.forEach(item => {
  let pct = (item.produzido / item.meta) * 100;
  let status = "";

  if (pct >= 100) {
    status = "META ATINGIDA";
    metasAtingidas++;
  } else if (pct >= 80) {
    status = "ATENÇÃO";
  } else {
    status = "ABAIXO DA META";
  }

  console.log(`Máquina: ${item.maquina}`);
  console.log(`Meta: ${item.meta}`);
  console.log(`Produzido: ${item.produzido}`);
  console.log(`Desempenho: ${pct.toFixed(2)}%`);
  console.log(`Situação: ${status}\n---`);
});

console.log(`Máquinas que atingiram a meta: ${metasAtingidas}`);