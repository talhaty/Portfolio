import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
    Greetings! I'm <span className="purple">Talha Yunus</span>, proudly representing Pakistan and currently immersed in my final year at the prestigious <span className="purple">Ghulam Ishaq Khan Institute</span>.
    <br />
    <br />
    But beyond the coding world, there's more to me! 🚀✨ I find joy in:
  </p>
  <ul>
    <li className="about-activity">
      🎥 Watching Anime
    </li>
    <li className="about-activity">
      🎮 Playing Video Games
    </li>
    <li className="about-activity">
      ✈️ Exploring New Places
    </li>
  </ul>
  <p style={{ textAlign: "justify" }}>
    Let's connect and create something extraordinary together! 🌟🚀
  </p>
</blockquote>


      </Card.Body>
    </Card>
  );
}

export default AboutCard;
