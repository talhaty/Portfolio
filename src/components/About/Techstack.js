import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJava,
  SiAmazonaws,
  SiFlutter,
  SiGooglecloud,
  SiDocker,
  SiTerraform,
  SiSelenium,
  SiUnity,
} from "react-icons/si";

import "./Techstack.css"

function Techstack() {
  const techStackItems = [
    { icon: <CgCPlusPlus />, title: "C++" },
    { icon: <DiJavascript1 />, title: "JavaScript" },
    { icon: <DiNodejs />, title: "Node.js" },
    { icon: <DiReact />, title: "React" },
    { icon: <DiMongodb />, title: "MongoDB" },
    { icon: <SiExpress />, title: "Express.js" },
    { icon: <DiGit />, title: "Git" },
    { icon: <SiFirebase />, title: "Firebase" },
    { icon: <DiPython />, title: "Python" },
    { icon: <SiHtml5 />, title: "HTML5" },
    { icon: <SiCss3 />, title: "CSS3" },
    { icon: <SiJava />, title: "Java" },
    { icon: <SiAmazonaws />, title: "AWS" },
    { icon: <SiFlutter />, title: "Flutter" },
    { icon: <SiGooglecloud />, title: "Google Cloud" },
    { icon: <SiDocker />, title: "Docker" },
    { icon: <SiTerraform />, title: "Terraform" },
    { icon: <SiSelenium />, title: "Selenium" },
    { icon: <SiUnity />, title: "Unity" },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
 
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStackItems.map((item, index) => (
        <Col
          key={index}
          xs={4}
          md={2}
          className={`tech-icons ${hoveredIndex === index ? 'hovered' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onTouchStart={() => handleMouseEnter(index)}
          onTouchEnd={handleMouseLeave}
        >
          {item.icon}
          {hoveredIndex === index && (
            <div className="tech-card">
              {item.title}
            </div>
          )}
        </Col>
      ))}
    </Row>
  );
};

export default Techstack;

