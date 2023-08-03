//Programa HTML Números primos
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = Number(frm.inNum.value);

    let temDivisor = 0;  // declara e inicializa a variável tipo flag
    for(let i = 2; i <= num / 2; i++) {
        if(num % i == 0) { // se tem divisor
            temDivisor = 1; // muda a flag
            break;          //sai da repetição
        };
    };

    if(num > 1 && !temDivisor) {
        resp.innerText = `${num} É Primo`;
    } else {
        resp.innerText = `${num} Não é Primo`;
    };


    // let contDivisores = 0;
    // for(let i = 1; i <= num; i++) {
    //     if(num % i == 0) {
    //         contDivisores++;
    //     };
    // };

    // let priOuN;
    // if(contDivisores == 2) {
    //     priOuN = "É Primo";
    // } else {
    //     priOuN = "Não é Primo";
    // };

    //resp.innerText = `${num} ${priOuN}`;

    frm.inNum.value = "";
    frm.inNum.focus();

});