const fs = require('fs');

if (fs.existsSync('equipamentos.json')) {
  const dados = JSON.parse(fs.readFileSync('equipamentos.json', 'utf-8'));

  for (let item of dados) {
    console.log(`Código: ${item.codigo}`);
    console.log(`Equipamento: ${item.nome}`);
    console.log(`Setor: ${item.setor}`);
    console.log(`Status: ${item.operacional ? 'OPERACIONAL' : 'PARADA'}---`);
  }
}