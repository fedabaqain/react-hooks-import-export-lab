import React from "react";
import * as images from "../data/user";
function Home() {
  return (
    <div id="home">
      <h1>
        {images.username} is a Web Developer from {images.city}
      </h1>
    </div>
  );
}

export default Home;