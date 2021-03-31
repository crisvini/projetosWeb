/*Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.*/

let mult = (num1, num2) => num1 >= 0 && num2 >= 0 ? Math.imul(num1, num2): `Insira um número maior ou igual a zero`
console.log(mult(5, 5))