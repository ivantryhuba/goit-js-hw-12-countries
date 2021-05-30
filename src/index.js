const debounce = require('lodash.debounce');
import './sass/main.scss';
import fetchCountries from './js/fetchCountries.js';
import countriesListTpl from './templates/countriesListTpl.hbs';
import countryCardTpl from './templates/countryCardTpl.hbs';

import { warning, bigError } from './js/error';

import getRefs from './js/refs.js';
const refs = getRefs();

refs.inputSearchEl.addEventListener('input', debounce(onSearch, 1500));

function onSearch(evt) {
  clearCardCont();
  fetchCountries(evt.target.value.trim()).then(markup);
}

function makeCountryMarkup(country) {
  const markup = countryCardTpl(country);
  refs.cardCont.insertAdjacentHTML('beforeend', markup);
}

function makeCountriesListMarkup(countries) {
  const markup = countriesListTpl(countries);
  refs.cardCont.insertAdjacentHTML('beforeend', markup);
}

function markup(data) {
  if (data.length === 1) {
    clearInput();
    makeCountryMarkup(data);
  }
  if (data.length > 1 && data.length < 10) {
    warning();
    makeCountriesListMarkup(data);
  }
  if (data.length > 10) {
    bigError();
  }
}

function clearInput() {
  refs.inputSearchEl.value = '';
}

function clearCardCont() {
  refs.cardCont.innerHTML = '';
}
