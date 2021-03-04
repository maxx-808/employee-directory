import React, { Component } from "react";
import { Link } from "react-router-dom";
import Employees from "../employee/employees";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Employee Directory
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <p id="sort" className="nav-link">
                Sort By:
              </p>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/g">
                Gender
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/l">
                Last Name
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/o">
                Experience over 10 years
              </Link>
            </li>
          </ul>
          <div>
            <button onClick={() => window.location.reload(false)}>
              CLICK TO RELOAD
            </button>
            <Employees />
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
