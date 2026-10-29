function repetirAcao(vezes, callback) {
  for (let i = 1; i <= vezes; i++) {
    callback(i);
  }
}

repetirAcao(5, (x) => {
  console.log(`Execução número ${x}`);
});