import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UiFrame from '../components/UiFrame';

function App({ children }) {
  return (
    <MuiThemeProvider>
      <UiFrame>
        {children}
      </UiFrame>
    </MuiThemeProvider>
  );
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
