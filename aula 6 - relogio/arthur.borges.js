/*
 *  Script com a lógica do relógio digital.
 *  Modifique este arquivo o quanto for necessário.
 *
 *  DICAS GERAIS:
 *
 *  Você pode implementar a lógica de um relógio utilizando o método Date() do javaScript
 *  para retorna um objeto de data com a hora, os minutos e os segundos atuais.
 *
 *  Depois de computar os valores de hora, minutos e segundos,
 *  atualize o DOM do documento HTML por meio do método atualizarRelogio(). Para isso,
 *  você deve atualizar o texto dos elementos HTML que representam a hora, os minutos e os segundos.
 *
 *  Essa atualização pode ser feita usando o método 'setInterval' do javaScript com intervalos
 *  de 1000ms (1 segundo).
 */

function atualizarRelogio() {
  var data = new Date();
  var h = data.getHours();
  var m = data.getMinutes();
  var s = data.getSeconds();

  document.getElementById("horas").textContent = formata_zero(h);
  document.getElementById("minutos").textContent = formata_zero(m);
  document.getElementById("segundos").textContent = formata_zero(s);
}

function formata_zero(num) {
  if (num <= 9) return "0" + num;
  else return num;
}

/** Chamada da função de atualziarRelogio para funcionar o relógio usando o método 'setInterval'*/
setInterval(atualizarRelogio, 1000);