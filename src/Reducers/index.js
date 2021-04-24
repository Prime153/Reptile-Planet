/* eslint-disable no-console */
import {
  lizards,
  snakes,
  tarantulas,
  scorpions,
  accessories,
  articles,
} from 'Data/Species';

const initialState = {
  lizards: [...lizards],
  snakes: [...snakes],
  tarantulas: [...tarantulas],
  scorpions: [...scorpions],
  accessories: [...accessories],
  articles: [...articles],
  basket: [],
  offer: [],
  cityLocation: [],
  total: 0,
  boxView: true,
  error: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_BOX':
      return {
        ...state,
        boxView: action.payload.change,
      };
    case 'SORT_LOW': {
      const compare = (a, b) => a.price - b.price;
      return {
        ...state,
        [action.payload.type]: [
          ...state[action.payload.type].sort(compare),
        ],
      };
    }
    case 'SORT_HIGH': {
      const compare = (a, b) => b.price - a.price;
      return {
        ...state,
        [action.payload.type]: [
          ...state[action.payload.type].sort(compare),
        ],
      };
    }
    case 'SORT_POSITION': {
      const compare = (a, b) => a.id - b.id;
      return {
        ...state,
        [action.payload.type]: [
          ...state[action.payload.type].sort(compare),
        ],
      };
    }
    case 'ADD_TO_CHART': {
      const addedItem = state[action.payload.pageType].find(
        (item) => item.id === action.payload.itemId,
      );

      const existed = state.basket.find(
        (item) => action.payload.itemId === item.id,
      );
      if (existed) {
        if (addedItem.count !== addedItem.stock) {
          addedItem.count += 1;
          return {
            ...state,
            total: state.total + addedItem.price,
          };
        }
        return {
          ...state,
        };
      }

      addedItem.count = 1;

      const newTotal = state.total + addedItem.price;

      return {
        ...state,
        basket: [...state.basket, addedItem],
        total: newTotal,
      };
    }
    case 'REMOVE_ITEM': {
      const itemToRemove = state.basket.find(
        (item) => action.payload.itemId === item.id,
      );
      const newItems = state.basket.filter(
        (item) => action.payload.itemId !== item.id,
      );

      const newTotal =
        state.total - itemToRemove.price * itemToRemove.count;
      return {
        ...state,
        basket: newItems,
        total: newTotal,
      };
    }

    case 'ADD_QUANTITY': {
      const addedItem = state.basket.find(
        (item) => item.id === action.payload.itemId,
      );

      const newTotal = state.total + addedItem.price;
      if (addedItem.count !== addedItem.stock) {
        addedItem.count += 1;
        return {
          ...state,
          basket: [...state.basket],
          total: newTotal,
        };
      }
      return {
        ...state,
      };
    }

    case 'REMOVE_QUANTITY': {
      const addedItem = state.basket.find(
        (item) => item.id === action.payload.itemId,
      );

      const newTotal = state.total - addedItem.price;
      if (addedItem.count !== 1) {
        addedItem.count -= 1;
        return {
          ...state,
          basket: [...state.basket],
          total: newTotal,
        };
      }
      return {
        ...state,
      };
    }

    case 'DRAW_OFFER': {
      const takeData = [
        ...state.lizards,
        ...state.snakes,
        ...state.tarantulas,
        ...state.scorpions,
        ...state.accessories,
      ];

      const random = [];

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 6; i++) {
        const min = 1;
        const max = 44;
        const draw = min + Math.floor(Math.random() * (max - min));
        random.push(draw);
      }
      const removeDuplicates = random.filter(
        (item, pos) => random.indexOf(item) === pos,
      );

      const addToOffer = removeDuplicates.map((drowNumber) =>
        takeData.find((species) => drowNumber === species.id),
      );

      return {
        ...state,
        offer: addToOffer,
      };
    }
    case 'GET_WEATHER':
      return {
        ...state,
        error: false,
        cityLocation: [action.payload.data],
      };
    case 'GET_ERROR':
      return {
        ...state,
        error: true,
      };

    case 'CLEAR_BASKET':
      return {
        ...state,
        basket: [],
        total: 0,
        cityLocation: [],
      };

    default:
      return state;
  }
};

export default rootReducer;
