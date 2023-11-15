//Programa Senha Inicial
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

const validarNome = nome => nome.includes(" ");

const obterSobrenome = nome => {
    const ultimoEsp = nome.lastIndexOf(" ");
    const sobreNome = nome.substr(ultimoEsp);

    return sobreNome;
};

const contarVogais = nome => {
    const vogais = nome.match(/[aeiou]/g); //exoressão regular para verificar as vogais
    const numVogais = vogais.length;
    const numFormat = numVogais < 10 ? "0" + numVogais : numVogais;

    return numFormat;
};

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inNome.value.toLowerCase();

    if (!validarNome(nome)) {
        alert("Informe o nome completo do aluno");
        frm.inNome.focus();
        return;
    };
    
    resp.innerText = `Senha Inicial: ${obterSobrenome(nome) + contarVogais(nome)}`;
    
});
