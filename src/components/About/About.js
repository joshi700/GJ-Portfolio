import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/MyRole.png";


function About() {
  return (
    <Container fluid className="about-section">
      
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
            className="about-img"
          >
            <div className="section-title-wrapper" style={{ paddingBottom: "20px" }}>
              <h1 className="section-heading-styled">The space I operate in</h1>
            </div>
            <img src={laptopImg} alt="about" className="img-fluid about-role-img" />
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
            <div className="section-title-wrapper">
              <h1 className="section-heading-styled">
                Know what <strong className="purple">I do</strong>
              </h1>
            </div>
            <Aboutcard />
          </Col>
        </Row>

    </Container>

  );
}

export default About;
