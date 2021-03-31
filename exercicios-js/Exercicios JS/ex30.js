/*Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/

function vet(vetorNumeros){
    let min = Math.min(...vetorNumeros);
    let max = Math.max(...vetorNumeros);


    console.log(min); 
    console.log(max); 
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
vet(vetor)
