//Programa Números Perfeitos
const frm = document.querySelector("form");
const resp1 =document.querySelector("#outResp1");
const resp2 =document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = Number(frm.inNumero.value); 

    let acumula = "";
    let soma = 0;
    let isPerfect = "";
    
    for(let i = 1; i < num / 2; i++) {
        if(num % i == 0) {
            acumula += i + ",";
            soma += i;

            if(soma + num / 2 == num) {
                isPerfect = `${num} É um Número Perfeito.`;
                resp1.innerText = `Divisores do ${num}: ${acumula}${num / 2} (Soma: ${num})`;
            } else {
                isPerfect = `${num} Não É um Número Perfeito.`;
                resp1.innerText = "";
            };
        };
  
        resp2.innerText = `${isPerfect}`;
    };

    

});