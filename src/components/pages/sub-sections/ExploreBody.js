import React from "react";
import "./ExploreBody.css";
import ScriptureSection from "./ScriptureSection";
import { Element } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaLink,
} from "react-icons/fa";

export default function ImportantFigures() {
  return (
    <>
      <Element name="old-testament">
        <div className="break"></div>
        <h1 className="header">Important Figures in Scripture</h1>
        <div className="break"></div>

        <ScriptureSection
          src={"assets/abraham.jpeg"}
          scriptureTitle={"Old Testament"}
          figure="Abraham"
          paragraph1={`Ancient records written by Abraham that came into the possession of
            the Church in 1835. The records and some mummies were discovered in
            Egyptian catacombs by Antonio Lebolo, who willed them to Michael
            Chandler. Chandler exhibited them in the United States in 1835. Some
            friends of Joseph Smith bought them from Chandler and gave them to
            the Prophet, who translated them. Some of these records are now
            found in the Pearl of Great Price.`}
          paragraph2={`Chapter 1 records Abraham’s experiences in Ur of the Chaldees,
        where wicked priests tried to sacrifice him. Chapter 2 tells of his
        journey to Canaan. The Lord appeared to him and made covenants with
        him. Chapter 3 records that Abraham saw the universe and perceived
        the relationships between heavenly bodies. Chapters 4-5 are another
        account of the Creation.`}
          leftSide={true}
          darkMode={false}
          path="/old-testament"
        />
      </Element>
      <Element name="new-testament">
        <ScriptureSection
          src={"assets/matthew.jpeg"}
          scriptureTitle={"New Testament"}
          figure="Matthew"
          paragraph1={`An Apostle of Jesus Christ and the author of the first book in the New Testament. Matthew, a Jew who was a tax collector for the Romans at Capernaum, was probably in the service of Herod Antipas. He was known before his conversion as Levi, son of Alphaeus (Mark 2:14). Soon after his call to become Jesus’ disciple, he gave a feast at which the Lord was present (Matt. 9:9–13; Mark 2:14–17; Luke 5:27–32). Matthew probably had a wide knowledge of the Old Testament scriptures and was able to see the detailed fulfillment of prophecy in the Lord’s life. Of the Apostle’s later life little is known. One tradition asserts that he died a martyr’s death.`}
          paragraph2={`Matthew’s Gospel was probably written initially for the use of Jews in Palestine. It uses many quotations from the Old Testament. Matthew’s chief object was to show that Jesus was the Messiah of whom the Old Testament prophets spoke. He also emphasized that Jesus is the King and Judge of men.`}
          leftSide={false}
          darkMode={true}
          path="/new-testament"
        />
      </Element>
      <Element name="book-of-mormon">
        <ScriptureSection
          src={"assets/mormon-death.jpeg"}
          scriptureTitle={"Book of Mormon"}
          figure="Mormon"
          paragraph1={`A Nephite prophet, military general, and record keeper in the Book of Mormon. Mormon lived about A.D. 311–385 (Morm. 1:2, 6; 6:5–6; 8:2–3). He was a military leader for most of his life, beginning at age fifteen (Morm. 2:1–2; 3:8–12; 5:1; 8:2–3).`}
          paragraph2={`Ammaron instructed Mormon to prepare himself to take charge of the records and record keeping (Morm. 1:2–5; 2:17–18). After recording the history of his own lifetime, Mormon abridged the large plates of Nephi on the plates of Mormon. He later turned this sacred record over to his son Moroni. These plates were part of the record from which Joseph Smith translated the Book of Mormon.`}
          leftSide={true}
          darkMode={false}
          path="/book-of-mormon"
        />
      </Element>
      <Element name="doctrine">
        <ScriptureSection
          src={"assets/joseph-smith.jpeg"}
          scriptureTitle={"Doctrine and Covenants"}
          figure="Joseph Smith Jr."
          paragraph1={`The prophet chosen to restore the true Church of Jesus Christ to the earth. Joseph Smith was born in the state of Vermont in the United States of America and lived from 1805 to 1844.`}
          paragraph2={`As directed by God, on April 6, 1830, Joseph and several others organized the restored Church of Jesus Christ (D&C 20:1–4). Under Joseph’s leadership, the Church grew in Canada, England, and the eastern portion of the United States, especially in Ohio, Missouri, and Illinois. Serious persecution followed Joseph and the Saints wherever they settled. On June 27, 1844, Joseph and his brother Hyrum were martyred in Carthage, Illinois, in the United States of America.`}
          leftSide={false}
          darkMode={true}
          path="/doctrine-and-covenants"
        />
      </Element>
      <Element name="prophet">
        <ScriptureSection
          src={"assets/nelson.png"}
          scriptureTitle={"Modern Day"}
          figure="Presient Russel M. Nelson"
          paragraph1={`Because the Savior offered Himself as the infinite Atonement, you and I have the opportunity—the privilege—to be forgiven when we repent. We can also turn to Him for healing of our hearts, for strength when we are weak, and for help to do things we simply cannot do on our own.`}
          paragraph2={`I testify that He is the living Christ, our Lord and Savior, Exemplar, Redeemer, and Judge.`}
          leftSide={true}
          darkMode={false}
          path="/"
        />
      </Element>
      <Element name="next">
        <div className="next-banner">
          <h1 className="next-header">What's Next?</h1>
          <p className="next-share-text">
            Share this with your friends and family.
          </p>
          <div className="share-buttons">
            <FaFacebook /> <FaInstagram /> <FaTwitter /> <FaLinkedin />
          </div>
        </div>
      </Element>
    </>
  );
}
