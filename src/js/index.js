const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const produtos = document.querySelectorAll(".produto");
let produtoAtual = 0;

produtos.forEach((produto) =>{
  produto.addEventListener("click", function(){
   const produtoVirado = produto.querySelector(".produto-virado");

   //virar o cartão
   produto.classList.toggle("virar");
   //mostrar o fundo da carta
    produtoVirado.classList.toggle("mostrar-fundo-produto");

    const descricao = produto.querySelector(".descricao");
    descricao.classList.toggle("esconder");
  });  
});

btnAvancar.addEventListener("click", function () {
  if (produtoAtual === produtos.length - 1) return;

  esconderProdutoSelecionado();

 produtoAtual++;
  mostrarProduto();

});

btnVoltar.addEventListener("click", function () {
  if (produtoAtual === 0) return;

  esconderProdutoSelecionado();

  produtoAtual--;
  mostrarProduto(produtoAtual);
});

function mostrarProduto() {
  produtos[produtoAtual].classList.add("selecionado");
}

function esconderProdutoSelecionado() {
  const produtoSelecionado = document.querySelector(".selecionado");
  produtoSelecionado.classList.remove("selecionado");
}

