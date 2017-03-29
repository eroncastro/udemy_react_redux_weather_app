/*
  Middleware - function that take an action an depending on the action type or payload,
  it can let the action pass, manipulate it, log it or stop it before it reaches
  a reducer.
*/

import axios from 'axios';

const API_KEY = '4010ea781a470de30eb33b7061c91a2f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}