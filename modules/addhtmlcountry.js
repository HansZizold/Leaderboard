const addhtmlCountry = (country, points) => {
  const countryContainer = document.querySelector('.ul-scores');
  const countryItem = document.createElement('li');
  countryItem.className = 'li-country';
  countryItem.innerHTML += `${country}: ${points}`;
  countryContainer.appendChild(countryItem);
};
export default addhtmlCountry;
