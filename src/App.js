import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Middler from "./Middler";
import About from "./About";
import ImageComp from "./ImageComp";
import { media } from "./helper/helperFunctions";

const App = ({ className }) => (
  <div className={className}>
    <Header></Header>
    <Middler></Middler>
    <About></About>
  </div>
);

export default styled(App)`
  h1,
  .h1 {
    font-size: 7vmin;
  }
  h2,
  .h2 {
    font-size: 6vmin;
  }
  h3,
  .h3 {
    font-size: 5vmin;
  }
  h4,
  .h4 {
    font-size: 3vmin;
  }
  h5,
  .h5 {
    font-size: 2vmin;
  }
  p,
  li {
    font-size: 3.5vmin;
  }

  ${media.phone`
        h1, .h1{
        font-size: 8vmin;
        }
        h2, .h2{
        font-size: 6vmin;
        }
        h3, .h3{
        font-size: 4vmin;
        }
        h4, .h4{
        font-size: 2vmin;
        }
        h5, .h5{
        font-size: 1vmin;
        }
        p, li{
          font-size: 2.5vmin;
        }
`}

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
`;
