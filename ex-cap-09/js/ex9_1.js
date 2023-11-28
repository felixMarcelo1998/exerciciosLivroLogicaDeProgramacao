//Programa Loja de Esportes
/*
const frm = document.querySelector("form");
const inClube = document.querySelector("#imgClube");
const dvTitulo = document.querySelector("#divTitulo");

const trocaClube = () => {
    let clube; //variável que irá receber o nome do clube

    if(frm.rbBrasil.checked) {  //verifica qual radiobutton está selecionado
        clube = "Brasil";
    } else if (frm.rbPelotas.checked) {
        clube = "Pelotas";
    } else {
        clube = "Farroupilha";
    };

    //define as classes de dvTitulo: row e cores do cliente
    dvTitulo.className = `row cores-${clube}`;

    //modifica a imagem de acordo com a seleção do cliente
    imgClube.src = `img/${clube.toLowerCase()}.png`;
    imgClube.className = "img-fluid";   //muda o estilo para exibir a imagem
    imgClube.alt = `Símbolo do ${clube}`;   //modifica atributo alt

    localStorage.setItem("clube", clube); //salva no navegador a escolha do cliente

};

const verificaClube = () => {
    if(localStorage.getItem("clube")) { //se já tiver salvo algum clube
        const clube = localStorage.getItem("clube"); //obtém o nome do clube
        
        if(clube == "Brasil") { // conforme o clube, marca checked
            frm.rbBrasil.checked = true;
        } else if(clube == "Pelotas") {
           frm.rbPelotas.checked = true; 
        } else {
            frm.rbFarroupilha.checked = true;
        };
        trocaClube(); //chama function que troca imagem e cores=
    }
}

//associa ao evento change de cada botão do form a função trocaClube
frm.rbBrasil.addEventListener("change", trocaClube);
frm.rbPelotas.addEventListener("change", trocaClube);
frm.rbFarroupilha.addEventListener("change", trocaClube);

//ao carregar a página, verifica se cliente já selecionou clube anteriormente
window.addEventListener("load", verificaClube);
*/

const frm = document.querySelector("form");
const imClube = document.querySelector("#imgClube");
const dvTitulo = document.querySelector("#divTitulo");

const trocaClube = () => {
    let clube;

    if(frm.rbBrasil.checked) {
        clube = "Brasil";
    } else if(frm.rbPelotas.checked) {
        clube = "Pelotas";
    } else {
        clube = "Farroupilha";
    };

    dvTitulo.className = `row cores-${clube}`;

    imClube.src = `img/${clube.toLowerCase()}.png`;
    imClube.className = "img-fluid";
    imClube.alt = `Símbolo do ${clube}`;

    localStorage.setItem("clube", clube);
};

const verificarClube = () => {
    if(localStorage.getItem("clube")) {
        const clube = localStorage.getItem("clube");

        if(clube == "Brasil") {
            frm.rbBrasil.checked = true;
        } else if(clube == "Pelotas") {
            frm.rbPelotas.checked = true;
        } else {
            frm.rbFarroupilha.checked = true;
        };
        trocaClube();
    }
}

window.addEventListener("load", verificarClube);

frm.rbBrasil.addEventListener("change", trocaClube);
frm.rbPelotas.addEventListener("change", trocaClube);
frm.rbFarroupilha.addEventListener("change", trocaClube);
