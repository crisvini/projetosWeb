/*Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.*/

function mais(num){
    let mais = ''
    for(let i = 0; i < num; i++){
        mais += '+'
    }
    console.log(mais)
}

mais(5)