/*Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.*/

let despesasDoMes = [{nome: "cinema", categoria: "entretenimento", gasto: 50}, {nome: "mercado", categoria: "alimentacao", gasto: 842.27}, {nome: "faculdade", categoria: "educação", gasto: 1653.61}]

let soma = despesasDoMes.reduce(function(acumulador, atual) {
    return acumulador + atual.gasto;
  }, 0);

console.log(`Gastos totais do mês: R$ ${soma}`)