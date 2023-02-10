function hora() {
  let data = new Date();
  let horas = data.getHours();
  let minutos = data.getMinutes();
  let segundos = data.getSeconds();
  horas = horas < 10 ? '0' + horas : horas;
  minutos = minutos < 10 ? '0' + minutos : minutos;
  segundos = segundos < 10 ? '0' + segundos : segundos;
  let time = horas + ':' + minutos + ':' + segundos;
  console.log(time);
}

setInterval(hora, 1000);
