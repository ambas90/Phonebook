import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/app/App';
import './index.css';
import { Provider } from 'react-redux';
import { persist, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
