import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Middler from "./Middler";
import About from './About';
import ImageComp from './ImageComp';

const App = ({ className }) => (
  <div className={className}>
    <Header></Header>
    <Middler></Middler>
    <About></About>
    {/* <ImageComp></ImageComp> */}
  </div>
);

export default styled(App)`
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
