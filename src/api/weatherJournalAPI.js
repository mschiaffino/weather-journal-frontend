const CITIES_ENDPOINT_URL = `${process.env.REACT_APP_BACKEND_BASE_URL}/cities`;
const OBSERVATIONS_ENDPOINT_URL = `${process.env.REACT_APP_BACKEND_BASE_URL}/observations`;

const APPLICATION_JSON_HEADERS = {
  'Content-Type': 'application/json',
};

async function fetchCities() {
  return fetch(CITIES_ENDPOINT_URL).then(response => response.json());
}

async function postObservation(cityName, observationText) {
  const newObservation = {
    city: cityName,
    text: observationText,
  };

  return fetch(OBSERVATIONS_ENDPOINT_URL, {
    method: 'POST',
    body: JSON.stringify(newObservation),
    headers: APPLICATION_JSON_HEADERS,
  }).then(response => response.json());
}

export { fetchCities, postObservation };
