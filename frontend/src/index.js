import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {transitions , positions , Provider as AlertProvider } from 'react-alert';
import AlertTemplate from "react-alert-template-basic";
import App from './App';
import store from './Store';

const options = {
  position:positions.BOTTOM_CENTER,
  transition:transitions.SCALE,
  timeout:5000
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <AlertProvider template={AlertTemplate} {...options}>
  <App />
  </AlertProvider>
  </Provider>
  </React.StrictMode>
);
