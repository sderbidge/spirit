import React from "react";
import ExploreNavbar from "../ExploreNavbar";
import { Element } from "react-scroll";
import "./Explore.css";
import ExploreBody from "./sub-sections/ExploreBody";

function Explore() {
  return (
    <>
      <ExploreNavbar />
      <Element name="trailer">
        <div className="videoWrapper" name="trailer">
          <iframe
            id="explore-trailer"
            src="https://www.youtube.com/embed/zkC8kZb1RdQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </Element>
      <ExploreBody />
    </>
  );
}

export default Explore;
