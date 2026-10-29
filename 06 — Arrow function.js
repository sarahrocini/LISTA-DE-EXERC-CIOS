function processarNumero(numero, callback) {
  callback(numero);
}

const testarTriplo = (num) => {
  processarNumero(num, (n) => console.log(`O triplo de ${n} é ${n * 3}`));
};

testarTriplo(3);
testarTriplo(7);
testarTriplo(10);