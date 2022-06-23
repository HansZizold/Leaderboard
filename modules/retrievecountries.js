const retrieveCountries = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:zJ3VxmhQ4pXWcmGY0ZoH/scores/');
    const countries = response.json();
    return countries;
  } catch (error) {
    return (error);
  }
};
export default retrieveCountries;
