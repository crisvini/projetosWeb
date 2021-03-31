/*Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.*/

vetorInteiro = [1, 2, 3, 4]
vetorString = ['a', 'b', 'c', 'd']
vetorDouble = [1.2, 3.5, 5.3, 1.7]

vetor = vetorInteiro.concat(vetorString, vetorDouble)

console.log(vetor)
