const callToApi = (search) => {
  // Llamamos al API
  return fetch(`https://api.tvmaze.com/search/shows?q=${search}`).then(
    (response) => response.json()
  );
};

export default callToApi;
