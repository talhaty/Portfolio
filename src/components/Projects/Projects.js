import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SocialMediaApp from "./socialMediaApp";
import Chattyfai from "./chattyfai";
import FreelancingWebsite from "./FreelancingWebsite";
import VotingWeb3 from "./votingWeb3";
import ImageCompression from "./imageCompression";
import WebScraper from "./webscraper";
import GraphVisualizer from "./graphVisualizer";
import Ehospital from "./Ehospital";
import Games from "./Games";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
            
              imgPath={SocialMediaApp}
              isBlog={false}
              title="Social Media App"
              description="Developed a social media app using Java, Firebase, and Android Studio. Implemented features such as user login, registration, posting, liking, commenting, and profile updating. Utilized Firebase as the backend database for seamless data management"
              
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chattyfai}
              isBlog={false}
              title="Chattyfai"
              description="Utilized ReactJS, Express, PostgreSQL, and Nginx to develop a chatbot
              using ChatGpt API and then deployed it.
              Integrated the chatbot on a website to provide instant responses to
              user queries"
              
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FreelancingWebsite}
              isBlog={false}
              title="Freelancing Website"
              description="Developed a Fiverr clone website with HTML, CSS, JavaScript for the
              frontend and NodeJS, ExpressJS for the backend
              Utilized Firebase as the database for efficient data storage and
              retrieval"
              
                         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WebScraper}
              isBlog={false}
              title="Web Scraper"
              description="Extracted 8 million data entries from a dynamic website using Python
              and Selenium
              Implemented threading to significantly improve scraping speed from
              30 days to 4-5 days"
              
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VotingWeb3}
              isBlog={false}
              title="Voting App Web3"
              description="Developed a voting website on Ethereum Blockchain using Solidity,
              React, and Web3JS
              Implemented smart contracts for candidate registration and vote
              counting
              Displayed real-time vote counts for each candidate for transparent and
              secure voting process"
             
      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ImageCompression}
              isBlog={false}
              title="Multispectral Image Compression"
              description="Implemented PCA on multispectral satellite images using Python,
              Scikit-Learn, and Geopandas
              Identified the most useful bands among the images for efficient
              compression
              Analyzed and compared the images to determine information loss"
              
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GraphVisualizer}
              isBlog={false}
              title="Graph Visualizer"
              description="Implemented a graph visualizer using C++, Winforms, and SFML
              Implemented Minimum Spanning Tree, BFS, DFS, Dijkstra, Prim, and
              Kruskal algorithms for graph analysis
              Visualized the edges between nodes for comprehensive graph
              analysis"
              
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ehospital}
              isBlog={false}
              title="E-Hospital"
              description="Developed a web-based E-Hospital project using HTML, CSS, PHP, and
              MySQL
              Implemented features such as patient registration, appointment
              scheduling, and medical records management"
              
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Games}
              isBlog={false}
              title="Games"
              description="Developed various games using C++ and SFML, including
              Minesweeper, Space Invader, Tic Tac Toe, and Hangman
              Implemented game logic, user interface, and scoring system for
              engaging gameplay"
              
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
