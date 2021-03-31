/*Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.*/

function par(numeros) {
    return numeros.filter((numero, indice) => {
        const numeroPar = numero % 2 === 0
        const indicePar = indice % 2 === 0
        return numeroPar && indicePar
    })
    }
    

console.log(par([10, 70, 22, 43]))  