// ex04_consulta_sensores.js
const fs = require('fs');

const lista = JSON.parse(fs.readFileSync('monitoramento.json', 'utf-8'));

console.log("Todos os Sensores");
lista.forEach(s => console.log(`[${s.codigo}] ${s.tipo}: ${s.valor} ${s.unidade} (${s.status})`));

const alertas = lista.filter(s => s.status === "Alerta");
console.log("Alerta!");
alertas.forEach(s => console.log(`[${s.codigo}] ${s.tipo}: ${s.valor} ${s.unidade}`));
console.log(`Total em alerta: ${alertas.length}`);