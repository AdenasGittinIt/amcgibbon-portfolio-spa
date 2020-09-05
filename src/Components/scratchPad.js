// This is the app with the project cards.  Saving here so I don't have to memorize the structure while I work on other  components


import React from "react";
import { Container, Col, Row, Table} from "reactstrap";
import NavBar from "./Components/NavBar";
import Adena from "./Components/Adena";
import Footer from "./Components/Footer";
import ProjectCards from "./Components/ProjectCards";


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
            <ProjectCards/>
          </Col>
        </Row>

        <Row>
          <Footer/>
        </Row>
      </Container>
  );
}

export default App;

//this is my first option for the contact card

{/* <ListGroup>
<ListGroupItem tag="a" href="#" action>
  <Row>
    <Col lg="1">
      <img src={`${process.env.PUBLIC_URL}/assets/images/email.png`} alt="email icon"></img>
    </Col>
    <Col>
      <h2>Email</h2>
    </Col>
  </Row>
</ListGroupItem>
<ListGroupItem tag="a" href="#" action>
  <Row>
    <Col lg="1">
      <img src={`${process.env.PUBLIC_URL}/assets/images/LI-In-Bug.png`} alt="linkedin icon"></img>
    </Col>
    <Col >
      <h2>LinkedIn</h2>
    </Col>
  </Row>
</ListGroupItem>        
<ListGroupItem tag="a" href="#" action>
  <Row>
    <Col lg="1">
      <img src={`${process.env.PUBLIC_URL}/assets/images/GitHub.png`} alt="github icon"></img>
    </Col>
    <Col>
      <h2>GitHub</h2>
    </Col>
  </Row>
</ListGroupItem>
</ListGroup> */}


//This is my second option for the contact card

const Example = (props) => {
  return (
    <div>
    <Table hover borderless>
      <tbody>
        <tr>
          <th scope="row">

          </th>
          <td>
            <h2> Email Me!</h2>
          </td>
        </tr>
        <tr>
          <th scope="row">
            <a href="https://www.linkedin.com/in/adenamcgibbon" target="_blank">
              <img src={`${process.env.PUBLIC_URL}/assets/images/LI-In-Bug.png`} alt="linkedin icon"></img>
            </a>
          </th>
          <td>
            <h2>Find me on LinkedIn</h2>
          </td>
        </tr>
        <tr>
          <th scope="row">
            <a href="https://github.com/AdenasGittinIt" target="_blank" class="collection-item blue-text">
              <img src={`${process.env.PUBLIC_URL}/assets/images/GitHub.png`} alt="github icon"></img>
            </a>
          </th>
          <td>
          <h2>Check out my GitHub</h2>
          </td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
} 

