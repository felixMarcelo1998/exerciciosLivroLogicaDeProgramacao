//Código HTML do programa Raiz Quadrada
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const num = Number(frm.inNumero.value);
    const raiz = Math.sqrt(num); //Calcula raiz quadrada do número

    if(Number.isInteger(raiz)) {  //se o valor da raiz for um número inteiro
        resp.innerText = `Raiz: ${raiz}`; //mostra raiz
    } else {
        resp.innerText = `Não há raiz exata para ${num}`; //mostra mensagem
    }

    e.preventDefault();
});