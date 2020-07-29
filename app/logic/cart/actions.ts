import {Discovery} from '../../interfaces/database';

export const ADD_TO_CART: string = 'add_to_cart';

export const key: string = 'cart';

export function addCartItem(item: Discovery) {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
}
