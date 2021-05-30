const debounce = require('lodash.debounce');
import './sass/main.scss';
import getRefs from './js/refs.js';
import fetchCountries from './js/fetchCountries.js';
import countriesListTpl from './templates/countriesListTpl.hbs'
import countryCardTpl from './templates/countryCardTpl.hbs'
const refs = getRefs();
