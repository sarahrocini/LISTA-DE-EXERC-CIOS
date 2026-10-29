// ex04.js
function verificarNota(nota, callback) {
  callback(nota);
}

function avaliarAluno(nota) {
  if (nota >= 6) {
    console.log(`Nota ${nota}: Aprovado`);
  } else {
    console.log(`Nota ${nota}: Recuperação`);
  }
}

verificarNota(7.5, avaliarAluno);
verificarNota(4.0, avaliarAluno);