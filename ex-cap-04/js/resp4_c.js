//Programa Parquímetro
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const valor = Number(frm.inValor.value);

    if(valor < 1) {
        resp1.innerText = `Valor Insuficiente`;
        frm.invalor.focus();
        return;
    };

    let tempo;
    let troco;

    if(valor >= 1.00 && valor < 1.75) {
        tempo = 30;
        troco = valor - 1;
    } else if (valor >= 1.75 && valor < 3.00) {
        tempo = 60;
        troco = valor - 1.75;
    } else {
        tempo = 120;
        troco = valor - 3;
    }

    resp1.innerText = `Tempor: ${tempo}`;
    if(troco > 0) {
        resp2.innerText = `Troco R$: ${troco.toFixed(2)}`;
    };
    
});