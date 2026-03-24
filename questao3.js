let nomePassageiro = prompt("Digite seu nome: ");
console.log("1 - Adulto; 2 - Estudante; 3 - Idoso; 4 - Criança menor de 5 anos");

let categoria = parseInt(prompt("Digite o número correspondente a sua categoria: "));

console.log("Destino A: R$45,00; Destino B: R$72,00; Destino C: R$110,00; Destino D: R$138,00");

let destino = prompt("Digite a letra correspondente ao seu destino: ").toLowerCase();

let qntdPassagens = parseInt(prompt("Digite a quantidade de passagens: "));
let desconto;
let valorBase;

switch (categoria) {
  case 1:
    desconto = 0;
    console.log("Sem desconto");
    break;

  case 2:
    desconto = 50;
    console.log("Desconto de 50%");
    break;

  case 3:
    desconto = 50;
    console.log("Desconto de 50%");
    break;

  case 4:
    desconto = 100;
    console.log("Passagem gratuita");
    break;

  default:
    console.log("Categoria inválida");
    break;
}

switch (destino) {
  case "a":
    valorBase = 45;
    console.log("Valor base de R$45,00");
    break;

  case "b":
    valorBase = 72;
    console.log("Valor base de R$72,00");
    break;

  case "c":
    valorBase = 110;
    console.log("Valor base de R$110,00");
    break;

  case "d":
    valorBase = 138;
    console.log("Valor base de R$138,00");
    break;

  default:
    console.log("Destino inválido");
    break;
}

let subTotal = (valorBase * qntdPassagens);
let subFormatado = subTotal.toFixed(2);
let valorDesconto = (subTotal * (desconto / 100));
let descFormatado = valorDesconto.toFixed(2);
let total = (subTotal - valorDesconto);
let totalFormatado = total.toFixed(2)

total < 100? console.log("PAGAMENTO À VISTA") : console.log("PARCELÁVEL EM ATÉ 3X SEM JUROS");

switch (true) {
  case (total == 0):
    console.log("Embarque gratuito liberado.");
    break;

  case (total < 100):
    console.log("Dirija-se ao guichê para pagamento.");
    break;

  case (total < 200):
    console.log("Pagamento via terminal disponível.");
    break;

  case (total >= 200):
    console.log("Atendimento prioritário no guichê VIP.");
    break;
}

console.log(nomePassageiro, `Categoria: ${categoria};`, `Destino: ${destino};`, `Subtotal: R$${subFormatado};`, `Valor desconto: R$${descFormatado};`, `Total à pagar: R$${totalFormatado};`);
