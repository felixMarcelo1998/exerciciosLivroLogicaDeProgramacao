//Programa Concurso
const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const candidatos = [];

function verificaListaVazia() {
    if(candidatos.length == 0) {
        alert("Não há candidatos listados!");
        return;
    };
};

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inCandidato.value;
    const nota = Number(frm.inAcertos.value);

    candidatos.push({nome, nota});

    frm.reset();
    frm.inCandidato.focus();

    frm.btListar.dispatchEvent(new Event("click"));
});

frm.btListar.addEventListener("click", () => {
    verificaListaVazia();

    const lista = candidatos.reduce((acc, candidato) => `${acc + candidato.nome} - ${candidato.nota} acertos\n`, "");

    resp.innerText = lista;
});

frm.btEtapa.addEventListener("click", () => {
    if(candidatos.length == 0) {
        alert("Não há candidatos listados!");
        return;
    };

    const corte = Number(prompt("Números de acertos para aprovação: "));
    if(corte <= 0 || isNaN(corte)) {
        alert("Número inválido");
        return;
    }

    const listaAprovados = candidatos.filter(candidato => candidato.nota >= corte);
    const copiaAprovados = [...listaAprovados];
    copiaAprovados.sort((a, b) => b.nota - a.nota);
    
    let lista = "";
    for(const aprovado of copiaAprovados) {
        lista += `${aprovado.nome} - ${aprovado.nota} Acertos\n`;
    };

    if(listaAprovados.length == 0) {
        resp.innerText = "Não há candidatos Aprovados!!!";
        return;
    } else {
        resp.innerText = `Alunos Aprovados:\n${"-".repeat(30)}\n${lista}`;
    };
    
});

