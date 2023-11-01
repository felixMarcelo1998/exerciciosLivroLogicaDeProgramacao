//Programa para analisar os parênteses de uma fórmula matemática
const prompt = require("prompt-sync")();

const formula = prompt("Formula: ");

let abre = 0;
let fecha = 0;
for(const caracter of formula) {
    if(caracter == "(" ) {
        abre++;
    } else if(caracter == ")") {
        fecha++;
    };

    if(fecha > abre) {
        break;
    };
};

if(abre == fecha) {
    console.log("Ok! Fórmula correta (em relação aos parênteses)");
} else {
    console.log("Erro... Fórmula incorreta");
};
