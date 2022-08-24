import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Link, Element } from "react-scroll";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="about-hero">
        <h1>About Spirit</h1>
        <Link
          to="about"
          className="bottom-arrow"
          spy={true}
          smooth={true}
          offset={-90}
          duration={400}
        >
          &#8964;
        </Link>
      </div>

      <Element name="about">
        <h1 className="about-header">
          Our Goal is to <span id="strengthen">Strengthen, </span>
          <span id="inspire">Inspire, </span>
          <span id="uplift"> and Uplift.</span>
        </h1>
        <div className="about-container">
          <p className="scripture">
            <FaQuoteLeft /> Wherefore we labored diligently among our people,
            that we might persuade them to come unto Christ, and partake of the
            goodness of God, that they might enter into his rest, lest by any
            means he should swear in his wrath they should not center in, as in
            the provocation in the days of temptation while the children of
            Israel were in the wilderness. <FaQuoteRight /> ( Jacob 1:7 )
          </p>
        </div>
        <div className="about-sub-header">
          <h2>
            We want to influence you and others to come unto Christ as we learn
            of him through the scripture canon from the Church of Jesus Christ
            of Latter-day Saints.
          </h2>
        </div>
        <div className="about-container">
          <p className="scripture">
            <FaQuoteLeft /> Yea, come unto Christ, and be perfected in him, and
            deny yourselves of all ungodliness; and if ye shall deny yourselves
            of all ungodliness, and love God with all your might, mind and
            strength, then is his grace sufficient for you, that by his grace ye
            may be perfect in Christ; and if by the grace of God ye are perfect
            in Christ, ye can in nowise deny the power of God. <FaQuoteRight />{" "}
            ( Moroni 10:32 )
          </p>
        </div>
        <div className="about-sub-header">
          <h2>
            We are greatly influenced by modern day prophets. Listen to
            President Nelson's witness of Jesus Christ
          </h2>
        </div>
        <div className="about-video-container">
          <iframe
            id="about-video"
            src="https://www.youtube.com/embed/YRwQzKe-51o"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </Element>
    </>
  );
}
