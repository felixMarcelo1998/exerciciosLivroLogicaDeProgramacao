//Programa Veterinária Avenida
const frm = document.querySelector("form");
const convenio = document.querySelector("#pConvenio")
const resp = document.querySelector("h3");

frm.rbSim.addEventListener("change", () => {
    convenio.className = "exibe-linha";
});

frm.rbNao.addEventListener("change", () => {
    convenio.className = "oculta";
});

const calcularDesconto = (valor, taxa) => valor * (taxa / 100);

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const valor = Number(frm.inValor.value);

    let desconto;

    if(frm.rbSim.checked) {
        if(frm.selConvenio.value == "amigos") {
            desconto = calcularDesconto(valor, 20);
        } else {
            desconto = calcularDesconto(valor, 50);
        };
    } else {
        desconto = calcularDesconto(valor, 10);
    };

    resp.innerText = `Desconto R$${desconto.toFixed(2)}\n
    A Pagar R$${(valor - desconto).toFixed(2)}`;

});
