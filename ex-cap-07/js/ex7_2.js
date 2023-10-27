//Programa Qual é a Fruta?
const frm = document.querySelector("form");
const resp = document.querySelector("span");

frm.addEventListener("submit", (e) => { //"escuta" evento submit do form
    e.preventDefault();             //evita o envio do form

    const fruta = frm.inFruta.value.toUpperCase(); //conteúdo do campo em maiúsculas
    let resposta  = "";

    for(const letra  of fruta) { // percore todos os caracteres da fruta
        if(letra == fruta.charAt(0)) {  //se letra igual a letra inicial da string...
            resposta += fruta.charAt(0); //adiciona a letra inicial
        } else {
            resposta += "-";
        };
    };

    resp.innerText = resposta;  //exibe a resposta
    frm.inFruta.value = "*".repeat(fruta.length) //preenche com "*", conforme tamanho

});