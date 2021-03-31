/*Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. */

function arrayArray(obj){
    obj = Object.entries(obj)
    console.log(obj)
}

let carro = {
    placa: "1️⃣2️⃣3️⃣4️⃣",
    cor: "⬛",
    ano: 1995,
    rodas: "aro 18"
}

arrayArray(carro)