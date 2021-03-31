/*Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

function classificaDia(dia) {
    
    let op = 0

    if(dia == 1 || dia == 7) op = 1 
        else op = 2

    switch (op) {
        case 1:
            return "Fim de semana"
        case 2:
            return "Dia útil"
    }
}

console.log(classificaDia(1));
console.log(classificaDia(2));
console.log(classificaDia(3));
console.log(classificaDia(4));
console.log(classificaDia(5));
console.log(classificaDia(6));
console.log(classificaDia(7));

