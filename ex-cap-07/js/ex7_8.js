//Programa Caixa da Loja
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

/*
const TAXA_MULTA = 2 / 100; //multa por atraso
const TAXA_JUROS = 0.33 / 100; //juros por dia de atraso

frm.addEventListener("submit", (e) => {
    e.preventDefault();   //evita envio do form

    const dataVenc = frm.inDataVenc.value;
    const valor = Number(frm.inValor.value);
    
    const hoje = new Date()       //cria variáveis (instancia objetos)
    const vencimento = new Date() //do tipo Date()

    const partes = dataVenc.split("-");  //data vem no formato aaaa-mm-dd
    vencimento.setDate(Number(partes[2]));
    vencimento.setMonth(Number(partes[1] - 1));
    vencimento.setFullYear(Number(partes[0]));

    const atraso = hoje - vencimento //calcula a diferença de dias entre datas (em ms)

    let multa = 0;
    let juros = 0;

    if(atraso > 0) {  //se conta estiver em atraso...
        //converte ms do atraso em dias (1 dia = 24h x 60min x 60seg x 1000ms: 86400000)
        const dias = atraso / 86400000
        multa = valor * TAXA_MULTA //calcula multa e juros
        juros = valor * TAXA_JUROS * dias;
    };

    const total = valor + multa + juros;  //calcula total

    frm.outMulta.value = multa.toFixed(2);
    frm.outJuros.value = juros.toFixed(2);
    frm.outTotal.value = total.toFixed(2);
}); */

const TAXA_MULTA = 2 / 100;
const TAXA_JUROS = 0.33 / 100;

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const dataVenc = frm.inDataVenc.value;
    const valor = Number(frm.inValor.value);

    const hoje = new Date();
    const vencimento = new Date();

    const partes = dataVenc.split("-");
    vencimento.setDate(Number(partes[2]));
    vencimento.setMonth(Number(partes[1] - 1));
    vencimento.setFullYear(Number(partes[0]));

    const atraso = hoje - vencimento;

    let multa = 0;
    let juros = 0;

    if(atraso > 0) {
        const dias = atraso / 86400000;
        multa += valor * TAXA_MULTA;
        juros += valor * TAXA_JUROS * dias;
    };

    const total = valor + multa + juros;

    frm.outMulta.value = multa.toFixed(2);
    frm.outJuros.value = juros.toFixed(2);
    frm.outTotal.value = total.toFixed(2);

});