//Programa Inverte Centena
const prompt = require("prompt-sync")();
const num = Number(prompt("Número (centena): "));

if(num < 100 || num >= 1000) {
    console.log("Erro... deve ser uma centena");
    return
};

const num1 = Math.floor(num / 100); //obtém o primeiro número
const sobra = num % 100;  // o que sobra (dezena)
const num2 = Math.floor(sobra / 10); //obtém o segundo número
const num3 = sobra % 10;   //obtém o terceiro número
console.log(`Invertido: ${num3}${num2}${num1}`); //exibe número