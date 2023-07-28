//Programa Pescaria

const prompt = require("prompt-sync")()
const numPessoas = Number(prompt("Número de pessoas: "));
const numPeixes = Number(prompt("Número de peixes: "));

let pagar;
if (numPeixes <= numPessoas ) {
    pagar = numPessoas * 20;
} else {
    pagar = numPessoas * 20 + (numPeixes - numPessoas) * 12; 
}

console.log(`O valor a ser pago é de R$${pagar.toFixed(2)}`);
