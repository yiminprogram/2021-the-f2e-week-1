import React from 'react';
import { render } from 'react-dom';
import Travel from './Travel';
import { HashRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './store/store';

render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Global styles={GlobalStyle} />
          <Travel />
        </ThemeProvider>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
