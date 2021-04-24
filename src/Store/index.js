/* eslint-disable no-underscore-dangle */
import { applyMiddleware, createStore, compose } from 'redux';
import reducer from 'Reducers/index';
import thunk from 'redux-thunk';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    // Ignore write errors;
  }
};

const peristedState = loadState();

const enhancers = [
  applyMiddleware(thunk),
  // Redux dev tools brakes Github Pages on Mobile
  // window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //   window.__REDUX_DEVTOOLS_EXTENSION__(),
];

const store = createStore(
  reducer,
  peristedState,
  compose(...enhancers),
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
