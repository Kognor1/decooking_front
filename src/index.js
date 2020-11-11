
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import './index.css';
//import components
import App from './App';
import Header from './components/header/header';
import SearchLine from './components/search-line/search-line';
import RegistrationPage from "./components/RegistrationPage/js/RegistrationPage";
import ResetPasswordPage from "./components/ResetPasswordPage/js/ResetPasswordPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <>
        <Header />
        <div className=" container wrapper">
          <Route exact path="/" component={SearchLine} />
          <Route path="/login" component={App} />
          <Route exact path="/register" component={RegistrationPage} />
          <Route exact path="/resetPassword" component={ResetPasswordPage} />
        </div>
      </>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
