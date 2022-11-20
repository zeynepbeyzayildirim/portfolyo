import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import webproject1 from "../assets/img/webproject-img1.png";
import webproject2 from "../assets/img/webproject-img2.png";
import webproject3 from "../assets/img/webproject-img3.png";
import uix1 from "../assets/img/uix-img1.png";
import uix2 from "../assets/img/uix-img2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  
  const projects = [
    {
      title: "Animega",
      description:
        "This project was written with flutter technology. It was broadcast in European countries as the social media of anime lovers.It is possible to share photos, videos and blogs in chat rooms, and chat in groups in chat rooms.",
      imgUrl: projImg1,
    },
    {
      title: "Denebi.app",
      description:
        "This project was made using flutter technology. I was directly involved in the development of all stages of this project as well as being an idea generator. This project creates the campaign guide of brands and businesses and allows users to collect points as a result of participating in these campaigns and sweepstakes. they can have any product they want. In the application, features such as location, notification, verification by sms, QR-Scanner are used.",
      imgUrl: projImg4,
    },
    {
      title: "qupo",
      description:
        "This project was made using Java-Swift languages. It is an e-commerce application waiting to be published in Germany and Bulgaria. It is an e-commerce application that appeals to many sectors from restaurants to markets, from doner shops to hairdressers. It has many features. In this project, location operations, sending notification with one signal, reading qupon with QR scanner and special day sms have been thought through in detail.",
      imgUrl: projImg3,
    },

    {
      title: "Rocoo",
      description:
        "Rocoo is a logistics application. Flutter technology is used. It is an application developed to provide the minimum fuel optimization and sorts the packages of logistics companies in Germany in a way that creates the shortest route for the drivers. Google maps technologies are used while making this project.",
      imgUrl: projImg2,
    },
    
  ];

  const web_projects = [
    {
      title: "Starwars",
      description:"I made this project using React JS technology. I got the starship data from SWAPI to list the starships from the Star Wars universe. It consists of pages with filtering, more loading and detail information. I used particle effect for background. I used tailwindCss library for frontend.",
      imgUrl: webproject1,
      linkUrl:<a href="http://zeynepbeyzayildirim.tech/">Tıkla</a>
    },
    {
      title: "Denebi.app-web",
      description:
        "This project was made using React JS technology. I used css, boostrap in the Frontend part.",
      imgUrl: webproject2,
    },
    {
      title: "Weather-ReactJS",
      description:
        "This project was made using React JS technology. I used css in the Frontend. A weather application consisting of a page showing the weather according to the instant location by pulling the data from https://www.weatherbit.io/api. shows weekly.",
      imgUrl: webproject3,
      
    },
  ];

  const ui_ux_projects = [
    {
      title: "YVES ROCHER",
      description: "MOBİLE APP DESIGN",
      imgUrl: uix1,
    },
    {
      title: "Rocoo",
      description: "WEB DESIGN",
      imgUrl: uix2,
    },
    {
      title: "Weather-ReactJS",
      description:
        "This project was made using React JS technology. I used css in the Frontend. A weather application consisting of a page showing the weather according to the instant location by pulling the data from https://www.weatherbit.io/api. shows weekly.",
      imgUrl: webproject3,
    },
  ];



  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <h2>Projects</h2>
                  <p>
                    I pay attention to use design patterns while developing my
                    projects. I pay attention to use the git source control
                    systems and project monitoring applications (Jira, ClickUp,
                    Trello) during the project development stages. I can say
                    that I have experience in Flutter, ReactJS libraries. I use
                    design programs such as Adobe XD when I need it, and I
                    include it in the development process of the projects.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Mobile App</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Web-Frontend</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">UI/UX Design</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {web_projects.map((web_projects, index) => {
                            return (
                              <ProjectCard key={index} {...web_projects} />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {ui_ux_projects.map((ui_ux_projects, index) => {
                            return (
                              <ProjectCard key={index} {...ui_ux_projects} />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
