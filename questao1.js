// Solicita os dados do usuário
let nome = prompt("Digite o nome do motorista:");
let tipoCombustivel = Number(prompt("Tipo de combustível (1-Gasolina, 2-Etanol, 3-Diesel):"));
let distancia = Number(prompt("Distância percorrida (km):"));
let litros = Number(prompt("Litros abastecidos:"));

let consumoEsperado;

// Define o consumo esperado usando switch/case
switch (tipoCombustivel) {
    case 1:
        consumoEsperado = 12.0; // Gasolina
        break;
    case 2:
        consumoEsperado = 8.5; // Etanol
        break;
    case 3:
        consumoEsperado = 15.0; // Diesel
        break;
    default:
        console.log("Combustível inválido.");
        throw new Error("Encerrando programa.");
}

// Calcula o consumo real
let consumoReal = distancia / litros;

let avaliacao;

// Avaliação usando switch(true)
switch (true) {
    case consumoReal >= consumoEsperado * 1.10:
        avaliacao = "Excelente --- acima do esperado";
        break;

    case consumoReal >= consumoEsperado * 0.90:
        avaliacao = "Regular --- dentro do esperado";
        break;

    case consumoReal >= consumoEsperado * 0.70:
        avaliacao = "Ruim --- abaixo do esperado";
        break;

    default:
        avaliacao = "Crítico --- veículo requer manutenção";
}

// Operador ternário para status da frota
let status = (avaliacao.startsWith("Excelente") || avaliacao.startsWith("Regular"))
    ? "LIBERADO PARA FROTA"
    : "ENCAMINHADO PARA REVISÃO";

// Exibição dos resultados
console.log("Motorista:", nome);
console.log("Consumo esperado:", consumoEsperado.toFixed(2), "km/L");
console.log("Consumo real:", consumoReal.toFixed(2), "km/L");
console.log("Avaliação:", avaliacao);
console.log("Status:", status);