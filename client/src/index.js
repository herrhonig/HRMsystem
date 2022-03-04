import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store'
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';
import MontBold from './fonts/Mont-Bold.woff';
import MontRegular from './fonts/Mont-Regular.woff';
import MontSemiBold from './fonts/Mont-SemiBold.woff';
import MontHeavy from './fonts/Mont-Heavy.woff';
import MontLight from './fonts/Mont-Light.woff';
import MontBlack from './fonts/Mont-Black.woff';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Mont';
          font-style: 'Bold';
          font-display: swap;
          font-weight: 400;
          src: local('Mont-Regular'), url(${MontRegular}) format('woff');
          src: local('Mont-SemiBold'), url(${MontSemiBold}) format('woff');
          src: local('Mont-Bold'), url(${MontBold}) format('woff');
          src: local('Mont-Heavy'), url(${MontHeavy}) format('woff');
          src: local('Mont-Light'), url(${MontLight}) format('woff');
          src: local('Mont-Black'), url(${MontBlack}) format('woff');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
  typography: {
    t1: {
      fontFamily: 'Mont-Regular',
      fontSize: '14',
    },
    t2: {
      fontFamily: 'Mont-Regular',
      fontSize: '10',
    },
    h0: {
      fontFamily: 'Mont-SemiBold',
      fontSize: '10',
    },
    h1: {
      fontFamily: 'Mont-Bold',
      fontSize: '36',

    },
    h2: {
      fontFamily: 'Mont-SemiBold',
      fontSize: '20'
    },
    t0: {
      fontFamily: 'Mont-Regular',
      fontSize: '18'
    },
    button: {
      fontFamily: 'Mont-Bold',
      fontSize: '18'
    },
  },
});


axios.defaults.baseURL = 'http://localhost:4000';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
