//Programa Lados de um triângulo
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const ladoA = Number(frm.inLadoA.value);
    const ladoB = Number(frm.inLadoB.value);
    const ladoC = Number(frm.inLadoC.value);


    if(ladoA + ladoB < ladoC || ladoB + ladoC < ladoA || ladoA + ladoC < ladoB) {
        resp1.innerText = "Lados não podem formar um triângulo";
        frm.inLadoA.focus();
        return;
    } else {
        resp1.innerText = "Lados podem formar um triângulo";
        let tipo;
        if(ladoA == ladoB && ladoA == ladoC) {
            tipo = "Equilátero";
        } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
            tipo = "Isósceles";
        } else {
            tipo = "Escaleno";
        };

        resp2.innerText = `Tipo: ${tipo}`;
    };
    
});