//Programa Revenda Avenida - Promoção
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

const classificaCarro = ano => {
    const anoAtual = new Date().getFullYear();
    let estadoCarro;

    if(ano == anoAtual) {
        estadoCarro = "Novo";
    } else if (ano >= anoAtual - 2) {
        estadoCarro = "Seminovo";
    } else {
        estadoCarro = "Usado"; 
    };

    return estadoCarro;
};

const calcEntrada = (preco, estado) => estado == "Novo" ? preco * 0.5 : preco * 0.3;
    
frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const modelo = frm.inModelo.value;
    const ano = Number(frm.inAno.value);
    const preco = Number(frm.inPreco.value);
    
    const estado = classificaCarro(ano);
    const precoEntrada = calcEntrada(preco, estado);

    const parcelas = ((preco - precoEntrada) / 10);

    resp1.innerText = `${modelo} - ${estado}`;
    resp2.innerText = `Entrada R$${precoEntrada.toFixed(2)}`;
    resp3.innerText = `+10x de R$:${parcelas.toFixed(2)}`;

});
