import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";


function About() {
  return (
    <Container fluid className="about-section">
      
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
            className="about-img"
          >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              The space I operate in
            </h1>
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know what <strong className="purple">I do</strong>
            </h1>
            <Aboutcard />
          </Col>
        </Row>

    </Container>

  );
}

export default About;
