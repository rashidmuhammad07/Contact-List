import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = props => {
  let { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="nav-bar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav=item">
              <Link to="/" className="nav-link">
                <FontAwesomeIcon icon="home" />
                Home
              </Link>
            </li>
            <li className="nav=item">
              <Link to="/contacts/add" className="nav-link">
                <FontAwesomeIcon icon="plus" />
                Add
              </Link>
            </li>
            <li className="nav=item">
              <Link to="/about" className="nav-link">
                <FontAwesomeIcon icon="question-circle" />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "Contact Manager :) "
};

Header.propTypes = {
  branding: propTypes.string.isRequired
};

export default Header;
