//Código Js para exercício promoção farmácia

const frm = document.querySelector("form");    
const respMedicamento = document.querySelector("h3");
const respPreco = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
    const nomeMedicamento = frm.inMedicamento.value;
    const precoMedicamento = Number(frm.inPreco.value);

    const calcPrecoPromo = Math.floor(precoMedicamento * 2);

    respMedicamento.innerText = `Promção de ${nomeMedicamento}`;
    respPreco.innerText = `Leve 2 por apenas R$${calcPrecoPromo.toFixed(2)}`;

    e.preventDefault();
});
