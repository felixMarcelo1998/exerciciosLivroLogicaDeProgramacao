//Código Js do programa Restaurante JS
//MINHA RESPOSTA
//cria referência ao form e ao elemento h3(onde será exibido a resposta)
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const precoQuilo = Number(frm.inQuilo.value);    //obtém conteúdo dos campos
    const consumoCliente = Number(frm.inConsumo.value);

    const precoGramas = precoQuilo / 1000;          //calcula valor a ser pago
    const valorPagar = precoGramas * consumoCliente;  

    resp.innerText = `Valor a pagar R$: ${valorPagar.toFixed(2)}`; //exibe resposta

    e.preventDefault();   //evita envio do form
});