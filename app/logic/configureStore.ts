import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import persistConfig from './persistConfig';
import rootReducer from './rootReducer';

export function configureStore() {
  const persistRootReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistRootReducer);
  const persistor = persistStore(store);

  // @ts-ignore
  global.reduxStore = store;

  return {persistor, store};
}

export function getStore() {
  // @ts-ignore
  if (!global.reduxStore) {
    const {store} = configureStore();
    // @ts-ignore
    global.reduxStore = store;
  }
  // @ts-ignore
  return global.reduxStore;
}
