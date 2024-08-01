let valorTotal;
limpar();

function adicionar(){
    //recuperar valores nome do produto, quantidade e valores
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0]; // split separa strings em arrays com um separador (nesse caso o hifen-), como nesse caso são duas coisas escolhe se quero o 0 ou o 1 (antes ou depois do hifen)
    let valorUnitario = produto.split("R$")[1]; // nesse caso n se usou o hifen como separador pq se n ele ia pegar o R$ junto e eu queria só o número msm
    let quantidade = document.getElementById("quantidade").value;
    //calcular o preço
    let subtotal = valorUnitario * quantidade;
    //add no carrinho
    let carrinho = document.getElementById("lista-produtos");
    if (quantidade < 1){
        alert("Adicione uma quantidade válida.")
        return;
     }  else{}
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>  
    </section>`;
    //calcular valor total
    valorTotal = valorTotal + subtotal;
    let campoTotal = document.getElementById("valor-total");
    campoTotal.innerHTML = `<p class="carrinho__total">
    Total: <span class="texto-azul" id="valor-total">R$${valorTotal}</span>
    </p>`;
    document.getElementById("quantidade").value = 0; // pra resetar o campo quantidade a cada elemento adicionado

}

function limpar(){
    valorTotal = 0;
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").innerHTML = "R$ 0";  
}