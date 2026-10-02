const fs = require('fs');

const equipamentos = JSON.parse(fs.readFileSync('equipamentos.json', 'utf-8'));
let totalParados = 0;

console.log("EQUIPAMENTOS PARADOS\n");
for (let item of equipamentos) {
  if (!item.operacional) {
    console.log(`${item.nome} | ${item.setor}`);
    totalParados++;
  }
}

console.log(`\nTotal de equipamentos parados: ${totalParados}`);