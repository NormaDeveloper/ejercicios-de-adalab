# Bookmark: Peticiones al servidor I

## Ejercicio 1

Vamos a obtener la lista de bookmarks de un servidor. Para realizar este ejercicios tenemos creado un servidor que devuelve un listado con la información de los enlaces de un usuario en formato `json`:

```js
...

    {
    "id": "16396904232462016",
    "owner": "adalabdigital",
    "url": "https://books.adalab.es/materiales-del-curso-o/XwqEzZ1o5Xgza96sxhld/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion",
    "description": "JS en los materiales de Adalab",
    "module": false,
    "tags": [ "javascript"]
    },

...
```

Prueba la siguiente petición en en tu navegador con tu usuario de GitHub:
https://adalab-bookmarks-api.herokuapp.com/api/bookmarks/tuusuariodegithub

Haz un `fetch` para obtener el lisatdo los enlaces y mostrar en la página de los bookmarks.
