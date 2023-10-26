//PROGRAMA DE SAQUES
const prompt = require("prompt-sync")();
console.log("Diguite o valor que deseja sacar (Digite 0 para sair)");
const saques = [];
let saqueInvalido = 0;

do {
    const valor = Number(prompt("Valor: R$"));
    if(valor == 0) {
        break;
    } else if (valor % 10 != 0){
        saqueInvalido ++;
        console.log("Valor inválido, o caixa contém apenas cedulas de R$10,00");
    } else {
        console.log("Saque realizado com sucesso!");
        saques.push(valor);
    };

} while(true);


if(saques.length != 0) {
    console.log(`\nSaques Válidos:\n${"-".repeat(30)}`);
    for(const saque of saques) {
        console.log(`R$${saque.toFixed(2)}`);
    };
    console.log(`${"-".repeat(30)}`);

    const totSaques = saques.reduce((acc, saque) => acc + saque, 0);
    console.log(`Total dos Saques: R$${totSaques.toFixed(2)}`);
    console.log(`N° de Tentativas de Saques (saques inválidos): ${saqueInvalido}`);
} else {
    console.log(`Não há saques válidos reguistrados\n${"-".repeat(30)}\nSaques inválidos: ${saqueInvalido}`);
};
