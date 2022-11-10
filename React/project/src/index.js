import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import './css/auth.css'

import axios from 'axios'

import Clayful from 'clayful/client-js'

Clayful.config({
  client : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjJiMmEwM2YyNzEwNjM4Njg5YzkzMWY0OWUxNWMzNTJiOTBhNDdjM2JhYmUwNzRlMjYwYzQzZDc0ZTU4MTcxOWIiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjY3OTg2ODI3LCJzdG9yZSI6IlVCUUs5M1hVUVNLNC5ZR0VXTjhaVlI4UUIiLCJzdWIiOiJEQzI2SFIzR1dFOFUifQ.Ou83ecnlvqulDDHcQmQf9UIayZjITVxDTwaHdadxqKA'
})
Clayful.install('request', require('clayful/plugins/request-axios')(axios))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
