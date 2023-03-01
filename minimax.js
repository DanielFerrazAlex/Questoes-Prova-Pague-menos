// Na teoria dos sistemas, define-se como elemento minimax de uma matriz o menor elemento da linha onde se
// encontra o maior elemento da matriz. Escreva um algoritmo que leia uma matriz 10 X 10 de números e encontre seu
// elemento minimax, mostrando também sua posição.

let matriz = [];
let maior = 0;
let linhaMaior;
let minimax;
for(let i = 0; i < 10; i++){
    matriz.push([]);
    for(let j = 0; j < 10; j++){
        matriz[i][j] = Math.floor(Math.random() * 1000) + 1;
    }
}
for(let i = 0; i < 10; i++){
    let linha = matriz[i];
    let maxLinha = Math.max(...linha);
    if(maxLinha > maior){
        maior = maxLinha;
        linhaMaior = i;
    }
}
minimax = matriz[linhaMaior].reduce(function(a, b) {
    return Math.min(a, b);
});
console.table(matriz);
console.log(`Maior elemento: ${maior} - linha: ${linhaMaior}`);
console.log(`Elemento minimax: ${minimax}`);