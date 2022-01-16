// Fichero src/services/api.js

const callToApi = () => {
  // Llamamos al API
  return fetch(' https://api.tvmaze.com/search/shows?q=paranormal')
    .then((response) => response.json())
    .then((response) => {
      const result = response;
      //Retorna la respuesta del servidor en el then de este servicio.
      return result;
    });
};

export default callToApi;
