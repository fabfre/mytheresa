import {key, START} from './actions';
import {Action} from 'redux';
import {StartState} from '../../interfaces/states';

const initialState: StartState = {
  start: false,
};

export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case START: {
      state.start = true;
      return state;
    }
    default:
      return state;
  }
}
