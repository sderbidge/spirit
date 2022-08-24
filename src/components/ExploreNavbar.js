import React from "react";
import { Link } from "react-scroll";
import "./ExploreNavbar.css";

export default function ExploreNavbar() {
  return (
    <>
      <nav className="explore-navbar">
        <div className="explore-navbar-container">
          <ul className="explore-nav-menu">
            <li className="explore-nav-item" style={{ cursor: "pointer" }}>
              <Link
                to="trailer"
                className="explore-nav-links"
                spy={true}
                smooth={true}
                offset={-2000}
                duration={400}
              >
                Trailer
              </Link>
            </li>
            <li className="explore-nav-item" style={{ cursor: "pointer" }}>
              <Link
                to="old-testament"
                className="explore-nav-links"
                spy={true}
                smooth={true}
                offset={-110}
                duration={400}
              >
                Old Testament
              </Link>
            </li>
            <li className="explore-nav-item" style={{ cursor: "pointer" }}>
              <Link
                to="new-testament"
                className="explore-nav-links"
                spy={true}
                smooth={true}
                offset={-130}
                duration={400}
              >
                New Testament
              </Link>
            </li>
            <li className="explore-nav-item" style={{ cursor: "pointer" }}>
              <Link
                to="book-of-mormon"
                className="explore-nav-links"
                spy={true}
                smooth={true}
                offset={-130}
                duration={400}
              >
                Book of Mormon
              </Link>
            </li>
            <li className="explore-nav-item" style={{ cursor: "pointer" }}>
              <Link
                to="doctrine"
                className="explore-nav-links"
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}
              >
                Doctrine and Covenants
              </Link>
            </li>
            <li className="explore-nav-item" style={{ cursor: "pointer" }}>
              <Link
                to="prophet"
                className="explore-nav-links"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                Prophet's Witness
              </Link>
            </li>
            <li className="explore-nav-item" style={{ cursor: "pointer" }}>
              <Link
                to="next"
                className="explore-nav-links"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                What's Next
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
