import React, {useState} from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiAndroidstudio,
  SiJupyter,

} from "react-icons/si";
import "./Techstack.css"

function Toolstack() {
  const toolStackItems = [
    { icon: <SiLinux />, title: "Linux" },
    { icon: <SiVisualstudiocode />, title: "VS Code" },
    { icon: <SiPostman />, title: "Postman" },
    { icon: <SiAndroidstudio />, title: "Android Studio" },
    { icon: <SiJupyter />, title: "Jupyter Notebook" },
  ]

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolStackItems.map((item, index) => (
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

export default Toolstack;
