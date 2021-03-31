/*Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/

function media(vetorNumero){
    let soma = 0
    for(let i = 0; i < vetor.length; i++){
        soma += vetorNumero[i]
    }
    return soma/vetorNumero.length
}

vetor = [1, 2, 3, 4, 5]

console.log(media(vetor))