//Código Js para programa números decrescentes
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = frm.inNumero.value;

    let conta = `Entre ${numero} e 1: `;
    for(let i = numero; i > 1 ; i--) { //vai contar do número informado até o 2

        conta = conta + `${i}, `;
        //conta = i > 1 ? conta + `${i}, ` : conta + `${i}`; menos eficientes
        // if(i > 1) {                                       pois se for pedido um número grande   
        //     conta = conta + `${i}, `;                     o if...else/ternário será repetido 
        // } else {                                          várias vezes, pesando o programa
        //     conta = conta + `${i}`;                       a melhor forma seria isolar o último número
        // }
        
    }

    resp.innerText = conta + "1."; //como sabemos que o último número sempre será o 1 ja colocamos aqui
});