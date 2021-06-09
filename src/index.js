import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import CurrentUserProvider from './context/current-user/current-user.context';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <CurrentUserProvider>
          <App />
        </CurrentUserProvider>
      </PersistGate>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);
