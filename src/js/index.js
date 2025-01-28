const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const produtos = document.querySelectorAll(".produto");
let produtoAtual = 0;

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