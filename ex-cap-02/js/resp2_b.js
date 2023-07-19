//Código Js do programa lan house de aeroporto
const frm = document.querySelector("form");
const respValorPagar = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const valorMinu = Number(frm.inValor.value);
    const tempoUso = Number(frm.inTempo.value);

    const calculaPreco = Math.ceil(tempoUso / 15) * valorMinu;

    respValorPagar.innerText = `Valor a Pagar R$${calculaPreco.toFixed(2)}`;

    e.preventDefault();
});