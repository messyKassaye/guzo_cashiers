import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import theme from './themes/AppTheme'
import { CssBaseline } from '@material-ui/core';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'
import Interceptor from './Interceptor';
import Routes from './routes/route';
import {Provider} from 'react-redux'
import store from './store'
ReactDOM.render(
  <React.StrictMode>
    <CssBaseline>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
        <MuiThemeProvider theme={theme}>
          <Interceptor/>
          <Routes/>
        </MuiThemeProvider>
        </I18nextProvider>
      </Provider>
    </CssBaseline>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
