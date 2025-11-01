import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Timeline from "../../Timeline";
import "../../Timeline.css";
import "../../Timeline.css";
import SkillsSection from "./SkillsSection";
import Carousel from "../../Carousel";
import About from "../About/About";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Regional Product Manager driving innovation in Payment Gateway solutions
            </h1>
            <p className="home-about-body">
              I'm a results-oriented product leader with <b className="purple">17+ years</b> of deep expertise in the payments ecosystem. 
              <br />
              <br />
              As a Regional Product Manager at <b className="purple">Mastercard</b>, I drive the evolution of our Payment Gateway platform, focusing on creating seamless API integration experiences that empower merchants and partners across <b className="purple">Asia-Pacific and North America</b>.
              <br />
              <br />
              My background spans the full product lifecycle—from <b className="purple">strategic planning</b> and <b className="purple">technical architecture</b> to business analysis and go-to-market execution.
              <br />
              <br />
              I specialize in translating complex technical capabilities into user-friendly solutions that scale across regions and drive measurable business impact.
              <br />
              <br />
              Currently, I'm passionate about exploring how &nbsp;
              <i>
                <b className="purple">Generative AI</b> can unlock new possibilities in{" "}
                <b className="purple">
                  payment innovation, fraud prevention, and developer experience enhancement.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
      <Container>
        <About />
      </Container>  
      <Container>
        <SkillsSection/>
      </Container>
      <Container>
        <Timeline></Timeline>
      </Container>
      <Container>
        <h1 className="title" style={{ fontSize: "2.6em" }}>..</h1> 
      </Container>
      <Container>
        <h1 className="title" style={{ fontSize: "6em" }}>GOOD TIMES!!</h1>
        <Carousel />
      </Container>
    </Container>
  );
}

export default Home2;
