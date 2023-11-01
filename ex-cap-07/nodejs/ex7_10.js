//Programa exibir arvore de estrelas
const prompt = require("prompt-sync")();

const numLinhas = Number(prompt("Altura da Árvore: "));

let arvore = "";
for(let i = 1; i <= numLinhas; i++) {
    const espacos = 30 + (numLinhas - i);
    arvore += `${" ".repeat(espacos) + "*".repeat(2 * i)}\n`;
    
};

for(let i = 1; i <= 3; i++) {
    arvore += " ".repeat(30 + numLinhas - 1) + "*".repeat(2) + "\n";
};

console.log(arvore);
