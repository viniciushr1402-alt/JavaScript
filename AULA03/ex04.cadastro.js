const fs = require('fs');

const sensores = [
  { codigo: "S01", tipo: "Temperatura", valor: 75.2, unidade: "°C", status: "Normal" },
  { codigo: "S02", tipo: "Pressão", valor: 8.5, unidade: "bar", status: "Alerta" },
  { codigo: "S03", tipo: "Vibração", valor: 1.2, unidade: "mm/s", status: "Normal" },
  { codigo: "S04", tipo: "Fluxo", valor: 0.0, unidade: "L/min", status: "Alerta" },
  { codigo: "S05", tipo: "Nível", valor: 92.0, unidade: "%", status: "Alerta" }
];


fs.writeFileSync('monitoramento.json', JSON.stringify(sensores, null, 2));

console.log("Arquivo monitoramento.json criado com sucesso!");