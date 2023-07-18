//Código Js do programa Revenda de Veículos

//MINHA RESPOSTA
//cria referencia ao form e aos elementos de resposta (pelo seu id)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const nomeVeiculo = frm.inVeiculo.value;     //obtém conteúdo dos campos
    const precoVeiculo = Number(frm.inPreco.value);

    const entrada = precoVeiculo * 0.5;   //calcula valor da entrada
    const parcelado = (precoVeiculo * 0.5) / 12;  // ... e das parcelas

    resp1.innerText = `Promoção: ${nomeVeiculo}`;          //exibe as respostas
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`;
    resp3.innerText = `+12x de R$${parcelado.toFixed(2)}`;

    e.preventDefault();  //evita envio do form
});
