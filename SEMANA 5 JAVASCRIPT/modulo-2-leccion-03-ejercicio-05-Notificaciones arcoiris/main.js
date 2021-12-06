"use strict";
const divNotification = document.querySelector(".js_div");
const title = document.querySelector(".js_title");
const message = document.querySelector(".js_text");

function differentNotifications() {
  if (divNotification.classList.contains("success")) {
    message.innerHTML = "Los datos son correctos";
    title.innerHTML = "CORRECTO";
  } else if (divNotification.classList.contains("warning")) {
    message.innerHTML = "Tenga cuidado";
    title.innerHTML = "AVISO";
  } else if (divNotification.classList.contains("error")) {
    message.innerHTML = "Ha surgido un error";
    title.innerHTML = "ERROR";
  }
}
differentNotifications();
