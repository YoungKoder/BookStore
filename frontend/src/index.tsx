import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { BookStoreServiceProviderBooks } from './bookStore-service-context/bookStore-service-context';
import ApiServiceBookStore from './services/api-service';
import { PrintingEdition } from './types/printingEdition';

const {getPrintingEditions} = new ApiServiceBookStore();

ReactDOM.render(
  <React.StrictMode>
    <BookStoreServiceProviderBooks value={{
      actions:{
        getBooks:getPrintingEditions()
      }
    }}>
      <App />
    </BookStoreServiceProviderBooks>
  </React.StrictMode>,
  document.getElementById('root')
);
