import React from "react";
import {   Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from "reactstrap"
// const ProjectCard = props => {
//   return (
//     <Row>
//     <a class="card-title blue-text center hoverable" href="https://github.com/AdenasGittinIt/JS-Code-Quiz" target="_blank" rel="noopener noreferrer">JS-Code-Quiz</a>
//     <a class="card-title blue-text center hoverable" href="https://github.com/AdenasGittinIt/deedlist" target="_blank" rel="noopener noreferrer">deedlist</a>
//     <a class="card-title blue-text center hoverable" href="https://github.com/AdenasGittinIt/Express-Yourself" target="_blank" rel="noopener noreferrer">express yo self</a>
//     <a class="card-title blue-text center hoverable" href="https://github.com/AdenasGittinIt/Travel-Link" target="_blank" rel="noopener noreferrer">travelink</a>
//     <a class="card-title blue-text center hoverable" href="https://github.com/AdenasGittinIt/Weather-Dashboard" target="_blank" rel="noopener noreferrer">weather-dashboard</a>
//   </Row>
//   )
// }


const ProjectCard = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
        <img src={`${process.env.PUBLIC_URL}/assets/images/code quiz.png`} alt="code quiz"/>
        <CardBody>
          <CardText></CardText>
          <CardLink class="card-title blue-text center hoverable" href="https://github.com/AdenasGittinIt/JS-Code-Quiz" target="_blank" rel="noopener noreferrer">JS-Code-Quiz</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectCard