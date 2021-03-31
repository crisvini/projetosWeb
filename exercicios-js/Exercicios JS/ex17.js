/*Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A - 10%
B - 15%
C - 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

function aumento(plano, salario){
    switch(plano){
        case 'a': return novoSalario = salario + (salario * 0.1)
        case 'b': return novoSalario = salario + (salario * 0.15)
        case 'c': return novoSalario = salario + (salario * 0.2)
        default: return "Opção Inválida!"
    }
}

console.log(aumento('c', 1000))