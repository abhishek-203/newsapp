import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg background sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand text-light" to="#">
              ToNews
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-light active" aria-current="page" to="/All">
                    All
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/Politics">
                    Politics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/Education">
                    Education
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/Crime">
                    Crime
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link text-light dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Other
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/Science">
                        Science
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Sports">
                        Sports
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Jokes">
                        Jokes
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Technology">
                        Technology
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Entertainment">
                        Entertainment
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Cricket">
                        Cricket
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link text-light dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Language
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/English">
                        English
                      </Link>
                    </li> 
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Hindi">
                        Hindi
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link text-light disabled" aria-disabled="true">
                    Disabled
                  </a>
                </li> */}
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-dark text-light" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
