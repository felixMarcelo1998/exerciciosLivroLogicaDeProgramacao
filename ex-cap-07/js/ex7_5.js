//Programa E-mail Institucional
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// frm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const funcionario = frm.inFuncionario.value;  //obtém o nome do funcionário

//     //divide o nome do vetor, criados a cada ocorrência do espaço
//     const partes = funcionario.split(" ");
//     let email = ""; //vai cocatenar letras

//     const tam = partes.length; //obtém o tamanho do vetor partes

//     for(let i = 0; i < tam - 1; i++) { //percore itens do vetor (exeto o último)
//         email += partes[i].charAt(0); //e obtém a letra inicial de cada item
//     };

//     //concatena as letras iniciais com a última parte (sobrenome) e empresa
//     email += partes[tam - 1] + "@empresa.com.br"

//     resp.innerText = `E-mail: ${email.toLowerCase()}`;  //exibe e-mail em minúsculas
// });


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nomeFunci = frm.inFuncionario.value.trim();

    const partes = nomeFunci.split(" ");
    const tam = partes.length;

    let email = "";
    for(let i = 0; i < tam - 1; i++) {
        email +=  partes[i].charAt(0);
    };

    email += partes[tam - 1] + "@empresa.com.br";

    resp.innerText = `Email: ${email.toLowerCase()}`;

});
