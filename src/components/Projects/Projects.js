import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


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
    isBlog={false}
    title="NLP Powered Business Intelligence App - Final Year Project 🚀✨"
    description="Developed an intuitive NLP-based chatbot translating user queries into SQL queries, providing non-technical data access. Designed a user-friendly front-end with interactive features for chatbot interaction, report customization, and data visualization through dynamic graphs and charts. Seamlessly integrated with multiple backend databases, streamlining data retrieval and offering a unified access point. Empowered business owners with faster decision-making, eliminating traditional IT dependencies. Implemented customizable reports and dashboards, enhancing relevance. Leveraged cutting-edge natural language processing (NLP) technologies, including Langchains and OpenAI, for an intelligent chatbot interface."
  />
</Col></Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        

<Col md={4} className="project-card">
  <ProjectCard
    isBlog={false}
    title="Multi-Functional Chatbot with Database, Gmail Integration and Document Summarization"
    description="Developed a versatile chatbot with internet integration, email automation, document summarization, and database query capabilities. Enabled scheduling meetings, replying to emails, and locating specific messages. Utilized vector-based document storage to optimize token usage. Seamlessly integrated with user databases for customized queries."
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    isBlog={false}
    title="Voice Cloning and Deepfake Generation using RVC Model"
    description="Developed and fine-tuned a state-of-the-art RVC (Retrieval based Voice Conversion) model to accurately replicate the voices of renowned personalities in Pakistan. Leveraged advanced AI techniques to create highly realistic deepfake videos, enabling the imitation of these influential figures."
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    isBlog={false}
    title="Procedurally Generated 3D Maze Game in Unity"
    description="Designed and developed an engaging 3D maze game in Unity employing procedural generation techniques for dynamic and challenging maze layouts. Leveraged Procedural Generation for a unique gameplay experience in every playthrough, enhancing replay value and player engagement."
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    isBlog={false}
    title="Hyperspectral Image Super-Resolution via Deep Spatiospectral Attention Convolutional Neural Networks"
    description="Developed a deep learning model for hyperspectral image super-resolution using spatiotemporal attention mechanisms and convolutional neural networks. Goal: Enhance spatial resolution while preserving spectral information. Key components include channel and spatial attention mechanisms, ResNet blocks for feature extraction and fusion. The model takes a low-resolution hyperspectral image and a high-resolution RGB image as input."
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    isBlog={false}
    title="Enhance Moon Image Resolution (inspired by Samsung's AI technology)"
    description="Successfully created a comprehensive solution for enhancing moon images from mobile phones, inspired by Samsung's AI technology. Collected and annotated moon images, leveraged YOLO deep learning model, and implemented an autoencoder for resolution enhancement, achieving visually improved high-resolution outputs. Developed a user-friendly React Native camera application to facilitate moon detection and super-resolution processes."
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    isBlog={false}
    title="Social Media App"
    description="Developed a social media app using Java, Firebase, and Android Studio. Implemented user login, registration, posting, liking, commenting, and profile updating features. Utilized Firebase as the backend database for seamless data management."
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    isBlog={false}
    title="Graph Visualizer"
    description="Developed a Desktop Application using C#, Winforms (.NET), and SFML. Implemented Minimum Spanning Tree, BFS, DFS, Dijkstra, Prim, and Kruskal algorithms for graph analysis. Visualized edges between nodes for comprehensive graph analysis."
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    isBlog={false}
    title="Voting Website - Web3"
    description="Developed a voting website on Ethereum Blockchain using Solidity, React, and Web3JS. Implemented smart contracts for candidate registration and vote counting. Displayed real-time vote counts for each candidate, ensuring transparent and secure voting processes."
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    isBlog={false}
    title="Multispectral Image Compression"
    description="Implemented PCA on multispectral satellite images using Python, Scikit-Learn, and Geopandas. Identified the most useful bands for efficient compression. Analyzed and compared images to determine information loss."
  />
</Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
