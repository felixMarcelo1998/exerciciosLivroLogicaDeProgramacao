//Programa Repete Fruta
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fruta = frm.inFruta.value;
    const num = Number(frm.inNumero.value);

    let repFruta = "";
    for(let i = 1; i < num; i++) {
        repFruta += fruta + "*";
    }

    resp.innerText = `${repFruta}${fruta}`

});