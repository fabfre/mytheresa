import {key, ADD_TO_CART} from './actions';
import {Action} from 'redux';
import {CartState} from '../../interfaces/states';
import {Discovery} from '../../interfaces/database';

export const initialState: CartState = {
  amount: 0,
  price: 0,
  items: [],
};

export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const item = action.payload as Discovery;
      const newState = {...state};
      newState.items.push(item);
      newState.price += item.popularity;
      newState.amount += 1;
      return newState;
    }
    default:
      return state;
  }
}
