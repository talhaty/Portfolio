import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Talha Yunus </span>
            from <span className="purple"> Abbottabad, Pakistan.</span>
            <br />I am a third year student at <span className="purple">Ghulam Ishaq Khan Institute</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
            🎥 Watching Anime
            </li>
            <li className="about-activity">
            🎮 Playing Video Games
            </li>
            <li className="about-activity">
            ✈️ Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "There is no place like 
            <i>
                <b className="purple"> 127.0.0.1 </b>
            </i>   
            !"{" "}
          </p>
          <footer className="blockquote-footer">TY.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
