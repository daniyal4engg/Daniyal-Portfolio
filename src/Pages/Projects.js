import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";

function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath=""
              title="Flipkart clone"
              description="This is an E-Commerce website which speciaizes in selling clothes and styling products. The website provides 800 brands and 33,000 products of different types of clothes, watches, sunglasses, shoes etc."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css | MongoDb | Express "
              link="https://flipkart01-clone.netlify.app/"
              a="https://github.com/Rushikesh7997/Flipkart-Clone"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Rushikesh7997/Sreenshots/blob/main/Tie-tac-toe%20game%201.PNG?raw=true"
              title="Tic-Tac-Toe"
              description="Play the classic Tic-Tac-Toe game (also called Noughts and Crosses) for free online with one or two players.It is Mind refreshing game It is created with the help of JavaScript Html and Css."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css "
              link="https://dainty-semifreddo-4e54b0.netlify.app/"
              a="https://github.com/Rushikesh7997/Tic-Tac-Toe"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Rushikesh7997/Sreenshots/blob/main/to-do%201.PNG?raw=true"
              title="To-Do-List"
              description="ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do. It is helpful in planning our daily schedules. It is created by JavaScript, Html, Css languages."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css "
              link="https://iridescent-granita-ec6794.netlify.app/"
              a="https://github.com/Rushikesh7997/To-Do-List-App"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
