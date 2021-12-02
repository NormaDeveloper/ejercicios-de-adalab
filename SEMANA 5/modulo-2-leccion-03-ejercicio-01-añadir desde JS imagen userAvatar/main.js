"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";

// Hagamos la lógica para añadir, desde javascript, la imagen userAvatar a la etiqueta de HTML img.

//Usuario que sí tiene imagen
let user__name = document.querySelector(".user__name");
let user = "Bill";
user__name = user === "Bill"; // true

//Usuario que NO tiene imagen:

// Vamos a plantear que userAvatar pueda no contener una URL porque, por ejemplo, cuando el usuario se registró no encontraba ninguna foto y decidió que la subiría en otro momento. Para ello tenemos que cambiar el contenido de userAvatar a comillas vacías let userAvatar = '';. ¡Ahora no debería verse ninguna imagen en la página!

let js_user_avatar = document.querySelector(".js_user_avatar");
const srcAvatar = userAvatar || DEFAULT_AVATAR;

js_user_avatar.innerHTML += `<img src="${srcAvatar}" class="user__avatar js_user_avatar" />`;
