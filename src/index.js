import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App.jsx';
import 'modern-normalize/modern-normalize.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <BrowserRouter basename="/rent-a-car">
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
        {/* </PersistGate> */}
      </BrowserRouter>
    </Provider>
  </>
);
