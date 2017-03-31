/*
  Redux-promise is a middleware, which means it has the ability to stop
  or manipulate actions before they hit a reducer.
  Here, Redux-Promise will unwrap axios request promise before it hits
  our weather reducer.
*/

import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ]; // [city, city, ...]
  }
  return state;
}
