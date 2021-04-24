import axios from 'axios';

export const changeBox = (change) => ({
  type: 'CHANGE_BOX',
  payload: {
    change,
  },
});

export const sortLowHigh = (type) => ({
  type: 'SORT_LOW',
  payload: {
    type,
  },
});

export const sortHighLow = (type) => ({
  type: 'SORT_HIGH',
  payload: {
    type,
  },
});

export const position = (type) => ({
  type: 'SORT_POSITION',
  payload: {
    type,
  },
});

export const addItemToChart = (itemId, pageType) => ({
  type: 'ADD_TO_CHART',
  payload: {
    itemId,
    pageType,
  },
});

export const removeItemFromChart = (itemId) => ({
  type: 'REMOVE_ITEM',
  payload: { itemId },
});

export const addQuantity = (itemId) => ({
  type: 'ADD_QUANTITY',
  payload: { itemId },
});

export const removeQuantity = (itemId) => ({
  type: 'REMOVE_QUANTITY',
  payload: { itemId },
});

export const drawOffer = () => ({
  type: 'DRAW_OFFER',
});

export const clearBasket = () => ({
  type: 'CLEAR_BASKET',
});

export const fetchWeather = (city) => {
  const API = '031d8fd22ed7d945197abf49fae5d2fb';
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`;
  // eslint-disable-next-line func-names
  return async function (dispatch) {
    await axios
      .get(URL)
      .then((response) => {
        dispatch({
          type: 'GET_WEATHER',
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'GET_ERROR',
          payload: error,
        });
      });
  };
};
