//Código Js do programa Supermercado promoção
const frm = document.querySelector("form");
const respProduto = document.querySelector("h3");
const respPreco = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
    const nomeProduto = frm.inProduto.value;
    const precoProduto = Number(frm.inPreco.value);

    const precoProdutoPromo = precoProduto / 2;
    const precoPromo = (precoProduto * 2) + precoProdutoPromo;

    respProduto.innerText = `${nomeProduto} - Promoção: Leve 3 por R$: ${precoPromo.toFixed(2)}`;
    respPreco.innerText = `O 3º produto custa apenas R$${precoProdutoPromo.toFixed(2)}`;

    e.preventDefault()
});

