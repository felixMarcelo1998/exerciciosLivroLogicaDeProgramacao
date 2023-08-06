//Programa anos da compa do mundo
//minha resposta
const prompt = require("prompt-sync")();
console.log("-------------\nPrograma Anos de Copa\n-------------");

do {
    const ano = Number(prompt("Digite um ano: "));
    if (ano == 0) {
        console.log("Saindo do Programa...");
        break;
    }else if(ano < 1930) {
        console.log("A Copa não existia, pois sua primeira edição aconteceu em 1930");
       
    } else if (ano == 1942 || ano == 1946) {
        console.log("Os únicos anos em que não houve o evento foram os de 1942 e 1946, devido à Segunda Guerra Mundial.");
    } else if (ano % 4 == 2) {
        console.log(`${ano} Foi ano de Copa. \r`);
        if(ano == 1958 || ano == 1962 || ano == 1970 || ano == 1994 || ano == 2002) {
            console.log("E nesse ano o BRASIL foi campeão");
        };
    };
} while(true);

