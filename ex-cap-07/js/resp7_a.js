//Programa Criptografia
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const mensagem = (frm.inMensagem.value).toLowerCase();

    let posPar = "";
    let posInpar = "";

    for(let i = 0; i < mensagem.length; i++) {
        if(i % 2 == 0) {
            posPar += mensagem.charAt(i);
        } else {
            posInpar += mensagem.charAt(i);
        };
        
    };
    
    const menCript =  posInpar + posPar;
    resp.innerText = menCript;

    frm.inMensagem.focus();
    frm.inMensagem.value = menCript;
    
});

frm.btDescriptografar.addEventListener("click", () => {
    // verifica se as validações do form estão ok (no caso, mensagem is required)
  if (!frm.checkValidity()) {
    alert("Informe a mensagem criptografada")
    frm.inMensagem.focus() // posiciona o cursor no campo
    return; // retorna ao form
  };

  const mensagem = frm.inMensagem.value.toLowerCase();
  const menPrt1 = mensagem.substr(0, mensagem.length / 2);
  const menPrt2 = mensagem.substr(mensagem.length / 2);
  
  let menDescript = "";
  if(mensagem.length % 2 == 0) {
    for(let i = 0; i < menPrt2.length; i++) {
      menDescript += menPrt2.charAt(i);
      menDescript += menPrt1.charAt(i);
    };
  } else {
    for(let i = 0; i < menPrt2.length - 1; i++) {
      menDescript += menPrt2.charAt(i);
      menDescript += menPrt1.charAt(i);
    };

    menDescript += menPrt2.charAt(menPrt2.length - 1);
  };

  resp.innerText = menDescript;

  frm.reset();
  frm.inMensagem.focus();

});
