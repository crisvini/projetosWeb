/*Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.*/

function calculaAnuidade(mesPago, valor){
    let juros = 0.05
    let totalPagar = calcula(juros, valor, mesPago)
    return totalPagar
    
    function calcula(juros, valor, mesPago){
        if(mesPago == 1){
            return `Total a pagar: R$ ${valor.toFixed(2)}`
        }else if(mesPago < 13 && mesPago > 1){
            return `Total a pagar: R$ ${(valor += (valor * (juros * (mesPago - 1)))).toFixed(2)}`
        }else{
            return "Mês Inválido!"
        }
    }
}

console.log(calculaAnuidade(4, 100))