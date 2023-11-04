//Programa Multa de Trânsito
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const dataInf = frm.inData.value;
    const valor = Number(frm.inValor.value);

    const dataHoje = new Date();

    const dataInf2 = new Date();
    const partes = dataInf.split("-");
    dataInf2.setDate(Number(partes[2]));
    dataInf2.setMonth(Number(partes[1]) - 1);
    dataInf2.setFullYear(Number(partes[0]));

    const dia = dataInf2.getDate();

    dataInf2.setDate(dia + 90);
    const diaLimit = dataInf2.getDate();
    const mesLimit = dataInf2.getMonth() + 1;
    const anoLimit = dataInf2.getFullYear();

    const atraso = dataHoje - dataInf2;
    const diasAtraso = atraso / 86400000;

    const diaLimFormt = diaLimit < 10 ? "0" + diaLimit : diaLimit;
    const mesLimFormt = mesLimit < 10 ? "0" + mesLimit : mesLimit;

    if(diasAtraso <= 90) {
        resp.innerText = `Data Limite para Pagamento com Desconto: ${diaLimFormt}/${mesLimFormt}/${anoLimit}\n`;
        resp.innerText += `Valor com Desconto R$: ${(valor * 0.80).toFixed(2)}\n`;
    } else {
        resp.innerText = `Data Limite para Pagamento com Desconto: ${diaLimFormt}/${mesLimFormt}/${anoLimit}\n`;
        resp.innerText += `Sua conta está em atraso!!!\n`;
        resp.innerText += `Valor a ser pago R$: ${valor.toFixed(2)}`;
    }

});