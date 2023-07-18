//Programa em Js que converte a dauração de um filme

//cria referência ao form a aos elementos h3 e h4 (resposta)

/* RESPOSTA DO LIVRO

const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

//cria um "ouvinte" de evento quando obotão submit for clicado
frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value;    // obtém conteúdo dos campos
    const duracao = Number(frm.inDuracao.value);
    
    const horas = Math.floor(duracao / 60)  //arredonda para baixo o resultado (Math.trunc tbm funcionaria)
    const minutos = duracao % 60           // obtem o resto da divisão

    resp1.innerText = titulo;
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`;

    e.preventDefault()    // evita envio do form
}); 

*/


//MINHA RESPOSTA
const frm = document.querySelector("form");
const respNomeFilme = document.querySelector("h3");
const respDuracao = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
    const nomeFilme = frm.inTitulo.value;
    const duracao = Number(frm.inDuracao.value);

    const duracaoHoras = Math.floor(duracao / 60);
    const duracaoMinutos = duracao % 60;

    respNomeFilme.innerText = nomeFilme;
    respDuracao.innerText = `O filme dura ${duracaoHoras} hora(s) e ${duracaoMinutos} minuto(s)`;

    e.preventDefault();
});
