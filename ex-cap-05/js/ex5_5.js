//Programa Js contas do mês
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

let addDescri = ""; //string com as descrições
let contContas = 0; //contador
let valorTotConta = 0; //acumulador

frm.addEventListener("submit", (e) => {
   e.preventDefault();

    const descricao = frm.inDescricao.value;
    const valor = Number(frm.inValor.value);

    contContas++;

    addDescri = addDescri + `${descricao} - R$: ${valor.toFixed(2)}\n`;
    valorTotConta += valor;

    resp1.innerText = `${addDescri}----------------------`;
    resp2.innerText = `${contContas} contas(s) - Total R$${valorTotConta.toFixed(2)}`;

    frm.inDescricao.value = "";
    frm.inValor.value = "";
    frm.inDescricao.focus();
    
});