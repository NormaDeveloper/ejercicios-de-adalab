'use strict';

//  Con JavaScript, crear un código para mostrar una ventana en nuestro navegador una vez transcurridos 15 segundos que ponga "su sesión ha expirado" (creada usando HTML y CSS).

const addMsg = () => {
  const msg = document.querySelector('.js_msg');
  msg.classList.remove('hidden');
};

setTimeout(addMsg, 15000);
