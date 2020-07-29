import {combineReducers, Action} from 'redux';
import startReducer from './start/reducer';
import cartReducer from './cart/reducers';
import {key as startKey} from './start/actions';
import {key as cartKey} from './cart/actions';

const appReducer = combineReducers({
  [startKey]: startReducer,
  [cartKey]: cartReducer,
});

export default function rootReducer(state: {[x: string]: any}, action: Action) {
  return appReducer(state, action);
}
