//Programa Descubra o Número
const frm = document.querySelector("form");
const respErros = document.querySelector("#outErros");
const respChances = document.querySelector("#outChances");
const respDica = document.querySelector("#outDica");

const erros = []; //vetor de escopo global com números já apostados
const sorteado = Math.floor(Math.random() * 100) + 1;  //num aleatório entre 1 e 100
const CHANCES = 6;  //const com número máximo de chances
/*
frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = frm.inNumero.value;
    if(numero == sorteado) { //acertou
        respDica.innerText = `Parabéns!! Número sorteado: ${sorteado}`;
        frm.btSubmit.disabled = true;   //trocar status dos botões;
        frm.btNovo.className = "exibe";
    } else {
        if(erros.includes(numero)) {  //se número existe no vetor erros (já apostou)
            alert(`Você já apostou o número ${numero}. tente outro...`);
        } else {
            erros.push(numero);   //adiciona número ao vetor
            const numErros = erros.length;  //obtém tamanho do vetor
            const numChances = CHANCES - numErros;  //calcula nº de chances
            //exibe o nº de erros, conteúdo do vetor e nº de chances;
            respErros.innerText = `${numErros} (${erros.join(", ")})`;
            respChances.innerText = numChances;
            if(numChances == 0) {
                alert("Suas chances acabaram...");
                frm.btSubmit.disabled = true;
                frm.btNovo.className = "exibe";
                respDica.innerText = `Game Over!! Número Sorteado ${sorteado}`;
            } else {
                //usa operador ternário oara mensagem de dica
                const dica = numero < sorteado ? "maior" : "menor";
                respDica.innerText = `Dica: tente um número ${dica} que ${numero}`;
            }
        }
    }

    frm.inNumero.value = ""; //limpa campo de entrada
    frm.inNumero.focus();  //posiciona cursor neste campo
});

frm.btNovo.addEventListener("click" , () => {
    location.reload();   //recarrega a página
});
*/

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const numero = Number(frm.inNumero.value);
    if(numero < 1 || numero > 100) {
        alert("Número inválido, tente números entre 1 e 100");
    } else {
        if(numero == sorteado) {
            respDica.innerText = `Parabéns!! O número sorteado foi: ${sorteado}`;
            frm.btSubmit.disabled = true;
            frm.btNovo.className = "exibe";
        } else {
            if(erros.includes(numero)) {
                alert("Número já apostado, tente outro.");
            } else {
                erros.push(numero);
                const numErros = erros.length;
                const numChances = CHANCES - numErros;
                respErros.innerText = `${numErros} (${erros.join(", ")})`;
                respChances.innerText = numChances;
                if(numChances == 0) {
                    alert("Suas chances acabaram!!");
                    respDica.innerText = `Game Over!! O número sorteado foi: ${sorteado}`;
                    frm.btSubmit.disabled = true;
                    frm.btNovo.className = "exibe";
                } else {
                    const dica = numero < sorteado ? "maior" : "menor";
                    respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`;
                }
            }
        }
    }
    
    frm.inNumero.value = "";
    frm.inNumero.focus();
});

frm.btNovo.addEventListener("click", () => {
    location.reload();
});