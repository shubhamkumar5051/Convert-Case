import React from "react";
import PropTypes from "prop-types"; //impt
import { Link } from "react-router-dom";
export default function navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          ♻️ {props.title}
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
          </ul>
          <div
            className={`form-check form-switch mx-2 my-3 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input btn-lg"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.toggleButton}
            />
            <label
              className="form-check-label text"
              htmlFor="flexSwitchCheckDefault"
            >
              Dark mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

//props types
navbar.propTypes = {
  title: PropTypes.string.isRequired,
  link1: PropTypes.string.isRequired,
};

//default props
navbar.defaultProps = {
  title: "set title here",
  link1: "give title",
};
