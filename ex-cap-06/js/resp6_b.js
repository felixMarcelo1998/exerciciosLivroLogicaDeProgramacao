//Programa Número em Ordem
const frm = document.querySelector("form");
const resp1 = document.querySelector("pre");
const resp2 = document.querySelector("h3");
const numeros = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = Number(frm.inNumero.value);
    if(numeros.includes(num)) {
        alert("Número já adicionado à lista");

    } else {
        numeros.push(num);

    }

    frm.inNumero.value = "";
    frm.inNumero.focus();
    
    resp1.innerText = `Números: ${numeros.join(", ")}`;
});

frm.btOrdem.addEventListener("click", () => {
    if(numeros.length == 0) {
        alert("Não há números na lista");
        frm.inNumero.focus();
        return;
    };

    let ordem = true;

    for(let i = 0; i < numeros.length - 1; i++) {
        if(numeros[i] > numeros[i + 1]) {
            ordem = false;
            break;
        };
    };

    resp2.innerText = ordem ? "Os números estão em ordem crescente" : "Atenção... Os Números não estão em ordem crescente";

});
