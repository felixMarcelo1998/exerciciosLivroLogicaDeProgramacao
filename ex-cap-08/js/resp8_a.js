//Programa Clube de Natação
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

function retornaTracos(nome) {
    let acc = "";
    for(let i = 0; i < nome.length; i ++) {
        if(nome.charAt(i) == " ") {
            acc += " ";
        } else {
            acc += "-";
        };
    };

    return acc;
}

function categorizarAluno(idade) {
    if(idade <= 12) {
        return "Infantil";
    } else if (idade <= 18) {
        return "Juvenil";
    } else {
        return "Adulto";
    };
};

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inNome.value;
    const idade = Number(frm.inIdade.value);

    const categoria = categorizarAluno(idade);
    const tracos = retornaTracos(nome);

    resp.innerText = `${nome}\n${tracos}\nCategoria: ${categoria}`

});