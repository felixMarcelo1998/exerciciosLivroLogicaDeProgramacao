//Programa Jogos Eliminatórias
const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const clubes = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nomeClube = frm.inClube.value;
    clubes.push(nomeClube);

    frm.inClube.value = "";
    frm.inClube.focus();

    frm.btListar.dispatchEvent(new Event("click"));
});

frm.btListar.addEventListener("click", () => {
    if(clubes.length == 0) {
        alert("Não há clubes cadastrados!");
        return;
    };

    const lista = clubes.reduce((acc, clube) => acc + clube + "\n", "");

    resp.innerText = `${lista}`;

});

frm.btMontar.addEventListener("click", () => {
    if(clubes.length == 0) {
        alert("Não há clubes cadastrados!");

    } else if (clubes.length % 2 == 1) {
        alert("Não é possivel fazer o chaveamento com essa quantidade de times, adicione mais um!");

    } else {
        const casa = clubes.slice(0, (clubes.length / 2));
        const fora = clubes.slice(clubes.length / 2).reverse();
    
        let montar = "";
        for(let i = 0; i < clubes.length / 2; i++) {
            montar +=  `${casa[i]} x ${fora[i]}\n`;
        };
        
        resp.innerText = montar;
    };

});