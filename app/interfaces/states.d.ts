import {Discovery} from './database';

export interface StartState {
  start: boolean;
}

export interface CartState {
  amount: number;
  price: number;
  items: Discovery[];
}
