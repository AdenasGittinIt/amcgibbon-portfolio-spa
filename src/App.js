import React from "react";
import { Container, Col, Row } from "reactstrap";
import NavBar from "./Components/NavBar";
import Adena from "./Components/Adena";
import Footer from "./Components/Footer";
import ProjectCards from "./Components/ProjectCards";
import Example from "./Components/ContactCards"

function App() {
  return (
      <Container fluid={true} className="App">
        <Row>
          <Col>
            <NavBar/>
          </Col>
        </Row> 
        <Row>
          <Col className="col align-self-center">
            <Adena/>
          </Col>
          <Col>
            <ProjectCards />
          </Col>
        </Row>

        <Row>
          <Footer/>
        </Row>
      </Container>
  );
}

export default App;
