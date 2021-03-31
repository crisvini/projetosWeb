/*Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números.*/

let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let media = numero.reduce(function(acumulador, atual) {
    return acumulador + atual;
  }, 0)

let mediaSimples = media / numero.length 

console.log(`Média Simples: ${mediaSimples.toFixed(2)}`)