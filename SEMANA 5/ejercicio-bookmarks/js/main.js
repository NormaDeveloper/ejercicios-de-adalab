"use strict"

const listLinks = document.querySelector(".js_datalist");

const bmk_1_url = "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion";
const bmk_1_desc = "JS en los materiales de Adalab";
const bmk_1_seen = "checked";

const bmk_2_url = "https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/";
const bmk_2_desc = "Ideas de proyectos JS";
const bmk_2_seen = "checked";

const bmk_3_url = "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web"
const bmk_3_desc = "HTML en los materiales de Adalab";
const bmk_3_seen = "";


const section = document.querySelector(".js-section");
const input_search_desc = document.querySelector(".js_in_search_desc");



// Ej. 3 Bonus: Validar la columna de las categorías de los enlaces: Si el enlace no tiene categoría mostraremos el mensaje No tiene categorías

const bmk_1_tags_1 = ''; // javascript
const bmk_1_tags_2 = ''; // HTML
const bmk_2_tags_1 = 'javascript';
const bmk_2_tags_2 = 'portfolio';
const bmk_3_tags_1 = 'HTML';
const bmk_3_tags_2 = 'CSS';

const noTag = `<p class='item__tags'>No tiene</p>`

let ulTags1 =`<ul class="item__tags .js-item-tags">
<li class="item__tag .js-item-tag">${bmk_1_tags_1.toLowerCase()}</li>
<li class="item__tag .js-item-tag">${bmk_1_tags_2.toLowerCase()}</li>
</ul>`

let ulTags2 =`<ul class="item__tags">
<li class="item__tag">${bmk_2_tags_1.toLowerCase()}</li>
 <li class="item__tag">${bmk_2_tags_2.toLowerCase()}</li>
</ul>`

let ulTags3 =`<ul class="item__tags">
<ul class="item__tags ">
    <li class="item__tag">${bmk_3_tags_1.toLowerCase()}</li><li class="item__tag">${bmk_3_tags_2.toLowerCase()}</li>
  </ul>`


  function hasTags () {
  if ((bmk_1_tags_1 === '') && (bmk_1_tags_2 === '')) {
    ulTags1 = noTag;
  }

  else if ((bmk_2_tags_1 === '') && (bmk_2_tags_2 === '')) {
      ulTags2 = noTag;
    }
  
    else if ((bmk_3_tags_1 === '') && (bmk_3_tags_2 === '')) {
      ulTags3 = noTag;
    }
}

hasTags ();

/* Muestra el menú hamburguesa */
const menuDropdown = document.querySelector('.js-menudropdown');
menuDropdown.classList.remove('collapsed');


/*Simulamos que escribe la usuaria en el input */
input_search_desc.value = "materiales";
const descrSearchText = input_search_desc.value;


let html = ''


if (bmk_1_desc.includes(descrSearchText)) {
html = `<li class="data__listitem"> 
<article class="data__item">
  <p class="item__url">
    <a href= ${bmk_1_url} target="_blank" rel="noopener noreferrer">
    ${bmk_1_url.slice(8)} 
    </a>
  </p>
  <p class="item__seen">
    <input type="checkbox" checked name="item_imp_2" id="item_imp_2">
  </p>
  <p class="item__desc">${bmk_1_desc}</p>
  ${ulTags1}
</article>
</li>`;
}


if( bmk_2_desc.includes(descrSearchText) ) {
html += `<li class="data__listitem"> 
<article class="data__item">
  <p class="item__url">
    <a href= ${bmk_2_url} target="_blank" rel="noopener noreferrer">
    ${bmk_2_url.replace("https://", "")}
    </a>
  </p>
  <p class="item__seen">
    <input type="checkbox" checked name="item_imp_2" id="item_imp_2">
  </p>
  <p class="item__desc">${bmk_2_desc.toLowerCase()}</p>
  
  ${ulTags2}
</article>
</li>`;
}


if (bmk_3_desc.includes(descrSearchText)) {
html += `<li class="data__listitem"> 
<article class="data__item">
  <p class="item__url">
    <a href=${bmk_3_url} target="_blank" rel="noopener noreferrer">
     ${bmk_3_url.slice(8)}
    </a>
  </p>
  <p class="item__seen">
    <input type="checkbox" ${bmk_3_seen} name="item_imp_2" id="item_imp_2">
  </p>
  <p class="item__desc">${bmk_3_desc}</p>
  ${ulTags3}
</article>
</li>`;
}



listLinks.innerHTML = html;


/*  Mostrar lista o tabla */

if(section.classList.contains('tableview')) {
  section.classList.remove('tableview');
  section.classList.add('listview');
}
else if (section.classList.contains('listview')){
  section.classList.remove('listview');
  section.classList.add('tableview');
}




