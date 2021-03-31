/* Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

function vetorIntervalo(vetorNumeros){
    let qntdIntervalo = 0
    let qntdFora = 0
    for(let i = 0; i < vetorNumeros.length; i++){
        if(vetorNumeros[i] >= 10 && vetorNumeros[i] <= 20){
            qntdIntervalo++
        }else{
            qntdFora++
        }
    }
    console.log(`${qntdIntervalo} números no intervalo e ${qntdFora} números fora do intervalo.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 21]
vetorIntervalo(vetor)