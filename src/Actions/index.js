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
