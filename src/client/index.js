import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import MainSection from './components/MainSection';
import OtherSection from './components/OtherSection';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
injectTapEventPlugin();

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={MainSection} />
        <Route path="other" component={OtherSection} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
