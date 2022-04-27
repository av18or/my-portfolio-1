import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { AiFillBug, AiFillPieChart } from "react-icons/ai";
import { BsChatTextFill } from "react-icons/bs";

export default function Projects() {
  // styles
  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "35px",
  };
  const cardStyle = { display: "flex", textAlign: "center", alignItems: "center" };
  const imgStyle = { margin: "20px", fontSize: 90 };

  // jsx section
  return (
    <div style={wrapperStyle} id='projects'>
      <h2 style={{ marginTop: "65px" }}>PROJECTS</h2>
      <CardGroup>
        <Card style={cardStyle}>
          <AiFillBug style={imgStyle} />
          <Card.Body>
            <Card.Title>Bug Tracker</Card.Title>
            <Card.Text>
              This app has user authentication, plus user and administrator login
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>ReactJS, MongoDB, CSS, Bootstrap</small>
          </Card.Footer>
        </Card>
        <Card style={cardStyle}>
          <AiFillPieChart style={imgStyle} />
          <Card.Body>
            <Card.Title>Payroll Portal</Card.Title>
            <Card.Text>This app creates users and generates printable reports</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>ReactJS, MongoDB, CSS, Bootstrap</small>
          </Card.Footer>
        </Card>
        <Card style={cardStyle}>
          <BsChatTextFill style={imgStyle} />
          <Card.Body>
            <Card.Title>Marketing Website</Card.Title>
            <Card.Text>
              This app allows users to comment, and add items to a shopping cart action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>ReactJS, MongoDB, CSS, Bootstrap</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}