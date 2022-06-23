const addAPICountries = async (country, points) => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:zJ3VxmhQ4pXWcmGY0ZoH/scores/', {
      method: 'POST',
      body: JSON.stringify({
        user: country,
        score: points,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const countries = response.json();
    return countries;
  } catch (error) {
    return (error);
  }
};
export default addAPICountries;