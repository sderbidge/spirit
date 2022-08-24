import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC gospel writers!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="../assets/abraham.jpeg"
              text="Explore Prophets from the Old Testament."
              label="Old Testament"
              path="/old-testament"
              imagePosition="center 15%"
            />
            <CardItem
              src="../assets/matthew.jpeg"
              text="Explore Prophets in the New Testament"
              label="New Testament"
              path="/new-testament"
              imagePosition="center top"
            />
            <CardItem
              src="../assets/nephite-prophets.jpeg"
              text="Explore Prophets from the Book of Mormon Another Testament of Jesus Christ."
              label="Book of Mormon"
              path="/book-of-mormon"
              imagePosition="center 15%"
            />
            <CardItem
              src="../assets/joseph-smith.jpeg"
              text="Explore Prophets from the Restoration."
              label="Doctrine &amp; Covenants"
              path="/doctrine-and-covenants"
              imagePosition="center top"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
