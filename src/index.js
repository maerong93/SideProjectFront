import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './server/auth_service';
import { CookiesProvider } from 'react-cookie';
import axios from 'axios';


const authService = new AuthService();
// axios.defaults.baseURL = "http://127.0.0.1:3000"
// axios.defaults.withCredentials = true;
ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <App authService={authService}/>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

