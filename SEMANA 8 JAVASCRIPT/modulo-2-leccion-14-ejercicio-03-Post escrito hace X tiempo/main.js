'use strict';

//  Vamos a realizar el típico mensaje que aparece en un blog con la información de hace cuanto se escribió un post. Por ejemplo, con el texto: "escrito hace 30 segundos". Al principio escribiremos en pantalla "escrito hace 1 segundo" e iremos aumentando el número de segundos. Cuando lleve más de 59 segundos queremos que ponga "escrito hace 1 min".

const msg = document.querySelector('.msg');
let count = 0;

const incrementCount = () => {
  count++;
  renderCount();
};

const renderCount = () => {
  if (count < 60) {
    msg.innerHTML = `Post escrito hace ${count} segundos`;
  } else if (count > 60) {
    msg.innerHTML = `Post escrito hace ${Math.round(count / 60)} minuto(s)`;
  }
  // else if (count >= 3600) {
  //   msg.innerHTML = `Post escrito hace ${Math.round(count / 3600)} horas`;
  // }
};
setInterval(incrementCount, 1000);
