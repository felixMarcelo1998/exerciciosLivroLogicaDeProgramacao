//Programa Consultório Odontológico
const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = [];
/*
frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inPaciente.value;
    pacientes.push(nome);     //adiciona nome ao final da lista
    let lista = "";           //string para concatenar pacientes
    //for tradicional (inicia em 0, enquanto menor que tamanho do array)
    for(let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]}\n`;
    };

    respLista.innerText = lista;  //exibe a lista de pacientes na página
    frm.inPaciente.value = "";
    frm.inPaciente.focus();

});

//Adiciona um "ouvinte" para o evento click no btUrgrncia que está no form
frm.btUrgencia.addEventListener("click", () => {
    //verifica se as validações do form estão ok(no caso, paciente is required)
    if(!frm.checkValidity()) {
        alert("informe o nome do paciente a ser atendido em caráter de urgência");
        frm.inPaciente.focus();
        return;   // retorna ao form
    }
    const nome = frm.inPaciente.value;
    pacientes.unshift(nome);    //adiciona paciente ao inicio do vetor
    let lista ="";
    //forEach aplicado  sobre o array pacientes
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));
    respLista.innerText = lista;   //exibe a lista de pacientes na página;
    frm.inPaciente.value ="";
    frm.inPaciente.focus(); 
});

frm.btAtender.addEventListener("click", () => {
    //se o tamanho do vetor for igual a 0
    if(pacientes.length == 0) {
        alert("Não há pacientes na lista de espera");
        frm.inPaciente.focus();
        return;
    };
    const atender = pacientes.shift();  //remove do início da fila e obtém o nome
    respNome.innerText = atender;
    let lista = "";
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));
    respLista.innerText = lista;

});
*/

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inPaciente.value;
    pacientes.push(nome);

    let lista = "";
    for(let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]}\n`;
    }

    respLista.innerText = lista;
    frm.inPaciente.value = "";
    frm.inPaciente.focus();
});

frm.btUrgencia.addEventListener("click", () => {
    if(!frm.checkValidity()) {
        alert("Informe o nome do paciênte a ser atendido com urgência");
        frm.inPaciente.focus();
        return;
    };

    const nome = frm.inPaciente.value;
    pacientes.unshift(nome);

    let lista = "";
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));
    
    respLista.innerText =  lista;
    frm.inPaciente.value ="";
    frm.inPaciente.focus();
});

frm.btAtender.addEventListener("click", () => {
    if(pacientes.length == 0) {
        alert("Não há mais pacientes para serem atendidos");
        respNome.innerText = "Nenhum paciente sendo atendido";
        frm.inPaciente.focus();
        return;
    };

    const atende = pacientes.shift();

    let lista = "";
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));

    respNome.innerText = atende;
    respLista.innerText = lista;
    frm.inPaciente.focus();
});