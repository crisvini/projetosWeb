/*Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas*/

function swap(json){
    var retorna = {};
    for(var chave in json){
        retorna[json[chave]] = chave;
    }
    return retorna;
  }

console.log(swap({a: 1, b: 2, c: 3}))