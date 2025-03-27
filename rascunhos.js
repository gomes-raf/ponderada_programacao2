/** 
let p = 10;
let q = 3;
let r = 6;

let resultado = (p % q === 1) && (r * 2 > p) || (q + r < p);
console.log(resultado);

const valores = [3, 6, 9, 12, 15];
let produto = 1;

for (let j = 0; j < valores.length; j++) {
  produto *= valores[j];
}

console.log("O produto dos valores é:", produto); 
function analisarCredito1() {
    var compras = [2500, 1200, 800, 100];
    var totalCompras = compras[0];
    var limite = 5000;
    var status = 'aprovado';
    var saldoDisponivel = 0;
    var i = 1;

    do {
        totalCompras += compras[i];
        i++;
    } while (limite >= totalCompras && i < compras.length);

    saldoDisponivel = limite - totalCompras;

    if (saldoDisponivel < 0) {
        status = 'negado';
    }
    console.log(`Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`);
} analisarCredito1();

function analisarCredito2() {
    var compras = [2500, 1200, 800, 100];
    var totalCompras = compras[0];
    var limite = 5000;
    var status = 'aprovado';
    var saldoDisponivel = 0;
    var i = 1;

    while (limite >= totalCompras && i < compras.length) {
        totalCompras += compras[i];
        i++;
    }

    saldoDisponivel = limite - totalCompras;

    if (saldoDisponivel < 0) {
        status = 'negado';
    }
    console.log(`Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`);
} analisarCredito2(); 

const idade = 73;

if (idade >= 18 && idade < 60) {
  console.log("Você é um adulto!");
} else if (idade < 18) {
  console.log("Você é menor de idade!");
} else {
  console.log("Você está na melhor idade!");
} 

var energiaDisponivel = 1200;
var bateriaExtra = 400;
var consumoDispositivos = [300, 600, 500, 200, 400];

for (var i = 0; i < consumoDispositivos.length; i++) {
    var consumo = consumoDispositivos[i];

    if (consumo <= energiaDisponivel) {
        console.log("Dispositivo " + (i+1) + " ligado. Energia restante: " + (energiaDisponivel - consumo));
        energiaDisponivel -= consumo;
    } else if (consumo <= energiaDisponivel + bateriaExtra) {
        console.log("Dispositivo " + (i+1) + " ligado com bateria extra. Energia restante: " + ((energiaDisponivel + bateriaExtra) - consumo));
        energiaDisponivel = 0;
        bateriaExtra -= (consumo - energiaDisponivel);
    } else {
        console.log("Dispositivo " + (i+1) + " não pode ser ligado. Energia insuficiente.");
    }
} 

    function multiplicarMatrizes(matriz1, matriz2) {
        if(matriz1[0].lenght !== matriz2.lenght) {
            console.log("Não é possível realizar a operação")
        } else {
            var linha = matriz1.lenght;
            var colunas = matriz1[0].lenght;
            matrizResultado = (linha, colunas)
        }
        for (i = 0; i < linha; i++) {
            let linha = []
            for (j = 0; j < colunas; j++) {
                linha.push()
            }
            matrizResultado.push(linha)
        }
    }

    
    var matrizA = [[1000, 2000], [1500, 2500]]     
    var matrizB = [[1200, 1800], [1300, 2700]] 

    
const totalInvestimentos = multiplicarMatrizes(matrizA, matrizB);
console.log("Total de investimentos acumulados:");
console.log(totalInvestimentos); **/

function multiplicarMatrizes(matrizA, matrizB) {
    if (matrizA[0].length !== matrizB.length) {
        console.log("Não foi possível realizar a operação");
    }

    var resultado = new Array(matrizA.length);
    for (let i = 0; i < resultado.length; i++) {
        resultado[i] = new Array(matrizB[0].length).fill(0);
    }

    for (let i = 0; i < matrizA.length; i++) {
        for(let j = 0; j < matrizB[0].length; j++) {
            for(let k = 0; k < matrizB.length; k++ ) {
                resultado[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }
    return resultado;
}

var matriz1 = [[1000, 2000], [1500, 2500]];
var matriz2 = [[1200, 1800], [1300, 2700]];
const resultado = multiplicarMatrizes(matriz1, matriz2);

console.log("Total de investimentos acumulados:");
console.log(resultado);