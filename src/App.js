import React from "react";
import { Container, Col, Row } from "reactstrap";
import NavBar from "./Components/NavBar";
import Adena from "./Components/Adena";
import Footer from "./Components/Footer";
import ProjectCard from "./Components/ProjectCard";


function App() {
  return (
      <Container className="App">
        <Row>
          <NavBar/>
        </Row>
        <Row>
          <Col lg={6}>
            <Adena/>
          </Col>
          <Col lg={4}>
            <ProjectCard/>
          </Col>
        </Row>    
      </Container>
  );
}

export default App;
