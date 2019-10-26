import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Button } from "react-bootstrap";

const Header = ({ className }) => {
  return (
    <div className={className}>
      <Container fluid className="">
        <Row className="height bg-dark pt-3 pb-0 px-5 align-items-center">
          <Col className="text-center">
            <a
              href="https://www.linkedin.com/in/zvi-mirimsky-755086159/"
              target="_blank"
            >
              <i className="fab fa-linkedin fa-6x text-primary mx-5"></i>
            </a>
            <a href="https://github.com/mirzviz" target="_blank">
              <i className="fab fa-github fa-6x text-primary mx-5"></i>
            </a>
            <a href="https://www.facebook.com/mirzviz" target="_blank">
              <i className="fab fa-facebook fa-6x text-primary mx-5"></i>
            </a>
            <h1 className="m-5 display-3 text-light text-capitalize">
              <div className="font3 mb-2">Zvi Mirimsky</div>
              <div className="underline bg-danger d-none d-md-block"></div>
              <div className="font2 my-4">Full-Stack Developer</div>
            </h1>
            <div className="font2 m5 display-4 text-light text-capitalize">
              B.Sc. graduate in C. Science from HIT with a GPA of 90.
            </div>

            <ul className="text-left">
              <li className="mt-5 lead text-muted text-light font-weight-bold text-capitalize">
                Back-End Technologies: Node.JS with Express Framework, C# .NET,
                JAVA, Mongo DB, Fire Base, C++, C
              </li>
              <li className="lead text-muted text-light font-weight-bold text-capitalize">
                Front-End Technologies: HTML5, CSS3, JavaScript, React.JS, React
                Router, context, Redux, CSS-in-JS, styled-components, Bootstrap
                4, Responsive Web Design
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default styled(Header)`
  a {
    text-shadow: 2px 5px black;
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
  /* -------------------------------------- */
  .underline {
    width: 8em;
    height: 8px;
    margin: 0 auto;
  }
`;
