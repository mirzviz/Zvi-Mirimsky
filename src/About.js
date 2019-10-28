import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Button } from "react-bootstrap";
import myPhoto from "./assets/me.jpeg";
import myPhoto2 from "./assets/cropped.jpeg";

const About = ({ className }) => {
  return (
    <div className={className}>
      <div className="container-fluid">
        <div className="row bg-light align-items-center">
          <div className="col img height font1 lead d-flex align-items-center justify-content-flex-start">
            <div className="w-50 text-white">
              <div className="h1 text-uppercase mt-4 pl-4 font-weight-bold">
                about
              </div>
              <div className="underline bg-danger"></div>
              <li className="h3 my-5">
                Excellent English communicative skills.
              </li>
              <li className="h3 my-5">
                Quick absorption of new materials and rapid adaptation to
                new situations and challenges.
              </li>
              <li className="h3 my-5">
                Ability to learn new technologies thoroughly and from scratch.
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(About)`
  div,
  li {
    text-shadow: 2px 5px black;
  }
  .img {
    /* min-height: 100vh; */
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.9)
      ),
      url(${myPhoto}) center/cover fixed no-repeat;
    opacity: 1;
    /* filter: blur(5px); */
  }
  /* -------------------------------------- */
  .underline {
    width: 8em;
    height: 8px;
  }
`;
