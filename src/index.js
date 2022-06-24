import './style.css';
import addAPICountries from '../modules/addapicountries.js';
import retrieveCountries from '../modules/retrievecountries.js';
import addhtmlCountry from '../modules/addhtmlcountry.js';

const submitScore = document.querySelector('.submit');
const refreshScores = document.getElementById('refresh');

submitScore.addEventListener('click', (e) => {
  e.preventDefault();
  const country = document.getElementById('country');
  const points = document.getElementById('points');
  addAPICountries(country.value, points.value);
  addhtmlCountry(country.value, points.value);
  country.value = '';
  points.value = '';
});

const refresh = () => {
  document.querySelectorAll('.li-country').forEach((e) => e.remove());
  const rankingFIFA = retrieveCountries();
  rankingFIFA.then((value) => {
    value.result.sort((a, b) => b.score - a.score);
    value.result.forEach((e) => {
      addhtmlCountry(e.user, e.score);
    });
  });
};
refresh();

refreshScores.addEventListener('click', () => {
  refresh();
});
