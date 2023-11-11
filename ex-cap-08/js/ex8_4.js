//Programa Pizzaria Avenida - Controle de Pedidos
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const itens = [];

frm.rbPizza.addEventListener("click", () => {
    frm.inBebida.className = "oculta";  //oculta select das bebidas
    frm.inPizza.className = "exibe";  //exibe select das pizzas
});

frm.rbBebida.addEventListener("click", () => {
    frm.inPizza.className = "oculta";
    frm.inBebida.className = "exibe";
});

frm.inDetalhes.addEventListener("focus", () => { //quando campo recebe o foco
    if(frm.rbPizza.checked) {  //se radiobuttom rbPiza estiver marcado
        const pizza = frm.inPizza.value // obtem value do item selecionado
        //uso do operador ternário, para indicar o número odo item de sabores
        const num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4;
        //atributo placeholder exibe uma dica de preenchimento do campo
        frm.inDetalhes.placeholder = `Até ${num} sabores`;
    };

});

frm.inDetalhes.addEventListener("blur", () => { //quando campo perde o foco
    frm.inDetalhes.placeholder = ""; //limpa a dica de preenchimento
});

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    let produto;
    if(frm.inPizza.checked) {
        const num = frm.inPizza.selectedIndex;  //obtém n° do item selecionado
        produto = frm.inPizza.options[num].text; //texto do item selecionado
    } else {
        const num = frm.inBebida.selectedIndex;
        produto = frm.inBebida.options[num].text;
    }

    const detalhes = frm.inDetalhes.value;  //conteúdo inDetalhes
    itens.push(produto + " (" + detalhes + " )"); // adimciona ao vetor
    resp.innerText = itens.join("\n");

    frm.reset(); //Limpa o form
    frm.rbPizza.addEventListener(new Event("click")); //dispara click em rbPizza

});