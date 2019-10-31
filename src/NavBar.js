import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">

        <a className="navbar-brand" href="#">

        </a>

        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
                <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#header-section">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#middler-section">
              Stack
            </a>
            <a className="nav-item nav-link" href="#about-section">
              About me
            </a>
            <a
              className="nav-item nav-link disabled"
              href="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              Contact me
            </a>
          </div>
        </div>

      </nav>

    </div>
  );
};

export default styled(NavBar)`

`;
