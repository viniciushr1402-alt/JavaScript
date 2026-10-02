const fs = require('fs');

try {
  const medicoes = JSON.parse(fs.readFileSync('temperaturas.json', 'utf-8'));

  for (let m of medicoes) {
    if (m.temp > 350) {
      throw new Error(`Temperatura de ${m.temp}°C excedeu o limite permitivel.`);
    }
    console.log(`Leitura: ${m.temp}°C NORMAL`);
  }
} catch (erro) {
  console.log("ALARME:");
  console.log(erro.message);
}