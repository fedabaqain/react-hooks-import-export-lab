import React from "react";
import * as images from "../data/user";
function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={images.image} alt="I made this" />
    </div>
  );
}

export default About;