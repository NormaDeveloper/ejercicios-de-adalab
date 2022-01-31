const callToApi = (data) => {
  // Llamamos al API
  return fetch(
    'https://beta.adalab.es/ejercicios-extra/api/eshop/v2/cart.json'
  ).then((response) => response.json());
};

export default callToApi;
