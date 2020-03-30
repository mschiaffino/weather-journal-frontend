const CITIES_ENDPOINT_URL = `${process.env.REACT_APP_BACKEND_BASE_URL}/cities`;

async function fetchCities() {
  return fetch(CITIES_ENDPOINT_URL).then(response => response.json());
}

export { fetchCities };
