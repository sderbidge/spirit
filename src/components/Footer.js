import React from "react";
import { Link } from "react-router-dom";
import { FaGhost } from "react-icons/fa";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <FaGhost />
      </div>
      <div className="vertical-line"></div>
      <div className="footer-right">
        <div className="left-buttons">
          <Link to="/old-testament">
            <button className="scripture-button">Old Testament</button>
          </Link>
          <Link to="/new-testament">
            <button className="scripture-button">New Testament</button>
          </Link>
        </div>
        <div className="right-buttons">
          <Link to="/book-of-mormon">
            <button className="scripture-button">Book of Mormon</button>
          </Link>
          <Link to="doctrine-and-covenants">
            <button className="scripture-button">Doctrine and Covenants</button>
          </Link>
        </div>
      </div>
      <div className="vertical-line"></div>
    </div>
  );
}
