/*Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.*/

function bhaskara(ax2 = 0, bx = 0, c = 0){

    let b = 0

    if (bx < 0){
        b = bx * (-1)
    }else{
        b = bx
    }

    let delta = (Math.sqrt(Math.pow(bx, 2) - 4 * ax2 * c))
    let divisor = 2 * ax2
    let y1 = (b + delta) / divisor /* Soma */
    let y2 = (b - delta) / divisor /* Subtração */
    let resposta = [y1, y2]

    if (delta < 0){
        return 'Delta é negativo'
    }else return resposta 

}

console.log(bhaskara(1, -3, -10))
