/*Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.*/

function multiplicaVetor(vetor, num){
    retornaVet = []
    vetor.forEach(elemento => {
        retornaVet.push(elemento * num)
    });
    return retornaVet
}

vetorNumero = [1, 2, 3]
let numero = 2

console.log(multiplicaVetor(vetorNumero, numero))