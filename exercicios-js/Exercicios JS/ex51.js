/*Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array*/

function retornaPrimeiroUltimo(vetor){
    let newVet = [vetor.shift(), vetor.pop()]
    console.log(newVet)
}

let vet = ["true", 2, 3, 4, 'batata']
retornaPrimeiroUltimo(vet)