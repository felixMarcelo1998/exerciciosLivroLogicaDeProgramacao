//Programa Farmácia
const prompt = require("prompt-sync")();
const valorCompra = Number(prompt("Valor total da compra: R$"));

const aux = Math.floor(valorCompra / 20); //aux = nº de parcelas sem condição
const parcela = aux == 0 ? 1 : aux > 6 ? 6 : aux; //operador ternário
/*
let parcela;
if(aux == 0) {
    parcela = 1;
} else if(aux > 6) {
    parcela = 6;
} else {
    parcela = aux;
}
*/
const valorParcela = valorCompra / parcela
console.log(`Pode pagar em ${parcela}x de R$${valorParcela.toFixed(2)}`);
