import React from "react";
import { Card, CardImg, CardBody, CardLink, CardDeck } from "reactstrap"

const ProjectCard = (props) => {
  return (
    <div >
      <CardDeck>
        <Card body className="text-center">
          <CardImg top width="100%" src={`${process.env.PUBLIC_URL}/assets/images/code quiz.png`} alt="Card image cap" />
          <CardBody>
            <CardLink  href="https://adenasgittinit.github.io/JS-Code-Quiz/" target="_blank" >JS-Code_Quiz</CardLink>
            <CardLink  href="https://github.com/AdenasGittinIt/JS-Code-Quiz" target="_blank">GitHub</CardLink>
          </CardBody>
        </Card>

        <Card body className="text-center">
          <CardImg top width="100%" src={`${process.env.PUBLIC_URL}/assets/images/deedlist.png`} alt="Card image cap" />
          <CardBody>
              <CardLink href="https://deedlist.herokuapp.com/" target="_blank">DeedList</CardLink>
              <CardLink href="https://github.com/AdenasGittinIt/deedlist" target="_blank" rel="noopener noreferrer">GitHub</CardLink>
          </CardBody>
        </Card>       
      </CardDeck>

    <CardDeck>
      <Card body className="text-center">
        <CardImg top width="100%" src={`${process.env.PUBLIC_URL}/assets/images/note taker.png`} alt="Card image cap" />
        <CardBody>
          <CardLink  href="https://express-yourself-note-taker.herokuapp.com/" target="_blank" >Express Yourself Self</CardLink>
          <CardLink  href="https://github.com/AdenasGittinIt/Express-Yourself" target="_blank">GitHub</CardLink>
        </CardBody>
      </Card>

      <Card body className="text-center">
        <CardImg top width="100%" src={`${process.env.PUBLIC_URL}/assets/images/TraveLink.png`} alt="Card image cap" />
        <CardBody>
            <CardLink href="https://adenasgittinit.github.io/Travel-Link/" target="_blank">TraveLink</CardLink>
            <CardLink href="https://github.com/AdenasGittinIt/Travel-Link" target="_blank">GitHub</CardLink>
        </CardBody>
      </Card>
    </CardDeck>

    <CardDeck>
      <Card body className="text-center">
        <CardImg src={`${process.env.PUBLIC_URL}/assets/images/weather dash.png`} alt="Card image cap" />
        <CardBody>
            <CardLink  href="https://adenasgittinit.github.io/Weather-Dashboard/" target="_blank" >Weather Dashboard</CardLink>
            <CardLink href="https://github.com/AdenasGittinIt/Weather-Dashboard" target="_blank" >GitHub</CardLink>
        </CardBody>
      </Card>

      <Card body className="text-center">
        <CardImg src={`${process.env.PUBLIC_URL}/assets/images/plebisite.png  `} alt="Card image cap" />
        <CardBody>
            <CardLink href="https://git.heroku.com/plebisite.git" target="_blank" >plebiSite</CardLink>
            <CardLink href="https://github.com/AdenasGittinIt/plebisite2" target="_blank" >GitHub</CardLink>
        </CardBody>
      </Card>
    </CardDeck>
    </div>
  );
};

export default ProjectCard