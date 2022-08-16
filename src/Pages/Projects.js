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
              imgPath="https://github.com/daniyal4engg/Daniyal-Portfolio/blob/master/src/project_screenshots/apartclr.jpg?raw=true"
              title="Apartment Managment System"
              description="Apartment Managment System for tracking and storing resident information where an admin can update Flat details acording to owner and tenant."
              tech="Tech-Stacks"
              techD="Html | Css | Javascript | React | Chakra  | Node.js | Express.js | MongoDB "
              link="https://apartment-front-end.vercel.app/"
              a="https://github.com/daniyal4engg/apartment-front-end"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/daniyal4engg/Daniyal-Portfolio/blob/master/src/project_screenshots/apartclr.jpg?raw=true"
              title="BobbiBrownCosmetics E-Commerce Web App"
              description="An E-Commerce website that allows people to buy makeup products & skincare essentials to enhance natural beauty at a brick-and-mortar location."
              tech="Tech-Stacks"
              techD="Html | Css | Javascript | React | Chakra  | Bootstrap "
              link="https://bobbi-brown-cosmatics-app.vercel.app/"
              a="https://github.com/daniyal4engg/BobbiBrownCosmatics-app"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/daniyal4engg/Daniyal-Portfolio/blob/master/src/project_screenshots/myth.png?raw=true"
              title="mytheresa.com clone"
              description="This is an E-Commerce website which speciaizes in selling clothes and styling products. The website provides 800 brands and 33,000 products of different types of clothes, watches, shoes etc."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css "
              link="https://mytheresashp.netlify.app/"
              a="https://github.com/daniyal4engg/mytheresa_clone"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/daniyal4engg/Daniyal-Portfolio/blob/master/src/project_screenshots/zee51.png?raw=true"
              title="Zee5.com clone"
              description="An Over the top Streaming service to enjoy over the internet, watch movies, series, and other entertaining content for free or by paid subscription by clicking on favorite category."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css | MongoDb | Express "
              link="https://zee5clone.netlify.app/"
              a="https://github.com/daniyal4engg/Zee5.com_clone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
