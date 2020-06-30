import React from 'react';
import ReactDOM from 'react-dom';
import {Provider}from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import App from './components/app/App';
import ErrorBoundary from "./error-boundary/errorBoundary";

import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
          <Router>
            <App />
          </Router>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
