/*
  Redux-promise is a middleware, which means it has the ability to stop
  or manipulate actions before they hit a reducer.
  Here, Redux-Promise will unwrap axios request promise before it hits
  our weather reducer.
*/

export default function(state = null, action) {
  console.log('Action received', action);
  return state;
}
