/*Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130.*/

function plano(idade){
    let valorPlano = 100
    let idade1 = 80
    let idade2 = 50
    let idade3 = 95
    let idade4 = 130

    if(idade < 10){
        return `Valor a ser pago pelo plano: R$ ${(valorPlano + idade1).toFixed(2)}`
    }else if(idade >= 10 && idade <= 30){
        return `Valor a ser pago pelo plano: R$ ${(valorPlano + idade2).toFixed(2)}`
    }else if(idade > 30 && idade < 60 ){
        return `Valor a ser pago pelo plano: R$ ${(valorPlano + idade3).toFixed(2)}`
    }else{
        return `Valor a ser pago pelo plano: R$ ${(valorPlano + idade4).toFixed(2)}`
    }
}

console.log(plano(25))