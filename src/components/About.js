import React from "react";

// bootstrap
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// images
import deaf from "../images/deaf.png";
import banking from "../images/banking.png";
import instructor from "../images/instructor.png";

export default function About() {
  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",

    textAlign: "center",
    marginTop: "35px",
  };

  const cardStyle = { display: "flex", justifyContent: "center", alignItems: "center" };

  return (
    <div style={wrapperStyle} id='about'>
      <h2 style={{ marginTop: "65px" }}>ABOUT</h2>

      <Accordion>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Accessibility</Accordion.Header>
          <Accordion.Body>
            <Card style={{ display: "flex", flexDirection: "row" }}>
              <Card.Img variant='top' src={deaf} alt='deaf person with cochlear implant' />
              <Card.Title style={cardStyle}>
                With a deaf mother, communicating effectively is everything. From this, I pursue
                exploring code for accessibility, insightful UI/UX, and how I can better bridge
                information to people.
              </Card.Title>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>Finance</Accordion.Header>
          <Accordion.Body>
            <Card style={{ display: "flex", flexDirection: "row" }}>
              <Card.Title style={cardStyle}>
                Student loan debt is a huge problem. I worked to help solve it for families by
                programming a college value calculator and one-click template emails. This impact
                sparked me into coding.
              </Card.Title>
              <Card.Img variant='top' src={banking} alt='person watering plants where ideas grow' />
            </Card>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
          <Accordion.Header>Instructor</Accordion.Header>
          <Accordion.Body>
            <Card style={{ display: "flex", flexDirection: "row" }}>
              <Card.Img variant='top' src={instructor} alt='software engineer coding at a desk' />
              <Card.Title style={cardStyle}>
                I teach full-stack software engineering with a focus in Javascript, CSS, React,
                Node, Express, MongoDB, and SQL. I continue to further my skills to build great
                websites and apps.
              </Card.Title>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
