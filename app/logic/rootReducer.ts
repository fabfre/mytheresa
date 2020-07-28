import {combineReducers, Action} from 'redux';
import startReducer from './start/reducer';
import {key as startKey} from './start/actions';

const appReducer = combineReducers({
  [startKey]: startReducer,
});

export default function rootReducer(state: {[x: string]: any}, action: Action) {
  return appReducer(state, action);
}
