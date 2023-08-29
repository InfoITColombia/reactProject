import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
import './index.css';
import './styles/login.css';
//import { App } from './App';
import './styles/dashboard.css';
import  App  from './App';
import 'bootstrap/dist/css/bootstrap.css';
//import App from './App';

ReactDOM.render(
<Router basename='/'>
  <App/>
</Router>,
  document.getElementById("root")
);

