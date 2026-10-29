// ex02.js
function mostrarBoasVindas() {
  console.log("Bem-vindo ao sistema!");
}

function mostrarDespedida() {
  console.log("Até logo! Volte sempre.");
}

function executarMensagem(callback) {
  callback();
}

executarMensagem(mostrarBoasVindas);
executarMensagem(mostrarDespedida);