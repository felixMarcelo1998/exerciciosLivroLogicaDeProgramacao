//Código Js para programa tabuada
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit" , (e) => {
    e.preventDefault();

    const numero = frm.inNumero.value;

    let resposta = ""; //variável do tipo string para concatenar as respostas
    for(let i = 1; i <= 10; i++) { //cria um laço de repetição (i comça em 1 e é incrementado até 10)
        //a variável resposta vai acumulando os novos conteúdos
        resposta = `${resposta}${numero} x ${i} = ${numero*i}\n`;
    } 
    //exibe a tabuada do número
    resp.innerText = resposta;


});