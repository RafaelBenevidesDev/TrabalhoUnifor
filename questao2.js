let produto = 1;
let total = 0;
let maiorPreco = 0;

while( true ){
    let precoProduto = prompt(`Preço do produto: `);
    let valorFloat = parseFloat(precoProduto);
    if(precoProduto >= "0"){
        total = total + valorFloat;
    };
    console.log(total, produto)
    if(precoProduto == "-1"){
        produto = produto - 1
        break
    }
    if(valorFloat > maiorPreco){
        maiorPreco = valorFloat
    }
    produto++;
}

console.log(`Produtos comprados: ${produto}`);
console.log("Total: R$", total.toFixed(2));
console.log(`Maior Preço: R$ ${maiorPreco}`);
