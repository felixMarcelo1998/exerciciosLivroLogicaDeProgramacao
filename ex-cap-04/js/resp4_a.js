//Programa Par ou ímpar
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const numero = Number(frm.inNumero.value);
    
    const parImpar = numero % 2 == 0 ? "Par" : "Ímpar";
    
    // let parImpar;
    // if(numero % 2 == 0) {
    //     parImpar = "Par";
    // } else {
    //     parImpar = "Ímpar";
    // };

    resp.innerText = `${numero} é ${parImpar}`;

    e.preventDefault();
});