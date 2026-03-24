
let nome = prompt("Digite o nome do motorista:");
let tipoCombustivel = parseFloat(prompt("Tipo de combustível (1-Gasolina, 2-Etanol, 3-Diesel):"));
let distancia = parseFloat(prompt("Distância percorrida (km):"));
let litros = parseFloat(prompt("Litros abastecidos:"));
 
let consumoEsperado;


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
}

let consumoReal = distancia / litros;

let avaliacao;

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


console.log("Motorista:", nome);
console.log("Consumo esperado:", consumoEsperado.toFixed(2), "km/L");
console.log("Consumo real:", consumoReal.toFixed(2), "km/L");
console.log("Avaliação:", avaliacao);

avaliacao == "Excelente --- acima do esperado"? console.log("LIBERADO PARA FROTA") : avaliacao == "Regular --- dentro do esperado"? console.log("LIBERADO PARA FROTA") : console.log("ENCAMINHADO PARA REVISÃO")
