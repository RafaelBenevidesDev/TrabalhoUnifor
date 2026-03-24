var conta = parseInt(prompt("Selecione seu tipo de conta: \n 1 - Conta Corrente, \n 2 - Conta Poupança, \n 3 - Conta Salário. \nDigite o número que afirma o tipo da sua conta: "));

var controle = false

var saldo = 0
var saqueLimite = 0

switch (true) {
    case (conta == 1):
        controle = true
        console.log("\nTipo de conta escolhida {Conta Corrente}\n");
        saldo = 10000.00;
        saqueLimite = 3000.00;
        break;
    case (conta == 2):
        controle = true
        console.log("\nTipo de conta escolhida {Conta Poupança}\n");
        saldo = 10000.00;
        saqueLimite = 1500.00;
        break;
    case (conta == 3):
        controle = true
        console.log("\nTipo de conta escolhida {Conta Salário}\n")
        saldo = 10000.00;
        saqueLimite = 2000.00;
        break;
    default: console.log("Desculpe mas o valor: ", conta, " não representa nenhuma operação possivel.")
}

if (controle == true) {
    var operation = parseInt(prompt("Agora selecione a operação desejada: \n 1 - Saque, \n 2 - Depósito, \n 3 - Consultar Saldo. \nDigite o número que afrima o tipo de operação: "))
    switch (true) {
        case (operation == 1):
            console.log("\nSeu limite de saque diário é de", saqueLimite.toFixed(2));
            console.log("Sua conta apresenta um saldo de", saldo.toFixed(2), "reais");
            var saque = Number(prompt("\nselecione o valor que deseja retirar ( escreva em duas casas decimais): "))
            switch (true){
                case (saque > saqueLimite):
                    console.log("Desculpe mas esse valor excede o seu limite diário em:");
                    let value001 = saque - saqueLimite;
                    console.log("\n", value001.toFixed(2),"reais")
                    break;
                case (saque < saqueLimite):
                    console.log("\nLiberando as sédulas de dinheiro no valor de", saque.toFixed(2), "reais");
                    console.log("\nestamos efetuando seu pagamento, retire o dinheiro pela saida com o simbolo de 2 moedas abaixo do monitor.");
                    let value002 = saqueLimite - saque;
                    let saldoFinal = saldo - saque
                    console.log("\nAinda é possivel sacar", value002.toFixed(2),"reais do limite diário. \n sua conta ficou com um saldo total de", saldoFinal.toFixed(2), "reais");
                    break;
                default: console.log("Desculpe mas esse valor", saque,"não é aceito pelo computador.")
            }
            break;
        case (operation == 2):
            var deposito = Number(prompt("\nSelecione o valor que deseja depositar: "))
            switch (true) {
                case (deposito > 10000000):
                    console.log("desculpe mas o valor é alto de mais para o caixa eletrônico receber se dirija a um atendente ou gerente para efetuar seu depósito.");
                    break;
                case (deposito < 10000000):
                    console.log("\nInsira as sédulas no icone de seta para cima, para contabilizar o valor");
                    var inserir = prompt("\nDigite: \n sim - Para confirmar a entrada do dinheiro, \n não - para cancelar o deposito. \nResposta: ");
                    if (inserir == "sim") {
                        console.log("\nDepostio efetuado com sucesso");
                        let value003 = parseFloat(saldo + deposito);
                        console.log("O valor na sua conta atualmente é de:", value003.toFixed(2), "reais.")
                    } else if (inserir == "não") {
                        console.log("\nObrigado por usar nosso sitema, operação finalizada, tenha um otimo dia senhor/a");
                    } else {
                        console.log("\na opção selecionada não existe.")
                    }
                    break;
                default: console.log("desculpe mas não é possível indentificar o valor");
            }
            break;
        case (operation == 3):
            console.log("O saldo na conta é de ", saldo.toFixed(2), "reais");
            break;
        default: console.log("Desculpe mas o valor: ", operation, "não representa nenhuma operação possivel.")
    }
    
}