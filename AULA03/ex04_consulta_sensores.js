const fs = require('fs');

const texto = fs.readFileSync('monitoramento.json', 'utf-8');
const sensores = JSON.parse(texto);


console.log("--- TODOS OS SENSORES ---");
for (let s of sensores) {
  console.log(`[${s.codigo}] ${s.tipo}: ${s.valor} ${s.unidade} | Status: ${s.status}`);
}
const alertas = sensores.filter(s => s.status === "Alerta");

console.log("\n--- SENSORES EM ALERTA ---");
for (let a of alertas) {
  console.log(`[${a.codigo}] ${a.tipo}: ${a.valor} ${a.unidade}`);
}
console.log(`\nTotal de sensores em alerta: ${alertas.length}`);