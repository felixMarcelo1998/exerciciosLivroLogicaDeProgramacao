//PROGRAMA FILA PREFERENCIAL
const prompt = require("prompt-sync")();
const clientes = [];
console.log("Digite o nome e idade para cadastrar o cliente. Digite 'Fim' para sair");

do {
    const nome = prompt("Nome: ");
    if(nome == "Fim") {
        break;
    };
    const idade = Number(prompt("Idade: "));
    clientes.push({nome, idade});
    console.log(`Ok! Cliente cadastrado\n${"-".repeat(22)}`);

} while(true);

const pref = clientes.filter(cliente => cliente.idade >= 60);
console.log(`Fila Preferencial\n${"-".repeat(30)}`);

cont = 1;
for(const idoso of pref) {
    console.log(`${cont} - ${idoso.nome}`);
    cont ++;
};

const normal = clientes.filter(cliente => cliente.idade < 60);
console.log(`${"-".repeat(30)}\n\nFila Normal\n${"-".repeat(30)}`);

normal.forEach((norm, i) => {
    console.log(`${i + 1} - ${norm.nome}`);
});
