import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
          <div>
            <nav>
              <div className="nav-wrapper">
                <Link to="/" className="brand-logo">
                  BlogApp
                </Link>
                <a href="#menu"
                  data-target="mobile-demo"
                  className="sidenav-trigger"
                >
                  <i id="menu" className="material-icons">menu</i>
                </a>
                <ul className="right hide-on-med-and-down">
                  <li>
                    <Link className="waves-effect waves-light" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="waves-effect waves-light" to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="waves-effect waves-light" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            <ul
              className="sidenav  deep-orange lighten-3 blue-text text-darken-2"
              id="mobile-demo"
            >
              <li>
                <Link className="waves-effect waves-light" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="waves-effect waves-light" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="waves-effect waves-light" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

          </div>
        );
    }
}
