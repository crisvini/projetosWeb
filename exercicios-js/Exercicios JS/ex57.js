/*Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.*/

function soma(numeros) {
    const quantidadeDeNumeros = numeros.length
    return (quantidadeDeNumeros === 0) ? 0 : numeros[0] + soma(numeros.slice(1))
    }
    

console.log(soma([1, 2, 3, 4, 5]))