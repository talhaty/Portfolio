import React from "react";
import Lottie from "lottie-react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.json";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
  <h1 style={{ fontSize: "2.6em" }}>
    🚀 EMBRACE INNOVATION WITH ME: <span className="purple"> YOUR FUTURE TECH WIZARD </span> 🌐
  </h1>
  <p className="home-about-body">
    Hey there! 🌟 I'm an <b className="purple">enthusiastic Computer Science major</b>, on a mission to turn ideas into groundbreaking solutions. 💻 My journey has been a thrilling ride through website development, game creation, and the fascinating realms of AI and Data Science.
    <br />
    <br />
    My passion lies in leveraging technology to boost functionality and intelligence. 🤖 Whether it's diving into the world of <b className="purple">MERN Stack</b>, exploring <b className="purple">Generative AI</b>, or creating seamless app experiences with <b className="purple">Flutter & Dart</b> and <b className="purple">React Native</b>, I've got it covered.
    <br />
    <br />
    But wait, there's more! 🧠 <b className="purple">AI and Data Science</b> are my true calling. I'm captivated by their ability to teach computers, unravel information, and even enhance communication through nifty <b className="purple">chatbots</b>. Seeking a role that challenges me to dive deeper into these realms and make a meaningful contribution.
    <br />
    <br />
    Here's a sneak peek into my digital arsenal: <b className="purple">MERN Stack, AI, Deep Learning, Selenium</b> for Web Scraping, <b className="purple">Git</b> wizardry, <b className="purple">Unity 3D</b>, a language buffet featuring <b className="purple">C++, C, Java, Python, and JavaScript</b>, database mastery with <b className="purple">MySQL, SQLite, Oracle</b>, and DevOps sorcery with <b className="purple">AWS and Git</b>. 🚀
    <br />
    <br />
    Ready to bring the future to your team's doorstep. Let's create, innovate, and shape the digital frontier together! 🚀✨
    <br />
    <br />
   
  </p>
</Col>



          <Col md={4} className="myAvtar">
            
              <Lottie animationData={myImg} loop={true} autoPlay={true}/>
            
          </Col>
        </Row>
        <Row style={{marginTop: "5vh", marginBottom: "7vh"}}>
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
