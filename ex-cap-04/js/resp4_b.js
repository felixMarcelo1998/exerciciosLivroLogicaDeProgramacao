//Programa Verifica velocidade
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const velocPermitida = Number(frm.inPermitida.value);
    const velocCondutor = Number(frm.inCondutor.value);
    const calcVelocidade = velocPermitida + (velocPermitida * (20/100));

    const situacao = velocCondutor <= velocPermitida ? "Sem Multa" : velocCondutor <= calcVelocidade ? "Multa Leve" : "Multa Grave";

    // let situacao;
    // if(velocCondutor <= velocPermitida) {
    //     situacao = "Sem Multa";
    // } else if(velocCondutor <= velocPermitida + (velocPermitida * (20/100))) {
    //     situacao = "Multa Leve";
    // } else {
    //     situacao = "Multa Grave";
    //}

    resp.innerText = `Situação: ${situacao}`;

    e.preventDefault();
});