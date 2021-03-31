/*Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.*/

function vetor(vet) {
    return vet.filter(newVet => typeof newVet === "number")
}

console.log((vetor(["batata", 2, 3, "4", 12, "teste"]))) 