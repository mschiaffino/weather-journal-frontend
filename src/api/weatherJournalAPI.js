const CITIES_ENDPOINT_URL = `${process.env.REACT_APP_BACKEND_BASE_URL}/cities`;
const OBSERVATIONS_ENDPOINT_URL = `${process.env.REACT_APP_BACKEND_BASE_URL}/observations`;

const APPLICATION_JSON_HEADERS = {
  'Content-Type': 'application/json',
};

async function fetchCities() {
  const response = await fetch(CITIES_ENDPOINT_URL);
  return response.json();
}

async function fetchObservations(cityName) {
  const query = `?city=${cityName}`;
  const response = await fetch(`${OBSERVATIONS_ENDPOINT_URL}${query}`);
  return response.json();
}

async function postObservation(cityName, observationText) {
  const newObservation = {
    city: cityName,
    text: observationText,
  };

  const response = fetch(OBSERVATIONS_ENDPOINT_URL, {
    method: 'POST',
    body: JSON.stringify(newObservation),
    headers: APPLICATION_JSON_HEADERS,
  });

  return response.json();
}

export { fetchCities, fetchObservations, postObservation };
