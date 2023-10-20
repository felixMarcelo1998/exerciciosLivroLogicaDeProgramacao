//Programa de Notas de alunos
const prompt = require("prompt-sync")();
const alunos = [];
console.log("Digite o nome e a nota do aluno. Digite 'Fim' para sair");

do {
    const nome = prompt("Aluno: ");
    if(nome == "Fim") {
        break;
    };
    const nota = Number(prompt("Nota: "));
    alunos.push({nome, nota});
    console.log("OK! Aluno e Nota cadastrados!");
    console.log("-".repeat(40));

} while(true)

const maior = alunos.reduce((acumulador, aluno) => Math.max(acumulador, aluno.nota), 0);
console.log(`A maior nota da turma foi: ${maior}`);


if(maior >= 7) {
    const destaques = alunos.filter(aluno => aluno.nota == maior);
    let lista = "";
    for(const destaque of destaques) {
        lista += `- ${destaque.nome}\n`;
    };
    console.log(`Alunos em Destaque:\n${lista}`);
} else {
    console.log("Não há alunos em destaque na turma!");
};






