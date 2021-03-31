/*Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

function fazMedia(cod, nota1, nota2, nota3){
    let nota = []
    nota.push(nota1)
    nota.push(nota2)
    nota.push(nota3)
    nota.sort((a,b) => a < b ? 1 : -1)

    let media = (nota[0] * 4 + nota[1] * 3 + nota[2] * 3) / 10
    return `Código do Aluno: ${cod} Notas: ${nota1}, ${nota2}, ${nota3} Aluno ${media >= 5 ? 'aprovado!' : 'reprovado.'}`
}

console.log(fazMedia(832382, 2, 10, 4))
