/*Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

function contaNegativo(vetorNumero){
    let contadorNegativo = ''

    for(let i = 0; i < vetorNumero.length; i++){
        if(vetorNumero[i] < 0){
            contadorNegativo++
        }
    }
    console.log(`Números negativos: ${contadorNegativo}`)
}

vetor = [-1, -2, 3, -4, 5, -6, -7, -9, 10, -11]
contaNegativo(vetor)