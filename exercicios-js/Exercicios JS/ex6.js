/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

const simples = (capIni = 0, ju = 0, tApli = 0) => { return (capIni + (capIni * ju * tApli)) }
const composto = (capIni = 0, ju = 0, tApli = 0) => { return (capIni + (capIni * ju * tApli)) }

console.log(simples(4500, 0.04, 10))
console.log(composto(4500, 0.04, 10))