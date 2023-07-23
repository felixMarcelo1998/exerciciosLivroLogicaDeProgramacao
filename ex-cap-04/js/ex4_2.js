//Código Js para o progema cálculo de peso ideal

//MINHA RESPOSTA
//cria referencia
const frm = document.querySelector("form");
const respPesoIdeal = document.querySelector("h3");

//"ouvinte do evento"
frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value; //obtém valores do form
    const altura = Number(frm.inAltura.value);
    const masculino = frm.inMasculino.checked;

    let peso;// declaração da variável
    if(masculino) { //ou (masculino == true)
        peso = 22 * Math.pow(altura, 2);  //Math.pow eleva ao quadrado      
    } else {
        peso = 21 * Math.pow(altura, 2);
    }

    //apresenta resposta
    respPesoIdeal.innerText = `${nome}, seu peso ideal é ${peso.toFixed(2)}Kg.`;

    e.preventDefault();
});

frm.addEventListener("reset", () => {
    respPesoIdeal.innerText = "";
});
