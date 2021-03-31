/*Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.*/

let idade = 20
let anos = 365

let contaIdade = (idade, anos) => idade * anos
let dias = contaIdade(idade, anos)
console.log(dias)