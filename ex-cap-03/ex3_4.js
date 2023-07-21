//Código Js do programa Veterinário

//MINHA RESPOSTA
const prompt = require("prompt-sync")();
const pesoRacaoKg = Number(prompt("Peso da ração (Kg): "));
const consumoGato = Number(prompt("Quanto de ração o gato consome por dia? (g)"));

const pesoRacaoGr = pesoRacaoKg * 1000;
const DuracaoRacao = Math.floor(pesoRacaoGr / consumoGato);
const sobra = pesoRacaoGr % consumoGato;

console.log(`Duração: ${DuracaoRacao} dias`);
console.log(`Sobra: ${sobra}gr`);
