const elementoMensagem = document.getElementById("mensagem");
const botaoConfirmar = document.getElementById("btnConfirmar");

function confirmarAcao() {
  elementoMensagem.textContent = "Ação confirmada!";
}

botaoConfirmar.addEventListener("click", confirmarAcao);