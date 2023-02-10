function sleep(valor) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(valor);
    }, 3000);
  }).then((resultado) => {
    console.log(resultado);
  });
}
sleep(20);
