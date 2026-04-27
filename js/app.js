function adicionar() {
    let produto = document.getElementById("produto").value;
    let quantidade = document.getElementById("quantidade").value;

    let nomeProduto = produto.split("-")[0];
    let valorUnitario = produto.split("R$")[1];

    let preco = quantidade.value * valorUnitario;

    let carrinho = document.getElementById("lista-produtos");

    carrinho.innerHTML =  carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x </span>${nomeProduto}<span class="texto-azul">${valorUnitario}</span>
        </section>
      </section>`


}

function limpar() {
    
}