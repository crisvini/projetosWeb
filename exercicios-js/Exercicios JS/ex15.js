/*Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.*/

function revenda(automovel){

    let op = 0

    if(automovel == 'hatch'){
        op = 1
    }else if(automovel == 'sedan' || automovel == 'motocicleta' || automovel == 'caminhonete'){
        op = 2
    }else{
        op = 3
    }

    switch (op) {
        case 1:
            return 'Compra efetuada com sucesso!'
        case 2:
            return 'Tem certeza que não prefere este modelo?'
        case 3:
            return 'Não trabalhamos com esse tipo de automóvel aqui!'
    }
}

console.log(revenda('hatch'))