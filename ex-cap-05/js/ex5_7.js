//Programa Js Fánrica de estrelas
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numSimb = Number(frm.inNum.value);

    let estrelas = "";
    for(let i = 1; i <= numSimb; i++) {
        if(i % 2 == 1) {
            estrelas += "*";
        } else {
            estrelas += "-";
        }
    }

    resp.innerText = estrelas;

});