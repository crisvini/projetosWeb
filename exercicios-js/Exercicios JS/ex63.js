/*Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.*/

function contaPalavras(frase){
    let qntPalavras = frase.split(" ")
    return qntPalavras.length
}

console.log(contaPalavras("Olá eu sou o Cristian"))