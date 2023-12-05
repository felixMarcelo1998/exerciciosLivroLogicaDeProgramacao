const inRadios = document.querySelectorAll("input") // captura tags input da página
const imClube = document.querySelector("#imgClube");
const dvTitulo = document.querySelector("#divTitulo");


const trocaClube = () => {
    const clubes = ["Brasil", "Pelotas", "Farroupilha"]; //vetor com a lista de clubes

    let selecao;
    //percorrer os inRadios para veriaficar qual está selecionado
    for (let i = 0;  i < inRadios.length; i++) {
        if(inRadios[i].checked) {
            selecao = i; //se selecionado, armazena indice do radio selecionado
            break;   // e sai da repetição
        };
    };

    if(selecao <= 2) {  //se selecao <= 2, então torce para algum clube
        dvTitulo.className = `row cores-${clubes[selecao]}`;  //modifica a cor
        //muda a propruiedade src com a imagem do clube selecionado
        imClube.src = `img/${clubes[selecao].toLowerCase()}.png`;
        imClube.className = "img-fluid";  //muda o estilo para exibir a imagem
        imClube.alt = `Símbolo do ${clubes[selecao]}`;  //texto alternativo
        localStorage.setItem("clube", clubes[selecao]);  //salva nodo do clube
    } else {   // selecionou "Nenhum"
        dvTitulo.className = "row"; // tira a classe de cor de divTitulo
        imClube.className = "d-none";  //oculta a imagem
        imClube.alt = "";    // limpa textro alternativo
        localStorage.removeItem("clube"); //temove variável do local storage
    };

};

// percorre os elementos para associar function ao evento change
for (const inRadio of inRadios) {
    inRadio.addEventListener("change", trocaClube);
};

const verificarClube = () => {
    if(localStorage.getItem("clube")) { // se já tiver salvo algum clube
        const clube = localStorage.getItem("clube"); // obtem o nome do clube

        if(clube == "Brasil") {
            inRadios[0].checked = true;
        } else if(clube == "Pelotas") {
            inRadios[1].checked = true;
        } else {
            inRadios[2].checked = true;
        };
        trocaClube(); // cham a função que troca a imagem e cores
    };
};

// ao carregar a página, verifica se cliente já selecionou clube anteriormente
window.addEventListener("load", verificarClube);
