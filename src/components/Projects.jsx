import React from "react";
import { Element } from "react-scroll";
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import StyledCard from "./StyledCard";

const customProjects = [
  {
    id: 1,
    name: "PWA Website",
    description:
      "Website developed for Non-profit organization - Patient's Welfare Association",
    image: "./PWA.png",
    url: "https://pwa-chk.org.pk/about-us/",
  },
  {
    id: 2,
    name: "CreditBook Mobile App",
    description: "Mobile application for the FinTech company - CreditBook",
    image: "./CreditBook.png",
    url: "https://play.google.com/store/apps/details?id=com.creditbookpk.creditbook&hl=en&gl=US&pli=1",
  },
  {
    id: 3,
    name: "DashSign",
    description: "Web Application for a digital Signing Platform - DashSign",
    image: "./DashSign2.png",
    url: "https://app.dashsign.co/",
  },
  {
    id: 3,
    name: "Storius",
    description:
      "Mobile Application for a travel diary and aid platform - Storius",
    image: "./Storius.png",
    url: "https://play.google.com/store/apps/details?id=com.storius.storiusapp",
  },
  {
    id: 5,
    name: "MyReads App",
    description: "Personal Project for tracking your favorite books - MyReads",
    image: "./MyReads.png",
    url: "https://github.com/AltafShk/MyReads-App",
  },
  {
    id: 6,
    name: "FlashCards App",
    description:
      "Personal Project for a flashcards app for memorizing - FlashCards",
    image: "",
    url: "https://github.com/AltafShk/Flashcards-App",
  },
];

export default function Projects() {
  const [mainProjects] = React.useState(customProjects);

  return (
    <Element name={"Projects"} id="projects">
      <section className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Projects</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          {mainProjects.length !== 0 && (
            <>
              <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
                {mainProjects.map(function ({
                  id,
                  name,
                  description,
                  image,
                  url,
                  demo,
                }) {
                  return (
                    <Col key={id}>
                      <StyledCard
                        name={name}
                        description={description}
                        image={image}
                        url={url}
                        demo={demo}
                      />
                    </Col>
                  );
                })}
              </Row>
            </>
          )}
        </Container>
      </section>
    </Element>
  );
}
