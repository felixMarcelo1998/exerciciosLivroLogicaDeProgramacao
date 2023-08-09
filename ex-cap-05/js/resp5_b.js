//Programa Criação de Chinchilas
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e)=> {
    e.preventDefault();

    let chinchila = frm.inChinchila.value;
    const anos = Number(frm.inAnos.value);

    if(chinchila >= 2) {
        let acumula = "";
        for(let i = 1; i <= anos; i++) {
            acumula += `${i}º Ano: ${chinchila} Chinchilas\n`;
            chinchila = chinchila * 3;
        };

        resp.innerText = acumula;
    } else {
        resp.innerText = "A menor quantidade de Chincilas\nprecisa ser 2 para reprodução\n(um manho e uma fêmea)"
        frm.inChinchila.value = "";
        frm.inAnos.value = "";
        frm.inChinchila.focus();
    };

});