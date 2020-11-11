import React, {Component} from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
    render() {
       return (
        <div className="header-wrapper">
          <nav className="navbar navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <NavLink to="/" className="navbar-brand">DeCooking</NavLink>
            <NavLink to="/login" className="navbar-brand">Войти</NavLink>
          </nav>
        </div>
       );
    }
}