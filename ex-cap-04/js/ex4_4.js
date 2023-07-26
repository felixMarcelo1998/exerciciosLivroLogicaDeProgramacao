//Código Js do programa de fuso horário
const frm = document.querySelector("form");
const respHora = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const horaBr = Number(frm.inHora.value);
    
    let calcHora = horaBr + 5;
    if(calcHora > 24) {
        calcHora = calcHora - 24;
    };

    respHora.innerText = `Hora na França: ${calcHora.toFixed(2)}`;

    e.preventDefault();
});