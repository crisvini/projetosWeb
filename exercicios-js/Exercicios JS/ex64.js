/*Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas.*/

function contaCar(car, str){
    numCar = 0
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) === car){
            numCar++
        }            
    }
    return numCar
}

console.log(contaCar("a", "batata"))