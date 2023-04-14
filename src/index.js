import React from 'react';
import ReactDOM from 'react-dom/client';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

window.jQuery = $;
window.$ = $;
window.Popper = Popper;
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  
<React.StrictMode>    
  <Provider store={store}>
    <App />
  </Provider>
</React.StrictMode>,

);
  