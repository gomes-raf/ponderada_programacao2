1 - (a)
2 - (a)
3 - (b)
4 - (d)
5 - (b)
6 - (a)

7 - O pseudocódigo requisitado é a seguinte:
definir produto 1 = 20
definir produto 2 = 40
definir total = (produto 1 + produto 2)

se (total < 50) {
    imprima("Frete não disponível")
} senão se (total >= 50 e total <= 199.99) {
    imprima("Frete com custo adicional")
} senão {
    imprima("Frete grátis!")
};

8 - O sistema de classes e herança descrito pode ser feito em pseudocódigo da seguinte maneira:
Classe Veiculo:
Método Construtor(modelo, ano):
Definir este.modelo = modelo
Definir este.ano = ano

Método CalcularConsumo(): 

Classe Moto herda de Veículo:
Método Construtor(modelo, ano, eficiencia) {
Chamar Super(modelo, ano)
Definir este.eficiencia = eficiencia
}

Método CalcularConsumo(quilometragem):
Definir consumo = quilometragem / este.eficiencia;
Retornar consumo

Classe Carro herda de Veículo:
Método Construtor(modelo, ano, eficiencia) {
Chamar Super(modelo, ano)
Definir este.eficiencia = eficiencia
}

Método CalcularConsumo(quilometragem):
Definir consumo = quilometragem / este.eficiencia;
Retornar consumo

9 - O pseudocódigo que simula o cenário descrito é o seguinte:
Definir velocidade
Definir desaceleracao
Definir tempo = 0
Definir velocidadeInicial

Definir desaceleracaoMinima
Definir tempoMaximo

Enquanto desaceleracao > desaceleracaoMinima e tempo < tempoMaximo {
velocidade = velocidadeInicial - desaceleracao * tempo

Se velocidade <= velocidadeSegura:
Imprima("A nave atingiu a velocidade segura em", tempo, "segundos")
}

Se desaceleracao < desaceleracaoMinima:
Imprima("Erro no pouso")

Se tempo > tempoMaximo:
Imprima("Erro no pouso")

tempo = tempo + 1

10 - A função que multiplica as matrizes é a seguinte:
``` javascript
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
``` 
