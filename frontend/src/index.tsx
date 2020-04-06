import React from 'react';
import ReactDOM from 'react-dom';
import {Provider}from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";


import App from './components/app/App';
import ErrorBoundary from "./error-boundary/errorBoundary";
import { BookStoreServiceProviderBooks } from './bookStore-service-context/bookStore-service-context';
import ApiServiceBookStore from './services/api-service';

import store from "./store";

const {getPrintingEditions} = new ApiServiceBookStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <BookStoreServiceProviderBooks value={{
          actions:{
            getBooks:getPrintingEditions()
          }
        }}>
          <Router>
            <App />
          </Router>
        </BookStoreServiceProviderBooks>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
