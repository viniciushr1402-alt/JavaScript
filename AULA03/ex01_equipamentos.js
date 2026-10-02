const fs = require('fs');

const equipamentos = [
  { codigo: 101, nome: "Torno CNC", setor: "Usinagem", operacional: true },
  { codigo: 102, nome: "Prensa 100T", setor: "Estamparia", operacional: false },
  { codigo: 103, nome: "Fresadora", setor: "Usinagem", operacional: false }
];

fs.writeFileSync('equipamentos.json', JSON.stringify(equipamentos, null, 2));
console.log("Ficheiro equipamentos.json guardado.");

