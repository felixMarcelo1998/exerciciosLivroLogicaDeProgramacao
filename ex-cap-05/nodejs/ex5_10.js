const prompt = require("prompt-sync")();
const valor = Number(prompt("Valor R$: "));
const parcelas = Number(prompt("Nº de parcelas: "));
const valorParcela = valor / parcelas;
const resto = valor % parcelas;

for(let i = 1; i < parcelas; i++) {
    console.log(`${i}º parcela: R$${Math.floor(valorParcela).toFixed(2)}`);
};

console.log(`${parcelas}º parcela: R$${Number(Math.floor(valorParcela).toFixed(2)) + resto}`);
