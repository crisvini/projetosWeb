/*Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.*/

function calculadora(valor1, valor2, operacao){

    let resultado = 0

    switch (operacao) {
        case 'soma':
            return resultado = valor1 + valor2 
        case 'subtração':
            return resultado = valor1 - valor2  
        case 'multiplicação':
            return resultado = valor1 * valor2  
        case 'divisão':
            return resultado = valor1 / valor2  
    }
}

console.log(calculadora(10, 2, 'divisão'))