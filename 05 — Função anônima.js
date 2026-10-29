function executarTarefa(callback) {
  callback();
}

executarTarefa(function () {
  console.log("Tarefa concluída");
});