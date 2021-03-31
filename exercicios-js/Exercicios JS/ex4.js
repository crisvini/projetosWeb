/*Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

function conta(dividendo = 0, divisor = 0){

    let resul = dividendo / divisor
    let resto = dividendo % divisor

    return {

        resul,
        resto

    } 
 
}

console.log(conta(5, 2))