/*Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares*/

function leVetor(vetorNumeros){
    let qntdPar = 0
    let qntdImpar = 0
    for(let i = 0; i < vetorNumeros.length; i++){
        if(vetorNumeros[i] % 2 == 0){
            qntdPar++
        }else{
            qntdImpar++
        }
    }
    console.log(`${qntdPar} números pares e ${qntdImpar} números ímpares.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
leVetor(vetor)