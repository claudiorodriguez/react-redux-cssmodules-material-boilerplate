import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(preloadedState) {
  const store = createStore(rootReducer, preloadedState, compose(
    (window && window.devToolsExtension) ? window.devToolsExtension() : f => f
  ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
