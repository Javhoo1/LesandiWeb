import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

/*Css*/
import './Css/Default.css'
import './Css/NavBar.css'
import './Css/Footer.css'
import './Css/Login.css'
import './Css/Register.css'
/*Css*/

ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);