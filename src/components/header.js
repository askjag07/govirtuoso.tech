import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import 'bootstrap/js/dist/collapse'

export default class Header extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-sm navbar-light shadow-sm">
          <div className="container-md">
            <Link className="navbar-brand" to="/">
              <StaticImage
                className="d-inline-block align-middle me-auto me-sm-4"
                src="../images/logo.png"
                alt="Virtuoso"
                height={35}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#homeCollapsableContent"
              aria-controls="homeCollapsableContent"
              aria-expanded="false"
              aria-label="Toggle Menu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="homeCollapsableContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                <li className="nav-item me-2">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item me-2">
                  <Link className="nav-link" to="/about/">
                    About
                  </Link>
                </li>
              </ul>
              <span className="badge bg-secondary">Project Archived</span>
            </div>
          </div>
        </nav>
        <div className="container-md d-grid p-0">{this.props.children}</div>
        <footer className="justify-content-between shadow bg-dark text-center text-white pb-2 pt-3 px-4 row align-items-center">
          <p className="text-start col-sm-5">
            Copyright © 2022 Go Virtuoso! All Rights Reserved.
          </p>
          <span className="text-end col-sm-5">
            <span className="text-end d-inlinems-5 badge bg-danger">
              Project Archived
            </span>
          </span>
        </footer>
      </>
    )
  }
}
