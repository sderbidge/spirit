import React from "react";
import { Link } from "react-router-dom";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./ExploreBody.css";

function ScriptureSection({
  src,
  scriptureTitle,
  figure,
  paragraph1,
  paragraph2,
  leftSide,
  darkMode,
  path,
}) {
  return (
    <div className={darkMode ? "dark-container" : ""}>
      <h2 className="scripture-header">{scriptureTitle}</h2>
      <div className="scripture-section-container">
        <div
          className="image-container"
          style={{ display: leftSide ? "" : "none" }}
        >
          <img src={src} />
        </div>
        <div className="text-info">
          <h1 className="figure-header">{figure}</h1>
          <p className="paragraph1">
            <FaQuoteLeft /> {paragraph1}
          </p>
          <p className="paragraph2">
            {paragraph2} <FaQuoteRight />
          </p>
          <Link className="learn-more" to={path}>
            <div className="learn-more-container">
              Learn More About This Era &#62;
            </div>
          </Link>
        </div>
        <div
          className="image-container"
          style={{ display: leftSide ? "none" : "" }}
        >
          <img src={src} />
        </div>
      </div>
    </div>
  );
}

export default ScriptureSection;
