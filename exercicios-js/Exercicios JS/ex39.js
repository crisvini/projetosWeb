/*Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.*/

function troca(vetor1, vetor2){
    console.log(`Vetor 1 inicial: ${vetor1}`)
    console.log(`Vetor 2 inicial: ${vetor2}`)
    vetor1.unshift(...vetor2)
    vetor2.unshift(...vetor1)
    for(let i = 1; i <= vetor2.length; i++){
        vetor1.pop()
        vetor2.pop()
        vetor2.shift()
    }
    console.log(`Vetor 1 final: ${vetor1}`)
    console.log(`Vetor 2 final: ${vetor2}`)
}

vet1 = [1, 2, 3, 4, 5]
vet2 = [6, 7, 8, 9, 10]
troca(vet1, vet2)