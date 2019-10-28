import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Button } from "react-bootstrap";
import { symbol } from "prop-types";

const Middler = ({ className }) => (
  <div className={className}>
    <div className='container-fluid'>
      <div className="row height bg-light align-items-start">
        <div className="col col-6 col-lg-3 text-center my-4">
          <i className="fab fa-node-js fa-5x text-dark"></i>
          <h3 className="text-uppercase my-3">node.JS</h3>
          <p className="text-muted font1 text-capitalize">
            with Express Framework
          </p>
        </div>
        <div className="col col-6 col-lg-3 text-center my-4">
          <i className="fab fa-js fa-5x text-dark"></i>
          <h3 className="text-uppercase my-3">java script</h3>
          <p className="text-muted font1 text-capitalize">
            proficient in functional jS and object oriented jS concepts{" "}
          </p>
        </div>
        <div className="col col-6 col-lg-3 text-center my-4">
          <i className="fab fa-react fa-5x text-dark"></i>
          <h3 className="text-uppercase my-3">react.JS</h3>
          <p className="text-muted font1 text-capitalize">
            React Router, context API, Redux
          </p>
        </div>
        <div className="col col-6 col-lg-3 text-center my-4">
          <i className="fab fa-html5 fa-5x text-dark"></i>
          <h3 className="text-uppercase my-3">html5</h3>
          <p className="text-muted font1 text-capitalize"></p>
        </div>
        <div className="col col-6 col-lg-3 text-center my-4">
          <i className="fab fa-css3 fa-5x text-dark"></i>
          <h3 className="text-uppercase my-3">css3</h3>
          <p className="text-muted font1 text-capitalize">
            CSS-in-JS, styled-components, Responsive Web Design
          </p>
        </div>
        <div className="col col-6 col-lg-3 text-center my-4">
          <i className="fas fa-database fa-5x text-dark"></i>
          <h3 className="text-uppercase my-3">Mongo DB</h3>
          <p className="text-muted font1 text-capitalize">
          </p>
        </div>
        <div className="col col-6 col-lg-3 text-center my-4">
          <i className="fab fa-bootstrap fa-5x text-dark"></i>
          <h3 className="text-uppercase my-3">Bootstrap4</h3>
          <p className="text-muted font1 text-capitalize">
          </p>
        </div>
        <div className="col col-6 col-lg-3 text-center my-4">
          <i className="fab fa-java fa-5x text-dark"></i>
          <h3 className="text-uppercase my-3">java</h3>
          <p className="text-muted font1 text-capitalize w-30">
          Great theoretical understanding of OOP 
          and OOD (object-oriented design patterns).
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default styled(Middler)`
i{
  font-size: 8vmin;
}
  .height {
    min-height: 100vh;
  }
  .font1 {
    font-family: "Kalam", cursive;
  }
  .font2 {
    font-family: "Kaushan Script", cursive;
  }
  .font3 {
    font-family: "Alfa Slab One", cursive;
  }
  .underline {
    width: 8em;
    height: 8px;
    margin: 0 auto;
  }
`;
