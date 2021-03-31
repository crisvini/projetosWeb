/*Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/


function conta(a = 0, b = 0){

    let som = a + b
    let sub = a - b
    let div = a / b
    let mult = a * b

    return {

        som,
        sub,
        div,
        mult

    }
}

console.log(conta(10, 2))
