//Programa Nome no Crachá
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// frm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     //obtém o nome informado e retira espaços em branco do início e final da string
//     const nome = frm.inParticipante.value.trim()

//     if(!nome.includes(" ")) { //se o nome não (!) possuir espaço
//         alert("Informe o nome completo");
//         return;
//     };

//     const priEspaco = nome.indexOf(" ");  //posição do primeiro espaço
//     const ultEspaco = nome.lastIndexOf(" "); //posição do segundo espaço

//     //copia nome e sobrenome usando os parâmtros do substr()
//     const cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco);

//     resp.innerText = `Crachá: ${cracha}`; //exibe a resposta

// }); 

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inParticipante.value.trim();

    if(!nome.includes(" ")) {
        alert("Digite o nome completo");
        return;
    };

    const priEspaco = nome.indexOf(" ");
    const ultEspaco = nome.lastIndexOf(" ");

    const cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco);

    resp.innerText = `Crachá: ${cracha}`;
    
    frm.inParticipante.value = " ";
    frm.inParticipante.focus();

});