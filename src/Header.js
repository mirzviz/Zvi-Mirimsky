import React from "react";
import styled from "styled-components";
import ScrollableAnchor from "react-scrollable-anchor";

const Header = ({ className }) => {
  return (
    <ScrollableAnchor className={className} id={'header-section'}>
      <div className="container-fluid height mt-5">
        <div className="row height bg-dark pt-3 pb-0 px-5 align-items-center">
          <div className="col text-center">
            <div className="sticky-top">
              <a
                className="mx-3"
                href="https://www.linkedin.com/in/zvi-mirimsky-755086159/"
                target="_blank"
              >
                <i className="fab fa-linkedin fa-3x"></i>
              </a>
              <a
                className="mx-3"
                href="https://github.com/mirzviz"
                target="_blank"
              >
                <i className="fab fa-github fa-3x"></i>
              </a>
              <a
                className="mx-3"
                href="https://www.facebook.com/mirzviz"
                target="_blank"
              >
                <i className="fab fa-facebook fa-3x"></i>
              </a>
            </div>

            <h1 className="m-5 ">
              <div className="h1 text-light text-capitalize font3 mb-2">
                Zvi Mirimsky
              </div>
              <div className="underline bg-danger d-none d-md-block"></div>
              <div className="h2 text-light text-capitalize font2 my-4">
                Full-Stack Developer
              </div>
            </h1>
            <div className="h1 font2 m5 text-light text-capitalize">
              B.Sc. graduate in C. Science from HIT with a GPA of 90.
            </div>

            <ul className="text-left">
              <li className="mt-5 text-muted text-light font-weight-bold text-capitalize">
                Back-End Technologies: Node.JS with Express Framework, C# .NET,
                JAVA, Mongo DB, Fire Base, C++, C
              </li>
              <li className="text-muted text-light font-weight-bold text-capitalize">
                Front-End Technologies: HTML5, CSS3, JavaScript, React.JS, React
                Router, context, Redux, CSS-in-JS, styled-components, Bootstrap
                4, Responsive Web Design
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  );
};

export default styled(Header)`
.row{
  width:100vw;
}
  .height {
    min-height: 100vh;
  }
  i {
    font-size: 7vmin;
  }
  a {
    text-shadow: 2px 5px black;
  }
  /* -------------------------------------- */
  .underline {
    width: 8em;
    height: 8px;
    margin: 0 auto;
  }
`;
