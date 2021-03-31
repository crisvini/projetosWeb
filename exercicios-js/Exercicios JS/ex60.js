/*Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
deverá ser de duas casas decimais, arredondando se necessário.*/

let areaTriangulo = (base, altura) => (base * altura) / 2

console.log(`Área do Triângulo: ${areaTriangulo(10, 5).toFixed(2)} unidades de medida quadradas`)