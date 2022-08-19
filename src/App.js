import { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import NavBar from "./NavBar";
import MotionDiv from "./motionDiv";

const navbarStyle = {
  margin: 0,
  padding: 0,
  top: 0,
  background: "rgba(0, 0, 0, 0.7) !important"
};

export default function App() {
  return (
    <div className="App">
      <NavBar
        style={{ navbarStyle }}
        dark
        expand="md"
        fixed="top"
        container="fluid"
      />

      <div className="parallax" />

      <div className="article">
        <MotionDiv></MotionDiv>
      </div>

      <footer>
        <hr></hr>
        <h6>All rights reserved</h6>
        <hr></hr>
      </footer>
    </div>
  );
}
