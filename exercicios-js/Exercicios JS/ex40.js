/* Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.*/

function notas(vetor){
    let conceito = []
    for(let i = 0; i <= vetor.length; i++){
        if(vetor[i] >= 0 && vetor[i] <= 4.9){
            conceito.push('D')
        }else if(vetor[i] >= 5 && vetor[i] <= 6.9){
            conceito.push('C')
        }else if(vetor[i] >= 7 && vetor[i] <= 8.9){
            conceito.push('B')
        }else if(vetor[i] >= 0 && vetor[i] <= 4.9){
            conceito.push('A')
        }
    }
    return conceito
}

let vetorNotas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
let vetorConceito = notas(vetorNotas)
console.log(vetorConceito) 