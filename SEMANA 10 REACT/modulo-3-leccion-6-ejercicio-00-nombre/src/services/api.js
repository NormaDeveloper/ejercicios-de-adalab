// Fichero src/services/api.js

const callToApi = (searchWord) => {
  // Llamamos al API
  return fetch(`https://api.tvmaze.com/search/shows?q=${searchWord}`)
    .then((response) => response.json())
    .then((response) => {
      //const result = response.name;

      const result = response.map((serie) => {
        return {
          name: serie.show.name,
        };
      });
      //Retorna la respuesta del servidor en el then de este servicio.
      return result;
    });
};

export default callToApi;
