function prepararPedido(callback) {
  console.log("Preparando pedido...");
  setTimeout(callback, 2000);
}

prepararPedido(() => {
  console.log("Pedido pronto!");
});