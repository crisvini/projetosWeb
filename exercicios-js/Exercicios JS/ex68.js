/*Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro.*/

function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
    let resultado = []
    for(numero of numeros){
        const quantidadeDeDigitos = String(numero).length
        if(quantidadeDeDigitos === quantidadeDesejada)
            resultado.push(numero)
    }
    return resultado
    }
    

console.log(filtrarPorQuantidadeDeDigitos([1, 2, 3, 4, 5, 50, 89], 2))