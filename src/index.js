import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PhoneApp from 'components/PhoneApp';
import { Provider } from 'react-redux';
import {store} from 'redux/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <PhoneApp />
    </Provider>
  </React.StrictMode>
);
