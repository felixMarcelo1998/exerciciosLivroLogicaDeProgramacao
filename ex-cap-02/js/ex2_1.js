//Programa Js que exibe o nome informado pelo usuário no campo de edição

//cria referência ao form e ao elemento h3 (onde será exibido a resposta)
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//cria um "ouvinte" de evento, acionado quando obotão submit for clicado
frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value   //obtém o nome digitado no form
    resp.innerText = `Olá ${nome}`  //exibe a resposta do programa
    e.preventDefault()              //Evita envio do form
});

