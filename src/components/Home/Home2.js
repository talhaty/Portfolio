import React from "react";
import Lottie from 'lottie-react';
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.json";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Introducing a rising star in the world of 
            <i>
                <b className="purple"> computer science! </b>
            </i>  
            Currently studying at the prestigious 
            <i>
                <b className="purple"> Ghulam Ishaq Khan Institute in Topi, Pakistan </b>
            </i>  
            , this individual is a force to be reckoned with. With a CGPA of 
            <i>
                <b className="purple"> 3.3/4.00 </b>
            </i> 
            and a coveted spot on the 
            <i>
                <b className="purple"> Dean's Honor List </b>
            </i> 
            , they have demonstrated a level of excellence that is truly unparalleled. But don't let their impressive academic achievements fool you.
            <br /> 
            <br />
            This individual is also a tech whiz with expertise in 
            <i>
                <b className="purple"> MERN STACK </b>,
            </i> 
            <i>
                <b className="purple"> DEEP LEARNING </b>,
            </i> 
            <i>
                <b className="purple"> APP DEVELOPMENT </b>,
            </i> 
            <i>
                <b className="purple"> WEB SCRAPING </b>
            </i> 
            , and more. Their passion for innovation and natural 
            curiosity make them a valuable asset to any team. So if you're looking for a rising star to join your ranks, look no further than this talented 
            and driven individual! 🤷‍♂️
              <br />
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <Lottie animationData={myImg} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/talhaty"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/talha-yunus-8169aa182/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/teewhy.iso/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
