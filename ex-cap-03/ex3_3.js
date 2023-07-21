//Código Js do programa Quadriênios

//MINHA RESPOSTA 
const prompt = require("prompt-sync")();
const nomeFuncionario = prompt("Qual o nome do funcionário? ");
const salario = Number(prompt("Qual o salário do funcionário: R$"));
const anosDeTrabalho = Number(prompt("Há quanto tempo ele trabalha na empresa (anos): "));

const calcQuadrienios = Math.floor(anosDeTrabalho / 4);
const poscentagem = calcQuadrienios * 1; // quanto porcento a mais ele vai ganhar a cada 4 anos
const calcAcrescimo = salario * poscentagem / 100;
const valorSalarioAtual = salario + calcAcrescimo;

console.log(`\nO funcionário ${nomeFuncionario} trabalha há ${calcQuadrienios} Quadriênios\n
e tem direito a um acrescimo salarial de ${poscentagem}%\n
Protanto o salário atual dele deve ser de R$${valorSalarioAtual.toFixed(2)}`)
