/*Faça um algoritmo que calcule o fatorial de um número.*/

const fatorial = (n) => n === 0 || n === 1 ? 1 : n * fatorial(n-1)
console.log(fatorial(4)) 