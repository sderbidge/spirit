import React from "react";
import "./NewTestament.css";

export default function NewTestament() {
  return (
    <>
      <div className="new-testament-hero">
        <h1>The New Testament</h1>
      </div>
      <div className="new-testament-body">
        <div className="paragraph-container">
          <p>
            A collection of inspired writings (originally in Greek) about the
            life and ministry of Jesus Christ, the Apostles, and other followers
            of Jesus Christ. The New Testament is commonly divided into the
            Gospels, the Acts of the Apostles, Paul’s epistles, the general
            epistles, and the book of Revelation.
          </p>
          <p>
            The four Gospels—the books of Matthew, Mark, Luke, and John—are
            accounts of the life of Christ. The book of Acts records the history
            of the Church and the Apostles, especially Paul’s missionary
            travels, after Christ’s death. Paul’s letters give instruction to
            Church leaders and members. The other letters were written by other
            Apostles and give additional counsel to the early Saints. The book
            of Revelation, which was written by the Apostle John, contains
            mostly prophecies pertaining to the last days.
          </p>
        </div>
      </div>
    </>
  );
}
