//Programa Brinquedoteca
const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const criancas = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inNome.value;
    const idade = Number(frm.inIdade.value);

    if(idade > 15 || isNaN(idade)) {
        alert("A idade precisa ser um número válido");
        return;
    } else {
        criancas.push({nome, idade});
    };
    
    frm.reset();
    frm.inNome.focus();

    frm.btListar.dispatchEvent(new Event("click"));
});

frm.btListar.addEventListener("click", () => {
    if(criancas.length == 0) {
        alert("Não há crianças cadastradas");
        return;
    };

    const lista = criancas.reduce((acumulador, crianca) => 
    `${acumulador} ${crianca.nome} - ${crianca.idade} anos\n`, "");

    resp.innerText = `${lista}`
});

frm.btResumir.addEventListener("click", () => {
    if(criancas.length == 0) {
        alert("Não há crianças na lista");
        return;
    };

    const copia = [...criancas];  //cria cópia do vetor criancas
    copia.sort((a, b) => a.idade - b.idade); //ordena pela idade
    let resumo = "";   //para concatenar a saída
    let aux = copia[0].idade //menor idade do vetor ordenado

    let nomes = [];  //para inserir nomes de cada idade
    for(const crianca of copia) {
        const {nome, idade} = crianca;
        if(idade == aux) { //se é da mesma idade auxiliar...
            nomes.push(nome); //adiciona ao vetor nome
        } else { // senão, monta o resumo para cada idade
            resumo += aux + " anos(s): " + nomes.length + " crianças(s) - ";
            resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
            resumo += "(" + nomes.join(", ") + ")\n\n";
            aux = idade; // obtém a nova idade na ordem
            nomes = [];  // limpa o vetor dos nomes
            nomes.push(nome);  //adiciona o primeiro da nova idade 
        }
    }
    //adiciona a última criança
    resumo += aux + " anos(s): " + nomes.length + " crianças(s) - ";
    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
    resumo += "(" + nomes.join(", ") + ")\n\n";

    resp.innerText = resumo; //exibe a resposta
});